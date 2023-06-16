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

/***/ "./__src/js/_functions.js":
/*!********************************!*\
  !*** ./__src/js/_functions.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deviceIdent\": () => (/* binding */ deviceIdent)\n/* harmony export */ });\n//- Поддержка webp\r\n// Устанавливает класс webp для документа, если браузер поддерживает этот формат\r\nfunction deviceIdent() {\r\n    var ua = window.navigator.userAgent;\r\n    var msie = ua.indexOf(\"MSIE \");\r\n    var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };\r\n    \r\n    function isIE() {\r\n        ua = navigator.userAgent;\r\n        var is_ie = ua.indexOf(\"MSIE \") > -1 || ua.indexOf(\"Trident/\") > -1;\r\n        return is_ie;\r\n    }\r\n    \r\n    if (isIE()) {\r\n        document.querySelector('html').classList.add('ie');\r\n    }\r\n    \r\n    if (isMobile.any()) {\r\n        document.querySelector('html').classList.add('_touch');\r\n    }\r\n    \r\n    function testWebP(callback) {\r\n        var webP = new Image();\r\n        webP.onload = webP.onerror = function () {\r\n            callback(webP.height == 2);\r\n        };\r\n        webP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n    }\r\n    \r\n    testWebP(function (support) {\r\n        if (support === true) {\r\n            document.querySelector('html').classList.add('_webp');\r\n        } else {\r\n            document.querySelector('html').classList.add('_no-webp');\r\n        }\r\n    });\r\n    \r\n    window.addEventListener(\"load\", function () {\r\n        if (document.querySelector('.wrapper')) {\r\n            setTimeout(function () {\r\n                document.querySelector('.wrapper').classList.add('_loaded');\r\n            }, 0);\r\n        }\r\n    });\r\n    \r\n    let unlock = true;\r\n    \r\n    //- END Поддержка webp\r\n}\r\n\r\n\r\n\r\n\r\n//- Сдвиг контента\r\n//- Сдвигает контент если body имеет класс _lock\r\nlet wrap = document.querySelector('.wrapper');\r\nlet scrollWidth = window.innerWidth - document.body.offsetWidth;\r\nlet conts = document.querySelectorAll('.container');\r\n\r\nfunction shiftBodyLock() {\r\n    if (document.body.classList.contains('_lock')) {\r\n        shiftContent();\r\n    } else if (!document.body.classList.contains('_lock')) {\r\n        unShiftContent();\r\n    }\r\n}\r\n\r\nfunction shiftContent() {\r\n    if (wrap.offsetWidth < document.body.offsetWidth) {\r\n        bodyShift();\r\n    } else if (wrap.offsetWidth >= document.body.offsetWidth) {\r\n        shiftContainer();\r\n    }\r\n}\r\n\r\nfunction unShiftContent() {\r\n    if (wrap.offsetWidth < document.body.offsetWidth) {\r\n        bodyUnShift();\r\n    } else if(wrap.offsetWidth >= document.body.offsetWidth){\r\n        unShiftContainer();\r\n    }\r\n}\r\n\r\nfunction shiftContainer() {\r\n    for (let i = 0; i < conts.length; i++) {\r\n        conts[i].style.right = scrollWidth / 2 + 'px';\r\n    };\r\n};\r\n\r\nfunction unShiftContainer() {\r\n    for (let i = 0; i < conts.length; i++) {\r\n        conts[i].style.right = 0 + 'px';\r\n    };\r\n};\r\n\r\nfunction bodyShift() {\r\n    document.body.style.paddingRight = scrollWidth + 'px';\r\n}\r\n\r\nfunction bodyUnShift() {\r\n    document.body.style.paddingRight = 0 + 'px';\r\n}\r\n//- END Сдвиг контента\n\n//# sourceURL=webpack://esl_gulp_template/./__src/js/_functions.js?");

/***/ }),

/***/ "./__src/js/files/_header.js":
/*!***********************************!*\
  !*** ./__src/js/files/_header.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerMenu\": () => (/* binding */ headerMenu)\n/* harmony export */ });\nfunction headerMenu() {\r\n    let burger = document.querySelector('#burger');\r\n    let menu = document.querySelector('.main-menu');\r\n    let body = document.body;\r\n    let links;\r\n\r\n    if (!burger || !menu) {\r\n        console.log(\"Недостаточно элементов для выполнения функции headerMenu\")\r\n        return false;\r\n    }\r\n    //if (window.innerWidth > 767) return false;\r\n\r\n    links = menu.querySelectorAll('li');\r\n    for (let i = 0; i < links.length; i++) {\r\n        let subMunu = links[i].querySelector('ul');\r\n        if (subMunu) {\r\n            links[i].classList.add('submenu-parent');\r\n        }\r\n    }\r\n\r\n    burger.addEventListener('click', toggleMenu);\r\n    \r\n    function toggleMenu() {\r\n        if (!burger.classList.contains('_open')) {\r\n            openMenu();\r\n        } else {\r\n            closeMenu();\r\n        }\r\n    }\r\n\r\n    function openMenu() {\r\n        burger.classList.add('_open');\r\n        menu.classList.add('_open');\r\n        body.classList.add('_lock');\r\n        addEventsToMenuItems();\r\n    }\r\n\r\n    function closeMenu() {\r\n        burger.classList.remove('_open');\r\n        menu.classList.remove('_open');\r\n        body.classList.remove('_lock');\r\n        removeEventsOfMenuItems();\r\n    }\r\n\r\n    function addEventsToMenuItems() {\r\n        for (let i = 0; i < links.length; i++) {\r\n            links[i].addEventListener('click', closeMenu);\r\n        };\r\n    }\r\n\r\n    function removeEventsOfMenuItems() {\r\n        for (let i = 0; i < links.length; i++) {\r\n            links[i].removeEventListener('click', closeMenu);\r\n        };\r\n    }\r\n}\n\n//# sourceURL=webpack://esl_gulp_template/./__src/js/files/_header.js?");

/***/ }),

/***/ "./__src/js/script.js":
/*!****************************!*\
  !*** ./__src/js/script.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions.js */ \"./__src/js/_functions.js\");\n/* harmony import */ var _files_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./files/_header.js */ \"./__src/js/files/_header.js\");\n\r\n/**  Режимы разработки: \r\n * - с использованием webpack;\r\n * - с использованием include;\r\n * \r\n * для определения в каком режиме работать в файле gulpfile.js указать значение переменной\r\n * vars.useWebpack: true / false\r\n * \r\n * режим webpack позволяет использовать плюшки ES6\r\n * режим include позволяет импортировать содержимок файлов с помощью @@include()\r\n */\r\n\r\n;\r\n\r\n\r\n(0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.deviceIdent)()\r\n;(0,_files_header_js__WEBPACK_IMPORTED_MODULE_1__.headerMenu)();\r\n\r\nfunction runBanerAnimation() {\r\n    let banerImgs = document.querySelector('#banerAnim');\r\n    if (!banerImgs) return false;\r\n    banerImgs.classList.add('_run-anim');\r\n}\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    runBanerAnimation();\r\n})\r\n\r\n\r\nfunction productRate() {\r\n    let rateItems = document.querySelectorAll('.rate');\r\n    if (!rateItems) {return false}\r\n\r\n    for (let i = 0; i < rateItems.length; i++) {\r\n        setRates(rateItems[i]);\r\n    };\r\n\r\n\r\n    function setRates(elem) {\r\n        let rate = elem.dataset.rate;\r\n        let stars = elem.querySelectorAll('svg');\r\n        for (let i = 0; i < rate; i++) {\r\n            stars[i].style.fill = \"#DC780B\";\r\n        };\r\n    }\r\n\r\n}\r\n\r\nproductRate()\r\n\r\n\r\nlet fbSlider = new Swiper('.feedback-slider__container', {\r\n    slidesPerView: 1,\r\n    spaceBetween: 15,\r\n    grabCursor: true,\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev',\r\n      },\r\n});\n\n//# sourceURL=webpack://esl_gulp_template/./__src/js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./__src/js/script.js");
/******/ 	
/******/ })()
;