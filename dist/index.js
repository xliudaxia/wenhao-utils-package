/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["whutils"] = factory();
	else
		root["whutils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/difference.js":
/*!*********************************!*\
  !*** ./src/array/difference.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"difference\": () => (/* binding */ difference)\n/* harmony export */ });\n/*\n * @Author: jessLiu\n */\n//两个函数求差集\nfunction difference(arr1, arr2 = []) {\n  if (arr1.length === 0 || arr2.length === 0) {\n    return [];\n  }\n  const result = arr1.filter((items) => !arr2.includes(items));\n  return result;\n}\n\n\n//# sourceURL=webpack://whutils/./src/array/difference.js?");

/***/ }),

/***/ "./src/axios/index.js":
/*!****************************!*\
  !*** ./src/axios/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axios\": () => (/* binding */ axios)\n/* harmony export */ });\n/*\n * @Author: jessLiu\n */\nfunction axios({ url, method = \"GET\", params = {}, data = {} }) {\n  return new Promise((resolve, reject) => {\n    //处理method变大写\n    method = method.toUpperCase();\n    //处理query参数，添加到url\n    let queryString = \"\";\n    Object.keys(params).forEach((key) => {\n      queryString += `${key}=${params[key]}&`;\n    });\n    if (queryString) {\n      //去除最后的&\n      queryString = queryString.substring(0, queryString.length - 1);\n      //拼接到url\n      url += \"?\" + queryString;\n    }\n    // 1、执行request请求\n    const request = new XMLHttpRequest();\n    //初始化请求\n    request.open(method, url, true);\n    //发送请求\n    if (method === \"GET\") {\n      request.send();\n    } else if (method === \"POST\" || method === \"PUT\" || method === \"DELETE\") {\n      //告诉服务器请求格式为json\n      request.setRequestHeader(\n        \"Content-Type\",\n        \"application/json;charset=utf-8\"\n      );\n      request.send(json.stringify(data));\n    }\n    //绑定状态改变的监听函数\n    request.onreadystatechange = function () {\n      //如果请求没有完成，直接结束\n      if (request.readyState !== 4) {\n        return;\n      }\n      //如果响应码在200-300之间，表示成功\n      const { status, statusText } = request;\n      if (status >= 200 && status <= 299) {\n        //准备结果数据对象response\n        const response = {\n          data: JSON.parse(request.response),\n          status,\n          statusText,\n        };\n        resolve(response);\n      } else {\n        reject(new Error(\"request error status is\" + status));\n      }\n    };\n  });\n}\n\naxios.get = function (url, options) {\n  return axios(Object.assign(options, { url, method: \"GET\" }));\n};\n\naxios.delete = function (url, options) {\n  return axios(Object.assign(options, { url, method: \"DELETE\" }));\n};\naxios.post = function (url, options) {\n  return axios(Object.assign(options, { url, method: \"POST\" }));\n};\naxios.put = function (url, options) {\n  return axios(Object.assign(options, { url, method: \"PUT\" }));\n};\n\n\n//# sourceURL=webpack://whutils/./src/axios/index.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce)\n/* harmony export */ });\n/*\n * @Author: jessLiu\n */\nfunction debounce(fn, wait) {\n  let waiter = null;\n  return function (e) {\n    if (waiter !== null) {\n      clearTimeout(waiter);\n    }\n    waiter = setTimeout(() => {\n      fn.call(this, e);\n      waiter = null;\n    }, wait);\n  };\n}\n\n\n//# sourceURL=webpack://whutils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\n/*\n * @Author: jessLiu\n */\nfunction throttle(fn, wait) {\n  let flag = true;\n  return function (e) {\n    if (flag) {\n      setTimeout(() => {\n        console.log(e);\n        fn.call(this, e);\n        flag = true;\n      }, wait);\n    }\n    flag = false;\n  };\n}\n\n\n//# sourceURL=webpack://whutils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_debounce__WEBPACK_IMPORTED_MODULE_0__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_throttle__WEBPACK_IMPORTED_MODULE_1__.throttle),\n/* harmony export */   \"difference\": () => (/* reexport safe */ _array_difference__WEBPACK_IMPORTED_MODULE_2__.difference),\n/* harmony export */   \"axios\": () => (/* reexport safe */ _axios_index__WEBPACK_IMPORTED_MODULE_3__.axios),\n/* harmony export */   \"removeProperty\": () => (/* reexport safe */ _object_remove__WEBPACK_IMPORTED_MODULE_4__.removeProperty),\n/* harmony export */   \"removeProperties\": () => (/* reexport safe */ _object_remove__WEBPACK_IMPORTED_MODULE_4__.removeProperties),\n/* harmony export */   \"testUtils\": () => (/* binding */ testUtils)\n/* harmony export */ });\n/* harmony import */ var _function_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/debounce */ \"./src/function/debounce.js\");\n/* harmony import */ var _function_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/throttle */ \"./src/function/throttle.js\");\n/* harmony import */ var _array_difference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/difference */ \"./src/array/difference.js\");\n/* harmony import */ var _axios_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axios/index */ \"./src/axios/index.js\");\n/* harmony import */ var _object_remove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./object/remove */ \"./src/object/remove.js\");\n/*\n * @Author: jessLiu\n */\n//防抖\n\n//节流\n\n//求差集\n\n\n\n\n\nfunction testUtils() {\n  console.log(\"wenhao-utils-package成功引入！\");\n}\n//工具包引入测试\n\n\n\n//# sourceURL=webpack://whutils/./src/index.js?");

/***/ }),

/***/ "./src/object/remove.js":
/*!******************************!*\
  !*** ./src/object/remove.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeProperty\": () => (/* binding */ removeProperty),\n/* harmony export */   \"removeProperties\": () => (/* binding */ removeProperties)\n/* harmony export */ });\n/*\n * @Author: jessLiu\n */\nconst removeProperty = (target, propertyToRemove) => {\n  const { [propertyToRemove]: _, ...newTarget } = target;\n  return newTarget;\n};\n\nconst removeProperties = (target, propertiesToRemove) => {\n  const newTarget = {};\n  const keys = Object.keys(target).filter(\n    (item) => !propertiesToRemove.includes(item)\n  );\n  keys.map((item) => {\n    newTarget[item] = target[item];\n  });\n  return newTarget;\n};\n\n\n//# sourceURL=webpack://whutils/./src/object/remove.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});