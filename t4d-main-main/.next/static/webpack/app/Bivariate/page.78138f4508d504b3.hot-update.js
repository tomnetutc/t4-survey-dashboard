"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Bivariate/page",{

/***/ "(app-pages-browser)/./components/FilterDropdown.tsx":
/*!***************************************!*\
  !*** ./components/FilterDropdown.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! papaparse */ \"(app-pages-browser)/./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterDropdown_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterDropdown.scss */ \"(app-pages-browser)/./components/FilterDropdown.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst FilterDropdown = (param)=>{\n    let { onDataFetched } = param;\n    var _variables_category;\n    _s();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variables, setVariables] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [variable, setVariable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        papaparse__WEBPACK_IMPORTED_MODULE_2___default().parse(\"/data/t4_survey_variablelist.csv\", {\n            download: true,\n            header: true,\n            complete: (result)=>{\n                const data = result.data;\n                const categorySet = new Set();\n                const variableMap = {};\n                data.forEach((row)=>{\n                    const category = row[\"Category\"];\n                    const variable = row[\"Label\"];\n                    const name = row[\"Name\"];\n                    categorySet.add(category);\n                    if (!variableMap[category]) {\n                        variableMap[category] = [];\n                    }\n                    variableMap[category].push({\n                        variable,\n                        name\n                    });\n                });\n                const categoriesArray = Array.from(categorySet);\n                setCategories(categoriesArray);\n                setVariables(variableMap);\n                if (categoriesArray.length > 0) {\n                    setCategory(categoriesArray[0]);\n                    if (variableMap[categoriesArray[0]].length > 0) {\n                        setVariable(variableMap[categoriesArray[0]][0].variable);\n                        setName(variableMap[categoriesArray[0]][0].name);\n                    }\n                }\n            }\n        });\n    }, []);\n    const handleCategoryChange = (event)=>{\n        var _variables_selectedCategory;\n        const selectedCategory = event.target.value;\n        setCategory(selectedCategory);\n        if (((_variables_selectedCategory = variables[selectedCategory]) === null || _variables_selectedCategory === void 0 ? void 0 : _variables_selectedCategory.length) > 0) {\n            setVariable(variables[selectedCategory][0].variable);\n            setName(variables[selectedCategory][0].name);\n        }\n    };\n    const handleVariableChange = (event)=>{\n        const selectedVariable = event.target.value;\n        const selectedVarObj = variables[category].find((v)=>v.variable === selectedVariable);\n        if (selectedVarObj) {\n            setVariable(selectedVarObj.variable);\n            setName(selectedVarObj.name);\n        }\n    };\n    const handleApply = ()=>{\n        papaparse__WEBPACK_IMPORTED_MODULE_2___default().parse(\"/data/t4_survey_data_numeric_all_column2.csv\", {\n            download: true,\n            header: true,\n            complete: (result)=>{\n                const data = result.data;\n                const responseCounts = {};\n                data.forEach((row)=>{\n                    const response = row[name];\n                    if (response) {\n                        responseCounts[response] = (responseCounts[response] || 0) + 1;\n                    }\n                });\n                onDataFetched(responseCounts, {\n                    category,\n                    variable,\n                    name\n                });\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"filter-dropdown\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Choose from the following characteristics, organized by categories, to create a simple summary table.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdown-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"category\",\n                        children: \"Category\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"category\",\n                        value: category,\n                        onChange: handleCategoryChange,\n                        children: categories.map((cat)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: cat,\n                                children: cat\n                            }, cat, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dropdown-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"variable\",\n                        children: \"Variable\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"variable\",\n                        value: variable,\n                        onChange: handleVariableChange,\n                        children: (_variables_category = variables[category]) === null || _variables_category === void 0 ? void 0 : _variables_category.map((varObj)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: varObj.variable,\n                                children: varObj.variable\n                            }, varObj.variable, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleApply,\n                className: \"apply-button\",\n                children: \"Apply\"\n            }, void 0, false, {\n                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\FilterDropdown.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterDropdown, \"G/bgHkZHNKZepAgOgikLZhtwPVU=\");\n_c = FilterDropdown;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterDropdown);\nvar _c;\n$RefreshReg$(_c, \"FilterDropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRmlsdGVyRHJvcGRvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVtRDtBQUN0QjtBQUNFO0FBVy9CLE1BQU1JLGlCQUFnRDtRQUFDLEVBQUVDLGFBQWEsRUFBRTtRQTZGN0RDOztJQTVGVCxNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQVcsRUFBRTtJQUN6RCxNQUFNLENBQUNLLFdBQVdHLGFBQWEsR0FBR1IsK0NBQVFBLENBQTBELENBQUM7SUFDckcsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQVM7SUFFekNDLGdEQUFTQSxDQUFDO1FBQ1JDLHNEQUFVLENBQUMsb0NBQW9DO1lBQzdDYyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsVUFBVSxDQUFDQztnQkFDVCxNQUFNQyxPQUFPRCxPQUFPQyxJQUFJO2dCQUN4QixNQUFNQyxjQUFjLElBQUlDO2dCQUN4QixNQUFNQyxjQUF1RSxDQUFDO2dCQUU5RUgsS0FBS0ksT0FBTyxDQUFDLENBQUNDO29CQUNaLE1BQU1oQixXQUFXZ0IsR0FBRyxDQUFDLFdBQVc7b0JBQ2hDLE1BQU1kLFdBQVdjLEdBQUcsQ0FBQyxRQUFRO29CQUM3QixNQUFNWixPQUFPWSxHQUFHLENBQUMsT0FBTztvQkFDeEJKLFlBQVlLLEdBQUcsQ0FBQ2pCO29CQUNoQixJQUFJLENBQUNjLFdBQVcsQ0FBQ2QsU0FBUyxFQUFFO3dCQUMxQmMsV0FBVyxDQUFDZCxTQUFTLEdBQUcsRUFBRTtvQkFDNUI7b0JBQ0FjLFdBQVcsQ0FBQ2QsU0FBUyxDQUFDa0IsSUFBSSxDQUFDO3dCQUFFaEI7d0JBQVVFO29CQUFLO2dCQUM5QztnQkFFQSxNQUFNZSxrQkFBa0JDLE1BQU1DLElBQUksQ0FBQ1Q7Z0JBQ25DZCxjQUFjcUI7Z0JBQ2RwQixhQUFhZTtnQkFDYixJQUFJSyxnQkFBZ0JHLE1BQU0sR0FBRyxHQUFHO29CQUM5QnJCLFlBQVlrQixlQUFlLENBQUMsRUFBRTtvQkFDOUIsSUFBSUwsV0FBVyxDQUFDSyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUNHLE1BQU0sR0FBRyxHQUFHO3dCQUM5Q25CLFlBQVlXLFdBQVcsQ0FBQ0ssZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQ2pCLFFBQVE7d0JBQ3ZERyxRQUFRUyxXQUFXLENBQUNLLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUNmLElBQUk7b0JBQ2pEO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1tQix1QkFBdUIsQ0FBQ0M7WUFHeEI1QjtRQUZKLE1BQU02QixtQkFBbUJELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQzFCLFlBQVl3QjtRQUNaLElBQUk3QixFQUFBQSw4QkFBQUEsU0FBUyxDQUFDNkIsaUJBQWlCLGNBQTNCN0Isa0RBQUFBLDRCQUE2QjBCLE1BQU0sSUFBRyxHQUFHO1lBQzNDbkIsWUFBWVAsU0FBUyxDQUFDNkIsaUJBQWlCLENBQUMsRUFBRSxDQUFDdkIsUUFBUTtZQUNuREcsUUFBUVQsU0FBUyxDQUFDNkIsaUJBQWlCLENBQUMsRUFBRSxDQUFDckIsSUFBSTtRQUM3QztJQUNGO0lBRUEsTUFBTXdCLHVCQUF1QixDQUFDSjtRQUM1QixNQUFNSyxtQkFBbUJMLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztRQUMzQyxNQUFNRyxpQkFBaUJsQyxTQUFTLENBQUNJLFNBQVMsQ0FBQytCLElBQUksQ0FBQ0MsQ0FBQUEsSUFBS0EsRUFBRTlCLFFBQVEsS0FBSzJCO1FBQ3BFLElBQUlDLGdCQUFnQjtZQUNsQjNCLFlBQVkyQixlQUFlNUIsUUFBUTtZQUNuQ0csUUFBUXlCLGVBQWUxQixJQUFJO1FBQzdCO0lBQ0Y7SUFFQSxNQUFNNkIsY0FBYztRQUNsQnhDLHNEQUFVLENBQUMsZ0RBQWdEO1lBQ3pEYyxVQUFVO1lBQ1ZDLFFBQVE7WUFDUkMsVUFBVSxDQUFDQztnQkFDVCxNQUFNQyxPQUFPRCxPQUFPQyxJQUFJO2dCQUN4QixNQUFNdUIsaUJBQTRDLENBQUM7Z0JBRW5EdkIsS0FBS0ksT0FBTyxDQUFDLENBQUNDO29CQUNaLE1BQU1tQixXQUFXbkIsR0FBRyxDQUFDWixLQUFLO29CQUMxQixJQUFJK0IsVUFBVTt3QkFDWkQsY0FBYyxDQUFDQyxTQUFTLEdBQUcsQ0FBQ0QsY0FBYyxDQUFDQyxTQUFTLElBQUksS0FBSztvQkFDL0Q7Z0JBQ0Y7Z0JBRUF4QyxjQUFjdUMsZ0JBQWdCO29CQUFFbEM7b0JBQVVFO29CQUFVRTtnQkFBSztZQUMzRDtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRTs7Ozs7OzBCQUNILDhEQUFDRjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFBT0MsSUFBRzt3QkFBV2YsT0FBTzNCO3dCQUFVMkMsVUFBVXBCO2tDQUM5QzFCLFdBQVcrQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ2YsOERBQUNDO2dDQUFpQm5CLE9BQU9rQjswQ0FBTUE7K0JBQWxCQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbkIsOERBQUNUO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUFPQyxJQUFHO3dCQUFXZixPQUFPekI7d0JBQVV5QyxVQUFVZjttQ0FDOUNoQyxzQkFBQUEsU0FBUyxDQUFDSSxTQUFTLGNBQW5CSiwwQ0FBQUEsb0JBQXFCZ0QsR0FBRyxDQUFDLENBQUNHLHVCQUN6Qiw4REFBQ0Q7Z0NBQTZCbkIsT0FBT29CLE9BQU83QyxRQUFROzBDQUFHNkMsT0FBTzdDLFFBQVE7K0JBQXpENkMsT0FBTzdDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWxDLDhEQUFDOEM7Z0JBQU9DLFNBQVNoQjtnQkFBYUksV0FBVTswQkFBZTs7Ozs7Ozs7Ozs7O0FBRzdEO0dBckdNM0M7S0FBQUE7QUF1R04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0ZXJEcm9wZG93bi50c3g/MWY1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xyXG5pbXBvcnQgJy4vRmlsdGVyRHJvcGRvd24uc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgVmFyaWFibGVzRGF0YSB7XHJcbiAgY2F0ZWdvcmllczogc3RyaW5nW107XHJcbiAgdmFyaWFibGVzOiB7IFtrZXk6IHN0cmluZ106IHsgdmFyaWFibGU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXSB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRmlsdGVyRHJvcGRvd25Qcm9wcyB7XHJcbiAgb25EYXRhRmV0Y2hlZDogKHZhcmlhYmxlRGF0YTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSwgc2VsZWN0ZWRMYWJlbDogeyBjYXRlZ29yeTogc3RyaW5nOyB2YXJpYWJsZTogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgRmlsdGVyRHJvcGRvd246IFJlYWN0LkZDPEZpbHRlckRyb3Bkb3duUHJvcHM+ID0gKHsgb25EYXRhRmV0Y2hlZCB9KSA9PiB7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBbdmFyaWFibGVzLCBzZXRWYXJpYWJsZXNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiB7IHZhcmlhYmxlOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W10gfT4oe30pO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW3ZhcmlhYmxlLCBzZXRWYXJpYWJsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIFBhcGEucGFyc2UoJy9kYXRhL3Q0X3N1cnZleV92YXJpYWJsZWxpc3QuY3N2Jywge1xyXG4gICAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVNldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTWFwOiB7IFtrZXk6IHN0cmluZ106IHsgdmFyaWFibGU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXSB9ID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgocm93OiBhbnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gcm93WydDYXRlZ29yeSddO1xyXG4gICAgICAgICAgY29uc3QgdmFyaWFibGUgPSByb3dbJ0xhYmVsJ107XHJcbiAgICAgICAgICBjb25zdCBuYW1lID0gcm93WydOYW1lJ107XHJcbiAgICAgICAgICBjYXRlZ29yeVNldC5hZGQoY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgaWYgKCF2YXJpYWJsZU1hcFtjYXRlZ29yeV0pIHtcclxuICAgICAgICAgICAgdmFyaWFibGVNYXBbY2F0ZWdvcnldID0gW107XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2YXJpYWJsZU1hcFtjYXRlZ29yeV0ucHVzaCh7IHZhcmlhYmxlLCBuYW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzQXJyYXkgPSBBcnJheS5mcm9tKGNhdGVnb3J5U2V0KTtcclxuICAgICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3JpZXNBcnJheSk7XHJcbiAgICAgICAgc2V0VmFyaWFibGVzKHZhcmlhYmxlTWFwKTtcclxuICAgICAgICBpZiAoY2F0ZWdvcmllc0FycmF5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHNldENhdGVnb3J5KGNhdGVnb3JpZXNBcnJheVswXSk7XHJcbiAgICAgICAgICBpZiAodmFyaWFibGVNYXBbY2F0ZWdvcmllc0FycmF5WzBdXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHNldFZhcmlhYmxlKHZhcmlhYmxlTWFwW2NhdGVnb3JpZXNBcnJheVswXV1bMF0udmFyaWFibGUpO1xyXG4gICAgICAgICAgICBzZXROYW1lKHZhcmlhYmxlTWFwW2NhdGVnb3JpZXNBcnJheVswXV1bMF0ubmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDYXRlZ29yeUNoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Q2F0ZWdvcnkoc2VsZWN0ZWRDYXRlZ29yeSk7XHJcbiAgICBpZiAodmFyaWFibGVzW3NlbGVjdGVkQ2F0ZWdvcnldPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFZhcmlhYmxlKHZhcmlhYmxlc1tzZWxlY3RlZENhdGVnb3J5XVswXS52YXJpYWJsZSk7XHJcbiAgICAgIHNldE5hbWUodmFyaWFibGVzW3NlbGVjdGVkQ2F0ZWdvcnldWzBdLm5hbWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZhcmlhYmxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFyaWFibGUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBzZWxlY3RlZFZhck9iaiA9IHZhcmlhYmxlc1tjYXRlZ29yeV0uZmluZCh2ID0+IHYudmFyaWFibGUgPT09IHNlbGVjdGVkVmFyaWFibGUpO1xyXG4gICAgaWYgKHNlbGVjdGVkVmFyT2JqKSB7XHJcbiAgICAgIHNldFZhcmlhYmxlKHNlbGVjdGVkVmFyT2JqLnZhcmlhYmxlKTtcclxuICAgICAgc2V0TmFtZShzZWxlY3RlZFZhck9iai5uYW1lKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVBcHBseSA9ICgpID0+IHtcclxuICAgIFBhcGEucGFyc2UoJy9kYXRhL3Q0X3N1cnZleV9kYXRhX251bWVyaWNfYWxsX2NvbHVtbjIuY3N2Jywge1xyXG4gICAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YTtcclxuICAgICAgICBjb25zdCByZXNwb25zZUNvdW50czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goKHJvdzogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHJvd1tuYW1lXTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICByZXNwb25zZUNvdW50c1tyZXNwb25zZV0gPSAocmVzcG9uc2VDb3VudHNbcmVzcG9uc2VdIHx8IDApICsgMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb25EYXRhRmV0Y2hlZChyZXNwb25zZUNvdW50cywgeyBjYXRlZ29yeSwgdmFyaWFibGUsIG5hbWUgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItZHJvcGRvd25cIj5cclxuICAgICAgPHA+Q2hvb3NlIGZyb20gdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJpc3RpY3MsIG9yZ2FuaXplZCBieSBjYXRlZ29yaWVzLCB0byBjcmVhdGUgYSBzaW1wbGUgc3VtbWFyeSB0YWJsZS48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhdGVnb3J5XCI+Q2F0ZWdvcnk8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJjYXRlZ29yeVwiIHZhbHVlPXtjYXRlZ29yeX0gb25DaGFuZ2U9e2hhbmRsZUNhdGVnb3J5Q2hhbmdlfT5cclxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0KSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjYXR9IHZhbHVlPXtjYXR9PntjYXR9PC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tZ3JvdXBcIj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInZhcmlhYmxlXCI+VmFyaWFibGU8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJ2YXJpYWJsZVwiIHZhbHVlPXt2YXJpYWJsZX0gb25DaGFuZ2U9e2hhbmRsZVZhcmlhYmxlQ2hhbmdlfT5cclxuICAgICAgICAgIHt2YXJpYWJsZXNbY2F0ZWdvcnldPy5tYXAoKHZhck9iaikgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17dmFyT2JqLnZhcmlhYmxlfSB2YWx1ZT17dmFyT2JqLnZhcmlhYmxlfT57dmFyT2JqLnZhcmlhYmxlfTwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFwcGx5fSBjbGFzc05hbWU9XCJhcHBseS1idXR0b25cIj5BcHBseTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckRyb3Bkb3duOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUGFwYSIsIkZpbHRlckRyb3Bkb3duIiwib25EYXRhRmV0Y2hlZCIsInZhcmlhYmxlcyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwic2V0VmFyaWFibGVzIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInZhcmlhYmxlIiwic2V0VmFyaWFibGUiLCJuYW1lIiwic2V0TmFtZSIsInBhcnNlIiwiZG93bmxvYWQiLCJoZWFkZXIiLCJjb21wbGV0ZSIsInJlc3VsdCIsImRhdGEiLCJjYXRlZ29yeVNldCIsIlNldCIsInZhcmlhYmxlTWFwIiwiZm9yRWFjaCIsInJvdyIsImFkZCIsInB1c2giLCJjYXRlZ29yaWVzQXJyYXkiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJoYW5kbGVDYXRlZ29yeUNoYW5nZSIsImV2ZW50Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlVmFyaWFibGVDaGFuZ2UiLCJzZWxlY3RlZFZhcmlhYmxlIiwic2VsZWN0ZWRWYXJPYmoiLCJmaW5kIiwidiIsImhhbmRsZUFwcGx5IiwicmVzcG9uc2VDb3VudHMiLCJyZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsIm9uQ2hhbmdlIiwibWFwIiwiY2F0Iiwib3B0aW9uIiwidmFyT2JqIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/FilterDropdown.tsx\n"));

/***/ })

});