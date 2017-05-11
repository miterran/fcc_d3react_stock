webpackHotUpdate(0,{

/***/ 228:
/* unknown exports provided */
/* all exports used */
/*!****************************************!*\
  !*** ./client/containers/StockList.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {\n\n// const StockList = (value) => (\n// \t<ul className='list-inline stockList'>\n// \t\t<li>\n// \t\t\t<div className='well well-sm'>\n// \t\t\t\tAAPL\n// \t\t\t\t<button \n// \t\t\t\t\tclassName='pull-right removeStockBtn' \n// \t\t\t\t\tstyle={{border: '0', background: 'none', marginTop: '-2'}}>\n// \t\t\t\t\t&times;\n// \t\t\t\t</button>\n// \t\t\t</div>\n// \t\t</li>\n// \t</ul>\n// );\n\n// export default StockList;\n\n\nvar StockList = function (_React$Component) {\n\t_inherits(StockList, _React$Component);\n\n\tfunction StockList(props) {\n\t\t_classCallCheck(this, StockList);\n\n\t\treturn _possibleConstructorReturn(this, (StockList.__proto__ || Object.getPrototypeOf(StockList)).call(this, props));\n\t}\n\n\t_createClass(StockList, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar stocks = this.props.stockList.map(function (val, idx) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\t{ key: (val, idx) },\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'well well-sm' },\n\t\t\t\t\t\tval,\n\t\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\t'button',\n\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\tclassName: 'pull-right removeStockBtn',\n\t\t\t\t\t\t\t\tstyle: { border: '0', background: 'none', marginTop: '-2' } },\n\t\t\t\t\t\t\t'\\xD7'\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t\t);\n\t\t\t});\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\t{ className: 'list-inline stockList' },\n\t\t\t\tstocks\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn StockList;\n}(_react2.default.Component);\n\nexports.default = StockList;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9jb250YWluZXJzL1N0b2NrTGlzdC5qcz8zNTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLy9jb25zdCBUZXh0RmllbGRHcm91cCA9ICh7IGZpZWxkLCB2YWx1ZSwgbGFiZWwsIGVycm9yLCB0eXBlLCBvbkNoYW5nZSwgY2hlY2tVc2VyRXhpc3RzIH0pID0+IHtcblxuLy8gY29uc3QgU3RvY2tMaXN0ID0gKHZhbHVlKSA9PiAoXG4vLyBcdDx1bCBjbGFzc05hbWU9J2xpc3QtaW5saW5lIHN0b2NrTGlzdCc+XG4vLyBcdFx0PGxpPlxuLy8gXHRcdFx0PGRpdiBjbGFzc05hbWU9J3dlbGwgd2VsbC1zbSc+XG4vLyBcdFx0XHRcdEFBUExcbi8vIFx0XHRcdFx0PGJ1dHRvbiBcbi8vIFx0XHRcdFx0XHRjbGFzc05hbWU9J3B1bGwtcmlnaHQgcmVtb3ZlU3RvY2tCdG4nIFxuLy8gXHRcdFx0XHRcdHN0eWxlPXt7Ym9yZGVyOiAnMCcsIGJhY2tncm91bmQ6ICdub25lJywgbWFyZ2luVG9wOiAnLTInfX0+XG4vLyBcdFx0XHRcdFx0JnRpbWVzO1xuLy8gXHRcdFx0XHQ8L2J1dHRvbj5cbi8vIFx0XHRcdDwvZGl2PlxuLy8gXHRcdDwvbGk+XG4vLyBcdDwvdWw+XG4vLyApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBTdG9ja0xpc3Q7XG5cblxuXG5cblxuY2xhc3MgU3RvY2tMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0Y29uc3Qgc3RvY2tzID0gdGhpcy5wcm9wcy5zdG9ja0xpc3QubWFwKGZ1bmN0aW9uKHZhbCwgaWR4KXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxsaSBrZXk9e3ZhbCwgaWR4fT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nd2VsbCB3ZWxsLXNtJz5cblx0XHRcdFx0XHRcdHt2YWx9XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3B1bGwtcmlnaHQgcmVtb3ZlU3RvY2tCdG4nIFxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e2JvcmRlcjogJzAnLCBiYWNrZ3JvdW5kOiAnbm9uZScsIG1hcmdpblRvcDogJy0yJ319PlxuXHRcdFx0XHRcdFx0XHQmdGltZXM7XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9saT5cblx0XHRcdClcblx0XHR9KVxuXHRcdHJldHVybihcblx0XHRcdDx1bCBjbGFzc05hbWU9J2xpc3QtaW5saW5lIHN0b2NrTGlzdCc+XG5cdFx0XHRcdHtzdG9ja3N9XG5cdFx0XHQ8L3VsPlxuXHRcdClcblx0fVxufVxuZXhwb3J0IGRlZmF1bHQgU3RvY2tMaXN0O1xuXG5cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2NvbnRhaW5lcnMvU3RvY2tMaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7O0FBeEJBO0FBQ0E7QUF5QkEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

})