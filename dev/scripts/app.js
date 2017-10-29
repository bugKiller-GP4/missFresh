/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/rightarrow.png";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(11);
var isBuffer = __webpack_require__(36);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(26)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/login-back.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var normalizeHeaderName = __webpack_require__(38);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(13);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(13);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = window.Vue;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bus = new _vue2.default();
exports.default = Bus;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/userimg.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(1);
var settle = __webpack_require__(39);
var buildURL = __webpack_require__(41);
var parseHeaders = __webpack_require__(42);
var isURLSameOrigin = __webpack_require__(43);
var createError = __webpack_require__(14);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(44);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (!window.XMLHttpRequest &&
        process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(45);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(40);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(18);

__webpack_require__(19);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(7);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(20);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(21);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);
var router = new _vueRouter2.default({
    routes: _routes2.default
});

new _vue2.default({
    router: router
}).$mount('#app');

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = window.VueRouter;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mine = __webpack_require__(22);

var _mine2 = _interopRequireDefault(_mine);

var _login = __webpack_require__(31);

var _login2 = _interopRequireDefault(_login);

var _register = __webpack_require__(54);

var _register2 = _interopRequireDefault(_register);

var _setting = __webpack_require__(59);

var _setting2 = _interopRequireDefault(_setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: '/Mine',
    component: _mine2.default,
    name: 'Mine',
    children: [{
        path: '/Mine/Setting',
        component: _setting2.default,
        name: 'Setting'
    }]
}, {
    path: '/Login',
    component: _login2.default,
    name: 'Login'
}, {
    path: '/Register',
    component: _register2.default,
    name: 'Register'
    // {
    //     path: '/Setting',
    //     component: Setting,
    //     name: 'Setting'
    // }
}];

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_mine_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_mine_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_mine_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_f93a86a4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_mine_vue__ = __webpack_require__(28);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(23)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_mine_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_f93a86a4_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_mine_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\modules\\mine\\components\\mine.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f93a86a4", Component.options)
  } else {
    hotAPI.reload("data-v-f93a86a4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56371196", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f93a86a4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./mine.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f93a86a4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./mine.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none;\n}\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;\n}\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0;\n}\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit;\n}\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left;\n}\nul,\nol,\nmenu {\n  list-style: none;\n}\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \" \";\n}\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ntextarea {\n  resize: vertical;\n}\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none;\n}\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit;\n}\ninput:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n::-webkit-details-marker {\n  display: none;\n}\nmark {\n  background-color: transparent;\n}\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none;\n}\na,\nimg {\n  -webkit-touch-callout: none;\n}\na {\n  color: #00afc7;\n}\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \";\n}\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\");\n}\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle;\n}\nbody {\n  background: #fff;\n}\n#app {\n  height: 100%;\n}\n#app .m-index {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column;\n}\n#app .m-index .change {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      width: .1px;\n      width: 100%;\n      overflow: scroll;\n}\n#app .m-index .change header {\n        height: 1.1rem;\n        background: url(" + __webpack_require__(25) + ") no-repeat;\n        background-size: cover;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n}\n#app .m-index .change header button {\n          width: .84rem;\n          height: .34rem;\n          border-radius: .04rem;\n          font-size: .14rem;\n          color: #ff4891;\n          border: 1px #ff4891 solid;\n          background: 0 0;\n          margin: 0 auto;\n}\n#app .m-index .change header .user {\n          position: absolute;\n          left: 0;\n          top: 0;\n}\n#app .m-index .change header .user .user1 {\n            position: absolute;\n            top: .18rem;\n            left: .3rem;\n            width: .77rem;\n            height: .77rem;\n            border-radius: .4rem;\n            border: 1px solid #262626;\n}\n#app .m-index .change header .user p {\n            position: absolute;\n            font-size: .16rem;\n            left: 1.2rem;\n            top: .3rem;\n            width: .4rem;\n}\n#app .m-index .change header .user .user2 {\n            width: .87rem;\n            height: .2rem;\n            position: absolute;\n            top: .6rem;\n            left: 1.2rem;\n}\n#app .m-index .change section .home-total {\n        height: 84px;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        padding: 12px 0;\n}\n#app .m-index .change section .home-total li {\n          -webkit-box-flex: 1;\n          -webkit-flex: 1;\n          flex: 1;\n          width: .1px;\n          text-align: center;\n          padding-top: 12px;\n}\n#app .m-index .change section .home-total li .remain-money {\n            font-size: 12px;\n            color: #4d4d4d;\n}\n#app .m-index .change section .home-total li .remain-money .ng-binding {\n              font-size: 18px;\n              color: red;\n}\n#app .m-index .change section .home-total li .nb-binding {\n            font-size: 12px;\n            color: #4d4d4d;\n}\n#app .m-index .change section .invite {\n        height: 77px;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        align-items: center;\n        position: relative;\n}\n#app .m-index .change section .invite .invite-img {\n          display: inline-block;\n          height: 34px;\n          line-height: 77px;\n          width: 50%;\n          margin-left: 5%;\n          margin-top: 2%;\n}\n#app .m-index .change section .invite .invite-img img {\n            margin-bottom: 25%;\n            width: 100%;\n            height: 100%;\n}\n#app .m-index .change section .invite > img {\n          width: 14px;\n          height: 14px;\n          position: absolute;\n          right: 6%;\n}\n#app .m-index .change section .home-list {\n        padding: 20px;\n}\n#app .m-index .change section .home-list li {\n          position: relative;\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          align-items: center;\n          height: 61px;\n          position: relative;\n}\n#app .m-index .change section .home-list li::after {\n            pointer-events: none;\n            position: absolute;\n            z-index: 999;\n            top: 0;\n            left: 0;\n            content: \" \";\n            border-color: #ccc;\n            border-style: solid;\n            border-width: 1px 0 0 0;\n            -webkit-transform-origin: 0 0;\n            transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n#app .m-index .change section .home-list li::after {\n                width: 100%;\n                height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n#app .m-index .change section .home-list li::after {\n                width: 200%;\n                height: 200%;\n                -webkit-transform: scale(0.5);\n                transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n#app .m-index .change section .home-list li::after {\n                width: 300%;\n                height: 300%;\n                -webkit-transform: scale(0.33333);\n                transform: scale(0.33333);\n}\n}\n#app .m-index .change section .home-list li span {\n            font-size: 16px;\n            color: #262626;\n}\n#app .m-index .change section .home-list li img {\n            width: 14px;\n            height: 14px;\n            position: absolute;\n            right: 1%;\n}\n#app .m-index footer {\n      height: .5rem;\n      background: #ff0;\n}\n@keyframes slidein {\n0% {\n    right: -100%;\n}\n100% {\n    right: 0;\n}\n}\n@keyframes slideout {\n0% {\n    right: 0;\n}\n100% {\n    right: -100%;\n}\n}\n#app .slidein {\n    animation: slidein 1s 0s 1;\n    -webkit-animation: slidein 1s 0s 1;\n    /* Safari 和 Chrome */\n    right: 0% !important;\n}\n#app .slideout {\n    animation: slideout 1s 0s 1;\n    -webkit-animation: slideout 1s 0s 1;\n    /* Safari 和 Chrome */\n    right: -100% !important;\n}\n", "", {"version":3,"sources":["D:/aqfh5/stage3/week12/missFresh/src/modules/mine/components/mine.vue"],"names":[],"mappings":"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","file":"mine.vue","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\\0020\"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\n::-webkit-details-marker {\n  display: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \"\\0020\"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\nbody {\n  background: #fff; }\n\n#app {\n  height: 100%; }\n  #app .m-index {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    flex-direction: column; }\n    #app .m-index .change {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      width: .1px;\n      width: 100%;\n      overflow: scroll; }\n      #app .m-index .change header {\n        height: 1.1rem;\n        background: url(\"../images/my-bg.png\") no-repeat;\n        background-size: cover;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        position: relative; }\n        #app .m-index .change header button {\n          width: .84rem;\n          height: .34rem;\n          border-radius: .04rem;\n          font-size: .14rem;\n          color: #ff4891;\n          border: 1px #ff4891 solid;\n          background: 0 0;\n          margin: 0 auto; }\n        #app .m-index .change header .user {\n          position: absolute;\n          left: 0;\n          top: 0; }\n          #app .m-index .change header .user .user1 {\n            position: absolute;\n            top: .18rem;\n            left: .3rem;\n            width: .77rem;\n            height: .77rem;\n            border-radius: .4rem;\n            border: 1px solid #262626; }\n          #app .m-index .change header .user p {\n            position: absolute;\n            font-size: .16rem;\n            left: 1.2rem;\n            top: .3rem;\n            width: .4rem; }\n          #app .m-index .change header .user .user2 {\n            width: .87rem;\n            height: .2rem;\n            position: absolute;\n            top: .6rem;\n            left: 1.2rem; }\n      #app .m-index .change section .home-total {\n        height: 84px;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        padding: 12px 0; }\n        #app .m-index .change section .home-total li {\n          -webkit-box-flex: 1;\n          -webkit-flex: 1;\n          flex: 1;\n          width: .1px;\n          text-align: center;\n          padding-top: 12px; }\n          #app .m-index .change section .home-total li .remain-money {\n            font-size: 12px;\n            color: #4d4d4d; }\n            #app .m-index .change section .home-total li .remain-money .ng-binding {\n              font-size: 18px;\n              color: red; }\n          #app .m-index .change section .home-total li .nb-binding {\n            font-size: 12px;\n            color: #4d4d4d; }\n      #app .m-index .change section .invite {\n        height: 77px;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        align-items: center;\n        position: relative; }\n        #app .m-index .change section .invite .invite-img {\n          display: inline-block;\n          height: 34px;\n          line-height: 77px;\n          width: 50%;\n          margin-left: 5%;\n          margin-top: 2%; }\n          #app .m-index .change section .invite .invite-img img {\n            margin-bottom: 25%;\n            width: 100%;\n            height: 100%; }\n        #app .m-index .change section .invite > img {\n          width: 14px;\n          height: 14px;\n          position: absolute;\n          right: 6%; }\n      #app .m-index .change section .home-list {\n        padding: 20px; }\n        #app .m-index .change section .home-list li {\n          position: relative;\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          align-items: center;\n          height: 61px;\n          position: relative; }\n          #app .m-index .change section .home-list li::after {\n            pointer-events: none;\n            position: absolute;\n            z-index: 999;\n            top: 0;\n            left: 0;\n            content: \"\\0020\";\n            border-color: #ccc;\n            border-style: solid;\n            border-width: 1px 0 0 0;\n            -webkit-transform-origin: 0 0;\n            transform-origin: 0 0; }\n            @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n              #app .m-index .change section .home-list li::after {\n                width: 100%;\n                height: 100%; } }\n            @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n              #app .m-index .change section .home-list li::after {\n                width: 200%;\n                height: 200%;\n                -webkit-transform: scale(0.5);\n                transform: scale(0.5); } }\n            @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n              #app .m-index .change section .home-list li::after {\n                width: 300%;\n                height: 300%;\n                -webkit-transform: scale(0.33333);\n                transform: scale(0.33333); } }\n          #app .m-index .change section .home-list li span {\n            font-size: 16px;\n            color: #262626; }\n          #app .m-index .change section .home-list li img {\n            width: 14px;\n            height: 14px;\n            position: absolute;\n            right: 1%; }\n    #app .m-index footer {\n      height: .5rem;\n      background: #ff0; }\n\n@keyframes slidein {\n  0% {\n    right: -100%; }\n  100% {\n    right: 0; } }\n\n@keyframes slideout {\n  0% {\n    right: 0; }\n  100% {\n    right: -100%; } }\n  #app .slidein {\n    animation: slidein 1s 0s 1;\n    -webkit-animation: slidein 1s 0s 1;\n    /* Safari 和 Chrome */\n    right: 0% !important; }\n  #app .slideout {\n    animation: slideout 1s 0s 1;\n    -webkit-animation: slideout 1s 0s 1;\n    /* Safari 和 Chrome */\n    right: -100% !important; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/my-bg.png";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bus = __webpack_require__(8);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            show: true,
            isShowButton: false
        };
    },
    mounted: function mounted() {
        this.$route.params.isShow ? this.isShowButton = this.$route.params.isShow : sessionStorage.getItem('User') ? this.isShowButton = true : '';
        // this.$route.query.isShow ? this.isShowButton = this.$route.query.isShow : '';      
        // Bus.$on('is-log', (data)=>{
        //     console.log(data);
        // })
    },

    methods: {
        set: function set() {
            this.show = false;
            this.$router.push('/Mine/Setting');
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { width: "100%", height: "100%" } }, [
    _vm.show
      ? _c("div", { staticClass: "m-index" }, [
          _c("div", { staticClass: "change" }, [
            _c(
              "header",
              [
                _c(
                  "router-link",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isShowButton,
                        expression: "!isShowButton"
                      }
                    ],
                    attrs: { to: "/Login" }
                  },
                  [_c("button", [_vm._v("用户登录")])]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isShowButton,
                        expression: "isShowButton"
                      }
                    ],
                    staticClass: "user"
                  },
                  [
                    _c("img", {
                      staticClass: "user1",
                      attrs: { src: __webpack_require__(9), alt: "" }
                    }),
                    _vm._v(" "),
                    _c("p", [_vm._v("小鲜")]),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "user2",
                      attrs: { src: __webpack_require__(29), alt: "" }
                    })
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("section", [
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("ul", { staticClass: "home-list" }, [
                _vm._m(2),
                _vm._v(" "),
                _vm._m(3),
                _vm._v(" "),
                _vm._m(4),
                _vm._v(" "),
                _vm._m(5),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _vm._m(8),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _c("li", { on: { click: _vm.set } }, [
                  _c("span", [_vm._v("设置")]),
                  _vm._v(" "),
                  _c("img", {
                    attrs: { src: __webpack_require__(0), alt: "" }
                  })
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("footer")
        ])
      : _c("div", [_c("router-view")], 1)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "home-total" }, [
      _c("li", [
        _c("p", { staticClass: "remain-money" }, [
          _c("i", { staticClass: "ng-binding" }, [_vm._v("0")]),
          _vm._v("元\n                        ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "nb-binding" }, [_vm._v("余额")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", { staticClass: "remain-money" }, [
          _c("i", { staticClass: "ng-binding" }, [_vm._v("0")]),
          _vm._v("张\n                        ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "nb-binding" }, [_vm._v("红包")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", { staticClass: "remain-money" }, [
          _c("i", { staticClass: "ng-binding" }, [_vm._v("0")]),
          _vm._v("张\n                        ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "nb-binding" }, [_vm._v("优惠券")])
      ]),
      _vm._v(" "),
      _c("li", [
        _c("p", { staticClass: "remain-money" }, [
          _c("i", { staticClass: "ng-binding" }, [_vm._v("0")]),
          _vm._v("分\n                        ")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "nb-binding" }, [_vm._v("积分")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "invite" }, [
      _c("div", { staticClass: "invite-img" }, [
        _c("img", { attrs: { src: __webpack_require__(30), alt: "" } })
      ]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("我的订单")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("我的会员卡")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("我的地址")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("下载每日优鲜APP")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("联系客服")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("意见反馈")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("消息")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", [_vm._v("关于我们")]),
      _vm._v(" "),
      _c("img", {
        attrs: { src: __webpack_require__(0), alt: "" }
      })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f93a86a4", esExports)
  }
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/uservip.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/images/invite.png";

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_login_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_5be4669e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_login_vue__ = __webpack_require__(53);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_5be4669e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\modules\\mine\\components\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5be4669e", Component.options)
  } else {
    hotAPI.reload("data-v-5be4669e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("737224ce", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be4669e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./login.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5be4669e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none;\n}\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;\n}\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0;\n}\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit;\n}\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left;\n}\nul,\nol,\nmenu {\n  list-style: none;\n}\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \" \";\n}\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ntextarea {\n  resize: vertical;\n}\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none;\n}\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit;\n}\ninput:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n::-webkit-details-marker {\n  display: none;\n}\nmark {\n  background-color: transparent;\n}\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none;\n}\na,\nimg {\n  -webkit-touch-callout: none;\n}\na {\n  color: #00afc7;\n}\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \";\n}\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\");\n}\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle;\n}\nbody {\n  background: #fff;\n}\n.login {\n  width: 100%;\n  height: 100%;\n}\n.login header {\n    height: 44px;\n    position: relative;\n    position: relative;\n}\n.login header::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.login header::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.login header::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.login header::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.login header button {\n      position: absolute;\n      top: 0;\n      left: 2%;\n      width: 36px;\n      height: 43px;\n      background: url(" + __webpack_require__(5) + ") center no-repeat;\n      background-size: 19px 19px;\n      border: 0;\n}\n.login header span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      font-size: 16px;\n      line-height: 44px;\n}\n.login .reg {\n    width: 100%;\n    height: .5rem;\n    text-align: center;\n    font-size: .18rem;\n    line-height: .5rem;\n    margin: .05rem .05rem 0 0;\n    color: #ff4891;\n    position: relative;\n}\n.login .reg::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.login .reg::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.login .reg::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.login .reg::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.login .login-list {\n    padding: .3rem .3rem .1rem;\n}\n.login .login-list .phone {\n      padding-bottom: .1rem;\n      position: relative;\n      position: relative;\n}\n.login .login-list .phone::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.login .login-list .phone::after {\n            width: 100%;\n            height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.login .login-list .phone::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.login .login-list .phone::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n}\n}\n.login .login-list .phone .phone-num {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891;\n}\n.login .login-list .phone .get-yzm {\n        position: absolute;\n        right: 1%;\n        bottom: 30%;\n        font-size: 14px;\n        color: #ff4891;\n        padding: 5px 5px 4px;\n        border: 1px solid #ff4891;\n        border-radius: 5px;\n        background: #fff;\n}\n.login .login-list .password {\n      padding-top: .2rem;\n}\n.login .login-list .password .in-yzm {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891;\n}\n.login .login-list .log {\n      background-color: #ff4891;\n      color: #fff;\n      width: 95%;\n      height: 48px;\n      border-radius: .05rem;\n      border: 0;\n      margin-top: .3rem;\n}\n.login .login-list p {\n      font-size: 12px;\n      color: #969696;\n      padding-top: .1rem;\n      text-align: center;\n}\n.login .warn {\n    width: 50%;\n    margin: 0 auto;\n    height: .5rem;\n    line-height: .5rem;\n    text-align: center;\n    border-radius: .05rem;\n    background: rgba(0, 0, 0, 0.3);\n    color: #fff;\n}\n", "", {"version":3,"sources":["D:/aqfh5/stage3/week12/missFresh/src/modules/mine/components/login.vue"],"names":[],"mappings":"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","file":"login.vue","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\\0020\"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\n::-webkit-details-marker {\n  display: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \"\\0020\"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\nbody {\n  background: #fff; }\n\n.login {\n  width: 100%;\n  height: 100%; }\n  .login header {\n    height: 44px;\n    position: relative;\n    position: relative; }\n    .login header::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .login header::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .login header::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .login header::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n    .login header button {\n      position: absolute;\n      top: 0;\n      left: 2%;\n      width: 36px;\n      height: 43px;\n      background: url(\"../images/login-back.png\") center no-repeat;\n      background-size: 19px 19px;\n      border: 0; }\n    .login header span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      font-size: 16px;\n      line-height: 44px; }\n  .login .reg {\n    width: 100%;\n    height: .5rem;\n    text-align: center;\n    font-size: .18rem;\n    line-height: .5rem;\n    margin: .05rem .05rem 0 0;\n    color: #ff4891;\n    position: relative; }\n    .login .reg::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .login .reg::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .login .reg::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .login .reg::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n  .login .login-list {\n    padding: .3rem .3rem .1rem; }\n    .login .login-list .phone {\n      padding-bottom: .1rem;\n      position: relative;\n      position: relative; }\n      .login .login-list .phone::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .login .login-list .phone::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .login .login-list .phone::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .login .login-list .phone::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n      .login .login-list .phone .phone-num {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891; }\n      .login .login-list .phone .get-yzm {\n        position: absolute;\n        right: 1%;\n        bottom: 30%;\n        font-size: 14px;\n        color: #ff4891;\n        padding: 5px 5px 4px;\n        border: 1px solid #ff4891;\n        border-radius: 5px;\n        background: #fff; }\n    .login .login-list .password {\n      padding-top: .2rem; }\n      .login .login-list .password .in-yzm {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891; }\n    .login .login-list .log {\n      background-color: #ff4891;\n      color: #fff;\n      width: 95%;\n      height: 48px;\n      border-radius: .05rem;\n      border: 0;\n      margin-top: .3rem; }\n    .login .login-list p {\n      font-size: 12px;\n      color: #969696;\n      padding-top: .1rem;\n      text-align: center; }\n  .login .warn {\n    width: 50%;\n    margin: 0 auto;\n    height: .5rem;\n    line-height: .5rem;\n    text-align: center;\n    border-radius: .05rem;\n    background: rgba(0, 0, 0, 0.3);\n    color: #fff; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

var _bus = __webpack_require__(8);

var _bus2 = _interopRequireDefault(_bus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            isShow: false
            // wasShow : false
        };
    },

    methods: {
        log: function log() {
            var _this = this;

            if (/^1[34578][0-9]{9}$/.test(this.$refs.phoneNum.value)) {
                (0, _axios2.default)({
                    method: 'get',
                    url: 'http://datainfo.duapp.com/shopdata/userinfo.php?status=login&userID=' + this.$refs.phoneNum.value + '&password=' + this.$refs.pwd.value
                }).then(function (res) {
                    switch (res.data) {
                        case 0:
                            break;
                        case 2:
                            _this.wasShow = true;
                            setTimeout(function () {
                                this.wasShow = false;
                            }.bind(_this), 1500);break;
                        default:
                            // this.$router.push({path: 'Mine',query:{isShow:true}});
                            _this.$router.push({ name: 'Mine', params: { isShow: true } });
                            _bus2.default.$emit('is-log', 1);
                            sessionStorage.setItem('User', _this.$refs.phoneNum.value);
                            break;
                    }
                });
            } else {
                this.isShow = true;
                setTimeout(function () {
                    this.isShow = false;
                }.bind(this), 1500);
            }
        },
        back: function back() {
            history.go(-1);
        },
        inReg: function inReg() {
            this.$router.push('Register');
        }
    }
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var bind = __webpack_require__(11);
var Axios = __webpack_require__(37);
var defaults = __webpack_require__(6);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(16);
axios.CancelToken = __webpack_require__(51);
axios.isCancel = __webpack_require__(15);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(52);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(6);
var utils = __webpack_require__(1);
var InterceptorManager = __webpack_require__(46);
var dispatchRequest = __webpack_require__(47);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(14);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);
var transformData = __webpack_require__(48);
var isCancel = __webpack_require__(15);
var defaults = __webpack_require__(6);
var isAbsoluteURL = __webpack_require__(49);
var combineURLs = __webpack_require__(50);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(16);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _c("header", [
      _c("button", { on: { click: _vm.back } }),
      _vm._v(" "),
      _c("span", [_vm._v("验证手机")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "reg", on: { click: _vm.inReg } }, [_vm._v("注册")]),
    _vm._v(" "),
    _c("div", { staticClass: "login-list" }, [
      _c("div", { staticClass: "phone" }, [
        _c("input", {
          ref: "phoneNum",
          staticClass: "phone-num",
          attrs: { type: "text", placeholder: "请输入手机号", autofocus: "" }
        }),
        _vm._v(" "),
        _c("button", { staticClass: "get-yzm" }, [_vm._v("语音验证码")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "password" }, [
        _c("input", {
          ref: "pwd",
          staticClass: "in-yzm",
          attrs: { type: "password", placeholder: "请输入验证码" }
        })
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "log", on: { click: _vm.log } }, [
        _vm._v("登录")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("为方便您及时查询订单信息，需要验证您的手机号来登录")])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isShow,
            expression: "isShow"
          }
        ],
        staticClass: "warn"
      },
      [_vm._v("请输入正确的手机号")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.wasShow,
            expression: "wasShow"
          }
        ],
        staticClass: "warn"
      },
      [_vm._v("用户名密码不符")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5be4669e", esExports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_register_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_register_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_register_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_5692c57e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_register_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_register_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_5692c57e_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_register_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\modules\\mine\\components\\register.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5692c57e", Component.options)
  } else {
    hotAPI.reload("data-v-5692c57e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a33db206", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5692c57e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./register.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5692c57e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./register.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none;\n}\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;\n}\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0;\n}\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit;\n}\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left;\n}\nul,\nol,\nmenu {\n  list-style: none;\n}\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \" \";\n}\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ntextarea {\n  resize: vertical;\n}\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none;\n}\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit;\n}\ninput:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n::-webkit-details-marker {\n  display: none;\n}\nmark {\n  background-color: transparent;\n}\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none;\n}\na,\nimg {\n  -webkit-touch-callout: none;\n}\na {\n  color: #00afc7;\n}\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \";\n}\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\");\n}\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle;\n}\nbody {\n  background: #fff;\n}\n.login {\n  width: 100%;\n  height: 100%;\n}\n.login header {\n    height: 44px;\n    position: relative;\n    position: relative;\n}\n.login header::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.login header::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.login header::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.login header::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.login header button {\n      position: absolute;\n      top: 0;\n      left: 2%;\n      width: 36px;\n      height: 43px;\n      background: url(" + __webpack_require__(5) + ") center no-repeat;\n      background-size: 19px 19px;\n      border: 0;\n}\n.login header span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      font-size: 16px;\n      line-height: 44px;\n}\n.login .reg {\n    width: 100%;\n    height: .5rem;\n    text-align: center;\n    font-size: .18rem;\n    line-height: .5rem;\n    margin: .05rem .05rem 0 0;\n    color: #ff4891;\n    position: relative;\n}\n.login .reg::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.login .reg::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.login .reg::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.login .reg::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.login .login-list {\n    padding: .3rem .3rem .1rem;\n}\n.login .login-list .phone {\n      padding-bottom: .1rem;\n      position: relative;\n      position: relative;\n}\n.login .login-list .phone::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \" \";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.login .login-list .phone::after {\n            width: 100%;\n            height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.login .login-list .phone::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.login .login-list .phone::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333);\n}\n}\n.login .login-list .phone .phone-num {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891;\n}\n.login .login-list .phone .get-yzm {\n        position: absolute;\n        right: 1%;\n        bottom: 30%;\n        font-size: 14px;\n        color: #ff4891;\n        padding: 5px 5px 4px;\n        border: 1px solid #ff4891;\n        border-radius: 5px;\n        background: #fff;\n}\n.login .login-list .password {\n      padding-top: .2rem;\n}\n.login .login-list .password .in-yzm {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891;\n}\n.login .login-list .log {\n      background-color: #ff4891;\n      color: #fff;\n      width: 95%;\n      height: 48px;\n      border-radius: .05rem;\n      border: 0;\n      margin-top: .3rem;\n}\n.login .login-list p {\n      font-size: 12px;\n      color: #969696;\n      padding-top: .1rem;\n      text-align: center;\n}\n.login .warn {\n    width: 50%;\n    margin: 0 auto;\n    height: .5rem;\n    line-height: .5rem;\n    text-align: center;\n    border-radius: .05rem;\n    background: rgba(0, 0, 0, 0.3);\n    color: #fff;\n}\n", "", {"version":3,"sources":["D:/aqfh5/stage3/week12/missFresh/src/modules/mine/components/register.vue"],"names":[],"mappings":"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","file":"register.vue","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\\0020\"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\n::-webkit-details-marker {\n  display: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \"\\0020\"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\nbody {\n  background: #fff; }\n\n.login {\n  width: 100%;\n  height: 100%; }\n  .login header {\n    height: 44px;\n    position: relative;\n    position: relative; }\n    .login header::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .login header::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .login header::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .login header::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n    .login header button {\n      position: absolute;\n      top: 0;\n      left: 2%;\n      width: 36px;\n      height: 43px;\n      background: url(\"../images/login-back.png\") center no-repeat;\n      background-size: 19px 19px;\n      border: 0; }\n    .login header span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      font-size: 16px;\n      line-height: 44px; }\n  .login .reg {\n    width: 100%;\n    height: .5rem;\n    text-align: center;\n    font-size: .18rem;\n    line-height: .5rem;\n    margin: .05rem .05rem 0 0;\n    color: #ff4891;\n    position: relative; }\n    .login .reg::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .login .reg::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .login .reg::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .login .reg::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n  .login .login-list {\n    padding: .3rem .3rem .1rem; }\n    .login .login-list .phone {\n      padding-bottom: .1rem;\n      position: relative;\n      position: relative; }\n      .login .login-list .phone::after {\n        pointer-events: none;\n        position: absolute;\n        z-index: 999;\n        top: 0;\n        left: 0;\n        content: \"\\0020\";\n        border-color: #ccc;\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        -webkit-transform-origin: 0 0;\n        transform-origin: 0 0; }\n        @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n          .login .login-list .phone::after {\n            width: 100%;\n            height: 100%; } }\n        @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n          .login .login-list .phone::after {\n            width: 200%;\n            height: 200%;\n            -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n        @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n          .login .login-list .phone::after {\n            width: 300%;\n            height: 300%;\n            -webkit-transform: scale(0.33333);\n            transform: scale(0.33333); } }\n      .login .login-list .phone .phone-num {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891; }\n      .login .login-list .phone .get-yzm {\n        position: absolute;\n        right: 1%;\n        bottom: 30%;\n        font-size: 14px;\n        color: #ff4891;\n        padding: 5px 5px 4px;\n        border: 1px solid #ff4891;\n        border-radius: 5px;\n        background: #fff; }\n    .login .login-list .password {\n      padding-top: .2rem; }\n      .login .login-list .password .in-yzm {\n        border: 0;\n        font-size: 16px;\n        color: #ff4891; }\n    .login .login-list .log {\n      background-color: #ff4891;\n      color: #fff;\n      width: 95%;\n      height: 48px;\n      border-radius: .05rem;\n      border: 0;\n      margin-top: .3rem; }\n    .login .login-list p {\n      font-size: 12px;\n      color: #969696;\n      padding-top: .1rem;\n      text-align: center; }\n  .login .warn {\n    width: 50%;\n    margin: 0 auto;\n    height: .5rem;\n    line-height: .5rem;\n    text-align: center;\n    border-radius: .05rem;\n    background: rgba(0, 0, 0, 0.3);\n    color: #fff; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(10);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            isShow: false,
            wasShow: false
        };
    },

    methods: {
        regist: function regist() {
            var _this = this;

            if (/^1[34578][0-9]{9}$/.test(this.$refs.phoneNum.value) && /^[0-9a-zA-Z-_=&\$#@]{6,12}$/.test(this.$refs.pwd.value)) {
                (0, _axios2.default)({
                    method: 'get',
                    url: 'http://datainfo.duapp.com/shopdata/userinfo.php?status=register&userID=' + this.$refs.phoneNum.value + '&password=' + this.$refs.pwd.value
                }).then(function (res) {
                    switch (res.data) {
                        case 1:
                            _this.$router.push('./Login');break;
                        case 0:
                            _this.wasShow = true;
                            setTimeout(function () {
                                this.wasShow = false;
                            }.bind(_this), 1500);
                    }
                });
            } else {
                this.isShow = true;
                setTimeout(function () {
                    this.isShow = false;
                }.bind(this), 1500);
            }
        },
        back: function back() {
            history.go(-1);
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _c("header", [
      _c("button", { on: { click: _vm.back } }),
      _vm._v(" "),
      _c("span", [_vm._v("注册账号")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "login-list" }, [
      _c("div", { staticClass: "phone" }, [
        _c("input", {
          ref: "phoneNum",
          staticClass: "phone-num",
          attrs: { type: "text", placeholder: "请输入手机号", autofocus: "" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "password" }, [
        _c("input", {
          ref: "pwd",
          staticClass: "in-yzm",
          attrs: { type: "password", placeholder: "请输入密码" }
        })
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "log", on: { click: _vm.regist } }, [
        _vm._v("注册")
      ]),
      _vm._v(" "),
      _c("p", [_vm._v("为方便您及时查询订单信息，需要验证您的手机号来注册")])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isShow,
            expression: "isShow"
          }
        ],
        staticClass: "warn"
      },
      [_vm._v("请输入正确格式的手机号和密码")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.wasShow,
            expression: "wasShow"
          }
        ],
        staticClass: "warn"
      },
      [_vm._v("用户名已存在")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-5692c57e", esExports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_setting_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_setting_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_setting_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_449c3276_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_setting_vue__ = __webpack_require__(63);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_script_index_0_bustCache_setting_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_13_3_0_vue_loader_lib_template_compiler_index_id_data_v_449c3276_hasScoped_false_buble_transforms_node_modules_vue_loader_13_3_0_vue_loader_lib_selector_type_template_index_0_bustCache_setting_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\modules\\mine\\components\\setting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-449c3276", Component.options)
  } else {
    hotAPI.reload("data-v-449c3276", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1f5d715c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-449c3276\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./setting.vue", function() {
     var newContent = require("!!../../../../node_modules/_css-loader@0.28.7@css-loader/index.js?sourceMap!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-449c3276\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../../../node_modules/_vue-loader@13.3.0@vue-loader/lib/selector.js?type=styles&index=0&bustCache!./setting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%;\n}\n::-webkit-scrollbar {\n  display: none;\n}\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none;\n}\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif;\n}\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0;\n}\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit;\n}\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left;\n}\nul,\nol,\nmenu {\n  list-style: none;\n}\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nvideo {\n  display: inline-block;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \" \";\n}\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ntextarea {\n  resize: vertical;\n}\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none;\n}\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit;\n}\ninput:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none;\n}\n::-webkit-details-marker {\n  display: none;\n}\nmark {\n  background-color: transparent;\n}\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none;\n}\na,\nimg {\n  -webkit-touch-callout: none;\n}\na {\n  color: #00afc7;\n}\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \" \";\n}\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\");\n}\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle;\n}\nbody {\n  background: #fff;\n}\n.setting {\n  width: 100%;\n  height: 100%;\n}\n.setting header {\n    height: 44px;\n    position: relative;\n    position: relative;\n}\n.setting header::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \" \";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.setting header::after {\n          width: 100%;\n          height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.setting header::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.setting header::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333);\n}\n}\n.setting header button {\n      position: absolute;\n      top: 0;\n      left: 2%;\n      width: 36px;\n      height: 43px;\n      background: url(" + __webpack_require__(5) + ") center no-repeat;\n      background-size: 19px 19px;\n      border: 0;\n}\n.setting header span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      font-size: 16px;\n      line-height: 44px;\n}\n.setting .user {\n    width: 100%;\n    height: .9rem;\n    padding: .15rem;\n}\n.setting .user img {\n      width: .5rem;\n      height: .5rem;\n}\n.setting .msg {\n    padding: 0 .15rem;\n}\n.setting .msg .name {\n      width: 100%;\n      height: .5rem;\n      position: relative;\n}\n.setting .msg .name span {\n        position: absolute;\n        right: 5%;\n}\n.setting .msg .cache, .setting .msg .message {\n      position: relative;\n}\n.setting .msg .cache ul, .setting .msg .message ul {\n        position: relative;\n}\n.setting .msg .cache ul::after, .setting .msg .message ul::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \" \";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n@media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n.setting .msg .cache ul::after, .setting .msg .message ul::after {\n              width: 100%;\n              height: 100%;\n}\n}\n@media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n.setting .msg .cache ul::after, .setting .msg .message ul::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5);\n}\n}\n@media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n.setting .msg .cache ul::after, .setting .msg .message ul::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333);\n}\n}\n.setting .msg .cache ul li, .setting .msg .message ul li {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          align-items: center;\n          height: .5rem;\n          position: relative;\n}\n.setting .msg .cache ul li span, .setting .msg .message ul li span {\n            font-size: 16px;\n            color: #262626;\n}\n.setting .msg .cache ul li img, .setting .msg .message ul li img {\n            width: 14px;\n            height: 14px;\n            position: absolute;\n            right: 1%;\n}\n.setting .msg .cache ul .move, .setting .msg .message ul .move {\n          width: .44rem;\n          height: .27rem;\n          background: #99e6af;\n          position: absolute;\n          right: 0;\n          border-radius: .5rem;\n}\n.setting .msg .cache ul .move .ball, .setting .msg .message ul .move .ball {\n            width: .32rem;\n            height: .32rem;\n            border-radius: 50%;\n            background: #33cd5f;\n            position: absolute;\n            top: -0.02rem;\n}\n.setting .msg .cache ul .move .leftball, .setting .msg .message ul .move .leftball {\n            left: 0;\n}\n.setting .msg .cache ul .move .rightball, .setting .msg .message ul .move .rightball {\n            left: 40%;\n}\n.setting .msg .out {\n      background-color: #FC6D41;\n      color: #fff;\n      width: 95%;\n      height: 48px;\n      border-radius: .05rem;\n      border: 0;\n      margin-top: .3rem;\n}\n", "", {"version":3,"sources":["D:/aqfh5/stage3/week12/missFresh/src/modules/mine/components/setting.vue"],"names":[],"mappings":"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","file":"setting.vue","sourcesContent":["@charset \"UTF-8\";\n/**\r\n * Yo框架全局base定义\r\n * 本文件与variables不同地方在于，这里所定义的map可以使用在variables和任何地方\r\n * 本文件中map使用\"_\"开头，extra中不使用\"_\"\r\n * base ⇌ extra\r\n */\n/**\r\n * Yo框架全局Variables\r\n * Yo基础变量map，如果不想定义某属性，将其value设置为null\r\n * Yo仅使用2种长度单位：px用于边框，rem用于除边框之外的所有地方\r\n * 本文件中map使用\"_\"开头，config中不使用\"_\"\r\n * variables ⇌ config\r\n */\n/**\r\n * Yo框架自定义全局函数\r\n * 扩充Sass默认函数库，用以增强语法\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的第一项\r\n * @function first\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的最后一项\r\n * @function last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 返回SassList中的倒数第几项\r\n * @function nth-last\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要返回的值在list中的倒数位置 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 移除SassList中的某个项目并返回新的List\r\n * @function remove\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {String} $value 指定需要被删除的值 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 截取SassList中的某个部分并返回新的List\r\n * @function slice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $start 指定需要截取的开始下标 <2.1.0>\r\n * @param {Integer} $end 指定需要截取的结束下标（不包括end），当该值缺省时默认为末尾下标 <2.1.0>\r\n */\n/**\r\n * @module List扩展函数\r\n * @description 从SassList中添加/删除项目，然后返回新的List。\r\n * @function splice\r\n * @version 2.1.0\r\n * @param {String} $list 指定一个Sass List <2.1.0>\r\n * @param {Integer} $index 指定需要移除的开始下标 <2.1.0>\r\n * @param {Integer} $count 指定需要移除的数量，不可以为负值，0表示不移除 <2.1.0>\r\n * @param {String} $values 指定需要添加的新值（可以是多个），如果该值缺省，则表示只移除不添加新值 <2.1.0>\r\n */\n/**\r\n * Yo框架全局基础方法\r\n * 包括响应式方案，CSS3兼容性方案，厂商前缀方案，iconfont方案，flex布局等全局方法\r\n */\n/**\r\n * @module 常用方法\r\n * @description 给需要的属性加厂家前缀\r\n * @method prefix\r\n * @version 1.0.0\r\n * @param {String} $property 指定属性 <1.0.0>\r\n * @param {String} $value 指定属性值 <1.0.0>\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义字体图标\r\n * @method _iconfont\r\n * @version 1.0.0\r\n * @skip\r\n */\n/**\r\n * @module 常用方法\r\n * @description 四则运算(系统要求：iOS6.0+,Android4.4+)\r\n * @method calc\r\n * @version 1.7.0\r\n * @param {String} $property 指定需要进行计算的CSS属性 <1.7.0>\r\n * @param {String} $value 与原生CSS语法一致，区别在于需要使用引号包裹表达式 <1.7.0>\r\n * @example\r\n * .calc {\r\n *     @include calc(width, \"100% - 100px\");\r\n * }\r\n *\r\n * <div class=\"calc\">四则运算</div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义响应式方案\r\n * @method responsive\r\n * @version 1.0.0\r\n * @param {String} $media 指定媒体查询条件，取值为`config`文件map `media-types`中的值 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除浮动方案\r\n * @method clearfix\r\n * @version 1.0.0\r\n * @param {String} $type 指定清除浮动的方式，包括：pseudo-element | bfc，默认值：pseudo-element <1.8.5>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 清除行内级元素间间隙方案\r\n * @method clearspace\r\n * @version 3.0.3\r\n * @param {Length} $font-size 指定子元素字号，默认值：.14rem <3.0.3>\r\n * @example\r\n * .demo {\r\n *     @include clearspace;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <span class=\"item\">1</span>\r\n *      <span class=\"item\">2</span>\r\n *      <span class=\"item\">3</span>\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 描述元素内容在横、纵方向上的对齐方式，默认为水平垂直居中对齐\r\n * @method align\r\n * @version 2.0.0\r\n * @param {String} $flexbox 元素布局方式，可选值：flex | inline-flex，默认值：flex <2.0.0>\r\n * @param {Keyword} $justify-content 元素内容的水平对齐方式，取值与`justify-content`属性一致，默认值：center <2.0.0>\r\n * @param {Keyword} $align-items 元素内容的垂直对齐方式，取值与`align-items`属性一致，默认值：center <2.0.0>\r\n * @example\r\n * .demo {\r\n *     @include align;\r\n * }\r\n *\r\n * <div class=\"demo\">\r\n *      <img alt=\"未知尺寸图片居中\" />\r\n * </div>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 定义是否有滚动条\r\n * @method overflow\r\n * @version 1.0.0\r\n * @param {String} $overflow 取值与最新原生语法一致，默认值：auto <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 生成全屏方法\r\n * @method fullscreen\r\n * @version 1.7.0\r\n * @param {Integer} $z-index 指定层叠级别 <1.7.0>\r\n * @param {Keywords} $position 指定定位方式，取除`static | relative`之外的值，默认值：absolute <1.8.5>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义使用何种滤镜\r\n * @method filter\r\n * @version 1.7.0\r\n * @param {String} $filter 取值与`filter`属性一致 <1.7.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义UA默认外观\r\n * @method appearance\r\n * @version 1.0.0\r\n * @param {String} $appearance 取值与`appearance`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义如何选中内容\r\n * @method user-select\r\n * @version 1.0.0\r\n * @param {String} $user-select 取值与`user-select`属性一致，默认值：none <1.0.0>\r\n */\n/**\r\n * @module 用户界面\r\n * @description 定义盒模型\r\n * @method box-sizing\r\n * @version 1.0.0\r\n * @param {String} $box-sizing 指定盒模型类型，取值与`box-sizing`属性一致，默认值：border-box <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义渐变色值\r\n * @method gradient\r\n * @version 1.0.0\r\n * @param {String} $type 指定渐变的4种类型：linear, repeating-linear, radial, repeating-radial <1.0.0>\r\n * @param {String} $dir 指定渐变方向，可选值：[left | right] || [top | bottom] | angle <2.0.0>\r\n * @param {String} $gradient 指定渐变取值，与w3c最新原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景图像缩放（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-size\r\n * @version 1.4.0\r\n * @param {Keywords | Length} $background-size 指定背景图缩放值，取值与`background-size`属性一致 <1.4.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景裁减（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-clip\r\n * @version 1.6.0\r\n * @param {Keywords} $background-clip 指定背景图缩放值，取值与`background-clip`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义背景显示区域（AndroidBrowser2.3.*还需要厂商前缀）\r\n * @method background-origin\r\n * @version 1.6.0\r\n * @param {Keywords} $background-origin 指定背景图`background-position`属性计算相对的参考点，取值与`background-origin`属性一致 <1.6.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 为元素添加边框（包括1px边框）\r\n * @method border\r\n * @version 2.0.0\r\n * @param {String} $border-width 指定边框厚度（单位为px），默认值：1px，取值与`border-width`属性一致，不同方向代表边框位置 <2.0.0>\r\n * @param {String} $border-color 指定边框颜色 <2.0.0>\r\n * @param {String} $border-style 指定边框样式 <2.0.0>\r\n * @param {String} $radius 指定边框圆角半径，默认值：null <2.0.0>\r\n */\n/**\r\n * @module 背景与边框\r\n * @description 定义圆角，用于修复某些安卓机型上“圆角+边框+背景”，背景溢出的情况\r\n * @method border-radius\r\n * @version 1.6.0\r\n * @param {Length} $border-radius 指定元素的圆角半径，取值与`border-radius`属性一致 <1.6.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义简单变换\r\n * @method transform\r\n * @version 1.0.0\r\n * @param {String} $transform 取值范围与`transform`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 定义变换原点\r\n * @method transform-origin\r\n * @version 1.0.0\r\n * @param {Length | Percentage | Keywords} $transform-origin 取值范围与`transform-origin`属性一致 <1.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定某元素的子元素是（看起来）位于三维空间内，还是在该元素所在的平面内被扁平化\r\n * @method transform-style\r\n * @version 2.0.0\r\n * @param {String} $transform-style 取值范围与`transform-style`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定观察者与「z=0」平面的距离，使具有三维位置变换的元素产生透视效果。「z>0」的三维元素比正常大，而「z<0」时则比正常小，大小程度由该属性的值决定。\r\n * @method perspective\r\n * @version 2.0.0\r\n * @param {none | Length} $perspective 取值范围与`perspective`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定透视点的位置\r\n * @method perspective-origin\r\n * @version 2.0.0\r\n * @param {Length | Percentage | Keywords} $perspective-origin 取值范围与`perspective-origin`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Transform\r\n * @description 指定元素背面面向用户时是否可见\r\n * @method backface-visibility\r\n * @version 2.0.0\r\n * @param {Keywords} $backface-visibility 取值范围与`backface-visibility`属性一致 <2.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 定义动画\r\n * @method animation\r\n * @version 1.0.0\r\n * @param {String} $animation 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定需要引用的动画名称\r\n * @method animation-name\r\n * @version 3.0.0\r\n * @param {String} $animation-name 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行一次所持续的时长\r\n * @method animation-duration\r\n * @version 3.0.0\r\n * @param {String} $animation-duration 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画运行方式\r\n * @method animation-timing-function\r\n * @version 3.0.0\r\n * @param {String} $animation-timing-function 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画延迟多久之后再开始\r\n * @method animation-delay\r\n * @version 3.0.0\r\n * @param {String} $animation-delay 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画循环几次\r\n * @method animation-iteration-count\r\n * @version 3.0.0\r\n * @param {String} $animation-iteration-count 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动方向\r\n * @method animation-direction\r\n * @version 3.0.0\r\n * @param {String} $animation-direction 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画的运动状态\r\n * @method animation-play-state\r\n * @version 3.0.0\r\n * @param {String} $animation-play-state 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Animation\r\n * @description 指定动画时间之外的状态\r\n * @method animation-fill-mode\r\n * @version 3.0.0\r\n * @param {String} $animation-fill-mode 取值与原生语法一致 <3.0.0>\r\n */\n/**\r\n * @module Transition\r\n * @description 定义补间\r\n * @method transition\r\n * @version 1.0.0\r\n * @param {String} $transition 取值与原生语法一致 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义显示类型为伸缩盒\r\n * @method flexbox\r\n * @version 1.0.0\r\n * @param {String} $flexbox 默认值：flex，可选值：flex | inline-flex <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素如何分配空间\r\n * @method flex\r\n * @version 1.0.0\r\n * @param {Number} $flex 取值与`flex`属性一致，默认值：1 <1.0.0>\r\n * @param {String} $direction 默认值: row，可选值：row | column <1.5.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的排版顺序\r\n * @method order\r\n * @version 1.0.0\r\n * @param {Integer} $order 取值与`order`属性一致，默认值：1 <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素流动方向及遇见边界时是否换行(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-flow\r\n * @version 2.0.0\r\n * @param {String} $flex-flow 取值与`flex-flow`属性一致，默认值：row nowrap <2.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义伸缩盒子元素的流动方向\r\n * @method flex-direction\r\n * @version 1.0.0\r\n * @param {String} $flex-direction 取值与`flex-direction`属性一致，默认值：row <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性盒子元素溢出后排版(要求系统：iOS7.0+, Android4.4+)\r\n * @method flex-wrap\r\n * @version 1.0.0\r\n * @param {String} $flex-wrap 取值与`flex-wrap`属性一致，默认值：nowrap <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器主轴对齐方式(其中`space-around`值需要iOS7.0+,Android4.4+)\r\n * @method justify-content\r\n * @version 1.0.0\r\n * @param {String} $justify-content 取值与`justify-content`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义多行弹性容器侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-content\r\n * @version 1.8.5\r\n * @param {String} $align-content 取值与`align-content`属性一致，默认值：center <1.8.5>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义单行弹性容器侧轴对齐方式\r\n * @method align-items\r\n * @version 1.0.0\r\n * @param {String} $align-items 取值与`align-items`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module Flexbox\r\n * @description 定义弹性容器中子元素自身的在侧轴对齐方式(要求系统：iOS7.0+,Android4.4+)\r\n * @method align-self\r\n * @version 1.0.0\r\n * @param {String} $align-self 取值与`align-self`属性一致，默认值：center <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成矩形方法\r\n * @method rect\r\n * @version 1.0.0\r\n * @param {Length} $width 定义矩形的长度 <1.0.0>\r\n * @param {Length} $height 定义矩形的高度 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成正方形方法\r\n * @method square\r\n * @version 1.0.0\r\n * @param {Length} $size 定义正方形的边长 <1.0.0>\r\n */\n/**\r\n * @module 形状\r\n * @description 生成圆形方法\r\n * @method circle\r\n * @version 1.0.0\r\n * @param {Length} $size 定义圆的半径长度 <1.0.0>\r\n * @param {Length} $radius 定义圆的圆角半径长度 <1.0.0>\r\n */\n/**\r\n * @module 常用方法\r\n * @description 在自适应宽度情况下，确保内容元素的宽高比固定，比如：实现随屏幕大小而变化的正方形。\r\n * @method fixed-scale\r\n * @version 3.0.10\r\n * @param {Length} $width 默认值：100%。用以指定内容元素的初始宽度，由于尺寸需动态变化，不要使用固定单位 <3.0.10>\r\n * @param {Length} $scale 默认值：1/1，即正方形。用以指定内容元素的宽度高比 <3.0.10>\r\n */\n/**\r\n * @module 文本\r\n * @description 链接处理方法\r\n * @method link\r\n * @version 1.0.0\r\n * @param {Color} $color 定义链接颜色 <1.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 文本碰到边界是否换行\r\n * @method wrap\r\n * @version 1.0.0\r\n * @param {Boolean} $is-wrap 定义文本是否换行，默认值：true <2.0.0>\r\n */\n/**\r\n * @module 文本\r\n * @description 单行文本溢出时显示省略号\r\n * @method ellipsis\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n * @param {Integer} $line-clamp 定义需要显示的行数，默认值：1（即使用单行溢出的处理方案），需要注意的是本参数只支持webkit内核 <2.1.2>\r\n */\n/**\r\n * @module 文本\r\n * @description 文字隐藏方案\r\n * @method texthide\r\n * @version 1.0.0\r\n * @param {Length} $width 定义容器的宽度，默认值：null <2.0.0>\r\n */\n/**\r\n * Yo框架全局Reset\r\n * Yo重置Mobile及高级浏览器上常见的差异\r\n */\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent; }\n\nhtml,\nbody {\n  overflow: hidden;\n  height: 100%; }\n\n::-webkit-scrollbar {\n  display: none; }\n\nhtml {\n  background-color: #eee;\n  color: #212121;\n  font-size: 100px;\n  -webkit-user-select: none;\n  user-select: none; }\n\nbody {\n  margin: 0;\n  font-size: 0.14em;\n  line-height: 1.5;\n  font-family: Helvetica Neue, Helvetica, STHeiTi, sans-serif; }\n\nul,\nol,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nfigure,\nform,\nfieldset,\nlegend,\ninput,\ntextarea,\nbutton,\np,\nblockquote,\nth,\ntd,\npre,\nxmp {\n  margin: 0;\n  padding: 0; }\n\ninput,\ntextarea,\nbutton,\nselect,\npre,\nxmp,\ntt,\ncode,\nkbd,\nsamp {\n  line-height: inherit;\n  font-family: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nsmall,\nbig,\ninput,\ntextarea,\nbutton,\nselect {\n  font-size: inherit; }\n\naddress,\ncite,\ndfn,\nem,\ni,\noptgroup,\nvar {\n  font-style: normal; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n  table-layout: fixed;\n  text-align: left; }\n\nul,\nol,\nmenu {\n  list-style: none; }\n\nfieldset,\nimg {\n  border: 0;\n  vertical-align: middle; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nvideo {\n  display: inline-block; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\\0020\"; }\n\ntextarea,\npre,\nxmp {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\ntextarea {\n  resize: vertical; }\n\ninput,\ntextarea,\nbutton,\nselect,\nsummary,\na {\n  outline: 0 none; }\n\ninput,\ntextarea,\nbutton,\nselect {\n  color: inherit; }\n  input:disabled,\n  textarea:disabled,\n  button:disabled,\n  select:disabled {\n    opacity: 1; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\ninput[type=\"button\"],\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"file\"]::-webkit-file-upload-button,\ninput[type=\"search\"]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n  appearance: none; }\n\n::-webkit-details-marker {\n  display: none; }\n\nmark {\n  background-color: transparent; }\n\na,\nins,\ns,\nu,\ndel {\n  text-decoration: none; }\n\na,\nimg {\n  -webkit-touch-callout: none; }\n\na {\n  color: #00afc7; }\n\n.g-clear::after,\n.g-mod::after {\n  display: block;\n  overflow: hidden;\n  clear: both;\n  height: 0;\n  content: \"\\0020\"; }\n\n@font-face {\n  font-family: yofont;\n  src: url(//ss.qunarzz.com/yo/font/1.0.3/yofont.woff) format(\"woff\"), url(//ss.qunarzz.com/yo/font/1.0.3/yofont.ttf) format(\"truetype\"); }\n\n.yo-ico {\n  font-family: yofont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  vertical-align: middle; }\n\nbody {\n  background: #fff; }\n\n.setting {\n  width: 100%;\n  height: 100%; }\n  .setting header {\n    height: 44px;\n    position: relative;\n    position: relative; }\n    .setting header::after {\n      pointer-events: none;\n      position: absolute;\n      z-index: 999;\n      top: 0;\n      left: 0;\n      content: \"\\0020\";\n      border-color: #ccc;\n      border-style: solid;\n      border-width: 0 0 1px 0;\n      -webkit-transform-origin: 0 0;\n      transform-origin: 0 0; }\n      @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n        .setting header::after {\n          width: 100%;\n          height: 100%; } }\n      @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n        .setting header::after {\n          width: 200%;\n          height: 200%;\n          -webkit-transform: scale(0.5);\n          transform: scale(0.5); } }\n      @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n        .setting header::after {\n          width: 300%;\n          height: 300%;\n          -webkit-transform: scale(0.33333);\n          transform: scale(0.33333); } }\n    .setting header button {\n      position: absolute;\n      top: 0;\n      left: 2%;\n      width: 36px;\n      height: 43px;\n      background: url(\"../images/login-back.png\") center no-repeat;\n      background-size: 19px 19px;\n      border: 0; }\n    .setting header span {\n      display: inline-block;\n      width: 100%;\n      text-align: center;\n      font-size: 16px;\n      line-height: 44px; }\n  .setting .user {\n    width: 100%;\n    height: .9rem;\n    padding: .15rem; }\n    .setting .user img {\n      width: .5rem;\n      height: .5rem; }\n  .setting .msg {\n    padding: 0 .15rem; }\n    .setting .msg .name {\n      width: 100%;\n      height: .5rem;\n      position: relative; }\n      .setting .msg .name span {\n        position: absolute;\n        right: 5%; }\n    .setting .msg .cache, .setting .msg .message {\n      position: relative; }\n      .setting .msg .cache ul, .setting .msg .message ul {\n        position: relative; }\n        .setting .msg .cache ul::after, .setting .msg .message ul::after {\n          pointer-events: none;\n          position: absolute;\n          z-index: 999;\n          top: 0;\n          left: 0;\n          content: \"\\0020\";\n          border-color: #ccc;\n          border-style: solid;\n          border-width: 0 0 1px 0;\n          -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n          @media (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49), (max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {\n            .setting .msg .cache ul::after, .setting .msg .message ul::after {\n              width: 100%;\n              height: 100%; } }\n          @media (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49), (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49), (min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49), (min-resolution: 144dpi) and (max-resolution: 239dpi), (min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {\n            .setting .msg .cache ul::after, .setting .msg .message ul::after {\n              width: 200%;\n              height: 200%;\n              -webkit-transform: scale(0.5);\n              transform: scale(0.5); } }\n          @media (min--moz-device-pixel-ratio: 2.5), (-webkit-min-device-pixel-ratio: 2.5), (min-device-pixel-ratio: 2.5), (min-resolution: 240dpi), (min-resolution: 2.5dppx) {\n            .setting .msg .cache ul::after, .setting .msg .message ul::after {\n              width: 300%;\n              height: 300%;\n              -webkit-transform: scale(0.33333);\n              transform: scale(0.33333); } }\n        .setting .msg .cache ul li, .setting .msg .message ul li {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          align-items: center;\n          height: .5rem;\n          position: relative; }\n          .setting .msg .cache ul li span, .setting .msg .message ul li span {\n            font-size: 16px;\n            color: #262626; }\n          .setting .msg .cache ul li img, .setting .msg .message ul li img {\n            width: 14px;\n            height: 14px;\n            position: absolute;\n            right: 1%; }\n        .setting .msg .cache ul .move, .setting .msg .message ul .move {\n          width: .44rem;\n          height: .27rem;\n          background: #99e6af;\n          position: absolute;\n          right: 0;\n          border-radius: .5rem; }\n          .setting .msg .cache ul .move .ball, .setting .msg .message ul .move .ball {\n            width: .32rem;\n            height: .32rem;\n            border-radius: 50%;\n            background: #33cd5f;\n            position: absolute;\n            top: -0.02rem; }\n          .setting .msg .cache ul .move .leftball, .setting .msg .message ul .move .leftball {\n            left: 0; }\n          .setting .msg .cache ul .move .rightball, .setting .msg .message ul .move .rightball {\n            left: 40%; }\n    .setting .msg .out {\n      background-color: #FC6D41;\n      color: #fff;\n      width: 95%;\n      height: 48px;\n      border-radius: .05rem;\n      border: 0;\n      margin-top: .3rem; }\n"],"sourceRoot":""}]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            left1: false,
            left2: false
        };
    },

    methods: {
        out: function out() {
            this.$router.push({ name: 'Mine', params: { isShow: false } });
            sessionStorage.removeItem('User');
        },
        back: function back() {
            history.go(-1);
        },
        move1: function move1() {
            this.left1 ? this.left1 = false : this.left1 = true;
        },
        move2: function move2() {
            this.left2 ? this.left2 = false : this.left2 = true;
        }
    }
};

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "setting" }, [
    _c("header", [
      _c("button", { on: { click: _vm.back } }),
      _vm._v(" "),
      _c("span", [_vm._v("设置")])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "msg" }, [
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "message" }, [
        _c("ul", [
          _c("li", [
            _c("span", [_vm._v("订单消息")]),
            _vm._v(" "),
            _c("div", { staticClass: "move" }, [
              _c("div", {
                staticClass: "ball",
                class: { leftball: !_vm.left1, rightball: _vm.left1 },
                on: { click: _vm.move1 }
              })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("span", [_vm._v("优惠消息")]),
            _vm._v(" "),
            _c("div", { staticClass: "move" }, [
              _c("div", {
                staticClass: "ball",
                class: { leftball: !_vm.left2, rightball: _vm.left2 },
                on: { click: _vm.move2 }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "out", on: { click: _vm.out } }, [
        _vm._v("退出登录")
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "user" }, [
      _c("img", { attrs: { src: __webpack_require__(9), alt: "" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "name" }, [
      _vm._v("昵称\n           "),
      _c("span", [_vm._v("小鲜")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cache" }, [
      _c("ul", [
        _c("li", [
          _c("span", [_vm._v("版本")]),
          _vm._v(" "),
          _c("img", {
            attrs: { src: __webpack_require__(0), alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("li", [
          _c("span", [_vm._v("清除缓存")]),
          _vm._v(" "),
          _c("img", {
            attrs: { src: __webpack_require__(0), alt: "" }
          })
        ])
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-449c3276", esExports)
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map