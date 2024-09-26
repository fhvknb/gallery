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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WheelChoice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/index */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var _wheelchoice_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wheelchoice.css */ \"(app-pages-browser)/./app/wheelchoice/wheelchoice.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nfunction WheelChoice() {\n    const sliceNum = 3;\n    const genSlice = ()=>{\n        const item = [];\n        const colors = (0,_utils_index__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)(COLORS);\n        for(let i = 0; i < sliceNum; i++){\n            const color = colors[i];\n            console.log(color);\n        }\n        return item;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wheel-box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wheel\",\n                children: [\n                    genSlice(),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n            lineNumber: 43,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\app\\\\wheelchoice\\\\page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = WheelChoice;\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93aGVlbGNob2ljZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUk2QztBQUVsQjtBQUUzQixNQUFNQyxTQUFTO0lBQ2I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVjLFNBQVNDO0lBQ3RCLE1BQU1DLFdBQVc7SUFFakIsTUFBTUMsV0FBVztRQUNmLE1BQU1DLE9BQWtCLEVBQUU7UUFFMUIsTUFBTUMsU0FBU04sMERBQVlBLENBQUNDO1FBQzVCLElBQUssSUFBSU0sSUFBSSxHQUFHQSxJQUFJSixVQUFVSSxJQUFLO1lBQ2pDLE1BQU1DLFFBQVFGLE1BQU0sQ0FBQ0MsRUFBRTtZQUV2QkUsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO1FBRUEsT0FBT0g7SUFDVDtJQUVBLHFCQUNFLDhEQUFDTTtRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTs7b0JBQ1pSO2tDQUNELDhEQUFDUzt3QkFBSUQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN6QjtLQTlCd0JWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC93aGVlbGNob2ljZS9wYWdlLnRzeD83MGVjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHNodWZmbGVBcnJheSB9IGZyb20gXCJAL3V0aWxzL2luZGV4XCI7XG5cbmltcG9ydCBcIi4vd2hlZWxjaG9pY2UuY3NzXCI7XG5cbmNvbnN0IENPTE9SUyA9IFtcbiAgXCIjZWNjYzY4XCIsXG4gIFwiI2ZmN2Y1MFwiLFxuICBcIiNmZjZiODFcIixcbiAgXCIjN2JlZDlmXCIsXG4gIFwiIzUzNTJlZFwiLFxuICBcIiNhNGIwYmVcIixcbiAgXCIjZGZlNGVhXCIsXG4gIFwiIzJlZDU3M1wiLFxuICBcIiMxZTkwZmZcIixcbiAgXCIjMzc0MmZhXCIsXG4gIFwiI2ZmNDc1N1wiLFxuICBcIiNmZjYzNDhcIixcbiAgXCIjZmZhNTAyXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaGVlbENob2ljZSgpIHtcbiAgY29uc3Qgc2xpY2VOdW0gPSAzO1xuXG4gIGNvbnN0IGdlblNsaWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW06IFJlYWN0Tm9kZSA9IFtdO1xuXG4gICAgY29uc3QgY29sb3JzID0gc2h1ZmZsZUFycmF5KENPTE9SUyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZU51bTsgaSsrKSB7XG4gICAgICBjb25zdCBjb2xvciA9IGNvbG9yc1tpXTtcblxuICAgICAgY29uc29sZS5sb2coY29sb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLThcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWwtYm94XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWxcIj5cbiAgICAgICAgICB7Z2VuU2xpY2UoKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlXCI+PC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2UxXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZSBzbGljZTJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlIHNsaWNlM1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2Ugc2xpY2U0XCI+PC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzaHVmZmxlQXJyYXkiLCJDT0xPUlMiLCJXaGVlbENob2ljZSIsInNsaWNlTnVtIiwiZ2VuU2xpY2UiLCJpdGVtIiwiY29sb3JzIiwiaSIsImNvbG9yIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/wheelchoice/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteCookie: function() { return /* binding */ deleteCookie; },\n/* harmony export */   genRandomIndex: function() { return /* binding */ genRandomIndex; },\n/* harmony export */   getLoginCookie: function() { return /* binding */ getLoginCookie; },\n/* harmony export */   getTargetUrl: function() { return /* binding */ getTargetUrl; },\n/* harmony export */   setCookie: function() { return /* binding */ setCookie; },\n/* harmony export */   shuffleArray: function() { return /* binding */ shuffleArray; }\n/* harmony export */ });\nfunction getTargetUrl(type, group) {\n    if (type === \"IMG\") {\n        return \"https://raw.githubusercontent.com/fhvknb/raw-assets/master/\".concat(group, \"/\");\n    } else {\n        return \"https://raw.githubusercontent.com/fhvknb/raw-assets/master/json/\".concat(group, \".json\");\n    }\n}\nfunction setCookie(name, value, days) {\n    let expires = \"\";\n    if (days) {\n        const date = new Date();\n        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);\n        expires = \"; expires=\" + date.toUTCString();\n    }\n    document.cookie = name + \"=\" + (value || \"\") + expires + \"; path=/\";\n}\nfunction deleteCookie(name) {\n    document.cookie = name + \"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n}\nfunction getLoginCookie() {\n    return document.cookie.includes(\"isLogin=1\");\n}\nfunction shuffleArray(arr) {\n    if (!arr || !arr.length) {\n        return [];\n    }\n    for(let i = arr.length - 1; i > 0; i--){\n        const j = Math.floor(Math.random() * (i + 1));\n        [arr[i], arr[j]] = [\n            arr[j],\n            arr[i]\n        ];\n    }\n    return arr;\n}\nfunction genRandomIndex(length) {\n    const indexes = Array.from({\n        length\n    }, (_, i)=>i);\n    const randomIndexes = [];\n    while(indexes.length > 0){\n        const randomIndex = Math.floor(Math.random() * indexes.length);\n        randomIndexes.push(indexes[randomIndex]);\n        indexes.splice(randomIndex, 1);\n    }\n    return randomIndexes;\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3V0aWxzL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFPLFNBQVNBLGFBQWFDLElBQW9CLEVBQUVDLEtBQWE7SUFDOUQsSUFBSUQsU0FBUyxPQUFPO1FBQ2xCLE9BQU8sOERBQW9FLE9BQU5DLE9BQU07SUFDN0UsT0FBTztRQUNMLE9BQU8sbUVBQXlFLE9BQU5BLE9BQU07SUFDbEY7QUFDRjtBQUVPLFNBQVNDLFVBQVVDLElBQVksRUFBRUMsS0FBYSxFQUFFQyxJQUFZO0lBQ2pFLElBQUlDLFVBQVU7SUFDZCxJQUFJRCxNQUFNO1FBQ1IsTUFBTUUsT0FBTyxJQUFJQztRQUNqQkQsS0FBS0UsT0FBTyxDQUFDRixLQUFLRyxPQUFPLEtBQUtMLE9BQU8sS0FBSyxLQUFLLEtBQUs7UUFDcERDLFVBQVUsZUFBZUMsS0FBS0ksV0FBVztJQUMzQztJQUNBQyxTQUFTQyxNQUFNLEdBQUdWLE9BQU8sTUFBT0MsQ0FBQUEsU0FBUyxFQUFDLElBQUtFLFVBQVU7QUFDM0Q7QUFFTyxTQUFTUSxhQUFhWCxJQUFZO0lBQ3ZDUyxTQUFTQyxNQUFNLEdBQUdWLE9BQU87QUFDM0I7QUFFTyxTQUFTWTtJQUNkLE9BQU9ILFNBQVNDLE1BQU0sQ0FBQ0csUUFBUSxDQUFDO0FBQ2xDO0FBRU8sU0FBU0MsYUFBYUMsR0FBVTtJQUNyQyxJQUFJLENBQUNBLE9BQU8sQ0FBQ0EsSUFBSUMsTUFBTSxFQUFFO1FBQ3ZCLE9BQU8sRUFBRTtJQUNYO0lBQ0EsSUFBSyxJQUFJQyxJQUFJRixJQUFJQyxNQUFNLEdBQUcsR0FBR0MsSUFBSSxHQUFHQSxJQUFLO1FBQ3ZDLE1BQU1DLElBQUlDLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFNSixDQUFBQSxJQUFJO1FBQzFDLENBQUNGLEdBQUcsQ0FBQ0UsRUFBRSxFQUFFRixHQUFHLENBQUNHLEVBQUUsQ0FBQyxHQUFHO1lBQUNILEdBQUcsQ0FBQ0csRUFBRTtZQUFFSCxHQUFHLENBQUNFLEVBQUU7U0FBQztJQUNyQztJQUNBLE9BQU9GO0FBQ1Q7QUFFTyxTQUFTTyxlQUFlTixNQUFjO0lBQzNDLE1BQU1PLFVBQVVDLE1BQU1DLElBQUksQ0FBQztRQUFFVDtJQUFPLEdBQUcsQ0FBQ1UsR0FBR1QsSUFBTUE7SUFDakQsTUFBTVUsZ0JBQWdCLEVBQUU7SUFFeEIsTUFBT0osUUFBUVAsTUFBTSxHQUFHLEVBQUc7UUFDekIsTUFBTVksY0FBY1QsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxNQUFNLEtBQUtFLFFBQVFQLE1BQU07UUFDN0RXLGNBQWNFLElBQUksQ0FBQ04sT0FBTyxDQUFDSyxZQUFZO1FBQ3ZDTCxRQUFRTyxNQUFNLENBQUNGLGFBQWE7SUFDOUI7SUFFQSxPQUFPRDtBQUNUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2luZGV4LnRzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldFVybCh0eXBlOiBcIkRBVEFcIiB8IFwiSU1HXCIsIGdyb3VwOiBzdHJpbmcpIHtcclxuICBpZiAodHlwZSA9PT0gXCJJTUdcIikge1xyXG4gICAgcmV0dXJuIGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZmh2a25iL3Jhdy1hc3NldHMvbWFzdGVyLyR7Z3JvdXB9L2A7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZodmtuYi9yYXctYXNzZXRzL21hc3Rlci9qc29uLyR7Z3JvdXB9Lmpzb25gO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGRheXM6IG51bWJlcikge1xyXG4gIGxldCBleHBpcmVzID0gXCJcIjtcclxuICBpZiAoZGF5cykge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCk7XHJcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XHJcbiAgfVxyXG4gIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArICh2YWx1ZSB8fCBcIlwiKSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb29raWUobmFtZTogc3RyaW5nKSB7XHJcbiAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQzsgcGF0aD0vO1wiO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9naW5Db29raWUoKSB7XHJcbiAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZS5pbmNsdWRlcyhcImlzTG9naW49MVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnI6IGFueVtdKSB7XHJcbiAgaWYgKCFhcnIgfHwgIWFyci5sZW5ndGgpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgZm9yIChsZXQgaSA9IGFyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICBbYXJyW2ldLCBhcnJbal1dID0gW2FycltqXSwgYXJyW2ldXTtcclxuICB9XHJcbiAgcmV0dXJuIGFycjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlblJhbmRvbUluZGV4KGxlbmd0aDogbnVtYmVyKSB7XHJcbiAgY29uc3QgaW5kZXhlcyA9IEFycmF5LmZyb20oeyBsZW5ndGggfSwgKF8sIGkpID0+IGkpO1xyXG4gIGNvbnN0IHJhbmRvbUluZGV4ZXMgPSBbXTtcclxuXHJcbiAgd2hpbGUgKGluZGV4ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpbmRleGVzLmxlbmd0aCk7XHJcbiAgICByYW5kb21JbmRleGVzLnB1c2goaW5kZXhlc1tyYW5kb21JbmRleF0pO1xyXG4gICAgaW5kZXhlcy5zcGxpY2UocmFuZG9tSW5kZXgsIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhbmRvbUluZGV4ZXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFRhcmdldFVybCIsInR5cGUiLCJncm91cCIsInNldENvb2tpZSIsIm5hbWUiLCJ2YWx1ZSIsImRheXMiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJkZWxldGVDb29raWUiLCJnZXRMb2dpbkNvb2tpZSIsImluY2x1ZGVzIiwic2h1ZmZsZUFycmF5IiwiYXJyIiwibGVuZ3RoIiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZW5SYW5kb21JbmRleCIsImluZGV4ZXMiLCJBcnJheSIsImZyb20iLCJfIiwicmFuZG9tSW5kZXhlcyIsInJhbmRvbUluZGV4IiwicHVzaCIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./utils/index.ts\n"));

/***/ })

});