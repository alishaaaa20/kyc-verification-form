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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    const stepParam = searchParams.get(\"step\");\n    // Convert the step parameter to a number, and default to 0 if not available\n    const initialActiveStep = stepParam ? parseInt(stepParam, 10) - 1 : 0;\n    // State for tracking the active step\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialActiveStep);\n    // Using search parameters\n    const firstName = searchParams.get(\"firstName\") || \"\";\n    const middleName = searchParams.get(\"middleName\") || \"\";\n    const lastName = searchParams.get(\"lastName\") || \"\";\n    const email = searchParams.get(\"email\") || \"\";\n    const phoneNumber = searchParams.get(\"phoneNumber\") || \"\";\n    const handleNext = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n    };\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    const handleReset = ()=>{\n        setActiveStep(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-5 h-5 mr-8 text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-16\",\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    width: \"40%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        activeStep: activeStep,\n                        children: steps.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, label, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 w-full\",\n                        children: [\n                            activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                firstName: firstName,\n                                middleName: middleName,\n                                lastName: lastName,\n                                email: email,\n                                phoneNumber: phoneNumber\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 32\n                            }, this),\n                            activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    activeStep === steps.length ? // If all steps are completed, display a completion message and reset button\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    mt: 2,\n                                    mb: 1\n                                },\n                                children: \"All steps completed - you're finished!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    flexDirection: \"row\",\n                                    pt: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        sx: {\n                                            flex: \"1 1 auto\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        onClick: handleReset,\n                                        children: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this) : // If not all steps are completed, display navigation buttons\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexDirection: \"row\",\n                                pt: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    color: \"inherit\",\n                                    disabled: activeStep === 0,\n                                    onClick: handleBack,\n                                    sx: {\n                                        mr: 1\n                                    },\n                                    children: \"Back\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        flex: \"1 1 auto\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    onClick: handleNext,\n                                    children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"HITwpcf7KuEpZ+Ogn6C11DET6sk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDaUI7QUFDUDtBQUNRO0FBQ047QUFDVTtBQUNOO0FBQ1E7QUFDYTtBQUNoQjtBQUNnQjtBQUNiO0FBRWxELE1BQU1ZLFFBQVE7SUFBQztJQUFvQjtJQUFtQjtDQUFtQjtBQUUxRCxTQUFTQzs7SUFDdEIsTUFBTUMsZUFBZUgsZ0VBQWVBO0lBQ3BDLE1BQU1JLFlBQVlELGFBQWFFLEdBQUcsQ0FBQztJQUVuQyw0RUFBNEU7SUFDNUUsTUFBTUMsb0JBQW9CRixZQUFZRyxTQUFTSCxXQUFXLE1BQU0sSUFBSTtJQUVwRSxxQ0FBcUM7SUFDckMsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdwQixxREFBYyxDQUFDaUI7SUFFbkQsMEJBQTBCO0lBQzFCLE1BQU1LLFlBQVlSLGFBQWFFLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDbkQsTUFBTU8sYUFBYVQsYUFBYUUsR0FBRyxDQUFDLGlCQUFpQjtJQUNyRCxNQUFNUSxXQUFXVixhQUFhRSxHQUFHLENBQUMsZUFBZTtJQUNqRCxNQUFNUyxRQUFRWCxhQUFhRSxHQUFHLENBQUMsWUFBWTtJQUMzQyxNQUFNVSxjQUFjWixhQUFhRSxHQUFHLENBQUMsa0JBQWtCO0lBRXZELE1BQU1XLGFBQWE7UUFDakJQLGNBQWMsQ0FBQ1EsaUJBQW1CQSxpQkFBaUI7SUFDckQ7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCVCxjQUFjLENBQUNRLGlCQUFtQkEsaUJBQWlCO0lBQ3JEO0lBRUEsTUFBTUUsY0FBYztRQUNsQlYsY0FBYztJQUNoQjtJQUVBLHFCQUNFLDhEQUFDVztRQUFLQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUdELFdBQVU7O2tDQUNaLDhEQUFDL0IsdUZBQVdBO3dCQUFDK0IsV0FBVTs7Ozs7O2tDQUN2Qiw4REFBQ0U7d0JBQUtGLFdBQVU7a0NBQVE7Ozs7Ozs7Ozs7OzswQkFFMUIsOERBQUM5Qix5REFBR0E7Z0JBQUNpQyxJQUFJO29CQUFFQyxPQUFPO2dCQUFNOztrQ0FDdEIsOERBQUNqQyw2REFBT0E7d0JBQUNnQixZQUFZQTtrQ0FDbEJQLE1BQU15QixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ2pCLDhEQUFDbkMsMERBQUlBOzBDQUNILDRFQUFDQyxnRUFBU0E7OENBQUVpQzs7Ozs7OytCQURIQTs7Ozs7Ozs7OztrQ0FLZiw4REFBQ0U7d0JBQUlSLFdBQVU7OzRCQUNaYixlQUFlLG1CQUNkLDhEQUFDWCx1RUFBZUE7Z0NBQ2RjLFdBQVdBO2dDQUNYQyxZQUFZQTtnQ0FDWkMsVUFBVUE7Z0NBQ1ZDLE9BQU9BO2dDQUNQQyxhQUFhQTs7Ozs7OzRCQUdoQlAsZUFBZSxtQkFBSyw4REFBQ1YsK0RBQU9BOzs7Ozs0QkFDNUJVLGVBQWUsbUJBQUssOERBQUNULHVFQUFlQTs7Ozs7Ozs7Ozs7b0JBSXRDUyxlQUFlUCxNQUFNNkIsTUFBTSxHQUMxQiw0RUFBNEU7a0NBQzVFLDhEQUFDekMsdURBQWM7OzBDQUNiLDhEQUFDTyxpRUFBVUE7Z0NBQUM0QixJQUFJO29DQUFFUSxJQUFJO29DQUFHQyxJQUFJO2dDQUFFOzBDQUFHOzs7Ozs7MENBR2xDLDhEQUFDMUMseURBQUdBO2dDQUFDaUMsSUFBSTtvQ0FBRVUsU0FBUztvQ0FBUUMsZUFBZTtvQ0FBT0MsSUFBSTtnQ0FBRTs7a0RBQ3RELDhEQUFDN0MseURBQUdBO3dDQUFDaUMsSUFBSTs0Q0FBRWEsTUFBTTt3Q0FBVzs7Ozs7O2tEQUM1Qiw4REFBQzFDLDZEQUFNQTt3Q0FBQzJDLFNBQVNuQjtrREFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBSWxDLDZEQUE2RDtrQ0FDN0QsOERBQUM5Qix1REFBYztrQ0FDYiw0RUFBQ0UseURBQUdBOzRCQUFDaUMsSUFBSTtnQ0FBRVUsU0FBUztnQ0FBUUMsZUFBZTtnQ0FBT0MsSUFBSTs0QkFBRTs7OENBRXRELDhEQUFDekMsNkRBQU1BO29DQUNMNEMsT0FBTTtvQ0FDTkMsVUFBVWhDLGVBQWU7b0NBQ3pCOEIsU0FBU3BCO29DQUNUTSxJQUFJO3dDQUFFaUIsSUFBSTtvQ0FBRTs4Q0FDYjs7Ozs7OzhDQUdELDhEQUFDbEQseURBQUdBO29DQUFDaUMsSUFBSTt3Q0FBRWEsTUFBTTtvQ0FBVzs7Ozs7OzhDQUM1Qiw4REFBQzFDLDZEQUFNQTtvQ0FBQzJDLFNBQVN0Qjs4Q0FDZFIsZUFBZVAsTUFBTTZCLE1BQU0sR0FBRyxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlEO0dBNUZ3QjVCOztRQUNERiw0REFBZUE7OztLQURkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGV2cm9uTGVmdCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwcGVyXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBQZXJzb25hbERldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9LWUMvUGVyc29uYWxEZXRhaWxzXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiQC9jb21wb25lbnRzL0tZQy9Db250YWN0XCI7XG5pbXBvcnQgRG9jdW1lbnREZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvS1lDL0RvY3VtZW50RGV0YWlsc1wiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBzdGVwcyA9IFtcIlBlcnNvbmFsIERldGFpbHNcIiwgXCJDb250YWN0IERldGFpbHNcIiwgXCJEb2N1bWVudCBEZXRhaWxzXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3Qgc3RlcFBhcmFtID0gc2VhcmNoUGFyYW1zLmdldChcInN0ZXBcIik7XG5cbiAgLy8gQ29udmVydCB0aGUgc3RlcCBwYXJhbWV0ZXIgdG8gYSBudW1iZXIsIGFuZCBkZWZhdWx0IHRvIDAgaWYgbm90IGF2YWlsYWJsZVxuICBjb25zdCBpbml0aWFsQWN0aXZlU3RlcCA9IHN0ZXBQYXJhbSA/IHBhcnNlSW50KHN0ZXBQYXJhbSwgMTApIC0gMSA6IDA7XG5cbiAgLy8gU3RhdGUgZm9yIHRyYWNraW5nIHRoZSBhY3RpdmUgc3RlcFxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsQWN0aXZlU3RlcCk7XG5cbiAgLy8gVXNpbmcgc2VhcmNoIHBhcmFtZXRlcnNcbiAgY29uc3QgZmlyc3ROYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImZpcnN0TmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBtaWRkbGVOYW1lID0gc2VhcmNoUGFyYW1zLmdldChcIm1pZGRsZU5hbWVcIikgfHwgXCJcIjtcbiAgY29uc3QgbGFzdE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibGFzdE5hbWVcIikgfHwgXCJcIjtcbiAgY29uc3QgZW1haWwgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZW1haWxcIikgfHwgXCJcIjtcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KFwicGhvbmVOdW1iZXJcIikgfHwgXCJcIjtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTIwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTlcIj5cbiAgICAgICAgPENoZXZyb25MZWZ0IGNsYXNzTmFtZT1cInctNSBoLTUgbXItOCB0ZXh0LXRlYWwtNzAwXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMTZcIj5LWUMgVmVyaWZpY2F0aW9uPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiNDAlXCIgfX0+XG4gICAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9PlxuICAgICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XG4gICAgICAgICAgICAgIDxTdGVwTGFiZWw+e2xhYmVsfTwvU3RlcExhYmVsPlxuICAgICAgICAgICAgPC9TdGVwPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0ZXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB3LWZ1bGxcIj5cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8UGVyc29uYWxEZXRhaWxzXG4gICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICBtaWRkbGVOYW1lPXttaWRkbGVOYW1lfVxuICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICAgICAgcGhvbmVOdW1iZXI9e3Bob25lTnVtYmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthY3RpdmVTdGVwID09PSAxICYmIDxDb250YWN0IC8+fVxuICAgICAgICAgIHthY3RpdmVTdGVwID09PSAyICYmIDxEb2N1bWVudERldGFpbHMgLz59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBSZW5kZXIgZGlmZmVyZW50IGNvbXBvbmVudHMgb3IgbWVzc2FnZXMgYmFzZWQgb24gdGhlIGFjdGl2ZSBzdGVwICovfVxuICAgICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxuICAgICAgICAgIC8vIElmIGFsbCBzdGVwcyBhcmUgY29tcGxldGVkLCBkaXNwbGF5IGEgY29tcGxldGlvbiBtZXNzYWdlIGFuZCByZXNldCBidXR0b25cbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtdDogMiwgbWI6IDEgfX0+XG4gICAgICAgICAgICAgIEFsbCBzdGVwcyBjb21wbGV0ZWQgLSB5b3UncmUgZmluaXNoZWQhXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX0gLz5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+UmVzZXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgLy8gSWYgbm90IGFsbCBzdGVwcyBhcmUgY29tcGxldGVkLCBkaXNwbGF5IG5hdmlnYXRpb24gYnV0dG9uc1xuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwicm93XCIsIHB0OiAyIH19PlxuICAgICAgICAgICAgICB7LyogQmFjayBidXR0b24gKi99XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgc3g9e3sgbXI6IDEgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0+XG4gICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyBcIkZpbmlzaFwiIDogXCJOZXh0XCJ9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNoZXZyb25MZWZ0IiwiQm94IiwiU3RlcHBlciIsIlN0ZXAiLCJTdGVwTGFiZWwiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiUGVyc29uYWxEZXRhaWxzIiwiQ29udGFjdCIsIkRvY3VtZW50RGV0YWlscyIsInVzZVNlYXJjaFBhcmFtcyIsInN0ZXBzIiwiSG9tZSIsInNlYXJjaFBhcmFtcyIsInN0ZXBQYXJhbSIsImdldCIsImluaXRpYWxBY3RpdmVTdGVwIiwicGFyc2VJbnQiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZVN0YXRlIiwiZmlyc3ROYW1lIiwibWlkZGxlTmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImhhbmRsZU5leHQiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVSZXNldCIsIm1haW4iLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJzeCIsIndpZHRoIiwibWFwIiwibGFiZWwiLCJpbmRleCIsImRpdiIsImxlbmd0aCIsIkZyYWdtZW50IiwibXQiLCJtYiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwicHQiLCJmbGV4Iiwib25DbGljayIsImNvbG9yIiwiZGlzYWJsZWQiLCJtciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});