(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/callback.ts":
/*!************************************!*\
  !*** ./src/components/callback.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//处理加载图片\r\nfunction callback(imgList, clientHeight, attr, callback) {\r\n    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\r\n    for (var key in imgList) {\r\n        if (parseInt(key.slice(key.lastIndexOf('.') + 1)) <=\r\n            scrollTop + clientHeight) {\r\n            var attrs = imgList[key].getAttribute(attr);\r\n            if (attrs) {\r\n                callback && callback(imgList[key]);\r\n                imgList[key].src = attrs;\r\n                imgList[key].removeAttribute(attr);\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.default = callback;\r\n\n\n//# sourceURL=webpack://library/./src/components/callback.ts?");

/***/ }),

/***/ "./src/components/firstImg.ts":
/*!************************************!*\
  !*** ./src/components/firstImg.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction firstImg(imgList, obj) {\r\n    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;\r\n    var clientHeight = document.documentElement.clientHeight;\r\n    if (scrollTop === 0 || document.body.scrollHeight < clientHeight) {\r\n        for (var key in imgList) {\r\n            if (parseInt(key.slice(key.lastIndexOf('.') + 1)) <= clientHeight) {\r\n                var attrs = imgList[key].getAttribute(obj.attr);\r\n                if (attrs) {\r\n                    imgList[key].src = attrs;\r\n                    imgList[key].removeAttribute(obj.attr);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    else {\r\n        for (var key in imgList) {\r\n            if (parseInt(key.slice(key.lastIndexOf('.') + 1)) <=\r\n                scrollTop + clientHeight) {\r\n                var attrs = imgList[key].getAttribute(obj.attr);\r\n                if (attrs) {\r\n                    imgList[key].src = attrs;\r\n                    imgList[key].removeAttribute(obj.attr);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\nexports.default = firstImg;\r\n\n\n//# sourceURL=webpack://library/./src/components/firstImg.ts?");

/***/ }),

/***/ "./src/components/initImgList.ts":
/*!***************************************!*\
  !*** ./src/components/initImgList.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//初始化img数组\r\nfunction initImageList(attr, placeholder, errorCallback) {\r\n    var domList = Array.prototype.slice.call(document.querySelectorAll(\"[\" + attr + \"]\"));\r\n    var imglist = [];\r\n    domList.forEach(function (val) {\r\n        if (placeholder) {\r\n            if (!val.src) {\r\n                val.src = placeholder;\r\n            }\r\n        }\r\n        var arrts = val.getAttribute(attr);\r\n        var top = val.offsetTop;\r\n        val.onerror = errorCallback;\r\n        imglist[arrts + \".\" + top] = val;\r\n        imglist.length++;\r\n    });\r\n    domList = null;\r\n    return imglist;\r\n}\r\nexports.default = initImageList;\r\n\n\n//# sourceURL=webpack://library/./src/components/initImgList.ts?");

/***/ }),

/***/ "./src/components/scroll.ts":
/*!**********************************!*\
  !*** ./src/components/scroll.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//页面监听滚动事件\r\nvar throttle_1 = __importDefault(__webpack_require__(/*! ./throttle */ \"./src/components/throttle.ts\"));\r\nvar callback_1 = __importDefault(__webpack_require__(/*! ./callback */ \"./src/components/callback.ts\"));\r\nfunction scroll(imgList, obj) {\r\n    var throttleCallback = throttle_1.default(callback_1.default, null, 50);\r\n    var clientHeight = document.documentElement.clientHeight;\r\n    window.addEventListener('scroll', function (e) {\r\n        throttleCallback(obj.attr, imgList, clientHeight, obj.callback);\r\n    });\r\n}\r\nexports.default = scroll;\r\n\n\n//# sourceURL=webpack://library/./src/components/scroll.ts?");

/***/ }),

/***/ "./src/components/throttle.ts":
/*!************************************!*\
  !*** ./src/components/throttle.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//函数节流\r\nfunction throttle(method, context, timer) {\r\n    if (timer === void 0) { timer = 1000; }\r\n    var id;\r\n    return function (attr, imageList, bodyHeihgt, callback) {\r\n        clearInterval(id);\r\n        id = setTimeout(function () {\r\n            method.call(context, imageList, bodyHeihgt, attr, callback);\r\n        }, timer);\r\n    };\r\n}\r\nexports.default = throttle;\r\n\n\n//# sourceURL=webpack://library/./src/components/throttle.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar initImgList_1 = __importDefault(__webpack_require__(/*! ./components/initImgList */ \"./src/components/initImgList.ts\"));\r\nvar firstImg_1 = __importDefault(__webpack_require__(/*! ./components/firstImg */ \"./src/components/firstImg.ts\"));\r\nvar scroll_1 = __importDefault(__webpack_require__(/*! ./components/scroll */ \"./src/components/scroll.ts\"));\r\nvar lazyImage;\r\nlazyImage = function (obj) {\r\n    var imgList = initImgList_1.default(obj.attr, obj.placeholder, obj.errorCallback);\r\n    firstImg_1.default(imgList, obj);\r\n    scroll_1.default(imgList, obj);\r\n};\r\nexports.default = lazyImage;\r\n\n\n//# sourceURL=webpack://library/./src/index.ts?");

/***/ })

/******/ });
});