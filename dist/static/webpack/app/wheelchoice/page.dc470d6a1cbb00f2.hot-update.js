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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { sliceNum } = props;\n    const genSlice = ()=>{\n        const item = [];\n        for(let i = 0; i < sliceNum; i++){\n            const color = COLORS[i];\n            const degree = 360 / sliceNum;\n            item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slice\",\n                style: {\n                    transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                    backgroundColor: color\n                }\n            }, \"slice_k\".concat(i), false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this));\n            console.log(color);\n        }\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slice\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice-inner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7QUFLcUI7QUFFckIsTUFBTUEsU0FBUztJQUNiO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFPRCxNQUFNQyxjQUFjLFNBQVVDLEtBQVk7SUFDeEMsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR0Q7SUFFckIsTUFBTUUsV0FBVztRQUNmLE1BQU1DLE9BQW9CLEVBQUU7UUFFNUIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILFVBQVVHLElBQUs7WUFDakMsTUFBTUMsUUFBUVAsTUFBTSxDQUFDTSxFQUFFO1lBQ3ZCLE1BQU1FLFNBQVMsTUFBTUw7WUFDckJFLEtBQUtJLElBQUksZUFDUCw4REFBQ0M7Z0JBQ0NDLFdBQVU7Z0JBRVZDLE9BQU87b0JBQ0xDLFdBQVcsVUFBcUIsT0FBWEwsU0FBU0YsR0FBRTtvQkFDaENRLGlCQUFpQlA7Z0JBQ25CO2VBSkssVUFBWSxPQUFGRDs7Ozs7WUFRbkJTLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDZDtRQUVBLE9BQU9GO0lBQ1Q7SUFDQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFFYiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDTTtrQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXbEI7S0ExQ01oQjtBQTRDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1doZWVsQ2hvaWNlL0luZGV4LnRzeD8wYzIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgc2h1ZmZsZUFycmF5IH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgQ09MT1JTID0gW1xyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG5dO1xyXG5cclxuLy8gY29uc3Qgc2h1ZmZsZUNvbG9ycyA9IHNodWZmbGVBcnJheShDT0xPUlMpO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBzbGljZU51bTogbnVtYmVyO1xyXG59O1xyXG5jb25zdCBXaGVlbENob2ljZSA9IGZ1bmN0aW9uIChwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCB7IHNsaWNlTnVtIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgZ2VuU2xpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBSZWFjdE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2VOdW07IGkrKykge1xyXG4gICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgY29uc3QgZGVncmVlID0gMzYwIC8gc2xpY2VOdW07XHJcbiAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtkZWdyZWUgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPlxyXG4gICAgICAgIHsvKiB7Z2VuU2xpY2UoKX0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj7lmL/lmL/lmL/lmL/lmL/lmL/lmL/lmL/lmL/lmL/lmL/lmL88L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPjwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTRcIj48L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoZWVsQ2hvaWNlO1xyXG4iXSwibmFtZXMiOlsiQ09MT1JTIiwiV2hlZWxDaG9pY2UiLCJwcm9wcyIsInNsaWNlTnVtIiwiZ2VuU2xpY2UiLCJpdGVtIiwiaSIsImNvbG9yIiwiZGVncmVlIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidHJhbnNmb3JtIiwiYmFja2dyb3VuZENvbG9yIiwiY29uc29sZSIsImxvZyIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});