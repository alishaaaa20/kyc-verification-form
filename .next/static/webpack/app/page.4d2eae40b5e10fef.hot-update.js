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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ChevronLeft!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/chevron-left.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/KYC/PersonalDetails */ \"(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\");\n/* harmony import */ var _components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/KYC/Contact */ \"(app-pages-browser)/./src/components/KYC/Contact.tsx\");\n/* harmony import */ var _components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/KYC/DocumentDetails */ \"(app-pages-browser)/./src/components/KYC/DocumentDetails.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction Home() {\n    _s();\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)();\n    // Extract values from the URL search parameters\n    const firstName = searchParams.get(\"firstName\") || \"\";\n    const middleName = searchParams.get(\"middleName\") || \"\";\n    const lastName = searchParams.get(\"lastName\") || \"\";\n    const email = searchParams.get(\"email\") || \"\";\n    const phoneNumber = searchParams.get(\"phoneNumber\") || \"\";\n    // Function to handle moving to the next step\n    const handleNext = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n    };\n    // Function to handle moving to the previous step\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    // Function to handle resetting the stepper to the initial step\n    const handleReset = ()=>{\n        setActiveStep(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"min-h-screen flex flex-col items-center p-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"flex items-center justify-center font-bold text-center mb-9\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ChevronLeft_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"w-5 h-5 mr-8 text-teal-700\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"mr-16\",\n                        children: \"KYC Verification\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                sx: {\n                    width: \"40%\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        activeStep: activeStep,\n                        children: steps.map((label, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    children: label\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, this)\n                            }, label, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 w-full\",\n                        children: [\n                            activeStep === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_PersonalDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                firstName: firstName,\n                                middleName: middleName,\n                                lastName: lastName,\n                                email: email,\n                                phoneNumber: phoneNumber\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this),\n                            activeStep === 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_Contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 32\n                            }, this),\n                            activeStep === 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_KYC_DocumentDetails__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    activeStep === steps.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                sx: {\n                                    mt: 2,\n                                    mb: 1\n                                },\n                                children: \"All steps completed - you're finished!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                sx: {\n                                    display: \"flex\",\n                                    flexDirection: \"row\",\n                                    pt: 2\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        sx: {\n                                            flex: \"1 1 auto\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        onClick: handleReset,\n                                        children: \"Reset\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this) : // If not all steps are completed, display navigation buttons\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexDirection: \"row\",\n                                pt: 2\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    color: \"inherit\",\n                                    disabled: activeStep === 0,\n                                    onClick: handleBack,\n                                    sx: {\n                                        mr: 1\n                                    },\n                                    children: \"Back\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    sx: {\n                                        flex: \"1 1 auto\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    onClick: handleNext,\n                                    children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"axIKQiPDVu1Z7jfeBBJKBfoKDUY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useSearchParams\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RWEsTUFBTTtvQ0FBVzs7Ozs7OzhDQUU1Qiw4REFBQ3ZDLDZEQUFNQTtvQ0FBQ3dDLFNBQVN0Qjs4Q0FDZFYsZUFBZUYsTUFBTTBCLE1BQU0sR0FBRyxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTlEO0dBM0Z3QnpCOztRQUVERiw0REFBZUE7OztLQUZkRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGV2cm9uTGVmdCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCBCb3ggZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQm94XCI7XG5pbXBvcnQgU3RlcHBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwcGVyXCI7XG5pbXBvcnQgU3RlcCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwXCI7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gXCJAbXVpL21hdGVyaWFsL1N0ZXBMYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBQZXJzb25hbERldGFpbHMgZnJvbSBcIkAvY29tcG9uZW50cy9LWUMvUGVyc29uYWxEZXRhaWxzXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiQC9jb21wb25lbnRzL0tZQy9Db250YWN0XCI7XG5pbXBvcnQgRG9jdW1lbnREZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvS1lDL0RvY3VtZW50RGV0YWlsc1wiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5jb25zdCBzdGVwcyA9IFtcIlBlcnNvbmFsIERldGFpbHNcIiwgXCJDb250YWN0IERldGFpbHNcIiwgXCJEb2N1bWVudCBEZXRhaWxzXCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgLy8gRXh0cmFjdCB2YWx1ZXMgZnJvbSB0aGUgVVJMIHNlYXJjaCBwYXJhbWV0ZXJzXG4gIGNvbnN0IGZpcnN0TmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJmaXJzdE5hbWVcIikgfHwgXCJcIjtcbiAgY29uc3QgbWlkZGxlTmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJtaWRkbGVOYW1lXCIpIHx8IFwiXCI7XG4gIGNvbnN0IGxhc3ROYW1lID0gc2VhcmNoUGFyYW1zLmdldChcImxhc3ROYW1lXCIpIHx8IFwiXCI7XG4gIGNvbnN0IGVtYWlsID0gc2VhcmNoUGFyYW1zLmdldChcImVtYWlsXCIpIHx8IFwiXCI7XG4gIGNvbnN0IHBob25lTnVtYmVyID0gc2VhcmNoUGFyYW1zLmdldChcInBob25lTnVtYmVyXCIpIHx8IFwiXCI7XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIG1vdmluZyB0byB0aGUgbmV4dCBzdGVwXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIG1vdmluZyB0byB0aGUgcHJldmlvdXMgc3RlcFxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSByZXNldHRpbmcgdGhlIHN0ZXBwZXIgdG8gdGhlIGluaXRpYWwgc3RlcFxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMjBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC1jZW50ZXIgbWItOVwiPlxuICAgICAgICA8Q2hldnJvbkxlZnQgY2xhc3NOYW1lPVwidy01IGgtNSBtci04IHRleHQtdGVhbC03MDBcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xNlwiPktZQyBWZXJpZmljYXRpb248L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPEJveCBzeD17eyB3aWR0aDogXCI0MCVcIiB9fT5cbiAgICAgICAgey8qIFN0ZXBwZXIgY29tcG9uZW50IGZvciBkaXNwbGF5aW5nIHRoZSBzdGVwcyAqL31cbiAgICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0+XG4gICAgICAgICAge3N0ZXBzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cbiAgICAgICAgICAgICAgPFN0ZXBMYWJlbD57bGFiZWx9PC9TdGVwTGFiZWw+XG4gICAgICAgICAgICA8L1N0ZXA+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3RlcHBlcj5cblxuICAgICAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IGZvciB0aGUgYWN0aXZlIHN0ZXAgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCB3LWZ1bGxcIj5cbiAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gMCAmJiAoXG4gICAgICAgICAgICA8UGVyc29uYWxEZXRhaWxzXG4gICAgICAgICAgICAgIGZpcnN0TmFtZT17Zmlyc3ROYW1lfVxuICAgICAgICAgICAgICBtaWRkbGVOYW1lPXttaWRkbGVOYW1lfVxuICAgICAgICAgICAgICBsYXN0TmFtZT17bGFzdE5hbWV9XG4gICAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICAgICAgcGhvbmVOdW1iZXI9e3Bob25lTnVtYmVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHthY3RpdmVTdGVwID09PSAxICYmIDxDb250YWN0IC8+fVxuICAgICAgICAgIHthY3RpdmVTdGVwID09PSAyICYmIDxEb2N1bWVudERldGFpbHMgLz59XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggPyAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlxuICAgICAgICAgICAgICBBbGwgc3RlcHMgY29tcGxldGVkIC0geW91J3JlIGZpbmlzaGVkIVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgcHQ6IDIgfX0+XG4gICAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PlJlc2V0PC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApIDogKFxuICAgICAgICAgIC8vIElmIG5vdCBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgICAgey8qIEJhY2sgYnV0dG9uICovfVxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxuICAgICAgICAgICAgICAgIHN4PXt7IG1yOiAxIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBCYWNrXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXg6IFwiMSAxIGF1dG9cIiB9fSAvPlxuICAgICAgICAgICAgICB7LyogTmV4dCBidXR0b24gb3IgRmluaXNoIGJ1dHRvbiBmb3IgdGhlIGxhc3Qgc3RlcCAqL31cbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fT5cbiAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IFwiRmluaXNoXCIgOiBcIk5leHRcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9Cb3g+XG4gICAgPC9tYWluPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hldnJvbkxlZnQiLCJCb3giLCJTdGVwcGVyIiwiU3RlcCIsIlN0ZXBMYWJlbCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJQZXJzb25hbERldGFpbHMiLCJDb250YWN0IiwiRG9jdW1lbnREZXRhaWxzIiwidXNlU2VhcmNoUGFyYW1zIiwic3RlcHMiLCJIb21lIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJ1c2VTdGF0ZSIsInNlYXJjaFBhcmFtcyIsImZpcnN0TmFtZSIsImdldCIsIm1pZGRsZU5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwic3giLCJ3aWR0aCIsIm1hcCIsImxhYmVsIiwiaW5kZXgiLCJkaXYiLCJsZW5ndGgiLCJGcmFnbWVudCIsIm10IiwibWIiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInB0IiwiZmxleCIsIm9uQ2xpY2siLCJjb2xvciIsImRpc2FibGVkIiwibXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});