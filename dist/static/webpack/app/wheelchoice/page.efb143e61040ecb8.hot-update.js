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

/***/ "(app-pages-browser)/./app/wheelchoice/page.tsx":
/*!**********************************!*\
  !*** ./app/wheelchoice/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WheelChoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _wheelchoice_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wheelchoice.css */ \"(app-pages-browser)/./app/wheelchoice/wheelchoice.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nfunction genRandomIndex(length) {\n    const indexes = Array.from({\n        length\n    }, (_, i)=>i);\n    const randomIndexes = [];\n    while(indexes.length > 0){\n        const randomIndex = Math.floor(Math.random() * indexes.length);\n        randomIndexes.push(indexes[randomIndex]);\n        indexes.splice(randomIndex, 1);\n    }\n    return randomIndexes;\n}\nfunction WheelChoice() {\n    const sliceNum = 3;\n    const genSlice = ()=>{\n        const item = [];\n        const ridx = genRandomIndex(COLORS.length);\n        console.log(ridx);\n        for(let i = 0; i < sliceNum; i++){}\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel-box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wheel\",\n                children: [\n                    genSlice(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_c = WheelChoice;\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93aGVlbGNob2ljZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSTJCO0FBRTNCLE1BQU1BLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBRUQsU0FBU0MsZUFBZUMsTUFBYztJQUNwQyxNQUFNQyxVQUFVQyxNQUFNQyxJQUFJLENBQUM7UUFBRUg7SUFBTyxHQUFHLENBQUNJLEdBQUdDLElBQU1BO0lBQ2pELE1BQU1DLGdCQUFnQixFQUFFO0lBRXhCLE1BQU9MLFFBQVFELE1BQU0sR0FBRyxFQUFHO1FBQ3pCLE1BQU1PLGNBQWNDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLVCxRQUFRRCxNQUFNO1FBQzdETSxjQUFjSyxJQUFJLENBQUNWLE9BQU8sQ0FBQ00sWUFBWTtRQUN2Q04sUUFBUVcsTUFBTSxDQUFDTCxhQUFhO0lBQzlCO0lBRUEsT0FBT0Q7QUFDVDtBQUVlLFNBQVNPO0lBQ3RCLE1BQU1DLFdBQVc7SUFFakIsTUFBTUMsV0FBVztRQUNmLE1BQU1DLE9BQWtCLEVBQUU7UUFDMUIsTUFBTUMsT0FBT2xCLGVBQWVELE9BQU9FLE1BQU07UUFDekNrQixRQUFRQyxHQUFHLENBQUNGO1FBRVosSUFBSyxJQUFJWixJQUFJLEdBQUdBLElBQUlTLFVBQVVULElBQUssQ0FDbkM7UUFFQSxPQUFPVztJQUNUO0lBRUEscUJBQ0UsOERBQUNJO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOztvQkFDWk47a0NBQ0QsOERBQUNPO3dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pCO0tBNUJ3QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3doZWVsY2hvaWNlL3BhZ2UudHN4PzcwZWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi93aGVlbGNob2ljZS5jc3NcIjtcblxuY29uc3QgQ09MT1JTID0gW1xuICBcIiNlY2NjNjhcIixcbiAgXCIjZmY3ZjUwXCIsXG4gIFwiI2ZmNmI4MVwiLFxuICBcIiM3YmVkOWZcIixcbiAgXCIjNTM1MmVkXCIsXG4gIFwiI2E0YjBiZVwiLFxuICBcIiNkZmU0ZWFcIixcbiAgXCIjMmVkNTczXCIsXG4gIFwiIzFlOTBmZlwiLFxuICBcIiMzNzQyZmFcIixcbiAgXCIjZmY0NzU3XCIsXG4gIFwiI2ZmNjM0OFwiLFxuICBcIiNmZmE1MDJcIixcbl07XG5cbmZ1bmN0aW9uIGdlblJhbmRvbUluZGV4KGxlbmd0aDogbnVtYmVyKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoIH0sIChfLCBpKSA9PiBpKTsgXG4gIGNvbnN0IHJhbmRvbUluZGV4ZXMgPSBbXTtcblxuICB3aGlsZSAoaW5kZXhlcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbmRleGVzLmxlbmd0aCk7IFxuICAgIHJhbmRvbUluZGV4ZXMucHVzaChpbmRleGVzW3JhbmRvbUluZGV4XSk7IFxuICAgIGluZGV4ZXMuc3BsaWNlKHJhbmRvbUluZGV4LCAxKTsgXG4gIH1cblxuICByZXR1cm4gcmFuZG9tSW5kZXhlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2hlZWxDaG9pY2UoKSB7XG4gIGNvbnN0IHNsaWNlTnVtID0gMztcblxuICBjb25zdCBnZW5TbGljZSA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtOiBSZWFjdE5vZGUgPSBbXTtcbiAgICBjb25zdCByaWR4ID0gZ2VuUmFuZG9tSW5kZXgoQ09MT1JTLmxlbmd0aCk7XG4gICAgY29uc29sZS5sb2cocmlkeCk7XG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZU51bTsgaSsrKSB7XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZW07XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPlxuICAgICAgICAgIHtnZW5TbGljZSgpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2VcIj48L2Rpdj5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTFcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlIHNsaWNlMlwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2UzXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTRcIj48L2Rpdj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNPTE9SUyIsImdlblJhbmRvbUluZGV4IiwibGVuZ3RoIiwiaW5kZXhlcyIsIkFycmF5IiwiZnJvbSIsIl8iLCJpIiwicmFuZG9tSW5kZXhlcyIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicHVzaCIsInNwbGljZSIsIldoZWVsQ2hvaWNlIiwic2xpY2VOdW0iLCJnZW5TbGljZSIsIml0ZW0iLCJyaWR4IiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/wheelchoice/page.tsx\n"));

/***/ })

});