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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    const { sliceNum } = props;\n    //   console.log(Math.atan(degreeToRadian(60)));\n    //   const degree = Math.floor((360 / sliceNum) * 100) / 100;\n    const degree = 360 / sliceNum;\n    const calcDeg = 180 - degree;\n    console.log(calcDeg);\n    const rectW = 200 / Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(degree));\n    //   const rectH = 200 * Math.sin(degreeToRadian(degree));\n    console.log(rectW);\n    const genSlice = ()=>{\n        const item = [];\n        if (calcDeg < 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        backgroundColor: COLORS[0],\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        children: \"222\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this);\n        }\n        for(let i = 0; i < sliceNum; i++){\n            const color = COLORS[i];\n            item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"slice\",\n                style: {\n                    transform: \"rotate(\".concat(180 * i, \"deg)\"),\n                    backgroundColor: color,\n                    width: rectW * 2,\n                    height: 400,\n                    left: 200 - rectW,\n                    top: -200\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice-inner\",\n                    children: \"222\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, this)\n            }, \"slice_k\".concat(i), false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this));\n            console.log(color);\n        }\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel\",\n            children: genSlice()\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n            lineNumber: 90,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n};\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRXVEO0FBR2xDO0FBRXJCLE1BQU1DLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNEO0FBT0QsTUFBTUMsY0FBYyxTQUFVQyxLQUFZO0lBQ3hDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLGdEQUFnRDtJQUNoRCw2REFBNkQ7SUFDN0QsTUFBTUUsU0FBUyxNQUFNRDtJQUNyQixNQUFNRSxVQUFVLE1BQU1EO0lBRXRCRSxRQUFRQyxHQUFHLENBQUNGO0lBRVosTUFBTUcsUUFBUSxNQUFNQyxLQUFLQyxHQUFHLENBQUNYLHNEQUFjQSxDQUFDSztJQUM1QywwREFBMEQ7SUFFMURFLFFBQVFDLEdBQUcsQ0FBQ0M7SUFFWixNQUFNRyxXQUFXO1FBQ2YsTUFBTUMsT0FBb0IsRUFBRTtRQUU1QixJQUFJUCxVQUFVLEdBQUc7WUFDZixxQkFDRSw4REFBQ1E7MEJBQ0MsNEVBQUNBO29CQUNDQyxXQUFVO29CQUNWQyxPQUFPO3dCQUNMQyxpQkFBaUJoQixNQUFNLENBQUMsRUFBRTt3QkFDMUJpQixPQUFPO3dCQUNQQyxRQUFRO29CQUNWOzhCQUVBLDRFQUFDTDt3QkFBSUMsV0FBVTtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7OztRQUlyQztRQUVBLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJaEIsVUFBVWdCLElBQUs7WUFDakMsTUFBTUMsUUFBUXBCLE1BQU0sQ0FBQ21CLEVBQUU7WUFDdkJQLEtBQUtTLElBQUksZUFDUCw4REFBQ1I7Z0JBQ0NDLFdBQVU7Z0JBRVZDLE9BQU87b0JBQ0xPLFdBQVcsVUFBa0IsT0FBUixNQUFNSCxHQUFFO29CQUM3QkgsaUJBQWlCSTtvQkFDakJILE9BQU9ULFFBQVE7b0JBQ2ZVLFFBQVE7b0JBQ1JLLE1BQU0sTUFBTWY7b0JBQ1pnQixLQUFLLENBQUM7Z0JBQ1I7MEJBRUEsNEVBQUNYO29CQUFJQyxXQUFVOzhCQUFjOzs7Ozs7ZUFWeEIsVUFBWSxPQUFGSzs7Ozs7WUFjbkJiLFFBQVFDLEdBQUcsQ0FBQ2E7UUFDZDtRQUVBLE9BQU9SO0lBQ1Q7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWkg7Ozs7Ozs7Ozs7O0FBVVQ7S0F4RU1WO0FBMEVOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4PzBjMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXksIGRlZ3JlZVRvUmFkaWFuIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgQ09MT1JTID0gW1xyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG5dO1xyXG5cclxuLy8gY29uc3Qgc2h1ZmZsZUNvbG9ycyA9IHNodWZmbGVBcnJheShDT0xPUlMpO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBzbGljZU51bTogbnVtYmVyO1xyXG59O1xyXG5jb25zdCBXaGVlbENob2ljZSA9IGZ1bmN0aW9uIChwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCB7IHNsaWNlTnVtIH0gPSBwcm9wcztcclxuXHJcbiAgLy8gICBjb25zb2xlLmxvZyhNYXRoLmF0YW4oZGVncmVlVG9SYWRpYW4oNjApKSk7XHJcbiAgLy8gICBjb25zdCBkZWdyZWUgPSBNYXRoLmZsb29yKCgzNjAgLyBzbGljZU51bSkgKiAxMDApIC8gMTAwO1xyXG4gIGNvbnN0IGRlZ3JlZSA9IDM2MCAvIHNsaWNlTnVtO1xyXG4gIGNvbnN0IGNhbGNEZWcgPSAxODAgLSBkZWdyZWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKGNhbGNEZWcpO1xyXG5cclxuICBjb25zdCByZWN0VyA9IDIwMCAvIE1hdGgudGFuKGRlZ3JlZVRvUmFkaWFuKGRlZ3JlZSkpO1xyXG4gIC8vICAgY29uc3QgcmVjdEggPSAyMDAgKiBNYXRoLnNpbihkZWdyZWVUb1JhZGlhbihkZWdyZWUpKTtcclxuXHJcbiAgY29uc29sZS5sb2cocmVjdFcpO1xyXG5cclxuICBjb25zdCBnZW5TbGljZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW06IFJlYWN0Tm9kZVtdID0gW107XHJcblxyXG4gICAgaWYgKGNhbGNEZWcgPCAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogQ09MT1JTWzBdLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlLWlubmVyXCI+MjIyPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHsxODAgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aDogcmVjdFcgKiAyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICAgICAgbGVmdDogMjAwIC0gcmVjdFcsXHJcbiAgICAgICAgICAgIHRvcDogLTIwMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiPjIyMjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWwtYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWxcIj5cclxuICAgICAgICB7Z2VuU2xpY2UoKX1cclxuXHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2xpY2VcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2UxXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2UyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2UzXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2U0XCI+PC9kaXY+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGVlbENob2ljZTtcclxuIl0sIm5hbWVzIjpbImRlZ3JlZVRvUmFkaWFuIiwiQ09MT1JTIiwiV2hlZWxDaG9pY2UiLCJwcm9wcyIsInNsaWNlTnVtIiwiZGVncmVlIiwiY2FsY0RlZyIsImNvbnNvbGUiLCJsb2ciLCJyZWN0VyIsIk1hdGgiLCJ0YW4iLCJnZW5TbGljZSIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwiaSIsImNvbG9yIiwicHVzaCIsInRyYW5zZm9ybSIsImxlZnQiLCJ0b3AiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});