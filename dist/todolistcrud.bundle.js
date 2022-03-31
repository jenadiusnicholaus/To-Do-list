/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.js */ \"./src/data.js\");\n/* harmony import */ var _todolistcrud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolistcrud.js */ \"./src/components/todolistcrud.js\");\n\n\n\nconst renderTodo = () => {\n  const todolistEl = document.querySelector('.todolist-ul');\n  todolistEl.innerHTML = '';\n  let liElement = '';\n  for (let i = 0; i < _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    const liEl = document.createElement('LI');\n    liEl.classList.add('todoitem');\n\n    liElement += `<li id=\"${i}\" class=\"todoitem\">\n        <div  class=\"content\">\n           <input type=\"checkbox\">\n           <label class=\"lable\">${_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description}</label>\n         </div>\n         <svg  xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical menu-icon\" viewBox=\"0 0 16 16\">\n           <path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>\n         </svg>\n\n    </li>`;\n  }\n  todolistEl.innerHTML = liElement;\n};\n\n \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodo);\n\n//# sourceURL=webpack://work-with-webpack/./src/components/render.js?");

/***/ }),

/***/ "./src/components/todolistcrud.js":
/*!****************************************!*\
  !*** ./src/components/todolistcrud.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crud)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.js */ \"./src/data.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/components/render.js\");\n/* eslint-disable max-classes-per-file */\n\n\n\n\n\nclass TodoList {\n  constructor(description, isComplete = false) {\n    this.description = description;\n    this.isComplete = isComplete;\n  }\n}\n\n\n\nclass Crud {\n    static addTodoTask = (event) => {\n      if (event.key === 'Enter') {\n        event.preventDefault();\n        const description = event.target.value;\n        _data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(new TodoList(description !== null ? description : ''));\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        document.getElementById('task-desc').value = '';\n      }\n    }\n\n    static removeTodoTask = (event) =>{\n        console.log(event.target.id)\n        for(let i  = 0 ; i<_data_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {   \n            if (event.target.id === i){\n            console.log(i)\n            }\n            console.log(`${event.target.id} and i is ${i} `)\n        }\n\n    };\n      \n}\n\n\nvar Allli = [...document.querySelectorAll('.todoitem')];\nconsole.log(Allli)\n\n\n// addEventListener('click', Crud.removeTodoTask);\n\n//# sourceURL=webpack://work-with-webpack/./src/components/todolistcrud.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todolistArray = [\n\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolistArray);\n\n//# sourceURL=webpack://work-with-webpack/./src/data.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/todolistcrud.js");
/******/ 	
/******/ })()
;