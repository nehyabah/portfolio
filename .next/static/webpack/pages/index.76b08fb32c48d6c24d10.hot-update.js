/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": function() { return /* binding */ projects; },\n/* harmony export */   \"TimeLineData\": function() { return /* binding */ TimeLineData; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar projects = [{\n  title: \"Audiophile\",\n  description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aliquam illum sint omnis nam itaque, optio dicta vitae quaerat placeat.\",\n  image: \"https://i.ibb.co/5Tcq2bV/pexels-garrett-morrow-1649771.jpg\",\n  tags: [\"Mongo\", \"Express\", \"React\", \"Node\"],\n  source: \"https://i.ibb.co/5Tcq2bV/pexels-garrett-morrow-1649771.jpg\",\n  visit: \"https://google.com\",\n  id: 0\n}, {\n  title: \"E-Commerce\",\n  description: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam aliquam illum sint omnis nam itaque, optio dicta vitae quaerat placeat.\",\n  image: \"/images/2.jpg\",\n  tags: [\"React\", \"JavaScript\"],\n  source: \"https://github.com/nehyabah/Nae-shop\",\n  visit: \"https://github.com/nehyabah/Nae-shop\",\n  id: 1\n}, {\n  title: \"Jobify\",\n  description: \"A challanging full stack job search application that helps keep track of pending applications, interviews scheduled, jobs declined. \",\n  image: \"/images/3.jpg\",\n  tags: [\"React\", \"Redux\", \"Express\", \"MongoDB\"],\n  source: \"https://google.com\",\n  visit: \"https://google.com\",\n  id: 2\n}, {\n  title: \"Nae Tour Guide\",\n  description: \"An interesting personal tour guide that shows restaurants, hotels and attractions. I learnt a lot about Google Map API and brushed up my knowledge with using different APIs. \",\n  image: \"/images/4.jpg\",\n  tags: [\"React\", \"Google Map API\"],\n  source: \"https://github.com/nehyabah/nae-tour-guide\",\n  visit: \"https://nae-tour-guide.vercel.app\",\n  id: 3\n}, {\n  title: \"Nae Estate\",\n  description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto iure. Suscipit deleniti perferendis esse omnis recusandae sit earum vitae. \",\n  image: \"/images/5.jpg\",\n  tags: [\"React\", \"Redux\", \"Express\", \"MongoDB\"],\n  source: \"#\",\n  visit: \"#\",\n  id: 3\n}, {\n  title: \"Nae Admin-UI\",\n  description: \" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iusto iure. Suscipit deleniti perferendis esse omnis recusandae sit earum vitae.\",\n  image: \"/images/6.jpg\",\n  tags: [\"React\"],\n  source: \"https://github.com/nehyabah/Admin-UI\",\n  visit: \"https://admin-ui-ivory.vercel.app/\",\n  id: 3\n}];\nvar TimeLineData = [{\n  year: 2017,\n  text: \"Started my journey\"\n}, {\n  year: 2018,\n  text: \"Worked as a freelance developer\"\n}, {\n  year: 2019,\n  text: \"Founded JavaScript Mastery\"\n}, {\n  year: 2020,\n  text: \"Shared my projects with the world\"\n}, {\n  year: 2021,\n  text: \"Started my own platform\"\n}];\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanM/ZTZmZCJdLCJuYW1lcyI6WyJwcm9qZWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2UiLCJ2aXNpdCIsImlkIiwiVGltZUxpbmVEYXRhIiwieWVhciIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLElBQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUNFQyxPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsOElBSEo7QUFJRUMsT0FBSyxFQUFFLDREQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCLENBTFI7QUFNRUMsUUFBTSxFQUFFLDREQU5WO0FBT0VDLE9BQUssRUFBRSxvQkFQVDtBQVFFQyxJQUFFLEVBQUU7QUFSTixDQURzQixFQVd0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQ1QsOElBSEo7QUFJRUMsT0FBSyxFQUFFLGVBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsc0NBTlY7QUFPRUMsT0FBSyxFQUFFLHNDQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBWHNCLEVBcUJ0QjtBQUNFTixPQUFLLEVBQUUsUUFEVDtBQUVFQyxhQUFXLEVBQ1Qsc0lBSEo7QUFJRUMsT0FBSyxFQUFFLGVBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsU0FBbkIsRUFBOEIsU0FBOUIsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsb0JBTlY7QUFPRUMsT0FBSyxFQUFFLG9CQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBckJzQixFQStCdEI7QUFDRU4sT0FBSyxFQUFFLGdCQURUO0FBRUVDLGFBQVcsRUFDVCxnTEFISjtBQUlFQyxPQUFLLEVBQUUsZUFKVDtBQUtFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsZ0JBQVYsQ0FMUjtBQU1FQyxRQUFNLEVBQUUsNENBTlY7QUFPRUMsT0FBSyxFQUFFLG1DQVBUO0FBUUVDLElBQUUsRUFBRTtBQVJOLENBL0JzQixFQXlDdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUNULHlKQUhKO0FBSUVDLE9BQUssRUFBRSxlQUpUO0FBS0VDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFNBQW5CLEVBQThCLFNBQTlCLENBTFI7QUFNRUMsUUFBTSxFQUFFLEdBTlY7QUFPRUMsT0FBSyxFQUFFLEdBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0F6Q3NCLEVBbUR0QjtBQUNFTixPQUFLLEVBQUUsY0FEVDtBQUVFQyxhQUFXLEVBQ1QseUpBSEo7QUFJRUMsT0FBSyxFQUFFLGVBSlQ7QUFLRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxDQUxSO0FBTUVDLFFBQU0sRUFBRSxzQ0FOVjtBQU9FQyxPQUFLLEVBQUUsb0NBUFQ7QUFRRUMsSUFBRSxFQUFFO0FBUk4sQ0FuRHNCLENBQWpCO0FBK0RBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6Ii4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJBdWRpb3BoaWxlXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBMYWJvcmlvc2FtIGFsaXF1YW0gaWxsdW0gc2ludCBvbW5pcyBuYW0gaXRhcXVlLCBvcHRpbyBkaWN0YSB2aXRhZSBxdWFlcmF0IHBsYWNlYXQuXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmliYi5jby81VGNxMmJWL3BleGVscy1nYXJyZXR0LW1vcnJvdy0xNjQ5NzcxLmpwZ1wiLFxuICAgIHRhZ3M6IFtcIk1vbmdvXCIsIFwiRXhwcmVzc1wiLCBcIlJlYWN0XCIsIFwiTm9kZVwiXSxcbiAgICBzb3VyY2U6IFwiaHR0cHM6Ly9pLmliYi5jby81VGNxMmJWL3BleGVscy1nYXJyZXR0LW1vcnJvdy0xNjQ5NzcxLmpwZ1wiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRS1Db21tZXJjZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTGFib3Jpb3NhbSBhbGlxdWFtIGlsbHVtIHNpbnQgb21uaXMgbmFtIGl0YXF1ZSwgb3B0aW8gZGljdGEgdml0YWUgcXVhZXJhdCBwbGFjZWF0LlwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvMi5qcGdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIkphdmFTY3JpcHRcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uZWh5YWJhaC9OYWUtc2hvcFwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uZWh5YWJhaC9OYWUtc2hvcFwiLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSm9iaWZ5XCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkEgY2hhbGxhbmdpbmcgZnVsbCBzdGFjayBqb2Igc2VhcmNoIGFwcGxpY2F0aW9uIHRoYXQgaGVscHMga2VlcCB0cmFjayBvZiBwZW5kaW5nIGFwcGxpY2F0aW9ucywgaW50ZXJ2aWV3cyBzY2hlZHVsZWQsIGpvYnMgZGVjbGluZWQuIFwiLFxuICAgIGltYWdlOiBcIi9pbWFnZXMvMy5qcGdcIixcbiAgICB0YWdzOiBbXCJSZWFjdFwiLCBcIlJlZHV4XCIsIFwiRXhwcmVzc1wiLCBcIk1vbmdvREJcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTmFlIFRvdXIgR3VpZGVcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQW4gaW50ZXJlc3RpbmcgcGVyc29uYWwgdG91ciBndWlkZSB0aGF0IHNob3dzIHJlc3RhdXJhbnRzLCBob3RlbHMgYW5kIGF0dHJhY3Rpb25zLiBJIGxlYXJudCBhIGxvdCBhYm91dCBHb29nbGUgTWFwIEFQSSBhbmQgYnJ1c2hlZCB1cCBteSBrbm93bGVkZ2Ugd2l0aCB1c2luZyBkaWZmZXJlbnQgQVBJcy4gXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy80LmpwZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiR29vZ2xlIE1hcCBBUElcIl0sXG4gICAgc291cmNlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9uZWh5YWJhaC9uYWUtdG91ci1ndWlkZVwiLFxuICAgIHZpc2l0OiBcImh0dHBzOi8vbmFlLXRvdXItZ3VpZGUudmVyY2VsLmFwcFwiLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTmFlIEVzdGF0ZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTGFib3Jpb3NhbSwgaXVzdG8gaXVyZS4gU3VzY2lwaXQgZGVsZW5pdGkgcGVyZmVyZW5kaXMgZXNzZSBvbW5pcyByZWN1c2FuZGFlIHNpdCBlYXJ1bSB2aXRhZS4gXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy81LmpwZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiUmVkdXhcIiwgXCJFeHByZXNzXCIsIFwiTW9uZ29EQlwiXSxcbiAgICBzb3VyY2U6IFwiI1wiLFxuICAgIHZpc2l0OiBcIiNcIixcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk5hZSBBZG1pbi1VSVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCIgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yaW9zYW0sIGl1c3RvIGl1cmUuIFN1c2NpcGl0IGRlbGVuaXRpIHBlcmZlcmVuZGlzIGVzc2Ugb21uaXMgcmVjdXNhbmRhZSBzaXQgZWFydW0gdml0YWUuXCIsXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy82LmpwZ1wiLFxuICAgIHRhZ3M6IFtcIlJlYWN0XCJdLFxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vbmVoeWFiYWgvQWRtaW4tVUlcIixcbiAgICB2aXNpdDogXCJodHRwczovL2FkbWluLXVpLWl2b3J5LnZlcmNlbC5hcHAvXCIsXG4gICAgaWQ6IDMsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6IFwiU3RhcnRlZCBteSBqb3VybmV5XCIgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiBcIldvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXJcIiB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6IFwiRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnlcIiB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6IFwiU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkXCIgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiBcIlN0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtXCIgfSxcbl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/constants.js\n");

/***/ })

});