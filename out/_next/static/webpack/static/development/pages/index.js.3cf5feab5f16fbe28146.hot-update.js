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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wojtekmaj/date-utils/dist/esm/index.js ***!
  \**************************************************************/
/*! exports provided: getYear, getMonth, getMonthHuman, getDate, getHours, getMinutes, getSeconds, getCenturyStart, getPreviousCenturyStart, getNextCenturyStart, getCenturyEnd, getPreviousCenturyEnd, getNextCenturyEnd, getCenturyRange, getDecadeStart, getPreviousDecadeStart, getNextDecadeStart, getDecadeEnd, getPreviousDecadeEnd, getNextDecadeEnd, getDecadeRange, getYearStart, getPreviousYearStart, getNextYearStart, getYearEnd, getPreviousYearEnd, getNextYearEnd, getYearRange, getMonthStart, getPreviousMonthStart, getNextMonthStart, getMonthEnd, getPreviousMonthEnd, getNextMonthEnd, getMonthRange, getDayStart, getPreviousDayStart, getNextDayStart, getDayEnd, getPreviousDayEnd, getNextDayEnd, getDayRange, getDaysInMonth, getHoursMinutes, getHoursMinutesSeconds, getISOLocalMonth, getISOLocalDate, getISOLocalDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYear", function() { return getYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthHuman", function() { return getMonthHuman; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDate", function() { return getDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHours", function() { return getHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMinutes", function() { return getMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSeconds", function() { return getSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyStart", function() { return getCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousCenturyStart", function() { return getPreviousCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextCenturyStart", function() { return getNextCenturyStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyEnd", function() { return getCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousCenturyEnd", function() { return getPreviousCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextCenturyEnd", function() { return getNextCenturyEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyRange", function() { return getCenturyRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeStart", function() { return getDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDecadeStart", function() { return getPreviousDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDecadeStart", function() { return getNextDecadeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeEnd", function() { return getDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDecadeEnd", function() { return getPreviousDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDecadeEnd", function() { return getNextDecadeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeRange", function() { return getDecadeRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearStart", function() { return getYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousYearStart", function() { return getPreviousYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextYearStart", function() { return getNextYearStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearEnd", function() { return getYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousYearEnd", function() { return getPreviousYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextYearEnd", function() { return getNextYearEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYearRange", function() { return getYearRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthStart", function() { return getMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthStart", function() { return getPreviousMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthStart", function() { return getNextMonthStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthEnd", function() { return getMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousMonthEnd", function() { return getPreviousMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextMonthEnd", function() { return getNextMonthEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthRange", function() { return getMonthRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayStart", function() { return getDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDayStart", function() { return getPreviousDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDayStart", function() { return getNextDayStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayEnd", function() { return getDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousDayEnd", function() { return getPreviousDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextDayEnd", function() { return getNextDayEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayRange", function() { return getDayRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutes", function() { return getHoursMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHoursMinutesSeconds", function() { return getHoursMinutesSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalMonth", function() { return getISOLocalMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalDate", function() { return getISOLocalDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOLocalDateTime", function() { return getISOLocalDateTime; });
/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}

function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}

function makeGetRange(functions) {
  return function makeGetRangeInternal(date) {
    return functions.map(function (fn) {
      return fn(date);
    });
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */

/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */


function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */

function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }

  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */

function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }

  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */

function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */

function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var hoursString = datePieces[0];
      var hours = parseInt(hoursString, 10);

      if (!isNaN(hours)) {
        return hours;
      }
    }
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */

function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var minutesString = datePieces[1] || 0;
      var minutes = parseInt(minutesString, 10);

      if (!isNaN(minutes)) {
        return minutes;
      }
    }
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */

function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var secondsString = datePieces[2] || 0;
      var seconds = parseInt(secondsString, 10);

      if (!isNaN(seconds)) {
        return seconds;
      }
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Century
 */

function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);
/**
 * Decade
 */

function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);
/**
 * Year
 */

function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange([getYearStart, getYearEnd]);
/**
 * Month
 */

function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
/**
 * Day
 */

function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange([getDayStart, getDayEnd]);
/**
 * Other
 */

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */

function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

function padStart(num) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return "0000".concat(num).slice(-val);
}

function getHoursMinutes(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  return "".concat(hours, ":").concat(minutes);
}
function getHoursMinutesSeconds(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  var seconds = padStart(getSeconds(date));
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */

function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */

function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}
function getISOLocalDateTime(date) {
  return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}

/***/ }),

/***/ "./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: getUserLocales, getUserLocale, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocales", function() { return getUserLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserLocale", function() { return getUserLocale; });
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.once */ "./node_modules/lodash.once/index.js");
/* harmony import */ var lodash_once__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_once__WEBPACK_IMPORTED_MODULE_0__);


function filterDuplicates(arr) {
  return arr.filter(function (el, index, self) {
    return self.indexOf(el) === index;
  });
}

function fixLowercaseProperties(arr) {
  return arr.map(function (el) {
    if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
      return el;
    }

    var splitEl = el.split('-');
    return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
  });
}

function getUserLocalesInternal() {
  var languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList = languageList.concat(window.navigator.languages);
    }

    if (window.navigator.language) {
      languageList.push(window.navigator.language);
    }

    if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }

    if (window.navigator.browserLanguage) {
      languageList.push(window.navigator.browserLanguage);
    }

    if (window.navigator.systemLanguage) {
      languageList.push(window.navigator.systemLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return fixLowercaseProperties(filterDuplicates(languageList));
}

var getUserLocales = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocalesInternal);

function getUserLocaleInternal() {
  return getUserLocales()[0];
}

var getUserLocale = lodash_once__WEBPACK_IMPORTED_MODULE_0___default()(getUserLocaleInternal);
/* harmony default export */ __webpack_exports__["default"] = (getUserLocale);

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */
function before(n, func) {
  var result;
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  n = toInteger(n);
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    }
    if (n <= 1) {
      func = undefined;
    }
    return result;
  };
}

/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */
function once(func) {
  return before(2, func);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = once;


/***/ }),

/***/ "./node_modules/merge-class-names/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/merge-class-names/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeClassNames; });
function mergeClassNames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (classList, arg) {
    return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
  }, []).filter(Boolean).join(' ');
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _Calendar_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calendar/Navigation */ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js");
/* harmony import */ var _CenturyView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony import */ var _DecadeView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony import */ var _YearView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony import */ var _MonthView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/esm/MonthView.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }












var baseClassName = 'react-calendar';
var allViews = ['century', 'decade', 'year', 'month'];
var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);
/**
 * Returns views array with disallowed values cut off.
 */

var getLimitedViews = function getLimitedViews(minDetail, maxDetail) {
  return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
};
/**
 * Determines whether a given view is allowed with currently applied settings.
 */


var isViewAllowed = function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
};
/**
 * Gets either provided view if allowed by minDetail and maxDetail, or gets
 * the default view if not allowed.
 */


var getView = function getView(view, minDetail, maxDetail) {
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }

  return maxDetail;
};
/**
 * Returns value type that can be returned with currently applied settings.
 */


var getValueType = function getValueType(maxDetail) {
  return allValueTypes[allViews.indexOf(maxDetail)];
};

var getValue = function getValue(value, index) {
  if (!value) {
    return null;
  }

  var rawValue = value instanceof Array && value.length === 2 ? value[index] : value;

  if (!rawValue) {
    return null;
  }

  var valueDate = new Date(rawValue);

  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }

  return valueDate;
};

var getDetailValue = function getDetailValue(_ref, index) {
  var value = _ref.value,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      maxDetail = _ref.maxDetail;
  var valuePiece = getValue(value, index);

  if (!valuePiece) {
    return null;
  }

  var valueType = getValueType(maxDetail);
  var detailValueFrom = [_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"], _shared_dates__WEBPACK_IMPORTED_MODULE_8__["getEnd"]][index](valueType, valuePiece);
  return Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["between"])(detailValueFrom, minDate, maxDate);
};

var getDetailValueFrom = function getDetailValueFrom(args) {
  return getDetailValue(args, 0);
};

var getDetailValueTo = function getDetailValueTo(args) {
  return getDetailValue(args, 1);
};

var getDetailValueArray = function getDetailValueArray(args) {
  var value = args.value;

  if (value instanceof Array) {
    return value;
  }

  return [getDetailValueFrom, getDetailValueTo].map(function (fn) {
    return fn(args);
  });
};

function getActiveStartDate(props) {
  var maxDate = props.maxDate,
      maxDetail = props.maxDetail,
      minDate = props.minDate,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value: value,
    minDate: minDate,
    maxDate: maxDate,
    maxDetail: maxDetail
  }) || new Date();
  return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(rangeType, valueFrom);
}

function getInitialActiveStartDate(props) {
  var activeStartDate = props.activeStartDate,
      defaultActiveStartDate = props.defaultActiveStartDate,
      defaultValue = props.defaultValue,
      defaultView = props.defaultView,
      maxDetail = props.maxDetail,
      minDetail = props.minDetail,
      value = props.value,
      view = props.view,
      otherProps = _objectWithoutProperties(props, ["activeStartDate", "defaultActiveStartDate", "defaultValue", "defaultView", "maxDetail", "minDetail", "value", "view"]);

  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;

  if (valueFrom) {
    return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(rangeType, valueFrom);
  }

  return getActiveStartDate(_objectSpread({
    maxDetail: maxDetail,
    minDetail: minDetail,
    value: value || defaultValue,
    view: view || defaultView
  }, otherProps));
}

var isSingleValue = function isSingleValue(value) {
  return value && [].concat(value).length === 1;
};

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(_args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      /* eslint-disable react/destructuring-assignment */
      activeStartDate: _this.props.defaultActiveStartDate,
      value: _this.props.defaultValue,
      view: _this.props.defaultView
      /* eslint-enable react/destructuring-assignment */

    });

    _defineProperty(_assertThisInitialized(_this), "setStateAndCallCallbacks", function (nextState, callback) {
      var _assertThisInitialize = _assertThisInitialized(_this),
          previousActiveStartDate = _assertThisInitialize.activeStartDate,
          previousView = _assertThisInitialize.view;

      var _this$props = _this.props,
          onActiveStartDateChange = _this$props.onActiveStartDateChange,
          onChange = _this$props.onChange,
          onViewChange = _this$props.onViewChange,
          selectRange = _this$props.selectRange;
      var prevArgs = {
        activeStartDate: previousActiveStartDate,
        view: previousView
      };

      _this.setState(nextState, function () {
        var args = {
          activeStartDate: nextState.activeStartDate || _this.activeStartDate,
          view: nextState.view || _this.view
        };

        function shouldUpdate(key) {
          return (// Key must exist, and…
            key in nextState && ( // …key changed from undefined to defined or the other way around, or…
            _typeof(nextState[key]) !== _typeof(prevArgs[key]) // …value changed.
            || (nextState[key] instanceof Date ? nextState[key].getTime() !== prevArgs[key].getTime() : nextState[key] !== prevArgs[key]))
          );
        }

        if (shouldUpdate('activeStartDate')) {
          Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["callIfDefined"])(onActiveStartDateChange, args);
        }

        if (shouldUpdate('view')) {
          Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["callIfDefined"])(onViewChange, args);
        }

        if (shouldUpdate('value')) {
          if (!selectRange || !isSingleValue(nextState.value)) {
            Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["callIfDefined"])(onChange, nextState.value);
          }
        }

        Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["callIfDefined"])(callback, args);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setActiveStartDate", function (activeStartDate) {
      _this.setStateAndCallCallbacks({
        activeStartDate: activeStartDate
      });
    });

    _defineProperty(_assertThisInitialized(_this), "drillDown", function (nextActiveStartDate, event) {
      if (!_this.drillDownAvailable) {
        return;
      }

      _this.onClickTile(nextActiveStartDate, event);

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          view = _assertThisInitialize2.view,
          views = _assertThisInitialize2.views;

      var onDrillDown = _this.props.onDrillDown;
      var nextView = views[views.indexOf(view) + 1];

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, onDrillDown);
    });

    _defineProperty(_assertThisInitialized(_this), "drillUp", function () {
      if (!_this.drillUpAvailable) {
        return;
      }

      var _assertThisInitialize3 = _assertThisInitialized(_this),
          activeStartDate = _assertThisInitialize3.activeStartDate,
          view = _assertThisInitialize3.view,
          views = _assertThisInitialize3.views;

      var onDrillUp = _this.props.onDrillUp;
      var nextView = views[views.indexOf(view) - 1];
      var nextActiveStartDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(nextView, activeStartDate);

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        view: nextView
      }, onDrillUp);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (value, event) {
      var selectRange = _this.props.selectRange;

      _this.onClickTile(value, event);

      var nextValue;

      if (selectRange) {
        // Range selection turned on
        var _assertThisInitialize4 = _assertThisInitialized(_this),
            previousValue = _assertThisInitialize4.value,
            valueType = _assertThisInitialize4.valueType;

        if (!isSingleValue(previousValue)) {
          // Value has 0 or 2 elements - either way we're starting a new array
          // First value
          nextValue = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBegin"])(valueType, value);
        } else {
          // Second value
          nextValue = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getValueRange"])(valueType, previousValue, value);
        }
      } else {
        // Range selection turned off
        nextValue = _this.getProcessedValue(value);
      }

      var nextActiveStartDate = getActiveStartDate(_objectSpread({}, _this.props, {
        value: nextValue
      }));

      _this.setStateAndCallCallbacks({
        activeStartDate: nextActiveStartDate,
        value: nextValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClickTile", function (value, event) {
      var _assertThisInitialize5 = _assertThisInitialized(_this),
          view = _assertThisInitialize5.view;

      var _this$props2 = _this.props,
          onClickDay = _this$props2.onClickDay,
          onClickDecade = _this$props2.onClickDecade,
          onClickMonth = _this$props2.onClickMonth,
          onClickYear = _this$props2.onClickYear;

      var callback = function () {
        switch (view) {
          case 'century':
            return onClickDecade;

          case 'decade':
            return onClickYear;

          case 'year':
            return onClickMonth;

          case 'month':
            return onClickDay;

          default:
            throw new Error("Invalid view: ".concat(view, "."));
        }
      }();

      Object(_shared_utils__WEBPACK_IMPORTED_MODULE_10__["callIfDefined"])(callback, value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseOver", function (value) {
      _this.setState(function (prevState) {
        if (prevState.hover && prevState.hover.getTime() === value.getTime()) {
          return null;
        }

        return {
          hover: value
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      _this.setState({
        hover: null
      });
    });

    return _this;
  }

  _createClass(Calendar, [{
    key: "getProcessedValue",

    /**
     * Gets current value in a desired format.
     */
    value: function getProcessedValue(value) {
      var _this$props3 = this.props,
          minDate = _this$props3.minDate,
          maxDate = _this$props3.maxDate,
          maxDetail = _this$props3.maxDetail,
          returnValue = _this$props3.returnValue;

      var processFunction = function () {
        switch (returnValue) {
          case 'start':
            return getDetailValueFrom;

          case 'end':
            return getDetailValueTo;

          case 'range':
            return getDetailValueArray;

          default:
            throw new Error('Invalid returnValue.');
        }
      }();

      return processFunction({
        value: value,
        minDate: minDate,
        maxDate: maxDate,
        maxDetail: maxDetail
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent(next) {
      var currentActiveStartDate = this.activeStartDate,
          onMouseOver = this.onMouseOver,
          valueType = this.valueType,
          value = this.value,
          view = this.view;
      var _this$props4 = this.props,
          calendarType = _this$props4.calendarType,
          locale = _this$props4.locale,
          maxDate = _this$props4.maxDate,
          minDate = _this$props4.minDate,
          selectRange = _this$props4.selectRange,
          tileClassName = _this$props4.tileClassName,
          tileContent = _this$props4.tileContent,
          tileDisabled = _this$props4.tileDisabled;
      var hover = this.hover;
      var activeStartDate = next ? Object(_shared_dates__WEBPACK_IMPORTED_MODULE_8__["getBeginNext"])(view, currentActiveStartDate) : currentActiveStartDate;
      var onClick = this.drillDownAvailable ? this.drillDown : this.onChange;
      var commonProps = {
        activeStartDate: activeStartDate,
        hover: hover,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        onClick: onClick,
        onMouseOver: selectRange ? onMouseOver : null,
        tileClassName: tileClassName,
        tileContent: tileContent,
        tileDisabled: tileDisabled,
        value: value,
        valueType: valueType
      };

      switch (view) {
        case 'century':
          {
            var formatYear = this.props.formatYear;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CenturyView__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
              formatYear: formatYear
            }, commonProps));
          }

        case 'decade':
          {
            var _formatYear = this.props.formatYear;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DecadeView__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
              formatYear: _formatYear
            }, commonProps));
          }

        case 'year':
          {
            var _this$props5 = this.props,
                formatMonth = _this$props5.formatMonth,
                formatMonthYear = _this$props5.formatMonthYear;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YearView__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
              formatMonth: formatMonth,
              formatMonthYear: formatMonthYear
            }, commonProps));
          }

        case 'month':
          {
            var _this$props6 = this.props,
                formatLongDate = _this$props6.formatLongDate,
                formatShortWeekday = _this$props6.formatShortWeekday,
                onClickWeekNumber = _this$props6.onClickWeekNumber,
                showDoubleView = _this$props6.showDoubleView,
                showFixedNumberOfWeeks = _this$props6.showFixedNumberOfWeeks,
                showNeighboringMonth = _this$props6.showNeighboringMonth,
                showWeekNumbers = _this$props6.showWeekNumbers;
            var onMouseLeave = this.onMouseLeave;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
              calendarType: calendarType,
              formatLongDate: formatLongDate,
              formatShortWeekday: formatShortWeekday,
              onClickWeekNumber: onClickWeekNumber,
              onMouseLeave: onMouseLeave,
              showFixedNumberOfWeeks: showFixedNumberOfWeeks || showDoubleView,
              showNeighboringMonth: showNeighboringMonth,
              showWeekNumbers: showWeekNumbers
            }, commonProps));
          }

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      var showNavigation = this.props.showNavigation;

      if (!showNavigation) {
        return null;
      }

      var activeStartDate = this.activeStartDate,
          view = this.view,
          views = this.views;
      var _this$props7 = this.props,
          formatMonthYear = _this$props7.formatMonthYear,
          formatYear = _this$props7.formatYear,
          locale = _this$props7.locale,
          maxDate = _this$props7.maxDate,
          minDate = _this$props7.minDate,
          navigationAriaLabel = _this$props7.navigationAriaLabel,
          navigationLabel = _this$props7.navigationLabel,
          next2AriaLabel = _this$props7.next2AriaLabel,
          next2Label = _this$props7.next2Label,
          nextAriaLabel = _this$props7.nextAriaLabel,
          nextLabel = _this$props7.nextLabel,
          prev2AriaLabel = _this$props7.prev2AriaLabel,
          prev2Label = _this$props7.prev2Label,
          prevAriaLabel = _this$props7.prevAriaLabel,
          prevLabel = _this$props7.prevLabel,
          showDoubleView = _this$props7.showDoubleView;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Calendar_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
        activeStartDate: activeStartDate,
        drillUp: this.drillUp,
        formatMonthYear: formatMonthYear,
        formatYear: formatYear,
        locale: locale,
        maxDate: maxDate,
        minDate: minDate,
        navigationAriaLabel: navigationAriaLabel,
        navigationLabel: navigationLabel,
        next2AriaLabel: next2AriaLabel,
        next2Label: next2Label,
        nextAriaLabel: nextAriaLabel,
        nextLabel: nextLabel,
        prev2AriaLabel: prev2AriaLabel,
        prev2Label: prev2Label,
        prevAriaLabel: prevAriaLabel,
        prevLabel: prevLabel,
        setActiveStartDate: this.setActiveStartDate,
        showDoubleView: showDoubleView,
        view: view,
        views: views
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          className = _this$props8.className,
          selectRange = _this$props8.selectRange,
          showDoubleView = _this$props8.showDoubleView;
      var onMouseLeave = this.onMouseLeave,
          value = this.value;
      var valueArray = [].concat(value);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_2__["default"])(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className)
      }, this.renderNavigation(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "".concat(baseClassName, "__viewContainer"),
        onBlur: selectRange ? onMouseLeave : null,
        onMouseLeave: selectRange ? onMouseLeave : null
      }, this.renderContent(), showDoubleView && this.renderContent(true)));
    }
  }, {
    key: "activeStartDate",
    get: function get() {
      var activeStartDateProps = this.props.activeStartDate;
      var activeStartDateState = this.state.activeStartDate;
      return activeStartDateProps || activeStartDateState || getInitialActiveStartDate(this.props);
    }
  }, {
    key: "value",
    get: function get() {
      var _this$props9 = this.props,
          selectRange = _this$props9.selectRange,
          valueProps = _this$props9.value;
      var valueState = this.state.value; // In the middle of range selection, use value from state

      if (selectRange && isSingleValue(valueState)) {
        return valueState;
      }

      return valueProps !== undefined ? valueProps : valueState;
    }
  }, {
    key: "valueType",
    get: function get() {
      var maxDetail = this.props.maxDetail;
      return getValueType(maxDetail);
    }
  }, {
    key: "view",
    get: function get() {
      var _this$props10 = this.props,
          minDetail = _this$props10.minDetail,
          maxDetail = _this$props10.maxDetail,
          viewProps = _this$props10.view;
      var viewState = this.state.view;
      return getView(viewProps || viewState, minDetail, maxDetail);
    }
  }, {
    key: "views",
    get: function get() {
      var _this$props11 = this.props,
          minDetail = _this$props11.minDetail,
          maxDetail = _this$props11.maxDetail;
      return getLimitedViews(minDetail, maxDetail);
    }
  }, {
    key: "hover",
    get: function get() {
      var selectRange = this.props.selectRange;
      var hover = this.state.hover;
      return selectRange ? hover : null;
    }
  }, {
    key: "drillDownAvailable",
    get: function get() {
      var view = this.view,
          views = this.views;
      return views.indexOf(view) < views.length - 1;
    }
  }, {
    key: "drillUpAvailable",
    get: function get() {
      var view = this.view,
          views = this.views;
      return views.indexOf(view) > 0;
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Calendar.defaultProps = {
  maxDetail: 'month',
  minDetail: 'century',
  returnValue: 'start',
  showNavigation: true,
  showNeighboringMonth: true
};
var isActiveStartDate = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date);
var isLooseValue = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isValue"]]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isCalendarType"],
  className: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isClassName"],
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isLooseValue,
  defaultView: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isView"],
  formatLongDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatMonthYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatShortWeekday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  maxDate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isMaxDate"],
  maxDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(allViews),
  minDate: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isMinDate"],
  minDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(allViews),
  navigationAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  navigationLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  next2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  next2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  nextAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nextLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  onActiveStartDateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickDay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickDecade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClickYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrillDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onDrillUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onViewChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prev2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prev2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  prevAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prevLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  returnValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['start', 'end', 'range']),
  selectRange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showDoubleView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showNavigation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showNeighboringMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showWeekNumbers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isClassName"]]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  tileDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: isLooseValue,
  view: _shared_propTypes__WEBPACK_IMPORTED_MODULE_9__["isView"]
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Calendar/Navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Calendar/Navigation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");






var className = 'react-calendar__navigation';
function Navigation(_ref) {
  var activeStartDate = _ref.activeStartDate,
      drillUp = _ref.drillUp,
      _ref$formatMonthYear = _ref.formatMonthYear,
      formatMonthYear = _ref$formatMonthYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatMonthYear"] : _ref$formatMonthYear,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatYear"] : _ref$formatYear,
      locale = _ref.locale,
      maxDate = _ref.maxDate,
      minDate = _ref.minDate,
      _ref$navigationAriaLa = _ref.navigationAriaLabel,
      navigationAriaLabel = _ref$navigationAriaLa === void 0 ? '' : _ref$navigationAriaLa,
      navigationLabel = _ref.navigationLabel,
      _ref$next2AriaLabel = _ref.next2AriaLabel,
      next2AriaLabel = _ref$next2AriaLabel === void 0 ? '' : _ref$next2AriaLabel,
      _ref$next2Label = _ref.next2Label,
      next2Label = _ref$next2Label === void 0 ? '»' : _ref$next2Label,
      _ref$nextAriaLabel = _ref.nextAriaLabel,
      nextAriaLabel = _ref$nextAriaLabel === void 0 ? '' : _ref$nextAriaLabel,
      _ref$nextLabel = _ref.nextLabel,
      nextLabel = _ref$nextLabel === void 0 ? '›' : _ref$nextLabel,
      _ref$prev2AriaLabel = _ref.prev2AriaLabel,
      prev2AriaLabel = _ref$prev2AriaLabel === void 0 ? '' : _ref$prev2AriaLabel,
      _ref$prev2Label = _ref.prev2Label,
      prev2Label = _ref$prev2Label === void 0 ? '«' : _ref$prev2Label,
      _ref$prevAriaLabel = _ref.prevAriaLabel,
      prevAriaLabel = _ref$prevAriaLabel === void 0 ? '' : _ref$prevAriaLabel,
      _ref$prevLabel = _ref.prevLabel,
      prevLabel = _ref$prevLabel === void 0 ? '‹' : _ref$prevLabel,
      setActiveStartDate = _ref.setActiveStartDate,
      showDoubleView = _ref.showDoubleView,
      view = _ref.view,
      views = _ref.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== 'century';
  var previousActiveStartDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginPrevious"])(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons && Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginPrevious2"])(view, activeStartDate);
  var nextActiveStartDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginNext"])(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons && Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginNext2"])(view, activeStartDate);

  var prevButtonDisabled = function () {
    if (previousActiveStartDate.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getEndPrevious"])(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function () {
    if (previousActiveStartDate2.getFullYear() < 1000) {
      return true;
    }

    var previousActiveEndDate = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getEndPrevious2"])(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();

  var nextButtonDisabled = maxDate && maxDate <= nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate <= nextActiveStartDate2;

  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate);
  }

  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2);
  }

  function onClickNext() {
    setActiveStartDate(nextActiveStartDate);
  }

  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2);
  }

  function renderLabel(date) {
    var label = function () {
      switch (view) {
        case 'century':
          return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getCenturyLabel"])(locale, formatYear, date);

        case 'decade':
          return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getDecadeLabel"])(locale, formatYear, date);

        case 'year':
          return formatYear(locale, date);

        case 'month':
          return formatMonthYear(locale, date);

        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();

    return navigationLabel ? navigationLabel({
      date: date,
      label: label,
      locale: locale || Object(get_user_locale__WEBPACK_IMPORTED_MODULE_2__["getUserLocale"])(),
      view: view
    }) : label;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    style: {
      display: 'flex'
    }
  }, prev2Label !== null && shouldShowPrevNext2Buttons && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": prev2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
    disabled: prev2ButtonDisabled,
    onClick: onClickPrevious2,
    type: "button"
  }, prev2Label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": prevAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
    disabled: prevButtonDisabled,
    onClick: onClickPrevious,
    type: "button"
  }, prevLabel), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": navigationAriaLabel,
    className: "".concat(className, "__label"),
    disabled: !drillUpAvailable,
    onClick: drillUp,
    style: {
      flexGrow: 1
    },
    type: "button"
  }, renderLabel(activeStartDate), showDoubleView && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, ' ', "\u2013", ' ', renderLabel(nextActiveStartDate))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": nextAriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next-button"),
    disabled: nextButtonDisabled,
    onClick: onClickNext,
    type: "button"
  }, nextLabel), next2Label !== null && shouldShowPrevNext2Buttons && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    "aria-label": next2AriaLabel,
    className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
    disabled: next2ButtonDisabled,
    onClick: onClickNext2,
    type: "button"
  }, next2Label));
}
Navigation.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  drillUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  formatMonthYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  navigationAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  navigationLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  next2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  next2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  nextAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  nextLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  prev2AriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prev2Label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  prevAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prevLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
  setActiveStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showDoubleView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  view: _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["isView"].isRequired,
  views: _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["isViews"].isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenturyView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CenturyView_Decades__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView/Decades */ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js");


function CenturyView(props) {
  function renderDecades() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CenturyView_Decades__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-calendar__century-view"
  }, renderDecades());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decade.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Decade; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var className = 'react-calendar__century-view__decades__decade';
function Decade(_ref) {
  var classes = _ref.classes,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatYear"] : _ref$formatYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDecadeEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDecadeStart"],
    view: "century"
  }), Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["getDecadeLabel"])(locale, formatYear, date));
}
Decade.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["tileProps"], {
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/CenturyView/Decades.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/CenturyView/Decades.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Decades; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Decade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Decade */ "./node_modules/react-calendar/dist/esm/CenturyView/Decade.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Decades(props) {
  var activeStartDate = props.activeStartDate;
  var start = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["getBeginOfCenturyYear"])(activeStartDate);
  var end = start + 99;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    className: "react-calendar__century-view__decades",
    dateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_1__["getDecadeStart"],
    dateType: "decade",
    end: end,
    start: start,
    step: 10,
    tile: _Decade__WEBPACK_IMPORTED_MODULE_3__["default"]
  }));
}
Decades.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileGroupProps"]);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView.js":
/*!************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DecadeView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DecadeView_Years__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DecadeView/Years */ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js");


function DecadeView(props) {
  function renderYears() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DecadeView_Years__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-calendar__decade-view"
  }, renderYears());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Year.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Year; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var className = 'react-calendar__decade-view__years__year';
function Year(_ref) {
  var classes = _ref.classes,
      _ref$formatYear = _ref.formatYear,
      formatYear = _ref$formatYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatYear"] : _ref$formatYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYearEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYearStart"],
    view: "decade"
  }), formatYear(locale, date));
}
Year.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileProps"], {
  formatYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/DecadeView/Years.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/DecadeView/Years.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Years; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Year */ "./node_modules/react-calendar/dist/esm/DecadeView/Year.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function Years(props) {
  var activeStartDate = props.activeStartDate;
  var start = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_3__["getBeginOfDecadeYear"])(activeStartDate);
  var end = start + 9;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    className: "react-calendar__decade-view__years",
    dateTransform: function dateTransform(year) {
      return new Date(year, 0, 1);
    },
    dateType: "year",
    end: end,
    start: start,
    tile: _Year__WEBPACK_IMPORTED_MODULE_2__["default"]
  }));
}
Years.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__["tileGroupProps"]);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Flex.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Flex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Flex; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function toPercent(num) {
  return "".concat(num, "%");
}

function Flex(_ref) {
  var children = _ref.children,
      className = _ref.className,
      direction = _ref.direction,
      count = _ref.count,
      offset = _ref.offset,
      style = _ref.style,
      wrap = _ref.wrap,
      otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: className,
    style: _objectSpread({
      display: 'flex',
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap'
    }, style)
  }, otherProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, _objectSpread({}, child.props, {
      style: {
        flexBasis: toPercent(100 / count),
        maxWidth: toPercent(100 / count),
        overflow: 'hidden',
        marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
      }
    }));
  }));
}
Flex.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])),
  wrap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MonthView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MonthView_Days__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MonthView/Days */ "./node_modules/react-calendar/dist/esm/MonthView/Days.js");
/* harmony import */ var _MonthView_Weekdays__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MonthView/Weekdays */ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js");
/* harmony import */ var _MonthView_WeekNumbers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView/WeekNumbers */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js");
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function getCalendarTypeFromLocale(locale) {
  return Object.keys(_shared_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_TYPE_LOCALES"]).find(function (calendarType) {
    return _shared_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_TYPE_LOCALES"][calendarType].includes(locale);
  }) || _shared_const__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_TYPES"].ISO_8601;
}

function MonthView(props) {
  var activeStartDate = props.activeStartDate,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var _props$calendarType = props.calendarType,
      calendarType = _props$calendarType === void 0 ? getCalendarTypeFromLocale(locale) : _props$calendarType,
      formatShortWeekday = props.formatShortWeekday,
      onClickWeekNumber = props.onClickWeekNumber,
      showWeekNumbers = props.showWeekNumbers,
      childProps = _objectWithoutProperties(props, ["calendarType", "formatShortWeekday", "onClickWeekNumber", "showWeekNumbers"]);

  function renderWeekdays() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView_Weekdays__WEBPACK_IMPORTED_MODULE_3__["default"], {
      calendarType: calendarType,
      formatShortWeekday: formatShortWeekday,
      locale: locale,
      onMouseLeave: onMouseLeave
    });
  }

  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView_WeekNumbers__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeStartDate: activeStartDate,
      calendarType: calendarType,
      onClickWeekNumber: onClickWeekNumber,
      onMouseLeave: onMouseLeave,
      showFixedNumberOfWeeks: showFixedNumberOfWeeks
    });
  }

  function renderDays() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MonthView_Days__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      calendarType: calendarType
    }, childProps));
  }

  var className = 'react-calendar__month-view';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, renderWeekNumbers(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      flexGrow: 1,
      width: '100%'
    }
  }, renderWeekdays(), renderDays())));
}
MonthView.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"],
  formatShortWeekday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showWeekNumbers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Day.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Day.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Day; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var className = 'react-calendar__month-view__days__day';
function Day(_ref) {
  var _ref$formatLongDate = _ref.formatLongDate,
      formatLongDate = _ref$formatLongDate === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatLongDate"] : _ref$formatLongDate,
      calendarType = _ref.calendarType,
      classes = _ref.classes,
      currentMonthIndex = _ref.currentMonthIndex,
      otherProps = _objectWithoutProperties(_ref, ["formatLongDate", "calendarType", "classes", "currentMonthIndex"]);

  var date = otherProps.date;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className, Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["isWeekend"])(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null),
    formatAbbr: formatLongDate,
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDayEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDayStart"],
    view: "month"
  }), Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDate"])(date));
}
Day.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["tileProps"], {
  currentMonthIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  formatLongDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Days.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Days.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Days; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Day */ "./node_modules/react-calendar/dist/esm/MonthView/Day.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








function Days(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType;

  var showFixedNumberOfWeeks = props.showFixedNumberOfWeeks,
      showNeighboringMonth = props.showNeighboringMonth,
      otherProps = _objectWithoutProperties(props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);

  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(activeStartDate);
  var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getDayOfWeek"])(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  /**
   * Defines on which day of the month the grid shall start. If we simply show current
   * month, we obviously start on day one, but if showNeighboringMonth is set to
   * true, we need to find the beginning of the week the first day of the month is in.
   */

  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  /**
   * Defines on which day of the month the grid shall end. If we simply show current
   * month, we need to stop on the last day of the month, but if showNeighboringMonth
   * is set to true, we need to find the end of the week the last day of the month is in.
   */

  var end = function () {
    if (showFixedNumberOfWeeks) {
      // Always show 6 weeks
      return start + 6 * 7 - 1;
    }

    var daysInMonth = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDaysInMonth"])(activeStartDate);

    if (showNeighboringMonth) {
      var activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getDayOfWeek"])(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }

    return daysInMonth;
  }();

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    className: "react-calendar__month-view__days",
    count: 7,
    currentMonthIndex: monthIndex,
    dateTransform: function dateTransform(day) {
      var date = new Date();
      date.setFullYear(year, monthIndex, day);
      date.setHours(0, 0, 0, 0);
      return date;
    },
    dateType: "day",
    end: end,
    offset: offset,
    start: start,
    tile: _Day__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
}
Days.propTypes = _objectSpread({
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"].isRequired,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  showNeighboringMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["tileGroupProps"]);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekNumber; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function WeekNumber(_ref) {
  var date = _ref.date,
      onClickWeekNumber = _ref.onClickWeekNumber,
      weekNumber = _ref.weekNumber;
  var props = {
    className: 'react-calendar__tile',
    style: {
      flexGrow: 1
    }
  };
  var children = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, weekNumber);
  return onClickWeekNumber ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, props, {
    onClick: function onClick(event) {
      return onClickWeekNumber(weekNumber, date, event);
    },
    type: "button"
  }), children) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props, children);
}
WeekNumber.propTypes = {
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  weekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeekNumbers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _WeekNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WeekNumber */ "./node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");







function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate,
      calendarType = props.calendarType,
      onClickWeekNumber = props.onClickWeekNumber,
      onMouseLeave = props.onMouseLeave,
      showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;

  var numberOfWeeks = function () {
    if (showFixedNumberOfWeeks) {
      return 6;
    }

    var numberOfDays = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDaysInMonth"])(activeStartDate);
    var startWeekday = Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getDayOfWeek"])(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();

  var dates = function () {
    var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(activeStartDate);
    var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(activeStartDate);
    var day = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getDate"])(activeStartDate);
    var result = [];

    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getBeginOfWeek"])(new Date(year, monthIndex, day + index * 7), calendarType));
    }

    return result;
  }();

  var weekNumbers = dates.map(function (date) {
    return Object(_shared_dates__WEBPACK_IMPORTED_MODULE_5__["getWeekNumber"])(date, calendarType);
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "react-calendar__month-view__weekNumbers",
    count: numberOfWeeks,
    direction: "column",
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave,
    style: {
      flexBasis: 'calc(100% * (1 / 8)',
      flexShrink: 0
    }
  }, weekNumbers.map(function (weekNumber, weekIndex) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WeekNumber__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: weekNumber,
      date: dates[weekIndex],
      onClickWeekNumber: onClickWeekNumber,
      weekNumber: weekNumber
    });
  }));
}
WeekNumbers.propTypes = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date).isRequired,
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"].isRequired,
  onClickWeekNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  showFixedNumberOfWeeks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/MonthView/Weekdays.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Weekdays; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");







var className = 'react-calendar__month-view__weekdays';
function Weekdays(props) {
  var calendarType = props.calendarType,
      _props$formatShortWee = props.formatShortWeekday,
      formatShortWeekday = _props$formatShortWee === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatShortWeekday"] : _props$formatShortWee,
      locale = props.locale,
      onMouseLeave = props.onMouseLeave;
  var anyDate = new Date();
  var beginOfMonth = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonthStart"])(anyDate);
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(beginOfMonth);
  var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonth"])(beginOfMonth);
  var weekdays = [];

  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - Object(_shared_dates__WEBPACK_IMPORTED_MODULE_4__["getDayOfWeek"])(beginOfMonth, calendarType));
    var abbr = Object(_shared_dateFormatter__WEBPACK_IMPORTED_MODULE_5__["formatWeekday"])(locale, weekdayDate);
    weekdays.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: weekday,
      className: "".concat(className, "__weekday")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
      "aria-label": abbr,
      title: abbr
    }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: className,
    count: 7,
    onFocus: onMouseLeave,
    onMouseOver: onMouseLeave
  }, weekdays);
}
Weekdays.propTypes = {
  calendarType: _shared_propTypes__WEBPACK_IMPORTED_MODULE_6__["isCalendarType"].isRequired,
  formatShortWeekday: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/Tile.js":
/*!******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/Tile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var merge_class_names__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! merge-class-names */ "./node_modules/merge-class-names/dist/esm/index.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function getValue(nextProps, prop) {
  var activeStartDate = nextProps.activeStartDate,
      date = nextProps.date,
      view = nextProps.view;
  return typeof prop === 'function' ? prop({
    activeStartDate: activeStartDate,
    date: date,
    view: view
  }) : prop;
}

var Tile =
/*#__PURE__*/
function (_Component) {
  _inherits(Tile, _Component);

  function Tile() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    return _this;
  }

  _createClass(Tile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeStartDate = _this$props.activeStartDate,
          children = _this$props.children,
          classes = _this$props.classes,
          date = _this$props.date,
          formatAbbr = _this$props.formatAbbr,
          locale = _this$props.locale,
          maxDate = _this$props.maxDate,
          maxDateTransform = _this$props.maxDateTransform,
          minDate = _this$props.minDate,
          minDateTransform = _this$props.minDateTransform,
          onClick = _this$props.onClick,
          onMouseOver = _this$props.onMouseOver,
          style = _this$props.style,
          tileDisabled = _this$props.tileDisabled,
          view = _this$props.view;
      var _this$state = this.state,
          tileClassName = _this$state.tileClassName,
          tileContent = _this$state.tileContent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: Object(merge_class_names__WEBPACK_IMPORTED_MODULE_2__["default"])(classes, tileClassName),
        disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
          activeStartDate: activeStartDate,
          date: date,
          view: view
        }),
        onClick: onClick && function (event) {
          return onClick(date, event);
        },
        onFocus: onMouseOver && function () {
          return onMouseOver(date);
        },
        onMouseOver: onMouseOver && function () {
          return onMouseOver(date);
        },
        style: style,
        type: "button"
      }, formatAbbr ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("abbr", {
        "aria-label": formatAbbr(locale, date)
      }, children) : children, tileContent);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var tileClassName = nextProps.tileClassName,
          tileContent = nextProps.tileContent;
      var nextState = {};

      if (tileClassName !== prevState.tileClassNameProps) {
        nextState.tileClassName = getValue(nextProps, tileClassName);
        nextState.tileClassNameProps = tileClassName;
      }

      if (tileContent !== prevState.tileContentProps) {
        nextState.tileContent = getValue(nextProps, tileContent);
        nextState.tileContentProps = tileContent;
      }

      return nextState;
    }
  }]);

  return Tile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Tile.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_3__["tileProps"], {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  formatAbbr: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  maxDateTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  minDateTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/TileGroup.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/TileGroup.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Flex */ "./node_modules/react-calendar/dist/esm/Flex.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-calendar/dist/esm/shared/utils.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function TileGroup(_ref) {
  var className = _ref.className,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 3 : _ref$count,
      dateTransform = _ref.dateTransform,
      dateType = _ref.dateType,
      end = _ref.end,
      hover = _ref.hover,
      offset = _ref.offset,
      start = _ref.start,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      Tile = _ref.tile,
      value = _ref.value,
      valueType = _ref.valueType,
      tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);

  var tiles = [];

  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tile, _extends({
      key: date.getTime(),
      classes: Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getTileClasses"])({
        value: value,
        valueType: valueType,
        date: date,
        dateType: dateType,
        hover: hover
      }),
      date: date,
      point: point
    }, tileProps)));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Flex__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    count: count,
    offset: offset,
    wrap: true
  }, tiles);
}
TileGroup.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_4__["tileGroupProps"], {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(Date),
  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  dateTransform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  tile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YearView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _YearView_Months__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YearView/Months */ "./node_modules/react-calendar/dist/esm/YearView/Months.js");


function YearView(props) {
  function renderMonths() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_YearView_Months__WEBPACK_IMPORTED_MODULE_1__["default"], props);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "react-calendar__year-view"
  }, renderMonths());
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Month.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Month.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Month; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile */ "./node_modules/react-calendar/dist/esm/Tile.js");
/* harmony import */ var _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var className = 'react-calendar__year-view__months__month';
function Month(_ref) {
  var classes = _ref.classes,
      _ref$formatMonth = _ref.formatMonth,
      formatMonth = _ref$formatMonth === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatMonth"] : _ref$formatMonth,
      _ref$formatMonthYear = _ref.formatMonthYear,
      formatMonthYear = _ref$formatMonthYear === void 0 ? _shared_dateFormatter__WEBPACK_IMPORTED_MODULE_4__["formatMonthYear"] : _ref$formatMonthYear,
      otherProps = _objectWithoutProperties(_ref, ["classes", "formatMonth", "formatMonthYear"]);

  var date = otherProps.date,
      locale = otherProps.locale;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, otherProps, {
    classes: [].concat(classes, className),
    formatAbbr: formatMonthYear,
    maxDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonthEnd"],
    minDateTransform: _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getMonthStart"],
    view: "year"
  }), formatMonth(locale, date));
}
Month.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileProps"], {
  formatMonth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  formatMonthYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/YearView/Months.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/YearView/Months.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Months; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _TileGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TileGroup */ "./node_modules/react-calendar/dist/esm/TileGroup.js");
/* harmony import */ var _Month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Month */ "./node_modules/react-calendar/dist/esm/YearView/Month.js");
/* harmony import */ var _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/propTypes */ "./node_modules/react-calendar/dist/esm/shared/propTypes.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Months(props) {
  var activeStartDate = props.activeStartDate;
  var start = 0;
  var end = 11;
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_2__["getYear"])(activeStartDate);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TileGroup__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
    className: "react-calendar__year-view__months",
    dateTransform: function dateTransform(monthIndex) {
      return new Date(year, monthIndex, 1);
    },
    dateType: "month",
    end: end,
    start: start,
    tile: _Month__WEBPACK_IMPORTED_MODULE_4__["default"]
  }));
}
Months.propTypes = _objectSpread({}, _shared_propTypes__WEBPACK_IMPORTED_MODULE_5__["tileGroupProps"], {
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/index.js ***!
  \*******************************************************/
/*! exports provided: default, Calendar, CenturyView, DecadeView, YearView, MonthView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar */ "./node_modules/react-calendar/dist/esm/Calendar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _CenturyView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CenturyView */ "./node_modules/react-calendar/dist/esm/CenturyView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CenturyView", function() { return _CenturyView__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _DecadeView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DecadeView */ "./node_modules/react-calendar/dist/esm/DecadeView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DecadeView", function() { return _DecadeView__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _YearView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./YearView */ "./node_modules/react-calendar/dist/esm/YearView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YearView", function() { return _YearView__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _MonthView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MonthView */ "./node_modules/react-calendar/dist/esm/MonthView.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonthView", function() { return _MonthView__WEBPACK_IMPORTED_MODULE_4__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = (_Calendar__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/const.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/const.js ***!
  \**************************************************************/
/*! exports provided: CALENDAR_TYPES, CALENDAR_TYPE_LOCALES, WEEKDAYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_TYPES", function() { return CALENDAR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR_TYPE_LOCALES", function() { return CALENDAR_TYPE_LOCALES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAYS", function() { return WEEKDAYS; });
var _CALENDAR_TYPE_LOCALE;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CALENDAR_TYPES = {
  ARABIC: 'Arabic',
  HEBREW: 'Hebrew',
  ISO_8601: 'ISO 8601',
  US: 'US'
};
var CALENDAR_TYPE_LOCALES = (_CALENDAR_TYPE_LOCALE = {}, _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.US, ['en-CA', 'en-US', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-SV', 'es-VE', 'pt-BR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.ARABIC, [// ar-LB, ar-MA intentionally missing
'ar', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LY', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-YE', 'dv', 'dv-MV', 'ps', 'ps-AR']), _defineProperty(_CALENDAR_TYPE_LOCALE, CALENDAR_TYPES.HEBREW, ['he', 'he-IL']), _CALENDAR_TYPE_LOCALE);
var WEEKDAYS = _toConsumableArray(Array(7)).map(function (el, index) {
  return index;
});

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dateFormatter.js ***!
  \**********************************************************************/
/*! exports provided: formatDate, formatLongDate, formatMonth, formatMonthYear, formatYear, formatShortWeekday, formatWeekday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLongDate", function() { return formatLongDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMonth", function() { return formatMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMonthYear", function() { return formatMonthYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatYear", function() { return formatYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatShortWeekday", function() { return formatShortWeekday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWeekday", function() { return formatWeekday; });
/* harmony import */ var get_user_locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-user-locale */ "./node_modules/get-user-locale/dist/esm/index.js");


function getFormatter(options) {
  return function (locale, date) {
    return date.toLocaleString(locale || Object(get_user_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(), options);
  };
}
/**
 * Changes the hour in a Date to ensure right date formatting even if DST is messed up.
 * Workaround for bug in WebKit and Firefox with historical dates.
 * For more details, see:
 * https://bugs.chromium.org/p/chromium/issues/detail?id=750465
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1385643
 *
 * @param {Date} date Date.
 */


function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}

function getSafeFormatter(options) {
  return function (locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}

var formatDateOptions = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric'
};
var formatLongDateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
var formatMonthOptions = {
  month: 'long'
};
var formatMonthYearOptions = {
  month: 'long',
  year: 'numeric'
};
var formatYearOptions = {
  year: 'numeric'
};
var formatShortWeekdayOptions = {
  weekday: 'short'
};
var formatWeekdayOptions = {
  weekday: 'long'
};
var formatDate = getSafeFormatter(formatDateOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatYear = getSafeFormatter(formatYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/dates.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/dates.js ***!
  \**************************************************************/
/*! exports provided: getDayOfWeek, getBeginOfCenturyYear, getBeginOfDecadeYear, getBeginOfWeek, getWeekNumber, getBegin, getBeginPrevious, getBeginNext, getBeginPrevious2, getBeginNext2, getEnd, getEndPrevious, getEndPrevious2, getRange, getValueRange, getCenturyLabel, getDecadeLabel, isWeekend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDayOfWeek", function() { return getDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginOfCenturyYear", function() { return getBeginOfCenturyYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginOfDecadeYear", function() { return getBeginOfDecadeYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginOfWeek", function() { return getBeginOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekNumber", function() { return getWeekNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBegin", function() { return getBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginPrevious", function() { return getBeginPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginNext", function() { return getBeginNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginPrevious2", function() { return getBeginPrevious2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBeginNext2", function() { return getBeginNext2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnd", function() { return getEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndPrevious", function() { return getEndPrevious; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndPrevious2", function() { return getEndPrevious2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRange", function() { return getRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueRange", function() { return getValueRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCenturyLabel", function() { return getCenturyLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecadeLabel", function() { return getDecadeLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeekend", function() { return isWeekend; });
/* harmony import */ var _wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wojtekmaj/date-utils */ "./node_modules/@wojtekmaj/date-utils/dist/esm/index.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
/* harmony import */ var _dateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dateFormatter */ "./node_modules/react-calendar/dist/esm/shared/dateFormatter.js");



var SUNDAY = _const__WEBPACK_IMPORTED_MODULE_1__["WEEKDAYS"][0];
var FRIDAY = _const__WEBPACK_IMPORTED_MODULE_1__["WEEKDAYS"][5];
var SATURDAY = _const__WEBPACK_IMPORTED_MODULE_1__["WEEKDAYS"][6];
/* Simple getters - getting a property of a given point in time */

function getDayOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601:
      // Shifts days of the week so that Monday is 0, Sunday is 6
      return (weekday + 6) % 7;

    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ARABIC:
      return (weekday + 1) % 7;

    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].HEBREW:
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US:
      return weekday;

    default:
      throw new Error('Unsupported calendar type.');
  }
}
/**
 * Century
 */

function getBeginOfCenturyYear(date) {
  var beginOfCentury = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyStart"])(date);
  return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(beginOfCentury);
}
/**
 * Decade
 */

function getBeginOfDecadeYear(date) {
  var beginOfDecade = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeStart"])(date);
  return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(beginOfDecade);
}
/**
 * Week
 */

/**
 * Returns the beginning of a given week.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */

function getBeginOfWeek(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(date);
  var monthIndex = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonth"])(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
/**
 * Gets week number according to ISO 8601 or US standard.
 * In ISO 8601, Arabic and Hebrew week 1 is the one with January 4.
 * In US calendar week 1 is the one with January 1.
 *
 * @param {Date} date Date.
 * @param {String} calendarType Calendar type. Can be ISO 8601 or US.
 */

function getWeekNumber(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var calendarTypeForWeekNumber = calendarType === _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US ? _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
  var year = Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYear"])(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek; // Look for the first week one that does not come after a given date

  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
    year -= 1;
  } while (date - beginOfFirstWeek < 0);

  return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
}
/**
 * Others
 */

/**
 * Returns the beginning of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getBegin(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyStart"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeStart"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYearStart"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonthStart"])(date);

    case 'day':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDayStart"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousCenturyStart"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeStart"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearStart"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthStart"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextCenturyStart"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextDecadeStart"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextYearStart"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextMonthStart"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeStart"])(date, -100);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearStart"])(date, -10);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthStart"])(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
var getBeginNext2 = function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextDecadeStart"])(date, 100);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextYearStart"])(date, 10);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getNextMonthStart"])(date, 12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getEnd(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyEnd"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeEnd"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYearEnd"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonthEnd"])(date);

    case 'day':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDayEnd"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousCenturyEnd"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeEnd"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearEnd"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthEnd"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousDecadeEnd"])(date, -100);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousYearEnd"])(date, -10);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getPreviousMonthEnd"])(date, -12);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
};
/**
 * Returns an array with the beginning and the end of a given range.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date Date.
 */

function getRange(rangeType, date) {
  switch (rangeType) {
    case 'century':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyRange"])(date);

    case 'decade':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeRange"])(date);

    case 'year':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getYearRange"])(date);

    case 'month':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getMonthRange"])(date);

    case 'day':
      return Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDayRange"])(date);

    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
/**
 * Creates a range out of two values, ensuring they are in order and covering entire period ranges.
 *
 * @param {String} rangeType Range type (e.g. 'day')
 * @param {Date} date1 First date.
 * @param {Date} date2 Second date.
 */

function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function (a, b) {
    return a - b;
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}

function toYearLabel(locale) {
  var formatYear = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _dateFormatter__WEBPACK_IMPORTED_MODULE_2__["formatYear"];
  var dates = arguments.length > 2 ? arguments[2] : undefined;
  return dates.map(function (date) {
    return formatYear(locale, date);
  }).join(' – ');
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2001-2100.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */


function getCenturyLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getCenturyRange"])(date));
}
/**
 * Returns a string labelling a century of a given date.
 * For example, for 2017 it will return 2011-2020.
 *
 * @param {Date|String|Number} date Date or a year as a string or as a number.
 */

function getDecadeLabel(locale, formatYear, date) {
  return toYearLabel(locale, formatYear, Object(_wojtekmaj_date_utils__WEBPACK_IMPORTED_MODULE_0__["getDecadeRange"])(date));
}
/**
 * Returns a boolean determining whether a given date is on Saturday or Sunday.
 *
 * @param {Date} date Date.
 */

function isWeekend(date) {
  var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601;
  var weekday = date.getDay();

  switch (calendarType) {
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ARABIC:
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;

    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].ISO_8601:
    case _const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"].US:
      return weekday === SATURDAY || weekday === SUNDAY;

    default:
      throw new Error('Unsupported calendar type.');
  }
}

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/propTypes.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/propTypes.js ***!
  \******************************************************************/
/*! exports provided: isCalendarType, isMinDate, isMaxDate, isValue, isViews, isClassName, isView, tileGroupProps, tileProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCalendarType", function() { return isCalendarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMinDate", function() { return isMinDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMaxDate", function() { return isMaxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValue", function() { return isValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isViews", function() { return isViews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClassName", function() { return isClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isView", function() { return isView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileGroupProps", function() { return tileGroupProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tileProps", function() { return tileProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/react-calendar/dist/esm/shared/const.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var calendarTypes = Object.values(_const__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_TYPES"]);
var allViews = ['century', 'decade', 'year', 'month'];
var isCalendarType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(calendarTypes);
var isMinDate = function isMinDate(props, propName, componentName) {
  var minDate = props[propName];

  if (!minDate) {
    return null;
  }

  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var maxDate = props.maxDate;

  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }

  return null;
};
var isMaxDate = function isMaxDate(props, propName, componentName) {
  var maxDate = props[propName];

  if (!maxDate) {
    return null;
  }

  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }

  var minDate = props.minDate;

  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }

  return null;
};
var isValue = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date))]);
var isViews = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(allViews));
var isClassName = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)]);
var isView = function isView(props, propName, componentName) {
  var view = props[propName];
  var views = props.views;
  var allowedViews = views || allViews;

  if (view !== undefined && allowedViews.indexOf(view) === -1) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allowedViews.map(function (a) {
      return "\"".concat(a, "\"");
    }).join(', '), "]."));
  } // Everything is fine


  return null;
};

isView.isRequired = function (props, propName, componentName) {
  var view = props[propName];

  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }

  return isView(props, propName, componentName);
};

var tileGroupProps = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date).isRequired,
  hover: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date),
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]),
  value: isValue,
  valueType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
};
var tileProps = {
  activeStartDate: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date).isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string).isRequired,
  date: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.instanceOf(Date).isRequired,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.objectOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number])),
  tileClassName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, isClassName]),
  tileContent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node]),
  tileDisabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/***/ }),

/***/ "./node_modules/react-calendar/dist/esm/shared/utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-calendar/dist/esm/shared/utils.js ***!
  \**************************************************************/
/*! exports provided: between, callIfDefined, isValueWithinRange, isRangeWithinRange, doRangesOverlap, getTileClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callIfDefined", function() { return callIfDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueWithinRange", function() { return isValueWithinRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRangeWithinRange", function() { return isRangeWithinRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doRangesOverlap", function() { return doRangesOverlap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileClasses", function() { return getTileClasses; });
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dates */ "./node_modules/react-calendar/dist/esm/shared/dates.js");

/**
 * Returns a value no smaller than min and no larger than max.
 *
 * @param {*} value Value to return.
 * @param {*} min Minimum return value.
 * @param {*} max Maximum return value.
 */

function between(value, min, max) {
  if (min && min > value) {
    return min;
  }

  if (max && max < value) {
    return max;
  }

  return value;
}
/**
 * Calls a function, if it's defined, with specified arguments
 * @param {Function} fn
 * @param {Object} args
 */

function callIfDefined(fn) {
  if (fn && typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    fn.apply(void 0, args);
  }
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getTileClasses() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      value = _ref.value,
      valueType = _ref.valueType,
      date = _ref.date,
      dateType = _ref.dateType,
      hover = _ref.hover;

  var className = 'react-calendar__tile';
  var classes = [className];

  if (!date) {
    return classes;
  }

  if (!(date instanceof Array) && !dateType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var now = new Date();
  var dateRange = date instanceof Array ? date : Object(_dates__WEBPACK_IMPORTED_MODULE_0__["getRange"])(dateType, date);

  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className, "--now"));
  }

  if (!value) {
    return classes;
  }

  if (!(value instanceof Array) && !valueType) {
    throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
  }

  var valueRange = value instanceof Array ? value : Object(_dates__WEBPACK_IMPORTED_MODULE_0__["getRange"])(valueType, value);

  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className, "--hasActive"));
  } else if (hover && ( // Date before value
  dateRange[1] < valueRange[0] && doRangesOverlap(dateRange, [hover, valueRange[0]]) || // Date after value
  dateRange[0] > valueRange[1] && doRangesOverlap(dateRange, [valueRange[1], hover]))) {
    classes.push("".concat(className, "--hover"));
  }

  var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
  var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);

  if (isRangeStart) {
    classes.push("".concat(className, "--rangeStart"));
  }

  if (isRangeEnd) {
    classes.push("".concat(className, "--rangeEnd"));
  }

  if (isRangeStart && isRangeEnd) {
    classes.push("".concat(className, "--rangeBothEnds"));
  }

  return classes;
}

/***/ })

})
//# sourceMappingURL=index.js.3cf5feab5f16fbe28146.hot-update.js.map