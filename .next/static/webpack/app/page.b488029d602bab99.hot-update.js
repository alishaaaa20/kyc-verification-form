"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/StepButton */ \"(app-pages-browser)/./node_modules/@mui/material/StepButton/StepButton.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [completed, setCompleted] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});\n    // Calculate total steps\n    const totalSteps = ()=>steps.length;\n    // Calculate completed steps\n    const completedSteps = ()=>Object.keys(completed).length;\n    // Check if current step is the last step\n    const isLastStep = ()=>activeStep === totalSteps() - 1;\n    // Check if all steps are completed\n    const allStepsCompleted = ()=>completedSteps() === totalSteps();\n    // Handle next step\n    const handleNext = ()=>{\n        const nextStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((_, index)=>!(index in completed)) : activeStep + 1;\n        setActiveStep(nextStep);\n    };\n    // Handle previous step\n    const handleBack = ()=>{\n        setActiveStep((prevStep)=>prevStep - 1);\n    };\n    // Handle step selection\n    const handleStep = (step)=>()=>{\n            setActiveStep(step);\n        };\n    // Handle completing a step\n    const handleComplete = ()=>{\n        setCompleted((prevCompleted)=>({\n                ...prevCompleted,\n                [activeStep]: true\n            }));\n        handleNext();\n    };\n    // Handle resetting the stepper\n    const handleReset = ()=>{\n        setActiveStep(0);\n        setCompleted({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"w-5 h-5 [mr-20] text-blue-600\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    width: \"25%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    nonLinear: true,\n                    activeStep: activeStep,\n                    alternativeLabel: true,\n                    children: steps.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            completed: completed[index],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                color: \"inherit\",\n                                onClick: handleStep(index),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 w-full\",\n                children: [\n                    activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 30\n                    }, this),\n                    activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 30\n                    }, this),\n                    activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    pt: 2\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        color: \"inherit\",\n                        disabled: activeStep === 0,\n                        onClick: handleBack,\n                        sx: {\n                            mr: 1\n                        },\n                        children: \"Back\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        sx: {\n                            flex: \"1 1 auto\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    activeStep !== steps.length - 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: handleNext,\n                        sx: {\n                            mr: 1\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        onClick: handleComplete,\n                        children: completedSteps() === totalSteps() - 1 ? \"Finish\" : \"Complete Step\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ScfQtMjocTEEPsQJA4wuJiaPwNA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTt3QkFBVzs7Ozs7O29CQUMzQjFDLGVBQWVGLE1BQU1RLE1BQU0sR0FBRyxrQkFDN0IsOERBQUNiLDZEQUFNQTt3QkFBQzBDLFNBQVN2Qjt3QkFBWWdCLElBQUk7NEJBQUVhLElBQUk7d0JBQUU7a0NBQUc7Ozs7OzZDQUk1Qyw4REFBQ2hELDZEQUFNQTt3QkFBQzBDLFNBQVNkO2tDQUNkZCxxQkFBcUJGLGVBQWUsSUFBSSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEU7R0FuR3dCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcFwiO1xuaW1wb3J0IFN0ZXBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcEJ1dHRvblwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBQZXJzb25hbERldGFpbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvS1lDL1BlcnNvbmFsRGV0YWlsc1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvS1lDL0NvbnRhY3RcIjtcbmltcG9ydCBEb2N1bWVudERldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9LWUMvRG9jdW1lbnREZXRhaWxzXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBMYWJlbFwiO1xuXG5jb25zdCBzdGVwcyA9IFtcIlBlcnNvbmFsIERldGFpbHNcIiwgXCJDb250YWN0IERldGFpbHNcIiwgXCJEb2N1bWVudCBEZXRhaWxzXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gUmVhY3QudXNlU3RhdGU8UmVjb3JkPG51bWJlciwgYm9vbGVhbj4+KHt9KTtcblxuICAvLyBDYWxjdWxhdGUgdG90YWwgc3RlcHNcbiAgY29uc3QgdG90YWxTdGVwcyA9ICgpID0+IHN0ZXBzLmxlbmd0aDtcblxuICAvLyBDYWxjdWxhdGUgY29tcGxldGVkIHN0ZXBzXG4gIGNvbnN0IGNvbXBsZXRlZFN0ZXBzID0gKCkgPT4gT2JqZWN0LmtleXMoY29tcGxldGVkKS5sZW5ndGg7XG5cbiAgLy8gQ2hlY2sgaWYgY3VycmVudCBzdGVwIGlzIHRoZSBsYXN0IHN0ZXBcbiAgY29uc3QgaXNMYXN0U3RlcCA9ICgpID0+IGFjdGl2ZVN0ZXAgPT09IHRvdGFsU3RlcHMoKSAtIDE7XG5cbiAgLy8gQ2hlY2sgaWYgYWxsIHN0ZXBzIGFyZSBjb21wbGV0ZWRcbiAgY29uc3QgYWxsU3RlcHNDb21wbGV0ZWQgPSAoKSA9PiBjb21wbGV0ZWRTdGVwcygpID09PSB0b3RhbFN0ZXBzKCk7XG5cbiAgLy8gSGFuZGxlIG5leHQgc3RlcFxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5leHRTdGVwID1cbiAgICAgIGlzTGFzdFN0ZXAoKSAmJiAhYWxsU3RlcHNDb21wbGV0ZWQoKVxuICAgICAgICA/IHN0ZXBzLmZpbmRJbmRleCgoXywgaW5kZXgpID0+ICEoaW5kZXggaW4gY29tcGxldGVkKSlcbiAgICAgICAgOiBhY3RpdmVTdGVwICsgMTtcbiAgICBzZXRBY3RpdmVTdGVwKG5leHRTdGVwKTtcbiAgfTtcblxuICAvLyBIYW5kbGUgcHJldmlvdXMgc3RlcFxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZTdGVwKSA9PiBwcmV2U3RlcCAtIDEpO1xuICB9O1xuXG4gIC8vIEhhbmRsZSBzdGVwIHNlbGVjdGlvblxuICBjb25zdCBoYW5kbGVTdGVwID0gKHN0ZXA6IG51bWJlcikgPT4gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoc3RlcCk7XG4gIH07XG5cbiAgLy8gSGFuZGxlIGNvbXBsZXRpbmcgYSBzdGVwXG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgIHNldENvbXBsZXRlZCgocHJldkNvbXBsZXRlZCkgPT4gKHtcbiAgICAgIC4uLnByZXZDb21wbGV0ZWQsXG4gICAgICBbYWN0aXZlU3RlcF06IHRydWUsXG4gICAgfSkpO1xuICAgIGhhbmRsZU5leHQoKTtcbiAgfTtcblxuICAvLyBIYW5kbGUgcmVzZXR0aW5nIHRoZSBzdGVwcGVyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoMCk7XG4gICAgc2V0Q29tcGxldGVkKHt9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTIwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTlcIj5cbiAgICAgICAgPENoZXZyb25MZWZ0IGNsYXNzTmFtZT1cInctNSBoLTUgW21yLTIwXSB0ZXh0LWJsdWUtNjAwXCIgLz5cbiAgICAgICAgPHNwYW4+S1lDIFZlcmlmaWNhdGlvbjwvc3Bhbj5cbiAgICAgIDwvaDE+XG5cbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiMjUlXCIgfX0+XG4gICAgICAgIDxTdGVwcGVyIG5vbkxpbmVhciBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfSBhbHRlcm5hdGl2ZUxhYmVsPlxuICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN0ZXAga2V5PXtpbmRleH0gY29tcGxldGVkPXtjb21wbGV0ZWRbaW5kZXhdfT5cbiAgICAgICAgICAgICAgPFN0ZXBCdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlU3RlcChpbmRleCl9PlxuICAgICAgICAgICAgICAgIDxTdGVwTGFiZWw+e2xhYmVsfTwvU3RlcExhYmVsPlxuICAgICAgICAgICAgICA8L1N0ZXBCdXR0b24+XG4gICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RlcHBlcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IGZvciB0aGUgYWN0aXZlIHN0ZXAgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsXCI+XG4gICAgICAgIHthY3RpdmVTdGVwID09PSAwICYmIDxQZXJzb25hbERldGFpbHMgLz59XG4gICAgICAgIHthY3RpdmVTdGVwID09PSAxICYmIDxDb250YWN0IC8+fVxuICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMiAmJiA8RG9jdW1lbnREZXRhaWxzIC8+fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBOYXZpZ2F0aW9uIGJ1dHRvbnMgKi99XG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cbiAgICAgICAgICBzeD17eyBtcjogMSB9fVxuICAgICAgICA+XG4gICAgICAgICAgQmFja1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJveCBzeD17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX0gLz5cbiAgICAgICAge2FjdGl2ZVN0ZXAgIT09IHN0ZXBzLmxlbmd0aCAtIDEgPyAoXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBzeD17eyBtcjogMSB9fT5cbiAgICAgICAgICAgIE5leHRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNvbXBsZXRlfT5cbiAgICAgICAgICAgIHtjb21wbGV0ZWRTdGVwcygpID09PSB0b3RhbFN0ZXBzKCkgLSAxID8gXCJGaW5pc2hcIiA6IFwiQ29tcGxldGUgU3RlcFwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hldnJvbkxlZnQiLCJCb3giLCJTdGVwcGVyIiwiU3RlcCIsIlN0ZXBCdXR0b24iLCJCdXR0b24iLCJQZXJzb25hbERldGFpbHMiLCJDb250YWN0IiwiRG9jdW1lbnREZXRhaWxzIiwiU3RlcExhYmVsIiwic3RlcHMiLCJIb21lIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VTdGF0ZSIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsInRvdGFsU3RlcHMiLCJsZW5ndGgiLCJjb21wbGV0ZWRTdGVwcyIsIk9iamVjdCIsImtleXMiLCJpc0xhc3RTdGVwIiwiYWxsU3RlcHNDb21wbGV0ZWQiLCJoYW5kbGVOZXh0IiwibmV4dFN0ZXAiLCJmaW5kSW5kZXgiLCJfIiwiaW5kZXgiLCJoYW5kbGVCYWNrIiwicHJldlN0ZXAiLCJoYW5kbGVTdGVwIiwic3RlcCIsImhhbmRsZUNvbXBsZXRlIiwicHJldkNvbXBsZXRlZCIsImhhbmRsZVJlc2V0IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInN4Iiwid2lkdGgiLCJub25MaW5lYXIiLCJhbHRlcm5hdGl2ZUxhYmVsIiwibWFwIiwibGFiZWwiLCJjb2xvciIsIm9uQ2xpY2siLCJkaXYiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInB0IiwiZGlzYWJsZWQiLCJtciIsImZsZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});