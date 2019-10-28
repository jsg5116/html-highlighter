/*!
 * The MIT License (MIT)
 * 
 * Copyright (c) 2015-2017 Diffeo Inc. (Dossier Stack)
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("htmlhighlighter", [], factory);
	else if(typeof exports === 'object')
		exports["htmlhighlighter"] = factory();
	else
		root["htmlhighlighter"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(108);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var ctx = __webpack_require__(10);
var hide = __webpack_require__(12);
var has = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(55)('wks');
var uid = __webpack_require__(40);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(78);
var toPrimitive = __webpack_require__(57);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(27);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _globals = __webpack_require__(34);

var _globals2 = _interopRequireDefault(_globals);

var _dom = __webpack_require__(13);

var dom = _interopRequireWildcard(_dom);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class responsible for building and keeping a convenient representation
 * of the text present in an HTML DOM sub-tree.
 */
var TextContent = function () {

  /**
   * Class constructor
   * @param {Node|jQuery} root - Reference to a DOM element
   */
  function TextContent(root) {
    (0, _classCallCheck3.default)(this, TextContent);

    this.root = root;
    this.text = '';
    this.markers = [];
    this.refresh();
  }

  /**
   * Refresh internal representation of the text
   *
   * The internal representation of the text present in the DOM sub-tree of the `root` consists of
   * an array of global offsets for every text node in the document, and a reference to the
   * corresponding text node, stored in marker descriptors. In addition, a regular string (`text`)
   * holds the text contents of the document to enable text-based searches.
   *
   * A marker descriptor is of the form:
   * ```
   * {
   *   node:   Node      // reference to text node
   *   offset: integer   // global offset
   * }
   * ```
   *
   * Should only be invoked when the HTML structure mutates, e.g. a new document is loaded.
   * */

  // FIXME: add type


  (0, _createClass3.default)(TextContent, [{
    key: 'refresh',
    value: function refresh() {
      this.text = '';
      var markers = this.markers = [];
      var offset = this.visit_(this.root, 0);

      // Sanity check
      if (_globals2.default.debugging) {
        if (this.markers.length !== 0) {
          var marker = markers[markers.length - 1];
          if (offset - marker.node.nodeValue.length !== marker.offset) {
            throw new Error('Invalid state detected: offset mismatch');
          }
        }
      }
    }

    /**
     * Truncate text node
     *
     * Truncates a text node given by `marker` by turning it into 2 or 3 text nodes, with one of them
     * used for highlighting purposes.
     *
     * If `start == 0` and `end == text.length - 1`, no truncation takes place **but** the old text
     * node is replaced by a new one.  This method therefore assumes that the caller has checked to
     * ensure text truncation is required.
     *
     * Truncation takes place in the following manner:
     *
     *  - if `start > 0`: truncate `[ 0 .. start - 1 ]
     *  - create new text node at `[ start .. end ]`
     *  - if `end != text.length - 1`: truncate `[ end .. text.length - 1 ]`
     *
     * @param {Marker} marker - Reference to descriptor of text node to truncate
     * @param {number} start - Offset where to start truncation
     * @param {number} end - Offset where truncation ends
     *
     * @returns {number} Index of marker descriptor
     */

  }, {
    key: 'truncate',
    value: function truncate(marker, start, end) {
      var text = marker.node.nodeValue;
      var index = this.indexOf(marker.offset);
      var old = marker.node; // The old text node

      // Sanity checks
      if (start < 0 || end < 0 || end >= text.length) {
        throw new Error('Invalid truncation parameters');
      }

      // Chars 0..start - 1
      if (start > 0) {
        var _node = document.createTextNode(text.substr(0, start));
        // Since we're creating a new text node out of the old text node, we need to add a new entry
        // to the markers array
        this.markers.splice(index, 0, {
          offset: marker.offset,
          node: dom.insertBefore(_node, marker.node)
        });

        ++index;
      }

      // Chars start..end
      // ----------------
      // We don't need to add a new entry to the markers array since we're not technically creating a
      // new text node, just replacing it with one with the required [start..end] substring.  We do
      // need to update the node's offset though.
      marker.offset += start;
      marker.node = dom.insertBefore(document.createTextNode(text.substr(start, end - start + 1)), marker.node);

      // Chars end + 1..length
      if (end !== text.length - 1) {
        if (index >= this.markers.length) {
          throw new Error('Detected invalid index');
        }

        // We're again creating a new text node out of the old text node and thus need to add a new
        // entry to the markers array.
        this.markers.splice(index + 1, 0, {
          offset: marker.offset + end - start + 1,
          node: dom.insertAfter(document.createTextNode(text.substr(end + 1)), marker.node)
        });
      }

      if (_globals2.default.debugging) {
        this.assert();
      }

      // Remove old node.
      old.parentNode.removeChild(old);
      return index;
    }

    /**
     * Return the index of the marker descriptor of a given text offset.
     *
     * Throws an exception if the offset is invalid.
     *
     * Note: employs the binary search algorithm.
     *
     * @param {number} offset - The offset to look up
     * @returns {number} The marker index that contains `offset`
     */

  }, {
    key: 'indexOf',
    value: function indexOf(offset) {
      var markers = this.markers;
      var min = 0;
      var max = markers.length - 1;

      while (min < max) {
        var mid = Math.floor((min + max) / 2);

        if (markers[mid].offset < offset) {
          min = mid + 1;
        } else {
          max = mid;
        }
      }

      if (markers[min].offset <= offset) {
        return min;
      } else if (min === 0) {
        throw new Error('Invalid offset of text content state');
      }

      return min - 1;
    }

    /**
     * Find the index of the marker descriptor of a given text node element
     *
     * @param {Node} element - Reference to the text node to look up
     * @param {number} [start=0] - Start marker index if known for a fact that the text node is to be
     * found **after** a certain offset
     *
     * @returns {number} The marker index of `element` or `-1` if not found.
     */

  }, {
    key: 'find',
    value: function find(element) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (element.nodeType !== 3) {
        return -1;
      }

      for (var i = start == null ? 0 : start, l = this.markers.length; i < l; ++i // eslint-disable-line indent
      ) {
        if (this.markers[i].node === element) {
          return i;
        }
      }

      return -1;
    }

    /**
     * Return the offset marker descriptor at a given index
     *
     * Throws an exception if the given `index` is out of bounds.
     *
     * @param {number} index - Marker index
     * @returns {Marker} The offset marker descriptor
     */

  }, {
    key: 'at',
    value: function at(index) {
      if (index < 0 || index >= this.markers.length) {
        throw new Error('Invalid marker index');
      }

      return this.markers[index];
    }
  }, {
    key: 'visit_',
    value: function visit_(node, offset) {
      // Only interested in text nodes
      if (node.nodeType === 3) {
        var content = node.nodeValue;
        var length = content.length;

        // Save reference to text node and store global offset in the markers array
        this.markers.push({ node: node, offset: offset });
        this.text += content;
        return offset + length;
      }

      // If current node is not of type text, process its children nodes, if any.
      var ch = node.childNodes;
      if (ch.length > 0) {
        for (var i = 0, l = ch.length; i < l; ++i) {
          offset = this.visit_(ch[i], offset);
        }
      }

      return offset;
    }

    /**
     * Assert textual representation is valid
     *
     * Debug method for asserting that the current textual representation is valid, in particular
     * that the offset markers are all contiguous.
     */

  }, {
    key: 'assert',
    value: function assert() {
      var offset = 0;

      // Ensure offsets are contiguous
      for (var i = 0, l = this.markers.length; i < l; ++i) {
        var marker = this.markers[i];

        if (marker.offset !== offset) {
          _logger2.default.error('invalid offset: %d@ %d:%d ->', i, marker.offset, offset, marker);
          throw new Error('Halting due to invalid offset');
        }

        offset += marker.node.nodeValue.length;
      }
    }
  }]);
  return TextContent;
}();

exports.default = TextContent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(31);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLastTextNode = exports.visitDOM = exports.scrollIntoView = exports.isInView = exports.getOffset = exports.insertAfter = exports.insertBefore = exports.createHighlightElement = exports.isHighlightVisible = exports.getAllHighlightElements = exports.getForQuerySet = exports.getHighlightElements = exports.removeClass = exports.addClass = exports.ensureIterable = exports.classNameToSet = undefined;

var _from = __webpack_require__(104);

var _from2 = _interopRequireDefault(_from);

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _set = __webpack_require__(110);

var _set2 = _interopRequireDefault(_set);

var _consts = __webpack_require__(17);

var _rangeunhighlighter = __webpack_require__(42);

var _rangeunhighlighter2 = _interopRequireDefault(_rangeunhighlighter);

var _util = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function classNameToSet(el) {
  return new _set2.default(el.className.split(' ').map(function (c) {
    return c.trim();
  }).filter(Boolean));
}
// FIXME: this module relies heavily on `document.querySelector` and `document.querySelectorAll`
// methods but suffers from the limitation that it (presently) runs the queries on the wider
// document's DOM.  This means that, should there ever be a use case for multiple HTML Highlighter
// instances running concurrently within the same DOM on separate subtrees, the result of doing so
// would most certainly be undefined and most likely confusing and resulting in loss or corruption
// of (perceived) state.

function ensureIterable(elementOrCollection) {
  return elementOrCollection instanceof NodeList ? elementOrCollection : new _set2.default([elementOrCollection]);
}

function addClass(coll, name) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(ensureIterable(coll)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var el = _step.value;

      var set = classNameToSet(el);
      set.add(name);
      el.className = (0, _from2.default)(set).join(' ');
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function removeClass(coll, name) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(ensureIterable(coll)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var el = _step2.value;

      var set = classNameToSet(el);
      set.delete(name);
      el.className = (0, _from2.default)(set).join(' ');
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

function getHighlightElements(id) {
  return document.querySelectorAll('.' + _consts.Css.highlight + '-id-' + id);
}

function getForQuerySet(qid) {
  return document.querySelectorAll('.' + _consts.Css.highlight + '-' + qid);
}

function getAllHighlightElements() {
  var additionalClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var otherClass = additionalClass ? '.' + additionalClass : '';
  return document.querySelectorAll('.' + _consts.Css.highlight + otherClass);
}

function isHighlightVisible(id) {
  var elements = getHighlightElements(id);
  if (elements.length < 1) {
    return false;
  }

  // A highlight is considered to be visible if its first (and usually only) element possesses
  // height and width greater than 0.
  var bbox = elements[0].getBoundingClientRect();
  return bbox.height > 0 && bbox.width > 0;
}

function createHighlightElement(node, className) {
  var classPrefix = "hh-highlight-";
  var unhighlighter = new _rangeunhighlighter2.default();
  var classList;

  if (node && node.classList) {
    classList = node.classList;
  } else if (node && node.parentElement && node.parentElement.classList) {
    classList = node.parentElement.classList;
  } else if (node && node.parentNode && node.parentNode.classList) {
    classList = node.parentNode.classList;
  }

  if (classList) {
    for (var i = 0; i < classList.length; i++) {
      if (classList[i].indexOf(classPrefix) !== -1 && classList[i].indexOf(className) === -1) {
        var indexToRemove = parseInt(classList[i].substr(classPrefix.length), 10);
        unhighlighter.undo(indexToRemove);
        if (_util.highlightSubjects && _util.highlightSubjects[indexToRemove] != null) {
          var copy = _util.highlightSubjects.slice(0);
          copy[indexToRemove] = null;
          (0, _util.setHighlightSubjects)(copy);
          break;
        }
      }
    };
  }

  var span = document.createElement('span');
  span.className = className;
  node.parentNode.insertBefore(span, node);
  span.appendChild(node);
  return span;
}

function insertBefore(newNode, beforeNode) {
  beforeNode.parentNode.insertBefore(newNode, beforeNode);
  return newNode;
}

function insertAfter(newNode, afterNode) {
  // Automatically adds to the end of the list when `nextSibling` is `null`
  afterNode.parentNode.insertBefore(newNode, afterNode.nextSibling);
  return newNode;
}

// Taken with a few alterations from:
// https://www.kirupa.com/html5/get_element_position_using_javascript.htm
function getOffset(el) {
  var x = 0;
  var y = 0;

  while (el != null) {
    if (el.tagName.toLowerCase() === 'body') {
      // deal with browser quirks with body/window/document and page scroll
      var scrollX = el.scrollLeft || document.documentElement.scrollLeft;
      var scrollY = el.scrollTop || document.documentElement.scrollTop;

      x += el.offsetLeft - scrollX + el.clientLeft;
      y += el.offsetTop - scrollY + el.clientTop;
    } else {
      // for all other non-BODY elements
      x += el.offsetLeft - el.scrollLeft + el.clientLeft;
      y += el.offsetTop - el.scrollTop + el.clientTop;
    }

    el = el.offsetParent;
  }

  return { x: x, y: y };
}

function isInView(el) {
  var bbox = el.getBoundingClientRect();
  return bbox.top >= 0 && bbox.top + bbox.height < window.innerHeight;
}

// Note that flow does not expose a formal Window type, which means we are unable to validate the
// type.
function scrollIntoView(el, container) {
  if (container == null) {
    container = window;
  }

  var containerTop = void 0;
  var containerHeight = void 0;
  if (container === window) {
    containerHeight = window.innerHeight;
    containerTop = window.scrollY;
  } else {
    containerHeight = container.getBoundingClientRect().height;
    containerTop = container.scrollTop;
  }

  var bbox = el.getBoundingClientRect();
  container.scrollTo(window.scrollX, bbox.top + containerTop - (containerHeight - bbox.height) / 2);
}

/**
 * Simple DOM visitor
 *
 * Given a starting node, visits every node while invoking a callback that is expected to produce a
 * boolean value.  Ends when there are no more nodes to visit or the callback returns true.  Note
 * that a truthy value will not terminate visitation; only an explicit `true` value will.
 *
 * @param {Node} node - Node to begin visiting
 * @param {ForEachNodeCallback} callback - Callback to invoke for each node
 *
 * @returns {boolean} Result of last callback call
 */
function visitDOM(node, callback) {
  try {
    if (callback(node) === true) {
      return true;
    }
  } catch (x) {
    console.error('exception raised while executing visitor callback:', x);
  }

  if (node.nodeType === Node.TEXT_NODE) {
    return false;
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = (0, _getIterator3.default)(node.childNodes), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var child = _step3.value;

      if (visitDOM(child, callback)) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return false;
}

/**
 * Find last text node in given DOM sub-tree
 *
 * @param {HTMLElement} container - container element on whose tree to perform search
 * @returns {Node | null} Last text node found or `null` if none
 */
function findLastTextNode(container) {
  var lastTextNode = null;

  visitDOM(container, function (node) {
    if (node.nodeType === Node.TEXT_NODE) {
      lastTextNode = node;
    }

    return false;
  });

  return lastTextNode;
}

// Export "private" functions so they too can be tested.
exports.classNameToSet = classNameToSet;
exports.ensureIterable = ensureIterable;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.getHighlightElements = getHighlightElements;
exports.getForQuerySet = getForQuerySet;
exports.getAllHighlightElements = getAllHighlightElements;
exports.isHighlightVisible = isHighlightVisible;
exports.createHighlightElement = createHighlightElement;
exports.insertBefore = insertBefore;
exports.insertAfter = insertAfter;
exports.getOffset = getOffset;
exports.isInView = isInView;
exports.scrollIntoView = scrollIntoView;
exports.visitDOM = visitDOM;
exports.findLastTextNode = findLastTextNode;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _globals = __webpack_require__(34);

var _globals2 = _interopRequireDefault(_globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Logging class
 *
 * Emits debug and log console output when the associated HTML Highlighter class's `debug` static
 * attribute is `true`.  Also ensures all messages contain the 'html-highlighter: ' prefix.
 */
var Logger = function () {
  function Logger() {
    (0, _classCallCheck3.default)(this, Logger);
  }

  (0, _createClass3.default)(Logger, [{
    key: 'debug',
    value: function debug() {
      if (_globals2.default.verbose) {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        this.emit('debug', args);
      }
    }
  }, {
    key: 'log',
    value: function log() {
      if (_globals2.default.verbose) {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        this.emit('log', args);
      }
    }
  }, {
    key: 'info',
    value: function info() {
      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.emit('info', args);
    }
  }, {
    key: 'warn',
    value: function warn() {
      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      this.emit('warn', args);
    }
  }, {
    key: 'error',
    value: function error() {
      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      this.emit('error', args);
    }
  }, {
    key: 'exception',
    value: function exception() {
      for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      args = this.prepend(args, 'exception occurred', 'unknown exception occurred');
      this.emit('error', args);
    }
  }, {
    key: 'prepend',
    value: function prepend(args, str, strIfEmpty) {
      if (args.length === 0) {
        return [strIfEmpty || str];
      }

      var first = args[0];
      if (typeof first === 'string') {
        args[0] = str + ': ' + first;
      }

      return args;
    }
  }, {
    key: 'emit',
    value: function emit(type, args) {
      var fn = console[type];
      if (fn == null) {
        console.error('logger: console function \'' + type + '\' undefined or invalid');
      } else {
        fn.apply(console, this.prepend(args, 'html-highlighter'));
      }
    }
  }]);
  return Logger;
}();

exports.default = new Logger();

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(141)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(48)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Css = exports.Css = {
  highlight: 'hh-highlight',
  enabled: 'hh-enabled',
  disabled: 'hh-disabled'
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _dom = __webpack_require__(13);

var dom = _interopRequireWildcard(_dom);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _textnodevisitor = __webpack_require__(103);

var _textnodevisitor2 = _interopRequireDefault(_textnodevisitor);

var _textnodexpath = __webpack_require__(70);

var _textnodexpath2 = _interopRequireDefault(_textnodexpath);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Holds a representation of a range between two text nodes
 *
 * @param {TextContent} content - text representation instance
 * @param {Object} start - descriptor of start of range
 * @param {Object} end - descriptor of end of range
 */
var TextRange = function () {
  (0, _createClass3.default)(TextRange, null, [{
    key: 'descriptorAbs',


    /**
     * Create a range descriptor from a global offset.
     *
     * @param {Marker} marker - Text offset marker object
     * @param {number} offset - Global offset
     *
     * @returns {RangeDescriptor} Range descriptor */
    value: function descriptorAbs(marker, offset) {
      return { marker: marker, offset: offset - marker.offset };
    }

    /**
     * Create a range descriptor from an offset relative to the start of the text node
     *
     * @param {Marker} marker - Text offset marker object
     * @param {number} offset - Relative offset from start of text node
     *
     * @returns {RangeDescriptor} Range descriptor
     */

  }, {
    key: 'descriptorRel',
    value: function descriptorRel(marker, offset) {
      return { marker: marker, offset: offset };
    }
  }]);

  function TextRange(content, start, end) {
    (0, _classCallCheck3.default)(this, TextRange);

    this.content = content;

    // Sanity check:
    if (start.marker.offset + start.offset > end.marker.offset + end.offset) {
      throw new Error('Invalid range: start > end');
    }

    this.start = start;
    this.end = end;
  }

  /**
   * Highlight a range
   *
   * Highlights a given range by wrapping one or more text nodes with a `span` tag and applying a
   * particular CSS class.
   *
   * @param {string} className - The CSS class name to apply
   */


  (0, _createClass3.default)(TextRange, [{
    key: 'surround',
    value: function surround(className) {
      var _this = this;

      // Optimised case: highlighting does not span multiple nodes
      if (this.start.marker.node === this.end.marker.node) {
        this.surround_(this.start, this.start.offset, this.end.offset, className);
        this.start.offset = 0;
        return;
      }

      // Highlighting spans 2 or more nodes, which means we need to build a representation of all the
      // text nodes contained in the start to end range, but excluding the start and end nodes
      var visitor = new _textnodevisitor2.default(this.start.marker.node, this.content.root);
      var end = this.end.marker.node;
      var coll = [];

      // TODO: we assume `visitor.next()' will never return null because `end´ is within bounds
      while (visitor.next() !== end) {
        coll.push(visitor.current);
      }

      // Apply highlighting to start and end nodes, and to any nodes in between, if applicable.
      // Highlighting for the start and end nodes may require text node truncation but not for the
      // nodes in between.
      this.surround_(this.start, this.start.offset, null, className);
      coll.forEach(function (n) {
        return _this.surroundWhole_(n, className);
      });
      this.surround_(this.end, 0, this.end.offset, className);
      this.start.offset = 0;
    }

    /**
     * Compute the XPath representation of the active range
     *
     * @returns {RangeXpathDescriptor} XPath representation of active range
     */

  }, {
    key: 'computeXpath',
    value: function computeXpath() {
      var start = this.start.marker.node;
      var end = this.end.marker.node;
      var computor = new _textnodexpath2.default(this.content.root);
      return {
        start: {
          xpath: computor.xpathOf(start),
          offset: this.start.offset + computor.offset(start)
        },
        end: {
          xpath: computor.xpathOf(end),
          offset: this.end.offset + computor.offset(end) + 1
        }
      };
    }

    /**
     * Compute the length of the active range
     *
     * @returns {number} Number of characters
     */

  }, {
    key: 'length',
    value: function length() {
      // Optimised case: range does not span multiple nodes
      if (this.start.marker.node === this.end.marker.node) {
        return this.end.offset - this.start.offset + 1;
      }

      // Range spans 2 or more nodes
      var visitor = new _textnodevisitor2.default(this.start.marker.node, this.content.root);
      var end = this.end.marker.node;
      var length = this.start.marker.node.nodeValue.length - this.start.offset + this.end.offset + 1;

      // Add (whole) lengths of text nodes in between
      while (visitor.next() !== end) {
        length += visitor.current.nodeValue.length;
      }

      return length;
    }

    // Private interface
    // -----------------
    /**
     * Truncate text node and apply highlighting
     *
     * Truncates text node into 2 or 3 text nodes and apply highlighting to relevant node, which is
     * always the node referenced by `descr.marker.node`.
     *
     * @param {Object} descr - Start or end `Range` descriptor
     * @param {number} start - Start offset
     * @param {number | null} end - End offset
     * @param {string} className - CSS class name to apply
     */

  }, {
    key: 'surround_',
    value: function surround_(descr, start, end, className) {
      this.content.truncate(descr.marker, start, end == null ? descr.marker.node.nodeValue.length - 1 : end);

      dom.createHighlightElement(descr.marker.node, className);
    }

    /**
     * Apply highlighting fully to a text node
     *
     * No text node truncation occurs.
     *
     * @param {Node} node - Text node to apply highlighting to
     * @param {string} className - CSS class name to apply
     * */

  }, {
    key: 'surroundWhole_',
    value: function surroundWhole_(node, className) {
      dom.createHighlightElement(node, className);
    }
  }]);
  return TextRange;
}();

exports.default = TextRange;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(115), __esModule: true };

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(79);
var defined = __webpack_require__(45);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(147);
var global = __webpack_require__(4);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(21);
var TO_STRING_TAG = __webpack_require__(5)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(109);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(107);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(72);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(72);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(10);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(80);
var anObject = __webpack_require__(8);
var toLength = __webpack_require__(39);
var getIterFn = __webpack_require__(61);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(15);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(45);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globals = {
  verbose: false,
  debugging: false
};

function setVerbose(active) {
  globals.verbose = active;
}

function getVerbose() {
  return globals.verbose;
}

function setDebugging(active) {
  globals.debugging = active;
}

function getDebugging() {
  return globals.debugging;
}

exports.default = globals;
exports.setVerbose = setVerbose;
exports.getVerbose = getVerbose;
exports.setDebugging = setDebugging;
exports.getDebugging = getDebugging;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHighlightSubjects = exports.createPromiseCapabilities = exports.abstract = exports.highlightSubjects = undefined;

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function abstract() {
  throw new Error('Abstract method not implemented');
}

function createPromiseCapabilities() {
  var resolve = void 0,
      fail = void 0;
  var instance = new _promise2.default(function (pr, pf) {
    resolve = pr;
    fail = pf;
  });

  // $FlowFixMe: `resolve` and `fail` are defined at this point
  return {
    instance: instance,
    resolve: resolve,
    fail: fail
  };
}

var highlightSubjects = exports.highlightSubjects = undefined;

function setHighlightSubjects(value) {
  exports.highlightSubjects = highlightSubjects = value.slice(0);
}

exports.abstract = abstract;
exports.createPromiseCapabilities = createPromiseCapabilities;
exports.setHighlightSubjects = setHighlightSubjects;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(122), __esModule: true };

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(28);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(137);
var enumBugKeys = __webpack_require__(47);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(77).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(56);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _dom = __webpack_require__(13);

var dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenience class for removing highlighting
 */
var RangeUnhighlighter = function () {
  function RangeUnhighlighter() {
    (0, _classCallCheck3.default)(this, RangeUnhighlighter);
  }

  (0, _createClass3.default)(RangeUnhighlighter, [{
    key: 'undo',

    /**
     * Remove highlighting given by its id
     *
     * @param {number} id - ID of the highlight to remove
     */
    value: function undo(id) {
      var coll = dom.getHighlightElements(id);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(coll), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          var child = void 0;
          while ((child = el.childNodes[0]) != null) {
            el.parentNode.insertBefore(child, el);
          }

          // Create Element.remove() function if not exist
          if (!('remove' in Element.prototype)) {
            Element.prototype.remove = function () {
              if (this.parentNode) {
                this.parentNode.removeChild(this);
              }
            };
          }

          el.remove();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return RangeUnhighlighter;
}();

exports.default = RangeUnhighlighter;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _util = __webpack_require__(35);

var util = _interopRequireWildcard(_util);

var _textrange = __webpack_require__(18);

var _textrange2 = _interopRequireDefault(_textrange);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Abstract base class of all finder classes
 *
 * @abstract
 * @param {TextContent} content - reference to `TextContent` holding a text representation of the
 * document.
 * @param {*} subject - subject to find; can be of any type
 */

/* eslint-disable camelcase */
var Finder = function () {
  function Finder(content) {
    (0, _classCallCheck3.default)(this, Finder);

    this.content = content;
    this.results = [];
    this.current = 0;
  }

  /**
   * @abstract
   * Return next available match
   *
   * If no more matches available, returns `null`.
   *
   * @returns {TextRange | null} Returns a `TextRange` if a match is available, or `null` if no
   * more matches are available.
   */
  // $FlowFixMe: below signature is needed in specialized classes


  (0, _createClass3.default)(Finder, [{
    key: 'next',
    value: function next() {
      util.abstract();
    }

    // Protected interface
    // -------------------
    /**
     * Return a `TextRange` descriptor for a given offset
     * @access private
     *
     * @param {number} offset - Text offset
     * @returns {RangeDescriptor} Range descriptor
     */

  }, {
    key: 'getAt_',
    value: function getAt_(offset) {
      var index = this.content.indexOf(offset);
      if (index === -1) {
        throw new Error('Failed to retrieve marker for offset: ' + offset);
      }

      return _textrange2.default.descriptorAbs(this.content.at(index), offset);
    }
  }]);
  return Finder;
}();
/* eslint-enable camelcase */


exports.default = Finder;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(92);
var hide = __webpack_require__(12);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(135);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(88);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(40)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(15);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(20)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(27);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(89);
var enumBugKeys = __webpack_require__(47);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys');
var uid = __webpack_require__(40);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(30) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(30);
var wksExt = __webpack_require__(60);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(37);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * @name JavaScript/NodeJS Merge v1.2.1
 * @author yeikos
 * @repository https://github.com/yeikos/js.merge

 * Copyright 2014 yeikos - MIT license
 * https://raw.github.com/yeikos/js.merge/master/LICENSE
 */

;(function(isNode) {

	/**
	 * Merge one or more objects 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	var Public = function(clone) {

		return merge(clone === true, false, arguments);

	}, publicName = 'merge';

	/**
	 * Merge two or more objects recursively 
	 * @param bool? clone
	 * @param mixed,... arguments
	 * @return object
	 */

	Public.recursive = function(clone) {

		return merge(clone === true, true, arguments);

	};

	/**
	 * Clone the input removing any reference
	 * @param mixed input
	 * @return mixed
	 */

	Public.clone = function(input) {

		var output = input,
			type = typeOf(input),
			index, size;

		if (type === 'array') {

			output = [];
			size = input.length;

			for (index=0;index<size;++index)

				output[index] = Public.clone(input[index]);

		} else if (type === 'object') {

			output = {};

			for (index in input)

				output[index] = Public.clone(input[index]);

		}

		return output;

	};

	/**
	 * Merge two objects recursively
	 * @param mixed input
	 * @param mixed extend
	 * @return mixed
	 */

	function merge_recursive(base, extend) {

		if (typeOf(base) !== 'object')

			return extend;

		for (var key in extend) {

			if (typeOf(base[key]) === 'object' && typeOf(extend[key]) === 'object') {

				base[key] = merge_recursive(base[key], extend[key]);

			} else {

				base[key] = extend[key];

			}

		}

		return base;

	}

	/**
	 * Merge two or more objects
	 * @param bool clone
	 * @param bool recursive
	 * @param array argv
	 * @return object
	 */

	function merge(clone, recursive, argv) {

		var result = argv[0],
			size = argv.length;

		if (clone || typeOf(result) !== 'object')

			result = {};

		for (var index=0;index<size;++index) {

			var item = argv[index],

				type = typeOf(item);

			if (type !== 'object') continue;

			for (var key in item) {

				if (key === '__proto__') continue;

				var sitem = clone ? Public.clone(item[key]) : item[key];

				if (recursive) {

					result[key] = merge_recursive(result[key], sitem);

				} else {

					result[key] = sitem;

				}

			}

		}

		return result;

	}

	/**
	 * Get type of variable
	 * @param mixed input
	 * @return string
	 *
	 * @see http://jsperf.com/typeofvar
	 */

	function typeOf(input) {

		return ({}).toString.call(input).slice(8, -1).toLowerCase();

	}

	if (isNode) {

		module.exports = Public;

	} else {

		window[publicName] = Public;

	}

})(typeof module === 'object' && module && typeof module.exports === 'object' && module.exports);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(169)(module)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(113);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(71);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _map = __webpack_require__(106);

var _map2 = _interopRequireDefault(_map);

var _getPrototypeOf = __webpack_require__(24);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(62);

var _events2 = _interopRequireDefault(_events);

var _merge = __webpack_require__(63);

var _merge2 = _interopRequireDefault(_merge);

var _globals = __webpack_require__(34);

var _globals2 = _interopRequireDefault(_globals);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

var _consts = __webpack_require__(17);

var _dom = __webpack_require__(13);

var dom = _interopRequireWildcard(_dom);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _highlightmarkers = __webpack_require__(68);

var _highlightmarkers2 = _interopRequireDefault(_highlightmarkers);

var _renderer = __webpack_require__(101);

var _renderer2 = _interopRequireDefault(_renderer);

var _cursor = __webpack_require__(99);

var _cursor2 = _interopRequireDefault(_cursor);

var _util = __webpack_require__(35);

var _main = __webpack_require__(69);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* eslint-disable camelcase */
var HtmlHighlighter = function (_EventEmitter) {
  (0, _inherits3.default)(HtmlHighlighter, _EventEmitter);

  function HtmlHighlighter(options) {
    (0, _classCallCheck3.default)(this, HtmlHighlighter);

    // Merge default options
    var _this = (0, _possibleConstructorReturn3.default)(this, (HtmlHighlighter.__proto__ || (0, _getPrototypeOf2.default)(HtmlHighlighter)).call(this));

    _this.onHighlightCreated = function (querySet, hit, id, state) {
      // $FlowFixMe: `hit` cannot be `null` here as per condition in `while` above
      _this.markers.add(querySet, id, hit);
      if (state != null) {
        _this.state.set(id, state);
      }
      _this.emit('highlight', id, state);
    };

    _this.onHighlightRemoved = function (id) {
      _this.state.delete(id);
      _this.emit('unhighlight', id);
    };

    _this.options = (0, _merge2.default)({}, HtmlHighlighter.defaults, options);

    _this.queries = new _map2.default();
    _this.markers = new _highlightmarkers2.default();
    _this.state = new _map2.default();

    // TODO: rename attribute to something else that makes it clear it refers to the next highlight
    // id.
    _this.lastId = 0;

    // TODO: refactor the following map.  In particular, the `highlight` attribute BADLY needs to
    // become a class attribute of its own since it refers to the NEXT query set id.
    _this.stats = {
      queries: 0,
      total: 0,
      highlight: 0
    };

    var container = options.container;

    if (container == null) {
      _this.options.container = window.document.body;
    } else if (container instanceof HTMLElement) {
      _this.options.container = container;
    }

    _this.renderer = new _renderer2.default(_this.options);
    _this.cursor = new _cursor2.default(_this.markers);

    // Start by refreshing the internal document's text representation, which initialises
    // `this.content`.
    _this.refresh();
    _logger2.default.log('instantiated');
    return _this;
  }

  /**
   * Wait until the rendering pipeline is empty
   */


  // Default options.  Note that we cannot declare this map as `Options` since not all attributes
  // are defined (e.g. `container`).


  (0, _createClass3.default)(HtmlHighlighter, [{
    key: 'wait',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.renderer.wait();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function wait() {
        return _ref.apply(this, arguments);
      }

      return wait;
    }()

    /**
     * Dynamically assign new highlights container
     *
     * Removes all query sets and highlights, and generally resets internal state.  A new container
     * is finally set within which highlights can be created.
     *
     * Note that assigning the current container results in reassignment occurring and all the
     * side-effects described above still taking place.
     *
     * @param { HTMLElement } container - New highlights container
     */

  }, {
    key: 'setContainer',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(container) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.wait();

              case 2:
                _context2.next = 4;
                return this.clear(true);

              case 4:
                this.options.container = container;
                this.renderer = new _renderer2.default(this.options);
                this.refresh();
                _logger2.default.log('new container set');

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setContainer(_x) {
        return _ref2.apply(this, arguments);
      }

      return setContainer;
    }()

    /**
     * Refreshes the internal representation of the text.
     *
     * Should only be invoked when the HTML structure mutates.
     */

  }, {
    key: 'refresh',
    value: function refresh() {
      this.content = new _textcontent2.default(this.options.container);
      if (_globals2.default.debugging) {
        this.assert();
      }
      this.renderer.setContent(this.content);
      this.emit('refresh');
    }

    /**
    * Removes a highlight at the given index
    *
    */

  }, {
    key: 'removeHighlight',
    value: function removeHighlight(index) {
      var unhighlighter = new _main.RangeUnhighlighter();
      unhighlighter.undo(index);
      if (_util.highlightSubjects && _util.highlightSubjects.length && _util.highlightSubjects[index] != null) {
        var copy = _util.highlightSubjects.slice(0);
        copy[index] = null;
        (0, _util.setHighlightSubjects)(copy);
      }
    }

    /**
    * Returns all subject data
    *
    */

  }, {
    key: 'getSubjects',
    value: function getSubjects() {
      if (!_util.highlightSubjects) {
        (0, _util.setHighlightSubjects)([]);
      }
      return _util.highlightSubjects;
    }
  }, {
    key: 'setSubjects',
    value: function setSubjects(value) {
      (0, _util.setHighlightSubjects)(value);
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
     * @param {boolean} enabled - If explicitly `false`, query set is disabled; otherwise enabled
     * @param {number} [reserve] - Number of highlights to reserve for query set
     *
     * @returns {Promise<number>} Promise that resolves with number of highlights created
     */

  }, {
    key: 'add',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(name, queries) {
        var _this2 = this;

        var enabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var reserve = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var querySet, highlighter, promise;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                enabled = enabled === true;
                if (typeof reserve !== 'number' || reserve < 1) {
                  reserve = null;
                }

                querySet = {
                  name: name,
                  enabled: enabled,
                  queryId: -1,
                  highlightId: -1,
                  length: 0,
                  reserve: null
                };

                // Enqueue query set removal rendering operation by default to ensure that we succeed in adding
                // this query.  This measure results in no rendering if the query set does not exist.

                this.remove_(name);

                highlighter = _renderer.QueryHighlighter.instantiate(this.renderer, queries);

                highlighter.on('highlight', this.onHighlightCreated);
                highlighter.on('init', function () {
                  // Don't process query set if it turns out to already exist
                  if (_this2.queries.has(name)) {
                    highlighter.abort();
                    return;
                  }

                  _logger2.default.log('adding queries to: ' + querySet.name);
                  _this2.queries.set(name, querySet);
                  querySet.queryId = _this2.stats.highlight;
                  querySet.highlightId = _this2.lastId;
                  highlighter.init(querySet);
                });

                promise = (0, _util.createPromiseCapabilities)();

                highlighter.on('done', function (count) {
                  querySet.length += count;
                  if (enabled) {
                    _this2.stats.total += count;
                  }

                  if (reserve != null) {
                    if (reserve > count) {
                      _this2.lastId = reserve;
                      querySet.reserve = reserve;
                    } else {
                      _logger2.default.error('invalid or insufficient reserve specified');
                      querySet.reserve = count;
                    }
                  } else {
                    _this2.lastId += count;
                  }

                  // Update global statistics
                  ++_this2.stats.queries;

                  // Ensure CSS highlight class rolls over on overflow
                  ++_this2.stats.highlight;
                  if (_this2.stats.highlight >= _this2.options.maxHighlight) {
                    _this2.stats.highlight = 0;
                  }

                  var highlightData = [];
                  if (_util.highlightSubjects && _util.highlightSubjects.length) {
                    highlightData = _util.highlightSubjects.slice(0);
                  }

                  highlightData.push({
                    start: queries[0].start,
                    end: queries[0].end
                  });

                  (0, _util.setHighlightSubjects)(highlightData);

                  _this2.cursor.clear();
                  _this2.emit('add', name, querySet, queries);

                  if (_globals2.default.debugging) {
                    _this2.assert();
                  }

                  promise.resolve(count);
                });

                highlighter.on('abort', function () {
                  return promise.resolve();
                });

                this.renderer.enqueue(highlighter);
                this.renderer.next();
                return _context3.abrupt('return', promise.instance);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function add(_x2, _x3) {
        return _ref3.apply(this, arguments);
      }

      return add;
    }()

    /**
     * Append one or more queries to an existing query set
     *
     * If the query set doesn't yet exist, an exception is thrown. In addition, the query set
     * **must** have enough reserved space available to contain the new queries.  All queries not
     * fitting in the container are suppressed.
     *
     * @param {string} name - Name of the query set
     * @param {QuerySubject} queries - Array containing individual queries to highlight
     *
     * @returns {Promise<number>} Promise that resolves with number of highlights created
     */

  }, {
    key: 'append',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(name, queries) {
        var _this3 = this;

        var querySet, highlighter, promise;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                querySet = void 0;
                highlighter = _renderer.QueryHighlighter.instantiate(this.renderer, queries);
                promise = (0, _util.createPromiseCapabilities)();

                highlighter.on('init', function () {
                  querySet = _this3.queries.get(name);
                  if (querySet == null) {
                    highlighter.abort();
                    return;
                  }

                  _logger2.default.log('appending queries to: ' + querySet.name);
                  highlighter.init(querySet);
                });

                highlighter.on('done', function (count) {
                  // Should never happen
                  if (querySet == null) {
                    return;
                  }

                  querySet.length += count;
                  if (querySet.enabled) {
                    _this3.stats.total += count;
                  }

                  _this3.cursor.clear();
                  _this3.emit('append', name, querySet, queries);

                  if (_globals2.default.debugging) {
                    _this3.assert();
                  }

                  promise.resolve(count);
                });

                highlighter.on('abort', function () {
                  return promise.resolve();
                });

                this.renderer.enqueue(highlighter);
                this.renderer.next();
                return _context4.abrupt('return', promise.instance);

              case 9:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function append(_x6, _x7) {
        return _ref4.apply(this, arguments);
      }

      return append;
    }()

    /**
     * Remove a query set by name
     *
     * An exception is thrown if the query set does not exist.
     *
     * @param {string} name - Name of the query set to remove.
     */

  }, {
    key: 'remove',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(name) {
        var promise;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                promise = this.remove_(name);

                this.renderer.next();
                _context5.next = 4;
                return promise;

              case 4:
                this.cursor.clear();
                this.emit('remove', name);

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function remove(_x8) {
        return _ref5.apply(this, arguments);
      }

      return remove;
    }()

    /**
     * Enable a query set
     *
     * An exception is thrown if the query set does not exist.  If the query set is currently already
     * enabled, nothing is done.
     *
     * @param {string} name - Name of the query set to enable.
     */

  }, {
    key: 'enable',
    value: function enable(name) {
      var q = this.get_(name);
      if (q.enabled) {
        return;
      }

      dom.removeClass(dom.getForQuerySet(q.queryId), _consts.Css.disabled);

      q.enabled = true;
      this.stats.total += q.length;
      this.cursor.clear();
      this.emit('enable', name);
    }

    /**
     * Disable a query set
     *
     * An exception is thrown if the query set does not exist.  If the query set is currently already
     * disabled, nothing is done.
     *
     * @param {string} name - Name of the query set to disable.
     */

  }, {
    key: 'disable',
    value: function disable(name) {
      var q = this.get_(name);
      if (!q.enabled) {
        return;
      }

      dom.addClass(dom.getForQuerySet(q.queryId), _consts.Css.disabled);

      q.enabled = false;
      this.stats.total -= q.length;
      this.cursor.clear();
      this.emit('disable', name);
    }

    /**
     * Remove all query sets
     *
     * Optionally, the last query set id can be reset.
     *
     * @param {boolean} reset - Last query set id is reset, if `true`.
     */

  }, {
    key: 'clear',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(reset) {
        var promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step$value, name;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                promises = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context6.prev = 4;

                for (_iterator = (0, _getIterator3.default)(this.queries); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _step$value = (0, _slicedToArray3.default)(_step.value, 1), name = _step$value[0];

                  promises.push(this.remove_(name));
                }

                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6['catch'](4);
                _didIteratorError = true;
                _iteratorError = _context6.t0;

              case 12:
                _context6.prev = 12;
                _context6.prev = 13;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 15:
                _context6.prev = 15;

                if (!_didIteratorError) {
                  _context6.next = 18;
                  break;
                }

                throw _iteratorError;

              case 18:
                return _context6.finish(15);

              case 19:
                return _context6.finish(12);

              case 20:
                this.renderer.next();
                _context6.next = 23;
                return _promise2.default.all(promises);

              case 23:

                if (reset) {
                  this.lastId = 0;
                  this.stats.highlight = 0;
                }

                this.cursor.clear();
                this.emit('clear');

                if (_globals2.default.debugging) {
                  this.assert();
                }

              case 27:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 8, 12, 20], [13,, 15, 19]]);
      }));

      function clear(_x9) {
        return _ref6.apply(this, arguments);
      }

      return clear;
    }()

    /**
     * Return boolean value indicating whether a query exists
     *
     * @param {string} name - the name of query set
     * @returns {boolean} `true` if query exists
     */

  }, {
    key: 'has',
    value: function has(name) {
      return this.queries.has(name);
    }

    /**
     * Return state associated with highlight
     *
     * @param {number} highlightId - Highlight ID
     * @returns {any} State associated with highlight; `undefined` or `null` otherwise
     */

  }, {
    key: 'getState',
    value: function getState(highlightId) {
      return this.state.get(highlightId);
    }

    /**
     * Return boolean indicative of whether one or more query sets are currently contained
     *
     * @returns {boolean} `false` if no query sets currently
     * contained; `true` otherwise. */

  }, {
    key: 'empty',
    value: function empty() {
      return this.queries.size === 0;
    }

    /**
     * Return the last highlight id of a query set
     *
     * @param {string} name - the name of the query set.
     * @returns {number} the last highlight id or `-1` if query set empty.
     * */

  }, {
    key: 'lastIdOf',
    value: function lastIdOf(name) {
      var q = this.get_(name);
      var l = q.length;
      return l > 0 ? q.highlightId + l - 1 : -1;
    }

    /**
     * @event
     * Handle highlight creation
     *
     * Contains state associated with highlight and exposes event for clients.
     *
     * @param {QuerySet} querySet - associated highlight query set
     * @param {TextRange} hit - highlight text range
     * @param {number} id - highlight ID
     * @param {any} state - associated highlight state
     */


    /**
     * @event
     * Handle highlight removal
     *
     * Removes state associated with highlight and exposes event for clients.
     *
     * @param {number} id - highlight ID
     */

  }, {
    key: 'remove_',


    // Private interface
    // -----------------
    /**
     * Remove a query set by name
     *
     * Throws an exception if the query set does not exist.
     * @access private
     *
     * @param {string} name - The name of the query set to remove.
     * @returns {Promise<void>} Promise that resolves upon completion
     */
    value: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(name) {
        var _this4 = this;

        var querySet, promise, unhighlighter;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                querySet = void 0;
                promise = (0, _util.createPromiseCapabilities)();
                unhighlighter = _renderer.QueryUnhighlighter.instantiate(this.renderer);

                unhighlighter.on('unhighlight', this.onHighlightRemoved);
                unhighlighter.on('init', function () {
                  querySet = _this4.queries.get(name);
                  if (querySet == null) {
                    unhighlighter.abort();
                    return;
                  }

                  _logger2.default.log('remove query set: ' + querySet.name);
                  unhighlighter.init(querySet);
                });

                unhighlighter.on('done', function () {
                  // Should never happen
                  if (querySet == null) {
                    return;
                  }

                  _this4.markers.removeAll(querySet);
                  _this4.queries.delete(name);

                  --_this4.stats.queries;
                  _this4.stats.total -= querySet.length;

                  // TODO: Unfortunately, using the built-in `normalize` `HTMLElement` method to normalise text
                  // nodes means we have to refresh the offsets of the text nodes, which may not be desirable.
                  // There must be a better way.
                  if (_this4.options.normalise) {
                    _this4.options.container.normalize();
                    _this4.refresh();
                  }

                  if (_globals2.default.debugging) {
                    _this4.assert();
                  }

                  promise.resolve();
                });

                unhighlighter.on('abort', function () {
                  return promise.resolve();
                });

                this.renderer.enqueue(unhighlighter);
                return _context7.abrupt('return', promise.instance);

              case 9:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function remove_(_x10) {
        return _ref7.apply(this, arguments);
      }

      return remove_;
    }()

    /**
     * Safely retrieve a query set's descriptor
     *
     * Throws an exception if the query set does not exist.
     *
     * @param {string} name - The name of the query set to retrieve.
     * @returns {QuerySet} Query set descriptor
     */

  }, {
    key: 'get_',
    value: function get_(name) {
      var q = this.queries.get(name);
      if (q == null) {
        throw new Error('Query set non-existent: ' + name);
      }
      return q;
    }

    /**
     * Perform assorted debugging assertions
     */

  }, {
    key: 'assert',
    value: function assert() {
      this.content.assert();

      var size = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = (0, _getIterator3.default)(this.queries), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),
              query = _step2$value[1];

          size += query.length;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
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
  }]);
  return HtmlHighlighter;
}(_events2.default);

HtmlHighlighter.defaults = {
  // Sometimes it is useful for the client to determine how to bring an element into view via
  // scrolling. If `scrollTo` is set, then it is called as a function with a `Node` to scroll
  // to.
  scrollTo: null,
  maxHighlight: 1,
  useQueryAsClass: false,
  normalise: true,
  rendering: {
    async: false,
    interval: 250 // In effect only if `async` is `true`; value in ms.
  }
};
exports.default = HtmlHighlighter;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _consts = __webpack_require__(17);

var _textrange = __webpack_require__(18);

var _textrange2 = _interopRequireDefault(_textrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenience class for applying highlights on arbitrary `TextRange` instances
 *
 * A `classes` attribute is cached at construction time with the CSS classes that will apply to all
 * created highlight instances, namely the:
 *
 *   - base highlight class (e.g. `hh-highlight`)
 *   - query ID class (e.g. `hh-highlight-1`)
 *
 * Then, each time a given range is highlighted, the CSS classes applied to the created highlight
 * element(s) are whatever was crafted at construction time plus a CSS class that uniquely
 * identifies the highlight, which takes the following form: `hh-highlight-id-${highlightID}`.
 * Finally, the highlight ID is returned but also incremented so the next generated highlight is
 * guaranteed to be unique.
 */
var RangeHighlighter = function () {

  /**
   * Class constructor
   *
   * @param {number} queryId - The ID of the query set highlights belong to
   * @param {number} highlightId - The first available highlight ID to apply
   * @param {bool} enabled - If explicitly `false`, highlights are created but not shown
   * @param {string | null} cssClass - Additional CSS class to use
   */
  function RangeHighlighter(queryId, highlightId, enabled, cssClass) {
    (0, _classCallCheck3.default)(this, RangeHighlighter);

    var classes = [_consts.Css.highlight, _consts.Css.highlight + '-' + queryId];

    if (cssClass != null) {
      classes.push(cssClass);
    }

    if (enabled === false) {
      classes.push(_consts.Css.disabled);
    }

    this.classes = classes.join(' ');
    this.id = highlightId;
  }

  /**
   * Highlight a `TextRange` instance
   *
   * Causes the current highlight `id` attribute to be incremented.
   *
   * @param {TextRange} range - TextRange instance to apply highlighting to
   * @returns {number} Unique highlight id
   */


  (0, _createClass3.default)(RangeHighlighter, [{
    key: 'do',
    value: function _do(range) {
      range.surround(this.classes + ' ' + _consts.Css.highlight + '-id-' + this.id);
      return this.id++;
    }
  }]);
  return RangeHighlighter;
}();

exports.default = RangeHighlighter;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(24);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _merge = __webpack_require__(63);

var _merge2 = _interopRequireDefault(_merge);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _finder = __webpack_require__(43);

var _finder2 = _interopRequireDefault(_finder);

var _textrange = __webpack_require__(18);

var _textrange2 = _interopRequireDefault(_textrange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* FIXME: create a class for matching of regular expression subjects. */
/**
 * Class responsible for finding text in a `TextContent` instance
 */
var TextFinder = function (_Finder) {
  (0, _inherits3.default)(TextFinder, _Finder);
  (0, _createClass3.default)(TextFinder, null, [{
    key: 'isSubject',

    /**
     * Determine if given subject is of type accepted by the `TextFinder` class
     *
     * This method determines if a given subject can be used to instantiate a `TextFinder` class.
     *
     * @param {any} subject - Subject to determine
     * @returns {boolean} `true` if subject can be used to instantiate a `TextFinder` class
     */
    value: function isSubject(subject) {
      return typeof subject === 'string' || subject instanceof RegExp;
    }

    /**
     * Class constructor
     *
     * @param {TextContent} content - Reference to `TextContent` instance
     * @param {TextFinderSubject} subject - Subject string to match
     */

  }]);

  function TextFinder(content, subject) {
    (0, _classCallCheck3.default)(this, TextFinder);

    // Build an array containing all hits of `subject´
    var _this = (0, _possibleConstructorReturn3.default)(this, (TextFinder.__proto__ || (0, _getPrototypeOf2.default)(TextFinder)).call(this, content));
    // Construct base class


    var match = void 0;
    var re = subject instanceof RegExp ? subject : new RegExp(subject.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');

    while ((match = re.exec(_this.content.text)) !== null) {
      _this.results.push({ length: match[0].length, index: match.index });
    }
    return _this;
  }

  /**
   * Return next available match
   *
   * @returns {TextRange | null} Returns a `TextRange` if a match is available, or `null` if no
   * more matches are available.
   */


  (0, _createClass3.default)(TextFinder, [{
    key: 'next',
    value: function next() {
      if (this.current >= this.results.length) {
        return null;
      }

      var match = this.results[this.current];
      var length = match.length;
      var start = this.getAt_(match.index);
      var end = void 0;

      // Re-use start marker descriptor if end offset within bounds of start text node
      if (start.offset + length <= start.marker.node.nodeValue.length) {
        end = (0, _merge2.default)({}, start);
        end.offset = start.offset + length - 1;
      } else {
        end = this.getAt_(match.index + length - 1);
      }

      var range = new _textrange2.default(this.content, start, end);
      ++this.current;

      return range;
    }
  }]);
  return TextFinder;
}(_finder2.default);

exports.default = TextFinder;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(24);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _finder = __webpack_require__(43);

var _finder2 = _interopRequireDefault(_finder);

var _textnodexpath = __webpack_require__(70);

var _textnodexpath2 = _interopRequireDefault(_textnodexpath);

var _textrange = __webpack_require__(18);

var _textrange2 = _interopRequireDefault(_textrange);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class responsible for locating text in a `TextContent` instance from an
 * XPath representation and start and end offsets.
 */
var XpathFinder = function (_Finder) {
  (0, _inherits3.default)(XpathFinder, _Finder);

  /**
   * Class constructor
   *
   * @param {TextContent} content - Reference to `TextContent` instance
   * @param {XpathSubject} subject - Descriptor containing an XPath representation and
   * start and end offsets.
   */
  // FIXME: what type is `subject`?
  function XpathFinder(content, subject) {
    (0, _classCallCheck3.default)(this, XpathFinder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (XpathFinder.__proto__ || (0, _getPrototypeOf2.default)(XpathFinder)).call(this, content));
    // Construct base class


    if (subject.start.offset < 0 || subject.end.offset < 0) {
      throw new Error('Invalid or no XPath object specified');
    }

    // Compute text node start and end elements that the XPath representation refers to.
    var end = void 0;
    var xpath = new _textnodexpath2.default(_this.content.root);
    var start = xpath.elementAt(subject.start.xpath);

    // If an element could not be obtained from the XPath representation, abort now (messages will
    // have been output).
    if (start === null) {
      return (0, _possibleConstructorReturn3.default)(_this);
    }

    end = xpath.elementAt(subject.end.xpath);
    if (end === null) {
      return (0, _possibleConstructorReturn3.default)(_this);
    }

    // Retrieve global character offset of the text node.
    start = content.find(start);
    end = content.find(end);
    if (start < 0 || end < 0) {
      _logger2.default.error('unable to derive global offsets: %d:%d [xpath=%s:%s to end=%s:%s]', start, end, subject.start.xpath, subject.start.offset, subject.end.xpath, subject.end.offset);
      return (0, _possibleConstructorReturn3.default)(_this);
    }

    // Retrieve offset markers.
    start = content.at(start).offset + subject.start.offset;
    end = content.at(end).offset + subject.end.offset - 1;

    /* logger.log("DEBUG start = ", start, "end = ", end, subject); */

    if (start > end) {
      throw new Error('Invalid XPath representation: start > end');
    }

    // Save global character offset and relative start and end offsets in descriptor.
    _this.results.push({ start: start, end: end });
    return _this;
  }

  /**
   * Return next available match
   *
   * @returns {TextRange | null} Returns a `TextRange` if a match is available, or `null` if no
   * more matches are available.
   */


  (0, _createClass3.default)(XpathFinder, [{
    key: 'next',
    value: function next() {
      if (this.current >= this.results.length) {
        return null;
      }

      var subject = this.results[this.current];
      if (subject == null) {
        throw new Error('Subject not found');
      }
      ++this.current;

      // TODO: we don't necessarily need to invoke getAt_ for the end offset.  A check has to be made
      // to ascertain if the end offset falls within the start node.
      return new _textrange2.default(this.content, this.getAt_(subject.start), this.getAt_(subject.end));
    }
  }]);
  return XpathFinder;
}(_finder2.default);

exports.default = XpathFinder;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _textrange = __webpack_require__(18);

var _textrange2 = _interopRequireDefault(_textrange);

var _dom = __webpack_require__(13);

var dom = _interopRequireWildcard(_dom);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Positional highlight containment
 *
 * Manages highlights as they appear on the page rather than on the DOM to enable correct cursor
 * movement from highlight to highlight.
 */
var HighlightMarkers = function () {
  function HighlightMarkers() {
    (0, _classCallCheck3.default)(this, HighlightMarkers);

    this.markers = [];
  }

  (0, _createClass3.default)(HighlightMarkers, [{
    key: 'add',
    value: function add(query, id, hit) {
      var offset = hit.start.marker.offset + hit.start.offset;
      var mid = void 0;
      var min = 0;
      var max = this.markers.length - 1;

      while (min < max) {
        mid = Math.floor((min + max) / 2);

        if (this.markers[mid].offset < offset) {
          min = mid + 1;
        } else {
          max = mid;
        }
      }

      this.markers.splice(this.markers.length > 0 && this.markers[min].offset < offset ? min + 1 : min, 0, { query: query, id: id, offset: offset });
    }
  }, {
    key: 'removeAll',
    value: function removeAll(query) {
      var markers = this.markers;

      for (var i = 0; i < markers.length;) {
        if (markers[i].query === query) {
          markers.splice(i, 1);
        } else {
          ++i;
        }
      }
    }
  }, {
    key: 'get',
    value: function get(index) {
      return this.markers[index] || null;
    }
  }, {
    key: 'calculateTotal',
    value: function calculateTotal(queryNames) {
      if (queryNames == null) {
        return this.markers.length;
      }

      return this.markers.reduce(function (acc, marker) {
        if (queryNames.indexOf(marker.query.name) >= 0) {
          return acc + 1;
        }

        return acc;
      }, 0);
    }
  }, {
    key: 'calculateTotalVisible',
    value: function calculateTotalVisible(queryNames) {
      // Simple fix for now that accounts for when we're running in a JsDOM environment, under which
      // there are never any visible highlights.  This measure prevents tests from failing.
      if (process.env.TEST_ENV_JSDOM) {
        return this.calculateTotal(queryNames);
      } else if (queryNames == null) {
        return this.markers.reduce(function (acc, marker) {
          return acc + Number(dom.isHighlightVisible(marker.id));
        }, 0);
      }

      return this.markers.reduce(function (acc, marker) {
        if (queryNames.indexOf(marker.query.name) >= 0 && dom.isHighlightVisible(marker.id)) {
          return acc + 1;
        }

        return acc;
      }, 0);
    }
  }, {
    key: 'find',
    value: function find(at, queryNames) {
      var marker = null;

      this.markers.some(function (m) {
        var q = m.query;

        // Queryset must be enabled and highlight visible.  Note that highlights are never visible
        // in non-browser environments, in which case highlights are assumed to be visible.
        if (!q.enabled) {
          return false;
        } else if (queryNames != null && queryNames.indexOf(q.name) < 0) {
          return false;
        } else if (!process.env.TEST_ENV_JSDOM && !dom.isHighlightVisible(m.id)) {
          return false;
        } else if (at < 1) {
          marker = m;
          return true;
        }

        --at;
        return false;
      });

      return marker;
    }
  }, {
    key: 'assert',
    value: function assert(expectedSize) {
      var lastOffset = 0;
      var size = 0;

      this.markers.forEach(function (i) {
        if (i.offset < lastOffset || i.id - i.query.highlightId >= i.query.length) {
          throw new Error('Invalid state: highlight out of position');
        }

        lastOffset = i.offset;
        ++size;
      });

      if (size !== expectedSize) {
        throw new Error('Invalid state: size mismatch');
      }
    }
  }]);
  return HighlightMarkers;
}();

exports.default = HighlightMarkers;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(166)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeUnhighlighter = exports.getDebugging = exports.setDebugging = exports.getVerbose = exports.setVerbose = exports.SelectedRange = exports.XPathFinder = exports.TextFinder = exports.RangeHighlighter = exports.HtmlHighlighter = undefined;

var _globals = __webpack_require__(34);

var _htmlhighlighter = __webpack_require__(64);

var _htmlhighlighter2 = _interopRequireDefault(_htmlhighlighter);

var _rangehighlighter = __webpack_require__(65);

var _rangehighlighter2 = _interopRequireDefault(_rangehighlighter);

var _textfinder = __webpack_require__(66);

var _textfinder2 = _interopRequireDefault(_textfinder);

var _xpathfinder = __webpack_require__(67);

var _xpathfinder2 = _interopRequireDefault(_xpathfinder);

var _selectedrange = __webpack_require__(98);

var _selectedrange2 = _interopRequireDefault(_selectedrange);

var _rangeunhighlighter = __webpack_require__(42);

var _rangeunhighlighter2 = _interopRequireDefault(_rangeunhighlighter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.HtmlHighlighter = _htmlhighlighter2.default;
exports.RangeHighlighter = _rangehighlighter2.default;
exports.TextFinder = _textfinder2.default;
exports.XPathFinder = _xpathfinder2.default;
exports.SelectedRange = _selectedrange2.default;
exports.setVerbose = _globals.setVerbose;
exports.getVerbose = _globals.getVerbose;
exports.setDebugging = _globals.setDebugging;
exports.getDebugging = _globals.getDebugging;
exports.RangeUnhighlighter = _rangeunhighlighter2.default;

// For whatever reason, it is not possible to use the handy `export * from "module"` syntax.

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _consts = __webpack_require__(17);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This class builds XPath representations of text nodes, optionally within a DOM sub-tree.  If a
 * root node is specified, the XPath produced will include the elements up to but **not** including
 * said root node.
 *
 * @param {DOMElement} [root=null] - Root DOM node
 */
var TextNodeXpath = function () {
  function TextNodeXpath(root) {
    (0, _classCallCheck3.default)(this, TextNodeXpath);

    this.root = root;
  }

  /**
   * Compute the XPath representation of a text node
   *
   * The XPath produced of the text node is fully normalised and unaffected by the current state of
   * text node fragmentation caused by the presence of highlight containers.
   *
   * Throws an exception if `node` is <strong>not</strong> a text node.
   *
   * @param {Node} node - Text node to compute XPath representation of
   * @returns {string} XPath representation
   */


  (0, _createClass3.default)(TextNodeXpath, [{
    key: 'xpathOf',
    value: function xpathOf(node) {
      // Note: no checks required since `indexOfText_´ throws exception if node invalid: null or not
      // like text.
      var xpath = '/text()[' + this.indexOfText_(node) + ']';

      // Skip all text or highlight container nodes
      /* eslint-disable curly */
      for (node = node.parentNode; node != null && node !== this.root && this.isLikeText_(node); node = node.parentNode) {}
      /* eslint-enable curly */

      // Start traversing upwards from `node´'s parent node until we hit `root´ (or null)
      for (; node != null && node !== this.root && node.nodeType === 1; node = node.parentNode) {
        var id = this.indexOfElement_(node);
        xpath = '/' + node.nodeName.toLowerCase() + '[' + id + ']' + xpath;
      }

      if (node == null) {
        throw new Error("Specified node not within root's subtree");
      }

      return xpath;
    }

    /**
     * Compute element referenced by an XPath string
     *
     * The element computed is the same that would result from traversing a DOM sub-tree fully
     * normalised and thus unaffected by text node fragmentation caused by the presence of highlight
     * containers.
     *
     * @param {string} xpath - String containing XPath representation
     * @returns {Node | null} The element referenced by the XPath string or `null` if not found
     * */

  }, {
    key: 'elementAt',
    value: function elementAt(xpath) {
      var parts = xpath.split('/');
      var part = void 0;
      var cur = this.root; /* start from the root node */

      // At an absolute minimum, a XPath representation must be of the form: /text(), which results
      // in `parts´ having a length of 2.
      if (parts[0].length !== 0 || parts.length < 2) {
        throw new Error('Invalid XPath representation');
      }

      // Break up the constituent parts of the XPath representation but discard the first element
      // since it'll be empty due to the starting forward slash in the XPath string.
      var i = 1;
      for (var l = parts.length - 1; i < l; ++i) {
        part = this.xpathPart_(parts[i]);
        cur = this.nthElementOf_(cur, part.tag, part.index);
        if (cur == null) {
          // This, we would hope, would be indicative that the tree mutated.  Otherwise, either this
          // algorithm is flawed or the reverse operation is.
          _logger2.default.error('failed to find nth child:', part, cur);
          return null;
        }
      }

      // Now process the text element given by `parts[i]`.
      part = parts[i].trim();
      if (part.length === 0) {
        throw new Error('XPath part cannot be empty. As an example, the form `//tag` is not currently\nallowed.  Offending XPath representation: ' + xpath);
      }

      part = this.xpathPart_(parts[i]);
      // Casting `cur` to `any` because we check above after mutation and return if `null`
      cur = part.tag === 'text()' ? this.nthTextOf_(cur, part.index) : null;

      if (cur == null || cur.nodeType !== 3) {
        _logger2.default.error('element at specified XPath NOT a text node:', xpath, part, cur);
        return null;
      }

      return cur;
    }

    /**
     * Calculate the relative offset from a specified text node
     * (`node`) to the start of the first **sibling**
     * text node in a set of contiguous text or highlight container nodes.
     *
     * For example, given the post-highlight, non-normalised, child contents
     * of an arbitrary element:
     *
     *   `#text + SPAN.hh-highlight + #text + STRONG`
     *
     * If this method were invoked with `node` containing a
     * reference to the third `#text` element, the computed offset
     * would be the length of the `SPAN` to its left plus the length
     * of the first `#text`.  This because the normalised version --
     * pre-highlight, that is -- of the above would be:
     *
     *   `#text + STRONG`
     *
     * @param {Node} node - Text node
     * @returns {number} Offset of text node
     */

  }, {
    key: 'offset',
    value: function offset(node) {
      var offset = 0;

      if (node == null || node.nodeType !== 3) {
        throw new Error('Invalid or no text node specified');
      }

      /* eslint-disable no-constant-condition */
      // Climb the tree of nested highlight containers in a left to right order, if any, calculating
      // their respective lengths and adding to the overall offset.
      while (true) {
        while (node.previousSibling == null) {
          node = node.parentNode;
          if (node === this.root || node == null) {
            throw new Error('Invalid state: expected highlight container or text node');
          } else if (!this.isHighlight_(node)) {
            return offset;
          } else if (node.previousSibling != null) {
            break;
          }
        }

        node = node.previousSibling;
        if (!this.isLikeText_(node)) {
          break;
        }

        offset += this.length_(node);
      }
      /* eslint-enable no-constant-condition */

      return offset;
    }

    /**
     * Calculate the length of all text nodes in a specified sub-tree
     *
     * Note that no checks are made to ensure that the node is either a
     * highlight container or text node.  Caller is responsible for invoking this
     * method in the right context.
     *
     * @access private
     * @param {Node} node - text node or **highlight** container
     * @returns {number} Combined length of text nodes
     */

  }, {
    key: 'length_',
    value: function length_(node) {
      if (node.nodeType === 3) {
        return node.nodeValue.length;
      }

      // If `node´ isn't of text type, it is *assumed* to be a highlight container.  No checks are
      // made to ensure this is the case.  Caller is responsible!
      var ch = node.childNodes;
      var length = 0;

      // We loop recursively through all child nodes because a single highlight container may be
      // parent to multiple highlight containers.
      for (var i = 0, l = ch.length; i < l; ++i) {
        length += this.length_(ch[i]);
      }

      return length;
    }

    /**
     * Skip to first highlight container parent of a specified node, if it is of text type
     *
     * @param {Node} node - text node.
     * @returns {Node} First highlight container of text node, if applicable.
     */

  }, {
    key: 'skip_',
    value: function skip_(node) {
      // Don't do anything if node isn't of text type
      if (node.nodeType === 3) {
        while (node != null) {
          // Skip to first highlight container element
          var parent = node.parentNode;
          if (parent === this.root || !this.isHighlight_(parent)) {
            break;
          }

          node = parent;
        }
      }

      return node;
    }

    /**
     * Return boolean value indicative of whether a given node is a highlight container
     * @access private
     *
     * @param {Node} node - DOM element to check
     * @returns {boolean} `true` if it is a highlight container
     */

  }, {
    key: 'isHighlight_',
    value: function isHighlight_(node) {
      // NOTE: this is potentially problematic if the document uses class names that contain or are
      // equal to `Css.highlight´.
      return node.nodeName.toLowerCase() === 'span' && node.className.indexOf(_consts.Css.highlight) !== -1;
    }

    /**
     * Return the XPath index of an arbitrary element node, excluding text nodes, relative to its
     * sibling nodes
     *
     * Note that XPath indices are **not** zero-based.
     *
     * @access private
     * @param {Node} node - DOM element to calculate index of
     * @returns {number} Index of node plus one
     */

  }, {
    key: 'indexOfElement_',
    value: function indexOfElement_(node) {
      if (this.isLikeText_(node)) {
        throw new Error('No node specified or node of text type');
      }

      var name = node.nodeName.toLowerCase();
      var index = 1;

      while ((node = node.previousSibling) !== null) {
        // Don't count contiguous text nodes or highlight containers as being nodes.  IOW, contiguous
        // text nodes or highlight containers are treated as ONE element.  Also ignore special
        // document type nodes (e.g. `<!DOCTYPE html>`) for HTML5 documents, to avoid producing an
        // invalid XPath representation of `/html[2]` rather than the expected `/html[1]`.
        if (!this.isLikeText_(node) && node.nodeName.toLowerCase() === name && node.nodeType !== Node.DOCUMENT_TYPE_NODE) {
          ++index;
        }
      }

      return index;
    }

    /**
     * Return the XPath index of an arbitrary **text** node, excluding element nodes, relative to its
     * sibling nodes.
     *
     * Since text nodes are liable to be truncated to enable highlight of a substring of text, this
     * method counts contiguous text nodes and highlight container elements as one, e.g.:
     *
     * ```
     * #text + STRONG + #text + SPAN.highlight
     * ```
     *
     * In the example above, the index of the third node is the same as the
     * fourth node's, or 3.  More clearly:
     *
     * ```
     * 1, 2, 3, 3
     * ```
     *
     * Note that XPath indices are **not** zero-based.
     *
     * @access private
     * @param {Node} node - DOM element to calculate index of.
     * @returns {number} Index of node plus one.
     */

  }, {
    key: 'indexOfText_',
    value: function indexOfText_(node) {
      if (!this.isLikeText_(node)) {
        throw new Error('No node specified or not of text type');
      }

      var index = 1;
      var wast = true;

      node = this.skip_(node);
      while ((node = node.previousSibling) != null) {
        // Don't count contiguous text nodes or highlight containers as being separate nodes.  IOW,
        // contiguous text nodes or highlight containers are treated as ONE element.
        if (this.isLikeText_(node)) {
          if (wast) {
            continue;
          } else {
            wast = true;
          }
          ++index;
        } else {
          wast = false;
        }
      }

      return index;
    }

    /**
     * Return `true` if specified node is either of text type or a highlight container, thus like a
     * text node
     *
     * @param {Node} node - node to check
     * @returns {boolean} - `true` if node is of text type of highlight container
     */

  }, {
    key: 'isLikeText_',
    value: function isLikeText_(node) {
      return node.nodeType === 3 || this.isHighlight_(node);
    }

    /**
     * Return an object map containing a tag and index of an XPath representation part
     *
     * Exceptions may be thrown if the regular expression matcher encounters an unrecoverable error
     * of if the index in the XPath part is less than 1.
     *
     * Object returned is of the form:
     * ```
     * {
     *   tag: string,
     *   index: integer
     * }
     * ```
     *
     * @param {string} part - An XPath representation part; e.g. "div[2]", "text()[3]" or "p"
     * @returns {XPathPart} Object containing tag and index
     */

  }, {
    key: 'xpathPart_',
    value: function xpathPart_(part) {
      var index = void 0;

      // If no index specified: assume first
      if (part.indexOf('[') === -1) {
        return { tag: part.toLowerCase(), index: 0 };
      }

      var matchedPart = void 0;
      // *Attempt* to retrieve element's index.  If an exception is thrown, produce a meaningful
      // error but re-throw since the XPath representation is clearly invalid.
      try {
        // Note that `any` casts below are deliberate since we the code is within a try-catch block.
        var match = part.match(/([^[]+)\[(\d+)\]/);
        index = parseInt(match[2], 10);
        matchedPart = match[1];
        if (--index < 0) {
          throw new Error('Invalid index: ' + index);
        }
      } catch (x) {
        _logger2.default.error('failed to extract child index: ' + part);
        throw x; /* Re-throw after dumping inspectable object. */
      }

      return { tag: matchedPart.toLowerCase(), index: index };
    }

    /**
     * Find the nth child element of a specified node, **excluding** text nodes
     *
     * @param {Node} parent - node whose children to search
     * @param {string} tag - the tag name of the node sought in **lowercase** form
     * @param {integer} index - child index of the node sought
     *
     * @returns {Node | null} The nth element of `node` or `null` if non-existent
     */

  }, {
    key: 'nthElementOf_',
    value: function nthElementOf_(parent, tag, index) {
      var ch = parent.children;
      var node = void 0;

      for (var i = 0, l = ch.length; i < l; ++i) {
        node = ch[i];

        // Skip highlight containers since tag could be `span´, the same as highlight containers.
        if (this.isHighlight_(node)) {
          continue;
        } else if (node.nodeName.toLowerCase() === tag) {
          if (index === 0) {
            return node;
          }
          --index;
        }
      }

      _logger2.default.error('failed to locate tag \'' + tag + '\' at index ' + String(index));
      return null;
    }

    /**
     * Find the nth normalised text node within a specified element node
     *
     * @param {Node} parent - node whose children to search
     * @param {integer} index - child index of the node sought
     *
     * @returns {Node | null} element node or `null` if no match
     */

  }, {
    key: 'nthTextOf_',
    value: function nthTextOf_(parent, index) {
      var node = void 0;
      var wast = false;
      var ch = parent.childNodes;

      for (var i = 0, l = ch.length; i < l; ++i) {
        node = ch[i];

        // Don't count contiguous text or highlight container nodes and ignore non-text nodes
        if (this.isLikeText_(node)) {
          if (wast) {
            continue;
          } else {
            wast = true;
          }
        } else {
          wast = false;
          continue;
        }

        // We have got a potential match when `index´ === 0
        if (index === 0) {
          // Skip to first text node if currently on a highlight container
          while (this.isHighlight_(node)) {
            ch = node.childNodes;
            if (ch.length === 0 || !this.isLikeText_(ch[0])) {
              throw new Error('Invalid state: expected text node or highlight container inside container');
            }

            node = ch[0];
          }

          // Ensure tag sought after is the right one
          if (node.nodeType !== 3) {
            _logger2.default.error('failed to locate text node at index ' + String(index));
            return null;
          }

          return node;
        }

        --index;
      }

      // No match!
      return null;
    }
  }]);
  return TextNodeXpath;
}();

exports.default = TextNodeXpath;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(112);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(111);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(167);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(7).f;
var create = __webpack_require__(38);
var redefineAll = __webpack_require__(53);
var ctx = __webpack_require__(10);
var anInstance = __webpack_require__(44);
var forOf = __webpack_require__(29);
var $iterDefine = __webpack_require__(48);
var step = __webpack_require__(84);
var setSpecies = __webpack_require__(95);
var DESCRIPTORS = __webpack_require__(9);
var fastKey = __webpack_require__(49).fastKey;
var validate = __webpack_require__(58);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(37);
var from = __webpack_require__(127);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var $export = __webpack_require__(3);
var meta = __webpack_require__(49);
var fails = __webpack_require__(20);
var hide = __webpack_require__(12);
var redefineAll = __webpack_require__(53);
var forOf = __webpack_require__(29);
var anInstance = __webpack_require__(44);
var isObject = __webpack_require__(6);
var setToStringTag = __webpack_require__(32);
var dP = __webpack_require__(7).f;
var each = __webpack_require__(129)(0);
var DESCRIPTORS = __webpack_require__(9);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(20)(function () {
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(21);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(52);
var createDesc = __webpack_require__(31);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(57);
var has = __webpack_require__(15);
var IE8_DOM_DEFINE = __webpack_require__(78);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(9) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(89);
var hiddenKeys = __webpack_require__(47).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(15);
var toObject = __webpack_require__(33);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(15);
var toIObject = __webpack_require__(22);
var arrayIndexOf = __webpack_require__(128)(false);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var isObject = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(50);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(3);
var aFunction = __webpack_require__(27);
var ctx = __webpack_require__(10);
var forOf = __webpack_require__(29);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(3);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(9);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(8);
var aFunction = __webpack_require__(27);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(10);
var invoke = __webpack_require__(134);
var html = __webpack_require__(77);
var cel = __webpack_require__(46);
var global = __webpack_require__(4);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(28)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _merge = __webpack_require__(63);

var _merge2 = _interopRequireDefault(_merge);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

var _selection = __webpack_require__(102);

var selection = _interopRequireWildcard(_selection);

var _htmlhighlighter = __webpack_require__(64);

var _htmlhighlighter2 = _interopRequireDefault(_htmlhighlighter);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _textrange = __webpack_require__(18);

var _textrange2 = _interopRequireDefault(_textrange);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Support for browser text selections
 *
 * This class is an extension of HTML Highlighter which provides support for browser text
 * selections.
 */
var SelectedRange = function () {
  (0, _createClass3.default)(SelectedRange, null, [{
    key: 'fromHtmlHighlighter',
    value: function fromHtmlHighlighter(instance) {
      return new SelectedRange(instance.content);
    }
  }]);

  function SelectedRange(content) {
    (0, _classCallCheck3.default)(this, SelectedRange);

    this.content = content;
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


  (0, _createClass3.default)(SelectedRange, [{
    key: 'get',
    value: function get() {
      var sel = window.getSelection();
      if (sel == null) {
        return null;
      }

      var range;
      if (sel.rangeCount > 0) {
        range = sel.getRangeAt(0);
      }

      if (range == null) {
        return null;
      }

      var start = void 0,
          end = void 0;
      try {
        start = selection.getNormalizedStartBoundaryPoint(range);
        end = selection.getNormalizedEndBoundaryPoint(range);
      } catch (x) {
        _logger2.default.error('unable to compute boundary points:', x);
        return null;
      }

      if (start.node.nodeType !== Node.TEXT_NODE || end.node.nodeType !== Node.TEXT_NODE) {
        _logger2.default.info('selection anchor or focus node(s) not text: ignoring');
        return null;
      }

      // Account for selections where the start and end elements are the same *and* whitespace exists
      // longer than one character.  For instance, The element `<p>a   b</p>` is shown as `a b` by
      // browsers with the whitespace rendered collapsed.  This means that in this particular
      // case, it is not possible to simply retrieve the length of the selection's text and use that
      // as the selection's end offset as it would be invalid.  The way to avoid calculating an
      // invalid end offset is by looking at the anchor and focus (start and end) offsets.
      // Strangely, if the selection spans more than one element, one may simply use the length of
      // the selected text regardless of the occurrence of whitespace in between.
      var len = start.node === end.node ? Math.abs(end.offset - start.offset) : sel.toString().length;
      if (len <= 0) {
        return null;
      }

      // Determine start and end indices in text offset markers array
      var startOffset = this.content.find(start.node);
      var endOffset = start.node === end.node ? startOffset : this.content.find(end.node);
      if (startOffset < 0 || endOffset < 0) {
        _logger2.default.error('unable to retrieve offset of selection anchor or focus node(s):', sel.anchorNode, start.node, sel.focusNode, end.node);
        return null;
      }

      // Create start and end range descriptors, whilst accounting for inverse selection where the
      // user selects text in a right to left orientation.
      var startDescr = void 0,
          endDescr = void 0;
      if (startOffset < endOffset || startOffset === endOffset && start.offset < end.offset) {
        startDescr = _textrange2.default.descriptorRel(this.content.at(startOffset), start.offset);

        if (start.node === end.node) {
          endDescr = (0, _merge2.default)({}, startDescr);
          endDescr.offset += len - 1;
        } else {
          endDescr = _textrange2.default.descriptorRel(this.content.at(endOffset), end.offset - 1);
        }
      } else {
        startDescr = _textrange2.default.descriptorRel(this.content.at(endOffset), end.offset);

        if (end.node === start.node) {
          endDescr = (0, _merge2.default)({}, startDescr);
          endDescr.offset += len - 1;
        } else {
          endDescr = _textrange2.default.descriptorRel(this.content.at(startOffset), start.offset - 1);
        }
      }

      return new _textrange2.default(this.content, startDescr, endDescr);
    }
    /* eslint-enable complexity, max-statements */

    /**
     * Clear the current text selection
     *
     * Only the Chrome and Firefox implementations are supported.
     */

  }, {
    key: 'clear',
    value: function clear() {
      // From: http://stackoverflow.com/a/3169849/3001914
      // Note that we don't support IE at all.
      var getSelection = window.getSelection;
      if (getSelection != null) {
        if (getSelection().empty) {
          // Chrome
          getSelection().empty();
          return;
        } else if (getSelection().removeAllRanges) {
          // Firefox
          getSelection().removeAllRanges();
          return;
        }
      }

      _logger2.default.warn('clearing of text selection not supported');
    }
  }]);
  return SelectedRange;
}();

exports.default = SelectedRange;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _getPrototypeOf = __webpack_require__(24);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(62);

var _events2 = _interopRequireDefault(_events);

var _dom = __webpack_require__(13);

var dom = _interopRequireWildcard(_dom);

var _consts = __webpack_require__(17);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

var _highlightmarkers = __webpack_require__(68);

var _highlightmarkers2 = _interopRequireDefault(_highlightmarkers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class responsible for managing the state of the highlight cursor
 *
 * Emits the following events:
 *
 *  - clear: cursor position is cleared
 *  - setiterable: allowable iterable queries set or cleared
 *  - update: cursor position mutated
 */
var Cursor = function (_EventEmitter) {
  (0, _inherits3.default)(Cursor, _EventEmitter);

  /**
   * Class constructor
   *
   * @param {HighlightMarkers} markers - Reference to highlight markers object
   */
  function Cursor(markers) {
    (0, _classCallCheck3.default)(this, Cursor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Cursor.__proto__ || (0, _getPrototypeOf2.default)(Cursor)).call(this));

    _this.markers = markers;
    _this.index = -1;
    _this.iterableQueries = null;
    _this.total = 0;
    _this.setIterableQueries(null);
    return _this;
  }

  /**
   * Clear the current cursor state and recalculate number of total iterable highlights */


  (0, _createClass3.default)(Cursor, [{
    key: 'clear',
    value: function clear() {
      this.clearActive_();
      this.index = -1;
      this.update(true);
      this.emit('clear');
    }

    /**
     * Set or clear the query sets that the cursor can move through
     *
     * When one or more query sets are specified, cursor movement is restricted to the specified
     * query sets.  When setting the cursor offset, the offset will then apply within the context of
     * the active iterable query sets.
     *
     * The restriction can be lifted at any time by passing `null` to the method.
     *
     * @param {IterableQueries | null} queries - An array (or string) containing the query set names
     * or `null` if all query-sets active.
     */

  }, {
    key: 'setIterableQueries',
    value: function setIterableQueries(queries) {
      if (queries == null) {
        this.iterableQueries = null;
      } else if (typeof queries === 'string') {
        this.iterableQueries = [queries];
      } else {
        this.iterableQueries = queries.slice();
      }

      this.clear();
      this.emit('setiterable', queries);
    }

    /**
     * Update the total of iterable highlights
     *
     * Causes recomputation of the total available number of visible highlights and produces the
     * update event if this number changes.  The event can be forcefully produced it `force` is set
     * to `true`.
     *
     * @param { boolean } force - When `true` causes the "update" event to always be emitted
     */

  }, {
    key: 'update',
    value: function update() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var total = this.markers.calculateTotalVisible(this.iterableQueries);
      if (force || total !== this.total) {
        this.total = total;
        this.emit('update', this.index, this.total);
      }
    }

    /**
     * Set cursor to query referenced by absolute query index
     *
     * @param {number} index - Virtual cursor index
     * @param {boolean} dontRecurse - When `true` instructs the method not to employ recursion
     * @param {ScrollToCallback} scrollTo - Optional custom function to invoke if highlight being
     * moved to is not visible on the page
     *
     * @returns {boolean} `true` if move occurred
     */

  }, {
    key: 'set',
    value: function set(index, dontRecurse, scrollTo) {
      if (index < 0) {
        throw new Error('Invalid cursor index specified: ' + index);
      }

      var marker = this.markers.find(index, this.iterableQueries);

      // If index overflown, set to first highlight
      if (marker == null) {
        if (!dontRecurse) {
          return this.set(0, true);
        }
        return false;
      }

      // Clear currently active highlight, if any, and set requested highlight active
      this.clearActive_();
      var coll = dom.getHighlightElements(marker.id);
      // Scroll viewport if element not visible
      if (coll.length > 0) {
        dom.addClass(coll, _consts.Css.enabled);

        var first = coll[0];
        if (typeof scrollTo === 'function') {
          try {
            scrollTo(first);
          } catch (x) {
            _logger2.default.error('failed to scroll to highlight:', x);
          }
        } else if (!dom.isInView(first)) {
          dom.scrollIntoView(first);
        }
      }

      if (this.index === index) {
        return false;
      }

      this.index = index;
      this.emit('update', index, this.total);
      return true;
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

  }, {
    key: 'prev',
    value: function prev() {
      if (this.total > 0) {
        this.set((this.index < 1 ? this.total : this.index) - 1, false);
      }
    }

    /**
     * Move cursor position to the next query in the active query set
     *
     * If the cursor moves past the last query in the active query set, the active query set moves to
     * the next available one and the cursor position to its first query.  If the current query set
     * is the last in the collection and thus it is not possible to move to the next query set, the
     * first query set is made active instead, thus ensuring that the cursor always rolls over.
     */

  }, {
    key: 'next',
    value: function next() {
      this.set(this.index + 1, false);
    }

    // Private interface
    // -----------------
    /**
     * Clear the currently active cursor highlight
     *
     * The active cursor highlight is the element or elements at the current cursor position.
     * @access private
     */

  }, {
    key: 'clearActive_',
    value: function clearActive_() {
      var cssEnabled = _consts.Css.enabled;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(dom.getAllHighlightElements(cssEnabled)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var el = _step.value;

          dom.removeClass(el, cssEnabled);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);
  return Cursor;
}(_events2.default);

exports.default = Cursor;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.finder = undefined;

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _finder = __webpack_require__(43);

var _finder2 = _interopRequireDefault(_finder);

var _textfinder = __webpack_require__(66);

var _textfinder2 = _interopRequireDefault(_textfinder);

var _xpathfinder = __webpack_require__(67);

var _xpathfinder2 = _interopRequireDefault(_xpathfinder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Construct appropriate `Finder`-derived class for a given subject
 *
 * @param {TextContent} content - reference to `TextContent` holding a text representation of the
 * document
 * @param {TextSubject | XpathSubject} subject - subject to find; can be of `string` or `RegExp`
 * type
 *
 * @returns {Finder} finder instance ready for use
 */
function finder(content, subject) {
  // FIXME: employ more robust check below that doesn't assume Xpath finder by default
  return _textfinder2.default.isSubject(subject) ? new _textfinder2.default(content, subject) : new _xpathfinder2.default(content, subject);
}

exports.finder = finder;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryUnhighlighter = exports.QueryHighlighter = undefined;

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(73);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(71);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(24);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(26);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(25);

var _inherits3 = _interopRequireDefault(_inherits2);

var _events = __webpack_require__(62);

var _events2 = _interopRequireDefault(_events);

var _logger = __webpack_require__(14);

var _logger2 = _interopRequireDefault(_logger);

var _consts = __webpack_require__(17);

var _factory = __webpack_require__(100);

var factory = _interopRequireWildcard(_factory);

var _rangehighlighter = __webpack_require__(65);

var _rangehighlighter2 = _interopRequireDefault(_rangehighlighter);

var _rangeunhighlighter = __webpack_require__(42);

var _rangeunhighlighter2 = _interopRequireDefault(_rangeunhighlighter);

var _textcontent = __webpack_require__(11);

var _textcontent2 = _interopRequireDefault(_textcontent);

var _util = __webpack_require__(35);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Query set renderer abstract base class
 */
var QueryRenderer = function (_EventEmitter) {
  (0, _inherits3.default)(QueryRenderer, _EventEmitter);

  function QueryRenderer(options) {
    (0, _classCallCheck3.default)(this, QueryRenderer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QueryRenderer.__proto__ || (0, _getPrototypeOf2.default)(QueryRenderer)).call(this));

    _this.options = options;
    _this.done = false;
    _this.pass = 0;
    _this.querySet = null;
    _this.deferTime = null;
    return _this;
  }

  (0, _createClass3.default)(QueryRenderer, [{
    key: 'prerender',
    value: function prerender() {
      if (this.done) {
        _logger2.default.error('query rendering already done');
        return null;
      } else if (this.pass > 0) {
        throw new Error('rendering already in progress');
      }

      // Instruct client to initialize renderer with query set.  Note that client may abort
      // rendering.
      this.emit('init');
      var q = this.querySet;
      if (this.done) {
        return null;
      } else if (q == null) {
        this.abort();
        return null;
      }

      return this.querySet;
    }
  }, {
    key: 'render',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_content) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                util.abstract();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render(_x) {
        return _ref.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: 'abort',
    value: function abort() {
      if (!this.done) {
        _logger2.default.log('aborting query render:', this.getQuerySetName());
        this.done = true;
        this.end('abort');
      }
    }
  }, {
    key: 'init',
    value: function init(querySet) {
      if (!this.done && this.pass < 1) {
        this.querySet = querySet;
      }
    }
  }, {
    key: 'wait',
    value: function wait() {
      var _options$rendering = this.options.rendering,
          isAsync = _options$rendering.async,
          interval = _options$rendering.interval;

      if (!isAsync) {
        return _promise2.default.resolve();
      }

      var deferTime = this.deferTime;
      if (deferTime != null && Date.now() < deferTime) {
        return _promise2.default.resolve();
      }

      this.deferTime = Date.now() + interval;
      return new _promise2.default(function (r) {
        return requestAnimationFrame(r);
      });
    }
  }, {
    key: 'end',
    value: function end(event) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.emit.apply(this, [event].concat(args));
      this.emit('end');
    }
  }, {
    key: 'getQuerySetName',
    value: function getQuerySetName() {
      return this.querySet != null ? this.querySet.name : '<unknown>';
    }
  }]);
  return QueryRenderer;
}(_events2.default);

/**
 * Query set highlighter
 *
 * Concerned with rendering a particular query set.
 */


var QueryHighlighter = function (_QueryRenderer) {
  (0, _inherits3.default)(QueryHighlighter, _QueryRenderer);
  (0, _createClass3.default)(QueryHighlighter, null, [{
    key: 'instantiate',
    value: function instantiate(renderer, queries) {
      return new QueryHighlighter(renderer.options, queries);
    }
  }]);

  function QueryHighlighter(options, queries) {
    (0, _classCallCheck3.default)(this, QueryHighlighter);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (QueryHighlighter.__proto__ || (0, _getPrototypeOf2.default)(QueryHighlighter)).call(this, options));

    _this2.queries = queries;
    _this2.reserve = null;
    _this2.count = 0;
    return _this2;
  }

  (0, _createClass3.default)(QueryHighlighter, [{
    key: 'render',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(content) {
        var q, csscl, highlighter, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, subject, finder, hit, id;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                q = this.prerender();

                if (!(q == null)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt('return');

              case 3:

                this.reserve = q.reserve != null && q.reserve > 0 ? q.reserve - q.length : null;

                csscl = null;

                if (this.options.useQueryAsClass) {
                  csscl = _consts.Css.highlight + '-' + q.name;
                }

                highlighter = new _rangehighlighter2.default(q.queryId, q.highlightId + q.length, q.enabled, csscl);

                // For each query, perform a lookup in the internal text representation and highlight each hit.
                // The global offset of each highlight is recorded by the `markers´ object.  The offset
                // is used by the `Cursor´ class to compute the next/previous highlight to show.

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 10;
                _iterator = (0, _getIterator3.default)(this.queries);

              case 12:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context2.next = 39;
                  break;
                }

                subject = _step.value;
                finder = void 0;
                _context2.prev = 15;

                finder = factory.finder(content, subject);
                _context2.next = 23;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](15);

                _logger2.default.exception('subject finder instantiation failed [query=' + q.name + ']: subject:', subject, _context2.t0);
                return _context2.abrupt('return');

              case 23:

                _logger2.default.log('processing subject:', subject);
                ++this.pass;

                hit = void 0;

              case 26:
                if (!((hit = finder.next()) != null)) {
                  _context2.next = 36;
                  break;
                }

                if (!(this.reserve != null && this.count >= this.reserve)) {
                  _context2.next = 30;
                  break;
                }

                _logger2.default.error('highlight reserve exceeded');
                return _context2.abrupt('break', 36);

              case 30:

                _logger2.default.log('highlighting:', hit);

                try {
                  // $FlowFixMe: `hit` cannot be `null` here as per condition in `while` above
                  id = highlighter.do(hit);

                  // Notify observers of creation of new highlight

                  this.emit('highlight', this.querySet, hit, id, subject.state);
                  ++this.count;
                } catch (x) {
                  _logger2.default.exception('highlighting failed [query=' + this.getQuerySetName() + ']: subject:', subject, x);
                }

                _context2.next = 34;
                return this.wait();

              case 34:
                _context2.next = 26;
                break;

              case 36:
                _iteratorNormalCompletion = true;
                _context2.next = 12;
                break;

              case 39:
                _context2.next = 45;
                break;

              case 41:
                _context2.prev = 41;
                _context2.t1 = _context2['catch'](10);
                _didIteratorError = true;
                _iteratorError = _context2.t1;

              case 45:
                _context2.prev = 45;
                _context2.prev = 46;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 48:
                _context2.prev = 48;

                if (!_didIteratorError) {
                  _context2.next = 51;
                  break;
                }

                throw _iteratorError;

              case 51:
                return _context2.finish(48);

              case 52:
                return _context2.finish(45);

              case 53:

                this.done = true;
                this.end('done', this.count);

              case 55:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[10, 41, 45, 53], [15, 19], [46,, 48, 52]]);
      }));

      function render(_x2) {
        return _ref2.apply(this, arguments);
      }

      return render;
    }()
  }]);
  return QueryHighlighter;
}(QueryRenderer);

/**
 * Query set unhighlighter
 *
 * Concerned with removing all highlights associated with a particular query set.
 */


var QueryUnhighlighter = function (_QueryRenderer2) {
  (0, _inherits3.default)(QueryUnhighlighter, _QueryRenderer2);

  function QueryUnhighlighter() {
    (0, _classCallCheck3.default)(this, QueryUnhighlighter);
    return (0, _possibleConstructorReturn3.default)(this, (QueryUnhighlighter.__proto__ || (0, _getPrototypeOf2.default)(QueryUnhighlighter)).apply(this, arguments));
  }

  (0, _createClass3.default)(QueryUnhighlighter, [{
    key: 'render',


    // TODO(mg): current algoritum is insufficient because it does not support async mechanics (see
    // QueryHighlighter::render).
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_content) {
        var q, unhighlighter, id, l;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                q = this.prerender();

                if (!(q == null)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt('return');

              case 3:

                ++this.pass;
                unhighlighter = new _rangeunhighlighter2.default();
                id = q.highlightId, l = id + q.length;

              case 6:
                if (!(id < l)) {
                  _context3.next = 14;
                  break;
                }

                unhighlighter.undo(id);
                this.emit('unhighlight', id);
                _context3.next = 11;
                return this.wait();

              case 11:
                ++id;
                _context3.next = 6;
                break;

              case 14:

                this.done = true;
                this.end('done');

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function render(_x3) {
        return _ref3.apply(this, arguments);
      }

      return render;
    }()
  }], [{
    key: 'instantiate',
    value: function instantiate(renderer) {
      return new QueryUnhighlighter(renderer.options);
    }
  }]);
  return QueryUnhighlighter;
}(QueryRenderer);

/**
 * Master renderer component
 *
 * Responsible for managing rendering of individual query sets.
 */


var Renderer = function (_EventEmitter2) {
  (0, _inherits3.default)(Renderer, _EventEmitter2);

  function Renderer(options) {
    (0, _classCallCheck3.default)(this, Renderer);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (Renderer.__proto__ || (0, _getPrototypeOf2.default)(Renderer)).call(this));

    _this4.onNext = function () {
      _this4.active = null;
      _this4.next();

      // Signal completion of last rendering queue if not rendering anything right now.
      if (_this4.active == null) {
        _this4.emit('done');
      }
    };

    _this4.options = options;
    _this4.queue = [];
    _this4.active = null;
    _this4.content = null;

    _logger2.default.log('async rendering mode: ' + String(_this4.options.rendering.async));
    return _this4;
  }

  (0, _createClass3.default)(Renderer, [{
    key: 'setContent',
    value: function setContent(content) {
      this.content = content;
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.queue.length < 1 || this.active != null || this.content == null) {
        return;
      }

      var active = this.active = this.queue[0];
      active.once('end', this.onNext);
      // $FlowFixMe: `content` guaranteed not `null` here
      active.render(this.content);
    }
  }, {
    key: 'wait',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this5 = this;

        var active;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                active = this.active;

                if (!(active == null)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt('return');

              case 3:
                _context4.next = 5;
                return new _promise2.default(function (resolver) {
                  return _this5.once('done', resolver);
                });

              case 5:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function wait() {
        return _ref4.apply(this, arguments);
      }

      return wait;
    }()
  }, {
    key: 'enqueue',
    value: function enqueue(renderer) {
      var _this6 = this;

      var cleanup = function cleanup() {
        _logger2.default.log(renderer.constructor.name + ': rendering done [' + renderer.getQuerySetName() + ']');
        var idx = _this6.queue.indexOf(renderer);
        _this6.queue.splice(idx, 1);
      };

      renderer.once('end', cleanup);
      this.queue.push(renderer);
    }
  }]);
  return Renderer;
}(_events2.default);

exports.default = Renderer;
exports.QueryHighlighter = QueryHighlighter;
exports.QueryUnhighlighter = QueryUnhighlighter;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNormalizedEndBoundaryPoint = exports.getNormalizedStartBoundaryPoint = undefined;

var _dom = __webpack_require__(13);

function getNormalizedStartBoundaryPoint(range) {
  var node = void 0,
      offset = void 0;
  node = range.startContainer;
  offset = range.startOffset;

  if (node.nodeType !== Node.TEXT_NODE) {
    node = node.childNodes[offset];
    if (node == null) {
      throw new Error('[InvalidNodeTypeError] Invalid start container');
    }
  }

  return { node: node, offset: offset };
}

function getNormalizedEndBoundaryPoint(range) {
  var node = void 0,
      offset = void 0;
  node = range.endContainer;
  offset = range.endOffset;

  if (node.nodeType === Node.TEXT_NODE) {
    return { node: node, offset: offset };
  }

  var children = node.childNodes;
  var length = children.length;

  // The standard [0] states that the setEndAfter(node) method, when invoked, must run these steps:
  //
  //   1. Let parent be node’s parent.
  //   2. If parent is null, then throw an "InvalidNodeTypeError" DOMException.
  //   3. Set the end of the context object to boundary point (parent, node’s index plus 1).
  //
  // However, in respect to setting the start or end of a range to a boundary point, it further
  // states that:
  //
  //   1. If node is a doctype, then throw an "InvalidNodeTypeError" DOMException.
  //   2. If offset is greater than node’s length, then throw an "IndexSizeError" DOMException.
  //
  // The testcase "onpremWrappedHighlightByChild" [1] tests for a specific case whereby the offset
  // of the end node can, in some circumstances, be equal to the node's (contained children)
  // length.  For instance, consider the following HTML snippet:
  //
  //     <p><span class="target">located in </span><span class="website-entity-class" title="Entity
  // type: City"><span class="target">Boston</span></span></p>
  //
  // ... and then running:
  //
  //    const range = document.createRange();
  //    range.setStartBefore(document.querySelector('.target'));
  //    range.setEndAfter(document.querySelector('.target:last-child'));
  //
  // ... which produces a range where the end container/offset are:
  //
  //    endContainer: span.website-entity-class
  //    endOffset: 1
  //
  // ... however, document.querySelector('span.website-entity-class').childNode.length === 1
  //
  // This is significant because a range's offset is 0-based.  Special logic to account for this is
  // given below.
  //
  // [0] https://dom.spec.whatwg.org/#concept-range-bp-set
  // [1] in `./StarringSelectionNormalizer.testcases.js`
  if (offset > length) {
    throw new Error('[InvalidNodeTypeError] Invalid end container');
  } else if (offset === length) {
    // Attempt to find the last available text node as required by the normalizer, but do not fail
    // if not possible.
    node = (0, _dom.findLastTextNode)(node);
    if (node == null) {
      // Revert to given end container.
      node = range.endContainer;
      offset = 0;
    } else {
      offset = node.textContent.length;
    }
  } else {
    node = node.childNodes[offset];
    offset = 0;
  }

  return { node: node, offset: offset };
}

exports.getNormalizedStartBoundaryPoint = getNormalizedStartBoundaryPoint;
exports.getNormalizedEndBoundaryPoint = getNormalizedEndBoundaryPoint;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(2);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convenient class for visiting all text nodes that are siblings and descendants of a given root
 * node
 */
var TextNodeVisitor = function () {

  /**
   * Class constructor
   *
   * @param {Node} node - The node where to start visiting the DOM
   * @param {Node} [root=null] - The root node where to stop visiting the DOM
   */
  function TextNodeVisitor(node, root) {
    (0, _classCallCheck3.default)(this, TextNodeVisitor);

    if (root == null) {
      if (document.body == null) {
        throw new Error('document body not defined');
      }

      this.root = document.body;
    } else {
      this.root = root;
    }

    this.current = node;
  }

  /**
   * Get the next text node
   *
   * @returns {Node} The next text node or `null` if none found
   */


  (0, _createClass3.default)(TextNodeVisitor, [{
    key: 'next',
    value: function next() {
      var cur = this.current;
      if (cur == null || cur.nodeType !== 3) {
        throw new Error('No current node or not text node');
      }

      // Using `any` below to silence flow because of sanity check above
      var node = this.nextNode_(this.current);
      return node != null ? this.current = this.nextText_(node) : null;
    }

    // Private interface
    // -----------------
    /**
     * Get next node
     *
     * Gets the next node, text or otherwise, that is either a sibling or parent to a given node.
     *
     * @param {Node | null} node - current node
     * @returns {Node} next - node or `null` if none available or the root node was reached
     */

  }, {
    key: 'nextNode_',
    value: function nextNode_(node) {
      // Abort if invalid or root node; otherwise attempt to advance to sibling node
      if (node == null) {
        throw new Error('Invalid state: outside of root sub-tree');
      } else if (node === this.root) {
        return null;
      } else if (node.nextSibling != null) {
        return node.nextSibling;
      }

      // Move up to sibling of parent node
      return this.nextNode_(node.parentNode);
    }

    /**
     * Get next text node
     *
     * Get the next available text node that is either a descendant, sibling or otherwise, of a given
     * node.
     *
     * @param {Node} node - current node.
     * @returns {Node} next - node or `null` if none available or the root node was reached
     */

  }, {
    key: 'nextText_',
    value: function nextText_(node) {
      if (node === this.root || node.nodeType === 3) {
        return node;
      }

      var ch = node.childNodes;
      if (ch.length > 0) {
        return this.nextText_(ch[0]);
      }

      var next = this.nextNode_(node);
      return next != null ? this.nextText_(next) : null;
    }
  }]);
  return TextNodeVisitor;
}();

exports.default = TextNodeVisitor;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(114), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(116), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(119), __esModule: true };

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(121), __esModule: true };

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(124), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(125), __esModule: true };

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(105);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(19);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(146);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(16);
module.exports = __webpack_require__(144);


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(23);
__webpack_require__(16);
module.exports = __webpack_require__(145);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(16);
__webpack_require__(23);
__webpack_require__(148);
__webpack_require__(158);
__webpack_require__(157);
__webpack_require__(156);
module.exports = __webpack_require__(0).Map;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(149);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(152);
module.exports = __webpack_require__(0).Object.setPrototypeOf;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(16);
__webpack_require__(23);
__webpack_require__(153);
__webpack_require__(159);
__webpack_require__(160);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
__webpack_require__(16);
__webpack_require__(23);
__webpack_require__(154);
__webpack_require__(163);
__webpack_require__(162);
__webpack_require__(161);
module.exports = __webpack_require__(0).Set;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
__webpack_require__(41);
__webpack_require__(164);
__webpack_require__(165);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(23);
module.exports = __webpack_require__(60).f('iterator');


/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(29);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(142);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(10);
var IObject = __webpack_require__(79);
var toObject = __webpack_require__(33);
var toLength = __webpack_require__(39);
var asc = __webpack_require__(131);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var isArray = __webpack_require__(81);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(130);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(31);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(51);
var gOPS = __webpack_require__(87);
var pIE = __webpack_require__(52);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 134 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(38);
var descriptor = __webpack_require__(31);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var macrotask = __webpack_require__(97).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(28)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(51);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(22);
var gOPN = __webpack_require__(86).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var fails = __webpack_require__(20);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(6);
var anObject = __webpack_require__(8);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(10)(Function.call, __webpack_require__(85).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(56);
var defined = __webpack_require__(45);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(56);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var get = __webpack_require__(61);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(37);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(10);
var $export = __webpack_require__(3);
var toObject = __webpack_require__(33);
var call = __webpack_require__(82);
var isArrayIter = __webpack_require__(80);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(132);
var getIterFn = __webpack_require__(61);

$export($export.S + $export.F * !__webpack_require__(83)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(126);
var step = __webpack_require__(84);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(22);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(48)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(74);
var validate = __webpack_require__(58);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(76)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(38) });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(3);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(9), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(33);
var $getPrototypeOf = __webpack_require__(88);

__webpack_require__(139)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(3);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(140).set });


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(30);
var global = __webpack_require__(4);
var ctx = __webpack_require__(10);
var classof = __webpack_require__(37);
var $export = __webpack_require__(3);
var isObject = __webpack_require__(6);
var aFunction = __webpack_require__(27);
var anInstance = __webpack_require__(44);
var forOf = __webpack_require__(29);
var speciesConstructor = __webpack_require__(96);
var task = __webpack_require__(97).set;
var microtask = __webpack_require__(136)();
var newPromiseCapabilityModule = __webpack_require__(50);
var perform = __webpack_require__(90);
var userAgent = __webpack_require__(143);
var promiseResolve = __webpack_require__(91);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(53)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(95)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(83)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(74);
var validate = __webpack_require__(58);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(76)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(9);
var $export = __webpack_require__(3);
var redefine = __webpack_require__(92);
var META = __webpack_require__(49).KEY;
var $fails = __webpack_require__(20);
var shared = __webpack_require__(55);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(40);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(60);
var wksDefine = __webpack_require__(59);
var enumKeys = __webpack_require__(133);
var isArray = __webpack_require__(81);
var anObject = __webpack_require__(8);
var isObject = __webpack_require__(6);
var toObject = __webpack_require__(33);
var toIObject = __webpack_require__(22);
var toPrimitive = __webpack_require__(57);
var createDesc = __webpack_require__(31);
var _create = __webpack_require__(38);
var gOPNExt = __webpack_require__(138);
var $GOPD = __webpack_require__(85);
var $GOPS = __webpack_require__(87);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(51);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(86).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(52).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(30)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(93)('Map');


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(94)('Map');


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(75)('Map') });


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(3);
var core = __webpack_require__(0);
var global = __webpack_require__(4);
var speciesConstructor = __webpack_require__(96);
var promiseResolve = __webpack_require__(91);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(3);
var newPromiseCapability = __webpack_require__(50);
var perform = __webpack_require__(90);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(93)('Set');


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(94)('Set');


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(3);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(75)('Set') });


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('asyncIterator');


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)('observable');


/***/ }),
/* 166 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(168);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=htmlhighlighter.js.map