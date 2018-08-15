// @flow
/* eslint-disable camelcase */
import EventEmitter from 'events';

import merge from 'merge';

import globals from './globals';
import logger from './logger';
import type { ClientOptions, Options, Stats, QuerySet, QuerySubject } from './typedefs';
import { Css } from './consts';
import * as dom from './dom';
import * as selection from './selection';
import * as factory from './factory';
import TextContent from './textcontent';
import HighlightMarkers from './highlightmarkers';
import RangeHighlighter from './rangehighlighter';
import RangeUnhighlighter from './rangeunhighlighter';
import TextRange from './textrange';
import Cursor from './cursor';

/**
 * Main class of the HTML Highlighter module, which exposes an API enabling
 * clients to control all the features supported related to highlighting and
 * text selection.
 *
 * Emits the following events:
 *
 *  - refresh: text content refreshed
 *  - add: query set added
 *  - append: queries added to query set
 *  - remove: query set removed
 *  - enable: query set enabled
 *  - disable: query set disabled
 *  - clear: all query sets removed and cursor cleared
 */
class HtmlHighlighter extends EventEmitter {
  options: Options;
  cursor: Cursor;
  stats: Stats;
  lastId: number;
  content: TextContent;
  queries: Map<string, QuerySet>;
  markers: HighlightMarkers;
  state: Map<number, any>;

  // Default options.  Note that we cannot declare this map as `Options` since not all attributes
  // are defined.
  static defaults: ClientOptions = {
    // Sometimes it is useful for the client to determine how to bring an element into view via
    // scrolling. If `scrollTo` is set, then it is called as a function with a `Node` to scroll
    // to.
    scrollTo: null,
    maxHighlight: 1,
    useQueryAsClass: false,
    normalise: true,
  };

  constructor(options: ClientOptions) {
    super();

    // Merge default options
    this.options = merge({}, HtmlHighlighter.defaults, options);

    this.queries = new Map();
    this.markers = new HighlightMarkers();
    this.state = new Map();

    // TODO: rename attribute to something else that makes it clear it refers to the next highlight
    // id.
    this.lastId = 0;

    // TODO: refactor the following map.  In particular, the `highlight` attribute BADLY needs to
    // become a class attribute of its own since it refers to the NEXT query set id.
    this.stats = {
      queries: 0,
      total: 0,
      highlight: 0,
    };

    const { container } = options;
    if (container == null) {
      this.options.container = window.document.body;
    } else if (container instanceof HTMLElement) {
      this.options.container = container;
    }

    this.cursor = new Cursor(this.markers);

    // Start by refreshing the internal document's text representation, which initialises
    // `this.content`.
    this.refresh();
    logger.log('instantiated');
  }

  /**
   * Refreshes the internal representation of the text.
   *
   * Should only be invoked when the HTML structure mutates.
   */
  refresh() {
    this.content = new TextContent(this.options.container);
    if (globals.debugging) {
      this.assert();
    }
    this.emit('refresh');
  }

  /**
   * Create a query set by the name and containing one or more queries
   *
   * If the query set already exists, its contents and highlights are firs destroyed and new one
   * created.  Optionally, it is possible to specify a number of highlights to reserve for the
   * query set.
   *
   * Note that, at this point in time, only string queries and XPath representations are supported.
   *
   * @param {string} name - Name of the query set
   * @param {Array<any>} queries - Array containing individual queries to highlight
   * @param {bool} enabled - If explicitly `false`, query set is disabled; otherwise enabled
   * @param {number} [reserve] - Number of highlights to reserve for query set
   *
   * @returns {HtmlHighlighter} Self instance for chaining
   */
  add(
    name: string,
    queries: Array<any>,
    enabled: boolean = true,
    reserve: number | null = null
  ): HtmlHighlighter {
    enabled = enabled === true;
    if (typeof reserve !== 'number' || reserve < 1) {
      reserve = null;
    }

    // Remove query set if it exists
    if (this.queries.has(name)) {
      this.remove(name);
    }

    const querySet: QuerySet = {
      name,
      enabled,
      queryId: this.stats.highlight,
      highlightId: this.lastId,
      length: 0,
      reserve: null,
    };

    this.queries.set(name, querySet);

    const count = this.add_queries_(querySet, queries, enabled);
    if (reserve != null) {
      if (reserve > count) {
        this.lastId = reserve;
        querySet.reserve = reserve;
      } else {
        logger.error('invalid or insufficient reserve specified');
        querySet.reserve = count;
      }
    } else {
      this.lastId += count;
    }

    // Update global statistics
    ++this.stats.queries;

    // Ensure CSS highlight class rolls over on overflow
    ++this.stats.highlight;
    if (this.stats.highlight >= this.options.maxHighlight) {
      this.stats.highlight = 0;
    }

    this.cursor.clear();
    this.emit('add', name, querySet, queries);

    if (globals.debugging) {
      this.assert();
    }

    return this;
  }

  /**
   * Append one or more queries to an existing query set
   *
   * If the query set doesn't yet exist, an exception is thrown. In addition, the query set
   * **must** have enough reserved space available to contain the new queries.  All queries not
   * fitting in the container are suppressed.
   *
   * @param {string} name - Name of the query set
   * @param {QuerySubject} queries - Array containing individual queries to highlight
   * @param {bool} enabled - If `true`, query set is also enabled
   *
   * @returns {HtmlHighlighter} Self instance for chaining
   */
  append(name: string, queries: Array<QuerySubject>, enabled: boolean = true): HtmlHighlighter {
    const querySet = this.queries.get(name);
    if (querySet == null) {
      throw new Error('Invalid or query set not yet created');
    }

    this.add_queries_(querySet, queries, enabled === true);
    this.cursor.clear();
    this.emit('append', name, querySet, queries);

    if (globals.debugging) {
      this.assert();
    }

    return this;
  }

  /**
   * Remove a query set by name
   *
   * An exception is thrown if the query set does not exist.
   *
   * @param {string} name - Name of the query set to remove.
   * @returns {HtmlHighlighter} Self instance for chaining
   */
  remove(name: string): HtmlHighlighter {
    this.remove_(name);
    this.cursor.clear();
    this.emit('remove', name);
    return this;
  }

  /**
   * Enable a query set
   *
   * An exception is thrown if the query set does not exist.  If the query set is currently already
   * enabled, nothing is done.
   *
   * @param {string} name - Name of the query set to enable.
   * @returns {HtmlHighlighter} Self instance for chaining
   */
  enable(name: string): HtmlHighlighter {
    const q = this.get_(name);
    if (q.enabled) {
      return this;
    }

    dom.removeClass(dom.getForQuerySet(q.queryId), Css.disabled);

    q.enabled = true;
    this.stats.total += q.length;
    this.cursor.clear();
    this.emit('enable', name);
    return this;
  }

  /**
   * Disable a query set
   *
   * An exception is thrown if the query set does not exist.  If the query set is currently already
   * disabled, nothing is done.
   *
   * @param {string} name - Name of the query set to disable.
   * @returns {HtmlHighlighter} Self instance for chaining
   */
  disable(name: string): HtmlHighlighter {
    const q = this.get_(name);
    if (!q.enabled) {
      return this;
    }

    dom.addClass(dom.getForQuerySet(q.queryId), Css.disabled);

    q.enabled = false;
    this.stats.total -= q.length;
    this.cursor.clear();
    this.emit('disable', name);
    return this;
  }

  /**
   * Remove all query sets
   *
   * Optionally, the last query set id can be reset.
   *
   * @param {boolean} reset - Last query set id is reset, if `true`.
   * @returns {HtmlHighlighter} Self instance for chaining
   */
  clear(reset: boolean): HtmlHighlighter {
    for (const [name] of this.queries) {
      this.remove_(name);
    }

    if (reset) {
      this.lastId = 0;
      this.stats.highlight = 0;
    }

    this.cursor.clear();
    this.emit('clear');

    if (globals.debugging) {
      this.assert();
    }

    return this;
  }

  /**
   * Set the queries that the cursor will visit when the `prev` and `next` methods are invoked
   *
   * If `null`, all queries will be visited.
   *
   * @param {Array} queries - Array containing query set names
   */
  setIterableQueries(queries: Array<string> | null = null): void {
    this.cursor.setIterableQueries(queries);
  }

  /**
   * Move cursor position to the previous query in the active query set
   *
   * If the cursor moves past the first query in the active query set, the active query set moves
   * to the previous available one and the cursor position to its last query.  If the current query
   * set is the first in the collection and thus it is not possible to move to the previous query
   * set, the last query set is made active instead, thus ensuring that the cursor always rolls
   * over.
   */
  prev(): void {
    this.cursor.prev();
  }

  /**
   * Move cursor position to the next query in the active query set
   *
   * If the cursor moves past the last query in the active query set, the active query set moves to
   * the next available one and the cursor position to its first query.  If the current query set
   * is the last in the collection and thus it is not possible to move to the next query set, the
   * first query set is made active instead, thus ensuring that the cursor always rolls over.
   */
  next(): void {
    this.cursor.next();
  }

  /* eslint-disable complexity, max-statements */
  /**
   * Return the current selected text range in the form of a `TextRange` object
   *
   * If there is no selected text, `null` is returned.
   *
   * @returns {TextRange|null} The current selected text range or `null` if it could not be
   * computed.
   */
  getSelectedRange(): TextRange | null {
    const sel = window.getSelection();
    if (sel == null) {
      return null;
    }

    const range = sel.getRangeAt(0);
    if (range == null) {
      return null;
    }

    let start, end;
    try {
      start = selection.getNormalizedStartBoundaryPoint(range);
      end = selection.getNormalizedEndBoundaryPoint(range);
    } catch (x) {
      logger.error('unable to compute boundary points:', x);
      return null;
    }

    if (start.node.nodeType !== Node.TEXT_NODE || end.node.nodeType !== Node.TEXT_NODE) {
      logger.info('selection anchor or focus node(s) not text: ignoring');
      return null;
    }

    // Account for selections where the start and end elements are the same *and* whitespace exists
    // longer than one character.  For instance, The element `<p>a b</p>` is shown as `a b` by
    // browsers, where the whitespace is rendered collapsed.  This means that in this particular
    // case, it is not possible to simply retrieve the length of the selection's text and use that
    // as the selection's end offset as it would be invalid.  The way to avoid calculating an
    // invalid end offset is by looking at the anchor and focus (start and end) offsets.
    // Strangely, if the selection spans more than one element, one may simply use the length of
    // the selected text regardless of the occurrence of whitespace in between.
    const len =
      start.node === end.node ? Math.abs(end.offset - start.offset) : sel.toString().length;
    if (len <= 0) {
      return null;
    }

    // Determine start and end indices in text offset markers array
    const startOffset = this.content.find(start.node);
    const endOffset = start.node === end.node ? startOffset : this.content.find(end.node);
    if (startOffset < 0 || endOffset < 0) {
      logger.error(
        'unable to retrieve offset of selection anchor or focus node(s):',
        sel.anchorNode,
        start.node,
        sel.focusNode,
        end.node
      );
      return null;
    }

    // Create start and end range descriptors, whilst accounting for inverse selection where the
    // user selects text in a right to left orientation.
    let startDescr, endDescr;
    if (startOffset < endOffset || (startOffset === endOffset && start.offset < end.offset)) {
      startDescr = TextRange.descriptorRel(this.content.at(startOffset), start.offset);

      if (start.node === end.node) {
        endDescr = merge({}, startDescr);
        endDescr.offset += len - 1;
      } else {
        endDescr = TextRange.descriptorRel(this.content.at(endOffset), end.offset - 1);
      }
    } else {
      startDescr = TextRange.descriptorRel(this.content.at(endOffset), end.offset);

      if (end.node === start.node) {
        endDescr = merge({}, startDescr);
        endDescr.offset += len - 1;
      } else {
        endDescr = TextRange.descriptorRel(this.content.at(startOffset), start.offset - 1);
      }
    }

    return new TextRange(this.content, startDescr, endDescr);
  }
  /* eslint-enable complexity, max-statements */

  /**
   * Clear the current text selection
   *
   * Only the Chrome and Firefox implementations are supported.
   */
  clearSelectedRange(): void {
    // From: http://stackoverflow.com/a/3169849/3001914
    // Note that we don't support IE at all.
    if (window.getSelection) {
      if (window.getSelection().empty) {
        // Chrome
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) {
        // Firefox
        window.getSelection().removeAllRanges();
      }
    }
  }

  /**
   * Return boolean value indicating whether a query exists
   *
   * @param {string} name - the name of query set
   * @returns {boolean} `true` if query exists
   */
  has(name: string): boolean {
    return this.queries.has(name);
  }

  /**
   * Return state associated with highlight
   *
   * @param {number} highlightId - Highlight ID
   * @returns {any} State associated with highlight; `undefined` or `null` otherwise
   */
  getState(highlightId: number): any {
    return this.state.get(highlightId);
  }

  /**
   * Return boolean indicative of whether one or more query sets are currently contained
   *
   * @returns {boolean} `false` if no query sets currently
   * contained; `true` otherwise. */
  empty(): boolean {
    return this.queries.size === 0;
  }

  /**
   * Return the last highlight id of a query set
   *
   * @param {string} name - the name of the query set.
   * @returns {number} the last highlight id or `-1` if query set empty.
   * */
  lastIdOf(name: string): number {
    const q = this.get_(name);
    const l = q.length;
    return l > 0 ? q.highlightId + l - 1 : -1;
  }

  // Private interface
  // -----------------
  /**
   * Add or append queries to a query set, either enabled or disabled
   *
   * @param {QuerySet} querySet - query set descriptor.
   * @param {Array<QuerySubject>} queries - array containing the queries to add or append.
   * @param {boolean} enabled - highlights are enabled if `true`
   *
   * @returns {number} number of highlights added.
   * */
  add_queries_(querySet: QuerySet, queries: Array<QuerySubject>, enabled: boolean): number {
    const content = this.content;
    const markers = this.markers;
    const reserve =
      querySet.reserve != null && querySet.reserve > 0 ? querySet.reserve - querySet.length : null;

    let count = 0;
    let csscl = null;

    if (this.options.useQueryAsClass) {
      csscl = Css.highlight + '-' + querySet.name;
    }

    let highlighter = new RangeHighlighter(
      querySet.queryId,
      querySet.highlightId + querySet.length,
      enabled,
      csscl
    );

    logger.log(`adding queries for: ${querySet.name}`);

    // For each query, perform a lookup in the internal text representation and highlight each hit.
    // The global offset of each highlight is recorded by the `markers´ object.  The offset
    // is used by the `Cursor´ class to compute the next/previous highlight to show.
    queries.forEach((subject: any): void => {
      let hit, finder;

      try {
        finder = factory.finder(content, subject);
      } catch (x) {
        logger.exception(
          `subject finder instantiation failed [query=${querySet.name}]: subject:`,
          subject,
          x
        );
        return;
      }

      logger.log('processing subject:', subject);
      const state = subject.state;

      while ((hit = finder.next()) != null) {
        if (reserve !== null && count >= reserve) {
          logger.error('highlight reserve exceeded');
          break;
        }

        logger.log('highlighting:', hit);

        try {
          // $FlowFixMe: `hit` cannot be `null` here as per condition in `while` above
          const id = highlighter.do(hit);

          // Contain state associated with query subject, if applicable.
          if (state != null) {
            this.state.set(id, state);
          }

          // $FlowFixMe: `hit` cannot be `null` here as per condition in `while` above
          markers.add(querySet, id, hit);
          ++count;

          // Notify observers of creation of new highlight
          this.emit('highlight', id, state);
        } catch (x) {
          logger.exception(`highlighting failed [query=${querySet.name}]: subject:`, subject, x);
        }
      }
    });

    querySet.length += count;
    if (enabled) {
      this.stats.total += count;
    }

    return count;
  }

  /**
   * Remove a query set by name
   *
   * Throws an exception if the query set does not exist.
   * @access private
   *
   * @param {string} name - The name of the query set to remove.
   */
  remove_(name: string): void {
    const q = this.get_(name);
    let unhighlighter = new RangeUnhighlighter();

    --this.stats.queries;
    this.stats.total -= q.length;

    for (let id = q.highlightId, l = id + q.length; id < l; ++id) {
      unhighlighter.undo(id);
      this.state.delete(id);

      // Notify observers of creation of new highlight
      this.emit('unhighlight', id);
    }

    this.markers.removeAll(q);
    this.queries.delete(name);

    // TODO: Unfortunately, using the built-in `normalize` `HTMLElement` method to normalise text
    // nodes means we have to refresh the offsets of the text nodes, which may not be desirable.
    // There must be a better way.
    if (this.options.normalise) {
      this.options.container.normalize();
      this.refresh();
    }

    if (globals.debugging) {
      this.assert();
    }
  }

  /**
   * Safely retrieve a query set's descriptor
   *
   * Throws an exception if the query set does not exist.
   *
   * @param {string} name - The name of the query set to retrieve.
   * @returns {QuerySet} Query set descriptor
   */
  get_(name: string): QuerySet {
    const q = this.queries.get(name);
    if (q == null) {
      throw new Error(`Query set non-existent: ${name}`);
    }
    return q;
  }

  assert(): void {
    this.content.assert();

    let size = 0;
    for (const [, query] of this.queries) {
      size += query.length;
    }

    this.markers.assert(size);

    if (this.lastId === 0 || this.stats.highlight === 0) {
      if (this.lastId !== this.stats.highlight) {
        throw new Error('IDs mismatch when empty');
      } else if (this.queries.size !== 0) {
        throw new Error('Queries map not empty');
      } else if (this.state.size !== 0) {
        throw new Error('Highlight state map not empty');
      }
    } else if (this.state.size > size) {
      throw new Error('Unexpected highlight state');
    }
  }
}

export default HtmlHighlighter;
