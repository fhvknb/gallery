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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { sliceNum } = props;\n    //   console.log(Math.atan(degreeToRadian(60)));\n    //   const degree = Math.floor((360 / sliceNum) * 100) / 100;\n    const degree = 360 / sliceNum;\n    const calcDeg = 180 - degree;\n    console.log(calcDeg);\n    const rectW = 200 / Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(degree));\n    //   const rectH = 200 * Math.sin(degreeToRadian(degree));\n    console.log(rectW);\n    const genSlice = ()=>{\n        const item = [];\n        if (calcDeg < 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        backgroundColor: COLORS[0],\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this);\n        } else if (calcDeg === 0) {\n            for(let i = 0; i < 2; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(180 * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: \"100%\",\n                        height: \"100%\",\n                        top: \"-50%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"300px\"\n                        },\n                        children: [\n                            \"Slice-$\",\n                            i\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        }\n        for(let i = 0; i < sliceNum; i++){\n            const color = COLORS[i];\n            item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slice\",\n                style: {\n                    transform: \"rotate(\".concat(180 * i, \"deg)\"),\n                    backgroundColor: color,\n                    width: rectW * 2,\n                    height: 400,\n                    left: 200 - rectW,\n                    top: -200\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice-inner\",\n                    children: \"222\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 11\n                }, this)\n            }, \"slice_k\".concat(i), false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 90,\n                columnNumber: 9\n            }, this));\n        }\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: genSlice()\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVEO0FBR2xDO0FBRXJCLE1BQU1DLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsY0FBYyxTQUFVQyxLQUFZO0lBQ3hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLGdEQUFnRDtJQUNoRCw2REFBNkQ7SUFDN0QsTUFBTUUsU0FBUyxNQUFNRDtJQUNyQixNQUFNRSxVQUFVLE1BQU1EO0lBRXRCRSxRQUFRQyxHQUFHLENBQUNGO0lBRVosTUFBTUcsUUFBUSxNQUFNQyxLQUFLQyxHQUFHLENBQUNYLHNEQUFjQSxDQUFDSztJQUM1QywwREFBMEQ7SUFFMURFLFFBQVFDLEdBQUcsQ0FBQ0M7SUFFWixNQUFNRyxXQUFXO1FBQ2YsTUFBTUMsT0FBb0IsRUFBRTtRQUU1QixJQUFJUCxVQUFVLEdBQUc7WUFDZixxQkFDRSw4REFBQ1E7MEJBQ0MsNEVBQUNBO29CQUNDQyxXQUFVO29CQUNWQyxPQUFPO3dCQUNMQyxpQkFBaUJoQixNQUFNLENBQUMsRUFBRTt3QkFDMUJpQixPQUFPO3dCQUNQQyxRQUFRO29CQUNWOzhCQUVBLDRFQUFDTDt3QkFBSUMsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7OztRQUlyQyxPQUFPLElBQUlULFlBQVksR0FBRztZQUN4QixJQUFLLElBQUljLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFLO2dCQUMxQixNQUFNQyxRQUFRcEIsTUFBTSxDQUFDbUIsRUFBRTtnQkFDdkJQLEtBQUtTLElBQUksZUFDUCw4REFBQ1I7b0JBQ0NDLFdBQVU7b0JBRVZDLE9BQU87d0JBQ0xPLFdBQVcsVUFBa0IsT0FBUixNQUFNSCxHQUFFO3dCQUM3QkgsaUJBQWlCSTt3QkFDakJILE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JLLEtBQUs7b0JBRVA7OEJBRUEsNEVBQUNWO3dCQUFJQyxXQUFVO3dCQUFjQyxPQUFPOzRCQUFFUyxZQUFZO3dCQUFROzs0QkFBRzs0QkFDbkRMOzs7Ozs7O21CQVhMLFVBQVksT0FBRkE7Ozs7O1lBZXJCO1lBQ0EsT0FBT1A7UUFDVDtRQUVBLElBQUssSUFBSU8sSUFBSSxHQUFHQSxJQUFJaEIsVUFBVWdCLElBQUs7WUFDakMsTUFBTUMsUUFBUXBCLE1BQU0sQ0FBQ21CLEVBQUU7WUFDdkJQLEtBQUtTLElBQUksZUFDUCw4REFBQ1I7Z0JBQ0NDLFdBQVU7Z0JBRVZDLE9BQU87b0JBQ0xPLFdBQVcsVUFBa0IsT0FBUixNQUFNSCxHQUFFO29CQUM3QkgsaUJBQWlCSTtvQkFDakJILE9BQU9ULFFBQVE7b0JBQ2ZVLFFBQVE7b0JBQ1JPLE1BQU0sTUFBTWpCO29CQUNaZSxLQUFLLENBQUM7Z0JBRVI7MEJBRUEsNEVBQUNWO29CQUFJQyxXQUFVOzhCQUFjOzs7Ozs7ZUFYeEIsVUFBWSxPQUFGSzs7Ozs7UUFjckI7UUFFQSxPQUFPUDtJQUNUO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pIOzs7Ozs7Ozs7OztBQVVUO0tBOUZNVjtBQWdHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1doZWVsQ2hvaWNlL0luZGV4LnRzeD8wYzIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgc2h1ZmZsZUFycmF5LCBkZWdyZWVUb1JhZGlhbiB9IGZyb20gXCJAL3V0aWxzXCI7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmNvbnN0IENPTE9SUyA9IFtcclxuICBcIiNlY2NjNjhcIixcclxuICBcIiNmZjdmNTBcIixcclxuICBcIiNmZjZiODFcIixcclxuICBcIiM3YmVkOWZcIixcclxuICBcIiM1MzUyZWRcIixcclxuICBcIiNhNGIwYmVcIixcclxuICBcIiNkZmU0ZWFcIixcclxuICBcIiMyZWQ1NzNcIixcclxuICBcIiMxZTkwZmZcIixcclxuICBcIiMzNzQyZmFcIixcclxuICBcIiNmZjQ3NTdcIixcclxuICBcIiNmZjYzNDhcIixcclxuICBcIiNmZmE1MDJcIixcclxuXTtcclxuXHJcbi8vIGNvbnN0IHNodWZmbGVDb2xvcnMgPSBzaHVmZmxlQXJyYXkoQ09MT1JTKTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgc2xpY2VOdW06IG51bWJlcjtcclxufTtcclxuY29uc3QgV2hlZWxDaG9pY2UgPSBmdW5jdGlvbiAocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgeyBzbGljZU51bSB9ID0gcHJvcHM7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2coTWF0aC5hdGFuKGRlZ3JlZVRvUmFkaWFuKDYwKSkpO1xyXG4gIC8vICAgY29uc3QgZGVncmVlID0gTWF0aC5mbG9vcigoMzYwIC8gc2xpY2VOdW0pICogMTAwKSAvIDEwMDtcclxuICBjb25zdCBkZWdyZWUgPSAzNjAgLyBzbGljZU51bTtcclxuICBjb25zdCBjYWxjRGVnID0gMTgwIC0gZGVncmVlO1xyXG5cclxuICBjb25zb2xlLmxvZyhjYWxjRGVnKTtcclxuXHJcbiAgY29uc3QgcmVjdFcgPSAyMDAgLyBNYXRoLnRhbihkZWdyZWVUb1JhZGlhbihkZWdyZWUpKTtcclxuICAvLyAgIGNvbnN0IHJlY3RIID0gMjAwICogTWF0aC5zaW4oZGVncmVlVG9SYWRpYW4oZGVncmVlKSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHJlY3RXKTtcclxuXHJcbiAgY29uc3QgZ2VuU2xpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBSZWFjdE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIGlmIChjYWxjRGVnIDwgMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SU1swXSxcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiPjIyMjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGNhbGNEZWcgPT09IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgICBpdGVtLnB1c2goXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAga2V5PXtgc2xpY2VfayR7aX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgkezE4MCAqIGl9ZGVnKWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB0b3A6IFwiLTUwJVwiLFxyXG4gICAgICAgICAgICAgIC8vICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDUwJSwgNTAlIDEwMCUsIDAgNTAlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICBTbGljZS0ke2l9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHsxODAgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdFcgKiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgbGVmdDogMjAwIC0gcmVjdFcsXHJcbiAgICAgICAgICAgIHRvcDogLTIwMCxcclxuICAgICAgICAgICAgLy8gICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgNTAlLCA1MCUgMTAwJSwgMCA1MCUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlLWlubmVyXCI+MjIyPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPlxyXG4gICAgICAgIHtnZW5TbGljZSgpfVxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPjwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTRcIj48L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoZWVsQ2hvaWNlO1xyXG4iXSwibmFtZXMiOlsiZGVncmVlVG9SYWRpYW4iLCJDT0xPUlMiLCJXaGVlbENob2ljZSIsInByb3BzIiwic2xpY2VOdW0iLCJkZWdyZWUiLCJjYWxjRGVnIiwiY29uc29sZSIsImxvZyIsInJlY3RXIiwiTWF0aCIsInRhbiIsImdlblNsaWNlIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJpIiwiY29sb3IiLCJwdXNoIiwidHJhbnNmb3JtIiwidG9wIiwicGFkZGluZ1RvcCIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});