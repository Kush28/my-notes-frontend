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
var _jsxFileName = "C:\\WorkSpace\\RongoHouse\\components\\Calender\\calender.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Calender() {
  return __jsx("div", {
    className: "flex items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 5
    }
  }, "Calender");
}

/***/ }),

/***/ "./components/hero-post.js":
/*!*********************************!*\
  !*** ./components/hero-post.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/avatar */ "./components/avatar.js");
/* harmony import */ var _components_date_formater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/date-formater */ "./components/date-formater.js");
/* harmony import */ var _Calender_calender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calender/calender */ "./components/Calender/calender.js");
var _jsxFileName = "C:\\WorkSpace\\RongoHouse\\components\\hero-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function HeroPost(_ref) {
  var title = _ref.title,
      coverImage = _ref.coverImage,
      date = _ref.date,
      excerpt = _ref.excerpt,
      author = _ref.author,
      slug = _ref.slug;
  return __jsx("section", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "mb-8 md:mb-16",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_Calender_calender__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "mb-4 text-4xl lg:text-6xl leading-tight",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "This weeks task:"), __jsx("div", {
    className: "mb-4 md:mb-0 text-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx(_components_date_formater__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dateString: date,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "text-xl font-bold leading-relaxed my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Garbage Packing: "), __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Abhishek Bhattacharya",
    picture: author.picture,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "text-xl font-bold leading-relaxed my-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Garbage Disposing: "), __jsx(_components_avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: "Sayantan Bhattachariya",
    picture: author.picture,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.0bca823b55ada223ad29.hot-update.js.map