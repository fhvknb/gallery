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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./utils/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./components/WheelChoice/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst COLORS = [\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\",\n    \"#eccc68\",\n    \"#ff7f50\",\n    \"#ff6b81\",\n    \"#7bed9f\",\n    \"#5352ed\",\n    \"#a4b0be\",\n    \"#dfe4ea\",\n    \"#2ed573\",\n    \"#1e90ff\",\n    \"#3742fa\",\n    \"#ff4757\",\n    \"#ff6348\",\n    \"#ffa502\"\n];\nconst _r = [];\nlet _count = 0;\nconst WheelChoice = function(props) {\n    _s();\n    const { choices } = props;\n    const [centerLine, showCenterLine] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [spinning, setSpinning] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const wheelRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const nextDegeree = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(0);\n    const sliceNum = choices.length;\n    const genSlice = ()=>{\n        const item = [];\n        const degree = 360 / sliceNum;\n        const calcDeg = 180 - degree;\n        // console.log(calcDeg);\n        if (calcDeg < 0) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        backgroundColor: COLORS[0],\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            lineHeight: \"400px\"\n                        },\n                        children: choices[0].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this);\n        } else if (calcDeg === 0) {\n            for(let i = 0; i < 2; i++){\n                const color = COLORS[i];\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"translateY(-50%) rotate(\".concat(180 * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: \"100%\",\n                        height: \"100%\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"300px\"\n                        },\n                        children: choices[i].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg < 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                const rectH = 250 * Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: 500,\n                        height: rectH * 2,\n                        left: -50,\n                        top: -rectH + (200 - rectH),\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"\".concat(rectH, \"px\")\n                        },\n                        children: choices[i].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        } else if (calcDeg >= 90) {\n            for(let i = 0; i < sliceNum; i++){\n                const color = COLORS[i];\n                const rectW = 200 / Math.tan((0,_utils__WEBPACK_IMPORTED_MODULE_1__.degreeToRadian)(calcDeg / 2));\n                item.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slice\",\n                    style: {\n                        transform: \"rotate(\".concat(degree * i, \"deg)\"),\n                        backgroundColor: color,\n                        width: rectW * 2,\n                        height: 400,\n                        top: -200,\n                        left: 200 - rectW,\n                        clipPath: \"polygon(50% 0, 100% 50%, 50% 100%, 0 50%)\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"slice-inner\",\n                        style: {\n                            paddingTop: \"\".concat(200 + 30, \"px\")\n                        },\n                        children: choices[i].text\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 145,\n                        columnNumber: 13\n                    }, this)\n                }, \"slice_k\".concat(i), false, {\n                    fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                    lineNumber: 132,\n                    columnNumber: 11\n                }, this));\n            }\n            return item;\n        }\n    };\n    const getChoice = ()=>{\n        let totalWeight = 0;\n        let awardIdx = [];\n        for(let i = 0; i < sliceNum; i++){\n            const w = choices[i].weight;\n            for(let j = 0; j < w; j++){\n                awardIdx.push(i);\n            }\n        }\n        (0,_utils__WEBPACK_IMPORTED_MODULE_1__.shuffleArray)(awardIdx);\n        const target = Math.floor(Math.random() * awardIdx.length);\n        /* 概率测试 */ // if (shuffleIdx[target] === 1) {\n        //   _r.push(shuffleIdx[target]);\n        // }\n        // _count += 1;\n        // console.log(_r.length / _count);\n        return awardIdx[target];\n    };\n    const calcTargetDegree = ()=>{\n        const targetIdx = getChoice();\n        let defDeg = 360 * 3;\n        const sliceDeg = 360 / sliceNum;\n        const randomDeg = Math.random() * sliceDeg;\n        const targetDeg = sliceDeg * targetIdx + defDeg + randomDeg - sliceDeg / 2;\n        console.log(targetDeg);\n        console.log(targetIdx);\n        console.log(targetDeg);\n        return 0;\n    };\n    const spinWheel = ()=>{\n        const targetAngle = calcTargetDegree();\n        return;\n        if (!wheelRef.current) {\n            return;\n        }\n        setSpinning(true);\n        wheelRef.current.style.transform = \"rotate(\".concat(targetAngle, \"deg)\");\n        setTimeout(()=>{\n            setSpinning(false);\n            nextDegeree.current = targetAngle;\n            console.log(\"抽奖结束！\");\n        }, 3000);\n    };\n    const choiceHander = ()=>{\n        // console.log(spinning);\n        if (spinning) return;\n        spinWheel();\n    };\n    console.log(\"////\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wheel-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"wheel\",\n                ref: wheelRef,\n                children: [\n                    genSlice(),\n                    centerLine && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-line-x\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 231,\n                        columnNumber: 24\n                    }, this),\n                    centerLine && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inner-line-y\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                        lineNumber: 232,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 228,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"target\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 235,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inline-block py-1.5 px-3.5 \".concat(spinning ? \"bg-amber-300\" : \"bg-amber-600\", \"   text-white rounded choice-btn \"),\n                onClick: choiceHander,\n                children: \"帮我选择\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n                lineNumber: 237,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Shawn\\\\Codes\\\\gallery-app\\\\components\\\\WheelChoice\\\\Index.tsx\",\n        lineNumber: 227,\n        columnNumber: 5\n    }, this);\n};\n_s(WheelChoice, \"uly+AJQQ4ruO52CbGr7WKDEH+iY=\");\n_c = WheelChoice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WheelChoice);\nvar _c;\n$RefreshReg$(_c, \"WheelChoice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXVEO0FBQ3FCO0FBRXZEO0FBRXJCLE1BQU1JLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFRRCxNQUFNQyxLQUFLLEVBQUU7QUFDYixJQUFJQyxTQUFTO0FBRWIsTUFBTUMsY0FBYyxTQUFVQyxLQUFZOztJQUN4QyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHRDtJQUVwQixNQUFNLENBQUNFLFlBQVlDLGVBQWUsR0FBR1IsK0NBQVFBLENBQVU7SUFDdkQsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFVO0lBRWxELE1BQU1XLFdBQVdaLDZDQUFNQSxDQUF3QjtJQUMvQyxNQUFNYSxjQUFjYiw2Q0FBTUEsQ0FBUztJQUVuQyxNQUFNYyxXQUFXUCxRQUFRUSxNQUFNO0lBRS9CLE1BQU1DLFdBQVc7UUFDZixNQUFNQyxPQUFvQixFQUFFO1FBQzVCLE1BQU1DLFNBQVMsTUFBTUo7UUFDckIsTUFBTUssVUFBVSxNQUFNRDtRQUN0Qix3QkFBd0I7UUFDeEIsSUFBSUMsVUFBVSxHQUFHO1lBQ2YscUJBQ0UsOERBQUNDOzBCQUNDLDRFQUFDQTtvQkFDQ0MsV0FBVTtvQkFDVkMsT0FBTzt3QkFDTEMsaUJBQWlCckIsTUFBTSxDQUFDLEVBQUU7d0JBQzFCc0IsT0FBTzt3QkFDUEMsUUFBUTtvQkFDVjs4QkFFQSw0RUFBQ0w7d0JBQUlDLFdBQVU7d0JBQWNDLE9BQU87NEJBQUVJLFlBQVk7d0JBQVE7a0NBQ3ZEbkIsT0FBTyxDQUFDLEVBQUUsQ0FBQ29CLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7UUFLMUIsT0FB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Ozs7QUFLUDtHQXpNTXhEO0tBQUFBO0FBMk1OLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2hlZWxDaG9pY2UvSW5kZXgudHN4PzBjMjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBzaHVmZmxlQXJyYXksIGRlZ3JlZVRvUmFkaWFuIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5cclxuY29uc3QgQ09MT1JTID0gW1xyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG4gIFwiI2VjY2M2OFwiLFxyXG4gIFwiI2ZmN2Y1MFwiLFxyXG4gIFwiI2ZmNmI4MVwiLFxyXG4gIFwiIzdiZWQ5ZlwiLFxyXG4gIFwiIzUzNTJlZFwiLFxyXG4gIFwiI2E0YjBiZVwiLFxyXG4gIFwiI2RmZTRlYVwiLFxyXG4gIFwiIzJlZDU3M1wiLFxyXG4gIFwiIzFlOTBmZlwiLFxyXG4gIFwiIzM3NDJmYVwiLFxyXG4gIFwiI2ZmNDc1N1wiLFxyXG4gIFwiI2ZmNjM0OFwiLFxyXG4gIFwiI2ZmYTUwMlwiLFxyXG5dO1xyXG5cclxuLy8gY29uc3Qgc2h1ZmZsZUNvbG9ycyA9IHNodWZmbGVBcnJheShDT0xPUlMpO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaG9pY2VzOiBhbnlbXTtcclxufTtcclxuXHJcbmNvbnN0IF9yID0gW107XHJcbmxldCBfY291bnQgPSAwO1xyXG5cclxuY29uc3QgV2hlZWxDaG9pY2UgPSBmdW5jdGlvbiAocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgeyBjaG9pY2VzIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgW2NlbnRlckxpbmUsIHNob3dDZW50ZXJMaW5lXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc3Bpbm5pbmcsIHNldFNwaW5uaW5nXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgd2hlZWxSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBuZXh0RGVnZXJlZSA9IHVzZVJlZjxudW1iZXI+KDApO1xyXG5cclxuICBjb25zdCBzbGljZU51bSA9IGNob2ljZXMubGVuZ3RoO1xyXG5cclxuICBjb25zdCBnZW5TbGljZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGl0ZW06IFJlYWN0Tm9kZVtdID0gW107XHJcbiAgICBjb25zdCBkZWdyZWUgPSAzNjAgLyBzbGljZU51bTtcclxuICAgIGNvbnN0IGNhbGNEZWcgPSAxODAgLSBkZWdyZWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjYWxjRGVnKTtcclxuICAgIGlmIChjYWxjRGVnIDwgMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWNlXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IENPTE9SU1swXSxcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IFwiNDAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICB7Y2hvaWNlc1swXS50ZXh0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIGlmIChjYWxjRGVnID09PSAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBDT0xPUlNbaV07XHJcbiAgICAgICAgaXRlbS5wdXNoKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICAgIGtleT17YHNsaWNlX2ske2l9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgkezE4MCAqIGl9ZGVnKWAsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgICAgICB7Y2hvaWNlc1tpXS50ZXh0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9IGVsc2UgaWYgKGNhbGNEZWcgPCA5MCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgICBjb25zdCByZWN0SCA9IDI1MCAqIE1hdGgudGFuKGRlZ3JlZVRvUmFkaWFuKGNhbGNEZWcgLyAyKSk7XHJcbiAgICAgICAgaXRlbS5wdXNoKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZVwiXHJcbiAgICAgICAgICAgIGtleT17YHNsaWNlX2ske2l9YH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtkZWdyZWUgKiBpfWRlZylgLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwMCxcclxuICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3RIICogMixcclxuICAgICAgICAgICAgICBsZWZ0OiAtNTAsXHJcbiAgICAgICAgICAgICAgdG9wOiAtcmVjdEggKyAoMjAwIC0gcmVjdEgpLFxyXG4gICAgICAgICAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oNTAlIDAsIDEwMCUgNTAlLCA1MCUgMTAwJSwgMCA1MCUpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2UtaW5uZXJcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBgJHtyZWN0SH1weGAgfX0+XHJcbiAgICAgICAgICAgICAge2Nob2ljZXNbaV0udGV4dH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0gZWxzZSBpZiAoY2FsY0RlZyA+PSA5MCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjb2xvciA9IENPTE9SU1tpXTtcclxuICAgICAgICBjb25zdCByZWN0VyA9IDIwMCAvIE1hdGgudGFuKGRlZ3JlZVRvUmFkaWFuKGNhbGNEZWcgLyAyKSk7XHJcblxyXG4gICAgICAgIGl0ZW0ucHVzaChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2xpY2VcIlxyXG4gICAgICAgICAgICBrZXk9e2BzbGljZV9rJHtpfWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7ZGVncmVlICogaX1kZWcpYCxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiByZWN0VyAqIDIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgICAgICAgdG9wOiAtMjAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDIwMCAtIHJlY3RXLFxyXG4gICAgICAgICAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oNTAlIDAsIDEwMCUgNTAlLCA1MCUgMTAwJSwgMCA1MCUpXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGljZS1pbm5lclwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZ1RvcDogYCR7MjAwICsgMzB9cHhgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2hvaWNlc1tpXS50ZXh0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENob2ljZSA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbFdlaWdodCA9IDA7XHJcbiAgICBsZXQgYXdhcmRJZHggPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWNlTnVtOyBpKyspIHtcclxuICAgICAgY29uc3QgdyA9IGNob2ljZXNbaV0ud2VpZ2h0O1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHc7IGorKykge1xyXG4gICAgICAgIGF3YXJkSWR4LnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGVBcnJheShhd2FyZElkeCk7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhd2FyZElkeC5sZW5ndGgpO1xyXG5cclxuICAgIC8qIOamgueOh+a1i+ivlSAqL1xyXG4gICAgLy8gaWYgKHNodWZmbGVJZHhbdGFyZ2V0XSA9PT0gMSkge1xyXG4gICAgLy8gICBfci5wdXNoKHNodWZmbGVJZHhbdGFyZ2V0XSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBfY291bnQgKz0gMTtcclxuICAgIC8vIGNvbnNvbGUubG9nKF9yLmxlbmd0aCAvIF9jb3VudCk7XHJcblxyXG4gICAgcmV0dXJuIGF3YXJkSWR4W3RhcmdldF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2FsY1RhcmdldERlZ3JlZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldElkeCA9IGdldENob2ljZSgpO1xyXG4gICAgbGV0IGRlZkRlZyA9IDM2MCAqIDM7XHJcbiAgICBjb25zdCBzbGljZURlZyA9IDM2MCAvIHNsaWNlTnVtO1xyXG4gICAgY29uc3QgcmFuZG9tRGVnID0gTWF0aC5yYW5kb20oKSAqIHNsaWNlRGVnO1xyXG5cclxuXHJcbiAgICBjb25zdCB0YXJnZXREZWcgPSBzbGljZURlZyAqIHRhcmdldElkeCArIGRlZkRlZyArIHJhbmRvbURlZyAtIHNsaWNlRGVnIC8gMjtcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldERlZyk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGFyZ2V0SWR4KTtcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldERlZyk7XHJcblxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3BpbldoZWVsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0QW5nbGUgPSBjYWxjVGFyZ2V0RGVncmVlKCk7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gICAgaWYgKCF3aGVlbFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGlubmluZyh0cnVlKTtcclxuICAgIHdoZWVsUmVmLmN1cnJlbnQhLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHt0YXJnZXRBbmdsZX1kZWcpYDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0U3Bpbm5pbmcoZmFsc2UpO1xyXG4gICAgICBuZXh0RGVnZXJlZS5jdXJyZW50ID0gdGFyZ2V0QW5nbGU7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcIuaKveWllue7k+adn++8gVwiKTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNob2ljZUhhbmRlciA9ICgpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHNwaW5uaW5nKTtcclxuXHJcbiAgICBpZiAoc3Bpbm5pbmcpIHJldHVybjtcclxuICAgIHNwaW5XaGVlbCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiLy8vL1wiKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWwtYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hlZWxcIiByZWY9e3doZWVsUmVmfT5cclxuICAgICAgICB7Z2VuU2xpY2UoKX1cclxuXHJcbiAgICAgICAge2NlbnRlckxpbmUgJiYgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1saW5lLXhcIj48L2Rpdj59XHJcbiAgICAgICAge2NlbnRlckxpbmUgJiYgPGRpdiBjbGFzc05hbWU9XCJpbm5lci1saW5lLXlcIj48L2Rpdj59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YXJnZXRcIj48L2Rpdj5cclxuXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgcHktMS41IHB4LTMuNSAke1xyXG4gICAgICAgICAgc3Bpbm5pbmcgPyBcImJnLWFtYmVyLTMwMFwiIDogXCJiZy1hbWJlci02MDBcIlxyXG4gICAgICAgIH0gICB0ZXh0LXdoaXRlIHJvdW5kZWQgY2hvaWNlLWJ0biBgfVxyXG4gICAgICAgIG9uQ2xpY2s9e2Nob2ljZUhhbmRlcn1cclxuICAgICAgPlxyXG4gICAgICAgIOW4ruaIkemAieaLqVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaGVlbENob2ljZTtcclxuIl0sIm5hbWVzIjpbInNodWZmbGVBcnJheSIsImRlZ3JlZVRvUmFkaWFuIiwidXNlUmVmIiwidXNlU3RhdGUiLCJDT0xPUlMiLCJfciIsIl9jb3VudCIsIldoZWVsQ2hvaWNlIiwicHJvcHMiLCJjaG9pY2VzIiwiY2VudGVyTGluZSIsInNob3dDZW50ZXJMaW5lIiwic3Bpbm5pbmciLCJzZXRTcGlubmluZyIsIndoZWVsUmVmIiwibmV4dERlZ2VyZWUiLCJzbGljZU51bSIsImxlbmd0aCIsImdlblNsaWNlIiwiaXRlbSIsImRlZ3JlZSIsImNhbGNEZWciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIndpZHRoIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsInRleHQiLCJpIiwiY29sb3IiLCJwdXNoIiwidHJhbnNmb3JtIiwicGFkZGluZ1RvcCIsInJlY3RIIiwiTWF0aCIsInRhbiIsImxlZnQiLCJ0b3AiLCJjbGlwUGF0aCIsInJlY3RXIiwiZ2V0Q2hvaWNlIiwidG90YWxXZWlnaHQiLCJhd2FyZElkeCIsInciLCJ3ZWlnaHQiLCJqIiwidGFyZ2V0IiwiZmxvb3IiLCJyYW5kb20iLCJjYWxjVGFyZ2V0RGVncmVlIiwidGFyZ2V0SWR4IiwiZGVmRGVnIiwic2xpY2VEZWciLCJyYW5kb21EZWciLCJ0YXJnZXREZWciLCJjb25zb2xlIiwibG9nIiwic3BpbldoZWVsIiwidGFyZ2V0QW5nbGUiLCJjdXJyZW50Iiwic2V0VGltZW91dCIsImNob2ljZUhhbmRlciIsInJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/WheelChoice/Index.tsx\n"));

/***/ })

});