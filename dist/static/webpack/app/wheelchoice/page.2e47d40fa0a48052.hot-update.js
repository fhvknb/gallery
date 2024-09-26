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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { sliceNum } = props;\n    //   console.log(Math.atan(degreeToRadian(60)));\n    const rectW = 200 * Math.cos((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(60));\n    const rectH = 200 * Math.sin((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(60));\n    console.log(rectW, rectH);\n    const genSlice = ()=>{\n        const item = [];\n        for(let i = 0; i < sliceNum; i++){\n            const color = COLORS[i];\n            const degree = 360 / sliceNum;\n            item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slice\",\n                style: {\n                    transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                    backgroundColor: color,\n                    width: rectW * 2,\n                    height: rectH * 2,\n                    left: rectW,\n                    top: -rectH\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice-inner\",\n                    children: \"222\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 11\n                }, this)\n            }, \"slice_k\".concat(i), false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, this));\n            console.log(color);\n        }\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: genSlice()\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVEO0FBR2xDO0FBRXJCLE1BQU1DLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsY0FBYyxTQUFVQyxLQUFZO0lBQ3hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLGdEQUFnRDtJQUVoRCxNQUFNRSxRQUFRLE1BQU1DLEtBQUtDLEdBQUcsQ0FBQ1Asc0RBQWNBLENBQUM7SUFDNUMsTUFBTVEsUUFBUSxNQUFNRixLQUFLRyxHQUFHLENBQUNULHNEQUFjQSxDQUFDO0lBRTVDVSxRQUFRQyxHQUFHLENBQUNOLE9BQU9HO0lBRW5CLE1BQU1JLFdBQVc7UUFDZixNQUFNQyxPQUFvQixFQUFFO1FBRTVCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJVixVQUFVVSxJQUFLO1lBQ2pDLE1BQU1DLFFBQVFkLE1BQU0sQ0FBQ2EsRUFBRTtZQUN2QixNQUFNRSxTQUFTLE1BQU1aO1lBQ3JCUyxLQUFLSSxJQUFJLGVBQ1AsOERBQUNDO2dCQUNDQyxXQUFVO2dCQUVWQyxPQUFPO29CQUNMQyxXQUFXLFVBQXFCLE9BQVhMLFNBQVNGLEdBQUU7b0JBQ2hDUSxpQkFBaUJQO29CQUNqQlEsT0FBT2xCLFFBQVE7b0JBQ2ZtQixRQUFRaEIsUUFBUTtvQkFDaEJpQixNQUFNcEI7b0JBQ05xQixLQUFLLENBQUNsQjtnQkFDUjswQkFFQSw0RUFBQ1U7b0JBQUlDLFdBQVU7OEJBQWM7Ozs7OztlQVZ4QixVQUFZLE9BQUZMOzs7OztZQWNuQkosUUFBUUMsR0FBRyxDQUFDSTtRQUNkO1FBRUEsT0FBT0Y7SUFDVDtJQUNBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNaUDs7Ozs7Ozs7Ozs7QUFVVDtLQW5ETVY7QUFxRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaGVlbENob2ljZS9JbmRleC50c3g/MGMyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHNodWZmbGVBcnJheSwgZGVncmVlVG9SYWRpYW4gfSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XHJcblxyXG5jb25zdCBDT0xPUlMgPSBbXHJcbiAgXCIjZWNjYzY4XCIsXHJcbiAgXCIjZmY3ZjUwXCIsXHJcbiAgXCIjZmY2YjgxXCIsXHJcbiAgXCIjN2JlZDlmXCIsXHJcbiAgXCIjNTM1MmVkXCIsXHJcbiAgXCIjYTRiMGJlXCIsXHJcbiAgXCIjZGZlNGVhXCIsXHJcbiAgXCIjMmVkNTczXCIsXHJcbiAgXCIjMWU5MGZmXCIsXHJcbiAgXCIjMzc0MmZhXCIsXHJcbiAgXCIjZmY0NzU3XCIsXHJcbiAgXCIjZmY2MzQ4XCIsXHJcbiAgXCIjZmZhNTAyXCIsXHJcbl07XHJcblxyXG4vLyBjb25zdCBzaHVmZmxlQ29sb3JzID0gc2h1ZmZsZUFycmF5KENPTE9SUyk7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHNsaWNlTnVtOiBudW1iZXI7XHJcbn07XHJcbmNvbnN0IFdoZWVsQ2hvaWNlID0gZnVuY3Rpb24gKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHsgc2xpY2VOdW0gfSA9IHByb3BzO1xyXG5cclxuICAvLyAgIGNvbnNvbGUubG9nKE1hdGguYXRhbihkZWdyZWVUb1JhZGlhbig2MCkpKTtcclxuXHJcbiAgY29uc3QgcmVjdFcgPSAyMDAgKiBNYXRoLmNvcyhkZWdyZWVUb1JhZGlhbig2MCkpO1xyXG4gIGNvbnN0IHJlY3RIID0gMjAwICogTWF0aC5zaW4oZGVncmVlVG9SYWRpYW4oNjApKTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVjdFcsIHJlY3RIKTtcclxuXHJcbiAgY29uc3QgZ2VuU2xpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBSZWFjdE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2VOdW07IGkrKykge1xyXG4gICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgY29uc3QgZGVncmVlID0gMzYwIC8gc2xpY2VOdW07XHJcbiAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtkZWdyZWUgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdFcgKiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IHJlY3RIICogMixcclxuICAgICAgICAgICAgbGVmdDogcmVjdFcsXHJcbiAgICAgICAgICAgIHRvcDogLXJlY3RILFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlLWlubmVyXCI+MjIyPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPlxyXG4gICAgICAgIHtnZW5TbGljZSgpfVxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPjwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTRcIj48L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoZWVsQ2hvaWNlO1xyXG4iXSwibmFtZXMiOlsiZGVncmVlVG9SYWRpYW4iLCJDT0xPUlMiLCJXaGVlbENob2ljZSIsInByb3BzIiwic2xpY2VOdW0iLCJyZWN0VyIsIk1hdGgiLCJjb3MiLCJyZWN0SCIsInNpbiIsImNvbnNvbGUiLCJsb2ciLCJnZW5TbGljZSIsIml0ZW0iLCJpIiwiY29sb3IiLCJkZWdyZWUiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});