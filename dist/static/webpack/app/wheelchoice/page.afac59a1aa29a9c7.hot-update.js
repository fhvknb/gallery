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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { choices } = props;\n    //   console.log(Math.atan(degreeToRadian(60)));\n    //   const degree = Math.floor((360 / sliceNum) * 100) / 100;\n    const sliceNum = choices.length;\n    const degree = 360 / sliceNum;\n    const calcDeg = 180 - degree;\n    console.log(calcDeg);\n    //   const rectH = 200 * Math.sin(degreeToRadian(degree));\n    const genSlice = ()=>{\n        const item = [];\n        if (calcDeg < 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        backgroundColor: COLORS[0],\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this);\n        } else if (calcDeg === 0) {\n            for(let i = 0; i < 2; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"translateY(-50%) rotate(\".concat(180 * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"300px\"\n                        },\n                        children: [\n                            \"Slice-$\",\n                            i\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg < 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                const rectH = 250 * Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n                console.log(rectH);\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: 500,\n                        height: rectH * 2,\n                        left: -50,\n                        top: rectH - 200,\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"100px\"\n                        },\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg >= 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                const rectW = 200 / Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: rectW * 2,\n                        height: 400,\n                        top: -200,\n                        left: 200 - rectW,\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"240px\"\n                        },\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: genSlice()\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 141,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 140,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVEO0FBR2xDO0FBRXJCLE1BQU1DLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsY0FBYyxTQUFVQyxLQUFZO0lBQ3hDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdEO0lBRXBCLGdEQUFnRDtJQUNoRCw2REFBNkQ7SUFDN0QsTUFBTUUsV0FBV0QsUUFBUUUsTUFBTTtJQUMvQixNQUFNQyxTQUFTLE1BQU1GO0lBQ3JCLE1BQU1HLFVBQVUsTUFBTUQ7SUFFdEJFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWiwwREFBMEQ7SUFFMUQsTUFBTUcsV0FBVztRQUNmLE1BQU1DLE9BQW9CLEVBQUU7UUFFNUIsSUFBSUosVUFBVSxHQUFHO1lBQ2YscUJBQ0UsOERBQUNLOzBCQUNDLDRFQUFDQTtvQkFDQ0MsV0FBVTtvQkFDVkMsT0FBTzt3QkFDTEMsaUJBQWlCZixNQUFNLENBQUMsRUFBRTt3QkFDMUJnQixPQUFPO3dCQUNQQyxRQUFRO29CQUNWOzhCQUVBLDRFQUFDTDt3QkFBSUMsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7OztRQUlyQyxPQUFPLElBQUlOLFlBQVksR0FBRztZQUN4QixJQUFLLElBQUlXLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFLO2dCQUMxQixNQUFNQyxRQUFRbkIsTUFBTSxDQUFDa0IsRUFBRTtnQkFDdkJQLEtBQUtTLElBQUksZUFDUCw4REFBQ1I7b0JBQ0NDLFdBQVU7b0JBRVZDLE9BQU87d0JBQ0xPLFdBQVcsMkJBQW1DLE9BQVIsTUFBTUgsR0FBRTt3QkFDOUNILGlCQUFpQkk7d0JBQ2pCSCxPQUFPO3dCQUNQQyxRQUFRO29CQUVWOzhCQUVBLDRFQUFDTDt3QkFBSUMsV0FBVTt3QkFBY0MsT0FBTzs0QkFBRVEsWUFBWTt3QkFBUTs7NEJBQUc7NEJBQ25ESjs7Ozs7OzttQkFWTCxVQUFZLE9BQUZBOzs7OztZQWNyQjtZQUNBLE9BQU9QO1FBQ1QsT0FBTyxJQUFJSixVQUFVLElBQUk7WUFDdkIsSUFBSyxJQUFJVyxJQUFJLEdBQUdBLElBQUlkLFVBQVVjLElBQUs7Z0JBQ2pDLE1BQU1DLFFBQVFuQixNQUFNLENBQUNrQixFQUFFO2dCQUN2QixNQUFNSyxRQUFRLE1BQU1DLEtBQUtDLEdBQUcsQ0FBQzFCLHNEQUFjQSxDQUFDUSxVQUFVO2dCQUN0REMsUUFBUUMsR0FBRyxDQUFDYztnQkFFWlosS0FBS1MsSUFBSSxlQUNQLDhEQUFDUjtvQkFDQ0MsV0FBVTtvQkFFVkMsT0FBTzt3QkFDTE8sV0FBVyxVQUFxQixPQUFYZixTQUFTWSxHQUFFO3dCQUNoQ0gsaUJBQWlCSTt3QkFDakJILE9BQU87d0JBQ1BDLFFBQVFNLFFBQVE7d0JBQ2hCRyxNQUFNLENBQUM7d0JBQ1BDLEtBQUtKLFFBQVE7d0JBQ2JLLFVBQVU7b0JBQ1o7OEJBRUEsNEVBQUNoQjt3QkFBSUMsV0FBVTt3QkFBY0MsT0FBTzs0QkFBRVEsWUFBWTt3QkFBUTtrQ0FBRzs7Ozs7O21CQVh4RCxVQUFZLE9BQUZKOzs7OztZQWdCckI7WUFFQSxPQUFPUDtRQUNULE9BQU8sSUFBSUosV0FBVyxJQUFJO1lBQ3hCLElBQUssSUFBSVcsSUFBSSxHQUFHQSxJQUFJZCxVQUFVYyxJQUFLO2dCQUNqQyxNQUFNQyxRQUFRbkIsTUFBTSxDQUFDa0IsRUFBRTtnQkFDdkIsTUFBTVcsUUFBUSxNQUFNTCxLQUFLQyxHQUFHLENBQUMxQixzREFBY0EsQ0FBQ1EsVUFBVTtnQkFFdERJLEtBQUtTLElBQUksZUFDUCw4REFBQ1I7b0JBQ0NDLFdBQVU7b0JBRVZDLE9BQU87d0JBQ0xPLFdBQVcsVUFBcUIsT0FBWGYsU0FBU1ksR0FBRTt3QkFDaENILGlCQUFpQkk7d0JBQ2pCSCxPQUFPYSxRQUFRO3dCQUNmWixRQUFRO3dCQUNSVSxLQUFLLENBQUM7d0JBQ05ELE1BQU0sTUFBTUc7d0JBQ1pELFVBQVU7b0JBQ1o7OEJBRUEsNEVBQUNoQjt3QkFBSUMsV0FBVTt3QkFBY0MsT0FBTzs0QkFBRVEsWUFBWTt3QkFBUTtrQ0FBRzs7Ozs7O21CQVh4RCxVQUFZLE9BQUZKOzs7OztZQWdCckI7WUFFQSxPQUFPUDtRQUNUO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWkg7Ozs7Ozs7Ozs7O0FBVVQ7S0EzSE1UO0FBNkhOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4PzBjMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXksIGRlZ3JlZVRvUmFkaWFuIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgQ09MT1JTID0gW1xyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG5dO1xyXG5cclxuLy8gY29uc3Qgc2h1ZmZsZUNvbG9ycyA9IHNodWZmbGVBcnJheShDT0xPUlMpO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaG9pY2VzOiBhbnlbXTtcclxufTtcclxuY29uc3QgV2hlZWxDaG9pY2UgPSBmdW5jdGlvbiAocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZyhNYXRoLmF0YW4oZGVncmVlVG9SYWRpYW4oNjApKSk7XHJcbiAgLy8gICBjb25zdCBkZWdyZWUgPSBNYXRoLmZsb29yKCgzNjAgLyBzbGljZU51bSkgKiAxMDApIC8gMTAwO1xyXG4gIGNvbnN0IHNsaWNlTnVtID0gY2hvaWNlcy5sZW5ndGg7XHJcbiAgY29uc3QgZGVncmVlID0gMzYwIC8gc2xpY2VOdW07XHJcbiAgY29uc3QgY2FsY0RlZyA9IDE4MCAtIGRlZ3JlZTtcclxuXHJcbiAgY29uc29sZS5sb2coY2FsY0RlZyk7XHJcblxyXG4gIC8vICAgY29uc3QgcmVjdEggPSAyMDAgKiBNYXRoLnNpbihkZWdyZWVUb1JhZGlhbihkZWdyZWUpKTtcclxuXHJcbiAgY29uc3QgZ2VuU2xpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBSZWFjdE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIGlmIChjYWxjRGVnIDwgMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SU1swXSxcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiPjIyMjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGNhbGNEZWcgPT09IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgICBpdGVtLnB1c2goXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAga2V5PXtgc2xpY2VfayR7aX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKCR7MTgwICogaX1kZWcpYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIC8vICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwLCAxMDAlIDUwJSwgNTAlIDEwMCUsIDAgNTAlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICBTbGljZS0ke2l9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSBpZiAoY2FsY0RlZyA8IDkwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2VOdW07IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1JTW2ldO1xyXG4gICAgICAgIGNvbnN0IHJlY3RIID0gMjUwICogTWF0aC50YW4oZGVncmVlVG9SYWRpYW4oY2FsY0RlZyAvIDIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZWN0SCk7XHJcblxyXG4gICAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7ZGVncmVlICogaX1kZWcpYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0SCAqIDIsXHJcbiAgICAgICAgICAgICAgbGVmdDogLTUwLFxyXG4gICAgICAgICAgICAgIHRvcDogcmVjdEggLSAyMDAsXHJcbiAgICAgICAgICAgICAgY2xpcFBhdGg6IFwicG9seWdvbig1MCUgMCwgMTAwJSA1MCUsIDUwJSAxMDAlLCAwIDUwJSlcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMTAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAyMjJcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSBpZiAoY2FsY0RlZyA+PSA5MCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgICBjb25zdCByZWN0VyA9IDIwMCAvIE1hdGgudGFuKGRlZ3JlZVRvUmFkaWFuKGNhbGNEZWcgLyAyKSk7XHJcblxyXG4gICAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7ZGVncmVlICogaX1kZWcpYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiByZWN0VyAqIDIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgdG9wOiAtMjAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDIwMCAtIHJlY3RXLFxyXG4gICAgICAgICAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oNTAlIDAsIDEwMCUgNTAlLCA1MCUgMTAwJSwgMCA1MCUpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgMjIyXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPlxyXG4gICAgICAgIHtnZW5TbGljZSgpfVxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPjwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTRcIj48L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoZWVsQ2hvaWNlO1xyXG4iXSwibmFtZXMiOlsiZGVncmVlVG9SYWRpYW4iLCJDT0xPUlMiLCJXaGVlbENob2ljZSIsInByb3BzIiwiY2hvaWNlcyIsInNsaWNlTnVtIiwibGVuZ3RoIiwiZGVncmVlIiwiY2FsY0RlZyIsImNvbnNvbGUiLCJsb2ciLCJnZW5TbGljZSIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsImNvbG9yIiwicHVzaCIsInRyYW5zZm9ybSIsInBhZGRpbmdUb3AiLCJyZWN0SCIsIk1hdGgiLCJ0YW4iLCJsZWZ0IiwidG9wIiwiY2xpcFBhdGgiLCJyZWN0VyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});