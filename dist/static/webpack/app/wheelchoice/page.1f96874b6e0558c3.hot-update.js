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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { choices } = props;\n    //   console.log(Math.atan(degreeToRadian(60)));\n    //   const degree = Math.floor((360 / sliceNum) * 100) / 100;\n    const sliceNum = choices.length;\n    const degree = 360 / sliceNum;\n    const calcDeg = 180 - degree;\n    console.log(calcDeg);\n    const rectW = 200 / Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n    //   const rectH = 200 * Math.sin(degreeToRadian(degree));\n    console.log(rectW);\n    const genSlice = ()=>{\n        const item = [];\n        if (calcDeg < 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        backgroundColor: COLORS[0],\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this);\n        } else if (calcDeg === 0) {\n            for(let i = 0; i < 2; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"translateY(-50%) rotate(\".concat(180 * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"300px\"\n                        },\n                        children: [\n                            \"Slice-$\",\n                            i\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg < 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: 400,\n                        height: rectW * 2,\n                        left: -200,\n                        top: 200 - rectW,\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg >= 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: rectW * 2,\n                        height: 400,\n                        top: -200,\n                        left: 200 - rectW,\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"240px\"\n                        },\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: genSlice()\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVEO0FBR2xDO0FBRXJCLE1BQU1DLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsY0FBYyxTQUFVQyxLQUFZO0lBQ3hDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdEO0lBRXBCLGdEQUFnRDtJQUNoRCw2REFBNkQ7SUFDN0QsTUFBTUUsV0FBV0QsUUFBUUUsTUFBTTtJQUMvQixNQUFNQyxTQUFTLE1BQU1GO0lBQ3JCLE1BQU1HLFVBQVUsTUFBTUQ7SUFFdEJFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixNQUFNRyxRQUFRLE1BQU1DLEtBQUtDLEdBQUcsQ0FBQ2Isc0RBQWNBLENBQUNRLFVBQVU7SUFDdEQsMERBQTBEO0lBRTFEQyxRQUFRQyxHQUFHLENBQUNDO0lBRVosTUFBTUcsV0FBVztRQUNmLE1BQU1DLE9BQW9CLEVBQUU7UUFFNUIsSUFBSVAsVUFBVSxHQUFHO1lBQ2YscUJBQ0UsOERBQUNROzBCQUNDLDRFQUFDQTtvQkFDQ0MsV0FBVTtvQkFDVkMsT0FBTzt3QkFDTEMsaUJBQWlCbEIsTUFBTSxDQUFDLEVBQUU7d0JBQzFCbUIsT0FBTzt3QkFDUEMsUUFBUTtvQkFDVjs4QkFFQSw0RUFBQ0w7d0JBQUlDLFdBQVU7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7UUFJckMsT0FBTyxJQUFJVCxZQUFZLEdBQUc7WUFDeEIsSUFBSyxJQUFJYyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSztnQkFDMUIsTUFBTUMsUUFBUXRCLE1BQU0sQ0FBQ3FCLEVBQUU7Z0JBQ3ZCUCxLQUFLUyxJQUFJLGVBQ1AsOERBQUNSO29CQUNDQyxXQUFVO29CQUVWQyxPQUFPO3dCQUNMTyxXQUFXLDJCQUFtQyxPQUFSLE1BQU1ILEdBQUU7d0JBQzlDSCxpQkFBaUJJO3dCQUNqQkgsT0FBTzt3QkFDUEMsUUFBUTtvQkFFVjs4QkFFQSw0RUFBQ0w7d0JBQUlDLFdBQVU7d0JBQWNDLE9BQU87NEJBQUVRLFlBQVk7d0JBQVE7OzRCQUFHOzRCQUNuREo7Ozs7Ozs7bUJBVkwsVUFBWSxPQUFGQTs7Ozs7WUFjckI7WUFDQSxPQUFPUDtRQUNULE9BQU8sSUFBSVAsVUFBVSxJQUFJO1lBQ3ZCLElBQUssSUFBSWMsSUFBSSxHQUFHQSxJQUFJakIsVUFBVWlCLElBQUs7Z0JBQ2pDLE1BQU1DLFFBQVF0QixNQUFNLENBQUNxQixFQUFFO2dCQUN2QlAsS0FBS1MsSUFBSSxlQUNQLDhEQUFDUjtvQkFDQ0MsV0FBVTtvQkFFVkMsT0FBTzt3QkFDTE8sV0FBVyxVQUFxQixPQUFYbEIsU0FBU2UsR0FBRTt3QkFDaENILGlCQUFpQkk7d0JBQ2pCSCxPQUFPO3dCQUNQQyxRQUFRVixRQUFRO3dCQUNoQmdCLE1BQU0sQ0FBQzt3QkFDUEMsS0FBSyxNQUFNakI7d0JBQ1hrQixVQUFVO29CQUdaOzhCQUVBLDRFQUFDYjt3QkFBSUMsV0FBVTtrQ0FBYzs7Ozs7O21CQWJ4QixVQUFZLE9BQUZLOzs7OztZQWdCckI7WUFFQSxPQUFPUDtRQUNULE9BQU8sSUFBSVAsV0FBVyxJQUFJO1lBQ3hCLElBQUssSUFBSWMsSUFBSSxHQUFHQSxJQUFJakIsVUFBVWlCLElBQUs7Z0JBQ2pDLE1BQU1DLFFBQVF0QixNQUFNLENBQUNxQixFQUFFO2dCQUN2QlAsS0FBS1MsSUFBSSxlQUNQLDhEQUFDUjtvQkFDQ0MsV0FBVTtvQkFFVkMsT0FBTzt3QkFDTE8sV0FBVyxVQUFxQixPQUFYbEIsU0FBU2UsR0FBRTt3QkFDaENILGlCQUFpQkk7d0JBQ2pCSCxPQUFPVCxRQUFRO3dCQUNmVSxRQUFRO3dCQUNSTyxLQUFLLENBQUM7d0JBQ05ELE1BQU0sTUFBTWhCO3dCQUNaa0IsVUFBVTtvQkFDWjs4QkFFQSw0RUFBQ2I7d0JBQUlDLFdBQVU7d0JBQWNDLE9BQU87NEJBQUVRLFlBQVk7d0JBQVE7a0NBQUc7Ozs7OzttQkFYeEQsVUFBWSxPQUFGSjs7Ozs7WUFnQnJCO1lBRUEsT0FBT1A7UUFDVDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ1pIOzs7Ozs7Ozs7OztBQVVUO0tBekhNWjtBQTJITiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1doZWVsQ2hvaWNlL0luZGV4LnRzeD8wYzIwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgc2h1ZmZsZUFycmF5LCBkZWdyZWVUb1JhZGlhbiB9IGZyb20gXCJAL3V0aWxzXCI7XHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcclxuXHJcbmNvbnN0IENPTE9SUyA9IFtcclxuICBcIiNlY2NjNjhcIixcclxuICBcIiNmZjdmNTBcIixcclxuICBcIiNmZjZiODFcIixcclxuICBcIiM3YmVkOWZcIixcclxuICBcIiM1MzUyZWRcIixcclxuICBcIiNhNGIwYmVcIixcclxuICBcIiNkZmU0ZWFcIixcclxuICBcIiMyZWQ1NzNcIixcclxuICBcIiMxZTkwZmZcIixcclxuICBcIiMzNzQyZmFcIixcclxuICBcIiNmZjQ3NTdcIixcclxuICBcIiNmZjYzNDhcIixcclxuICBcIiNmZmE1MDJcIixcclxuXTtcclxuXHJcbi8vIGNvbnN0IHNodWZmbGVDb2xvcnMgPSBzaHVmZmxlQXJyYXkoQ09MT1JTKTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY2hvaWNlczogYW55W107XHJcbn07XHJcbmNvbnN0IFdoZWVsQ2hvaWNlID0gZnVuY3Rpb24gKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IHsgY2hvaWNlcyB9ID0gcHJvcHM7XHJcblxyXG4gIC8vICAgY29uc29sZS5sb2coTWF0aC5hdGFuKGRlZ3JlZVRvUmFkaWFuKDYwKSkpO1xyXG4gIC8vICAgY29uc3QgZGVncmVlID0gTWF0aC5mbG9vcigoMzYwIC8gc2xpY2VOdW0pICogMTAwKSAvIDEwMDtcclxuICBjb25zdCBzbGljZU51bSA9IGNob2ljZXMubGVuZ3RoO1xyXG4gIGNvbnN0IGRlZ3JlZSA9IDM2MCAvIHNsaWNlTnVtO1xyXG4gIGNvbnN0IGNhbGNEZWcgPSAxODAgLSBkZWdyZWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGNEZWcpO1xyXG5cclxuICBjb25zdCByZWN0VyA9IDIwMCAvIE1hdGgudGFuKGRlZ3JlZVRvUmFkaWFuKGNhbGNEZWcgLyAyKSk7XHJcbiAgLy8gICBjb25zdCByZWN0SCA9IDIwMCAqIE1hdGguc2luKGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkpO1xyXG5cclxuICBjb25zb2xlLmxvZyhyZWN0Vyk7XHJcblxyXG4gIGNvbnN0IGdlblNsaWNlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbTogUmVhY3ROb2RlW10gPSBbXTtcclxuXHJcbiAgICBpZiAoY2FsY0RlZyA8IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlNbMF0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIj4yMjI8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChjYWxjRGVnID09PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgICAgaXRlbS5wdXNoKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICAgIGtleT17YHNsaWNlX2ske2l9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgkezE4MCAqIGl9ZGVnKWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAvLyAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgMTAwJSA1MCUsIDUwJSAxMDAlLCAwIDUwJSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgU2xpY2UtJHtpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2UgaWYgKGNhbGNEZWcgPCA5MCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgICBpdGVtLnB1c2goXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAga2V5PXtgc2xpY2VfayR7aX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2RlZ3JlZSAqIGl9ZGVnKWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgICB3aWR0aDogNDAwLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogcmVjdFcgKiAyLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IC0yMDAsXHJcbiAgICAgICAgICAgICAgdG9wOiAyMDAgLSByZWN0VyxcclxuICAgICAgICAgICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDUwJSAwLCAxMDAlIDUwJSwgNTAlIDEwMCUsIDAgNTAlKVwiLFxyXG5cclxuICAgICAgICAgICAgICAvLyAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCwgMTAwJSA1MCUsIDUwJSAxMDAlLCAwIDUwJSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIj4yMjI8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSBlbHNlIGlmIChjYWxjRGVnID49IDkwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2VOdW07IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1JTW2ldO1xyXG4gICAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7ZGVncmVlICogaX1kZWcpYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiByZWN0VyAqIDIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgdG9wOiAtMjAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDIwMCAtIHJlY3RXLFxyXG4gICAgICAgICAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oNTAlIDAsIDEwMCUgNTAlLCA1MCUgMTAwJSwgMCA1MCUpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgMjIyXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbC1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aGVlbFwiPlxyXG4gICAgICAgIHtnZW5TbGljZSgpfVxyXG5cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPjwvZGl2PiAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTFcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTJcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTNcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTRcIj48L2Rpdj4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoZWVsQ2hvaWNlO1xyXG4iXSwibmFtZXMiOlsiZGVncmVlVG9SYWRpYW4iLCJDT0xPUlMiLCJXaGVlbENob2ljZSIsInByb3BzIiwiY2hvaWNlcyIsInNsaWNlTnVtIiwibGVuZ3RoIiwiZGVncmVlIiwiY2FsY0RlZyIsImNvbnNvbGUiLCJsb2ciLCJyZWN0VyIsIk1hdGgiLCJ0YW4iLCJnZW5TbGljZSIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsImNvbG9yIiwicHVzaCIsInRyYW5zZm9ybSIsInBhZGRpbmdUb3AiLCJsZWZ0IiwidG9wIiwiY2xpcFBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});