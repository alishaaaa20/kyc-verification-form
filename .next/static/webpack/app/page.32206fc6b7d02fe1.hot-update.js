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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const stepParam = searchParams.get(\"step\");\n    // Convert the step parameter to a number, and default to 0 if not available\n    const initialActiveStep = stepParam ? parseInt(stepParam, 10) - 1 : 0;\n    // State for tracking the active step\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialActiveStep);\n    // Using search parameters\n    const firstName = searchParams.get(\"firstName\") || \"\";\n    const middleName = searchParams.get(\"middleName\") || \"\";\n    const lastName = searchParams.get(\"lastName\") || \"\";\n    const email = searchParams.get(\"email\") || \"\";\n    const phoneNumber = searchParams.get(\"phoneNumber\") || \"\";\n    const handleNext = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n    };\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    const handleReset = ()=>{\n        setActiveStep(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-5 h-5 mr-8 text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-16\",\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    width: \"40%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        activeStep: activeStep,\n                        children: steps.map((label)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, label, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 w-full\",\n                        children: [\n                            activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                firstName: firstName,\n                                middleName: middleName,\n                                lastName: lastName,\n                                email: email,\n                                phoneNumber: phoneNumber\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 32\n                            }, this),\n                            activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    activeStep === steps.length ? // If all steps are completed, display a completion message and reset button\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    mt: 2,\n                                    mb: 1\n                                },\n                                children: \"All steps completed - you're finished!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    flexDirection: \"row\",\n                                    pt: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        sx: {\n                                            flex: \"1 1 auto\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        onClick: handleReset,\n                                        children: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this) : // If not all steps are completed, display navigation buttons\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexDirection: \"row\",\n                                pt: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    color: \"inherit\",\n                                    disabled: activeStep === 0,\n                                    onClick: handleBack,\n                                    sx: {\n                                        mr: 1\n                                    },\n                                    children: \"Back\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        flex: \"1 1 auto\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    onClick: handleNext,\n                                    children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HITwpcf7KuEpZ+Ogn6C11DET6sk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDaUI7QUFDUDtBQUNRO0FBQ047QUFDVTtBQUNOO0FBQ1E7QUFDYTtBQUNoQjtBQUNnQjtBQUNiO0FBRWxELE1BQU1ZLFFBQVE7SUFBQztJQUFvQjtJQUFtQjtDQUFtQjtBQUUxRCxTQUFTQzs7SUFDdEIsTUFBTUMsZUFBZUgsZ0VBQWVBO0lBQ3BDLE1BQU1JLFlBQVlELGFBQWFFLEdBQUcsQ0FBQztJQUVuQyw0RUFBNEU7SUFDNUUsTUFBTUMsb0JBQW9CRixZQUFZRyxTQUFTSCxXQUFXLE1BQU0sSUFBSTtJQUVwRSxxQ0FBcUM7SUFDckMsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdwQixxREFBYyxDQUFDaUI7SUFFbkQsMEJBQTBCO0lBQzFCLE1BQU1LLFlBQVlSLGFBQWFFLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDbkQsTUFBTU8sYUFBYVQsYUFBYUUsR0FBRyxDQUFDLGlCQUFpQjtJQUNyRCxNQUFNUSxXQUFXVixhQUFhRSxHQUFHLENBQUMsZUFBZTtJQUNqRCxNQUFNUyxRQUFRWCxhQUFhRSxHQUFHLENBQUMsWUFBWTtJQUMzQyxNQUFNVSxjQUFjWixhQUFhRSxHQUFHLENBQUMsa0JBQWtCO0lBRXZELE1BQU1XLGFBQWE7UUFDakJQLGNBQWMsQ0FBQ1EsaUJBQW1CQSxpQkFBaUI7SUFDckQ7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCVCxjQUFjLENBQUNRLGlCQUFtQkEsaUJBQWlCO0lBQ3JEO0lBRUEsTUFBTUUsY0FBYztRQUNsQlYsY0FBYztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDVztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUdELFdBQVU7O2tDQUNaLDhEQUFDL0IsdUZBQVdBO3dCQUFDK0IsV0FBVTs7Ozs7O2tDQUN2Qiw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQVE7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUM5Qix5REFBR0E7Z0JBQUNpQyxJQUFJO29CQUFFQyxPQUFPO2dCQUFNOztrQ0FDdEIsOERBQUNqQyw2REFBT0E7d0JBQUNnQixZQUFZQTtrQ0FDbEJQLE1BQU15QixHQUFHLENBQUMsQ0FBQ0Msc0JBQ1YsOERBQUNsQywwREFBSUE7MENBQ0gsNEVBQUNDLGdFQUFTQTs4Q0FBRWlDOzs7Ozs7K0JBREhBOzs7Ozs7Ozs7O2tDQUtmLDhEQUFDQzt3QkFBSVAsV0FBVTs7NEJBQ1piLGVBQWUsbUJBQ2QsOERBQUNYLHVFQUFlQTtnQ0FDZGMsV0FBV0E7Z0NBQ1hDLFlBQVlBO2dDQUNaQyxVQUFVQTtnQ0FDVkMsT0FBT0E7Z0NBQ1BDLGFBQWFBOzs7Ozs7NEJBR2hCUCxlQUFlLG1CQUFLLDhEQUFDViwrREFBT0E7Ozs7OzRCQUM1QlUsZUFBZSxtQkFBSyw4REFBQ1QsdUVBQWVBOzs7Ozs7Ozs7OztvQkFJdENTLGVBQWVQLE1BQU00QixNQUFNLEdBQzFCLDRFQUE0RTtrQ0FDNUUsOERBQUN4Qyx1REFBYzs7MENBQ2IsOERBQUNPLGlFQUFVQTtnQ0FBQzRCLElBQUk7b0NBQUVPLElBQUk7b0NBQUdDLElBQUk7Z0NBQUU7MENBQUc7Ozs7OzswQ0FHbEMsOERBQUN6Qyx5REFBR0E7Z0NBQUNpQyxJQUFJO29DQUFFUyxTQUFTO29DQUFRQyxlQUFlO29DQUFPQyxJQUFJO2dDQUFFOztrREFDdEQsOERBQUM1Qyx5REFBR0E7d0NBQUNpQyxJQUFJOzRDQUFFWSxNQUFNO3dDQUFXOzs7Ozs7a0RBQzVCLDhEQUFDekMsNkRBQU1BO3dDQUFDMEMsU0FBU2xCO2tEQUFhOzs7Ozs7Ozs7Ozs7Ozs7OzsrQkFJbEMsNkRBQTZEO2tDQUM3RCw4REFBQzlCLHVEQUFjO2tDQUNiLDRFQUFDRSx5REFBR0E7NEJBQUNpQyxJQUFJO2dDQUFFUyxTQUFTO2dDQUFRQyxlQUFlO2dDQUFPQyxJQUFJOzRCQUFFOzs4Q0FFdEQsOERBQUN4Qyw2REFBTUE7b0NBQ0wyQyxPQUFNO29DQUNOQyxVQUFVL0IsZUFBZTtvQ0FDekI2QixTQUFTbkI7b0NBQ1RNLElBQUk7d0NBQUVnQixJQUFJO29DQUFFOzhDQUNiOzs7Ozs7OENBR0QsOERBQUNqRCx5REFBR0E7b0NBQUNpQyxJQUFJO3dDQUFFWSxNQUFNO29DQUFXOzs7Ozs7OENBQzVCLDhEQUFDekMsNkRBQU1BO29DQUFDMEMsU0FBU3JCOzhDQUNkUixlQUFlUCxNQUFNNEIsTUFBTSxHQUFHLElBQUksV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFROUQ7R0E1RndCM0I7O1FBQ0RGLDREQUFlQTs7O0tBRGRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENoZXZyb25MZWZ0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBTdGVwcGVyIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBwZXJcIjtcbmltcG9ydCBTdGVwIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBcIjtcbmltcG9ydCBTdGVwTGFiZWwgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcExhYmVsXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFBlcnNvbmFsRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL0tZQy9QZXJzb25hbERldGFpbHNcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCJAL2NvbXBvbmVudHMvS1lDL0NvbnRhY3RcIjtcbmltcG9ydCBEb2N1bWVudERldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9LWUMvRG9jdW1lbnREZXRhaWxzXCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmNvbnN0IHN0ZXBzID0gW1wiUGVyc29uYWwgRGV0YWlsc1wiLCBcIkNvbnRhY3QgRGV0YWlsc1wiLCBcIkRvY3VtZW50IERldGFpbHNcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBzdGVwUGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KFwic3RlcFwiKTtcblxuICAvLyBDb252ZXJ0IHRoZSBzdGVwIHBhcmFtZXRlciB0byBhIG51bWJlciwgYW5kIGRlZmF1bHQgdG8gMCBpZiBub3QgYXZhaWxhYmxlXG4gIGNvbnN0IGluaXRpYWxBY3RpdmVTdGVwID0gc3RlcFBhcmFtID8gcGFyc2VJbnQoc3RlcFBhcmFtLCAxMCkgLSAxIDogMDtcblxuICAvLyBTdGF0ZSBmb3IgdHJhY2tpbmcgdGhlIGFjdGl2ZSBzdGVwXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKGluaXRpYWxBY3RpdmVTdGVwKTtcblxuICAvLyBVc2luZyBzZWFyY2ggcGFyYW1ldGVyc1xuICBjb25zdCBmaXJzdE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZmlyc3ROYW1lXCIpIHx8IFwiXCI7XG4gIGNvbnN0IG1pZGRsZU5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWlkZGxlTmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBsYXN0TmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsYXN0TmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBlbWFpbCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJlbWFpbFwiKSB8fCBcIlwiO1xuICBjb25zdCBwaG9uZU51bWJlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJwaG9uZU51bWJlclwiKSB8fCBcIlwiO1xuXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOVwiPlxuICAgICAgICA8Q2hldnJvbkxlZnQgY2xhc3NOYW1lPVwidy01IGgtNSBtci04IHRleHQtdGVhbC03MDBcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xNlwiPktZQyBWZXJpZmljYXRpb248L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI0MCVcIiB9fT5cbiAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0+XG4gICAgICAgICAge3N0ZXBzLm1hcCgobGFiZWwpID0+IChcbiAgICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICA8U3RlcExhYmVsPntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdGVwcGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggdy1mdWxsXCI+XG4gICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IDAgJiYgKFxuICAgICAgICAgICAgPFBlcnNvbmFsRGV0YWlsc1xuICAgICAgICAgICAgICBmaXJzdE5hbWU9e2ZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgbWlkZGxlTmFtZT17bWlkZGxlTmFtZX1cbiAgICAgICAgICAgICAgbGFzdE5hbWU9e2xhc3ROYW1lfVxuICAgICAgICAgICAgICBlbWFpbD17ZW1haWx9XG4gICAgICAgICAgICAgIHBob25lTnVtYmVyPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMSAmJiA8Q29udGFjdCAvPn1cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMiAmJiA8RG9jdW1lbnREZXRhaWxzIC8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogUmVuZGVyIGRpZmZlcmVudCBjb21wb25lbnRzIG9yIG1lc3NhZ2VzIGJhc2VkIG9uIHRoZSBhY3RpdmUgc3RlcCAqL31cbiAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCA/IChcbiAgICAgICAgICAvLyBJZiBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBhIGNvbXBsZXRpb24gbWVzc2FnZSBhbmQgcmVzZXQgYnV0dG9uXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxuICAgICAgICAgICAgICBBbGwgc3RlcHMgY29tcGxldGVkIC0geW91J3JlIGZpbmlzaGVkIVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgcHQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIElmIG5vdCBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgICAgey8qIEJhY2sgYnV0dG9uICovfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAxIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gXCJGaW5pc2hcIiA6IFwiTmV4dFwifVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDaGV2cm9uTGVmdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcExhYmVsIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIlBlcnNvbmFsRGV0YWlscyIsIkNvbnRhY3QiLCJEb2N1bWVudERldGFpbHMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJzdGVwcyIsIkhvbWUiLCJzZWFyY2hQYXJhbXMiLCJzdGVwUGFyYW0iLCJnZXQiLCJpbml0aWFsQWN0aXZlU3RlcCIsInBhcnNlSW50IiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VTdGF0ZSIsImZpcnN0TmFtZSIsIm1pZGRsZU5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwic3giLCJ3aWR0aCIsIm1hcCIsImxhYmVsIiwiZGl2IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJtdCIsIm1iIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwdCIsImZsZXgiLCJvbkNsaWNrIiwiY29sb3IiLCJkaXNhYmxlZCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});