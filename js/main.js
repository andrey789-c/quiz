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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ \"./index.html\");\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n\n\nvar DATA = [{\n  question: '\"1\" + 1 =',\n  answers: [{\n    id: '1',\n    value: '2',\n    correct: false\n  }, {\n    id: '2',\n    value: '11',\n    correct: true\n  }, {\n    id: '3',\n    value: 'undefined',\n    correct: false\n  }]\n}, {\n  question: 'Что возвращает функция map?',\n  answers: [{\n    id: '4',\n    value: 'Ничего не возвращает',\n    correct: false\n  }, {\n    id: '5',\n    value: 'Новый массив',\n    correct: true\n  }, {\n    id: '6',\n    value: 'Элементы по отдельности',\n    correct: false\n  }]\n}];\nvar resultsIndex = {};\nvar quiz = document.querySelector('#quiz');\nvar questions = document.querySelector('#questions');\nvar indicator = document.querySelector('#indicator');\nvar results = document.querySelector('#results');\nvar next = document.querySelector('#btn-next');\nvar restart = document.querySelector('#btn-restart');\n\nvar renderQuestions = function renderQuestions(index) {\n  renderIndicator(index + 1);\n  questions.dataset.currentStep = index;\n\n  var renderAnswers = function renderAnswers() {\n    return DATA[index].answers.map(function (answer) {\n      return \"\\n            <li>\\n                <label>\\n                    <input class=\\\"answer-input\\\" type=\\\"radio\\\" name=\\\"\".concat(index, \"\\\" value=\").concat(answer.id, \">\\n                    \").concat(answer.value, \"\\n                </label>\\n            </li>\\n            \");\n    }).join('');\n  };\n\n  questions.innerHTML = \"\\n    <div class=\\\"quiz-questions-item\\\">\\n        <div class=\\\"quiz-questions-item__question\\\">\".concat(DATA[index].question, \"</div>\\n        <ul class=\\\"quiz-questions-item__answers\\\">\\n            \").concat(renderAnswers(), \"\\n        </ul>\\n    </div>\\n    \");\n};\n\nvar renderResults = function renderResults() {\n  var content = '';\n\n  function getClassName(answerId, questionIndex) {\n    var className = '';\n\n    if (!answerId.correct) {\n      className = 'invalid';\n    } else if (answerId.correct) {\n      className = 'valid';\n    }\n\n    return className;\n  }\n\n  var getAnswers = function getAnswers(index) {\n    return error[index].answers.map(function (answer, questionIndex) {\n      return \"\\n                <li class=\\\"\".concat(getClassName(answer, questionIndex), \"\\\">\").concat(answer.value, \"</li>\\n            \");\n    }).join('');\n  };\n\n  var num = 0;\n\n  function number(questionIndex) {\n    var numberItem = document.querySelector('.quiz-results-item__number');\n    DATA[questionIndex].answers.forEach(function (answer) {\n      if (answer.correct && resultsIndex[questionIndex] === answer.id) {\n        num += 1;\n      }\n    });\n    numberItem.innerHTML = num + '/' + DATA.length;\n  }\n\n  var error = [];\n\n  function setError(index) {\n    DATA.forEach(function (question) {\n      question.answers.forEach(function (answer) {\n        if (!answer.correct && answer.id == resultsIndex[index]) {\n          error.push(question);\n        }\n      });\n    });\n  }\n\n  DATA.forEach(function (question, index) {\n    setError(index);\n  });\n\n  if (error.length) {\n    error.forEach(function (question, index) {\n      content += \"\\n                <div class=\\\"quiz-results-item\\\">\\n                    <div class=\\\"quiz-results-item__number\\\"></div>\\n                    \\n                    <div class=\\\"quiz-results-item__question\\\">\".concat(question.question, \"</div>\\n                    <ul class=\\\"quiz-results-item__answers\\\">\\n                        \").concat(getAnswers(index), \"\\n                    </ul>\\n                </div>\\n            \\n            \");\n    });\n  } else {\n    content = '<div class=\"quiz-results-succes\">У вас нет ошибок!</div>';\n  }\n\n  results.innerHTML = '';\n  results.innerHTML += content;\n  DATA.forEach(function (question, index) {\n    number(index);\n  });\n};\n\nvar renderIndicator = function renderIndicator(currentStep) {\n  indicator.innerHTML = \"\\n        \".concat(currentStep, \"/\").concat(DATA.length, \"\\n    \");\n};\n\nquiz.addEventListener('change', function (event) {\n  // Логика ответа\n  if (event.target.classList.contains('answer-input')) {\n    document.querySelectorAll('label').forEach(function (el) {\n      return el.classList.remove('active');\n    });\n    resultsIndex[event.target.name] = event.target.value;\n    next.disabled = false;\n    event.target.parentNode.classList.add('active');\n  }\n});\nquiz.addEventListener('click', function (event) {\n  // Вперед начало\n  if (event.target.classList.contains('btn-next')) {\n    if (DATA.length - 1 === +questions.dataset.currentStep) {\n      questions.classList.add('questions-hidden');\n      indicator.classList.add('indicator-hidden');\n      results.closest('.quiz-results').classList.add('results-visible');\n      next.classList.add('btn-next-hidden');\n      restart.classList.add('btn-restart-visible');\n      renderResults();\n    } else {\n      renderQuestions(+questions.dataset.currentStep + 1);\n    }\n\n    next.disabled = true;\n  }\n\n  if (event.target.classList.contains('btn-restart')) {\n    questions.classList.remove('questions-hidden');\n    indicator.classList.remove('indicator-hidden');\n    results.closest('.quiz-results').classList.remove('results-visible');\n    next.classList.remove('btn-next-hidden');\n    restart.classList.remove('btn-restart-visible');\n    renderQuestions(0);\n  }\n});\nrenderQuestions(0);\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Quiz</title>\\r\\n</head>\\r\\n<body>\\r\\n    <div class=\\\"quiz\\\" id=\\\"quiz\\\">\\r\\n        <div class=\\\"quiz-questions\\\" id=\\\"questions\\\"></div>\\r\\n        <div class=\\\"quiz-indicator\\\" id=\\\"indicator\\\"></div>\\r\\n        <div class=\\\"quiz-results\\\" >\\r\\n            <div class=\\\"quiz-results-item__number\\\"></div>\\r\\n            <div class=\\\"quiz-results-errors\\\">Мои ошибки:</div>\\r\\n            <div class=\\\"quiz-results-errors-item\\\" id=\\\"results\\\"></div>\\r\\n        </div>\\r\\n        <div class=\\\"quiz-controls\\\">\\r\\n            <button class=\\\"btn-next\\\" id=\\\"btn-next\\\" disabled>Далее</button>\\r\\n            <button class=\\\"btn-restart\\\" id=\\\"btn-restart\\\">Сначала</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.scss?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;