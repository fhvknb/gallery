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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\",\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst WheelChoice = function(props) {\n    _s();\n    const { choices } = props;\n    const [centerLine, showCenterLine] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [spinning, setSpinning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const wheelRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const sliceNum = choices.length;\n    const genSlice = ()=>{\n        const item = [];\n        const degree = 360 / sliceNum;\n        const calcDeg = 180 - degree;\n        // console.log(calcDeg);\n        if (calcDeg < 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        backgroundColor: COLORS[0],\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            lineHeight: \"400px\"\n                        },\n                        children: choices[0].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this);\n        } else if (calcDeg === 0) {\n            for(let i = 0; i < 2; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"translateY(-50%) rotate(\".concat(180 * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"300px\"\n                        },\n                        children: choices[i].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg < 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                const rectH = 250 * Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: 500,\n                        height: rectH * 2,\n                        left: -50,\n                        top: -rectH + (200 - rectH),\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"\".concat(rectH, \"px\")\n                        },\n                        children: choices[i].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg >= 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                const rectW = 200 / Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: rectW * 2,\n                        height: 400,\n                        top: -200,\n                        left: 200 - rectW,\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"\".concat(200 + 30, \"px\")\n                        },\n                        children: choices[i].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        }\n    };\n    const spinWheel = ()=>{\n        let rotation = 0;\n        let speed = 0;\n        const targetAngle = 360; // 目标点的\n        speed = Math.random() * 40 + 15; // 随机初始速度\n        if (!wheelRef.current) {\n            return;\n        }\n        const spinInterval = setInterval(()=>{\n            rotation += speed;\n            wheelRef.current.style.transform = \"rotate(\".concat(rotation, \"deg)\");\n            // 减速逻辑\n            if (rotation >= targetAngle) {\n                speed *= 0.75; // 每次减速\n                if (speed < 0.1) {\n                    // 达到停止条件\n                    console.log(rotation);\n                    clearInterval(spinInterval);\n                    setSpinning(false);\n                    wheelRef.current.style.transform = \"rotate(0deg)\";\n                    // 处理停止后的逻辑\n                    alert(\"抽奖结束！\");\n                }\n            }\n        }, 100);\n    };\n    const choiceHander = ()=>{\n        console.log(spinning);\n        if (spinning) return;\n        setSpinning(true);\n        spinWheel();\n    };\n    console.log(\"////\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wheel\",\n                ref: wheelRef,\n                children: [\n                    genSlice(),\n                    centerLine && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-line-x\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 201,\n                        columnNumber: 24\n                    }, this),\n                    centerLine && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-line-y\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 202,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 198,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"target\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 205,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-block py-1.5 px-3.5 \".concat(spinning ? \"bg-amber-300\" : \"bg-amber-600\", \"   text-white rounded choice-btn \"),\n                onClick: choiceHander,\n                children: \"帮我选择\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 207,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 197,\n        columnNumber: 5\n    }, this);\n};\n_s(WheelChoice, \"EvdZIT3x0clUO5NLX5GEqtl0sKI=\");\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXVEO0FBQ3FCO0FBRXZEO0FBRXJCLE1BQU1HLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFPRCxNQUFNQyxjQUFjLFNBQVVDLEtBQVk7O0lBQ3hDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdEO0lBRXBCLE1BQU0sQ0FBQ0UsWUFBWUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBVTtJQUN2RCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVU7SUFFbEQsTUFBTVMsV0FBV1YsNkNBQU1BLENBQXdCO0lBRS9DLE1BQU1XLFdBQVdOLFFBQVFPLE1BQU07SUFFL0IsTUFBTUMsV0FBVztRQUNmLE1BQU1DLE9BQW9CLEVBQUU7UUFDNUIsTUFBTUMsU0FBUyxNQUFNSjtRQUNyQixNQUFNSyxVQUFVLE1BQU1EO1FBQ3RCLHdCQUF3QjtRQUN4QixJQUFJQyxVQUFVLEdBQUc7WUFDZixxQkFDRSw4REFBQ0M7MEJBQ0MsNEVBQUNBO29CQUNDQyxXQUFVO29CQUNWQyxPQUFPO3dCQUNMQyxpQkFBaUJsQixNQUFNLENBQUMsRUFBRTt3QkFDMUJtQixPQUFPO3dCQUNQQyxRQUFRO29CQUNWOzhCQUVBLDRFQUFDTDt3QkFBSUMsV0FBVTt3QkFBY0MsT0FBTzs0QkFBRUksWUFBWTt3QkFBUTtrQ0FDdkRsQixPQUFPLENBQUMsRUFBRSxDQUFDbUIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztRQUsxQixPQUFPLElBQUlSLFlBQVksR0FBRztZQUN4QixJQUFLLElBQUlTLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFLO2dCQUMx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UyxTQUFTLEdBQUk7b0JBRXJDLFdBQVc7b0JBQ1hvQixNQUFNO2dCQUNSO1lBQ0Y7UUFDRixHQUFHO0lBQ0w7SUFFQSxNQUFNQyxlQUFlO1FBQ25CSixRQUFRQyxHQUFHLENBQUN0QztRQUVaLElBQUlBLFVBQVU7UUFDZEMsWUFBWTtRQUNaNEI7SUFDRjtJQUVBUSxRQUFRQyxHQUFHLENBQUM7SUFFWixxQkFDRSw4REFBQzdCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBUWdDLEtBQUt4Qzs7b0JBQ3pCRztvQkFFQVAsNEJBQWMsOERBQUNXO3dCQUFJQyxXQUFVOzs7Ozs7b0JBQzdCWiw0QkFBYyw4REFBQ1c7d0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzswQkFHaEMsOERBQUNEO2dCQUFJQyxXQUFVOzs7Ozs7MEJBRWYsOERBQUNEO2dCQUNDQyxXQUFXLDhCQUVWLE9BRENWLFdBQVcsaUJBQWlCLGdCQUM3QjtnQkFDRDJDLFNBQVNGOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFLUDtHQS9LTTlDO0tBQUFBO0FBaUxOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4PzBjMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXksIGRlZ3JlZVRvUmFkaWFuIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgQ09MT1JTID0gW1xyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG5dO1xyXG5cclxuLy8gY29uc3Qgc2h1ZmZsZUNvbG9ycyA9IHNodWZmbGVBcnJheShDT0xPUlMpO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaG9pY2VzOiBhbnlbXTtcclxufTtcclxuY29uc3QgV2hlZWxDaG9pY2UgPSBmdW5jdGlvbiAocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2NlbnRlckxpbmUsIHNob3dDZW50ZXJMaW5lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc3Bpbm5pbmcsIHNldFNwaW5uaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgd2hlZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3Qgc2xpY2VOdW0gPSBjaG9pY2VzLmxlbmd0aDtcclxuXHJcbiAgY29uc3QgZ2VuU2xpY2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtOiBSZWFjdE5vZGVbXSA9IFtdO1xyXG4gICAgY29uc3QgZGVncmVlID0gMzYwIC8gc2xpY2VOdW07XHJcbiAgICBjb25zdCBjYWxjRGVnID0gMTgwIC0gZGVncmVlO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2FsY0RlZyk7XHJcbiAgICBpZiAoY2FsY0RlZyA8IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDT0xPUlNbMF0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIiBzdHlsZT17eyBsaW5lSGVpZ2h0OiBcIjQwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge2Nob2ljZXNbMF0udGV4dH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSBpZiAoY2FsY0RlZyA9PT0gMCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gQ09MT1JTW2ldO1xyXG4gICAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoJHsxODAgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge2Nob2ljZXNbaV0udGV4dH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSBlbHNlIGlmIChjYWxjRGVnIDwgOTApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZU51bTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgICAgY29uc3QgcmVjdEggPSAyNTAgKiBNYXRoLnRhbihkZWdyZWVUb1JhZGlhbihjYWxjRGVnIC8gMikpO1xyXG4gICAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7ZGVncmVlICogaX1kZWcpYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0SCAqIDIsXHJcbiAgICAgICAgICAgICAgbGVmdDogLTUwLFxyXG4gICAgICAgICAgICAgIHRvcDogLXJlY3RIICsgKDIwMCAtIHJlY3RIKSxcclxuICAgICAgICAgICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDUwJSAwLCAxMDAlIDUwJSwgNTAlIDEwMCUsIDAgNTAlKVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWNlLWlubmVyXCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogYCR7cmVjdEh9cHhgIH19PlxyXG4gICAgICAgICAgICAgIHtjaG9pY2VzW2ldLnRleHR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2UgaWYgKGNhbGNEZWcgPj0gOTApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGljZU51bTsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgICAgY29uc3QgcmVjdFcgPSAyMDAgLyBNYXRoLnRhbihkZWdyZWVUb1JhZGlhbihjYWxjRGVnIC8gMikpO1xyXG5cclxuICAgICAgICBpdGVtLnB1c2goXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAga2V5PXtgc2xpY2VfayR7aX1gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke2RlZ3JlZSAqIGl9ZGVnKWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgICB3aWR0aDogcmVjdFcgKiAyLFxyXG4gICAgICAgICAgICAgIGhlaWdodDogNDAwLFxyXG4gICAgICAgICAgICAgIHRvcDogLTIwMCxcclxuICAgICAgICAgICAgICBsZWZ0OiAyMDAgLSByZWN0VyxcclxuICAgICAgICAgICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDUwJSAwLCAxMDAlIDUwJSwgNTAlIDEwMCUsIDAgNTAlKVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdUb3A6IGAkezIwMCArIDMwfXB4YCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2Nob2ljZXNbaV0udGV4dH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzcGluV2hlZWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgcm90YXRpb24gPSAwO1xyXG4gICAgbGV0IHNwZWVkID0gMDtcclxuICAgIGNvbnN0IHRhcmdldEFuZ2xlID0gMzYwOyAvLyDnm67moIfngrnnmoRcclxuICAgIHNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDQwICsgMTU7IC8vIOmaj+acuuWIneWni+mAn+W6plxyXG5cclxuICAgIGlmICghd2hlZWxSZWYuY3VycmVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3BpbkludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICByb3RhdGlvbiArPSBzcGVlZDtcclxuICAgICAgd2hlZWxSZWYuY3VycmVudCEuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke3JvdGF0aW9ufWRlZylgO1xyXG4gICAgICAvLyDlh4/pgJ/pgLvovpFcclxuICAgICAgaWYgKHJvdGF0aW9uID49IHRhcmdldEFuZ2xlKSB7XHJcbiAgICAgICAgc3BlZWQgKj0gMC43NTsgLy8g5q+P5qyh5YeP6YCfXHJcbiAgICAgICAgaWYgKHNwZWVkIDwgMC4xKSB7XHJcbiAgICAgICAgICAvLyDovr7liLDlgZzmraLmnaHku7ZcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJvdGF0aW9uKTtcclxuXHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHNwaW5JbnRlcnZhbCk7XHJcblxyXG4gICAgICAgICAgc2V0U3Bpbm5pbmcoZmFsc2UpO1xyXG4gICAgICAgICAgd2hlZWxSZWYuY3VycmVudCEuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgwZGVnKWA7XHJcblxyXG4gICAgICAgICAgLy8g5aSE55CG5YGc5q2i5ZCO55qE6YC76L6RXHJcbiAgICAgICAgICBhbGVydChcIuaKveWllue7k+adn++8gVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hvaWNlSGFuZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc3Bpbm5pbmcpO1xyXG5cclxuICAgIGlmIChzcGlubmluZykgcmV0dXJuO1xyXG4gICAgc2V0U3Bpbm5pbmcodHJ1ZSk7XHJcbiAgICBzcGluV2hlZWwoKTtcclxuICB9O1xyXG5cclxuICBjb25zb2xlLmxvZyhcIi8vLy9cIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZWVsLWJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoZWVsXCIgcmVmPXt3aGVlbFJlZn0+XHJcbiAgICAgICAge2dlblNsaWNlKCl9XHJcblxyXG4gICAgICAgIHtjZW50ZXJMaW5lICYmIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItbGluZS14XCI+PC9kaXY+fVxyXG4gICAgICAgIHtjZW50ZXJMaW5lICYmIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItbGluZS15XCI+PC9kaXY+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFyZ2V0XCI+PC9kaXY+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWJsb2NrIHB5LTEuNSBweC0zLjUgJHtcclxuICAgICAgICAgIHNwaW5uaW5nID8gXCJiZy1hbWJlci0zMDBcIiA6IFwiYmctYW1iZXItNjAwXCJcclxuICAgICAgICB9ICAgdGV4dC13aGl0ZSByb3VuZGVkIGNob2ljZS1idG4gYH1cclxuICAgICAgICBvbkNsaWNrPXtjaG9pY2VIYW5kZXJ9XHJcbiAgICAgID5cclxuICAgICAgICDluK7miJHpgInmi6lcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2hlZWxDaG9pY2U7XHJcbiJdLCJuYW1lcyI6WyJkZWdyZWVUb1JhZGlhbiIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ09MT1JTIiwiV2hlZWxDaG9pY2UiLCJwcm9wcyIsImNob2ljZXMiLCJjZW50ZXJMaW5lIiwic2hvd0NlbnRlckxpbmUiLCJzcGlubmluZyIsInNldFNwaW5uaW5nIiwid2hlZWxSZWYiLCJzbGljZU51bSIsImxlbmd0aCIsImdlblNsaWNlIiwiaXRlbSIsImRlZ3JlZSIsImNhbGNEZWciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInRleHQiLCJpIiwiY29sb3IiLCJwdXNoIiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInJlY3RIIiwiTWF0aCIsInRhbiIsImxlZnQiLCJ0b3AiLCJjbGlwUGF0aCIsInJlY3RXIiwic3BpbldoZWVsIiwicm90YXRpb24iLCJzcGVlZCIsInRhcmdldEFuZ2xlIiwicmFuZG9tIiwiY3VycmVudCIsInNwaW5JbnRlcnZhbCIsInNldEludGVydmFsIiwiY29uc29sZSIsImxvZyIsImNsZWFySW50ZXJ2YWwiLCJhbGVydCIsImNob2ljZUhhbmRlciIsInJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});