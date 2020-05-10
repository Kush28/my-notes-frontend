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
  return __jsx("div", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(react_calendar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    defaultValue: [new Date(2020, 4, 11), new Date(2020, 4, 17)],
    onChange: function onChange(value, event) {
      return console.log("New date is: ", value, event);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.66e7b5c0e5ac43b8eb37.hot-update.js.map