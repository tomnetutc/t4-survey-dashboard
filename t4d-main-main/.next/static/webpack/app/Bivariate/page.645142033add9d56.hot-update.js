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

/***/ "(app-pages-browser)/./components/BiCalc.tsx":
/*!*******************************!*\
  !*** ./components/BiCalc.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractVariablesFromDictionary: function() { return /* binding */ extractVariablesFromDictionary; },\n/* harmony export */   fetchVariableResponses: function() { return /* binding */ fetchVariableResponses; },\n/* harmony export */   prepareTableData: function() { return /* binding */ prepareTableData; },\n/* harmony export */   prepareVerticalChartData: function() { return /* binding */ prepareVerticalChartData; }\n/* harmony export */ });\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ \"(app-pages-browser)/./node_modules/papaparse/papaparse.min.js\");\n/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);\n\n// Function to read CSV data\nconst readCSV = (filePath)=>{\n    return new Promise((resolve, reject)=>{\n        papaparse__WEBPACK_IMPORTED_MODULE_0___default().parse(filePath, {\n            download: true,\n            header: true,\n            complete: (results)=>{\n                resolve(results.data);\n            },\n            error: (error)=>{\n                reject(error);\n            }\n        });\n    });\n};\n// Function to extract variables from data dictionary\nconst extractVariablesFromDictionary = async (dataDictionaryPath)=>{\n    const data = await readCSV(dataDictionaryPath);\n    return data.map((row)=>({\n            category: row[\"Category\"],\n            variable: row[\"Variable\"],\n            name: row[\"Name\"]\n        }));\n};\n// Function to fetch variable responses from survey data\nconst fetchVariableResponses = async (surveyDataPath, category1, variable1, category2, variable2)=>{\n    const data = await readCSV(surveyDataPath);\n    const variableData = {};\n    data.forEach((row)=>{\n        const key = \"\".concat(row[variable1], \",\").concat(row[variable2]);\n        variableData[key] = (variableData[key] || 0) + 1;\n    });\n    return variableData;\n};\nconst prepareVerticalChartData = (data)=>{\n    const categories = new Set();\n    const subCategories = new Set();\n    // Separate data into categories and subcategories\n    const parsedData = {};\n    Object.entries(data).forEach((param)=>{\n        let [key, value] = param;\n        const [category, subCategory] = key.split(\",\");\n        categories.add(category);\n        subCategories.add(subCategory);\n        if (!parsedData[category]) {\n            parsedData[category] = {};\n        }\n        parsedData[category][subCategory] = value;\n    });\n    const labels = Array.from(categories);\n    const datasets = Array.from(subCategories).map((subCategory, index)=>{\n        return {\n            label: subCategory,\n            data: labels.map((label)=>parsedData[label][subCategory] || 0),\n            backgroundColor: \"rgba(\".concat(index * 30 % 255, \", \").concat(index * 50 % 255, \", \").concat(index * 70 % 255, \", 0.6)\"),\n            borderColor: \"rgba(\".concat(index * 30 % 255, \", \").concat(index * 50 % 255, \", \").concat(index * 70 % 255, \", 1)\"),\n            borderWidth: 1,\n            barThickness: 70\n        };\n    });\n    return {\n        labels,\n        datasets\n    };\n};\nconst prepareTableData = (data)=>{\n    const totalResponses = Object.values(data).reduce((sum, value)=>sum + value, 0);\n    return Object.entries(data).map((param)=>{\n        let [response, count] = param;\n        const [variable1, variable2] = response.split(\",\");\n        return {\n            variable1,\n            variable2,\n            count,\n            share: count / totalResponses * 100\n        };\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQmlDYWxjLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFHN0IsNEJBQTRCO0FBQzVCLE1BQU1DLFVBQVUsQ0FBQ0M7SUFDZixPQUFPLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7UUFDM0JMLHNEQUFVLENBQUNFLFVBQVU7WUFDbkJLLFVBQVU7WUFDVkMsUUFBUTtZQUNSQyxVQUFVLENBQUNDO2dCQUNUTixRQUFRTSxRQUFRQyxJQUFJO1lBQ3RCO1lBQ0FDLE9BQU8sQ0FBQ0E7Z0JBQ05QLE9BQU9PO1lBQ1Q7UUFDRjtJQUNGO0FBQ0Y7QUFFQSxxREFBcUQ7QUFDOUMsTUFBTUMsaUNBQWlDLE9BQU9DO0lBQ25ELE1BQU1ILE9BQU8sTUFBTVYsUUFBUWE7SUFDM0IsT0FBT0gsS0FBS0ksR0FBRyxDQUFDLENBQUNDLE1BQVM7WUFDeEJDLFVBQVVELEdBQUcsQ0FBQyxXQUFXO1lBQ3pCRSxVQUFVRixHQUFHLENBQUMsV0FBVztZQUN6QkcsTUFBTUgsR0FBRyxDQUFDLE9BQU87UUFDbkI7QUFDRixFQUFFO0FBRUYsd0RBQXdEO0FBQ2pELE1BQU1JLHlCQUF5QixPQUNwQ0MsZ0JBQ0FDLFdBQ0FDLFdBQ0FDLFdBQ0FDO0lBRUEsTUFBTWQsT0FBTyxNQUFNVixRQUFRb0I7SUFDM0IsTUFBTUssZUFBMEMsQ0FBQztJQUNqRGYsS0FBS2dCLE9BQU8sQ0FBQyxDQUFDWDtRQUNaLE1BQU1ZLE1BQU0sR0FBcUJaLE9BQWxCQSxHQUFHLENBQUNPLFVBQVUsRUFBQyxLQUFrQixPQUFmUCxHQUFHLENBQUNTLFVBQVU7UUFDL0NDLFlBQVksQ0FBQ0UsSUFBSSxHQUFHLENBQUNGLFlBQVksQ0FBQ0UsSUFBSSxJQUFJLEtBQUs7SUFDakQ7SUFDQSxPQUFPRjtBQUNULEVBQUU7QUFFSyxNQUFNRywyQkFBMkIsQ0FBQ2xCO0lBQ3ZDLE1BQU1tQixhQUFhLElBQUlDO0lBQ3ZCLE1BQU1DLGdCQUFnQixJQUFJRDtJQUUxQixrREFBa0Q7SUFDbEQsTUFBTUUsYUFBd0UsQ0FBQztJQUMvRUMsT0FBT0MsT0FBTyxDQUFDeEIsTUFBTWdCLE9BQU8sQ0FBQztZQUFDLENBQUNDLEtBQUtRLE1BQU07UUFDeEMsTUFBTSxDQUFDbkIsVUFBVW9CLFlBQVksR0FBR1QsSUFBSVUsS0FBSyxDQUFDO1FBQzFDUixXQUFXUyxHQUFHLENBQUN0QjtRQUNmZSxjQUFjTyxHQUFHLENBQUNGO1FBQ2xCLElBQUksQ0FBQ0osVUFBVSxDQUFDaEIsU0FBUyxFQUFFO1lBQ3pCZ0IsVUFBVSxDQUFDaEIsU0FBUyxHQUFHLENBQUM7UUFDMUI7UUFDQWdCLFVBQVUsQ0FBQ2hCLFNBQVMsQ0FBQ29CLFlBQVksR0FBR0Q7SUFDdEM7SUFFQSxNQUFNSSxTQUFTQyxNQUFNQyxJQUFJLENBQUNaO0lBQzFCLE1BQU1hLFdBQVdGLE1BQU1DLElBQUksQ0FBQ1YsZUFBZWpCLEdBQUcsQ0FBQyxDQUFDc0IsYUFBYU87UUFDM0QsT0FBTztZQUNMQyxPQUFPUjtZQUNQMUIsTUFBTTZCLE9BQU96QixHQUFHLENBQUMsQ0FBQzhCLFFBQVVaLFVBQVUsQ0FBQ1ksTUFBTSxDQUFDUixZQUFZLElBQUk7WUFDOURTLGlCQUFpQixRQUE2QkYsT0FBckJBLFFBQVEsS0FBSyxLQUFJLE1BQXlCQSxPQUFyQkEsUUFBUSxLQUFLLEtBQUksTUFBcUIsT0FBakJBLFFBQVEsS0FBSyxLQUFJO1lBQ3BGRyxhQUFhLFFBQTZCSCxPQUFyQkEsUUFBUSxLQUFLLEtBQUksTUFBeUJBLE9BQXJCQSxRQUFRLEtBQUssS0FBSSxNQUFxQixPQUFqQkEsUUFBUSxLQUFLLEtBQUk7WUFDaEZJLGFBQWE7WUFDYkMsY0FBYztRQUNoQjtJQUNGO0lBRUEsT0FBTztRQUNMVDtRQUNBRztJQUNGO0FBQ0YsRUFBRTtBQUVLLE1BQU1PLG1CQUFtQixDQUFDdkM7SUFDL0IsTUFBTXdDLGlCQUFpQmpCLE9BQU9rQixNQUFNLENBQUN6QyxNQUFNMEMsTUFBTSxDQUFDLENBQUNDLEtBQUtsQixRQUFVa0IsTUFBTWxCLE9BQU87SUFFL0UsT0FBT0YsT0FBT0MsT0FBTyxDQUFDeEIsTUFBTUksR0FBRyxDQUFDO1lBQUMsQ0FBQ3dDLFVBQVVDLE1BQU07UUFDaEQsTUFBTSxDQUFDakMsV0FBV0UsVUFBVSxHQUFHOEIsU0FBU2pCLEtBQUssQ0FBQztRQUM5QyxPQUFPO1lBQ0xmO1lBQ0FFO1lBQ0ErQjtZQUNBQyxPQUFPLFFBQVNOLGlCQUFrQjtRQUNwQztJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JpQ2FsYy50c3g/NWZmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFwYSBmcm9tICdwYXBhcGFyc2UnO1xyXG5pbXBvcnQgeyBDaGFydERhdGFQcm9wcywgVGFibGVEYXRhUm93LCBWYXJpYWJsZSB9IGZyb20gJy4vVHlwZXMnOyAvLyBBZGp1c3QgdGhlIHBhdGggaWYgbmVjZXNzYXJ5XHJcblxyXG4vLyBGdW5jdGlvbiB0byByZWFkIENTViBkYXRhXHJcbmNvbnN0IHJlYWRDU1YgPSAoZmlsZVBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55W10+ID0+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgUGFwYS5wYXJzZShmaWxlUGF0aCwge1xyXG4gICAgICBkb3dubG9hZDogdHJ1ZSxcclxuICAgICAgaGVhZGVyOiB0cnVlLFxyXG4gICAgICBjb21wbGV0ZTogKHJlc3VsdHMpID0+IHtcclxuICAgICAgICByZXNvbHZlKHJlc3VsdHMuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcclxuICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBGdW5jdGlvbiB0byBleHRyYWN0IHZhcmlhYmxlcyBmcm9tIGRhdGEgZGljdGlvbmFyeVxyXG5leHBvcnQgY29uc3QgZXh0cmFjdFZhcmlhYmxlc0Zyb21EaWN0aW9uYXJ5ID0gYXN5bmMgKGRhdGFEaWN0aW9uYXJ5UGF0aDogc3RyaW5nKTogUHJvbWlzZTxWYXJpYWJsZVtdPiA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlYWRDU1YoZGF0YURpY3Rpb25hcnlQYXRoKTtcclxuICByZXR1cm4gZGF0YS5tYXAoKHJvdykgPT4gKHtcclxuICAgIGNhdGVnb3J5OiByb3dbJ0NhdGVnb3J5J10sXHJcbiAgICB2YXJpYWJsZTogcm93WydWYXJpYWJsZSddLFxyXG4gICAgbmFtZTogcm93WydOYW1lJ10sXHJcbiAgfSkpO1xyXG59O1xyXG5cclxuLy8gRnVuY3Rpb24gdG8gZmV0Y2ggdmFyaWFibGUgcmVzcG9uc2VzIGZyb20gc3VydmV5IGRhdGFcclxuZXhwb3J0IGNvbnN0IGZldGNoVmFyaWFibGVSZXNwb25zZXMgPSBhc3luYyAoXHJcbiAgc3VydmV5RGF0YVBhdGg6IHN0cmluZyxcclxuICBjYXRlZ29yeTE6IHN0cmluZyxcclxuICB2YXJpYWJsZTE6IHN0cmluZyxcclxuICBjYXRlZ29yeTI6IHN0cmluZyxcclxuICB2YXJpYWJsZTI6IHN0cmluZ1xyXG4pOiBQcm9taXNlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+ID0+IHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVhZENTVihzdXJ2ZXlEYXRhUGF0aCk7XHJcbiAgY29uc3QgdmFyaWFibGVEYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgZGF0YS5mb3JFYWNoKChyb3c6IGFueSkgPT4ge1xyXG4gICAgY29uc3Qga2V5ID0gYCR7cm93W3ZhcmlhYmxlMV19LCR7cm93W3ZhcmlhYmxlMl19YDtcclxuICAgIHZhcmlhYmxlRGF0YVtrZXldID0gKHZhcmlhYmxlRGF0YVtrZXldIHx8IDApICsgMTtcclxuICB9KTtcclxuICByZXR1cm4gdmFyaWFibGVEYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXBhcmVWZXJ0aWNhbENoYXJ0RGF0YSA9IChkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogQ2hhcnREYXRhUHJvcHMgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuICBjb25zdCBzdWJDYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblxyXG4gIC8vIFNlcGFyYXRlIGRhdGEgaW50byBjYXRlZ29yaWVzIGFuZCBzdWJjYXRlZ29yaWVzXHJcbiAgY29uc3QgcGFyc2VkRGF0YTogeyBbY2F0ZWdvcnk6IHN0cmluZ106IHsgW3N1YkNhdGVnb3J5OiBzdHJpbmddOiBudW1iZXIgfSB9ID0ge307XHJcbiAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnksIHN1YkNhdGVnb3J5XSA9IGtleS5zcGxpdCgnLCcpO1xyXG4gICAgY2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO1xyXG4gICAgc3ViQ2F0ZWdvcmllcy5hZGQoc3ViQ2F0ZWdvcnkpO1xyXG4gICAgaWYgKCFwYXJzZWREYXRhW2NhdGVnb3J5XSkge1xyXG4gICAgICBwYXJzZWREYXRhW2NhdGVnb3J5XSA9IHt9O1xyXG4gICAgfVxyXG4gICAgcGFyc2VkRGF0YVtjYXRlZ29yeV1bc3ViQ2F0ZWdvcnldID0gdmFsdWU7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxhYmVscyA9IEFycmF5LmZyb20oY2F0ZWdvcmllcyk7XHJcbiAgY29uc3QgZGF0YXNldHMgPSBBcnJheS5mcm9tKHN1YkNhdGVnb3JpZXMpLm1hcCgoc3ViQ2F0ZWdvcnksIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsYWJlbDogc3ViQ2F0ZWdvcnksXHJcbiAgICAgIGRhdGE6IGxhYmVscy5tYXAoKGxhYmVsKSA9PiBwYXJzZWREYXRhW2xhYmVsXVtzdWJDYXRlZ29yeV0gfHwgMCksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoJHtpbmRleCAqIDMwICUgMjU1fSwgJHtpbmRleCAqIDUwICUgMjU1fSwgJHtpbmRleCAqIDcwICUgMjU1fSwgMC42KWAsXHJcbiAgICAgIGJvcmRlckNvbG9yOiBgcmdiYSgke2luZGV4ICogMzAgJSAyNTV9LCAke2luZGV4ICogNTAgJSAyNTV9LCAke2luZGV4ICogNzAgJSAyNTV9LCAxKWAsXHJcbiAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICBiYXJUaGlja25lc3M6IDcwLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGxhYmVscyxcclxuICAgIGRhdGFzZXRzLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlcGFyZVRhYmxlRGF0YSA9IChkYXRhOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogVGFibGVEYXRhUm93W10gPT4ge1xyXG4gIGNvbnN0IHRvdGFsUmVzcG9uc2VzID0gT2JqZWN0LnZhbHVlcyhkYXRhKS5yZWR1Y2UoKHN1bSwgdmFsdWUpID0+IHN1bSArIHZhbHVlLCAwKTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGRhdGEpLm1hcCgoW3Jlc3BvbnNlLCBjb3VudF0pID0+IHtcclxuICAgIGNvbnN0IFt2YXJpYWJsZTEsIHZhcmlhYmxlMl0gPSByZXNwb25zZS5zcGxpdCgnLCcpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFyaWFibGUxLCAvLyBTZXBhcmF0ZWx5IG1hcCB2YXJpYWJsZTFcclxuICAgICAgdmFyaWFibGUyLCAvLyBTZXBhcmF0ZWx5IG1hcCB2YXJpYWJsZTJcclxuICAgICAgY291bnQsXHJcbiAgICAgIHNoYXJlOiAoY291bnQgLyB0b3RhbFJlc3BvbnNlcykgKiAxMDAsXHJcbiAgICB9O1xyXG4gIH0pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUGFwYSIsInJlYWRDU1YiLCJmaWxlUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGFyc2UiLCJkb3dubG9hZCIsImhlYWRlciIsImNvbXBsZXRlIiwicmVzdWx0cyIsImRhdGEiLCJlcnJvciIsImV4dHJhY3RWYXJpYWJsZXNGcm9tRGljdGlvbmFyeSIsImRhdGFEaWN0aW9uYXJ5UGF0aCIsIm1hcCIsInJvdyIsImNhdGVnb3J5IiwidmFyaWFibGUiLCJuYW1lIiwiZmV0Y2hWYXJpYWJsZVJlc3BvbnNlcyIsInN1cnZleURhdGFQYXRoIiwiY2F0ZWdvcnkxIiwidmFyaWFibGUxIiwiY2F0ZWdvcnkyIiwidmFyaWFibGUyIiwidmFyaWFibGVEYXRhIiwiZm9yRWFjaCIsImtleSIsInByZXBhcmVWZXJ0aWNhbENoYXJ0RGF0YSIsImNhdGVnb3JpZXMiLCJTZXQiLCJzdWJDYXRlZ29yaWVzIiwicGFyc2VkRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJ2YWx1ZSIsInN1YkNhdGVnb3J5Iiwic3BsaXQiLCJhZGQiLCJsYWJlbHMiLCJBcnJheSIsImZyb20iLCJkYXRhc2V0cyIsImluZGV4IiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJDb2xvciIsImJvcmRlcldpZHRoIiwiYmFyVGhpY2tuZXNzIiwicHJlcGFyZVRhYmxlRGF0YSIsInRvdGFsUmVzcG9uc2VzIiwidmFsdWVzIiwicmVkdWNlIiwic3VtIiwicmVzcG9uc2UiLCJjb3VudCIsInNoYXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BiCalc.tsx\n"));

/***/ })

});