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

/***/ "(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx":
/*!************************************************!*\
  !*** ./src/components/KYC/PersonalDetails.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PersonalDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./src/components/ui/input.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./src/components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction PersonalDetails() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    // Extract values from search parameters\n    const firstName = searchParams.get(\"firstName\") || \"\";\n    const middleName = searchParams.get(\"middleName\") || \"\";\n    const lastName = searchParams.get(\"lastName\") || \"\";\n    const email = searchParams.get(\"email\") || \"\";\n    const phoneNumber = searchParams.get(\"phoneNumber\") || \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"mb-6 text-xl pr-20 font-bold\",\n                children: \"Personal Details\"\n            }, void 0, false, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid max-w-sm gap-2.5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        htmlFor: \"firstName\",\n                        className: \"text-left font-semibold text-md text-gray-600\",\n                        children: \"First Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        id: \"firstName\",\n                        type: \"text\",\n                        placeholder: \"Enter your first name\",\n                        defaultValue: firstName,\n                        className: \"font-normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        htmlFor: \"middleName\",\n                        className: \"text-left font-semibold text-md text-gray-600\",\n                        children: \"Middle Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        id: \"middleName\",\n                        type: \"text\",\n                        placeholder: \"Enter your middle name\",\n                        defaultValue: middleName,\n                        className: \"font-normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        htmlFor: \"lastName\",\n                        className: \"text-left font-semibold text-md text-gray-600\",\n                        children: \"Last Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        id: \"lastName\",\n                        type: \"text\",\n                        placeholder: \"Enter your last name\",\n                        defaultValue: lastName,\n                        className: \"font-normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        htmlFor: \"email\",\n                        className: \"text-left font-semibold text-md text-gray-600\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        id: \"email\",\n                        type: \"email\",\n                        placeholder: \"Enter your email\",\n                        defaultValue: email,\n                        className: \"font-normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_3__.Label, {\n                        htmlFor: \"phoneNumber\",\n                        className: \"text-left font-semibold text-md text-gray-600\",\n                        children: \"Phone Number\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        id: \"phoneNumber\",\n                        type: \"tel\",\n                        placeholder: \"Enter your phone number\",\n                        defaultValue: phoneNumber,\n                        className: \"font-normal\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alishakhatri/Desktop/kyc-verification-form/src/components/KYC/PersonalDetails.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(PersonalDetails, \"a+DZx9DY26Zf8FVy1bxe3vp9l1w=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = PersonalDetails;\nvar _c;\n$RefreshReg$(_c, \"PersonalDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0tZQy9QZXJzb25hbERldGFpbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDa0Q7QUFDSjtBQUNBO0FBRS9CLFNBQVNHOztJQUN0QixNQUFNQyxlQUFlSixnRUFBZUE7SUFFcEMsd0NBQXdDO0lBQ3hDLE1BQU1LLFlBQVlELGFBQWFFLEdBQUcsQ0FBQyxnQkFBZ0I7SUFDbkQsTUFBTUMsYUFBYUgsYUFBYUUsR0FBRyxDQUFDLGlCQUFpQjtJQUNyRCxNQUFNRSxXQUFXSixhQUFhRSxHQUFHLENBQUMsZUFBZTtJQUNqRCxNQUFNRyxRQUFRTCxhQUFhRSxHQUFHLENBQUMsWUFBWTtJQUMzQyxNQUFNSSxjQUFjTixhQUFhRSxHQUFHLENBQUMsa0JBQWtCO0lBRXZELHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStCOzs7Ozs7MEJBQzdDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNWLHVEQUFLQTt3QkFDSlksU0FBUTt3QkFDUkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWCx1REFBS0E7d0JBQ0pjLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLGNBQWNiO3dCQUNkTyxXQUFVOzs7Ozs7a0NBR1osOERBQUNWLHVEQUFLQTt3QkFDSlksU0FBUTt3QkFDUkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWCx1REFBS0E7d0JBQ0pjLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLGNBQWNYO3dCQUNkSyxXQUFVOzs7Ozs7a0NBR1osOERBQUNWLHVEQUFLQTt3QkFDSlksU0FBUTt3QkFDUkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWCx1REFBS0E7d0JBQ0pjLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLGNBQWNWO3dCQUNkSSxXQUFVOzs7Ozs7a0NBR1osOERBQUNWLHVEQUFLQTt3QkFDSlksU0FBUTt3QkFDUkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWCx1REFBS0E7d0JBQ0pjLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLGNBQWNUO3dCQUNkRyxXQUFVOzs7Ozs7a0NBR1osOERBQUNWLHVEQUFLQTt3QkFDSlksU0FBUTt3QkFDUkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWCx1REFBS0E7d0JBQ0pjLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLGNBQWNSO3dCQUNkRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0F0RndCVDs7UUFDREgsNERBQWVBOzs7S0FEZEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvS1lDL1BlcnNvbmFsRGV0YWlscy50c3g/NWJjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsRGV0YWlscygpIHtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgLy8gRXh0cmFjdCB2YWx1ZXMgZnJvbSBzZWFyY2ggcGFyYW1ldGVyc1xuICBjb25zdCBmaXJzdE5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZmlyc3ROYW1lXCIpIHx8IFwiXCI7XG4gIGNvbnN0IG1pZGRsZU5hbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwibWlkZGxlTmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBsYXN0TmFtZSA9IHNlYXJjaFBhcmFtcy5nZXQoXCJsYXN0TmFtZVwiKSB8fCBcIlwiO1xuICBjb25zdCBlbWFpbCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJlbWFpbFwiKSB8fCBcIlwiO1xuICBjb25zdCBwaG9uZU51bWJlciA9IHNlYXJjaFBhcmFtcy5nZXQoXCJwaG9uZU51bWJlclwiKSB8fCBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC14bCBwci0yMCBmb250LWJvbGRcIj5QZXJzb25hbCBEZXRhaWxzPC9oMz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtYXgtdy1zbSBnYXAtMi41XCI+XG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LXNlbWlib2xkIHRleHQtbWQgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBGaXJzdCBOYW1lXG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGZpcnN0IG5hbWVcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Zmlyc3ROYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwibWlkZGxlTmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZvbnQtc2VtaWJvbGQgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIE1pZGRsZSBOYW1lXG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwibWlkZGxlTmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtaWRkbGUgbmFtZVwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXttaWRkbGVOYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwibGFzdE5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LXNlbWlib2xkIHRleHQtbWQgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBsYXN0IG5hbWVcIlxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bGFzdE5hbWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWxcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxMYWJlbFxuICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZvbnQtc2VtaWJvbGQgdGV4dC1tZCB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgIDwvTGFiZWw+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VtYWlsfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8TGFiZWxcbiAgICAgICAgICBodG1sRm9yPVwicGhvbmVOdW1iZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LXNlbWlib2xkIHRleHQtbWQgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBQaG9uZSBOdW1iZXJcbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgaWQ9XCJwaG9uZU51bWJlclwiXG4gICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBob25lIG51bWJlclwiXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJmb250LW5vcm1hbFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTZWFyY2hQYXJhbXMiLCJJbnB1dCIsIkxhYmVsIiwiUGVyc29uYWxEZXRhaWxzIiwic2VhcmNoUGFyYW1zIiwiZmlyc3ROYW1lIiwiZ2V0IiwibWlkZGxlTmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwaG9uZU51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwiaHRtbEZvciIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/KYC/PersonalDetails.tsx\n"));

/***/ })

});