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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    // Retrieve search parameters\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const stepParam = searchParams.get(\"step\");\n    // Convert the step parameter to a number, and default to 0 if not available\n    const initialActiveStep = stepParam ? parseInt(stepParam, 10) - 1 : 0;\n    // State for tracking the active step\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialActiveStep);\n    // Use search parameters to retrieve form data\n    const firstName = searchParams.get(\"firstName\") || \"\";\n    const middleName = searchParams.get(\"middleName\") || \"\";\n    const lastName = searchParams.get(\"lastName\") || \"\";\n    const email = searchParams.get(\"email\") || \"\";\n    const phoneNumber = searchParams.get(\"phoneNumber\") || \"\";\n    // Function to handle moving to the next step\n    const handleNext = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n    };\n    // Function to handle moving to the previous step\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    // Function to handle resetting the stepper to the initial step\n    const handleReset = ()=>{\n        setActiveStep(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-5 h-5 mr-8 text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-16\",\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    width: \"40%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        activeStep: activeStep,\n                        children: steps.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        variant: \"subtitle1\",\n                                        children: label\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            }, label, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 w-full\",\n                        children: [\n                            activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                firstName: firstName,\n                                middleName: middleName,\n                                lastName: lastName,\n                                email: email,\n                                phoneNumber: phoneNumber\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 32\n                            }, this),\n                            activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    activeStep === steps.length ? // If all steps are completed, display a completion message and reset button\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    mt: 2,\n                                    mb: 1\n                                },\n                                children: \"All steps completed - you're finished!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    flexDirection: \"row\",\n                                    pt: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        sx: {\n                                            flex: \"1 1 auto\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        onClick: handleReset,\n                                        children: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this) : // If not all steps are completed, display navigation buttons\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexDirection: \"row\",\n                                pt: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    color: \"inherit\",\n                                    disabled: activeStep === 0,\n                                    onClick: handleBack,\n                                    sx: {\n                                        mr: 1\n                                    },\n                                    children: \"Back\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        flex: \"1 1 auto\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    onClick: handleNext,\n                                    children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HITwpcf7KuEpZ+Ogn6C11DET6sk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDaUI7QUFDUDtBQUNRO0FBQ047QUFDVTtBQUNOO0FBQ1E7QUFDYTtBQUNoQjtBQUNnQjtBQUNiO0FBRWxELE1BQU1ZLFFBQVE7SUFBQztJQUFvQjtJQUFtQjtDQUFtQjtBQUUxRCxTQUFTQzs7SUFDdEIsNkJBQTZCO0lBQzdCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxZQUFZRCxhQUFhRSxHQUFHLENBQUM7SUFFbkMsNEVBQTRFO0lBQzVFLE1BQU1DLG9CQUFvQkYsWUFBWUcsU0FBU0gsV0FBVyxNQUFNLElBQUk7SUFFcEUscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHcEIscURBQWMsQ0FBQ2lCO0lBRW5ELDhDQUE4QztJQUM5QyxNQUFNSyxZQUFZUixhQUFhRSxHQUFHLENBQUMsZ0JBQWdCO0lBQ25ELE1BQU1PLGFBQWFULGFBQWFFLEdBQUcsQ0FBQyxpQkFBaUI7SUFDckQsTUFBTVEsV0FBV1YsYUFBYUUsR0FBRyxDQUFDLGVBQWU7SUFDakQsTUFBTVMsUUFBUVgsYUFBYUUsR0FBRyxDQUFDLFlBQVk7SUFDM0MsTUFBTVUsY0FBY1osYUFBYUUsR0FBRyxDQUFDLGtCQUFrQjtJQUV2RCw2Q0FBNkM7SUFDN0MsTUFBTVcsYUFBYTtRQUNqQlAsY0FBYyxDQUFDUSxpQkFBbUJBLGlCQUFpQjtJQUNyRDtJQUVBLGlEQUFpRDtJQUNqRCxNQUFNQyxhQUFhO1FBQ2pCVCxjQUFjLENBQUNRLGlCQUFtQkEsaUJBQWlCO0lBQ3JEO0lBRUEsK0RBQStEO0lBQy9ELE1BQU1FLGNBQWM7UUFDbEJWLGNBQWM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ1c7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFHRCxXQUFVOztrQ0FDWiw4REFBQy9CLHVGQUFXQTt3QkFBQytCLFdBQVU7Ozs7OztrQ0FDdkIsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFROzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDOUIseURBQUdBO2dCQUFDaUMsSUFBSTtvQkFBRUMsT0FBTztnQkFBTTs7a0NBRXRCLDhEQUFDakMsNkRBQU9BO3dCQUFDZ0IsWUFBWUE7a0NBQ2xCUCxNQUFNeUIsR0FBRyxDQUFDLENBQUNDLE9BQU9DLHNCQUNqQiw4REFBQ25DLDBEQUFJQTswQ0FDSCw0RUFBQ0MsZ0VBQVNBOzhDQUVSLDRFQUFDRSxpRUFBVUE7d0NBQUNpQyxTQUFRO2tEQUFhRjs7Ozs7Ozs7Ozs7K0JBSDFCQTs7Ozs7Ozs7OztrQ0FVZiw4REFBQ0c7d0JBQUlULFdBQVU7OzRCQUNaYixlQUFlLG1CQUNkLDhEQUFDWCx1RUFBZUE7Z0NBQ2RjLFdBQVdBO2dDQUNYQyxZQUFZQTtnQ0FDWkMsVUFBVUE7Z0NBQ1ZDLE9BQU9BO2dDQUNQQyxhQUFhQTs7Ozs7OzRCQUdoQlAsZUFBZSxtQkFBSyw4REFBQ1YsK0RBQU9BOzs7Ozs0QkFDNUJVLGVBQWUsbUJBQUssOERBQUNULHVFQUFlQTs7Ozs7Ozs7Ozs7b0JBSXRDUyxlQUFlUCxNQUFNOEIsTUFBTSxHQUMxQiw0RUFBNEU7a0NBQzVFLDhEQUFDMUMsdURBQWM7OzBDQUNiLDhEQUFDTyxpRUFBVUE7Z0NBQUM0QixJQUFJO29DQUFFUyxJQUFJO29DQUFHQyxJQUFJO2dDQUFFOzBDQUFHOzs7Ozs7MENBR2xDLDhEQUFDM0MseURBQUdBO2dDQUFDaUMsSUFBSTtvQ0FBRVcsU0FBUztvQ0FBUUMsZUFBZTtvQ0FBT0MsSUFBSTtnQ0FBRTs7a0RBQ3RELDhEQUFDOUMseURBQUdBO3dDQUFDaUMsSUFBSTs0Q0FBRWMsTUFBTTt3Q0FBVzs7Ozs7O2tEQUM1Qiw4REFBQzNDLDZEQUFNQTt3Q0FBQzRDLFNBQVNwQjtrREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBSWxDLDZEQUE2RDtrQ0FDN0QsOERBQUM5Qix1REFBYztrQ0FDYiw0RUFBQ0UseURBQUdBOzRCQUFDaUMsSUFBSTtnQ0FBRVcsU0FBUztnQ0FBUUMsZUFBZTtnQ0FBT0MsSUFBSTs0QkFBRTs7OENBRXRELDhEQUFDMUMsNkRBQU1BO29DQUNMNkMsT0FBTTtvQ0FDTkMsVUFBVWpDLGVBQWU7b0NBQ3pCK0IsU0FBU3JCO29DQUNUTSxJQUFJO3dDQUFFa0IsSUFBSTtvQ0FBRTs4Q0FDYjs7Ozs7OzhDQUdELDhEQUFDbkQseURBQUdBO29DQUFDaUMsSUFBSTt3Q0FBRWMsTUFBTTtvQ0FBVzs7Ozs7OzhDQUM1Qiw4REFBQzNDLDZEQUFNQTtvQ0FBQzRDLFNBQVN2Qjs4Q0FDZFIsZUFBZVAsTUFBTThCLE1BQU0sR0FBRyxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlEO0dBdEd3QjdCOztRQUVERiw0REFBZUE7OztLQUZkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGV2cm9uTGVmdCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwcGVyXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBQZXJzb25hbERldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9LWUMvUGVyc29uYWxEZXRhaWxzXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiQC9jb21wb25lbnRzL0tZQy9Db250YWN0XCI7XG5pbXBvcnQgRG9jdW1lbnREZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvS1lDL0RvY3VtZW50RGV0YWlsc1wiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBzdGVwcyA9IFtcIlBlcnNvbmFsIERldGFpbHNcIiwgXCJDb250YWN0IERldGFpbHNcIiwgXCJEb2N1bWVudCBEZXRhaWxzXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAvLyBSZXRyaWV2ZSBzZWFyY2ggcGFyYW1ldGVyc1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3Qgc3RlcFBhcmFtID0gc2VhcmNoUGFyYW1zLmdldChcInN0ZXBcIik7XG5cbiAgLy8gQ29udmVydCB0aGUgc3RlcCBwYXJhbWV0ZXIgdG8gYSBudW1iZXIsIGFuZCBkZWZhdWx0IHRvIDAgaWYgbm90IGF2YWlsYWJsZVxuICBjb25zdCBpbml0aWFsQWN0aXZlU3RlcCA9IHN0ZXBQYXJhbSA/IHBhcnNlSW50KHN0ZXBQYXJhbSwgMTApIC0gMSA6IDA7XG5cbiAgLy8gU3RhdGUgZm9yIHRyYWNraW5nIHRoZSBhY3RpdmUgc3RlcFxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsQWN0aXZlU3RlcCk7XG5cbiAgLy8gVXNlIHNlYXJjaCBwYXJhbWV0ZXJzIHRvIHJldHJpZXZlIGZvcm0gZGF0YVxuICBjb25zdCBmaXJzdE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZmlyc3ROYW1lXCIpIHx8IFwiXCI7XG4gIGNvbnN0IG1pZGRsZU5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWlkZGxlTmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBsYXN0TmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsYXN0TmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBlbWFpbCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJlbWFpbFwiKSB8fCBcIlwiO1xuICBjb25zdCBwaG9uZU51bWJlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJwaG9uZU51bWJlclwiKSB8fCBcIlwiO1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBtb3ZpbmcgdG8gdGhlIG5leHQgc3RlcFxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBtb3ZpbmcgdG8gdGhlIHByZXZpb3VzIHN0ZXBcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgcmVzZXR0aW5nIHRoZSBzdGVwcGVyIHRvIHRoZSBpbml0aWFsIHN0ZXBcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTIwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTlcIj5cbiAgICAgICAgPENoZXZyb25MZWZ0IGNsYXNzTmFtZT1cInctNSBoLTUgbXItOCB0ZXh0LXRlYWwtNzAwXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMTZcIj5LWUMgVmVyaWZpY2F0aW9uPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiNDAlXCIgfX0+XG4gICAgICAgIHsvKiBTdGVwcGVyIGNvbXBvbmVudCBmb3IgZGlzcGxheWluZyB0aGUgc3RlcHMgKi99XG4gICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9PlxuICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgIDxTdGVwTGFiZWw+XG4gICAgICAgICAgICAgICAgey8qIERpc3BsYXkgdGhlIHN0ZXAgbGFiZWwgdGV4dCBiZWxvdyB0aGUgc3RlcCBudW1iZXIgKi99XG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPntsYWJlbH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvU3RlcExhYmVsPlxuICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0ZXBwZXI+XG5cbiAgICAgICAgey8qIFJlbmRlciB0aGUgY29udGVudCBmb3IgdGhlIGFjdGl2ZSBzdGVwICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsXCI+XG4gICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IDAgJiYgKFxuICAgICAgICAgICAgPFBlcnNvbmFsRGV0YWlsc1xuICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgbWlkZGxlTmFtZT17bWlkZGxlTmFtZX1cbiAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgICAgICAgIHBob25lTnVtYmVyPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMSAmJiA8Q29udGFjdCAvPn1cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMiAmJiA8RG9jdW1lbnREZXRhaWxzIC8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUmVuZGVyIGRpZmZlcmVudCBjb21wb25lbnRzIG9yIG1lc3NhZ2VzIGJhc2VkIG9uIHRoZSBhY3RpdmUgc3RlcCAqL31cbiAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcbiAgICAgICAgICAvLyBJZiBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBhIGNvbXBsZXRpb24gbWVzc2FnZSBhbmQgcmVzZXQgYnV0dG9uXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxuICAgICAgICAgICAgICBBbGwgc3RlcHMgY29tcGxldGVkIC0geW91J3JlIGZpbmlzaGVkIVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgcHQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIElmIG5vdCBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgICAgey8qIEJhY2sgYnV0dG9uICovfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAxIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCJGaW5pc2hcIiA6IFwiTmV4dFwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaGV2cm9uTGVmdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcExhYmVsIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlBlcnNvbmFsRGV0YWlscyIsIkNvbnRhY3QiLCJEb2N1bWVudERldGFpbHMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJzdGVwcyIsIkhvbWUiLCJzZWFyY2hQYXJhbXMiLCJzdGVwUGFyYW0iLCJnZXQiLCJpbml0aWFsQWN0aXZlU3RlcCIsInBhcnNlSW50IiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsIm1pZGRsZU5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwic3giLCJ3aWR0aCIsIm1hcCIsImxhYmVsIiwiaW5kZXgiLCJ2YXJpYW50IiwiZGl2IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJtdCIsIm1iIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwdCIsImZsZXgiLCJvbkNsaWNrIiwiY29sb3IiLCJkaXNhYmxlZCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});