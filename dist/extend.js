/*!
 * extend v3.0.2
 * https://github.com/alexspirgel/extend
 */
var extend;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 369:
/***/ ((module) => {

function isPlainObject(value) {
	if (typeof value !== 'object' ||
	value === null ||
	Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}
	if (Object.getPrototypeOf(value) === null) {
    return true;
  }
	let prototype = value;
  while (Object.getPrototypeOf(prototype) !== null) {
    prototype = Object.getPrototypeOf(prototype);
  }
  return Object.getPrototypeOf(value) === prototype;
}

module.exports = isPlainObject;

/***/ }),

/***/ 138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isPlainObject = __webpack_require__(369);

function extend(...arguments) {
	let target = arguments[0];
	let merge;
	for (let argumentIndex = 1; argumentIndex < arguments.length; argumentIndex++) {
		merge = arguments[argumentIndex];
		if (merge === target) {
			continue;
		}
		if (Array.isArray(merge)) {
			target = [];
			for (const index of merge.keys()) {
				target[index] = extend(target[index], merge[index]);
			}
		}
		else if (isPlainObject(merge)) {
			if (!isPlainObject(target)) {
				target = {};
			}
			for (const property in merge) {
				target[property] = extend(target[property], merge[property]);
			}
		}
		else if (merge !== undefined) {
			target = merge;
		}
	}
	return target;
}

module.exports = extend;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(138);
/******/ 	extend = __webpack_exports__;
/******/ 	
/******/ })()
;