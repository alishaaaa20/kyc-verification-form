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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/StepButton */ \"(app-pages-browser)/./node_modules/@mui/material/StepButton/StepButton.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    const [completed, setCompleted] = react__WEBPACK_IMPORTED_MODULE_1__.useState({});\n    // Calculate total steps\n    const totalSteps = ()=>steps.length;\n    // Calculate completed steps\n    const completedSteps = ()=>Object.keys(completed).length;\n    // Check if current step is the last step\n    const isLastStep = ()=>activeStep === totalSteps() - 1;\n    // Check if all steps are completed\n    const allStepsCompleted = ()=>completedSteps() === totalSteps();\n    // Handle next step\n    const handleNext = ()=>{\n        if (isLastStep()) {\n            if (!allStepsCompleted()) {\n                const nextStep = steps.findIndex((_, index)=>!(index in completed));\n                setActiveStep(nextStep);\n            }\n        } else {\n            setActiveStep(activeStep + 1);\n        }\n    };\n    // Handle previous step\n    const handleBack = ()=>{\n        setActiveStep((prevStep)=>prevStep - 1);\n    };\n    // Handle step selection\n    const handleStep = (step)=>()=>{\n            setActiveStep(step);\n        };\n    // Handle completing a step\n    const handleComplete = ()=>{\n        setCompleted((prevCompleted)=>({\n                ...prevCompleted,\n                [activeStep]: true\n            }));\n        handleNext();\n    };\n    // Handle resetting the stepper\n    const handleReset = ()=>{\n        setActiveStep(0);\n        setCompleted({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"w-5 h-5 mr-8 text-blue-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-16\",\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                sx: {\n                    width: \"25%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    nonLinear: true,\n                    activeStep: activeStep,\n                    alternativeLabel: true,\n                    children: steps.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            completed: completed[index],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepButton__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                color: \"success\",\n                                onClick: handleStep(index),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 w-full\",\n                children: [\n                    activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 30\n                    }, this),\n                    activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 30\n                    }, this),\n                    activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 30\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            allStepsCompleted() ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        sx: {\n                            mt: 2,\n                            mb: 1\n                        },\n                        children: \"All steps completed - you're finished!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            pt: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                sx: {\n                                    flex: \"1 1 auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                onClick: handleReset,\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"row\",\n                        pt: 2\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            color: \"inherit\",\n                            disabled: activeStep === 0,\n                            onClick: handleBack,\n                            sx: {\n                                mr: 1\n                            },\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            sx: {\n                                flex: \"1 1 auto\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 13\n                        }, this),\n                        activeStep !== steps.length - 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            onClick: handleNext,\n                            sx: {\n                                mr: 1\n                            },\n                            children: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            onClick: handleComplete,\n                            children: completedSteps() === totalSteps() - 1 ? \"Finish\" : \"Complete Step\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 109,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ScfQtMjocTEEPsQJA4wuJiaPwNA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBT0MsSUFBSTt3QkFBRTs7MENBQ3RELDhEQUFDdEQseURBQUdBO2dDQUFDd0MsSUFBSTtvQ0FBRWUsTUFBTTtnQ0FBVzs7Ozs7OzBDQUM1Qiw4REFBQ25ELDZEQUFNQTtnQ0FBQzJDLFNBQVNaOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztxQ0FJbEMsOERBQUNyQywyQ0FBYzswQkFDYiw0RUFBQ0UseURBQUdBO29CQUFDd0MsSUFBSTt3QkFBRVksU0FBUzt3QkFBUUMsZUFBZTt3QkFBT0MsSUFBSTtvQkFBRTs7c0NBQ3RELDhEQUFDbEQsNkRBQU1BOzRCQUNMMEMsT0FBTTs0QkFDTlUsVUFBVTVDLGVBQWU7NEJBQ3pCbUMsU0FBU2xCOzRCQUNUVyxJQUFJO2dDQUFFaUIsSUFBSTs0QkFBRTtzQ0FDYjs7Ozs7O3NDQUdELDhEQUFDekQseURBQUdBOzRCQUFDd0MsSUFBSTtnQ0FBRWUsTUFBTTs0QkFBVzs7Ozs7O3dCQUMzQjNDLGVBQWVGLE1BQU1RLE1BQU0sR0FBRyxrQkFDN0IsOERBQUNkLDZEQUFNQTs0QkFBQzJDLFNBQVN2Qjs0QkFBWWdCLElBQUk7Z0NBQUVpQixJQUFJOzRCQUFFO3NDQUFHOzs7OztpREFJNUMsOERBQUNyRCw2REFBTUE7NEJBQUMyQyxTQUFTZDtzQ0FDZGQscUJBQXFCRixlQUFlLElBQ2pDLFdBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXBCO0dBdEh3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZXZyb25MZWZ0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBTdGVwcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBwZXJcIjtcbmltcG9ydCBTdGVwIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBcIjtcbmltcG9ydCBTdGVwQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBCdXR0b25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgUGVyc29uYWxEZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL0tZQy9QZXJzb25hbERldGFpbHNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0tZQy9Db250YWN0XCI7XG5pbXBvcnQgRG9jdW1lbnREZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvS1lDL0RvY3VtZW50RGV0YWlsc1wiO1xuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwTGFiZWxcIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcblxuY29uc3Qgc3RlcHMgPSBbXCJQZXJzb25hbCBEZXRhaWxzXCIsIFwiQ29udGFjdCBEZXRhaWxzXCIsIFwiRG9jdW1lbnQgRGV0YWlsc1wiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IFJlYWN0LnVzZVN0YXRlPFJlY29yZDxudW1iZXIsIGJvb2xlYW4+Pih7fSk7XG5cbiAgLy8gQ2FsY3VsYXRlIHRvdGFsIHN0ZXBzXG4gIGNvbnN0IHRvdGFsU3RlcHMgPSAoKSA9PiBzdGVwcy5sZW5ndGg7XG5cbiAgLy8gQ2FsY3VsYXRlIGNvbXBsZXRlZCBzdGVwc1xuICBjb25zdCBjb21wbGV0ZWRTdGVwcyA9ICgpID0+IE9iamVjdC5rZXlzKGNvbXBsZXRlZCkubGVuZ3RoO1xuXG4gIC8vIENoZWNrIGlmIGN1cnJlbnQgc3RlcCBpcyB0aGUgbGFzdCBzdGVwXG4gIGNvbnN0IGlzTGFzdFN0ZXAgPSAoKSA9PiBhY3RpdmVTdGVwID09PSB0b3RhbFN0ZXBzKCkgLSAxO1xuXG4gIC8vIENoZWNrIGlmIGFsbCBzdGVwcyBhcmUgY29tcGxldGVkXG4gIGNvbnN0IGFsbFN0ZXBzQ29tcGxldGVkID0gKCkgPT4gY29tcGxldGVkU3RlcHMoKSA9PT0gdG90YWxTdGVwcygpO1xuXG4gIC8vIEhhbmRsZSBuZXh0IHN0ZXBcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBpZiAoaXNMYXN0U3RlcCgpKSB7XG4gICAgICBpZiAoIWFsbFN0ZXBzQ29tcGxldGVkKCkpIHtcbiAgICAgICAgY29uc3QgbmV4dFN0ZXAgPSBzdGVwcy5maW5kSW5kZXgoKF8sIGluZGV4KSA9PiAhKGluZGV4IGluIGNvbXBsZXRlZCkpO1xuICAgICAgICBzZXRBY3RpdmVTdGVwKG5leHRTdGVwKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QWN0aXZlU3RlcChhY3RpdmVTdGVwICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIEhhbmRsZSBwcmV2aW91cyBzdGVwXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldlN0ZXApID0+IHByZXZTdGVwIC0gMSk7XG4gIH07XG5cbiAgLy8gSGFuZGxlIHN0ZXAgc2VsZWN0aW9uXG4gIGNvbnN0IGhhbmRsZVN0ZXAgPSAoc3RlcDogbnVtYmVyKSA9PiAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcChzdGVwKTtcbiAgfTtcblxuICAvLyBIYW5kbGUgY29tcGxldGluZyBhIHN0ZXBcbiAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiB7XG4gICAgc2V0Q29tcGxldGVkKChwcmV2Q29tcGxldGVkKSA9PiAoe1xuICAgICAgLi4ucHJldkNvbXBsZXRlZCxcbiAgICAgIFthY3RpdmVTdGVwXTogdHJ1ZSxcbiAgICB9KSk7XG4gICAgaGFuZGxlTmV4dCgpO1xuICB9O1xuXG4gIC8vIEhhbmRsZSByZXNldHRpbmcgdGhlIHN0ZXBwZXJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgwKTtcbiAgICBzZXRDb21wbGV0ZWQoe30pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOVwiPlxuICAgICAgICA8Q2hldnJvbkxlZnQgY2xhc3NOYW1lPVwidy01IGgtNSBtci04IHRleHQtYmx1ZS03MDBcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xNlwiPktZQyBWZXJpZmljYXRpb248L3NwYW4+XG4gICAgICA8L2gxPlxuXG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjI1JVwiIH19PlxuICAgICAgICA8U3RlcHBlciBub25MaW5lYXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0gYWx0ZXJuYXRpdmVMYWJlbD5cbiAgICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTdGVwIGtleT17aW5kZXh9IGNvbXBsZXRlZD17Y29tcGxldGVkW2luZGV4XX0+XG4gICAgICAgICAgICAgIDxTdGVwQnV0dG9uIGNvbG9yPVwic3VjY2Vzc1wiIG9uQ2xpY2s9e2hhbmRsZVN0ZXAoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICA8U3RlcExhYmVsPntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgICAgPC9TdGVwQnV0dG9uPlxuICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgey8qIFJlbmRlciB0aGUgY29udGVudCBmb3IgdGhlIGFjdGl2ZSBzdGVwICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHctZnVsbFwiPlxuICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiA8UGVyc29uYWxEZXRhaWxzIC8+fVxuICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMSAmJiA8Q29udGFjdCAvPn1cbiAgICAgICAge2FjdGl2ZVN0ZXAgPT09IDIgJiYgPERvY3VtZW50RGV0YWlscyAvPn1cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ29uZGl0aW9uYWwgcmVuZGVyaW5nIGZvciBjb21wbGV0aW9uIGFuZCBuYXZpZ2F0aW9uIGJ1dHRvbnMgKi99XG4gICAgICB7YWxsU3RlcHNDb21wbGV0ZWQoKSA/IChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG10OiAyLCBtYjogMSB9fT5cbiAgICAgICAgICAgIEFsbCBzdGVwcyBjb21wbGV0ZWQgLSB5b3UncmUgZmluaXNoZWQhXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIHB0OiAyIH19PlxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX0gLz5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApIDogKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgcHQ6IDIgfX0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICBzeD17eyBtcjogMSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICB7YWN0aXZlU3RlcCAhPT0gc3RlcHMubGVuZ3RoIC0gMSA/IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fSBzeD17eyBtcjogMSB9fT5cbiAgICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDb21wbGV0ZX0+XG4gICAgICAgICAgICAgICAge2NvbXBsZXRlZFN0ZXBzKCkgPT09IHRvdGFsU3RlcHMoKSAtIDFcbiAgICAgICAgICAgICAgICAgID8gXCJGaW5pc2hcIlxuICAgICAgICAgICAgICAgICAgOiBcIkNvbXBsZXRlIFN0ZXBcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaGV2cm9uTGVmdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcEJ1dHRvbiIsIkJ1dHRvbiIsIlBlcnNvbmFsRGV0YWlscyIsIkNvbnRhY3QiLCJEb2N1bWVudERldGFpbHMiLCJTdGVwTGFiZWwiLCJUeXBvZ3JhcGh5Iiwic3RlcHMiLCJIb21lIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VTdGF0ZSIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsInRvdGFsU3RlcHMiLCJsZW5ndGgiLCJjb21wbGV0ZWRTdGVwcyIsIk9iamVjdCIsImtleXMiLCJpc0xhc3RTdGVwIiwiYWxsU3RlcHNDb21wbGV0ZWQiLCJoYW5kbGVOZXh0IiwibmV4dFN0ZXAiLCJmaW5kSW5kZXgiLCJfIiwiaW5kZXgiLCJoYW5kbGVCYWNrIiwicHJldlN0ZXAiLCJoYW5kbGVTdGVwIiwic3RlcCIsImhhbmRsZUNvbXBsZXRlIiwicHJldkNvbXBsZXRlZCIsImhhbmRsZVJlc2V0IiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInN4Iiwid2lkdGgiLCJub25MaW5lYXIiLCJhbHRlcm5hdGl2ZUxhYmVsIiwibWFwIiwibGFiZWwiLCJjb2xvciIsIm9uQ2xpY2siLCJkaXYiLCJGcmFnbWVudCIsIm10IiwibWIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInB0IiwiZmxleCIsImRpc2FibGVkIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});