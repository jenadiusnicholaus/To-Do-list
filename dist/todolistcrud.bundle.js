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

/***/ "./src/components/models.js":
/*!**********************************!*\
  !*** ./src/components/models.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoListModel)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/components/localstorage.js\");\n\n\nclass TodoListModel {\n  constructor(description, isComplete = false) {\n    this.id = _localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage().length;\n    this.description = description;\n    this.isComplete = isComplete;\n  }\n}\n\n//# sourceURL=webpack://work-with-webpack/./src/components/models.js?");

/***/ }),

/***/ "./src/components/render.js":
/*!**********************************!*\
  !*** ./src/components/render.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.js */ \"./src/components/localstorage.js\");\n\n\nconst renderTodo = () => {\n  const todolistEl = document.querySelector('.todolist-ul');\n  todolistEl.innerHTML = '';\n  let liElement = '';\n  for (let i = 0; i < _localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage().length; i += 1) {\n    const todos = _localstorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFromStorage()[i];\n    liElement += `<li id=\"${i}\" class=\"todoitem\">\n        <div  class=\"content\">\n           <input ${todos.isComplete ? 'checked' : ''} id=\"${todos.id}\" type=\"checkbox\">\n           <label id=\"${todos.id}\" contentEditable=\"true\">${todos.description}</label>\n         </div>\n         <i id=\"${todos.id}\" class=\"fa-solid fa-trash-can\"></i>\n    </li>`;\n  }\n  todolistEl.innerHTML = liElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTodo);\n\n//# sourceURL=webpack://work-with-webpack/./src/components/render.js?");

/***/ }),

/***/ "./src/components/todolistcrud.js":
/*!****************************************!*\
  !*** ./src/components/todolistcrud.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Crud)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/components/render.js\");\n/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.js */ \"./src/components/localstorage.js\");\n/* harmony import */ var _models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models.js */ \"./src/components/models.js\");\n\n\n\n\nclass Crud {\n  static resetIndexes(todos) {\n    for (let index = 0; index < todos.length; index += 1) {\n      todos[index].id = index;\n    }\n    return todos;\n  }\n\n    static addTodoTask = (event) => {\n      event.target.style.backgroundColor = 'white';\n      let todos = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n\n      if (event.key === 'Enter') {\n        const description = event.target.value;\n\n        if (document.getElementById('task-desc').value.length === 0) {\n          document.querySelector('.icon').style.color = 'red';\n        } else {\n          todos = this.resetIndexes(todos);\n          todos.push(new _models_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](description));\n          _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(todos);\n\n          (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n          // clean input\n          document.getElementById('task-desc').value = '';\n          document.querySelector('.icon').style.color = '#c2b5b5';\n          event.target.style.backgroundColor = 'white';\n        }\n      }\n    }\n\n    static removeTodoTask = (index) => {\n      const todolist = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n      const filteredlist = todolist.filter((item) => item.id !== index);\n      _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(filteredlist);\n    };\n\n    static editTodoDescription = (id, descrption, todos) => {\n      for (let i = 0; i < todos.length; i += 1) {\n        if (todos[i].id === id) {\n          todos[i].description = descrption;\n        }\n      }\n    }\n}\n\ndocument.getElementById('todolist-ul').addEventListener('click', (event) => {\n  // remove item\n  if (event.target.tagName === 'I') {\n    Crud.removeTodoTask(parseInt(event.target.id, 10));\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n  // Edit description\n  if (event.target.tagName === 'LABEL') {\n    const todos = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n    Crud.editTodoDescription(parseInt(event.target.id, 10), event.target.textContent, todos);\n    _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(todos);\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n\n  if (event.target.type === 'checkbox') {\n    const todos = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage();\n    for (let i = 0; i < todos.length; i += 1) {\n      if (todos[i].id === parseInt(event.target.id, 10)) {\n        todos[i].isComplete = !todos[i].isComplete;\n      }\n    }\n    _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(todos);\n  }\n});\n\n// Add to local storage\ndocument.getElementById('task-desc').addEventListener('keydown', Crud.addTodoTask);\n\n// delete al with complete true value to\ndocument.getElementById('btn-clear-all').addEventListener('click', () => {\n  const notCompleteTodos = _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getFromStorage().filter((item) => item.isComplete !== true);\n  _localstorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addToStorage(notCompleteTodos);\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n//# sourceURL=webpack://work-with-webpack/./src/components/todolistcrud.js?");

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