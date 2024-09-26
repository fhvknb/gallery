"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/wheelchoice/page",{

/***/ "(app-pages-browser)/./components/WheelChoice/Index.tsx":
/*!******************************************!*\
  !*** ./components/WheelChoice/Index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { sliceNum } = props;\n    //   console.log(Math.atan(degreeToRadian(60)));\n    const degree = Math.floor(360 / sliceNum * 100) / 100;\n    const rectW = 200 * Math.cos((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(degree));\n    const rectH = 200 * Math.sin((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(degree));\n    console.log(rectW, rectH);\n    const genSlice = ()=>{\n        const item = [];\n        for(let i = 0; i < sliceNum; i++){\n            const color = COLORS[i];\n            item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slice\",\n                style: {\n                    // transform: `rotate(${degree * i}deg)`,\n                    backgroundColor: color,\n                    width: 400 * 2,\n                    height: 400 * 2,\n                    left: 0,\n                    top: 0\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice-inner\",\n                    children: \"222\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, \"slice_k\".concat(i), false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this));\n            console.log(color);\n        }\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: genSlice()\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVEO0FBR2xDO0FBRXJCLE1BQU1DLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsY0FBYyxTQUFVQyxLQUFZO0lBQ3hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLGdEQUFnRDtJQUNoRCxNQUFNRSxTQUFTQyxLQUFLQyxLQUFLLENBQUMsTUFBT0gsV0FBWSxPQUFPO0lBRXBELE1BQU1JLFFBQVEsTUFBTUYsS0FBS0csR0FBRyxDQUFDVCxzREFBY0EsQ0FBQ0s7SUFDNUMsTUFBTUssUUFBUSxNQUFNSixLQUFLSyxHQUFHLENBQUNYLHNEQUFjQSxDQUFDSztJQUU1Q08sUUFBUUMsR0FBRyxDQUFDTCxPQUFPRTtJQUVuQixNQUFNSSxXQUFXO1FBQ2YsTUFBTUMsT0FBb0IsRUFBRTtRQUU1QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSVosVUFBVVksSUFBSztZQUNqQyxNQUFNQyxRQUFRaEIsTUFBTSxDQUFDZSxFQUFFO1lBQ3ZCRCxLQUFLRyxJQUFJLGVBQ1AsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUVWQyxPQUFPO29CQUNMLHlDQUF5QztvQkFDekNDLGlCQUFpQkw7b0JBQ2pCTSxPQUFPLE1BQU07b0JBQ2JDLFFBQVEsTUFBTTtvQkFDZEMsTUFBTTtvQkFDTkMsS0FBSztnQkFDUDswQkFFQSw0RUFBQ1A7b0JBQUlDLFdBQVU7OEJBQWM7Ozs7OztlQVZ4QixVQUFZLE9BQUZKOzs7OztZQWNuQkosUUFBUUMsR0FBRyxDQUFDSTtRQUNkO1FBRUEsT0FBT0Y7SUFDVDtJQUNBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaTjs7Ozs7Ozs7Ozs7QUFVVDtLQW5ETVo7QUFxRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaGVlbENob2ljZS9JbmRleC50c3g/MGMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHNodWZmbGVBcnJheSwgZGVncmVlVG9SYWRpYW4gfSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5jb25zdCBDT0xPUlMgPSBbXHJcbiAgXCIjZWNjYzY4XCIsXHJcbiAgXCIjZmY3ZjUwXCIsXHJcbiAgXCIjZmY2YjgxXCIsXHJcbiAgXCIjN2JlZDlmXCIsXHJcbiAgXCIjNTM1MmVkXCIsXHJcbiAgXCIjYTRiMGJlXCIsXHJcbiAgXCIjZGZlNGVhXCIsXHJcbiAgXCIjMmVkNTczXCIsXHJcbiAgXCIjMWU5MGZmXCIsXHJcbiAgXCIjMzc0MmZhXCIsXHJcbiAgXCIjZmY0NzU3XCIsXHJcbiAgXCIjZmY2MzQ4XCIsXHJcbiAgXCIjZmZhNTAyXCIsXHJcbl07XHJcblxyXG4vLyBjb25zdCBzaHVmZmxlQ29sb3JzID0gc2h1ZmZsZUFycmF5KENPTE9SUyk7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHNsaWNlTnVtOiBudW1iZXI7XHJcbn07XHJcbmNvbnN0IFdoZWVsQ2hvaWNlID0gZnVuY3Rpb24gKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHsgc2xpY2VOdW0gfSA9IHByb3BzO1xyXG5cclxuICAvLyAgIGNvbnNvbGUubG9nKE1hdGguYXRhbihkZWdyZWVUb1JhZGlhbig2MCkpKTtcclxuICBjb25zdCBkZWdyZWUgPSBNYXRoLmZsb29yKCgzNjAgLyBzbGljZU51bSkgKiAxMDApIC8gMTAwO1xyXG5cclxuICBjb25zdCByZWN0VyA9IDIwMCAqIE1hdGguY29zKGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkpO1xyXG4gIGNvbnN0IHJlY3RIID0gMjAwICogTWF0aC5zaW4oZGVncmVlVG9SYWRpYW4oZGVncmVlKSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHJlY3RXLCByZWN0SCk7XHJcblxyXG4gIGNvbnN0IGdlblNsaWNlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbTogUmVhY3ROb2RlW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06IGByb3RhdGUoJHtkZWdyZWUgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogNDAwICogMixcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDAgKiAyLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIj4yMjI8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZWVsLWJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZWVsXCI+XHJcbiAgICAgICAge2dlblNsaWNlKCl9XHJcblxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlXCI+PC9kaXY+ICovfVxyXG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlIHNsaWNlMVwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlIHNsaWNlMlwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlIHNsaWNlM1wiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlIHNsaWNlNFwiPjwvZGl2PiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hlZWxDaG9pY2U7XHJcbiJdLCJuYW1lcyI6WyJkZWdyZWVUb1JhZGlhbiIsIkNPTE9SUyIsIldoZWVsQ2hvaWNlIiwicHJvcHMiLCJzbGljZU51bSIsImRlZ3JlZSIsIk1hdGgiLCJmbG9vciIsInJlY3RXIiwiY29zIiwicmVjdEgiLCJzaW4iLCJjb25zb2xlIiwibG9nIiwiZ2VuU2xpY2UiLCJpdGVtIiwiaSIsImNvbG9yIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJsZWZ0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});