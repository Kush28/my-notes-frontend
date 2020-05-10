webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Calender/calender.js":
/*!*****************************************!*\
  !*** ./components/Calender/calender.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
var _jsxFileName = "C:\\WorkSpace\\RongoHouse\\components\\Calender\\calender.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Calender() {
  var today = new Date();
  return __jsx("div", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_calendar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultValue: [new Date(2020, 4, 11), new Date(2020, 4, 17)],
    onChange: function onChange(value) {
      return console.log("New date is: ", value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.ee35f9f719d05ada7d3b.hot-update.js.map