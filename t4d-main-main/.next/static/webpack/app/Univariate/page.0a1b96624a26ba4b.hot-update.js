"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Univariate/page",{

/***/ "(app-pages-browser)/./components/Univariate.tsx":
/*!***********************************!*\
  !*** ./components/Univariate.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_VerticalChart_VerticalChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/VerticalChart/VerticalChart */ \"(app-pages-browser)/./components/VerticalChart/VerticalChart.tsx\");\n/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterDropdown */ \"(app-pages-browser)/./components/FilterDropdown.tsx\");\n/* harmony import */ var _components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/InfoBox/InfoBox */ \"(app-pages-browser)/./components/InfoBox/InfoBox.tsx\");\n/* harmony import */ var _components_univariate_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/univariate.scss */ \"(app-pages-browser)/./components/univariate.scss\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UnivariateAnalysis = (param)=>{\n    let { menuSelectedOptions, toggleState, setIsBtwYearLoading } = param;\n    _s();\n    const [processedVerticalChartData, setProcessedVerticalChartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        labels: [],\n        datasets: []\n    });\n    const [tableData, setTableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [variableData, setVariableData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [selectedLabel, setSelectedLabel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleApplyFilterData = (variableData, selectedLabel)=>{\n        setVariableData(variableData);\n        setSelectedLabel(selectedLabel);\n        const totalResponses = Object.values(variableData).reduce((sum, value)=>sum + value, 0);\n        const tableData = Object.entries(variableData).map((param)=>{\n            let [response, count] = param;\n            return {\n                variable: response,\n                count,\n                share: count / totalResponses * 100\n            };\n        });\n        setTableData(tableData);\n        const chartData = {\n            labels: Object.keys(variableData),\n            datasets: [\n                {\n                    label: \"Percentage\",\n                    data: Object.values(variableData).map((value)=>value / totalResponses * 100),\n                    backgroundColor: \"rgba(75, 192, 192, 0.6)\",\n                    borderColor: \"rgba(75, 192, 192, 1)\",\n                    borderWidth: 1,\n                    barThickness: 70\n                }\n            ]\n        };\n        setProcessedVerticalChartData(chartData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"betweenYear\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box SegmentAverage\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterDropdown__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            onDataFetched: handleApplyFilterData\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: selectedLabel ? \"Variable: \".concat(selectedLabel.variable) : \"No data available\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box ChartContainer\",\n                    children: Object.keys(variableData).length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_VerticalChart_VerticalChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        chartData: processedVerticalChartData,\n                        title: \"Variable: \".concat(selectedLabel === null || selectedLabel === void 0 ? void 0 : selectedLabel.variable),\n                        isStacked: true,\n                        showLegend: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No data available\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"box TableContainer\",\n                    children: tableData.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Variable\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Total\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Share (%)\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: tableData.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: row.variable\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: row.count\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: row.share.toFixed(2)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No data available\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\Univariate.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UnivariateAnalysis, \"7O1ZsqlcRXvyjf/YuiL6nqgIu6s=\");\n_c = UnivariateAnalysis;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UnivariateAnalysis);\nvar _c;\n$RefreshReg$(_c, \"UnivariateAnalysis\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVW5pdmFyaWF0ZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNzQztBQUVoQztBQUNJO0FBRWI7QUFFckMsTUFBTUsscUJBQTJJO1FBQUMsRUFBRUMsbUJBQW1CLEVBQUVDLFdBQVcsRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3pNLE1BQU0sQ0FBQ0MsNEJBQTRCQyw4QkFBOEIsR0FBR1QsK0NBQVFBLENBQWlCO1FBQUVVLFFBQVEsRUFBRTtRQUFFQyxVQUFVLEVBQUU7SUFBQztJQUN4SCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQWlCLEVBQUU7SUFDN0QsTUFBTSxDQUFDYyxjQUFjQyxnQkFBZ0IsR0FBR2YsK0NBQVFBLENBQTRCLENBQUM7SUFDN0UsTUFBTSxDQUFDZ0IsZUFBZUMsaUJBQWlCLEdBQUdqQiwrQ0FBUUEsQ0FBOEQ7SUFFaEgsTUFBTWtCLHdCQUF3QixDQUFDSixjQUF5Q0U7UUFDdEVELGdCQUFnQkQ7UUFDaEJHLGlCQUFpQkQ7UUFFakIsTUFBTUcsaUJBQWlCQyxPQUFPQyxNQUFNLENBQUNQLGNBQWNRLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxRQUFVRCxNQUFNQyxPQUFPO1FBQ3ZGLE1BQU1aLFlBQVlRLE9BQU9LLE9BQU8sQ0FBQ1gsY0FBY1ksR0FBRyxDQUFDO2dCQUFDLENBQUNDLFVBQVVDLE1BQU07bUJBQU07Z0JBQ3pFQyxVQUFVRjtnQkFDVkM7Z0JBQ0FFLE9BQU8sUUFBU1gsaUJBQWtCO1lBQ3BDOztRQUVBTixhQUFhRDtRQUViLE1BQU1tQixZQUFZO1lBQ2hCckIsUUFBUVUsT0FBT1ksSUFBSSxDQUFDbEI7WUFDcEJILFVBQVU7Z0JBQ1I7b0JBQ0VzQixPQUFPO29CQUNQQyxNQUFNZCxPQUFPQyxNQUFNLENBQUNQLGNBQWNZLEdBQUcsQ0FBQ0YsQ0FBQUEsUUFBUyxRQUFTTCxpQkFBa0I7b0JBQzFFZ0IsaUJBQWlCO29CQUNqQkMsYUFBYTtvQkFDYkMsYUFBYTtvQkFDYkMsY0FBYztnQkFDaEI7YUFDRDtRQUNIO1FBQ0E3Qiw4QkFBOEJzQjtJQUNoQztJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDdEMsdURBQWNBOzRCQUFDdUMsZUFBZXZCOzs7Ozs7c0NBQy9CLDhEQUFDZixtRUFBT0E7c0NBQ04sNEVBQUN1QzswQ0FBRzFCLGdCQUFnQixhQUFvQyxPQUF2QkEsY0FBY2EsUUFBUSxJQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHaEUsOERBQUNVO29CQUFJQyxXQUFVOzhCQUNacEIsT0FBT1ksSUFBSSxDQUFDbEIsY0FBYzZCLE1BQU0sR0FBRyxrQkFDbEMsOERBQUMxQywrRUFBdUJBO3dCQUN0QjhCLFdBQVd2Qjt3QkFDWG9DLE9BQU8sYUFBcUMsT0FBeEI1QiwwQkFBQUEsb0NBQUFBLGNBQWVhLFFBQVE7d0JBQzNDZ0IsV0FBVzt3QkFDWEMsWUFBWTs7Ozs7a0RBR2QsOERBQUMzQyxtRUFBT0E7a0NBQ04sNEVBQUN1QztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFJVCw4REFBQ0g7b0JBQUlDLFdBQVU7OEJBQ1o1QixVQUFVK0IsTUFBTSxHQUFHLGtCQUNsQiw4REFBQ0k7OzBDQUNDLDhEQUFDQzswQ0FDQyw0RUFBQ0M7O3NEQUNDLDhEQUFDQztzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1IsOERBQUNDOzBDQUNFdkMsVUFBVWMsR0FBRyxDQUFDLENBQUMwQixLQUFLQyxzQkFDbkIsOERBQUNKOzswREFDQyw4REFBQ0s7MERBQUlGLElBQUl2QixRQUFROzs7Ozs7MERBQ2pCLDhEQUFDeUI7MERBQUlGLElBQUl4QixLQUFLOzs7Ozs7MERBQ2QsOERBQUMwQjswREFBSUYsSUFBSXRCLEtBQUssQ0FBQ3lCLE9BQU8sQ0FBQzs7Ozs7Ozt1Q0FIaEJGOzs7Ozs7Ozs7Ozs7Ozs7a0RBU2YsOERBQUNsRCxtRUFBT0E7a0NBQ04sNEVBQUN1QztzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pCO0dBdkZNdEM7S0FBQUE7QUF5Rk4sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VuaXZhcmlhdGUudHN4P2ZkM2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVmVydGljYWxTdGFja2VkQmFyQ2hhcnQgZnJvbSAnQGNvbXBvbmVudHMvVmVydGljYWxDaGFydC9WZXJ0aWNhbENoYXJ0JztcbmltcG9ydCB7IHByZXBhcmVWZXJ0aWNhbENoYXJ0RGF0YSwgcHJlcGFyZVRhYmxlRGF0YSB9IGZyb20gJy4vVW5pdmFyaWF0ZUNhbGMnO1xuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gJy4vRmlsdGVyRHJvcGRvd24nO1xuaW1wb3J0IEluZm9ib3ggZnJvbSAnQGNvbXBvbmVudHMvSW5mb0JveC9JbmZvQm94JztcbmltcG9ydCB7IE9wdGlvbiwgQ2hhcnREYXRhUHJvcHMsIFRhYmxlRGF0YVJvdyB9IGZyb20gJy4vVW5pdmFyaWF0ZVR5cGVUeXBlcyc7XG5pbXBvcnQgXCJAY29tcG9uZW50cy91bml2YXJpYXRlLnNjc3NcIjtcblxuY29uc3QgVW5pdmFyaWF0ZUFuYWx5c2lzOiBSZWFjdC5GQzx7IG1lbnVTZWxlY3RlZE9wdGlvbnM6IE9wdGlvbltdLCB0b2dnbGVTdGF0ZTogYm9vbGVhbiwgc2V0SXNCdHdZZWFyTG9hZGluZzogKGlzTG9hZGluZzogYm9vbGVhbikgPT4gdm9pZCB9PiA9ICh7IG1lbnVTZWxlY3RlZE9wdGlvbnMsIHRvZ2dsZVN0YXRlLCBzZXRJc0J0d1llYXJMb2FkaW5nIH0pID0+IHtcbiAgY29uc3QgW3Byb2Nlc3NlZFZlcnRpY2FsQ2hhcnREYXRhLCBzZXRQcm9jZXNzZWRWZXJ0aWNhbENoYXJ0RGF0YV0gPSB1c2VTdGF0ZTxDaGFydERhdGFQcm9wcz4oeyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfSk7XG4gIGNvbnN0IFt0YWJsZURhdGEsIHNldFRhYmxlRGF0YV0gPSB1c2VTdGF0ZTxUYWJsZURhdGFSb3dbXT4oW10pO1xuICBjb25zdCBbdmFyaWFibGVEYXRhLCBzZXRWYXJpYWJsZURhdGFdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBudW1iZXIgfT4oe30pO1xuICBjb25zdCBbc2VsZWN0ZWRMYWJlbCwgc2V0U2VsZWN0ZWRMYWJlbF0gPSB1c2VTdGF0ZTx7IGNhdGVnb3J5OiBzdHJpbmc7IHZhcmlhYmxlOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9IHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQXBwbHlGaWx0ZXJEYXRhID0gKHZhcmlhYmxlRGF0YTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSwgc2VsZWN0ZWRMYWJlbDogeyBjYXRlZ29yeTogc3RyaW5nOyB2YXJpYWJsZTogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICAgIHNldFZhcmlhYmxlRGF0YSh2YXJpYWJsZURhdGEpO1xuICAgIHNldFNlbGVjdGVkTGFiZWwoc2VsZWN0ZWRMYWJlbCk7XG5cbiAgICBjb25zdCB0b3RhbFJlc3BvbnNlcyA9IE9iamVjdC52YWx1ZXModmFyaWFibGVEYXRhKS5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKTtcbiAgICBjb25zdCB0YWJsZURhdGEgPSBPYmplY3QuZW50cmllcyh2YXJpYWJsZURhdGEpLm1hcCgoW3Jlc3BvbnNlLCBjb3VudF0pID0+ICh7XG4gICAgICB2YXJpYWJsZTogcmVzcG9uc2UsXG4gICAgICBjb3VudCxcbiAgICAgIHNoYXJlOiAoY291bnQgLyB0b3RhbFJlc3BvbnNlcykgKiAxMDAsXG4gICAgfSkpO1xuXG4gICAgc2V0VGFibGVEYXRhKHRhYmxlRGF0YSk7XG5cbiAgICBjb25zdCBjaGFydERhdGEgPSB7XG4gICAgICBsYWJlbHM6IE9iamVjdC5rZXlzKHZhcmlhYmxlRGF0YSksXG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6ICdQZXJjZW50YWdlJyxcbiAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHZhcmlhYmxlRGF0YSkubWFwKHZhbHVlID0+ICh2YWx1ZSAvIHRvdGFsUmVzcG9uc2VzKSAqIDEwMCksXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSg3NSwgMTkyLCAxOTIsIDAuNiknLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcbiAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICBiYXJUaGlja25lc3M6IDcwXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gICAgc2V0UHJvY2Vzc2VkVmVydGljYWxDaGFydERhdGEoY2hhcnREYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmV0d2VlblllYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggU2VnbWVudEF2ZXJhZ2VcIj5cbiAgICAgICAgICA8RmlsdGVyRHJvcGRvd24gb25EYXRhRmV0Y2hlZD17aGFuZGxlQXBwbHlGaWx0ZXJEYXRhfSAvPlxuICAgICAgICAgIDxJbmZvYm94PlxuICAgICAgICAgICAgPHA+e3NlbGVjdGVkTGFiZWwgPyBgVmFyaWFibGU6ICR7c2VsZWN0ZWRMYWJlbC52YXJpYWJsZX1gIDogXCJObyBkYXRhIGF2YWlsYWJsZVwifTwvcD5cbiAgICAgICAgICA8L0luZm9ib3g+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBDaGFydENvbnRhaW5lclwiPlxuICAgICAgICAgIHtPYmplY3Qua2V5cyh2YXJpYWJsZURhdGEpLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICA8VmVydGljYWxTdGFja2VkQmFyQ2hhcnRcbiAgICAgICAgICAgICAgY2hhcnREYXRhPXtwcm9jZXNzZWRWZXJ0aWNhbENoYXJ0RGF0YX1cbiAgICAgICAgICAgICAgdGl0bGU9e2BWYXJpYWJsZTogJHtzZWxlY3RlZExhYmVsPy52YXJpYWJsZX1gfVxuICAgICAgICAgICAgICBpc1N0YWNrZWQ9e3RydWV9XG4gICAgICAgICAgICAgIHNob3dMZWdlbmQ9e3RydWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SW5mb2JveD5cbiAgICAgICAgICAgICAgPHA+Tm8gZGF0YSBhdmFpbGFibGU8L3A+XG4gICAgICAgICAgICA8L0luZm9ib3g+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IFRhYmxlQ29udGFpbmVyXCI+XG4gICAgICAgICAge3RhYmxlRGF0YS5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgPHRhYmxlPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPlZhcmlhYmxlPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+U2hhcmUgKCUpPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RhYmxlRGF0YS5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cudmFyaWFibGV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuY291bnR9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntyb3cuc2hhcmUudG9GaXhlZCgyKX08L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxJbmZvYm94PlxuICAgICAgICAgICAgICA8cD5ObyBkYXRhIGF2YWlsYWJsZTwvcD5cbiAgICAgICAgICAgIDwvSW5mb2JveD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVW5pdmFyaWF0ZUFuYWx5c2lzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJWZXJ0aWNhbFN0YWNrZWRCYXJDaGFydCIsIkZpbHRlckRyb3Bkb3duIiwiSW5mb2JveCIsIlVuaXZhcmlhdGVBbmFseXNpcyIsIm1lbnVTZWxlY3RlZE9wdGlvbnMiLCJ0b2dnbGVTdGF0ZSIsInNldElzQnR3WWVhckxvYWRpbmciLCJwcm9jZXNzZWRWZXJ0aWNhbENoYXJ0RGF0YSIsInNldFByb2Nlc3NlZFZlcnRpY2FsQ2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJ0YWJsZURhdGEiLCJzZXRUYWJsZURhdGEiLCJ2YXJpYWJsZURhdGEiLCJzZXRWYXJpYWJsZURhdGEiLCJzZWxlY3RlZExhYmVsIiwic2V0U2VsZWN0ZWRMYWJlbCIsImhhbmRsZUFwcGx5RmlsdGVyRGF0YSIsInRvdGFsUmVzcG9uc2VzIiwiT2JqZWN0IiwidmFsdWVzIiwicmVkdWNlIiwic3VtIiwidmFsdWUiLCJlbnRyaWVzIiwibWFwIiwicmVzcG9uc2UiLCJjb3VudCIsInZhcmlhYmxlIiwic2hhcmUiLCJjaGFydERhdGEiLCJrZXlzIiwibGFiZWwiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsImJhclRoaWNrbmVzcyIsImRpdiIsImNsYXNzTmFtZSIsIm9uRGF0YUZldGNoZWQiLCJwIiwibGVuZ3RoIiwidGl0bGUiLCJpc1N0YWNrZWQiLCJzaG93TGVnZW5kIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInJvdyIsImluZGV4IiwidGQiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Univariate.tsx\n"));

/***/ })

});