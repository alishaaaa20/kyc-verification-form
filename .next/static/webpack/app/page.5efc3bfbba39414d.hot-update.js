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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    // Retrieve search parameters\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const stepParam = searchParams.get(\"step\");\n    // Convert the step parameter to a number, and default to 0 if not available\n    const initialActiveStep = stepParam ? parseInt(stepParam, 10) - 1 : 0;\n    // State for tracking the active step\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialActiveStep);\n    // Use search parameters to retrieve form data\n    const firstName = searchParams.get(\"firstName\") || \"\";\n    const middleName = searchParams.get(\"middleName\") || \"\";\n    const lastName = searchParams.get(\"lastName\") || \"\";\n    const email = searchParams.get(\"email\") || \"\";\n    const phoneNumber = searchParams.get(\"phoneNumber\") || \"\";\n    // Function to handle moving to the next step\n    const handleNext = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n    };\n    // Function to handle moving to the previous step\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    // Function to handle resetting the stepper to the initial step\n    const handleReset = ()=>{\n        setActiveStep(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-5 h-5 mr-8 text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-16\",\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    width: \"40%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        activeStep: activeStep,\n                        children: steps.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, this)\n                            }, label, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 w-full\",\n                        children: [\n                            activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                firstName: firstName,\n                                middleName: middleName,\n                                lastName: lastName,\n                                email: email,\n                                phoneNumber: phoneNumber\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 32\n                            }, this),\n                            activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    activeStep === steps.length ? // If all steps are completed, display a completion message and reset button\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    mt: 2,\n                                    mb: 1\n                                },\n                                children: \"All steps completed - you're finished!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    flexDirection: \"row\",\n                                    pt: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        sx: {\n                                            flex: \"1 1 auto\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        onClick: handleReset,\n                                        children: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this) : // If not all steps are completed, display navigation buttons\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexDirection: \"row\",\n                                pt: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    color: \"inherit\",\n                                    disabled: activeStep === 0,\n                                    onClick: handleBack,\n                                    sx: {\n                                        mr: 1\n                                    },\n                                    children: \"Back\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        flex: \"1 1 auto\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    onClick: handleNext,\n                                    children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HITwpcf7KuEpZ+Ogn6C11DET6sk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDaUI7QUFDUDtBQUNRO0FBQ047QUFDVTtBQUNOO0FBQ1E7QUFDYTtBQUNoQjtBQUNnQjtBQUNiO0FBRWxELE1BQU1ZLFFBQVE7SUFBQztJQUFvQjtJQUFtQjtDQUFtQjtBQUUxRCxTQUFTQzs7SUFDdEIsNkJBQTZCO0lBQzdCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxZQUFZRCxhQUFhRSxHQUFHLENBQUM7SUFFbkMsNEVBQTRFO0lBQzVFLE1BQU1DLG9CQUFvQkYsWUFBWUcsU0FBU0gsV0FBVyxNQUFNLElBQUk7SUFFcEUscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHcEIscURBQWMsQ0FBQ2lCO0lBRW5ELDhDQUE4QztJQUM5QyxNQUFNSyxZQUFZUixhQUFhRSxHQUFHLENBQUMsZ0JBQWdCO0lBQ25ELE1BQU1PLGFBQWFULGFBQWFFLEdBQUcsQ0FBQyxpQkFBaUI7SUFDckQsTUFBTVEsV0FBV1YsYUFBYUUsR0FBRyxDQUFDLGVBQWU7SUFDakQsTUFBTVMsUUFBUVgsYUFBYUUsR0FBRyxDQUFDLFlBQVk7SUFDM0MsTUFBTVUsY0FBY1osYUFBYUUsR0FBRyxDQUFDLGtCQUFrQjtJQUV2RCw2Q0FBNkM7SUFDN0MsTUFBTVcsYUFBYTtRQUNqQlAsY0FBYyxDQUFDUSxpQkFBbUJBLGlCQUFpQjtJQUNyRDtJQUVBLGlEQUFpRDtJQUNqRCxNQUFNQyxhQUFhO1FBQ2pCVCxjQUFjLENBQUNRLGlCQUFtQkEsaUJBQWlCO0lBQ3JEO0lBRUEsK0RBQStEO0lBQy9ELE1BQU1FLGNBQWM7UUFDbEJWLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1c7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOztrQ0FDWiw4REFBQy9CLHVGQUFXQTt3QkFBQytCLFdBQVU7Ozs7OztrQ0FDdkIsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDOUIseURBQUdBO2dCQUFDaUMsSUFBSTtvQkFBRUMsT0FBTztnQkFBTTs7a0NBQ3RCLDhEQUFDakMsNkRBQU9BO3dCQUFDZ0IsWUFBWUE7a0NBQ2xCUCxNQUFNeUIsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNqQiw4REFBQ25DLDBEQUFJQTswQ0FDSCw0RUFBQ0MsZ0VBQVNBOzhDQUFFaUM7Ozs7OzsrQkFESEE7Ozs7Ozs7Ozs7a0NBS2YsOERBQUNFO3dCQUFJUixXQUFVOzs0QkFDWmIsZUFBZSxtQkFDZCw4REFBQ1gsdUVBQWVBO2dDQUNkYyxXQUFXQTtnQ0FDWEMsWUFBWUE7Z0NBQ1pDLFVBQVVBO2dDQUNWQyxPQUFPQTtnQ0FDUEMsYUFBYUE7Ozs7Ozs0QkFHaEJQLGVBQWUsbUJBQUssOERBQUNWLCtEQUFPQTs7Ozs7NEJBQzVCVSxlQUFlLG1CQUFLLDhEQUFDVCx1RUFBZUE7Ozs7Ozs7Ozs7O29CQUl0Q1MsZUFBZVAsTUFBTTZCLE1BQU0sR0FDMUIsNEVBQTRFO2tDQUM1RSw4REFBQ3pDLHVEQUFjOzswQ0FDYiw4REFBQ08saUVBQVVBO2dDQUFDNEIsSUFBSTtvQ0FBRVEsSUFBSTtvQ0FBR0MsSUFBSTtnQ0FBRTswQ0FBRzs7Ozs7OzBDQUdsQyw4REFBQzFDLHlEQUFHQTtnQ0FBQ2lDLElBQUk7b0NBQUVVLFNBQVM7b0NBQVFDLGVBQWU7b0NBQU9DLElBQUk7Z0NBQUU7O2tEQUN0RCw4REFBQzdDLHlEQUFHQTt3Q0FBQ2lDLElBQUk7NENBQUVhLE1BQU07d0NBQVc7Ozs7OztrREFDNUIsOERBQUMxQyw2REFBTUE7d0NBQUMyQyxTQUFTbkI7a0RBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUlsQyw2REFBNkQ7a0NBQzdELDhEQUFDOUIsdURBQWM7a0NBQ2IsNEVBQUNFLHlEQUFHQTs0QkFBQ2lDLElBQUk7Z0NBQUVVLFNBQVM7Z0NBQVFDLGVBQWU7Z0NBQU9DLElBQUk7NEJBQUU7OzhDQUV0RCw4REFBQ3pDLDZEQUFNQTtvQ0FDTDRDLE9BQU07b0NBQ05DLFVBQVVoQyxlQUFlO29DQUN6QjhCLFNBQVNwQjtvQ0FDVE0sSUFBSTt3Q0FBRWlCLElBQUk7b0NBQUU7OENBQ2I7Ozs7Ozs4Q0FHRCw4REFBQ2xELHlEQUFHQTtvQ0FBQ2lDLElBQUk7d0NBQUVhLE1BQU07b0NBQVc7Ozs7Ozs4Q0FDNUIsOERBQUMxQyw2REFBTUE7b0NBQUMyQyxTQUFTdEI7OENBQ2RSLGVBQWVQLE1BQU02QixNQUFNLEdBQUcsSUFBSSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5RDtHQWhHd0I1Qjs7UUFFREYsNERBQWVBOzs7S0FGZEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2hldnJvbkxlZnQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcFwiO1xuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5pbXBvcnQgUGVyc29uYWxEZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvS1lDL1BlcnNvbmFsRGV0YWlsc1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIkAvY29tcG9uZW50cy9LWUMvQ29udGFjdFwiO1xuaW1wb3J0IERvY3VtZW50RGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL0tZQy9Eb2N1bWVudERldGFpbHNcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuY29uc3Qgc3RlcHMgPSBbXCJQZXJzb25hbCBEZXRhaWxzXCIsIFwiQ29udGFjdCBEZXRhaWxzXCIsIFwiRG9jdW1lbnQgRGV0YWlsc1wiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gUmV0cmlldmUgc2VhcmNoIHBhcmFtZXRlcnNcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHN0ZXBQYXJhbSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJzdGVwXCIpO1xuXG4gIC8vIENvbnZlcnQgdGhlIHN0ZXAgcGFyYW1ldGVyIHRvIGEgbnVtYmVyLCBhbmQgZGVmYXVsdCB0byAwIGlmIG5vdCBhdmFpbGFibGVcbiAgY29uc3QgaW5pdGlhbEFjdGl2ZVN0ZXAgPSBzdGVwUGFyYW0gPyBwYXJzZUludChzdGVwUGFyYW0sIDEwKSAtIDEgOiAwO1xuXG4gIC8vIFN0YXRlIGZvciB0cmFja2luZyB0aGUgYWN0aXZlIHN0ZXBcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoaW5pdGlhbEFjdGl2ZVN0ZXApO1xuXG4gIC8vIFVzZSBzZWFyY2ggcGFyYW1ldGVycyB0byByZXRyaWV2ZSBmb3JtIGRhdGFcbiAgY29uc3QgZmlyc3ROYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImZpcnN0TmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBtaWRkbGVOYW1lID0gc2VhcmNoUGFyYW1zLmdldChcIm1pZGRsZU5hbWVcIikgfHwgXCJcIjtcbiAgY29uc3QgbGFzdE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibGFzdE5hbWVcIikgfHwgXCJcIjtcbiAgY29uc3QgZW1haWwgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZW1haWxcIikgfHwgXCJcIjtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGhvbmVOdW1iZXJcIikgfHwgXCJcIjtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgbW92aW5nIHRvIHRoZSBuZXh0IHN0ZXBcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgbW92aW5nIHRvIHRoZSBwcmV2aW91cyBzdGVwXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHJlc2V0dGluZyB0aGUgc3RlcHBlciB0byB0aGUgaW5pdGlhbCBzdGVwXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoMCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcC0yMFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi05XCI+XG4gICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJ3LTUgaC01IG1yLTggdGV4dC10ZWFsLTcwMFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTE2XCI+S1lDIFZlcmlmaWNhdGlvbjwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8Qm94IHN4PXt7IHdpZHRoOiBcIjQwJVwiIH19PlxuICAgICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfT5cbiAgICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICA8U3RlcExhYmVsPntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsXCI+XG4gICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IDAgJiYgKFxuICAgICAgICAgICAgPFBlcnNvbmFsRGV0YWlsc1xuICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgbWlkZGxlTmFtZT17bWlkZGxlTmFtZX1cbiAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgICAgICAgIHBob25lTnVtYmVyPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMSAmJiA8Q29udGFjdCAvPn1cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMiAmJiA8RG9jdW1lbnREZXRhaWxzIC8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUmVuZGVyIGRpZmZlcmVudCBjb21wb25lbnRzIG9yIG1lc3NhZ2VzIGJhc2VkIG9uIHRoZSBhY3RpdmUgc3RlcCAqL31cbiAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcbiAgICAgICAgICAvLyBJZiBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBhIGNvbXBsZXRpb24gbWVzc2FnZSBhbmQgcmVzZXQgYnV0dG9uXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxuICAgICAgICAgICAgICBBbGwgc3RlcHMgY29tcGxldGVkIC0geW91J3JlIGZpbmlzaGVkIVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgcHQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIElmIG5vdCBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgICAgey8qIEJhY2sgYnV0dG9uICovfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAxIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCJGaW5pc2hcIiA6IFwiTmV4dFwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaGV2cm9uTGVmdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcExhYmVsIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlBlcnNvbmFsRGV0YWlscyIsIkNvbnRhY3QiLCJEb2N1bWVudERldGFpbHMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJzdGVwcyIsIkhvbWUiLCJzZWFyY2hQYXJhbXMiLCJzdGVwUGFyYW0iLCJnZXQiLCJpbml0aWFsQWN0aXZlU3RlcCIsInBhcnNlSW50IiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsIm1pZGRsZU5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwic3giLCJ3aWR0aCIsIm1hcCIsImxhYmVsIiwiaW5kZXgiLCJkaXYiLCJsZW5ndGgiLCJGcmFnbWVudCIsIm10IiwibWIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInB0IiwiZmxleCIsIm9uQ2xpY2siLCJjb2xvciIsImRpc2FibGVkIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});