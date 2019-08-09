// @flow

import * as dom from './dom';

/**
 * Convenience class for removing highlighting
 */
class RangeUnhighlighter {
  /**
   * Remove highlighting given by its id
   *
   * @param {number} id - ID of the highlight to remove
   */
  undo(id: number): void {
    const coll = dom.getHighlightElements(id);
    for (const el of coll) {
      let child;
      while ((child = el.childNodes[0]) != null) {
        (el.parentNode: any).insertBefore(child, el);
      }

      // Create Element.remove() function if not exist
      if (!('remove' in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
      }
      
      el.remove();
    }
  }
}

export default RangeUnhighlighter;
