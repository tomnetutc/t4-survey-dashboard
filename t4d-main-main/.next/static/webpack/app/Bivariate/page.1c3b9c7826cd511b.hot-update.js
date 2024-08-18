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

/***/ "(app-pages-browser)/./components/BivariateChart.tsx":
/*!***************************************!*\
  !*** ./components/BivariateChart.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BivariateChart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BivariateChart.scss */ \"(app-pages-browser)/./components/BivariateChart.scss\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"(app-pages-browser)/./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"(app-pages-browser)/./node_modules/chart.js/dist/chart.js\");\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst BivariateBarChart = (param)=>{\n    let { chartData, title, isStacked = false, showLegend = true } = param;\n    if (!chartData || !chartData.datasets || chartData.datasets.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No data available\"\n        }, void 0, false, {\n            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\BivariateChart.tsx\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, undefined);\n    }\n    const options = {\n        indexAxis: \"x\",\n        elements: {\n            bar: {\n                borderWidth: 2\n            }\n        },\n        responsive: true,\n        maintainAspectRatio: false,\n        plugins: {\n            tooltip: {\n                callbacks: {\n                    label: function(context) {\n                        let label = context.dataset.label || \"\";\n                        let value = context.raw !== undefined ? context.raw : context.parsed.y;\n                        if (label) {\n                            label += \": \";\n                        }\n                        label += value % 1 === 0 ? \"\".concat(value, \".0\") : value.toString();\n                        return label;\n                    }\n                }\n            },\n            legend: {\n                display: showLegend,\n                position: \"top\",\n                align: \"center\",\n                labels: {\n                    boxWidth: 10,\n                    boxHeight: 10\n                }\n            },\n            title: {\n                display: true,\n                text: title,\n                font: {\n                    size: 20\n                }\n            }\n        },\n        scales: {\n            x: {\n                grid: {\n                    display: false,\n                    drawBorder: false\n                },\n                stacked: isStacked,\n                ticks: {\n                    maxRotation: 45,\n                    minRotation: 45,\n                    autoSkip: false\n                }\n            },\n            y: {\n                stacked: isStacked,\n                ticks: {\n                    callback: function(value) {\n                        return value + \"%\";\n                    }\n                }\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"chart-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"chart\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                data: chartData,\n                options: options\n            }, void 0, false, {\n                fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\BivariateChart.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\BivariateChart.tsx\",\n            lineNumber: 91,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\T4d\\\\t4d-main-main\\\\components\\\\BivariateChart.tsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BivariateBarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BivariateBarChart);\nvar _c;\n$RefreshReg$(_c, \"BivariateBarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQml2YXJpYXRlQ2hhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDTztBQUNzRTtBQUU1R0csMkNBQU9BLENBQUNPLFFBQVEsQ0FBQ04sbURBQWFBLEVBQUVDLGlEQUFXQSxFQUFFQyxnREFBVUEsRUFBRUMsMkNBQUtBLEVBQUVDLDZDQUFPQSxFQUFFQyw0Q0FBTUE7QUFTL0UsTUFBTUUsb0JBQXNEO1FBQUMsRUFDM0RDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxZQUFZLEtBQUssRUFDakJDLGFBQWEsSUFBSSxFQUNsQjtJQUNDLElBQUksQ0FBQ0gsYUFBYSxDQUFDQSxVQUFVSSxRQUFRLElBQUlKLFVBQVVJLFFBQVEsQ0FBQ0MsTUFBTSxLQUFLLEdBQUc7UUFDeEUscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLE1BQU1DLFVBQVU7UUFDZEMsV0FBVztRQUNYQyxVQUFVO1lBQ1JDLEtBQUs7Z0JBQ0hDLGFBQWE7WUFDZjtRQUNGO1FBQ0FDLFlBQVk7UUFDWkMscUJBQXFCO1FBQ3JCQyxTQUFTO1lBQ1BDLFNBQVM7Z0JBQ1BDLFdBQVc7b0JBQ1RDLE9BQU8sU0FBVUMsT0FBWTt3QkFDM0IsSUFBSUQsUUFBUUMsUUFBUUMsT0FBTyxDQUFDRixLQUFLLElBQUk7d0JBQ3JDLElBQUlHLFFBQVFGLFFBQVFHLEdBQUcsS0FBS0MsWUFBWUosUUFBUUcsR0FBRyxHQUFHSCxRQUFRSyxNQUFNLENBQUNDLENBQUM7d0JBQ3RFLElBQUlQLE9BQU87NEJBQ1RBLFNBQVM7d0JBQ1g7d0JBQ0FBLFNBQVNHLFFBQVEsTUFBTSxJQUFJLEdBQVMsT0FBTkEsT0FBTSxRQUFNQSxNQUFNSyxRQUFRO3dCQUN4RCxPQUFPUjtvQkFDVDtnQkFDRjtZQUNGO1lBQ0FTLFFBQVE7Z0JBQ05DLFNBQVN4QjtnQkFDVHlCLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFFBQVE7b0JBQ05DLFVBQVU7b0JBQ1ZDLFdBQVc7Z0JBQ2I7WUFDRjtZQUNBL0IsT0FBTztnQkFDTDBCLFNBQVM7Z0JBQ1RNLE1BQU1oQztnQkFDTmlDLE1BQU07b0JBQ0pDLE1BQU07Z0JBQ1I7WUFDRjtRQUNGO1FBQ0FDLFFBQVE7WUFDTkMsR0FBRztnQkFDREMsTUFBTTtvQkFDSlgsU0FBUztvQkFDVFksWUFBWTtnQkFDZDtnQkFDQUMsU0FBU3RDO2dCQUNUdUMsT0FBTztvQkFDTEMsYUFBYTtvQkFDYkMsYUFBYTtvQkFDYkMsVUFBVTtnQkFDWjtZQUNGO1lBQ0FwQixHQUFHO2dCQUNEZ0IsU0FBU3RDO2dCQUNUdUMsT0FBTztvQkFDTEksVUFBVSxTQUFVekIsS0FBSzt3QkFDdkIsT0FBT0EsUUFBUTtvQkFDakI7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2Q7UUFBSXdDLFdBQVU7a0JBQ2IsNEVBQUN4QztZQUFJd0MsV0FBVTtzQkFDYiw0RUFBQ3pELGdEQUFHQTtnQkFBQzBELE1BQU0vQztnQkFBV08sU0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdkM7S0FqRk1SO0FBbUZOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CaXZhcmlhdGVDaGFydC50c3g/OThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vQml2YXJpYXRlQ2hhcnQuc2Nzcyc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlLCBCYXJFbGVtZW50LCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kIH0gZnJvbSAnY2hhcnQuanMnO1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSwgQmFyRWxlbWVudCwgVGl0bGUsIFRvb2x0aXAsIExlZ2VuZCk7XHJcblxyXG5pbnRlcmZhY2UgQml2YXJpYXRlQmFyQ2hhcnRQcm9wcyB7XHJcbiAgY2hhcnREYXRhOiBhbnk7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBpc1N0YWNrZWQ/OiBib29sZWFuO1xyXG4gIHNob3dMZWdlbmQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBCaXZhcmlhdGVCYXJDaGFydDogUmVhY3QuRkM8Qml2YXJpYXRlQmFyQ2hhcnRQcm9wcz4gPSAoe1xyXG4gIGNoYXJ0RGF0YSxcclxuICB0aXRsZSxcclxuICBpc1N0YWNrZWQgPSBmYWxzZSxcclxuICBzaG93TGVnZW5kID0gdHJ1ZSxcclxufSkgPT4ge1xyXG4gIGlmICghY2hhcnREYXRhIHx8ICFjaGFydERhdGEuZGF0YXNldHMgfHwgY2hhcnREYXRhLmRhdGFzZXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxkaXY+Tm8gZGF0YSBhdmFpbGFibGU8L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgaW5kZXhBeGlzOiAneCcgYXMgY29uc3QsXHJcbiAgICBlbGVtZW50czoge1xyXG4gICAgICBiYXI6IHtcclxuICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICBwbHVnaW5zOiB7XHJcbiAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICAgIGxhYmVsOiBmdW5jdGlvbiAoY29udGV4dDogYW55KSB7XHJcbiAgICAgICAgICAgIGxldCBsYWJlbCA9IGNvbnRleHQuZGF0YXNldC5sYWJlbCB8fCAnJztcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gY29udGV4dC5yYXcgIT09IHVuZGVmaW5lZCA/IGNvbnRleHQucmF3IDogY29udGV4dC5wYXJzZWQueTtcclxuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgbGFiZWwgKz0gJzogJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsYWJlbCArPSB2YWx1ZSAlIDEgPT09IDAgPyBgJHt2YWx1ZX0uMGAgOiB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IHNob3dMZWdlbmQsXHJcbiAgICAgICAgcG9zaXRpb246ICd0b3AnIGFzIGNvbnN0LFxyXG4gICAgICAgIGFsaWduOiAnY2VudGVyJyBhcyBjb25zdCxcclxuICAgICAgICBsYWJlbHM6IHtcclxuICAgICAgICAgIGJveFdpZHRoOiAxMCxcclxuICAgICAgICAgIGJveEhlaWdodDogMTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgdGl0bGU6IHtcclxuICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgIHRleHQ6IHRpdGxlLFxyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHNpemU6IDIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2NhbGVzOiB7XHJcbiAgICAgIHg6IHtcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICAgIGRyYXdCb3JkZXI6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhY2tlZDogaXNTdGFja2VkLFxyXG4gICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICBtYXhSb3RhdGlvbjogNDUsXHJcbiAgICAgICAgICBtaW5Sb3RhdGlvbjogNDUsXHJcbiAgICAgICAgICBhdXRvU2tpcDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgeToge1xyXG4gICAgICAgIHN0YWNrZWQ6IGlzU3RhY2tlZCxcclxuICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgKyAnJSc7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0LWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XHJcbiAgICAgICAgPEJhciBkYXRhPXtjaGFydERhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJpdmFyaWF0ZUJhckNoYXJ0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCYXIiLCJDaGFydCIsIkNoYXJ0SlMiLCJDYXRlZ29yeVNjYWxlIiwiTGluZWFyU2NhbGUiLCJCYXJFbGVtZW50IiwiVGl0bGUiLCJUb29sdGlwIiwiTGVnZW5kIiwicmVnaXN0ZXIiLCJCaXZhcmlhdGVCYXJDaGFydCIsImNoYXJ0RGF0YSIsInRpdGxlIiwiaXNTdGFja2VkIiwic2hvd0xlZ2VuZCIsImRhdGFzZXRzIiwibGVuZ3RoIiwiZGl2Iiwib3B0aW9ucyIsImluZGV4QXhpcyIsImVsZW1lbnRzIiwiYmFyIiwiYm9yZGVyV2lkdGgiLCJyZXNwb25zaXZlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInBsdWdpbnMiLCJ0b29sdGlwIiwiY2FsbGJhY2tzIiwibGFiZWwiLCJjb250ZXh0IiwiZGF0YXNldCIsInZhbHVlIiwicmF3IiwidW5kZWZpbmVkIiwicGFyc2VkIiwieSIsInRvU3RyaW5nIiwibGVnZW5kIiwiZGlzcGxheSIsInBvc2l0aW9uIiwiYWxpZ24iLCJsYWJlbHMiLCJib3hXaWR0aCIsImJveEhlaWdodCIsInRleHQiLCJmb250Iiwic2l6ZSIsInNjYWxlcyIsIngiLCJncmlkIiwiZHJhd0JvcmRlciIsInN0YWNrZWQiLCJ0aWNrcyIsIm1heFJvdGF0aW9uIiwibWluUm90YXRpb24iLCJhdXRvU2tpcCIsImNhbGxiYWNrIiwiY2xhc3NOYW1lIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BivariateChart.tsx\n"));

/***/ })

});