"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1f24193df35a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2RhY2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxZjI0MTkzZGYzNWFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Univariate.tsx":
/*!***********************************!*\
  !*** ./components/Univariate.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_VerticalChart_VerticalChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/VerticalChart/VerticalChart */ \"(app-pages-browser)/./components/VerticalChart/VerticalChart.tsx\");\n/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterDropdown */ \"(app-pages-browser)/./components/FilterDropdown.tsx\");\n/* harmony import */ var _components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/InfoBox/InfoBox */ \"(app-pages-browser)/./components/InfoBox/InfoBox.tsx\");\n/* harmony import */ var _components_univariate_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/univariate.scss */ \"(app-pages-browser)/./components/univariate.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UnivariateAnalysis = (param)=>{\n    let { menuSelectedOptions, toggleState, setIsBtwYearLoading } = param;\n    _s();\n    const [processedVerticalChartData, setProcessedVerticalChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variableData, setVariableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [selectedLabel, setSelectedLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleApplyFilterData = (variableData, selectedLabel)=>{\n        setVariableData(variableData);\n        setSelectedLabel(selectedLabel);\n        const totalResponses = Object.values(variableData).reduce((sum, value)=>sum + value, 0);\n        const tableData = Object.entries(variableData).map((param)=>{\n            let [response, count] = param;\n            return {\n                variable: response,\n                count,\n                share: count / totalResponses * 100\n            };\n        });\n        setTableData(tableData);\n        const chartData = {\n            labels: Object.keys(variableData),\n            datasets: [\n                {\n                    label: \"Percentage\",\n                    data: Object.values(variableData).map((value)=>value / totalResponses * 100),\n                    backgroundColor: \"rgba(75, 192, 192, 0.6)\",\n                    borderColor: \"rgba(75, 192, 192, 1)\",\n                    borderWidth: 1,\n                    barThickness: 70\n                }\n            ]\n        };\n        setProcessedVerticalChartData(chartData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"betweenYear\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box SegmentAverage\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterDropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onDataFetched: handleApplyFilterData\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: selectedLabel ? \"Variable: \".concat(selectedLabel.variable) : \"No data available\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box ChartContainer\",\n                    children: Object.keys(variableData).length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VerticalChart_VerticalChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        chartData: processedVerticalChartData,\n                        title: \"Variable: \".concat(selectedLabel === null || selectedLabel === void 0 ? void 0 : selectedLabel.variable),\n                        isStacked: true,\n                        showLegend: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No data available\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box TableContainer\",\n                    children: tableData.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Variable\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Total\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Share (%)\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: tableData.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: row.variable\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: row.count\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: row.share.toFixed(2)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No data available\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UnivariateAnalysis, \"7O1ZsqlcRXvyjf/YuiL6nqgIu6s=\");\n_c = UnivariateAnalysis;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnivariateAnalysis);\nvar _c;\n$RefreshReg$(_c, \"UnivariateAnalysis\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVW5pdmFyaWF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNzQztBQUVoQztBQUNJO0FBRWI7QUFFckMsTUFBTUsscUJBQTJJO1FBQUMsRUFBRUMsbUJBQW1CLEVBQUVDLFdBQVcsRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3pNLE1BQU0sQ0FBQ0MsNEJBQTRCQyw4QkFBOEIsR0FBR1QsK0NBQVFBLENBQWlCO1FBQUVVLFFBQVEsRUFBRTtRQUFFQyxVQUFVLEVBQUU7SUFBQztJQUN4SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQWlCLEVBQUU7SUFDN0QsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQTRCLENBQUM7SUFDN0UsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBOEQ7SUFFaEgsTUFBTWtCLHdCQUF3QixDQUFDSixjQUF5Q0U7UUFDdEVELGdCQUFnQkQ7UUFDaEJHLGlCQUFpQkQ7UUFFakIsTUFBTUcsaUJBQWlCQyxPQUFPQyxNQUFNLENBQUNQLGNBQWNRLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxRQUFVRCxNQUFNQyxPQUFPO1FBQ3ZGLE1BQU1aLFlBQVlRLE9BQU9LLE9BQU8sQ0FBQ1gsY0FBY1ksR0FBRyxDQUFDO2dCQUFDLENBQUNDLFVBQVVDLE1BQU07bUJBQU07Z0JBQ3pFQyxVQUFVRjtnQkFDVkM7Z0JBQ0FFLE9BQU8sUUFBU1gsaUJBQWtCO1lBQ3BDOztRQUVBTixhQUFhRDtRQUViLE1BQU1tQixZQUFZO1lBQ2hCckIsUUFBUVUsT0FBT1ksSUFBSSxDQUFDbEI7WUFDcEJILFVBQVU7Z0JBQ1I7b0JBQ0VzQixPQUFPO29CQUNQQyxNQUFNZCxPQUFPQyxNQUFNLENBQUNQLGNBQWNZLEdBQUcsQ0FBQ0YsQ0FBQUEsUUFBUyxRQUFTTCxpQkFBa0I7b0JBQzFFZ0IsaUJBQWlCO29CQUNqQkMsYUFBYTtvQkFDYkMsYUFBYTtvQkFDYkMsY0FBYztnQkFDaEI7YUFDRDtRQUNIO1FBQ0E3Qiw4QkFBOEJzQjtJQUNoQztJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDdEMsdURBQWNBOzRCQUFDdUMsZUFBZXZCOzs7Ozs7c0NBQy9CLDhEQUFDZixtRUFBT0E7c0NBQ04sNEVBQUN1QzswQ0FBRzFCLGdCQUFnQixhQUFvQyxPQUF2QkEsY0FBY2EsUUFBUSxJQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHaEUsOERBQUNVO29CQUFJQyxXQUFVOzhCQUNacEIsT0FBT1ksSUFBSSxDQUFDbEIsY0FBYzZCLE1BQU0sR0FBRyxrQkFDbEMsOERBQUMxQywrRUFBdUJBO3dCQUN0QjhCLFdBQVd2Qjt3QkFDWG9DLE9BQU8sYUFBcUMsT0FBeEI1QiwwQkFBQUEsb0NBQUFBLGNBQWVhLFFBQVE7d0JBQzNDZ0IsV0FBVzt3QkFDWEMsWUFBWTs7Ozs7a0RBR2QsOERBQUMzQyxtRUFBT0E7a0NBQ04sNEVBQUN1QztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJVCw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ1o1QixVQUFVK0IsTUFBTSxHQUFHLGtCQUNsQiw4REFBQ0k7OzBDQUNDLDhEQUFDQzswQ0FDQyw0RUFBQ0M7O3NEQUNDLDhEQUFDQztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNDOzBDQUNFdkMsVUFBVWMsR0FBRyxDQUFDLENBQUMwQixLQUFLQyxzQkFDbkIsOERBQUNKOzswREFDQyw4REFBQ0s7MERBQUlGLElBQUl2QixRQUFROzs7Ozs7MERBQ2pCLDhEQUFDeUI7MERBQUlGLElBQUl4QixLQUFLOzs7Ozs7MERBQ2QsOERBQUMwQjswREFBSUYsSUFBSXRCLEtBQUssQ0FBQ3lCLE9BQU8sQ0FBQzs7Ozs7Ozt1Q0FIaEJGOzs7Ozs7Ozs7Ozs7Ozs7a0RBU2YsOERBQUNsRCxtRUFBT0E7a0NBQ04sNEVBQUN1QztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBdkZNdEM7S0FBQUE7QUF5Rk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VuaXZhcmlhdGUudHN4P2ZkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmVydGljYWxTdGFja2VkQmFyQ2hhcnQgZnJvbSAnQGNvbXBvbmVudHMvVmVydGljYWxDaGFydC9WZXJ0aWNhbENoYXJ0JztcbmltcG9ydCB7IHByZXBhcmVWZXJ0aWNhbENoYXJ0RGF0YSwgcHJlcGFyZVRhYmxlRGF0YSB9IGZyb20gJy4vVW5pdmFyaWF0ZUNhbGMnO1xuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gJy4vRmlsdGVyRHJvcGRvd24nO1xuaW1wb3J0IEluZm9ib3ggZnJvbSAnQGNvbXBvbmVudHMvSW5mb0JveC9JbmZvQm94JztcbmltcG9ydCB7IE9wdGlvbiwgQ2hhcnREYXRhUHJvcHMsIFRhYmxlRGF0YVJvdyB9IGZyb20gJy4vVW5pdmFyaWF0ZVR5cGUnO1xuaW1wb3J0IFwiQGNvbXBvbmVudHMvdW5pdmFyaWF0ZS5zY3NzXCI7XG5cbmNvbnN0IFVuaXZhcmlhdGVBbmFseXNpczogUmVhY3QuRkM8eyBtZW51U2VsZWN0ZWRPcHRpb25zOiBPcHRpb25bXSwgdG9nZ2xlU3RhdGU6IGJvb2xlYW4sIHNldElzQnR3WWVhckxvYWRpbmc6IChpc0xvYWRpbmc6IGJvb2xlYW4pID0+IHZvaWQgfT4gPSAoeyBtZW51U2VsZWN0ZWRPcHRpb25zLCB0b2dnbGVTdGF0ZSwgc2V0SXNCdHdZZWFyTG9hZGluZyB9KSA9PiB7XG4gIGNvbnN0IFtwcm9jZXNzZWRWZXJ0aWNhbENoYXJ0RGF0YSwgc2V0UHJvY2Vzc2VkVmVydGljYWxDaGFydERhdGFdID0gdXNlU3RhdGU8Q2hhcnREYXRhUHJvcHM+KHsgbGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdIH0pO1xuICBjb25zdCBbdGFibGVEYXRhLCBzZXRUYWJsZURhdGFdID0gdXNlU3RhdGU8VGFibGVEYXRhUm93W10+KFtdKTtcbiAgY29uc3QgW3ZhcmlhYmxlRGF0YSwgc2V0VmFyaWFibGVEYXRhXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+KHt9KTtcbiAgY29uc3QgW3NlbGVjdGVkTGFiZWwsIHNldFNlbGVjdGVkTGFiZWxdID0gdXNlU3RhdGU8eyBjYXRlZ29yeTogc3RyaW5nOyB2YXJpYWJsZTogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUFwcGx5RmlsdGVyRGF0YSA9ICh2YXJpYWJsZURhdGE6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0sIHNlbGVjdGVkTGFiZWw6IHsgY2F0ZWdvcnk6IHN0cmluZzsgdmFyaWFibGU6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0pID0+IHtcbiAgICBzZXRWYXJpYWJsZURhdGEodmFyaWFibGVEYXRhKTtcbiAgICBzZXRTZWxlY3RlZExhYmVsKHNlbGVjdGVkTGFiZWwpO1xuXG4gICAgY29uc3QgdG90YWxSZXNwb25zZXMgPSBPYmplY3QudmFsdWVzKHZhcmlhYmxlRGF0YSkucmVkdWNlKChzdW0sIHZhbHVlKSA9PiBzdW0gKyB2YWx1ZSwgMCk7XG4gICAgY29uc3QgdGFibGVEYXRhID0gT2JqZWN0LmVudHJpZXModmFyaWFibGVEYXRhKS5tYXAoKFtyZXNwb25zZSwgY291bnRdKSA9PiAoe1xuICAgICAgdmFyaWFibGU6IHJlc3BvbnNlLFxuICAgICAgY291bnQsXG4gICAgICBzaGFyZTogKGNvdW50IC8gdG90YWxSZXNwb25zZXMpICogMTAwLFxuICAgIH0pKTtcblxuICAgIHNldFRhYmxlRGF0YSh0YWJsZURhdGEpO1xuXG4gICAgY29uc3QgY2hhcnREYXRhID0ge1xuICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyh2YXJpYWJsZURhdGEpLFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiAnUGVyY2VudGFnZScsXG4gICAgICAgICAgZGF0YTogT2JqZWN0LnZhbHVlcyh2YXJpYWJsZURhdGEpLm1hcCh2YWx1ZSA9PiAodmFsdWUgLyB0b3RhbFJlc3BvbnNlcykgKiAxMDApLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjYpJyxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgYmFyVGhpY2tuZXNzOiA3MFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIHNldFByb2Nlc3NlZFZlcnRpY2FsQ2hhcnREYXRhKGNoYXJ0RGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naG9tZSc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJldHdlZW5ZZWFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IFNlZ21lbnRBdmVyYWdlXCI+XG4gICAgICAgICAgPEZpbHRlckRyb3Bkb3duIG9uRGF0YUZldGNoZWQ9e2hhbmRsZUFwcGx5RmlsdGVyRGF0YX0gLz5cbiAgICAgICAgICA8SW5mb2JveD5cbiAgICAgICAgICAgIDxwPntzZWxlY3RlZExhYmVsID8gYFZhcmlhYmxlOiAke3NlbGVjdGVkTGFiZWwudmFyaWFibGV9YCA6IFwiTm8gZGF0YSBhdmFpbGFibGVcIn08L3A+XG4gICAgICAgICAgPC9JbmZvYm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggQ2hhcnRDb250YWluZXJcIj5cbiAgICAgICAgICB7T2JqZWN0LmtleXModmFyaWFibGVEYXRhKS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPFZlcnRpY2FsU3RhY2tlZEJhckNoYXJ0XG4gICAgICAgICAgICAgIGNoYXJ0RGF0YT17cHJvY2Vzc2VkVmVydGljYWxDaGFydERhdGF9XG4gICAgICAgICAgICAgIHRpdGxlPXtgVmFyaWFibGU6ICR7c2VsZWN0ZWRMYWJlbD8udmFyaWFibGV9YH1cbiAgICAgICAgICAgICAgaXNTdGFja2VkPXt0cnVlfVxuICAgICAgICAgICAgICBzaG93TGVnZW5kPXt0cnVlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEluZm9ib3g+XG4gICAgICAgICAgICAgIDxwPk5vIGRhdGEgYXZhaWxhYmxlPC9wPlxuICAgICAgICAgICAgPC9JbmZvYm94PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBUYWJsZUNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0YWJsZURhdGEubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aD5WYXJpYWJsZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPlNoYXJlICglKTwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgIHt0YWJsZURhdGEubWFwKChyb3csIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LnZhcmlhYmxlfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LmNvdW50fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cm93LnNoYXJlLnRvRml4ZWQoMil9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW5mb2JveD5cbiAgICAgICAgICAgICAgPHA+Tm8gZGF0YSBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICA8L0luZm9ib3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVuaXZhcmlhdGVBbmFseXNpcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiVmVydGljYWxTdGFja2VkQmFyQ2hhcnQiLCJGaWx0ZXJEcm9wZG93biIsIkluZm9ib3giLCJVbml2YXJpYXRlQW5hbHlzaXMiLCJtZW51U2VsZWN0ZWRPcHRpb25zIiwidG9nZ2xlU3RhdGUiLCJzZXRJc0J0d1llYXJMb2FkaW5nIiwicHJvY2Vzc2VkVmVydGljYWxDaGFydERhdGEiLCJzZXRQcm9jZXNzZWRWZXJ0aWNhbENoYXJ0RGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwidGFibGVEYXRhIiwic2V0VGFibGVEYXRhIiwidmFyaWFibGVEYXRhIiwic2V0VmFyaWFibGVEYXRhIiwic2VsZWN0ZWRMYWJlbCIsInNldFNlbGVjdGVkTGFiZWwiLCJoYW5kbGVBcHBseUZpbHRlckRhdGEiLCJ0b3RhbFJlc3BvbnNlcyIsIk9iamVjdCIsInZhbHVlcyIsInJlZHVjZSIsInN1bSIsInZhbHVlIiwiZW50cmllcyIsIm1hcCIsInJlc3BvbnNlIiwiY291bnQiLCJ2YXJpYWJsZSIsInNoYXJlIiwiY2hhcnREYXRhIiwia2V5cyIsImxhYmVsIiwiZGF0YSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJiYXJUaGlja25lc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRhdGFGZXRjaGVkIiwicCIsImxlbmd0aCIsInRpdGxlIiwiaXNTdGFja2VkIiwic2hvd0xlZ2VuZCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJyb3ciLCJpbmRleCIsInRkIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Univariate.tsx\n"));

/***/ })

});