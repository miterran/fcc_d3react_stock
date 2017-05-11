webpackHotUpdate(0,{

/***/ 226:
/* unknown exports provided */
/* all exports used */
/*!*************************!*\
  !*** ./client/store.js ***!
  \*************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ 82);\n\nvar _reduxPromiseMiddleware = __webpack_require__(/*! redux-promise-middleware */ 493);\n\nvar _reduxPromiseMiddleware2 = _interopRequireDefault(_reduxPromiseMiddleware);\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ 492);\n\nvar _reduxLogger2 = _interopRequireDefault(_reduxLogger);\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ 495);\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _RangeButtonMenuReducer = __webpack_require__(/*! ./reducers/RangeButtonMenuReducer */ 516);\n\nvar _RangeButtonMenuReducer2 = _interopRequireDefault(_RangeButtonMenuReducer);\n\nvar _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ 488);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar middleware = (0, _redux.applyMiddleware)(_reduxLogger2.default, _reduxThunk2.default, (0, _reduxPromiseMiddleware2.default)());\nvar allReducers = (0, _redux.combineReducers)({\n\tbuttons: _RangeButtonMenuReducer2.default\n});\nvar store = (0, _redux.createStore)(allReducers, (0, _reduxDevtoolsExtension.composeWithDevTools)(middleware));\n\nexports.default = store;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zdG9yZS5qcz8wMDZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBwcm9taXNlIGZyb20gXCJyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcIlxuaW1wb3J0IGxvZ2dlciBmcm9tIFwicmVkdXgtbG9nZ2VyXCJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIlxuaW1wb3J0IFJhbmdlQnV0dG9uTWVudVJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9SYW5nZUJ1dHRvbk1lbnVSZWR1Y2VyJztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5jb25zdCBtaWRkbGV3YXJlID0gYXBwbHlNaWRkbGV3YXJlKGxvZ2dlciwgdGh1bmssIHByb21pc2UoKSlcbmNvbnN0IGFsbFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcblx0YnV0dG9uczogUmFuZ2VCdXR0b25NZW51UmVkdWNlclxufSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKGFsbFJlZHVjZXJzLCBjb21wb3NlV2l0aERldlRvb2xzKG1pZGRsZXdhcmUpKVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L3N0b3JlLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})