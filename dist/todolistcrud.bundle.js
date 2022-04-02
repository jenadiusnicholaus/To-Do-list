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

/***/ "./src/components/localstorage.js":
/*!****************************************!*\
  !*** ./src/components/localstorage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoStore)\n/* harmony export */ });\nclass TodoStore {\n    static getFromStorage= () => JSON.parse(localStorage.getItem('todos') || '[]');\n\n    static addToStorage = (todolistarray) => {\n      localStorage.setItem('todos', JSON.stringify(todolistarray));\n    }\n}\n\n//# sourceURL=webpack://work-with-webpack/./src/components/localstorage.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/components/localstorage.js\");\n\n\nconst renderTodo = () => {\n  const todolistEl = document.querySelector('.todolist-ul');\n  todolistEl.innerHTML = '';\n  let liElement = '';\n  for (let i = 0; i < _localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage().length; i += 1) {\n    const liEl = document.createElement('LI');\n    liEl.classList.add('todoitem');\n\n    liElement += `<li id=\"${i}\" class=\"todoitem\">\n        <div  class=\"content\">\n           <input type=\"checkbox\">\n           <label  id=\"${_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage()[i].id}\" contentEditable=\"true\">\n           ${_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage()[i].description}\n           </label>\n         </div>\n         <i id=\"${_localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage()[i].id}\" class=\"fa-solid fa-trash-can\"></i>\n    </li>`;\n  }\n  todolistEl.innerHTML = liElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodo);\n\n//# sourceURL=webpack://work-with-webpack/./src/components/render.js?");

/***/ }),

/***/ "./src/components/todolistcrud.js":
/*!****************************************!*\
  !*** ./src/components/todolistcrud.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crud)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/components/render.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/components/localstorage.js\");\n/* eslint-disable max-classes-per-file */\n\n\n\nclass TodoList {\n  constructor(description, isComplete = false) {\n    this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);\n    this.description = description;\n    this.isComplete = isComplete;\n  }\n}\n\nclass Crud {\n    static addTodoTask = (event) => {\n      event.target.style.backgroundColor = 'white';\n      const todos = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n\n      if (event.key === 'Enter') {\n        const description = event.target.value;\n\n        if (todos.some((task) => task.description === description)) {\n          event.target.style.backgroundColor = '#c76161';\n        }\n        if (document.getElementById('task-desc').value.length === 0) {\n          //  document.querySelector('.icon').style.color= '#c76161';\n          // event.target.style.background='#c76161';\n          return;\n        }\n\n        todos.push(new TodoList(description));\n        _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(todos);\n        (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        document.getElementById('task-desc').value = '';\n        document.querySelector('.icon').style.color = '#c2b5b5';\n        event.target.style.backgroundColor = 'white';\n      }\n    }\n\n    static removeTodoTask = (id) => {\n      const todolist = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n      const filteredlist = todolist.filter((item) => item.id !== id);\n      localStorage.setItem('todos', JSON.stringify(filteredlist));\n    };\n\n    static editTodoDescrip = (id, descrption, todos) => {\n      for (let i = 0; i < todos.length; i += 1) {\n        if (todos[i].id === id) {\n          todos[i].description = descrption;\n        }\n      }\n    }\n}\n\ndocument.getElementById('todolist-ul').addEventListener('click', (event) => {\n  // remove item\n  if (event.target.tagName === 'I') {\n    Crud.removeTodoTask(event.target.id);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n  // Edit description\n  if (event.target.tagName === 'LABEL') {\n    const todos = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n    Crud.editTodoDescrip(event.target.id, event.target.textContent, todos);\n    _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(todos);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n});\n\n// Add to local storage\ndocument.getElementById('task-desc').addEventListener('keydown', Crud.addTodoTask);\n\n\n//# sourceURL=webpack://work-with-webpack/./src/components/todolistcrud.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/todolistcrud.js");
/******/ 	
/******/ })()
;