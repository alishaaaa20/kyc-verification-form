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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HorizontalStepper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Stepper */ \"(app-pages-browser)/./node_modules/@mui/material/Stepper/Stepper.js\");\n/* harmony import */ var _mui_material_Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Step */ \"(app-pages-browser)/./node_modules/@mui/material/Step/Step.js\");\n/* harmony import */ var _mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/StepLabel */ \"(app-pages-browser)/./node_modules/@mui/material/StepLabel/StepLabel.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// Define steps for the stepper\nconst steps = [\n    \"Personal Details\",\n    \"Contact Details\",\n    \"Document Details\"\n];\nfunction HorizontalStepper() {\n    _s();\n    // State for tracking the active step\n    const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);\n    // State for tracking skipped steps\n    const [skipped, setSkipped] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(new Set());\n    // Function to check if a step is optional (in this example, only step 1 is optional)\n    const isStepOptional = (step)=>{\n        return step === 1;\n    };\n    // Function to check if a step has been skipped\n    const isStepSkipped = (step)=>{\n        return skipped.has(step);\n    };\n    // Function to handle moving to the next step\n    const handleNext = ()=>{\n        let newSkipped = skipped;\n        if (isStepSkipped(activeStep)) {\n            newSkipped = new Set(newSkipped);\n            newSkipped.delete(activeStep);\n        }\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n        setSkipped(newSkipped);\n    };\n    // Function to handle moving to the previous step\n    const handleBack = ()=>{\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    // Function to handle skipping a step\n    const handleSkip = ()=>{\n        if (!isStepOptional(activeStep)) {\n            // Throw an error if trying to skip a non-optional step\n            throw new Error(\"You can't skip a step that isn't optional.\");\n        }\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n        setSkipped((prevSkipped)=>{\n            const newSkipped = new Set(prevSkipped);\n            newSkipped.add(activeStep);\n            return newSkipped;\n        });\n    };\n    // Function to handle resetting the stepper to the initial step\n    const handleReset = ()=>{\n        setActiveStep(0);\n        setSkipped(new Set());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            width: \"25%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Stepper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                activeStep: activeStep,\n                children: steps.map((label, index)=>{\n                    const stepProps = {};\n                    const labelProps = {};\n                    // Check if the current step is optional\n                    if (isStepOptional(index)) {\n                        labelProps.optional = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            variant: \"caption\",\n                            children: \"Optional\"\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, this);\n                    }\n                    // Check if the current step is skipped\n                    if (isStepSkipped(index)) {\n                        stepProps.completed = false;\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Step__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        ...stepProps,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_StepLabel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            ...labelProps,\n                            children: label\n                        }, void 0, false, {\n                            fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, this)\n                    }, label, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            activeStep === steps.length ? // If all steps are completed, display a completion message and reset button\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            mt: 2,\n                            mb: 1\n                        },\n                        children: \"All steps completed - you're finished!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            pt: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                sx: {\n                                    flex: \"1 1 auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onClick: handleReset,\n                                children: \"Reset\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 9\n            }, this) : // If not all steps are completed, display navigation buttons\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        sx: {\n                            mt: 2,\n                            mb: 1\n                        },\n                        children: [\n                            \"Step \",\n                            activeStep + 1\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        sx: {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            pt: 2\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                color: \"inherit\",\n                                disabled: activeStep === 0,\n                                onClick: handleBack,\n                                sx: {\n                                    mr: 1\n                                },\n                                children: \"Back\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                sx: {\n                                    flex: \"1 1 auto\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 13\n                            }, this),\n                            isStepOptional(activeStep) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                color: \"inherit\",\n                                onClick: handleSkip,\n                                sx: {\n                                    mr: 1\n                                },\n                                children: \"Skip\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                onClick: handleNext,\n                                children: activeStep === steps.length - 1 ? \"Finish\" : \"Next\"\n                            }, void 0, false, {\n                                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n                lineNumber: 110,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/app/page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(HorizontalStepper, \"AaRhpG1aKvGmm0ilBeTv8tCEZDU=\");\n_c = HorizontalStepper;\nvar _c;\n$RefreshReg$(_c, \"HorizontalStepper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCw4REFBQzVCLHVEQUFjOztrQ0FDYiw4REFBQ00sZ0VBQVVBO3dCQUFDdUIsSUFBSTs0QkFBRVksSUFBSTs0QkFBR0MsSUFBSTt3QkFBRTs7NEJBQUc7NEJBQU1qQyxhQUFhOzs7Ozs7O2tDQUNyRCw4REFBQ1IseURBQUdBO3dCQUFDNEIsSUFBSTs0QkFBRWMsU0FBUzs0QkFBUUMsZUFBZTs0QkFBT0MsSUFBSTt3QkFBRTs7MENBRXRELDhEQUFDeEMsNERBQU1BO2dDQUNMMkMsT0FBTTtnQ0FDTkMsVUFBVXhDLGVBQWU7Z0NBQ3pCc0MsU0FBU3hCO2dDQUNUTSxJQUFJO29DQUFFcUIsSUFBSTtnQ0FBRTswQ0FDYjs7Ozs7OzBDQUdELDhEQUFDakQseURBQUdBO2dDQUFDNEIsSUFBSTtvQ0FBRWlCLE1BQU07Z0NBQVc7Ozs7Ozs0QkFFM0IvQixlQUFlTiw2QkFDZCw4REFBQ0osNERBQU1BO2dDQUFDMkMsT0FBTTtnQ0FBVUQsU0FBU3ZCO2dDQUFZSyxJQUFJO29DQUFFcUIsSUFBSTtnQ0FBRTswQ0FBRzs7Ozs7OzBDQUs5RCw4REFBQzdDLDREQUFNQTtnQ0FBQzBDLFNBQVM1QjswQ0FDZFYsZUFBZUYsTUFBTWdDLE1BQU0sR0FBRyxJQUFJLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RDtHQTdId0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0JveFwiO1xuaW1wb3J0IFN0ZXBwZXIgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcHBlclwiO1xuaW1wb3J0IFN0ZXAgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvU3RlcFwiO1xuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tIFwiQG11aS9tYXRlcmlhbC9TdGVwTGFiZWxcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5XCI7XG5cbi8vIERlZmluZSBzdGVwcyBmb3IgdGhlIHN0ZXBwZXJcbmNvbnN0IHN0ZXBzID0gW1wiUGVyc29uYWwgRGV0YWlsc1wiLCBcIkNvbnRhY3QgRGV0YWlsc1wiLCBcIkRvY3VtZW50IERldGFpbHNcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvcml6b250YWxTdGVwcGVyKCkge1xuICAvLyBTdGF0ZSBmb3IgdHJhY2tpbmcgdGhlIGFjdGl2ZSBzdGVwXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuXG4gIC8vIFN0YXRlIGZvciB0cmFja2luZyBza2lwcGVkIHN0ZXBzXG4gIGNvbnN0IFtza2lwcGVkLCBzZXRTa2lwcGVkXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBTZXQ8bnVtYmVyPigpKTtcblxuICAvLyBGdW5jdGlvbiB0byBjaGVjayBpZiBhIHN0ZXAgaXMgb3B0aW9uYWwgKGluIHRoaXMgZXhhbXBsZSwgb25seSBzdGVwIDEgaXMgb3B0aW9uYWwpXG4gIGNvbnN0IGlzU3RlcE9wdGlvbmFsID0gKHN0ZXA6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBzdGVwID09PSAxO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIGEgc3RlcCBoYXMgYmVlbiBza2lwcGVkXG4gIGNvbnN0IGlzU3RlcFNraXBwZWQgPSAoc3RlcDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHNraXBwZWQuaGFzKHN0ZXApO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBtb3ZpbmcgdG8gdGhlIG5leHQgc3RlcFxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgIGxldCBuZXdTa2lwcGVkID0gc2tpcHBlZDtcbiAgICBpZiAoaXNTdGVwU2tpcHBlZChhY3RpdmVTdGVwKSkge1xuICAgICAgbmV3U2tpcHBlZCA9IG5ldyBTZXQobmV3U2tpcHBlZCk7XG4gICAgICBuZXdTa2lwcGVkLmRlbGV0ZShhY3RpdmVTdGVwKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcbiAgICBzZXRTa2lwcGVkKG5ld1NraXBwZWQpO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBtb3ZpbmcgdG8gdGhlIHByZXZpb3VzIHN0ZXBcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgc2tpcHBpbmcgYSBzdGVwXG4gIGNvbnN0IGhhbmRsZVNraXAgPSAoKSA9PiB7XG4gICAgaWYgKCFpc1N0ZXBPcHRpb25hbChhY3RpdmVTdGVwKSkge1xuICAgICAgLy8gVGhyb3cgYW4gZXJyb3IgaWYgdHJ5aW5nIHRvIHNraXAgYSBub24tb3B0aW9uYWwgc3RlcFxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHNraXAgYSBzdGVwIHRoYXQgaXNuJ3Qgb3B0aW9uYWwuXCIpO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICAgIHNldFNraXBwZWQoKHByZXZTa2lwcGVkKSA9PiB7XG4gICAgICBjb25zdCBuZXdTa2lwcGVkID0gbmV3IFNldChwcmV2U2tpcHBlZCk7XG4gICAgICBuZXdTa2lwcGVkLmFkZChhY3RpdmVTdGVwKTtcbiAgICAgIHJldHVybiBuZXdTa2lwcGVkO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSByZXNldHRpbmcgdGhlIHN0ZXBwZXIgdG8gdGhlIGluaXRpYWwgc3RlcFxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKDApO1xuICAgIHNldFNraXBwZWQobmV3IFNldCgpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgd2lkdGg6IFwiMjUlXCIgfX0+XG4gICAgICB7LyogU3RlcHBlciBjb21wb25lbnQgZm9yIGRpc3BsYXlpbmcgdGhlIHN0ZXBzICovfVxuICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0+XG4gICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXBQcm9wczogeyBjb21wbGV0ZWQ/OiBib29sZWFuIH0gPSB7fTtcbiAgICAgICAgICBjb25zdCBsYWJlbFByb3BzOiB7IG9wdGlvbmFsPzogUmVhY3QuUmVhY3ROb2RlIH0gPSB7fTtcblxuICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IHN0ZXAgaXMgb3B0aW9uYWxcbiAgICAgICAgICBpZiAoaXNTdGVwT3B0aW9uYWwoaW5kZXgpKSB7XG4gICAgICAgICAgICBsYWJlbFByb3BzLm9wdGlvbmFsID0gKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiY2FwdGlvblwiPk9wdGlvbmFsPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBzdGVwIGlzIHNraXBwZWRcbiAgICAgICAgICBpZiAoaXNTdGVwU2tpcHBlZChpbmRleCkpIHtcbiAgICAgICAgICAgIHN0ZXBQcm9wcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0gey4uLnN0ZXBQcm9wc30+XG4gICAgICAgICAgICAgIDxTdGVwTGFiZWwgey4uLmxhYmVsUHJvcHN9PntsYWJlbH08L1N0ZXBMYWJlbD5cbiAgICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3RlcHBlcj5cblxuICAgICAgey8qIFJlbmRlciBkaWZmZXJlbnQgY29tcG9uZW50cyBvciBtZXNzYWdlcyBiYXNlZCBvbiB0aGUgYWN0aXZlIHN0ZXAgKi99XG4gICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoID8gKFxuICAgICAgICAvLyBJZiBhbGwgc3RlcHMgYXJlIGNvbXBsZXRlZCwgZGlzcGxheSBhIGNvbXBsZXRpb24gbWVzc2FnZSBhbmQgcmVzZXQgYnV0dG9uXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtdDogMiwgbWI6IDEgfX0+XG4gICAgICAgICAgICBBbGwgc3RlcHMgY29tcGxldGVkIC0geW91J3JlIGZpbmlzaGVkIVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgIDxCb3ggc3g9e3sgZmxleDogXCIxIDEgYXV0b1wiIH19IC8+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5SZXNldDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKSA6IChcbiAgICAgICAgLy8gSWYgbm90IGFsbCBzdGVwcyBhcmUgY29tcGxldGVkLCBkaXNwbGF5IG5hdmlnYXRpb24gYnV0dG9uc1xuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbXQ6IDIsIG1iOiAxIH19PlN0ZXAge2FjdGl2ZVN0ZXAgKyAxfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBwdDogMiB9fT5cbiAgICAgICAgICAgIHsvKiBCYWNrIGJ1dHRvbiAqL31cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgIHN4PXt7IG1yOiAxIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJveCBzeD17eyBmbGV4OiBcIjEgMSBhdXRvXCIgfX0gLz5cbiAgICAgICAgICAgIHsvKiBTa2lwIGJ1dHRvbiBmb3Igb3B0aW9uYWwgc3RlcHMgKi99XG4gICAgICAgICAgICB7aXNTdGVwT3B0aW9uYWwoYWN0aXZlU3RlcCkgJiYgKFxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZVNraXB9IHN4PXt7IG1yOiAxIH19PlxuICAgICAgICAgICAgICAgIFNraXBcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIE5leHQgYnV0dG9uIG9yIEZpbmlzaCBidXR0b24gZm9yIHRoZSBsYXN0IHN0ZXAgKi99XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/IFwiRmluaXNoXCIgOiBcIk5leHRcIn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIlN0ZXBwZXIiLCJTdGVwIiwiU3RlcExhYmVsIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsInN0ZXBzIiwiSG9yaXpvbnRhbFN0ZXBwZXIiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInVzZVN0YXRlIiwic2tpcHBlZCIsInNldFNraXBwZWQiLCJTZXQiLCJpc1N0ZXBPcHRpb25hbCIsInN0ZXAiLCJpc1N0ZXBTa2lwcGVkIiwiaGFzIiwiaGFuZGxlTmV4dCIsIm5ld1NraXBwZWQiLCJkZWxldGUiLCJwcmV2QWN0aXZlU3RlcCIsImhhbmRsZUJhY2siLCJoYW5kbGVTa2lwIiwiRXJyb3IiLCJwcmV2U2tpcHBlZCIsImFkZCIsImhhbmRsZVJlc2V0Iiwic3giLCJ3aWR0aCIsIm1hcCIsImxhYmVsIiwiaW5kZXgiLCJzdGVwUHJvcHMiLCJsYWJlbFByb3BzIiwib3B0aW9uYWwiLCJ2YXJpYW50IiwiY29tcGxldGVkIiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJtdCIsIm1iIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJwdCIsImZsZXgiLCJvbkNsaWNrIiwiY29sb3IiLCJkaXNhYmxlZCIsIm1yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});