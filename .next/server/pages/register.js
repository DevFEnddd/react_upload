module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CounterSingle/CounterSingle.js":
/*!***************************************************!*\
  !*** ./components/CounterSingle/CounterSingle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _counter_single_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter-single-style */ "./components/CounterSingle/counter-single-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\CounterSingle\\CounterSingle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function CounterSingle(props) {
  const classes = Object(_counter_single_style__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_7__["useText"])();
  const {
    t
  } = props;
  const {
    0: play,
    1: setPlay
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const countup = (val, isPlay) => __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, isPlay ? __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
    end: val,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }) : 0);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };

  return __jsx("div", {
    className: classes.counterWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    maxWidth: "md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animation: "fadeIn",
    offset: 200,
    callback: handlePlay,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h4",
    className: text.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, countup(2, play), "\xA0", countup(234, play), "\xA0", countup(567, play)), __jsx("p", {
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, t('common:crypto-landing.footer_counter')))));
}

CounterSingle.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])(['crypto-landing'])(CounterSingle));

/***/ }),

/***/ "./components/CounterSingle/counter-single-style.js":
/*!**********************************************************!*\
  !*** ./components/CounterSingle/counter-single-style.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const counterStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  counterWrap: {
    position: 'relative',
    margin: theme.spacing(5, 0),
    textAlign: 'center',
    '& h4': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        fontSize: 36
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (counterStyles);

/***/ }),

/***/ "./components/CounterSingle/index.js":
/*!*******************************************!*\
  !*** ./components/CounterSingle/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CounterSingle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CounterSingle */ "./components/CounterSingle/CounterSingle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _CounterSingle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Decoration/HexaDeco.js":
/*!*******************************************!*\
  !*** ./components/Decoration/HexaDeco.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HexaDeco; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _decoration_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decoration-style */ "./components/Decoration/decoration-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Decoration\\HexaDeco.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function HexaDeco(props) {
  const classes = Object(_decoration_style__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const {
    extend
  } = props;
  return __jsx("div", {
    className: classes.hexaDeco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, extend && __jsx("div", {
    className: classes.extendDeco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.hexa, classes.top),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("use", {
    xlinkHref: "/images/crypto/deco-hexa.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: classes.decoBg,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }));
}
HexaDeco.propTypes = {
  extend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
HexaDeco.defaultProps = {
  extend: false
};

/***/ }),

/***/ "./components/Decoration/decoration-style.js":
/*!***************************************************!*\
  !*** ./components/Decoration/decoration-style.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const hexaSecondary = '/images/crypto/hexa-secondary.svg';
const hexaAccent = '/images/crypto/hexa-accent.svg';
const decorationStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  decoBg: {
    position: 'absolute',
    left: 0,
    top: theme.spacing(5),
    width: '100%',
    height: '100%',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '&:before': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      top: 300,
      left: -10,
      background: `url(${hexaAccent}) no-repeat`
    },
    '&:after': {
      content: '""',
      width: 80,
      height: 80,
      position: 'absolute',
      top: 100,
      right: -30,
      background: `url(${hexaSecondary}) no-repeat`
    }
  },
  extendDeco: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    '& svg': {
      position: 'absolute',
      fill: '#A9A9A9',
      opacity: 0.2,
      width: 300,
      height: 300,
      transform: 'rotate(30deg) scale(0.75)',
      transformOrigin: 'top center'
    }
  },
  top: {},
  bottom: {},
  hexa: {
    '&$top': {
      top: 0,
      left: 40
    },
    '&$bottom': {
      right: 0,
      bottom: -220
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (decorationStyles);

/***/ }),

/***/ "./components/Footer/Basic.js":
/*!************************************!*\
  !*** ./components/Footer/Basic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Header_data_single__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Header/data/single */ "./components/Header/data/single.js");
/* harmony import */ var _basic_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-style */ "./components/Footer/basic-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Footer\\Basic.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "body2",
    display: "block",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_6___default.a.crypto.footerText);
}

function Basic(props) {
  const classes = Object(_basic_style__WEBPACK_IMPORTED_MODULE_9__["default"])();
  const {
    t
  } = props;
  return __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, _Header_data_single__WEBPACK_IMPORTED_MODULE_8__["default"].map((item, index) => __jsx("li", {
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: '#' + item,
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, t('common:crypto-landing.header_' + item)))))), __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "FB",
    className: classes.icon,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "ion-social-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "TW",
    className: classes.icon,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "ion-social-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "IG",
    className: classes.icon,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "ion-social-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: classes.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })));
}

Basic.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["withTranslation"])(['crypto-landing'])(Basic));

/***/ }),

/***/ "./components/Footer/Blog.js":
/*!***********************************!*\
  !*** ./components/Footer/Blog.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Language */ "@material-ui/icons/Language");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "@material-ui/core/ButtonBase");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/images/logo-crypto.svg */ "./public/images/logo-crypto.svg");
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _blog_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog-style */ "./components/Footer/blog-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Footer\\Blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "body2",
    display: "block",
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_14___default.a.crypto.footerText);
}

const footer = {
  title: 'Quick Links',
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use']
};
const news = [{
  type: 'news',
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_15__["default"].photo[4]
}, {
  type: 'news',
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_15__["default"].photo[1]
}, {
  type: 'news',
  text: 'Sed imperdiet enim ligula vitae viverra.',
  img: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_15__["default"].photo[3]
}];

function Blog(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = Object(_blog_style__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const {
    t
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lang: 'eng'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValues({
      lang: _i18n__WEBPACK_IMPORTED_MODULE_16__["i18n"].language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_16__["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_16__["i18n"].changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    fixed: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h6",
    color: "textPrimary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_14___default.a.crypto.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "textPrimary",
    className: classes.footerDesc,
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, t('common:crypto-landing.banner_subtitle')), __jsx("div", {
    className: classes.quickLinks,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h6",
    className: classes.title,
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, t('common:footer_link')), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 15
    }
  }, footer.description.map((item, index) => __jsx("li", {
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    }
  }, item)))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, news.map((item, index) => __jsx(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.blogItem,
    href: "#",
    key: index.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 15
    }
  }, __jsx("figure", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: item.img,
    alt: "thumb",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: classes.listText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "button",
    className: classes.category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 19
    }
  }, t('common:footer_news')), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    display: "block",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 19
    }
  }, "Sed imperdiet enim ligula vitae viverra. "))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
    "aria-label": "FB",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-social-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-social-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
    "aria-label": "IG",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-social-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12___default.a, {
    "aria-label": "LI",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: "ion-social-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }))), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_8___default.a, {
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: classes.icon,
      position: "start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 19
      }
    })),
    className: classes.selectLang,
    classes: {
      selectMenu: classes.selectMenu
    },
    input: __jsx(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_9___default.a, {
      labelWidth: 200,
      name: "lang",
      id: "outlined-lang-simple",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 22
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: "eng",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, "English"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: "deu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, "Deutsch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: "ara",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 15
    }
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: "ind",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, "Bahasa Indonesia"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: "prt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "Portugu\xEAs"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_10___default.a, {
    value: "zho",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 15
    }
  }, "\u7B80\u4F53\u4E2D\u6587")), __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  })))));
}

Blog.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Blog.defaultProps = {
  toggleDir: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_16__["withTranslation"])(['crypto-landing'])(Blog));

/***/ }),

/***/ "./components/Footer/Contact.js":
/*!**************************************!*\
  !*** ./components/Footer/Contact.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/images/logo-crypto.svg */ "./public/images/logo-crypto.svg");
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _contact_style__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact-style */ "./components/Footer/contact-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Footer\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Contact(props) {
  const classes = Object(_contact_style__WEBPACK_IMPORTED_MODULE_19__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_18__["useText"])();
  const align = Object(_theme_common__WEBPACK_IMPORTED_MODULE_18__["useTextAlign"])();
  const {
    t
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const {
    0: openNotif,
    1: setNotif
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.down('sm'));
  return __jsx("footer", {
    className: classes.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.root,
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 3,
    direction: isMobile ? 'column-reverse' : 'row',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 12,
    md: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mx: {
      sm: 5
    },
    mt: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), _public_text_brand__WEBPACK_IMPORTED_MODULE_17___default.a.crypto.name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, t('common:crypto-landing.banner_subtitle')), __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-social-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-social-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-social-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "ion-social-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: classes.contact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: text.paragraph,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, t('common:blog_phone'), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }), "+12 345 678 90"), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: classes.divider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: text.paragraph,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Skype", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }), "jenadoe.skype"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
    mt: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "subtitle2",
    className: align.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_17___default.a.crypto.footerText))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 12,
    md: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.formWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    key: "top right",
    open: openNotif,
    autoHideDuration: 4000,
    onClose: handleClose,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: __jsx("span", {
      id: "message-id",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 26
      }
    }, "Message Sent"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.formBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    lg: 5,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, __jsx("h3", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, text.title),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 21
    }
  }, t('common:contact_title2'))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    lg: 7,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 21
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15__["ValidatorForm"], {
    onSubmit: handleSubmit,
    onError: errors => console.log(errors),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15__["TextValidator"], {
    className: classes.input,
    label: t('common:form_name'),
    onChange: handleChange('name'),
    name: "Name",
    variant: "filled",
    value: values.name,
    validators: ['required'],
    errorMessages: ['this field is required'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  }), __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15__["TextValidator"], {
    className: classes.input,
    label: t('common:form_email'),
    onChange: handleChange('email'),
    name: "Email",
    variant: "filled",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['this field is required', 'email is not valid'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }), __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_15__["TextValidator"], {
    multiline: true,
    rows: "6",
    variant: "filled",
    className: classes.input,
    label: t('common:form_message'),
    onChange: handleChange('message'),
    name: "Message",
    value: values.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    type: "submit",
    fullWidth: true,
    color: "primary",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 27
    }
  }, t('common:form_send')))))))))))));
}

Contact.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_14__["withTranslation"])(['crypto-landing'])(Contact));

/***/ }),

/***/ "./components/Footer/FooterExtend.js":
/*!*******************************************!*\
  !*** ./components/Footer/FooterExtend.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _CounterSingle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CounterSingle */ "./components/CounterSingle/index.js");
/* harmony import */ var _footer_extend_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer-extend-style */ "./components/Footer/footer-extend-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Footer\\FooterExtend.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function FooterExtend(props) {
  const classes = Object(_footer_extend_style__WEBPACK_IMPORTED_MODULE_7__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_5__["useText"])();
  const {
    withCounter,
    children
  } = props;
  const {
    t
  } = props;
  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.footerCounter, withCounter ? classes.extend : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: classes.deco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }), withCounter && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_CounterSingle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: classes.action,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, t('common:about_ready')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    color: "secondary",
    size: "large",
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, t('common:crypto-landing.getstarted')))), children);
}

FooterExtend.propTypes = {
  withCounter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
FooterExtend.defaultProps = {
  withCounter: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_4__["withTranslation"])(['crypto-landing'])(FooterExtend));

/***/ }),

/***/ "./components/Footer/Main.js":
/*!***********************************!*\
  !*** ./components/Footer/Main.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../theme/config */ "./theme/config.js");
/* harmony import */ var _SiteMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteMap */ "./components/Footer/SiteMap.js");
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Blog */ "./components/Footer/Blog.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact */ "./components/Footer/Contact.js");
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Basic */ "./components/Footer/Basic.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Footer\\Main.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Main() {
  const {
    0: state
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(null, _theme_config__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, state.footer === 'basic' && __jsx(_Basic__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 37
    }
  }), state.footer === 'blog' && __jsx(_Blog__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 36
    }
  }), state.footer === 'contact' && __jsx(_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 39
    }
  }), state.footer === 'sitemap' && __jsx(_SiteMap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 39
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/Footer/SiteMap.js":
/*!**************************************!*\
  !*** ./components/Footer/SiteMap.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Accordion */ "@material-ui/core/Accordion");
/* harmony import */ var _material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/AccordionSummary */ "@material-ui/core/AccordionSummary");
/* harmony import */ var _material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AccordionDetails */ "@material-ui/core/AccordionDetails");
/* harmony import */ var _material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Language */ "@material-ui/icons/Language");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../public/images/logo-crypto.svg */ "./public/images/logo-crypto.svg");
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _sitemap_style__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sitemap-style */ "./components/Footer/sitemap-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Footer\\SiteMap.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


























function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "body2",
    display: "block",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_21___default.a.crypto.footerText);
}

const footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations'],
  link: ['#team', '#history', '#contact-us', '#locations']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  link: ['#resource', '#resource-name', '#another-resource', '#final-resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use'],
  link: ['#privacy-policy', '#terms-of-use']
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // Theme breakpoints

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default()(theme.breakpoints.up('md'));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_12___default()(theme.breakpoints.down('sm')); // Translation Function

  const {
    t
  } = props;
  const classes = Object(_sitemap_style__WEBPACK_IMPORTED_MODULE_23__["default"])();
  const align = Object(_theme_common__WEBPACK_IMPORTED_MODULE_22__["useTextAlign"])();
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lang: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValues({
      lang: _i18n__WEBPACK_IMPORTED_MODULE_19__["i18n"].language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_19__["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_19__["i18n"].changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    maxWidth: "lg",
    component: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.footer,
    container: true,
    spacing: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), _public_text_brand__WEBPACK_IMPORTED_MODULE_21___default.a.crypto.projectName), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "textPrimary",
    className: classes.footerDesc,
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, t('common:crypto-landing.banner_subtitle')), isDesktop && __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 25
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    justify: "space-evenly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, footers.map(footer => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 3,
    key: footer.title,
    className: classes.siteMapItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }, isDesktop && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "h6",
    className: classes.title,
    color: "textPrimary",
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, footer.title), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 21
    }
  }, footer.description.map((item, index) => __jsx("li", {
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 25
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 27
    }
  }, item))))), isMobile && __jsx(_material_ui_core_Accordion__WEBPACK_IMPORTED_MODULE_6___default.a, {
    square: true,
    classes: {
      root: classes.accordionRoot
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 19
    }
  }, __jsx(_material_ui_core_AccordionSummary__WEBPACK_IMPORTED_MODULE_7___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_11___default.a, {
      className: classes.accordionIcon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 35
      }
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    classes: {
      content: classes.accordionContent
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, __jsx("strong", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, footer.title)), __jsx(_material_ui_core_AccordionDetails__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 23
    }
  }, footer.description.map((item, index) => __jsx("li", {
    key: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_17___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }, item)))))))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.socmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, {
    "aria-label": "FB",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ion-social-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ion-social-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, {
    "aria-label": "IG",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ion-social-instagram",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18___default.a, {
    "aria-label": "LI",
    className: classes.margin,
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "ion-social-linkedin",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_14___default.a, {
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.icon,
      position: "start",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }
    })),
    className: classes.selectLang,
    input: __jsx(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_15___default.a, {
      labelWidth: 200,
      name: "lang",
      id: "outlined-lang-simple",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 20
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
    value: "eng",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, "English"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
    value: "deu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, "Deutsch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
    value: "ara",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
    value: "ind",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }, "Bahasa Indonesia"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
    value: "prt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, "Portugu\xEAs"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_16___default.a, {
    value: "zho",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, "\u7B80\u4F53\u4E2D\u6587")))), isMobile && __jsx("div", {
    className: align.textCenter,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    p: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, __jsx(Copyright, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }))));
}

Footer.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Footer.defaultProps = {
  toggleDir: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_19__["withTranslation"])(['crypto-landing'])(Footer));

/***/ }),

/***/ "./components/Footer/basic-style.js":
/*!******************************************!*\
  !*** ./components/Footer/basic-style.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const basicStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  footer: {
    position: 'relative',
    paddingBottom: theme.spacing(5)
  },
  root: {
    marginTop: theme.spacing(5),
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    '& nav': {
      margin: theme.spacing(6, 0),
      '& ul': {
        margin: 0,
        padding: 0,
        '& li': {
          display: 'inline-block',
          margin: theme.spacing(0, 1),
          '& a': {
            textTransform: 'capitalize',
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightMedium,
            textDecoration: 'none !important',
            padding: theme.spacing(0, 1),
            fontSize: 18,
            [theme.breakpoints.down('xs')]: {
              fontSize: 16
            }
          }
        }
      }
    }
  },
  logo: {
    marginBottom: theme.spacing(3),
    '& img': {
      width: 70
    }
  },
  subscribe: {
    maxWidth: 560,
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    position: 'relative',
    '& h5': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  form: {
    display: 'block',
    position: 'relative',
    marginTop: theme.spacing(3)
  },
  field: {
    width: '100%',
    '& input': {
      paddingRight: theme.spacing(20),
      [theme.breakpoints.down('xs')]: {
        paddingRight: 90
      }
    }
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 90
  },
  socmed: {
    display: 'flex',
    width: 200,
    margin: `0 auto ${theme.spacing(6)}px`,
    justifyContent: 'space-between'
  },
  icon: {
    padding: theme.spacing(),
    background: theme.palette.divider,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '&:hover': {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.light
    },
    '& i': {
      width: 25,
      height: 25,
      fontSize: 22
    }
  },
  copyright: {
    display: 'block',
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(3)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (basicStyles);

/***/ }),

/***/ "./components/Footer/blog-style.js":
/*!*****************************************!*\
  !*** ./components/Footer/blog-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const blogStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  footer: {
    position: 'relative'
  },
  root: {
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    position: 'relative',
    zIndex: 1,
    '& p': {
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'inline-block',
      width: '30%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('xs')]: {
        width: '47%'
      },
      '& a': {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    }
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    textTransform: 'uppercase',
    fontSize: 16,
    marginBottom: theme.spacing(),
    fontWeight: theme.typography.fontWeightBold
  },
  quickLinks: {
    marginTop: theme.spacing(4)
  },
  logo: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      '& + p': {
        textAlign: 'center'
      }
    },
    '& img': {
      width: 54,
      marginRight: theme.spacing()
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 28,
      textTransform: 'capitalize  '
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.divider,
      width: 36,
      height: 36
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    maxWidth: 250,
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    margin: `${theme.spacing(2)}px auto ${theme.spacing(4)}px`,
    '& $icon': {
      top: 29,
      color: theme.palette.primary.dark,
      position: 'relative'
    },
    '& svg': {
      color: theme.palette.primary.dark
    },
    '& fieldset': {
      borderRadius: 10,
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.dark, 0.5)} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.dark, 0.5)}`
      },
      '& + div + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)'
      }
    }
  },
  selectMenu: {
    width: 160,
    paddingLeft: theme.spacing(4),
    background: 'none !important'
  },
  footerCounter: {
    position: 'relative',
    background: theme.palette.primary.dark,
    '&:before': {
      content: '""',
      background: theme.palette.primary.dark,
      position: 'absolute',
      left: '-10%',
      borderRadius: '50%',
      top: -80,
      width: '120%',
      height: 350,
      [theme.breakpoints.down('xs')]: {
        height: 120
      }
    }
  },
  category: {},
  listText: {},
  blogItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    textAlign: 'left',
    justifyContent: 'flex-start',
    '& $category': {
      marginBottom: theme.spacing(),
      display: 'block',
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    '& $listText': {
      flex: 1
    },
    '& figure': {
      borderRadius: 4,
      overflow: 'hidden',
      margin: theme.spacing(0, 2, 0, 0),
      width: 80,
      height: 56,
      '& img': {
        display: 'block',
        minHeight: '100%',
        width: '100%'
      }
    },
    '& p': {
      fontSize: 13,
      textAlign: 'left'
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (blogStyles);

/***/ }),

/***/ "./components/Footer/contact-style.js":
/*!********************************************!*\
  !*** ./components/Footer/contact-style.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  footer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(10),
    marginTop: theme.spacing(5)
  },
  root: {
    position: 'relative',
    zIndex: 1
  },
  logo: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(5),
    fontSize: 28,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      width: 54,
      display: 'block',
      margin: '0 auto 8px'
    },
    '& h4': {
      textTransform: 'uppercase'
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      background: theme.palette.divider,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  contact: {
    color: theme.palette.text.secondary
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7)
    }
  },
  title: {
    textAlign: 'left',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3)
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative'
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (contactStyles);

/***/ }),

/***/ "./components/Footer/footer-extend-style.js":
/*!**************************************************!*\
  !*** ./components/Footer/footer-extend-style.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const decoLight = '/images/crypto/deco-footer-light.svg';
const decoDark = '/images/crypto/deco-footer-dark.svg';
const footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  extend: {},
  footerCounter: {
    position: 'relative',
    paddingTop: 320,
    marginTop: theme.spacing(-40),
    background: theme.palette.type === 'dark' ? `linear-gradient(120deg, ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.main, 0.6)}, ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.secondary.main, 0.6)})` : `linear-gradient(120deg, ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.primary.main, 0.9)}, ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.secondary.main, 0.9)})`,
    '&$extend': {
      marginTop: theme.spacing(-30)
    }
  },
  deco: {
    content: '""',
    overflow: 'hidden',
    backgroundImage: `url(${theme.palette.type === 'dark' ? decoDark : decoLight})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '350px',
    [theme.breakpoints.down('xs')]: {
      height: 120
    },
    '@media (min-width: 1400px)': {
      backgroundPosition: '0 -70px'
    }
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    position: 'relative',
    paddingBottom: theme.spacing(7),
    '& h4': {
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (footerStyles);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./components/Footer/Main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Footer/sitemap-style.js":
/*!********************************************!*\
  !*** ./components/Footer/sitemap-style.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  footer: {
    position: 'relative',
    zIndex: 1,
    paddingTop: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(5)
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightMedium,
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center'
      }
    }
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 18,
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    fontSize: 28,
    fontWeight: theme.typography.fontWeightBold,
    '& img': {
      width: 48,
      marginRight: theme.spacing()
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      background: theme.palette.divider,
      width: 36,
      height: 36,
      lineHeight: '36px',
      '& i': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
      }
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)'
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& $icon': {
      top: 21,
      position: 'relative'
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    margin: '0 auto',
    marginTop: theme.spacing(2)
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (footerStyles);

/***/ }),

/***/ "./components/Forms/AuthFrame.js":
/*!***************************************!*\
  !*** ./components/Forms/AuthFrame.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/imgAPI */ "./public/images/imgAPI.js");
/* harmony import */ var _Decoration_HexaDeco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Decoration/HexaDeco */ "./components/Decoration/HexaDeco.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Forms\\AuthFrame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function AuthFrame(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_7__["useText"])(); // Media query

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.up('md'));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.down('xs'));
  const {
    children,
    title,
    subtitle,
    type
  } = props;
  return __jsx("div", {
    className: classes.pageWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_Decoration_HexaDeco__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.authFrame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    spacing: isMobile ? 0 : 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default.a, {
    px: {
      sm: 6,
      md: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.formBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.formWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, children)))), isDesktop && __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.greeting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, title), __jsx("h6", {
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, subtitle), __jsx("div", {
    className: classes.img,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, type === 'login' ? __jsx("img", {
    src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__["default"].cryptoInner[3],
    "data-2d": _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__["default"].cryptoInner[2],
    "data-3d": _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__["default"].cryptoInner[3],
    className: "img-2d3d",
    alt: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }) : __jsx("img", {
    src: _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__["default"].cryptoInner[5],
    "data-2d": _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__["default"].cryptoInner[4],
    "data-3d": _public_images_imgAPI__WEBPACK_IMPORTED_MODULE_8__["default"].cryptoInner[5],
    className: "img-2d3d",
    alt: "register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  })))))));
}

AuthFrame.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
AuthFrame.defaultProps = {
  subtitle: '',
  type: ''
};
/* harmony default export */ __webpack_exports__["default"] = (AuthFrame);

/***/ }),

/***/ "./components/Forms/Checkbox.js":
/*!**************************************!*\
  !*** ./components/Forms/Checkbox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Forms\\Checkbox.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const red300 = _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a['500'];

const styles = theme => ({
  checkbox: {
    left: 0,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__["ValidatorComponent"] {
  errorText() {
    const {
      isValid
    } = this.state;
    const {
      classes
    } = this.props;

    if (isValid) {
      return null;
    }

    return __jsx("div", {
      className: classes.checkbox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, this.getErrorMessage());
  }

  render() {
    const _this$props = this.props,
          {
      errorMessages,
      validators,
      requiredError,
      value,
      checked,
      validatorListener,
      classes
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["errorMessages", "validators", "requiredError", "value", "checked", "validatorListener", "classes"]);

    return __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
      value: value,
      checked: checked
    }, rest, {
      ref: r => {
        this.input = r;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    })), this.errorText());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CheckboxValidatorElement));

/***/ }),

/***/ "./components/Forms/Register.js":
/*!**************************************!*\
  !*** ./components/Forms/Register.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Checkbox */ "./components/Forms/Checkbox.js");
/* harmony import */ var _SocialAuth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SocialAuth */ "./components/Forms/SocialAuth.js");
/* harmony import */ var _AuthFrame__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AuthFrame */ "./components/Forms/AuthFrame.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Forms\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function Register(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_15__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();
  const {
    t
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }); // Media query

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('md'));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["ValidatorForm"].addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        return false;
      }

      return true;
    });
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["ValidatorForm"].addValidationRule('isTruthy', value => value);
  });
  const {
    0: check,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return __jsx(_AuthFrame__WEBPACK_IMPORTED_MODULE_14__["default"], {
    title: t('common:register_subtitle'),
    type: "register",
    subtitle: t('common:auth_desc'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: isDesktop ? text.subtitle : clsx__WEBPACK_IMPORTED_MODULE_2___default()(text.title, text.textPrimary),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, t('common:login_create'))), __jsx(_SocialAuth__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, t('common:register_or'))), __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["ValidatorForm"], {
    onError: errors => console.log(errors),
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["TextValidator"], {
    className: classes.input,
    label: t('common:register_name'),
    onChange: handleChange('name'),
    name: "name",
    variant: "filled",
    fullWidth: true,
    value: values.name,
    validators: ['required'],
    errorMessages: ['This field is required'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["TextValidator"], {
    className: classes.input,
    fullWidth: true,
    label: t('common:register_email'),
    onChange: handleChange('email'),
    name: "email",
    variant: "filled",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'Email is not valid'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["TextValidator"], {
    type: "password",
    className: classes.input,
    label: t('common:register_password'),
    validators: ['required'],
    fullWidth: true,
    variant: "filled",
    onChange: handleChange('password'),
    errorMessages: ['This field is required'],
    name: "password",
    value: values.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_9__["TextValidator"], {
    type: "password",
    className: classes.input,
    fullWidth: true,
    variant: "filled",
    label: t('common:register_confirm'),
    validators: ['isPasswordMatch', 'required'],
    errorMessages: ['Password mismatch', 'this field is required'],
    onChange: handleChange('confirmPassword'),
    name: "confirm",
    value: values.confirmPassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    control: __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], {
      validators: ['isTruthy'],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }),
    label: __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, t('common:form_terms'), "\xA0", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, t('common:form_privacy'))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "contained",
    className: classes.buttonLarge,
    type: "submit",
    color: "primary",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, t('common:continue'))))));
}

Register.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['common'])(Register));

/***/ }),

/***/ "./components/Forms/SocialAuth.js":
/*!****************************************!*\
  !*** ./components/Forms/SocialAuth.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Forms\\SocialAuth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SocialAuth() {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("section", {
    className: classes.socmedSideLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.naviBtn,
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-social-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), "Facebook"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.blueBtn,
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-social-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), "Twitter"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.redBtn,
    type: "button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-social-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), "Google"));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialAuth);

/***/ }),

/***/ "./components/Forms/form-style.js":
/*!****************************************!*\
  !*** ./components/Forms/form-style.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  pageWrap: {
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      }
    }
  },
  innerWrap: {
    margin: theme.spacing(0, 2)
  },
  fullFormWrap: {
    paddingTop: theme.spacing(4)
  },
  formBox: {
    overflow: 'hidden',
    background: theme.palette.background.paper,
    [theme.breakpoints.up('md')]: {
      border: `1px solid ${theme.palette.primary.main}`
    },
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none',
      background: 'none'
    }
  },
  mapForm: {
    [theme.breakpoints.up('md')]: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 'none'
    }
  },
  desc: {
    textAlign: 'center',
    padding: theme.spacing(0, 5),
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  checkArea: {
    position: 'relative'
  },
  form: {
    position: 'relative',
    padding: theme.spacing(0, 4, 8),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2, 6)
    }
  },
  formHelper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontSize: 14,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: theme.spacing(3)
    }
  },
  link: {},
  flex: {},
  btnArea: {
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(6),
      display: 'flex'
    },
    [theme.breakpoints.between('md', 'md')]: {
      marginTop: theme.spacing(4),
      '& button': {
        margin: theme.spacing(2, 0, 4),
        width: '100%'
      }
    },
    [theme.breakpoints.between('sm', 'sm')]: {
      marginTop: theme.spacing(6),
      display: 'flex'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
      '& button': {
        margin: theme.spacing(2, 0, 4),
        width: '100%'
      }
    },
    '& span': {
      '& $link': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        display: 'block'
      },
      [theme.breakpoints.between('md', 'md')]: {
        '& button': {
          width: 'auto'
        }
      }
    }
  },
  buttonLarge: {
    minHeight: 48,
    minWidth: 180
  },
  rightIcon: {
    marginRight: theme.spacing(1),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  authFrame: {
    display: 'block',
    width: '100%',
    position: 'relative'
  },
  greeting: {
    display: 'flex',
    paddingTop: theme.spacing(5),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    textAlign: 'center',
    '& h4': {
      marginBottom: theme.spacing(2),
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  img: {
    position: 'relative',
    margin: theme.spacing(5, 0),
    '& img': {
      position: 'relative',
      width: 450
    }
  },
  head: {
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center'
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  wrapDeco: {
    marginTop: theme.spacing(2)
  },
  formWrap: {
    position: 'relative',
    padding: theme.spacing(0, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 3)
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 150,
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5),
        width: 120
      },
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0, 0, 2),
        width: '100%'
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing(1)
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#28aae1', 0.2)
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#3b579d', 0.2)
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#dd493c', 0.2)
    }
  },
  separator: {
    margin: '40px auto',
    maxWidth: 300,
    minWidth: 200,
    textAlign: 'center',
    position: 'relative',
    color: theme.palette.text.secondary,
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12
      }
    },
    '&:before, &:after': {
      content: '""',
      borderTop: '1px solid',
      borderTopColor: theme.palette.text.hint,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0
    },
    '&:after': {
      right: 0
    }
  },
  formControlLabel: {
    '& a': {
      position: 'relative',
      top: -20
    },
    '& > div': {
      marginTop: 0
    }
  },
  full: {},
  map: {
    position: 'relative',
    zIndex: 20,
    overflow: 'hidden',
    height: 745,
    [theme.breakpoints.down('sm')]: {
      height: '300px !important',
      marginTop: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '0 12px 12px 0 !important'
    },
    '&$full': {
      height: 915
    }
  },
  buble: {
    borderRadius: 10,
    padding: theme.spacing(2),
    width: 'auto',
    left: -250,
    top: -300,
    color: theme.palette.common.black,
    '& p': {
      fontSize: 13
    }
  },
  icon: {
    color: '#607D8B',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    top: 4,
    position: 'relative',
    fontSize: 16
  },
  notif: {
    top: 90
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (contactStyles);

/***/ }),

/***/ "./components/Header/Basic.js":
/*!************************************!*\
  !*** ./components/Header/Basic.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.js");
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _TopNav_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TopNav/Settings */ "./components/Header/TopNav/Settings.js");
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Header\\Basic.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function Basic(props) {
  const {
    0: fixed,
    1: setFixed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Media QUery

  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.up('lg'));
  const {
    onToggleDark,
    onToggleDir,
    text,
    href,
    home
  } = props;
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "relative",
    id: "header",
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.header, fixed && classes.fixed, home && classes.market),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fixed: isDesktop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: classes.headerContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx("nav", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.navMenu, classes.flex),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_9__["default"].crypto.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx(_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: "landscape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  })))), __jsx("nav", {
    className: classes.userMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: href,
    color: "secondary",
    variant: "contained",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, text), isDesktop && __jsx("span", {
    className: classes.vDivider,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 30
    }
  }), __jsx(_TopNav_Settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }))))));
}

Basic.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  home: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Basic.defaultProps = {
  home: false,
  href: '/',
  text: 'login'
};
/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ }),

/***/ "./components/Header/TopNav/Settings.js":
/*!**********************************************!*\
  !*** ./components/Header/TopNav/Settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Settings */ "@material-ui/icons/Settings");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Check */ "@material-ui/icons/Check");
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../header-style */ "./components/Header/header-style.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Header\\TopNav\\Settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('oironTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: isDark,
    1: setDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_18__["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_18__["i18n"].changeLanguage(lang);
      props.toggleDir('ltr');
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return __jsx("div", {
    className: classes.setting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-describedby": id,
    "aria-label": "Settings",
    onClick: handleClick,
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.icon, open ? classes.active : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fontSize: "inherit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    container: ctn,
    classes: {
      paper: classes.settingMenu
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "nav",
    className: classes.modeMenu,
    "aria-label": "Mode-menu",
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8___default.a, {
      component: "div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, "Theme Mode"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    component: "div",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    component: "label",
    container: true,
    alignItems: "center",
    spacing: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "Light"), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_13___default.a, {
    checked: isDark,
    onChange: handleChangeMode,
    value: isDark,
    inputProps: {
      'aria-label': 'checkbox'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 19
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15___default.a, {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    }
  }, "Dark"))))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    component: "nav",
    className: classes.langMenu,
    "aria-label": "Language-menu",
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8___default.a, {
      component: "div",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, "Languages"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, _i18n__WEBPACK_IMPORTED_MODULE_18__["i18n"].options.allLanguages && _i18n__WEBPACK_IMPORTED_MODULE_18__["i18n"].options.allLanguages.map(val => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    key: val,
    role: undefined,
    dense: true,
    button: true,
    onClick: () => handleChangeLang(val),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 15
    }
  }, __jsx("i", {
    className: val,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_12___default.a, {
    primary: props.t('common:' + val),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }), _i18n__WEBPACK_IMPORTED_MODULE_18__["i18n"].language === val && __jsx(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  })))))));
}

Settings.propTypes = {
  toggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_18__["withTranslation"])(['common'])(Settings));

/***/ }),

/***/ "./components/Header/data/single.js":
/*!******************************************!*\
  !*** ./components/Header/data/single.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const single = ['about', 'feature', 'benefit', 'testimonials'];
/* harmony default export */ __webpack_exports__["default"] = (single);

/***/ }),

/***/ "./components/Header/header-style.js":
/*!*******************************************!*\
  !*** ./components/Header/header-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/images/flag-logo.png */ "./public/images/flag-logo.png");
/* harmony import */ var _public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${_public_images_flag_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  fixed: {},
  openDrawer: {},
  market: {},
  header: {
    position: 'fixed',
    color: theme.palette.text.primary,
    background: 'transparent',
    boxShadow: 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    '&$fixed': {
      background: theme.palette.background.paper,
      boxShadow: theme.palette.type === 'dark' ? `0px 1px 36px -16px ${theme.palette.common.black}` : `0px 1px 36px -16px ${theme.palette.primary.main}`,
      top: 0,
      left: 0,
      '& $logo': {
        '& img': {
          height: 40
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0)
      },
      '& $vDivider': {
        minHeight: theme.spacing(3)
      }
    },
    '&$market': {
      '&:not($fixed)': {
        [theme.breakpoints.up('lg')]: {
          top: theme.spacing(5),
          position: 'absolute'
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none'
    }
  },
  noShadow: {
    background: theme.palette.background.paper,
    boxShadow: 'none !important'
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      transition: 'all 0.3s ease',
      alignItems: 'center',
      padding: theme.spacing(2, 1),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1, 0)
      },
      display: 'flex'
    }
  },
  settingMenu: {
    width: 240
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block'
    },
    '& img': {
      transition: 'all 0.3s ease'
    }
  },
  active: {},
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& ul li': {
      overflow: 'visible'
    }
  },
  scrollActiveNav: {
    '& button, & a': {
      fontSize: 16
    }
  },
  multiMenu: {
    display: 'block'
  },
  mainMenu: {
    '& > ul:not($multiMenu)': {
      '& li': {
        margin: theme.spacing(0, 1)
      }
    },
    '& > ul': {
      listStyle: 'none',
      position: 'relative',
      padding: 0,
      margin: 0,
      '& > li': {
        display: 'inline-block',
        position: 'relative',
        listStyle: 'none',
        transition: 'all 0.3s ease-out',
        '& > button, & > a': {
          border: '1px solid transparent'
        },
        '&:hover:not(.active)': {
          '& > button, & > a': {
            borderColor: theme.palette.primary.main,
            background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.text.primary, 0.08)
          }
        },
        '&[class="active"]': {
          '& button, & a': {
            color: theme.palette.common.white,
            background: theme.palette.primary.main,
            borderColor: theme.palette.primary.main
          }
        },
        '& button, & a': {
          textTransform: 'capitalize',
          padding: theme.spacing(1, 1.5),
          lineHeight: 'initial'
        }
      }
    }
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    '& > div > a': {
      margin: theme.spacing(0, 1)
    }
  },
  langMenu: {
    '& i': _objectSpread({}, flagIcon)
  },
  mobileMenu: {
    marginRight: theme.spacing(1),
    padding: 0,
    '& $bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
  },
  vDivider: {
    margin: theme.spacing(0, 1, 0, 2),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    minHeight: theme.spacing(6)
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease'
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  megaMenuRoot: {
    width: '100%',
    zIndex: 100,
    left: '-5px !important'
  },
  multiMenuRoot: {
    minWidth: 200,
    zIndex: 100,
    '& ul': {
      padding: theme.spacing(1),
      '& li': {
        borderRadius: theme.rounded.small,
        minHeight: 48,
        padding: theme.spacing(1),
        '& svg': {
          fill: theme.palette.text.hint,
          transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
        }
      }
    }
  },
  megaMenu: {
    padding: theme.spacing(4, 0),
    borderRadius: 0,
    maxHeight: 480,
    overflow: 'auto',
    '& a': {
      marginBottom: 4
    }
  },
  thumbMenu: {
    width: 200,
    height: 78,
    borderRadius: theme.rounded.small,
    margin: theme.spacing(0, 1, 2)
  },
  titleMega: {
    textTransform: 'uppercase',
    fontWeight: theme.typography.fontWeightBold + '!important',
    fontSize: '11px !important'
  },
  menuItem: {
    borderRadius: theme.rounded.small
  },
  link: {
    padding: '0 !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    }
  },
  current: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },

  /* Search */
  short: {},
  input: {},
  flex: {
    flex: 1
  },
  search: {
    position: 'relative',
    display: 'flex',
    maxWidth: 600,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      flex: 1
    },
    '& form': {
      width: '100%'
    },
    alignItems: 'center',
    '&$short': {
      width: 300
    },
    '& $input': {
      width: '100%',
      paddingRight: theme.spacing(2),
      background: theme.palette.background.paper,
      paddingLeft: theme.spacing(5),
      borderRadius: theme.rounded.small,
      '& input': {
        maxHeight: 'none',
        padding: theme.spacing(1.5, 0)
      },
      '&:hover': {
        '& fieldset': {
          borderColor: theme.palette.primary.main
        }
      }
    }
  },
  searchIcon: {
    position: 'absolute',
    top: 10,
    left: theme.spacing(1)
  },

  /* Hamburger */
  invert: {},
  navLogo: {
    width: '100%',
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            }
          }
        }
      }
    }
  },
  paperNav: {
    background: theme.palette.background.paper,
    backdropFilter: 'saturate(180%) blur(20px)',
    width: '100%',
    position: 'fixed',
    zIndex: 50,
    height: '100%'
  },
  mobileNav: {
    '& $menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: theme.spacing(15),
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      listStyle: 'none',
      '& li': {
        textAlign: 'center',
        animationTimingFunction: 'ease',
        '& a': {
          fontSize: 24,
          padding: theme.spacing(1, 4),
          marginBottom: theme.spacing(),
          '&:before': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 5,
            borderRadius: theme.rounded.small,
            opacity: 0.5,
            background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
            height: '75%',
            width: 0,
            transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
          },
          '&:hover': {
            color: theme.palette.primary.main,
            background: 'none',
            '&:before': {
              width: '100%'
            }
          }
        }
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontWeight: theme.typography.fontWeightMedium
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (headerStyles);

/***/ }),

/***/ "./components/Logo/Logo.js":
/*!*********************************!*\
  !*** ./components/Logo/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/logo-crypto.svg */ "./public/images/logo-crypto.svg");
/* harmony import */ var _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _logo_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo-style */ "./components/Logo/logo-style.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\Logo\\Logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Logo(props) {
  const classes = Object(_logo_style__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    type,
    size
  } = props;
  return __jsx("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes[type], classes.logo, classes[size]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: _public_images_logo_crypto_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), type !== 'only' ? _public_text_brand__WEBPACK_IMPORTED_MODULE_4___default.a.crypto.name : '');
}

Logo.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Logo.defaultProps = {
  size: 'medium'
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo */ "./components/Logo/Logo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Logo__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Logo/logo-style.js":
/*!***************************************!*\
  !*** ./components/Logo/logo-style.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  logo: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex'
  },
  landscape: {
    alignItems: 'center',
    position: 'relative',
    top: -2,
    '& img': {
      marginRight: theme.spacing(1)
    }
  },
  portrait: {
    display: 'block',
    margin: '0 auto 8px',
    '& img': {
      margin: `0 auto ${theme.spacing(1)}`,
      display: 'block'
    }
  },
  small: {
    fontSize: 16,
    '& img': {
      maxWidth: 34,
      height: 34
    }
  },
  medium: {
    fontSize: 18,
    '& img': {
      maxWidth: 54,
      height: 54,
      [theme.breakpoints.down('xs')]: {
        maxWidth: 34,
        height: 34
      }
    }
  },
  large: {
    fontSize: 28,
    '& img': {
      maxWidth: 54,
      height: 54
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['ara', 'ind', 'prt', 'deu', 'zho', 'vn'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    eng: 'en',
    ara: 'ar',
    prt: 'pt',
    ind: 'id',
    deu: 'de',
    zho: 'zh',
    vn: 'vn'
  }
});

/***/ }),

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/common */ "./theme/common.js");
/* harmony import */ var _components_Header_Basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header/Basic */ "./components/Header/Basic.js");
/* harmony import */ var _components_Forms_Register__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Forms/Register */ "./components/Forms/Register.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Footer_FooterExtend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer/FooterExtend */ "./components/Footer/FooterExtend.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../public/text/link */ "./public/text/link.js");
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\pages\\register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function RegisterPage(props) {
  // Theme breakpoints
  // Translation Function
  const {
    t
  } = props;
  const classes = Object(_theme_common__WEBPACK_IMPORTED_MODULE_7__["useSpacing"])();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_12___default.a.crypto.name, "\xA0 - Register")), __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.mainWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx(_components_Header_Basic__WEBPACK_IMPORTED_MODULE_8__["default"], {
    text: t('common:header_login'),
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_13__["default"].crypto.login,
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3___default.a, {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.containerGeneral, classes.containerFront),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(_components_Forms_Register__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }))), __jsx(_components_Footer_FooterExtend__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    toggleDir: onToggleDir,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }))));
}

RegisterPage.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

RegisterPage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])(['common'])(RegisterPage));

/***/ }),

/***/ "./public/images/flag-logo.png":
/*!*************************************!*\
  !*** ./public/images/flag-logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ "./public/images/imgAPI.js":
/*!*********************************!*\
  !*** ./public/images/imgAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const img3d = {
  main: ['', '/images/crypto/about_3d@2x.png', '', '/images/crypto/background_3d@2x.png', '', '/images/crypto/banner1_3d@2x.png', '', '/images/crypto/banner2_3d@2x.png', '', '/images/crypto/banner3_3d@2x.png', '', '/images/crypto/feature3_3d@2x.png', '', '/images/crypto/error_3d@2x.png', '', '/images/crypto/faq_3d@2x.png', '', '/images/crypto/feature1_3d@2x.png', '', '/images/crypto/feature2_3d@2x.png', '', '', '', '', '', '/images/crypto/login_3d@2x.png', '', '/images/crypto/register_3d@2x.png'],
  inner: ['', '/images/crypto/about_3D@2x.png', '', '/images/crypto/login_3D@2x.png', '', '/images/crypto/register_3D@2x.png', '', '/images/crypto/faq_3D@2x.png', '', '/images/crypto/error_3D@2x.png', '', '/images/crypto/team_3D@2x.png']
};
const img2d = {
  main: ['', '/images/crypto/about_2d@2x.png', '', '/images/crypto/background_2d@2x.png', '', '/images/crypto/banner1_2d@2x.png', '', '/images/crypto/banner2_2d@2x.png', '', '/images/crypto/banner3_2d@2x.png', '', '/images/crypto/feature3_2d@2x.png', '', '/images/crypto/error_2d@2x.png', '', '/images/crypto/faq_2d@2x.png', '', '/images/crypto/feature1_2d@2x.png', '', '/images/crypto/feature2_2d@2x.png', '', '', '', '', '', '/images/crypto/login_2d@2x.png', '', '/images/crypto/register_2d@2x.png'],
  inner: ['', '/images/crypto/about_2D@2x.png', '', '/images/crypto/login_2D@2x.png', '', '/images/crypto/register_2D@2x.png', '', '/images/crypto/faq_2D@2x.png', '', '/images/crypto/error_2D@2x.png', '', '/images/crypto/team_2D@2x.png']
};
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: [// 1
  'http://via.placeholder.com/1050x700/2196F3/FFFFFF/', 'http://via.placeholder.com/1050x700/3F51B5/FFFFFF/', 'http://via.placeholder.com/1050x700/00BCD4/FFFFFF/', 'http://via.placeholder.com/1050x700/009688/FFFFFF/', 'http://via.placeholder.com/1050x700/01579B/FFFFFF/', 'http://via.placeholder.com/1050x700/0097A7/FFFFFF/', 'http://via.placeholder.com/1050x700/43A047/FFFFFF/', 'http://via.placeholder.com/1050x700/558B2F/FFFFFF/', 'http://via.placeholder.com/1050x700/1DE9B6/767676/', 'http://via.placeholder.com/1050x700/00E5FF/767676/', 'http://via.placeholder.com/1050x700/C6FF00/767676/', // 2
  'http://via.placeholder.com/1050x700/D4E157/767676/', 'http://via.placeholder.com/1050x700/F8BBD0/767676/', 'http://via.placeholder.com/1050x700/FFCA28/767676/', 'http://via.placeholder.com/1050x700/CFD8DC/767676/', 'http://via.placeholder.com/1050x700/673AB7/FFFFFF/', 'http://via.placeholder.com/1050x700/EF5350/FFFFFF/', 'http://via.placeholder.com/1050x700/1E88E5/FFFFFF/', 'http://via.placeholder.com/1050x700/3D5AFE/FFFFFF/', 'http://via.placeholder.com/1050x700/EF6C00/FFFFFF/', 'http://via.placeholder.com/1050x700/795548/FFFFFF/', // 3
  'http://via.placeholder.com/1050x700/FFE57F/767676/', 'http://via.placeholder.com/1050x700/DCEDC8/767676/', 'http://via.placeholder.com/1050x700/E1BEE7/767676/', 'http://via.placeholder.com/1050x700/BBDEFB/767676/', 'http://via.placeholder.com/1050x700/388E3C/FFFFFF/', 'http://via.placeholder.com/1050x700/651FFF/FFFFFF/', 'http://via.placeholder.com/1050x700/757575/FFFFFF/', 'http://via.placeholder.com/1050x700/E91E63/FFFFFF/', 'http://via.placeholder.com/1050x700/607D8B/FFFFFF/', 'http://via.placeholder.com/1050x700/AA00FF/FFFFFF/', // 4
  'http://via.placeholder.com/1050x700/827717/FFFFFF/', 'http://via.placeholder.com/1050x700/E64A19/FFFFFF/', 'http://via.placeholder.com/1050x700/C2185B/FFFFFF/', 'http://via.placeholder.com/1050x700/AA00FF/FFFFFF/', 'http://via.placeholder.com/1050x700/1976D2/FFFFFF/', 'http://via.placeholder.com/1050x700/D1C4E9/767676/', 'http://via.placeholder.com/1050x700/81D4FA/767676/', 'http://via.placeholder.com/1050x700/E0F2F1/767676/', 'http://via.placeholder.com/1050x700/E6EE9C/767676/', 'http://via.placeholder.com/1050x700/FFEB3B/767676/', // 5
  'http://via.placeholder.com/1050x700/E040FB/FFFFFF/', 'http://via.placeholder.com/1050x700/C62828/FFFFFF/', 'http://via.placeholder.com/1050x700/AD1457/FFFFFF/', 'http://via.placeholder.com/1050x700/673AB7/FFFFFF/', 'http://via.placeholder.com/1050x700/651FFF/FFFFFF/', 'http://via.placeholder.com/1050x700/00BFA5/FFFFFF/', 'http://via.placeholder.com/1050x700/A5D6A7/767676/', 'http://via.placeholder.com/1050x700/AED581/767676/', 'http://via.placeholder.com/1050x700/FFB74D/767676/', 'http://via.placeholder.com/1050x700/00BFA5/767676/', // 6
  'http://via.placeholder.com/100x100/C6FF00/FFFFFF/', 'http://via.placeholder.com/100x100/F44336/FFFFFF/', 'http://via.placeholder.com/100x100/673AB7/FFFFFF/', 'http://via.placeholder.com/100x100/03A9F4/FFFFFF/', 'http://via.placeholder.com/100x100/4CAF50/FFFFFF/', 'http://via.placeholder.com/100x100/FF5722/FFFFFF/', 'http://via.placeholder.com/100x100/607D8B/FFFFFF/', 'http://via.placeholder.com/100x100/795548/FFFFFF/', 'http://via.placeholder.com/100x100/8BC34A/FFFFFF/', 'http://via.placeholder.com/100x100/00BCD4/FFFFFF/'],
  ui: ['/images/crypto/menu_pos@2x.jpg', '/images/crypto/menu_education@2x.jpg', '/images/crypto/menu_saas2@2x.jpg', '/images/crypto/menu_marketing@2x.jpg', '/images/crypto/team_2D@2x.png', '/images/crypto/team_3D@2x.png', '/images/crypto/menu_agency@2x.jpg', '/images/crypto/menu_cloud@2x.jpg', '/images/crypto/menu_crypto@2x.jpg', '/images/crypto/menu_education@2x.jpg', '/images/crypto/menu_finance@2x.jpg', '/images/crypto/menu_marketing@2x.jpg', '/images/crypto/menu_medical@2x.jpg', '/images/crypto/menu_pos@2x.jpg', '/images/crypto/menu_saas@2x.jpg', '/images/crypto/menu_saas2@2x.jpg', '/images/crypto/menu_social@2x.jpg', '/images/crypto/menu_other@2x.jpg'],
  crypto: [...img3d.main, 'http://via.placeholder.com/767x664/673AB7/FFFFFF/', 'http://via.placeholder.com/767x664/FFB74D/FFFFFF/', 'http://via.placeholder.com/767x664/673AB7/FFFFFF/', 'http://via.placeholder.com/767x664/FFB74D/FFFFFF/', 'http://via.placeholder.com/767x664/673AB7/FFFFFF/', 'http://via.placeholder.com/767x664/FFB74D/FFFFFF/', 'http://via.placeholder.com/600x341/E1BEE7/FFFFFF/', 'http://via.placeholder.com/348x684/FF5722/FFFFFF/'],
  cryptoInner: [...img3d.inner]
};
/* harmony default export */ __webpack_exports__["default"] = (imgAPI);

/***/ }),

/***/ "./public/images/logo-crypto.svg":
/*!***************************************!*\
  !*** ./public/images/logo-crypto.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDQ5MCA0NTMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLC0xMy4yNTgyLC0xMzY2LjgyKSI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwyLjI1ODIzLDEzMzQuMTIpIj4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsLTEsNS42ODQzNGUtMTQsNDY1LjEzKSI+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjE5NTA4MywtNi41NzQ1MmUtMTgsNi41NzQ1MmUtMTgsMC4xOTUwODMsMTk3Ljk0MiwyMTEuOTE5KSI+CiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjeD0iMjk3LjYwOCIgY3k9IjI1NS45MTQiIHI9IjEwNy4wNDciIHN0eWxlPSJmaWxsOnJnYigxMDMsNTgsMTgzKTsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KC0wLjc1MTA1MiwwLDAsMC43NTEwNTIsNDc5LjUxOSwtMTMxLjU5NCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTcuNjA4LDE0OC44NjdDMzU2LjY4OSwxNDguODY3IDQwNC42NTUsMTk2LjgzMyA0MDQuNjU1LDI1NS45MTRDNDA0LjY1NSwzMTQuOTk1IDMxMS4xNiw0NTMuNjYyIDI5Ny42MDgsNDUzLjY2MkMyODQuMDU1LDQ1My42NjIgMTkwLjU2MSwzMTQuOTk1IDE5MC41NjEsMjU1LjkxNEMxOTAuNTYxLDE5Ni44MzMgMjM4LjUyNywxNDguODY3IDI5Ny42MDgsMTQ4Ljg2N1oiIHN0eWxlPSJmaWxsOnJnYigxNTYsMzksMTc2KTsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMjc3MjEzLDAuNDgwMTQ4LC0wLjQ4MDE0OCwwLjI3NzIxMyw0NTEuMDU3LC0zNC42MDQ3KSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI5Ny42MDgsMTQ4Ljg2N0MzNTYuNjg5LDE0OC44NjcgNDA0LjY1NSwxOTYuODMzIDQwNC42NTUsMjU1LjkxNEM0MDQuNjU1LDMxNC45OTUgMzExLjE2LDQ1My42NjIgMjk3LjYwOCw0NTMuNjYyQzI4NC4wNTUsNDUzLjY2MiAxOTAuNTYxLDMxNC45OTUgMTkwLjU2MSwyNTUuOTE0QzE5MC41NjEsMTk2LjgzMyAyMzguNTI3LDE0OC44NjcgMjk3LjYwOCwxNDguODY3WiIgc3R5bGU9ImZpbGw6cmdiKDI1NSwyMjQsMTc4KTsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KC0wLjM3NzI1OCwyLjQ5MzcyZS0xNiwtMi40OTM3MmUtMTYsLTAuMzc3MjU4LDM2OC4yNzUsNDg4LjU5NSkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTcuNjA4LDE0OC44NjdDMzU2LjY4OSwxNDguODY3IDQwNC42NTUsMTk2LjgzMyA0MDQuNjU1LDI1NS45MTRDNDA0LjY1NSwzMTQuOTk1IDMxMS4xNiw0NTMuNjYyIDI5Ny42MDgsNDUzLjY2MkMyODQuMDU1LDQ1My42NjIgMTkwLjU2MSwzMTQuOTk1IDE5MC41NjEsMjU1LjkxNEMxOTAuNTYxLDE5Ni44MzMgMjM4LjUyNywxNDguODY3IDI5Ny42MDgsMTQ4Ljg2N1oiIHN0eWxlPSJmaWxsOnJnYigyMjUsMTkwLDIzMSk7Ii8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMC4yNzcyMTMsMC40ODAxNDgsMC40ODAxNDgsMC4yNzcyMTMsNjEuMjI0NCwtMzQuNjA0NykiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTcuNjA4LDE0OC44NjdDMzU2LjY4OSwxNDguODY3IDQwNC42NTUsMTk2LjgzMyA0MDQuNjU1LDI1NS45MTRDNDA0LjY1NSwzMTQuOTk1IDMxMS4xNiw0NTMuNjYyIDI5Ny42MDgsNDUzLjY2MkMyODQuMDU1LDQ1My42NjIgMTkwLjU2MSwzMTQuOTk1IDE5MC41NjEsMjU1LjkxNEMxOTAuNTYxLDE5Ni44MzMgMjM4LjUyNywxNDguODY3IDI5Ny42MDgsMTQ4Ljg2N1oiIHN0eWxlPSJmaWxsOnJnYigyNTUsMTUyLDApOyIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTAuMzc1NTI2LC0wLjY1MDQzLDAuNjUwNDMsLTAuMzc1NTI2LDM2LjcwNDMsNjMyLjExNSkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOTcuNjA4LDE0OC44NjdDMzU2LjY4OSwxNDguODY3IDQwNC42NTUsMTk2LjgzMyA0MDQuNjU1LDI1NS45MTRDNDA0LjY1NSwzMTQuOTk1IDMxMS4xNiw0NTMuNjYyIDI5Ny42MDgsNDUzLjY2MkMyODQuMDU1LDQ1My42NjIgMTkwLjU2MSwzMTQuOTk1IDE5MC41NjEsMjU1LjkxNEMxOTAuNTYxLDE5Ni44MzMgMjM4LjUyNywxNDguODY3IDI5Ny42MDgsMTQ4Ljg2N1oiIHN0eWxlPSJmaWxsOnJnYigxNTYsMzksMTc2KTsiLz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc1NTI2LC0wLjY1MDQzLC0wLjY1MDQzLC0wLjM3NTUyNiw0NzUuMjk2LDYzMi4xMTUpIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjk3LjYwOCwxNDguODY3QzM1Ni42ODksMTQ4Ljg2NyA0MDQuNjU1LDE5Ni44MzMgNDA0LjY1NSwyNTUuOTE0QzQwNC42NTUsMzE0Ljk5NSAzMTEuMTYsNDUzLjY2MiAyOTcuNjA4LDQ1My42NjJDMjg0LjA1NSw0NTMuNjYyIDE5MC41NjEsMzE0Ljk5NSAxOTAuNTYxLDI1NS45MTRDMTkwLjU2MSwxOTYuODMzIDIzOC41MjcsMTQ4Ljg2NyAyOTcuNjA4LDE0OC44NjdaIiBzdHlsZT0iZmlsbDpyZ2IoMTA2LDI3LDE1NCk7Ii8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/text/brand.js":
/*!******************************!*\
  !*** ./public/text/brand.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  crypto: {
    name: 'Quang',
    desc: 'Oiron Crypto | React Landing Page Template',
    prefix: 'oiron',
    footerText: 'Oiron Theme 2021',
    logoText: 'Oiron Theme',
    projectName: 'Crypto',
    url: 'awrora3.indisains.com/crypto',
    img: '/static/images/logo-crypto.png'
  }
};

/***/ }),

/***/ "./public/text/link.js":
/*!*****************************!*\
  !*** ./public/text/link.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const link = {
  crypto: {
    home: '/',
    about: '/about',
    team: '/about/team',
    blog: '/blog',
    blogDetail: '/blog/detail-blog',
    login: '/login',
    register: '/register',
    contact: '/contact',
    contactMap: '/contact/with-map',
    card: '/collection',
    product: '/collection/products',
    productDetail: '/collection/detail-product',
    pricing: '/utils/pricing',
    faq: '/utils/faq',
    maintenance: '/utils/maintenance',
    comingSoon: '/utils/coming-soon'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (link);

/***/ }),

/***/ "./theme/common.js":
/*!*************************!*\
  !*** ./theme/common.js ***!
  \*************************/
/*! exports provided: useSpacing, usePopup, useTextAlign, useFloat, useText, useHidden, useFlexBox, useFlipRtl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpacing", function() { return useSpacing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePopup", function() { return usePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTextAlign", function() { return useTextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFloat", function() { return useFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useText", function() { return useText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHidden", function() { return useHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFlexBox", function() { return useFlexBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFlipRtl", function() { return useFlipRtl; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const sectionMargin = margin => margin * 20;

const titleStyle = {
  fontSize: 48,
  lineHeight: '62px',
  textTransform: 'capitalize',
  fontWeight: 700,
  marginBottom: 40,
  position: 'relative'
};
const useSpacing = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    '& ul[class="slick-dots"]': {
      '& li': {
        margin: '1px 2px',
        '& button:before': {
          borderRadius: '50%',
          color: 'transparent !important',
          width: 10,
          height: 10,
          left: 3,
          border: `2px solid ${theme.palette.primary.main}`,
          opacity: 0.5,
          transition: 'all 0.3s ease'
        },
        '&[class="slick-active"]': {
          '& button:before': {
            width: 20,
            height: 20,
            top: -5,
            left: -1,
            opacity: 1,
            background: theme.palette.primary.main
          }
        }
      }
    }
  },
  colouredPage: {
    position: 'relative',
    overflow: 'hidden',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(4)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(4)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(4),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(2.4)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(4),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(2.4)
    }
  },
  containerWrap: {
    '& > section': {
      position: 'relative'
    }
  },
  containerGeneral: {
    position: 'relative',
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 32,
      paddingRight: 32
    }
  },
  containerFront: {
    position: 'relative',
    zIndex: 1
  },
  fullScreenContainer: {
    height: '100vh',
    position: 'relative',
    display: 'flex',
    overflow: 'hidden'
  },
  maintenanceIcon: {
    margin: theme.spacing(3),
    width: 100,
    height: 100,
    '& svg': {
      width: 50,
      height: 50
    }
  },
  primaryIcon: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark
  },
  secondaryIcon: {
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark
  },
  accentIcon: {
    background: theme.palette.accent.light,
    color: theme.palette.accent.dark
  },
  fb: {
    color: '#3f51b5'
  },
  ig: {
    color: '#9c27b0'
  },
  tw: {
    color: '#2196f3'
  },
  li: {
    color: '#2196f3'
  },
  btnNotify: {
    minWidth: 120,
    margin: 4
  }
}));
const usePopup = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
const useTextAlign = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
const useFloat = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
});
const useText = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 14,
    lineHeight: '24px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  },
  titlePrimary: _objectSpread(_objectSpread({}, titleStyle), {}, {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  }),
  titleSecondary: _objectSpread(_objectSpread({}, titleStyle), {}, {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  }),
  textPrimary: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
  },
  textSecondary: {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  secondaryColor: {
    color: theme.palette.secondary.main
  },
  accentColor: {
    color: theme.palette.accent.main
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  bold: {
    fontWeight: theme.typography.fontWeightBold
  },
  medium: {
    fontWeight: theme.typography.fontWeightMedium
  },
  regular: {
    fontWeight: theme.typography.fontWeightRegular
  }
}));
const useHidden = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));
const useFlexBox = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(() => ({
  justifyStart: {
    justifyContent: 'flex-star'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  alignStart: {
    alignItems: 'flex-star'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignEnd: {
    alignItems: 'flex-end'
  }
}));
const useFlipRtl = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
}));

/***/ }),

/***/ "./theme/config.js":
/*!*************************!*\
  !*** ./theme/config.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const uiState = {
  header: 'mixed',

  /* available: mixed, droplist, mega, navscroll, hamburger, basic, search */
  footer: 'sitemap',

  /* available: basic, blog, contact, sitemap */
  corner: 'chat'
  /* available: chat, nav */

};
/* harmony default export */ __webpack_exports__["default"] = (uiState);

/***/ }),

/***/ "@material-ui/core/Accordion":
/*!**********************************************!*\
  !*** external "@material-ui/core/Accordion" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "@material-ui/core/AccordionDetails":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionDetails" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "@material-ui/core/AccordionSummary":
/*!*****************************************************!*\
  !*** external "@material-ui/core/AccordionSummary" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/ButtonBase":
/*!***********************************************!*\
  !*** external "@material-ui/core/ButtonBase" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/Check":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Language":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Language" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "@material-ui/icons/Settings":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Settings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-material-ui-form-validator":
/*!***************************************************!*\
  !*** external "react-material-ui-form-validator" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3VudGVyU2luZ2xlL0NvdW50ZXJTaW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3VudGVyU2luZ2xlL2NvdW50ZXItc2luZ2xlLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ291bnRlclNpbmdsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RlY29yYXRpb24vSGV4YURlY28uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZWNvcmF0aW9uL2RlY29yYXRpb24tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvQmFzaWMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvQmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9Db250YWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckV4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9NYWluLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL1NpdGVNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvYmFzaWMtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvYmxvZy1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci9jb250YWN0LXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyL2Zvb3Rlci1leHRlbmQtc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIvc2l0ZW1hcC1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0F1dGhGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0NoZWNrYm94LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvUmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9Tb2NpYWxBdXRoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvZm9ybS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9CYXNpYy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9Ub3BOYXYvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvZGF0YS9zaW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaGVhZGVyLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9Mb2dvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9nby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ28vbG9nby1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvZmxhZy1sb2dvLnBuZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2ltZ0FQSS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL2xvZ28tY3J5cHRvLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3RoZW1lL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9jb25maWcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGFuZ3VhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtY291bnR1cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtd293XCIiXSwibmFtZXMiOlsiQ291bnRlclNpbmdsZSIsInByb3BzIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInRleHQiLCJ1c2VUZXh0IiwidCIsInBsYXkiLCJzZXRQbGF5IiwidXNlU3RhdGUiLCJjb3VudHVwIiwidmFsIiwiaXNQbGF5IiwiaGFuZGxlUGxheSIsInNldFRpbWVvdXQiLCJjb3VudGVyV3JhcCIsInRpdGxlIiwic3VidGl0bGUyIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iLCJjb3VudGVyU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicG9zaXRpb24iLCJtYXJnaW4iLCJzcGFjaW5nIiwidGV4dEFsaWduIiwiY29sb3IiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJsaWdodCIsImRhcmsiLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwibWFyZ2luQm90dG9tIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiZm9udFNpemUiLCJIZXhhRGVjbyIsImV4dGVuZCIsImhleGFEZWNvIiwiZXh0ZW5kRGVjbyIsImNsc3giLCJoZXhhIiwidG9wIiwiZGVjb0JnIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsImhleGFTZWNvbmRhcnkiLCJoZXhhQWNjZW50IiwiZGVjb3JhdGlvblN0eWxlcyIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJjb250ZW50IiwiYmFja2dyb3VuZCIsInJpZ2h0IiwiZmlsbCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJib3R0b20iLCJDb3B5cmlnaHQiLCJicmFuZCIsImNyeXB0byIsImZvb3RlclRleHQiLCJCYXNpYyIsImZvb3RlciIsInJvb3QiLCJtZW51IiwibWFwIiwiaXRlbSIsImluZGV4IiwidG9TdHJpbmciLCJzb2NtZWQiLCJpY29uIiwiY29weXJpZ2h0IiwiZGVzY3JpcHRpb24iLCJsaW5rIiwibmV3cyIsImltZyIsInBob3RvIiwiQmxvZyIsImN0biIsInNldEN0biIsInZhbHVlcyIsInNldFZhbHVlcyIsImxhbmciLCJ1c2VFZmZlY3QiLCJpMThuIiwibGFuZ3VhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJvbGRWYWx1ZXMiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJjaGFuZ2VMYW5ndWFnZSIsInRvZ2dsZURpciIsImxvZ28iLCJwcm9qZWN0TmFtZSIsImZvb3RlckRlc2MiLCJxdWlja0xpbmtzIiwiYmxvZ0l0ZW0iLCJsaXN0VGV4dCIsImNhdGVnb3J5IiwiY29udGFpbmVyIiwic2VsZWN0TGFuZyIsInNlbGVjdE1lbnUiLCJDb250YWN0IiwiYWxpZ24iLCJ1c2VUZXh0QWxpZ24iLCJlbWFpbCIsInBob25lIiwiY29tcGFueSIsIm1lc3NhZ2UiLCJvcGVuTm90aWYiLCJzZXROb3RpZiIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNsb3NlIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJzbSIsImNvbnRhY3QiLCJwYXJhZ3JhcGgiLCJkaXZpZGVyIiwidGV4dENlbnRlciIsImZvcm1XcmFwIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiZm9ybUJveCIsImZvcm0iLCJlcnJvcnMiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJidG5BcmVhIiwiRm9vdGVyRXh0ZW5kIiwid2l0aENvdW50ZXIiLCJjaGlsZHJlbiIsImZvb3RlckNvdW50ZXIiLCJkZWNvIiwiYWN0aW9uIiwidGl0bGUyIiwibm9kZSIsIk1haW4iLCJzdGF0ZSIsInVzZVJlZHVjZXIiLCJ1aVN0YXRlIiwiZm9vdGVycyIsIkZvb3RlciIsImlzRGVza3RvcCIsInVwIiwic2l0ZU1hcEl0ZW0iLCJhY2NvcmRpb25Sb290IiwiYWNjb3JkaW9uSWNvbiIsImFjY29yZGlvbkNvbnRlbnQiLCJiYXNpY1N0eWxlcyIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJ6SW5kZXgiLCJwYWRkaW5nIiwidGV4dFRyYW5zZm9ybSIsImZvbnRXZWlnaHRNZWRpdW0iLCJ0ZXh0RGVjb3JhdGlvbiIsInN1YnNjcmliZSIsIm1heFdpZHRoIiwiZmllbGQiLCJwYWRkaW5nUmlnaHQiLCJidXR0b24iLCJqdXN0aWZ5Q29udGVudCIsImJsb2dTdHlsZXMiLCJsaXN0U3R5bGUiLCJtYXJnaW5SaWdodCIsIndoaXRlU3BhY2UiLCJvdmVyZmxvdyIsInRleHRPdmVyZmxvdyIsIm1haW4iLCJhbGlnbkl0ZW1zIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiYm9yZGVyIiwiZmFkZSIsImJvcmRlclRvcCIsInBhZGRpbmdMZWZ0IiwiZmxleCIsIm1pbkhlaWdodCIsImNvbnRhY3RTdHlsZXMiLCJzZWNvbmRhcnkiLCJkZWNvTGlnaHQiLCJkZWNvRGFyayIsImZvb3RlclN0eWxlcyIsInBhZGRpbmdUb3AiLCJkYXJrZW4iLCJsaWdodGVuIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwibGluZUhlaWdodCIsIkF1dGhGcmFtZSIsInN1YnRpdGxlIiwicGFnZVdyYXAiLCJhdXRoRnJhbWUiLCJtZCIsImdyZWV0aW5nIiwiaW1nQVBJIiwiY3J5cHRvSW5uZXIiLCJzdHJpbmciLCJyZWQzMDAiLCJyZWQiLCJzdHlsZXMiLCJjaGVja2JveCIsIkNoZWNrYm94VmFsaWRhdG9yRWxlbWVudCIsIlZhbGlkYXRvckNvbXBvbmVudCIsImVycm9yVGV4dCIsImlzVmFsaWQiLCJnZXRFcnJvck1lc3NhZ2UiLCJyZW5kZXIiLCJlcnJvck1lc3NhZ2VzIiwidmFsaWRhdG9ycyIsInJlcXVpcmVkRXJyb3IiLCJjaGVja2VkIiwidmFsaWRhdG9yTGlzdGVuZXIiLCJyZXN0IiwiciIsIndpdGhTdHlsZXMiLCJSZWdpc3RlciIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiVmFsaWRhdG9yRm9ybSIsImFkZFZhbGlkYXRpb25SdWxlIiwiY2hlY2siLCJzZXRDaGVjayIsImhhbmRsZUNoZWNrIiwiaGVhZCIsInRleHRQcmltYXJ5Iiwic2VwYXJhdG9yIiwiZSIsImJ1dHRvbkxhcmdlIiwiU29jaWFsQXV0aCIsInNvY21lZFNpZGVMb2dpbiIsIm5hdmlCdG4iLCJibHVlQnRuIiwicmVkQnRuIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJpbm5lcldyYXAiLCJmdWxsRm9ybVdyYXAiLCJwYXBlciIsIm1hcEZvcm0iLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwiYm9yZGVyUmlnaHQiLCJkZXNjIiwiY2hlY2tBcmVhIiwiZm9ybUhlbHBlciIsImZsZXhEaXJlY3Rpb24iLCJiZXR3ZWVuIiwibWluV2lkdGgiLCJyaWdodEljb24iLCJkaXJlY3Rpb24iLCJ3cmFwRGVjbyIsImNvbW1vbiIsIndoaXRlIiwiYm9yZGVyVG9wQ29sb3IiLCJoaW50IiwiZm9ybUNvbnRyb2xMYWJlbCIsImZ1bGwiLCJidWJsZSIsImJsYWNrIiwibm90aWYiLCJmaXhlZCIsInNldEZpeGVkIiwib25Ub2dnbGVEYXJrIiwib25Ub2dnbGVEaXIiLCJocmVmIiwiaG9tZSIsImZsYWdGaXhlZCIsImhhbmRsZVNjcm9sbCIsImRvYyIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibmV3RmxhZ0ZpeGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsIm1hcmtldCIsImhlYWRlckNvbnRlbnQiLCJuYXZNZW51IiwidXNlck1lbnUiLCJ2RGl2aWRlciIsInRoZW1lVHlwZSIsIlN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiU2V0dGluZ3MiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaXNEYXJrIiwic2V0RGFyayIsImhhbmRsZUNsaWNrIiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNoYW5nZU1vZGUiLCJ0b2dnbGVEYXJrIiwiaGFuZGxlQ2hhbmdlTGFuZyIsIm9wZW4iLCJCb29sZWFuIiwiaWQiLCJ1bmRlZmluZWQiLCJzZXR0aW5nIiwiYWN0aXZlIiwic2V0dGluZ01lbnUiLCJtb2RlTWVudSIsImxhbmdNZW51Iiwib3B0aW9ucyIsImFsbExhbmd1YWdlcyIsInNpbmdsZSIsImZsYWdJY29uIiwiZmxhZyIsImhlYWRlclN0eWxlcyIsIm9wZW5EcmF3ZXIiLCJ0cmFuc2l0aW9uIiwibm9TaGFkb3ciLCJzY3JvbGxBY3RpdmVOYXYiLCJtdWx0aU1lbnUiLCJtYWluTWVudSIsImJvcmRlckNvbG9yIiwibW9iaWxlTWVudSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckxlZnQiLCJiYXIiLCJtZWdhTWVudVJvb3QiLCJtdWx0aU1lbnVSb290Iiwicm91bmRlZCIsInNtYWxsIiwibWVnYU1lbnUiLCJtYXhIZWlnaHQiLCJ0aHVtYk1lbnUiLCJ0aXRsZU1lZ2EiLCJtZW51SXRlbSIsImN1cnJlbnQiLCJzaG9ydCIsInNlYXJjaCIsIm1hcmdpbkxlZnQiLCJzZWFyY2hJY29uIiwiaW52ZXJ0IiwibmF2TG9nbyIsInBhcGVyTmF2IiwiYmFja2Ryb3BGaWx0ZXIiLCJtb2JpbGVOYXYiLCJhbmltYXRpb25UaW1pbmdGdW5jdGlvbiIsIm1lbnVMaXN0IiwiTG9nbyIsInNpemUiLCJsYW5kc2NhcGUiLCJwb3J0cmFpdCIsIm1lZGl1bSIsImxhcmdlIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImZhbGxiYWNrTG5nIiwiaW5pdEltbWVkaWF0ZSIsImxvY2FsZVBhdGgiLCJyZWFjdCIsInVzZVN1c3BlbnNlIiwibG9jYWxlU3VicGF0aHMiLCJlbmciLCJhcmEiLCJwcnQiLCJpbmQiLCJkZXUiLCJ6aG8iLCJ2biIsIlJlZ2lzdGVyUGFnZSIsInVzZVNwYWNpbmciLCJtYWluV3JhcCIsImxvZ2luIiwiY29udGFpbmVyR2VuZXJhbCIsImNvbnRhaW5lckZyb250IiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwiaW1nM2QiLCJpbm5lciIsImltZzJkIiwiYXZhdGFyIiwidWkiLCJwcmVmaXgiLCJsb2dvVGV4dCIsInVybCIsImFib3V0IiwidGVhbSIsImJsb2ciLCJibG9nRGV0YWlsIiwicmVnaXN0ZXIiLCJjb250YWN0TWFwIiwiY2FyZCIsInByb2R1Y3QiLCJwcm9kdWN0RGV0YWlsIiwicHJpY2luZyIsImZhcSIsIm1haW50ZW5hbmNlIiwiY29taW5nU29vbiIsInNlY3Rpb25NYXJnaW4iLCJ0aXRsZVN0eWxlIiwiY29sb3VyZWRQYWdlIiwic3BhY2VCb3R0b20iLCJzcGFjZVRvcCIsInNwYWNlQm90dG9tU2hvcnQiLCJzcGFjZVRvcFNob3J0IiwiY29udGFpbmVyV3JhcCIsImZ1bGxTY3JlZW5Db250YWluZXIiLCJtYWludGVuYW5jZUljb24iLCJwcmltYXJ5SWNvbiIsInNlY29uZGFyeUljb24iLCJhY2NlbnRJY29uIiwiYWNjZW50IiwiZmIiLCJpZyIsInR3IiwibGkiLCJidG5Ob3RpZnkiLCJ1c2VQb3B1cCIsImFwcEJhciIsInRleHRMZWZ0IiwidGV4dFJpZ2h0IiwidXNlRmxvYXQiLCJmbG9hdExlZnQiLCJmbG9hdCIsImZsb2F0UmlnaHQiLCJjYXB0aW9uIiwidGl0bGVQcmltYXJ5IiwidGl0bGVTZWNvbmRhcnkiLCJ0ZXh0U2Vjb25kYXJ5IiwicHJpbWFyeUNvbG9yIiwic2Vjb25kYXJ5Q29sb3IiLCJhY2NlbnRDb2xvciIsImNhcGl0YWxpemUiLCJ1cHBlcmNhc2UiLCJsb3dlcmNhc2UiLCJib2xkIiwicmVndWxhciIsInVzZUhpZGRlbiIsImxnRG93biIsIm1kRG93biIsInNtRG93biIsInhzRG93biIsImxnVXAiLCJtZFVwIiwic21VcCIsInVzZUZsZXhCb3giLCJqdXN0aWZ5U3RhcnQiLCJqdXN0aWZ5Q2VudGVyIiwianVzdGlmeUVuZCIsImFsaWduU3RhcnQiLCJhbGlnbkNlbnRlciIsImFsaWduRW5kIiwidXNlRmxpcFJ0bCIsImNvcm5lciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0U7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoicGFnZXMvcmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL3JlZ2lzdGVyLmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBDb3VudFVwIGZyb20gJ3JlYWN0LWNvdW50dXAnO1xuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2NvdW50ZXItc2luZ2xlLXN0eWxlJztcblxuZnVuY3Rpb24gQ291bnRlclNpbmdsZShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XG4gIGNvbnN0IFtwbGF5LCBzZXRQbGF5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY291bnR1cCA9ICh2YWwsIGlzUGxheSkgPT4gKFxuICAgIDxzcGFuPlxuICAgICAge2lzUGxheSA/IDxDb3VudFVwIGVuZD17dmFsfSAvPiA6IDB9XG4gICAgPC9zcGFuPlxuICApO1xuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBzZXRQbGF5KHRydWUpOyB9LCAyMDApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvdW50ZXJXcmFwfT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICA8UmVhY3RXT1cgYW5pbWF0aW9uPVwiZmFkZUluXCIgb2Zmc2V0PXsyMDB9IGNhbGxiYWNrPXtoYW5kbGVQbGF5fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBjbGFzc05hbWU9e3RleHQudGl0bGV9PlxuICAgICAgICAgICAge2NvdW50dXAoMiwgcGxheSl9XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIHtjb3VudHVwKDIzNCwgcGxheSl9XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIHtjb3VudHVwKDU2NywgcGxheSl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxuICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5mb290ZXJfY291bnRlcicpfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9SZWFjdFdPVz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5Db3VudGVyU2luZ2xlLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQ291bnRlclNpbmdsZSk7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgY291bnRlclN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY291bnRlcldyYXA6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNSwgMCksXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAnJiBoNCc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogMzZcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudGVyU3R5bGVzO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ291bnRlclNpbmdsZSc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2RlY29yYXRpb24tc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZXhhRGVjbyhwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgZXh0ZW5kIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZXhhRGVjb30+XG4gICAgICB7ZXh0ZW5kICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5kRGVjb30+XG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5oZXhhLCBjbGFzc2VzLnRvcCl9PlxuICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL2NyeXB0by9kZWNvLWhleGEuc3ZnI21haW5cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvQmd9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkhleGFEZWNvLnByb3BUeXBlcyA9IHtcbiAgZXh0ZW5kOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkhleGFEZWNvLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXh0ZW5kOiBmYWxzZVxufTtcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuY29uc3QgaGV4YVNlY29uZGFyeSA9ICcvaW1hZ2VzL2NyeXB0by9oZXhhLXNlY29uZGFyeS5zdmcnO1xuY29uc3QgaGV4YUFjY2VudCA9ICcvaW1hZ2VzL2NyeXB0by9oZXhhLWFjY2VudC5zdmcnO1xuXG5jb25zdCBkZWNvcmF0aW9uU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBkZWNvQmc6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB3aWR0aDogODAsXG4gICAgICBoZWlnaHQ6IDgwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDMwMCxcbiAgICAgIGxlZnQ6IC0xMCxcbiAgICAgIGJhY2tncm91bmQ6IGB1cmwoJHtoZXhhQWNjZW50fSkgbm8tcmVwZWF0YFxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB3aWR0aDogODAsXG4gICAgICBoZWlnaHQ6IDgwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDEwMCxcbiAgICAgIHJpZ2h0OiAtMzAsXG4gICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7aGV4YVNlY29uZGFyeX0pIG5vLXJlcGVhdGBcbiAgICB9XG4gIH0sXG4gIGV4dGVuZERlY286IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgZmlsbDogJyNBOUE5QTknLFxuICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgd2lkdGg6IDMwMCxcbiAgICAgIGhlaWdodDogMzAwLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDMwZGVnKSBzY2FsZSgwLjc1KScsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgIH1cbiAgfSxcbiAgdG9wOiB7fSxcbiAgYm90dG9tOiB7fSxcbiAgaGV4YToge1xuICAgICcmJHRvcCc6IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDQwLFxuICAgIH0sXG4gICAgJyYkYm90dG9tJzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IC0yMjBcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb3JhdGlvblN0eWxlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IGJyYW5kIGZyb20gJ34vcHVibGljL3RleHQvYnJhbmQnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcbmltcG9ydCBtZW51IGZyb20gJy4uL0hlYWRlci9kYXRhL3NpbmdsZSc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vYmFzaWMtc3R5bGUnO1xuXG5mdW5jdGlvbiBDb3B5cmlnaHQoKSB7XG4gIHJldHVybiAoXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgZGlzcGxheT1cImJsb2NrXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICZjb3B5OyZuYnNwO1xuICAgICAge2JyYW5kLmNyeXB0by5mb290ZXJUZXh0fVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQmFzaWMocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHQgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG1heFdpZHRoPVwibGdcIj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7bWVudS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4LnRvU3RyaW5nKCl9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJyArIGl0ZW19IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuaGVhZGVyXycgKyBpdGVtKX1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jbWVkfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRkJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLXR3aXR0ZXJcIiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiVFdcIiBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLWZhY2Vib29rXCIgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIklHXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLXNvY2lhbC1pbnN0YWdyYW1cIiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvcHlyaWdodH0+XG4gICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5CYXNpYy5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShCYXNpYyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBMYW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTGFuZ3VhZ2UnO1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCc7XG5pbXBvcnQgT3V0bGluZWRJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9PdXRsaW5lZElucHV0JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IGxvZ28gZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2xvZ28tY3J5cHRvLnN2Zyc7XG5pbXBvcnQgYnJhbmQgZnJvbSAnfi9wdWJsaWMvdGV4dC9icmFuZCc7XG5pbXBvcnQgaW1nIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9ibG9nLXN0eWxlJztcblxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICByZXR1cm4gKFxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGRpc3BsYXk9XCJibG9ja1wiIGFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAmY29weTsmbmJzcDtcbiAgICAgIHticmFuZC5jcnlwdG8uZm9vdGVyVGV4dH1cbiAgICA8L1R5cG9ncmFwaHk+XG4gICk7XG59XG5cbmNvbnN0IGZvb3RlciA9IHtcbiAgdGl0bGU6ICdRdWljayBMaW5rcycsXG4gIGRlc2NyaXB0aW9uOiBbJ1Jlc291cmNlJywgJ0Fub3RoZXIgcmVzb3VyY2UnLCAnRmluYWwgcmVzb3VyY2UnLCAnUHJpdmFjeSBwb2xpY3knLCAnVGVybXMgb2YgdXNlJywgJ1Rlcm1zIENvbmRpdGlvbiddLFxuICBsaW5rOiBbJyNyZXNvdXJjZScsICcjYW5vdGhlci1yZXNvdXJjZScsICcjZmluYWwtcmVzb3VyY2UnLCAnI3ByaXZhY3ktcG9saWN5JywgJyN0ZXJtcy1vZi11c2UnXSxcbn07XG5cbmNvbnN0IG5ld3MgPSBbXG4gIHtcbiAgICB0eXBlOiAnbmV3cycsXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxuICAgIGltZzogaW1nLnBob3RvWzRdXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnbmV3cycsXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxuICAgIGltZzogaW1nLnBob3RvWzFdXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnbmV3cycsXG4gICAgdGV4dDogJ1NlZCBpbXBlcmRpZXQgZW5pbSBsaWd1bGEgdml0YWUgdml2ZXJyYS4nLFxuICAgIGltZzogaW1nLnBob3RvWzNdXG4gIH1cbl07XG5cbmZ1bmN0aW9uIEJsb2cocHJvcHMpIHtcbiAgY29uc3QgW2N0biwgc2V0Q3RuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgbGFuZzogJ2VuZycsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFsdWVzKHsgbGFuZzogaTE4bi5sYW5ndWFnZSB9KTtcbiAgICBzZXRDdG4oZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4td3JhcCcpKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHNldFZhbHVlcyhvbGRWYWx1ZXMgPT4gKHtcbiAgICAgIC4uLm9sZFZhbHVlcyxcbiAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ2FyYScpIHtcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UoJ2FyYScpO1xuICAgICAgcHJvcHMudG9nZ2xlRGlyKCdydGwnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgcHJvcHMudG9nZ2xlRGlyKCdsdHInKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBmaXhlZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezZ9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInRleHRQcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAge2JyYW5kLmNyeXB0by5wcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckRlc2N9IGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfc3VidGl0bGUnKX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnF1aWNrTGlua3N9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpmb290ZXJfbGluaycpfVxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Zm9vdGVyLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmb290ZXIubGlua1tpbmRleF19IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAge25ld3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8QnV0dG9uQmFzZSBjbGFzc05hbWU9e2NsYXNzZXMuYmxvZ0l0ZW19IGhyZWY9XCIjXCIga2V5PXtpbmRleC50b1N0cmluZygpfT5cbiAgICAgICAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nfSBhbHQ9XCJ0aHVtYlwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlzdFRleHR9PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Zm9vdGVyX25ld3MnKX1cbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGRpc3BsYXk9XCJibG9ja1wiIGNvbXBvbmVudD1cInBcIj5TZWQgaW1wZXJkaWV0IGVuaW0gbGlndWxhIHZpdGFlIHZpdmVycmEuIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NtZWR9PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRkJcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLXR3aXR0ZXJcIiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJUV1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtZmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJJR1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtaW5zdGFncmFtXCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiTElcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLWxpbmtlZGluXCIgLz5cbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubGFuZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgTWVudVByb3BzPXt7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBjdG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9eyhcbiAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmljb259IHBvc2l0aW9uPVwic3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxMYW5nSWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvSW5wdXRBZG9ybm1lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3RMYW5nfVxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgc2VsZWN0TWVudTogY2xhc3Nlcy5zZWxlY3RNZW51XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGlucHV0PXs8T3V0bGluZWRJbnB1dCBsYWJlbFdpZHRoPXsyMDB9IG5hbWU9XCJsYW5nXCIgaWQ9XCJvdXRsaW5lZC1sYW5nLXNpbXBsZVwiIC8+fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJlbmdcIj5FbmdsaXNoPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiZGV1XCI+RGV1dHNjaDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImFyYVwiPtin2YTYudix2KjZitmR2Kk8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJpbmRcIj5CYWhhc2EgSW5kb25lc2lhPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwicHJ0XCI+UG9ydHVndcOqczwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInpob1wiPueugOS9k+S4reaWhzwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5CbG9nLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlRGlyOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkJsb2cuZGVmYXVsdFByb3BzID0ge1xuICB0b2dnbGVEaXI6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoQmxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2Jhcic7XG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm9ybSwgVGV4dFZhbGlkYXRvciB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcbmltcG9ydCBsb2dvIGZyb20gJ34vcHVibGljL2ltYWdlcy9sb2dvLWNyeXB0by5zdmcnO1xuaW1wb3J0IGJyYW5kIGZyb20gJ34vcHVibGljL3RleHQvYnJhbmQnO1xuaW1wb3J0IHsgdXNlVGV4dCwgdXNlVGV4dEFsaWduIH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2NvbnRhY3Qtc3R5bGUnO1xuXG5mdW5jdGlvbiBDb250YWN0KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgdGV4dCA9IHVzZVRleHQoKTtcbiAgY29uc3QgYWxpZ24gPSB1c2VUZXh0QWxpZ24oKTtcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGNvbXBhbnk6ICcnLFxuICAgIG1lc3NhZ2U6ICcnXG4gIH0pO1xuXG4gIGNvbnN0IFtvcGVuTm90aWYsIHNldE5vdGlmXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBzZXROb3RpZih0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXROb3RpZihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gZGlyZWN0aW9uPXtpc01vYmlsZSA/ICdjb2x1bW4tcmV2ZXJzZScgOiAncm93J30+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs1fT5cbiAgICAgICAgICAgIDxCb3ggbXg9e3sgc206IDUgfX0gbXQ9ezV9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICAgICAge2JyYW5kLmNyeXB0by5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjcnlwdG8tbGFuZGluZy5iYW5uZXJfc3VidGl0bGUnKX1cbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zb2NtZWR9PlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtZmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRGVsZXRlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLWluc3RhZ3JhbVwiIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtdHdpdHRlclwiIC8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJEZWxldGVcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtbGlua2VkaW5cIiAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhY3R9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpibG9nX3Bob25lJyl9XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICsxMiAzNDUgNjc4IDkwXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXZpZGVyfSAvPlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICAgICAgU2t5cGVcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgamVuYWRvZS5za3lwZVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8Qm94IG10PXs4fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIiBjbGFzc05hbWU9e2FsaWduLnRleHRDZW50ZXJ9PlxuICAgICAgICAgICAgICAgICAgICAmY29weTsmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAge2JyYW5kLmNyeXB0by5mb290ZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVdyYXB9PlxuICAgICAgICAgICAgICA8U25hY2tiYXJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3sgdmVydGljYWw6ICd0b3AnLCBob3Jpem9udGFsOiAncmlnaHQnIH19XG4gICAgICAgICAgICAgICAga2V5PVwidG9wIHJpZ2h0XCJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVuTm90aWZ9XG4gICAgICAgICAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NDAwMH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICBDb250ZW50UHJvcHM9e3tcbiAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ21lc3NhZ2UtaWQnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17PHNwYW4gaWQ9XCJtZXNzYWdlLWlkXCI+TWVzc2FnZSBTZW50PC9zcGFuPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtQm94fT5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs1fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGUsIHRleHQudGl0bGUpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmNvbnRhY3RfdGl0bGUyJyl9XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIGxnPXs3fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgICA8VmFsaWRhdG9yRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9e2Vycm9ycyA9PiBjb25zb2xlLmxvZyhlcnJvcnMpfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0VmFsaWRhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpmb3JtX25hbWUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1sncmVxdWlyZWQnXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz17Wyd0aGlzIGZpZWxkIGlzIHJlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOmZvcm1fZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1sncmVxdWlyZWQnLCAnaXNFbWFpbCddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLCAnZW1haWwgaXMgbm90IHZhbGlkJ119XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpmb3JtX21lc3NhZ2UnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbWVzc2FnZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5BcmVhfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgdHlwZT1cInN1Ym1pdFwiIGZ1bGxXaWR0aCBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmZvcm1fc2VuZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvVmFsaWRhdG9yRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuQ29udGFjdC5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NyeXB0by1sYW5kaW5nJ10pKENvbnRhY3QpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vQ291bnRlclNpbmdsZSc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9vdGVyLWV4dGVuZC1zdHlsZSc7XG5cbmZ1bmN0aW9uIEZvb3RlckV4dGVuZChwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XG4gIGNvbnN0IHsgd2l0aENvdW50ZXIsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmZvb3RlckNvdW50ZXIsIHdpdGhDb3VudGVyID8gY2xhc3Nlcy5leHRlbmQgOiAnJyl9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmRlY299IC8+XG4gICAgICB7d2l0aENvdW50ZXIgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxDb3VudGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9ufT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3RleHQudGl0bGUyfT5cbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjphYm91dF9yZWFkeScpfVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuZ2V0c3RhcnRlZCcpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRm9vdGVyRXh0ZW5kLnByb3BUeXBlcyA9IHtcbiAgd2l0aENvdW50ZXI6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuRm9vdGVyRXh0ZW5kLmRlZmF1bHRQcm9wcyA9IHtcbiAgd2l0aENvdW50ZXI6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjcnlwdG8tbGFuZGluZyddKShGb290ZXJFeHRlbmQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdWlTdGF0ZSBmcm9tICd+L3RoZW1lL2NvbmZpZyc7XG5pbXBvcnQgU2l0ZU1hcCBmcm9tICcuL1NpdGVNYXAnO1xuaW1wb3J0IEJsb2cgZnJvbSAnLi9CbG9nJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vQ29udGFjdCc7XG5pbXBvcnQgQmFzaWMgZnJvbSAnLi9CYXNpYyc7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IFtzdGF0ZV0gPSB1c2VSZWR1Y2VyKG51bGwsIHVpU3RhdGUpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7IHN0YXRlLmZvb3RlciA9PT0gJ2Jhc2ljJyAmJiA8QmFzaWMgLz59XG4gICAgICB7IHN0YXRlLmZvb3RlciA9PT0gJ2Jsb2cnICYmIDxCbG9nIC8+fVxuICAgICAgeyBzdGF0ZS5mb290ZXIgPT09ICdjb250YWN0JyAmJiA8Q29udGFjdCAvPn1cbiAgICAgIHsgc3RhdGUuZm9vdGVyID09PSAnc2l0ZW1hcCcgJiYgPFNpdGVNYXAgLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uJztcbmltcG9ydCBBY2NvcmRpb25TdW1tYXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvblN1bW1hcnknO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uRGV0YWlscyc7XG5pbXBvcnQgTGFuZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xhbmd1YWdlJztcbmltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0JztcbmltcG9ydCBPdXRsaW5lZElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL091dGxpbmVkSW5wdXQnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICd+L2kxOG4nO1xuaW1wb3J0IGxvZ28gZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2xvZ28tY3J5cHRvLnN2Zyc7XG5pbXBvcnQgYnJhbmQgZnJvbSAnfi9wdWJsaWMvdGV4dC9icmFuZCc7XG5pbXBvcnQgeyB1c2VUZXh0QWxpZ24gfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vc2l0ZW1hcC1zdHlsZSc7XG5cbmZ1bmN0aW9uIENvcHlyaWdodCgpIHtcbiAgcmV0dXJuIChcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBkaXNwbGF5PVwiYmxvY2tcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICZjb3B5OyZuYnNwO1xuICAgICAge2JyYW5kLmNyeXB0by5mb290ZXJUZXh0fVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgKTtcbn1cblxuY29uc3QgZm9vdGVycyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQ29tcGFueScsXG4gICAgZGVzY3JpcHRpb246IFsnVGVhbScsICdIaXN0b3J5JywgJ0NvbnRhY3QgdXMnLCAnTG9jYXRpb25zJ10sXG4gICAgbGluazogWycjdGVhbScsICcjaGlzdG9yeScsICcjY29udGFjdC11cycsICcjbG9jYXRpb25zJ10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Jlc291cmNlcycsXG4gICAgZGVzY3JpcHRpb246IFsnUmVzb3VyY2UnLCAnUmVzb3VyY2UgbmFtZScsICdBbm90aGVyIHJlc291cmNlJywgJ0ZpbmFsIHJlc291cmNlJ10sXG4gICAgbGluazogWycjcmVzb3VyY2UnLCAnI3Jlc291cmNlLW5hbWUnLCAnI2Fub3RoZXItcmVzb3VyY2UnLCAnI2ZpbmFsLXJlc291cmNlJ10sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0xlZ2FsJyxcbiAgICBkZXNjcmlwdGlvbjogWydQcml2YWN5IHBvbGljeScsICdUZXJtcyBvZiB1c2UnXSxcbiAgICBsaW5rOiBbJyNwcml2YWN5LXBvbGljeScsICcjdGVybXMtb2YtdXNlJ10sXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBGb290ZXIocHJvcHMpIHtcbiAgY29uc3QgW2N0biwgc2V0Q3RuXSA9IHVzZVN0YXRlKG51bGwpO1xuICAvLyBUaGVtZSBicmVha3BvaW50c1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJykpO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSk7XG5cbiAgLy8gVHJhbnNsYXRpb24gRnVuY3Rpb25cbiAgY29uc3QgeyB0IH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGFsaWduID0gdXNlVGV4dEFsaWduKCk7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgbGFuZzogJydcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRWYWx1ZXMoeyBsYW5nOiBpMThuLmxhbmd1YWdlIH0pO1xuICAgIHNldEN0bihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi13cmFwJykpO1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgc2V0VmFsdWVzKG9sZFZhbHVlcyA9PiAoe1xuICAgICAgLi4ub2xkVmFsdWVzLFxuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnYXJhJykge1xuICAgICAgaTE4bi5jaGFuZ2VMYW5ndWFnZSgnYXJhJyk7XG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ3J0bCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ2x0cicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gbWF4V2lkdGg9XCJsZ1wiIGNvbXBvbmVudD1cImZvb3RlclwiPlxuICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0gY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAge2JyYW5kLmNyeXB0by5wcm9qZWN0TmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRQcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckRlc2N9IGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgIHt0KCdjb21tb246Y3J5cHRvLWxhbmRpbmcuYmFubmVyX3N1YnRpdGxlJyl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIHtpc0Rlc2t0b3AgJiYgPENvcHlyaWdodCAvPn1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCI+XG4gICAgICAgICAgICB7Zm9vdGVycy5tYXAoZm9vdGVyID0+IChcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXszfSBrZXk9e2Zvb3Rlci50aXRsZX0gY2xhc3NOYW1lPXtjbGFzc2VzLnNpdGVNYXBJdGVtfT5cbiAgICAgICAgICAgICAgICB7aXNEZXNrdG9wICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29sb3I9XCJ0ZXh0UHJpbWFyeVwiIGd1dHRlckJvdHRvbT5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyLmRlc2NyaXB0aW9uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmb290ZXIubGlua1tpbmRleF19IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2lzTW9iaWxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICByb290OiBjbGFzc2VzLmFjY29yZGlvblJvb3QsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hY2NvcmRpb25JY29ufSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwicGFuZWwxYS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhbmVsMWEtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBjbGFzc2VzLmFjY29yZGlvbkNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9vdGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb290ZXIuZGVzY3JpcHRpb24ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtmb290ZXIubGlua1tpbmRleF19IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY21lZH0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiRkJcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLXNvY2lhbC10d2l0dGVyXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJUV1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLWZhY2Vib29rXCIgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJJR1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tc29jaWFsLWluc3RhZ3JhbVwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiTElcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLXNvY2lhbC1saW5rZWRpblwiIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5sYW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIE1lbnVQcm9wcz17e1xuICAgICAgICAgICAgICBjb250YWluZXI6IGN0blxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXsoXG4gICAgICAgICAgICAgIDxJbnB1dEFkb3JubWVudCBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbn0gcG9zaXRpb249XCJzdGFydFwiPlxuICAgICAgICAgICAgICAgIDxMYW5nSWNvbiAvPlxuICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3RMYW5nfVxuICAgICAgICAgICAgaW5wdXQ9ezxPdXRsaW5lZElucHV0IGxhYmVsV2lkdGg9ezIwMH0gbmFtZT1cImxhbmdcIiBpZD1cIm91dGxpbmVkLWxhbmctc2ltcGxlXCIgLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiZW5nXCI+RW5nbGlzaDwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJkZXVcIj5EZXV0c2NoPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cImFyYVwiPtin2YTYudix2KjZitmR2Kk8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiaW5kXCI+QmFoYXNhIEluZG9uZXNpYTwvTWVudUl0ZW0+XG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJwcnRcIj5Qb3J0dWd1w6pzPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cInpob1wiPueugOS9k+S4reaWhzwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICAgIHtpc01vYmlsZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXthbGlnbi50ZXh0Q2VudGVyfT5cbiAgICAgICAgICA8Qm94IHA9ezR9PlxuICAgICAgICAgICAgPENvcHlyaWdodCAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbkZvb3Rlci5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5Gb290ZXIuZGVmYXVsdFByb3BzID0ge1xuICB0b2dnbGVEaXI6ICgpID0+IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY3J5cHRvLWxhbmRpbmcnXSkoRm9vdGVyKTtcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBiYXNpY1N0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZm9vdGVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg1KVxuICB9LFxuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAxLFxuICAgICcmIG5hdic6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZyg2LCAwKSxcbiAgICAgICcmIHVsJzoge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICcmIGxpJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxKSxcbiAgICAgICAgICAnJiBhJzoge1xuICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxOCxcbiAgICAgICAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICAgICAgICBmb250U2l6ZTogMTZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxvZ286IHtcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgJyYgaW1nJzoge1xuICAgICAgd2lkdGg6IDcwLFxuICAgIH1cbiAgfSxcbiAgc3Vic2NyaWJlOiB7XG4gICAgbWF4V2lkdGg6IDU2MCxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAnJiBoNSc6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGRcbiAgICB9XG4gIH0sXG4gIGZvcm06IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgfSxcbiAgZmllbGQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgICcmIGlucHV0Jzoge1xuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zcGFjaW5nKDIwKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IDkwXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBidXR0b246IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6IDkwXG4gIH0sXG4gIHNvY21lZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogMjAwLFxuICAgIG1hcmdpbjogYDAgYXV0byAke3RoZW1lLnNwYWNpbmcoNil9cHhgLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGljb246IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5kaXZpZGVyLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0XG4gICAgfSxcbiAgICAnJiBpJzoge1xuICAgICAgd2lkdGg6IDI1LFxuICAgICAgaGVpZ2h0OiAyNSxcbiAgICAgIGZvbnRTaXplOiAyMixcbiAgICB9XG4gIH0sXG4gIGNvcHlyaWdodDoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLjUpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNpY1N0eWxlcztcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcblxuY29uc3QgYmxvZ1N0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgbGluazoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAxLjUpLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuICByb290OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAxLFxuICAgICcmIHAnOiB7XG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgdWwnOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH0sXG4gICAgJyYgbGknOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB3aWR0aDogJzMwJScsXG4gICAgICBtYXJnaW5SaWdodDogJzMlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIHdpZHRoOiAnNDclJ1xuICAgICAgfSxcbiAgICAgICcmIGEnOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoKSxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICB9LFxuICBxdWlja0xpbmtzOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpXG4gIH0sXG4gIGxvZ286IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgJyYgKyBwJzoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgaW1nJzoge1xuICAgICAgd2lkdGg6IDU0LFxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKSxcbiAgICB9LFxuICAgICcmIGg2Jzoge1xuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIGZvbnRTaXplOiAyOCxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplICAnLFxuICAgIH1cbiAgfSxcbiAgZm9vdGVyRGVzYzoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBzb2NtZWQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG4gICAgJyYgYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIGhlaWdodDogMzYsXG4gICAgfSxcbiAgICAnJiBpJzoge1xuICAgICAgZm9udFNpemU6IDI0XG4gICAgfVxuICB9LFxuICBpY29uOiB7fSxcbiAgc2VsZWN0TGFuZzoge1xuICAgIG1heFdpZHRoOiAyNTAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4IGF1dG8gJHt0aGVtZS5zcGFjaW5nKDQpfXB4YCxcbiAgICAnJiAkaWNvbic6IHtcbiAgICAgIHRvcDogMjksXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICB9LFxuICAgICcmIGZpZWxkc2V0Jzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgIGJveFNoYWRvdzogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLCAwLjUpfSAhaW1wb3J0YW50YCxcbiAgICAgICcmIGxlZ2VuZCc6IHtcbiAgICAgICAgdG9wOiA2LFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7ZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyaywgMC41KX1gXG4gICAgICB9LFxuICAgICAgJyYgKyBkaXYgKyBkaXYnOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEuNSwgMS41LCAxLjUsIDQpLFxuICAgICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNlbGVjdE1lbnU6IHtcbiAgICB3aWR0aDogMTYwLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIGJhY2tncm91bmQ6ICdub25lICFpbXBvcnRhbnQnXG4gIH0sXG4gIGZvb3RlckNvdW50ZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbGVmdDogJy0xMCUnLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIHRvcDogLTgwLFxuICAgICAgd2lkdGg6ICcxMjAlJyxcbiAgICAgIGhlaWdodDogMzUwLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIGhlaWdodDogMTIwLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNhdGVnb3J5OiB7fSxcbiAgbGlzdFRleHQ6IHt9LFxuICBibG9nSXRlbToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxKSxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgICcmICRjYXRlZ29yeSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygpLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgIH0sXG4gICAgJyYgJGxpc3RUZXh0Jzoge1xuICAgICAgZmxleDogMSxcbiAgICB9LFxuICAgICcmIGZpZ3VyZSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAyLCAwLCAwKSxcbiAgICAgIHdpZHRoOiA4MCxcbiAgICAgIGhlaWdodDogNTYsXG4gICAgICAnJiBpbWcnOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgIH0sXG4gICAgJyYgcCc6IHtcbiAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgIHRleHRBbGlnbjogJ2xlZnQnXG4gICAgfVxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBibG9nU3R5bGVzO1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IGNvbnRhY3RTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGZvb3Rlcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpXG4gIH0sXG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDFcbiAgfSxcbiAgbG9nbzoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBmb250U2l6ZTogMjgsXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KVxuICAgIH0sXG4gICAgJyYgaW1nJzoge1xuICAgICAgd2lkdGg6IDU0LFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0byA4cHgnLFxuICAgIH0sXG4gICAgJyYgaDQnOiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICB9XG4gIH0sXG4gIG1hcmdpbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBzb2NtZWQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMywgMCksXG4gICAgJyYgYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuZGl2aWRlcixcbiAgICAgIHdpZHRoOiAzNixcbiAgICAgIGhlaWdodDogMzYsXG4gICAgICAnJiBpJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgaSc6IHtcbiAgICAgIGZvbnRTaXplOiAyNFxuICAgIH1cbiAgfSxcbiAgY29udGFjdDoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxuICBkaXZpZGVyOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEuNSksXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZDogJ25vbmUnXG4gIH0sXG4gIGZvcm1XcmFwOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgZm9ybUJveDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg3KSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9XG4gIH0sXG4gIGlucHV0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9XG4gIH0sXG4gIGZvcm06IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgYnRuQXJlYToge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwLCAzKSxcbiAgICAnJiBzcGFuJzoge1xuICAgICAgJyYgYSc6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFN0eWxlcztcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgbGlnaHRlbiwgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuY29uc3QgZGVjb0xpZ2h0ID0gJy9pbWFnZXMvY3J5cHRvL2RlY28tZm9vdGVyLWxpZ2h0LnN2Zyc7XG5jb25zdCBkZWNvRGFyayA9ICcvaW1hZ2VzL2NyeXB0by9kZWNvLWZvb3Rlci1kYXJrLnN2Zyc7XG5cblxuY29uc3QgZm9vdGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBleHRlbmQ6IHt9LFxuICBmb290ZXJDb3VudGVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1RvcDogMzIwLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygtNDApLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gYGxpbmVhci1ncmFkaWVudCgxMjBkZWcsICR7ZGFya2VuKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjYpfSwgJHtkYXJrZW4odGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgMC42KX0pYCA6IGBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAke2xpZ2h0ZW4odGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuOSl9LCAke2xpZ2h0ZW4odGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgMC45KX0pYCxcbiAgICAnJiRleHRlbmQnOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoLTMwKSxcbiAgICB9XG4gIH0sXG4gIGRlY286IHtcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gZGVjb0RhcmsgOiBkZWNvTGlnaHR9KWAsXG4gICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICczNTBweCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBoZWlnaHQ6IDEyMCxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSc6IHtcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTcwcHgnXG4gICAgfVxuICB9LFxuICBhY3Rpb246IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ0JvdHRvbTogdGhlbWUuc3BhY2luZyg3KSxcbiAgICAnJiBoNCc6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogMjgsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU3R5bGVzO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWFpbic7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgZm9vdGVyU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgbGluazoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxLCAxLjUpLFxuICB9LFxuICBmb290ZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB6SW5kZXg6IDEsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIH0sXG4gICAgJyYgdWwnOiB7XG4gICAgICBtYXJnaW46IDAsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgIH0sXG4gICAgJyYgbGknOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygpLFxuICAgICAgJyYgYSc6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0TWVkaXVtLFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJyYgcCc6IHtcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0aXRsZToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBmb250U2l6ZTogMTgsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gIH0sXG4gIGxvZ286IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIGZvbnRTaXplOiAyOCxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICcmIGltZyc6IHtcbiAgICAgIHdpZHRoOiA0OCxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKCksXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMylcbiAgICB9XG4gIH0sXG4gIGZvb3RlckRlc2M6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgfSxcbiAgc29jbWVkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgJyYgYnV0dG9uJzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmRpdmlkZXIsXG4gICAgICB3aWR0aDogMzYsXG4gICAgICBoZWlnaHQ6IDM2LFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgICAgJyYgaSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgICB9XG4gICAgfSxcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogMjQsXG4gICAgICBoZWlnaHQ6IDI0XG4gICAgfVxuICB9LFxuICBpY29uOiB7XG4gICAgJyYgKyBkaXYnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZSAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMS41LCAxLjUsIDEuNSwgNCksXG4gICAgICB3aWR0aDogJ2NhbGMoMTAwJSAtIDMycHgpJyxcbiAgICB9XG4gIH0sXG4gIHNlbGVjdExhbmc6IHtcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgIHdpZHRoOiAyMDAsXG4gICAgZGlzcGxheTogJ2luaGVyaXQnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAnJiAkaWNvbic6IHtcbiAgICAgIHRvcDogMjEsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB9LFxuICAgICcmIGZpZWxkc2V0Jzoge1xuICAgICAgYm94U2hhZG93OiAnMCAxLjVweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcbiAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59ICFpbXBvcnRhbnRgLFxuICAgICAgJyYgbGVnZW5kJzoge1xuICAgICAgICB0b3A6IDYsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNpdGVNYXBJdGVtOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIHBhZGRpbmdUb3A6ICcwICFpbXBvcnRhbnQnLFxuICAgIH1cbiAgfSxcbiAgYWNjb3JkaW9uUm9vdDoge1xuICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICBtYXhXaWR0aDogNDgwLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICBhY2NvcmRpb25Db250ZW50OiB7XG4gICAgbWFyZ2luOiAwXG4gIH0sXG4gIGFjY29yZGlvbkljb246IHtcbiAgICBwYWRkaW5nOiAwXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyU3R5bGVzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XG5pbXBvcnQgaW1nQVBJIGZyb20gJ34vcHVibGljL2ltYWdlcy9pbWdBUEknO1xuaW1wb3J0IEhleGFEZWNvIGZyb20gJy4uL0RlY29yYXRpb24vSGV4YURlY28nO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvcm0tc3R5bGUnO1xuXG5mdW5jdGlvbiBBdXRoRnJhbWUocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xuICAvLyBNZWRpYSBxdWVyeVxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzRGVza3RvcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJykpO1xuICBjb25zdCBpc01vYmlsZSA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKSk7XG5cbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCB0aXRsZSxcbiAgICBzdWJ0aXRsZSwgdHlwZVxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYWdlV3JhcH0+XG4gICAgICA8SGV4YURlY28gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhGcmFtZX0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXtpc01vYmlsZSA/IDAgOiAyfT5cbiAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxuICAgICAgICAgICAgPEJveCBweD17eyBzbTogNiwgbWQ6IDAgfX0+XG4gICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUJveH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybVdyYXB9PlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIHtpc0Rlc2t0b3AgJiYgKFxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ3JlZXRpbmd9PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3RleHQudGl0bGUyfT5cbiAgICAgICAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxuICAgICAgICAgICAgICAgICAgeyBzdWJ0aXRsZSB9XG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWd9PlxuICAgICAgICAgICAgICAgICAge3R5cGUgPT09ICdsb2dpbicgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltZ0FQSS5jcnlwdG9Jbm5lclszXX1cbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLTJkPXtpbWdBUEkuY3J5cHRvSW5uZXJbMl19XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS0zZD17aW1nQVBJLmNyeXB0b0lubmVyWzNdfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy0yZDNkXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJsb2dpblwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWdBUEkuY3J5cHRvSW5uZXJbNV19XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS0yZD17aW1nQVBJLmNyeXB0b0lubmVyWzRdfVxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtM2Q9e2ltZ0FQSS5jcnlwdG9Jbm5lcls1XX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctMmQzZFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwicmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkF1dGhGcmFtZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkF1dGhGcmFtZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN1YnRpdGxlOiAnJyxcbiAgdHlwZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRnJhbWU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCB7IFZhbGlkYXRvckNvbXBvbmVudCB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcblxuY29uc3QgcmVkMzAwID0gcmVkWyc1MDAnXTtcblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgY2hlY2tib3g6IHtcbiAgICBsZWZ0OiAwLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogcmVkMzAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpXG4gIH1cbn0pO1xuXG5jbGFzcyBDaGVja2JveFZhbGlkYXRvckVsZW1lbnQgZXh0ZW5kcyBWYWxpZGF0b3JDb21wb25lbnQge1xuICBlcnJvclRleHQoKSB7XG4gICAgY29uc3QgeyBpc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveH0+XG4gICAgICAgIHt0aGlzLmdldEVycm9yTWVzc2FnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvck1lc3NhZ2VzLFxuICAgICAgdmFsaWRhdG9ycyxcbiAgICAgIHJlcXVpcmVkRXJyb3IsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNoZWNrZWQsXG4gICAgICB2YWxpZGF0b3JMaXN0ZW5lcixcbiAgICAgIGNsYXNzZXMsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIHJlZj17KHIpID0+IHsgdGhpcy5pbnB1dCA9IHI7IH19XG4gICAgICAgIC8+XG4gICAgICAgIHt0aGlzLmVycm9yVGV4dCgpfVxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKENoZWNrYm94VmFsaWRhdG9yRWxlbWVudCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm9ybSwgVGV4dFZhbGlkYXRvciB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnO1xuaW1wb3J0IFNvY2lhbEF1dGggZnJvbSAnLi9Tb2NpYWxBdXRoJztcbmltcG9ydCBBdXRoRnJhbWUgZnJvbSAnLi9BdXRoRnJhbWUnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvcm0tc3R5bGUnO1xuXG5mdW5jdGlvbiBSZWdpc3Rlcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICB9KTtcbiAgLy8gTWVkaWEgcXVlcnlcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBpc0Rlc2t0b3AgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIFZhbGlkYXRvckZvcm0uYWRkVmFsaWRhdGlvblJ1bGUoJ2lzUGFzc3dvcmRNYXRjaCcsICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZXMucGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gICAgVmFsaWRhdG9yRm9ybS5hZGRWYWxpZGF0aW9uUnVsZSgnaXNUcnV0aHknLCB2YWx1ZSA9PiB2YWx1ZSk7XG4gIH0pO1xuXG4gIGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IG5hbWUgPT4gZXZlbnQgPT4ge1xuICAgIHNldFZhbHVlcyh7IC4uLnZhbHVlcywgW25hbWVdOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2sgPSBldmVudCA9PiB7XG4gICAgc2V0Q2hlY2soZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGF0YSBzdWJtaXRlZCcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhGcmFtZSB0aXRsZT17dCgnY29tbW9uOnJlZ2lzdGVyX3N1YnRpdGxlJyl9IHR5cGU9XCJyZWdpc3RlclwiIHN1YnRpdGxlPXt0KCdjb21tb246YXV0aF9kZXNjJyl9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZH0+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17aXNEZXNrdG9wID8gdGV4dC5zdWJ0aXRsZSA6IGNsc3godGV4dC50aXRsZSwgdGV4dC50ZXh0UHJpbWFyeSl9PlxuICAgICAgICAgICAge3QoJ2NvbW1vbjpsb2dpbl9jcmVhdGUnKX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNvY2lhbEF1dGggLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT57dCgnY29tbW9uOnJlZ2lzdGVyX29yJyl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFZhbGlkYXRvckZvcm1cbiAgICAgICAgICBvbkVycm9yPXtlcnJvcnMgPT4gY29uc29sZS5sb2coZXJyb3JzKX1cbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8VGV4dFZhbGlkYXRvclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOnJlZ2lzdGVyX25hbWUnKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9XG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMubmFtZX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz17WydUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ119XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxUZXh0VmFsaWRhdG9yXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246cmVnaXN0ZXJfZW1haWwnKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJywgJ2lzRW1haWwnXX1cbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLCAnRW1haWwgaXMgbm90IHZhbGlkJ119XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8VGV4dFZhbGlkYXRvclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246cmVnaXN0ZXJfcGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnXX1cbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8VGV4dFZhbGlkYXRvclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246cmVnaXN0ZXJfY29uZmlybScpfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1snaXNQYXNzd29yZE1hdGNoJywgJ3JlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz17WydQYXNzd29yZCBtaXNtYXRjaCcsICd0aGlzIGZpZWxkIGlzIHJlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnY29uZmlybVBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5BcmVhfT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgIGNvbnRyb2w9eyhcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1snaXNUcnV0aHknXX1cbiAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXM9XCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGVjayhlKX1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbGFiZWw9eyhcbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Zm9ybV90ZXJtcycpfVxuICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmZvcm1fcHJpdmFjeScpfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uTGFyZ2V9XG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNvbnRpbnVlJyl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WYWxpZGF0b3JGb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9BdXRoRnJhbWU+XG4gICk7XG59XG5cblxuUmVnaXN0ZXIucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSkoUmVnaXN0ZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb3JtLXN0eWxlJztcblxuZnVuY3Rpb24gU29jaWFsQXV0aCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnNvY21lZFNpZGVMb2dpbn0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2aUJ0bn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtZmFjZWJvb2tcIiAvPlxuICAgICAgICBGYWNlYm9va1xuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmx1ZUJ0bn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtdHdpdHRlclwiIC8+XG4gICAgICAgIFR3aXR0ZXJcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnJlZEJ0bn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1zb2NpYWwtZ29vZ2xlXCIgLz5cbiAgICAgICAgR29vZ2xlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsQXV0aDtcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgZGFya2VuIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuXG5jb25zdCBjb250YWN0U3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBwYWdlV3JhcDoge1xuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9LFxuICAgICcmIGEnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgaW5uZXJXcmFwOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDIpXG4gIH0sXG4gIGZ1bGxGb3JtV3JhcDoge1xuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNClcbiAgfSxcbiAgZm9ybUJveDoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIG1hcEZvcm06IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogMCxcbiAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAwLFxuICAgICAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgICB9LFxuICB9LFxuICBkZXNjOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDUpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgcGFkZGluZzogMFxuICAgIH1cbiAgfSxcbiAgY2hlY2tBcmVhOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgZm9ybToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNCwgOCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIsIDYpXG4gICAgfVxuICB9LFxuICBmb3JtSGVscGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMylcbiAgICB9XG4gIH0sXG4gIGxpbms6IHt9LFxuICBmbGV4OiB7fSxcbiAgYnRuQXJlYToge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2VlbignbWQnLCAnbWQnKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICcmIGJ1dHRvbic6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDAsIDQpLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9XG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAnc20nKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg2KSxcbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgICAnJiBidXR0b24nOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwLCA0KSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgc3Bhbic6IHtcbiAgICAgICcmICRsaW5rJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcbiAgICAnJiRmbGV4Jzoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ21kJywgJ21kJyldOiB7XG4gICAgICAgICcmIGJ1dHRvbic6IHtcbiAgICAgICAgICB3aWR0aDogJ2F1dG8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBidXR0b25MYXJnZToge1xuICAgIG1pbkhlaWdodDogNDgsXG4gICAgbWluV2lkdGg6IDE4MFxuICB9LFxuICByaWdodEljb246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICB0cmFuc2Zvcm06IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnc2NhbGUoLTEpJyA6ICdpbmhlcml0J1xuICB9LFxuICBjaGVjazoge1xuICAgICcmIHN2Zyc6IHtcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICB9XG4gIH0sXG4gIGF1dGhGcmFtZToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgZ3JlZXRpbmc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJyYgaDQnOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya1xuICAgIH0sXG4gICAgJyYgaDYnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyXG4gICAgfVxuICB9LFxuICBpbWc6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNSwgMCksXG4gICAgJyYgaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogNDUwXG4gICAgfVxuICB9LFxuICBoZWFkOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgJyYgaDMnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkXG4gICAgfVxuICB9LFxuICB3cmFwRGVjbzoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBmb3JtV3JhcDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg1LCAzKVxuICAgIH1cbiAgfSxcbiAgc29jbWVkU2lkZUxvZ2luOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICAnJiA+IConOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICB3aWR0aDogMTUwLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwLjUpLFxuICAgICAgICB3aWR0aDogMTIwXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAwLCAyKSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgJyYgaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpXG4gICAgfVxuICB9LFxuICBibHVlQnRuOiB7XG4gICAgYmFja2dyb3VuZDogJyMyOGFhZTEnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCcjMjhhYWUxJywgMC4yKSxcbiAgICB9XG4gIH0sXG4gIG5hdmlCdG46IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzNiNTc5ZCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyMzYjU3OWQnLCAwLjIpLFxuICAgIH1cbiAgfSxcbiAgcmVkQnRuOiB7XG4gICAgYmFja2dyb3VuZDogJyNkZDQ5M2MnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCcjZGQ0OTNjJywgMC4yKSxcbiAgICB9XG4gIH0sXG4gIHNlcGFyYXRvcjoge1xuICAgIG1hcmdpbjogJzQwcHggYXV0bycsXG4gICAgbWF4V2lkdGg6IDMwMCxcbiAgICBtaW5XaWR0aDogMjAwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgJyYgcCc6IHtcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogMTJcbiAgICAgIH1cbiAgICB9LFxuICAgICcmOmJlZm9yZSwgJjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJUb3BDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnQsXG4gICAgICB0b3A6ICc1MCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzIwJSdcbiAgICB9LFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGxlZnQ6IDBcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgcmlnaHQ6IDBcbiAgICB9XG4gIH0sXG4gIGZvcm1Db250cm9sTGFiZWw6IHtcbiAgICAnJiBhJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0b3A6IC0yMCxcbiAgICB9LFxuICAgICcmID4gZGl2Jzoge1xuICAgICAgbWFyZ2luVG9wOiAwXG4gICAgfVxuICB9LFxuICBmdWxsOiB7fSxcbiAgbWFwOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgaGVpZ2h0OiA3NDUsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBoZWlnaHQ6ICczMDBweCAhaW1wb3J0YW50JyxcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KVxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnMCAxMnB4IDEycHggMCAhaW1wb3J0YW50JyxcbiAgICB9LFxuICAgICcmJGZ1bGwnOiB7XG4gICAgICBoZWlnaHQ6IDkxNSxcbiAgICB9XG4gIH0sXG4gIGJ1YmxlOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgbGVmdDogLTI1MCxcbiAgICB0b3A6IC0zMDAsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxuICAgICcmIHAnOiB7XG4gICAgICBmb250U2l6ZTogMTMsXG4gICAgfSxcbiAgfSxcbiAgaWNvbjoge1xuICAgIGNvbG9yOiAnIzYwN0Q4QicsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIHRvcDogNCxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG4gIG5vdGlmOiB7XG4gICAgdG9wOiA5MFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0U3R5bGVzO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJztcbmltcG9ydCBsaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9Ub3BOYXYvU2V0dGluZ3MnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2hlYWRlci1zdHlsZSc7XG5cbmZ1bmN0aW9uIEJhc2ljKHByb3BzKSB7XG4gIGNvbnN0IFtmaXhlZCwgc2V0Rml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIC8vIE1lZGlhIFFVZXJ5XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgaXNEZXNrdG9wID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKSk7XG5cbiAgY29uc3Qge1xuICAgIG9uVG9nZ2xlRGFyayxcbiAgICBvblRvZ2dsZURpcixcbiAgICB0ZXh0LFxuICAgIGhyZWYsXG4gICAgaG9tZVxuICB9ID0gcHJvcHM7XG4gIGxldCBmbGFnRml4ZWQgPSBmYWxzZTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGNvbnN0IHNjcm9sbCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jLnNjcm9sbFRvcCkgLSAoZG9jLmNsaWVudFRvcCB8fCAwKTtcbiAgICBjb25zdCBuZXdGbGFnRml4ZWQgPSAoc2Nyb2xsID4gODApO1xuICAgIGlmIChmbGFnRml4ZWQgIT09IG5ld0ZsYWdGaXhlZCkge1xuICAgICAgc2V0Rml4ZWQobmV3RmxhZ0ZpeGVkKTtcbiAgICAgIGZsYWdGaXhlZCA9IG5ld0ZsYWdGaXhlZDtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEFwcEJhclxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgaWQ9XCJoZWFkZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgY2xhc3Nlcy5oZWFkZXIsXG4gICAgICAgICAgZml4ZWQgJiYgY2xhc3Nlcy5maXhlZCxcbiAgICAgICAgICBob21lICYmIGNsYXNzZXMubWFya2V0XG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgZml4ZWQ9e2lzRGVza3RvcH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyQ29udGVudH0+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm5hdk1lbnUsIGNsYXNzZXMuZmxleCl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvfT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtsaW5rLmNyeXB0by5ob21lfT5cbiAgICAgICAgICAgICAgICAgIDxMb2dvIHR5cGU9XCJsYW5kc2NhcGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJNZW51fT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBocmVmPXtocmVmfSBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj57dGV4dH08L0J1dHRvbj5cbiAgICAgICAgICAgICAgeyBpc0Rlc2t0b3AgJiYgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnZEaXZpZGVyfSAvPiB9XG4gICAgICAgICAgICAgIDxTZXR0aW5ncyB0b2dnbGVEYXJrPXtvblRvZ2dsZURhcmt9IHRvZ2dsZURpcj17b25Ub2dnbGVEaXJ9IC8+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5CYXNpYy5wcm9wVHlwZXMgPSB7XG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhvbWU6IFByb3BUeXBlcy5ib29sLFxuICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5CYXNpYy5kZWZhdWx0UHJvcHMgPSB7XG4gIGhvbWU6IGZhbHNlLFxuICBocmVmOiAnLycsXG4gIHRleHQ6ICdsb2dpbidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2ljO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2V0dGluZ3MnO1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2hlY2snO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuLi9oZWFkZXItc3R5bGUnO1xuaW1wb3J0IHsgaTE4biwgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcblxubGV0IHRoZW1lVHlwZSA9ICdsaWdodCc7XG5pZiAodHlwZW9mIFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gIHRoZW1lVHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvaXJvblRoZW1lJykgfHwgJ2xpZ2h0Jztcbn1cblxuZnVuY3Rpb24gU2V0dGluZ3MocHJvcHMpIHtcbiAgY29uc3QgW2N0biwgc2V0Q3RuXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0RhcmssIHNldERhcmtdID0gdXNlU3RhdGUodGhlbWVUeXBlID09PSAnZGFyaycpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZSgpIHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU1vZGUgPSAoKSA9PiB7XG4gICAgc2V0RGFyayghaXNEYXJrKTtcbiAgICBwcm9wcy50b2dnbGVEYXJrKCk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlTGFuZyhsYW5nKSB7XG4gICAgaWYgKGxhbmcgPT09ICdhcmEnKSB7XG4gICAgICBpMThuLmNoYW5nZUxhbmd1YWdlKCdhcmEnKTtcbiAgICAgIHByb3BzLnRvZ2dsZURpcigncnRsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGkxOG4uY2hhbmdlTGFuZ3VhZ2UobGFuZyk7XG4gICAgICBwcm9wcy50b2dnbGVEaXIoJ2x0cicpO1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3RuKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLXdyYXAnKSk7XG4gIH0pO1xuXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaWQgPSBvcGVuID8gJ3NpbXBsZS1wb3BvdmVyJyA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZXR0aW5nfT5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2lkfVxuICAgICAgICBhcmlhLWxhYmVsPVwiU2V0dGluZ3NcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuaWNvbiwgb3BlbiA/IGNsYXNzZXMuYWN0aXZlIDogJycpfVxuICAgICAgPlxuICAgICAgICA8U2V0dGluZ3NJY29uIGZvbnRTaXplPVwiaW5oZXJpdFwiIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8UG9wb3ZlclxuICAgICAgICBpZD17aWR9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGNvbnRhaW5lcj17Y3RufVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcGFwZXI6IGNsYXNzZXMuc2V0dGluZ01lbnVcbiAgICAgICAgfX1cbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxMaXN0XG4gICAgICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubW9kZU1lbnV9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cIk1vZGUtbWVudVwiXG4gICAgICAgICAgc3ViaGVhZGVyPXsoXG4gICAgICAgICAgICA8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgVGhlbWUgTW9kZVxuICAgICAgICAgICAgPC9MaXN0U3ViaGVhZGVyPlxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgPEdyaWQgY29tcG9uZW50PVwibGFiZWxcIiBjb250YWluZXIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+TGlnaHQ8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNEYXJrfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTW9kZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lzRGFya31cbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17eyAnYXJpYS1sYWJlbCc6ICdjaGVja2JveCcgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0+RGFyazwvR3JpZD5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDwvTGlzdD5cbiAgICAgICAgPERpdmlkZXIgLz5cbiAgICAgICAgPExpc3RcbiAgICAgICAgICBjb21wb25lbnQ9XCJuYXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sYW5nTWVudX1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiTGFuZ3VhZ2UtbWVudVwiXG4gICAgICAgICAgc3ViaGVhZGVyPXsoXG4gICAgICAgICAgICA8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIj5cbiAgICAgICAgICAgICAgTGFuZ3VhZ2VzXG4gICAgICAgICAgICA8L0xpc3RTdWJoZWFkZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpMThuLm9wdGlvbnMuYWxsTGFuZ3VhZ2VzICYmIGkxOG4ub3B0aW9ucy5hbGxMYW5ndWFnZXMubWFwKHZhbCA9PiAoXG4gICAgICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICAgICAga2V5PXt2YWx9XG4gICAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZUxhbmcodmFsKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3ZhbH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17cHJvcHMudCgnY29tbW9uOicgKyB2YWwpfSAvPlxuICAgICAgICAgICAgICB7aTE4bi5sYW5ndWFnZSA9PT0gdmFsICYmIChcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uIGNvbG9yPVwicHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvUG9wb3Zlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU2V0dGluZ3MucHJvcFR5cGVzID0ge1xuICB0b2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSkoU2V0dGluZ3MpO1xuIiwiY29uc3Qgc2luZ2xlID0gWydhYm91dCcsICdmZWF0dXJlJywgJ2JlbmVmaXQnLCAndGVzdGltb25pYWxzJ107XG5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZTtcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGZsYWcgZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2ZsYWctbG9nby5wbmcnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcblxuY29uc3QgZmxhZ0ljb24gPSB7XG4gIHdpZHRoOiAxNixcbiAgaGVpZ2h0OiAxNixcbiAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICBtYXJnaW5SaWdodDogNSxcbiAgdG9wOiAxLFxuICBiYWNrZ3JvdW5kOiBgdXJsKCR7ZmxhZ30pIG5vLXJlcGVhdCB0cmFuc3BhcmVudGAsXG4gIGJhY2tncm91bmRTaXplOiAnMTZweCBhdXRvJyxcbiAgJyZbY2xhc3M9XCJhcmFcIl0nOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMCAzcHgnXG4gIH0sXG4gICcmW2NsYXNzPVwiemhvXCJdJzoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTEycHgnXG4gIH0sXG4gICcmW2NsYXNzPVwiZW5nXCJdJzoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTI4cHgnXG4gIH0sXG4gICcmW2NsYXNzPVwiZGV1XCJdJzoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTQ0cHgnXG4gIH0sXG4gICcmW2NsYXNzPVwiaW5kXCJdJzoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTYycHgnXG4gIH0sXG4gICcmW2NsYXNzPVwicHJ0XCJdJzoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgLTc5cHgnXG4gIH0sXG59O1xuXG5jb25zdCBoZWFkZXJTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGZpeGVkOiB7fSxcbiAgb3BlbkRyYXdlcjoge30sXG4gIG1hcmtldDoge30sXG4gIGhlYWRlcjoge1xuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgJyYkZml4ZWQnOiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gYDBweCAxcHggMzZweCAtMTZweCAke3RoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrfWAgOiBgMHB4IDFweCAzNnB4IC0xNnB4ICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59YCxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICAnJiAkbG9nbyc6IHtcbiAgICAgICAgJyYgaW1nJzoge1xuICAgICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiBuYXYnOiB7XG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMCksXG4gICAgICB9LFxuICAgICAgJyYgJHZEaXZpZGVyJzoge1xuICAgICAgICBtaW5IZWlnaHQ6IHRoZW1lLnNwYWNpbmcoMylcbiAgICAgIH1cbiAgICB9LFxuICAgICcmJG1hcmtldCc6IHtcbiAgICAgICcmOm5vdCgkZml4ZWQpJzoge1xuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XG4gICAgICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgICcmJG9wZW5EcmF3ZXInOiB7XG4gICAgICB6SW5kZXg6IDE2MDAsXG4gICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICB9XG4gIH0sXG4gIG5vU2hhZG93OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIGJveFNoYWRvdzogJ25vbmUgIWltcG9ydGFudCcsXG4gIH0sXG4gIGhlYWRlckNvbnRlbnQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAnJiBuYXYnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMSksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLCAwKSxcbiAgICAgIH0sXG4gICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICB9XG4gIH0sXG4gIHNldHRpbmdNZW51OiB7XG4gICAgd2lkdGg6IDI0MFxuICB9LFxuICBsb2dvOiB7XG4gICAgJyYgYSc6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICAnJiBpbWcnOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZScsXG4gICAgfVxuICB9LFxuICBhY3RpdmU6IHt9LFxuICBuYXZNZW51OiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xuICAgICAgJyYgPiAqJzoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSksXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyYgdWwgbGknOiB7XG4gICAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gICAgfVxuICB9LFxuICBzY3JvbGxBY3RpdmVOYXY6IHtcbiAgICAnJiBidXR0b24sICYgYSc6IHtcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICB9XG4gIH0sXG4gIG11bHRpTWVudToge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSxcbiAgbWFpbk1lbnU6IHtcbiAgICAnJiA+IHVsOm5vdCgkbXVsdGlNZW51KSc6IHtcbiAgICAgICcmIGxpJzoge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuICAgICcmID4gdWwnOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgICcmID4gbGknOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLW91dCcsXG4gICAgICAgICcmID4gYnV0dG9uLCAmID4gYSc6IHtcbiAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgdHJhbnNwYXJlbnQnXG4gICAgICAgIH0sXG4gICAgICAgICcmOmhvdmVyOm5vdCguYWN0aXZlKSc6IHtcbiAgICAgICAgICAnJiA+IGJ1dHRvbiwgJiA+IGEnOiB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCAwLjA4KVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyZbY2xhc3M9XCJhY3RpdmVcIl0nOiB7XG4gICAgICAgICAgJyYgYnV0dG9uLCAmIGEnOiB7XG4gICAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJyYgYnV0dG9uLCAmIGEnOiB7XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgMS41KSxcbiAgICAgICAgICBsaW5lSGVpZ2h0OiAnaW5pdGlhbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgdXNlck1lbnU6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgJyYgPiBkaXYgPiBhJzoge1xuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxuICAgIH1cbiAgfSxcbiAgbGFuZ01lbnU6IHtcbiAgICAnJiBpJzoge1xuICAgICAgLi4uZmxhZ0ljb25cbiAgICB9XG4gIH0sXG4gIG1vYmlsZU1lbnU6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBwYWRkaW5nOiAwLFxuICAgICcmICRiYXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAnJjphZnRlciwgJjpiZWZvcmUnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIHZEaXZpZGVyOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDEsIDAsIDIpLFxuICAgIGJvcmRlckxlZnQ6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6IHRoZW1lLnNwYWNpbmcoNilcbiAgfSxcbiAgaWNvbjoge30sXG4gIHNldHRpbmc6IHtcbiAgICAnJiAkaWNvbic6IHtcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJ1xuICAgIH0sXG4gICAgJyYgJGFjdGl2ZSc6IHtcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgzMGRlZyknXG4gICAgfVxuICB9LFxuICBiYXI6IHt9LFxuICBtZW51OiB7fSxcbiAgbWVnYU1lbnVSb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB6SW5kZXg6IDEwMCxcbiAgICBsZWZ0OiAnLTVweCAhaW1wb3J0YW50J1xuICB9LFxuICBtdWx0aU1lbnVSb290OiB7XG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICB6SW5kZXg6IDEwMCxcbiAgICAnJiB1bCc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgICAnJiBsaSc6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yb3VuZGVkLnNtYWxsLFxuICAgICAgICBtaW5IZWlnaHQ6IDQ4LFxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgICAgICAnJiBzdmcnOiB7XG4gICAgICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS50ZXh0LmhpbnQsXG4gICAgICAgICAgdHJhbnNmb3JtOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3NjYWxlKC0xKScgOiAnaW5oZXJpdCcsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1lZ2FNZW51OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0LCAwKSxcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgbWF4SGVpZ2h0OiA0ODAsXG4gICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAnJiBhJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiA0XG4gICAgfVxuICB9LFxuICB0aHVtYk1lbnU6IHtcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogNzgsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yb3VuZGVkLnNtYWxsLFxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAxLCAyKVxuICB9LFxuICB0aXRsZU1lZ2E6IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkICsgJyFpbXBvcnRhbnQnLFxuICAgIGZvbnRTaXplOiAnMTFweCAhaW1wb3J0YW50J1xuICB9LFxuICBtZW51SXRlbToge1xuICAgIGJvcmRlclJhZGl1czogdGhlbWUucm91bmRlZC5zbWFsbFxuICB9LFxuICBsaW5rOiB7XG4gICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCAhaW1wb3J0YW50J1xuICAgIH1cbiAgfSxcbiAgY3VycmVudDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gIH0sXG4gIC8qIFNlYXJjaCAqL1xuICBzaG9ydDoge30sXG4gIGlucHV0OiB7fSxcbiAgZmxleDoge1xuICAgIGZsZXg6IDFcbiAgfSxcbiAgc2VhcmNoOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1heFdpZHRoOiA2MDAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMilcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIGZsZXg6IDFcbiAgICB9LFxuICAgICcmIGZvcm0nOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAnJiRzaG9ydCc6IHtcbiAgICAgIHdpZHRoOiAzMDBcbiAgICB9LFxuICAgICcmICRpbnB1dCc6IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZyg1KSxcbiAgICAgIGJvcmRlclJhZGl1czogdGhlbWUucm91bmRlZC5zbWFsbCxcbiAgICAgICcmIGlucHV0Jzoge1xuICAgICAgICBtYXhIZWlnaHQ6ICdub25lJyxcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxLjUsIDApXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICcmIGZpZWxkc2V0Jzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZWFyY2hJY29uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAxMCxcbiAgICBsZWZ0OiB0aGVtZS5zcGFjaW5nKDEpXG4gIH0sXG4gIC8qIEhhbWJ1cmdlciAqL1xuICBpbnZlcnQ6IHt9LFxuICBuYXZMb2dvOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAnJiRpbnZlcnQnOiB7XG4gICAgICAnJiAkbG9nbyc6IHtcbiAgICAgICAgJyYgYSc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiAkbW9iaWxlTWVudSc6IHtcbiAgICAgICAgJyYgJGJhcic6IHtcbiAgICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgICAgICAgICcmOmFmdGVyLCAmOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIHBhcGVyTmF2OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIGJhY2tkcm9wRmlsdGVyOiAnc2F0dXJhdGUoMTgwJSkgYmx1cigyMHB4KScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB6SW5kZXg6IDUwLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBtb2JpbGVOYXY6IHtcbiAgICAnJiAkbWVudSc6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgdG9wOiB0aGVtZS5zcGFjaW5nKDE1KSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSAtIDgwcHgpJyxcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgJyYgbGknOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gICAgICAgICcmIGEnOiB7XG4gICAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSwgNCksXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5yb3VuZGVkLnNtYWxsLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgIGhlaWdodDogJzc1JScsXG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycyBjdWJpYy1iZXppZXIoMCwgMCwgMC4xNCwgMC45NyknXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1lbnVMaXN0OiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW1cbiAgfVxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXJTdHlsZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGxvZ28gZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL2xvZ28tY3J5cHRvLnN2Zyc7XG5pbXBvcnQgYnJhbmQgZnJvbSAnfi9wdWJsaWMvdGV4dC9icmFuZCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vbG9nby1zdHlsZSc7XG5cbmZ1bmN0aW9uIExvZ28ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB7IHR5cGUsIHNpemUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzW3R5cGVdLCBjbGFzc2VzLmxvZ28sIGNsYXNzZXNbc2l6ZV0pfT5cbiAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgIHsgdHlwZSAhPT0gJ29ubHknID8gYnJhbmQuY3J5cHRvLm5hbWUgOiAnJyB9XG4gICAgPC9zcGFuPlxuICApO1xufVxuXG5Mb2dvLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5Mb2dvLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogJ21lZGl1bSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ287XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Mb2dvJztcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGxvZ286IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gIH0sXG4gIGxhbmRzY2FwZToge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogLTIsXG4gICAgJyYgaW1nJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSlcbiAgICB9XG4gIH0sXG4gIHBvcnRyYWl0OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBtYXJnaW46ICcwIGF1dG8gOHB4JyxcbiAgICAnJiBpbWcnOiB7XG4gICAgICBtYXJnaW46IGAwIGF1dG8gJHt0aGVtZS5zcGFjaW5nKDEpfWAsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfVxuICB9LFxuICBzbWFsbDoge1xuICAgIGZvbnRTaXplOiAxNixcbiAgICAnJiBpbWcnOiB7XG4gICAgICBtYXhXaWR0aDogMzQsXG4gICAgICBoZWlnaHQ6IDM0XG4gICAgfVxuICB9LFxuICBtZWRpdW06IHtcbiAgICBmb250U2l6ZTogMTgsXG4gICAgJyYgaW1nJzoge1xuICAgICAgbWF4V2lkdGg6IDU0LFxuICAgICAgaGVpZ2h0OiA1NCxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBtYXhXaWR0aDogMzQsXG4gICAgICAgIGhlaWdodDogMzRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGxhcmdlOiB7XG4gICAgZm9udFNpemU6IDI4LFxuICAgICcmIGltZyc6IHtcbiAgICAgIG1heFdpZHRoOiA1NCxcbiAgICAgIGhlaWdodDogNTRcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlU3R5bGVzO1xuIiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XG4gIGRlZmF1bHRMYW5ndWFnZTogJ2VuZycsXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2FyYScsICdpbmQnLCAncHJ0JywgJ2RldScsICd6aG8nLCAndm4nXSxcbiAgZmFsbGJhY2tMbmc6ICdlbmcnLFxuICBpbml0SW1tZWRpYXRlOiBmYWxzZSxcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcbiAgcmVhY3Q6IHtcbiAgICB1c2VTdXNwZW5zZTogZmFsc2UsXG4gIH0sXG4gIGxvY2FsZVN1YnBhdGhzOiB7XG4gICAgZW5nOiAnZW4nLFxuICAgIGFyYTogJ2FyJyxcbiAgICBwcnQ6ICdwdCcsXG4gICAgaW5kOiAnaWQnLFxuICAgIGRldTogJ2RlJyxcbiAgICB6aG86ICd6aCcsXG4gICAgdm46ICd2bicsXG4gIH0sXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcbmltcG9ydCB7IHVzZVNwYWNpbmcgfSBmcm9tICcuLi90aGVtZS9jb21tb24nO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlci9CYXNpYyc7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3Jtcy9SZWdpc3Rlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCBGb290ZXJFeHRlbmQgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyRXh0ZW5kJztcbmltcG9ydCBicmFuZCBmcm9tICcuLi9wdWJsaWMvdGV4dC9icmFuZCc7XG5pbXBvcnQgbGluayBmcm9tICcuLi9wdWJsaWMvdGV4dC9saW5rJztcblxuZnVuY3Rpb24gUmVnaXN0ZXJQYWdlKHByb3BzKSB7XG4gIC8vIFRoZW1lIGJyZWFrcG9pbnRzXG5cbiAgIC8vIFRyYW5zbGF0aW9uIEZ1bmN0aW9uXG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NlcyA9IHVzZVNwYWNpbmcoKTtcblxuICBjb25zdCB7IG9uVG9nZ2xlRGFyaywgb25Ub2dnbGVEaXIgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgeyBicmFuZC5jcnlwdG8ubmFtZSB9XG4gICAgICAgICAgJm5ic3A7IC0gUmVnaXN0ZXJcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWFpbldyYXB9PlxuICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgdGV4dD17dCgnY29tbW9uOmhlYWRlcl9sb2dpbicpfVxuICAgICAgICAgIGhyZWY9e2xpbmsuY3J5cHRvLmxvZ2lufVxuICAgICAgICAgIG9uVG9nZ2xlRGFyaz17b25Ub2dnbGVEYXJrfVxuICAgICAgICAgIG9uVG9nZ2xlRGlyPXtvblRvZ2dsZURpcn1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5jb250YWluZXJHZW5lcmFsLCBjbGFzc2VzLmNvbnRhaW5lckZyb250KX0+XG4gICAgICAgICAgICA8UmVnaXN0ZXIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDxGb290ZXJFeHRlbmQ+XG4gICAgICAgICAgPEZvb3RlciB0b2dnbGVEaXI9e29uVG9nZ2xlRGlyfSAvPlxuICAgICAgICA8L0Zvb3RlckV4dGVuZD5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cblJlZ2lzdGVyUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJ10sXG59KTtcblxuUmVnaXN0ZXJQYWdlLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVEYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblRvZ2dsZURpcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pKFJlZ2lzdGVyUGFnZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmxhZy1sb2dvLWI2YzBhM2I1MmRhZTJiZjk4ZjE5OWRjNjAyMmRjNjg5LnBuZ1wiOyIsImNvbnN0IGltZzNkID0ge1xuICBtYWluOiBbXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2Fib3V0XzNkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2JhY2tncm91bmRfM2RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vYmFubmVyMV8zZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9iYW5uZXIyXzNkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2Jhbm5lcjNfM2RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vZmVhdHVyZTNfM2RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vZXJyb3JfM2RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vZmFxXzNkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2ZlYXR1cmUxXzNkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2ZlYXR1cmUyXzNkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJycsXG4gICAgJycsXG4gICAgJycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2xvZ2luXzNkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL3JlZ2lzdGVyXzNkQDJ4LnBuZydcbiAgXSxcbiAgaW5uZXI6IFtcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vYWJvdXRfM0RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbG9naW5fM0RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vcmVnaXN0ZXJfM0RAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vZmFxXzNEQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2Vycm9yXzNEQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL3RlYW1fM0RAMngucG5nJ1xuICBdXG59O1xuXG5jb25zdCBpbWcyZCA9IHtcbiAgbWFpbjogW1xuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9hYm91dF8yZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9iYWNrZ3JvdW5kXzJkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2Jhbm5lcjFfMmRAMngucG5nJyxcbiAgICAnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vYmFubmVyMl8yZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9iYW5uZXIzXzJkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2ZlYXR1cmUzXzJkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2Vycm9yXzJkQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2ZhcV8yZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9mZWF0dXJlMV8yZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9mZWF0dXJlMl8yZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcnLFxuICAgICcnLFxuICAgICcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9sb2dpbl8yZEAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9yZWdpc3Rlcl8yZEAyeC5wbmcnXG4gIF0sXG4gIGlubmVyOiBbXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2Fib3V0XzJEQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2xvZ2luXzJEQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL3JlZ2lzdGVyXzJEQDJ4LnBuZycsXG4gICAgJycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL2ZhcV8yREAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9lcnJvcl8yREAyeC5wbmcnLFxuICAgICcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by90ZWFtXzJEQDJ4LnBuZydcbiAgXVxufTtcblxuY29uc3QgaW1nQVBJID0ge1xuICBhdmF0YXI6IFtcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmwyLnN2ZycsXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsMy5zdmcnLFxuICAgICcvaW1hZ2VzL2F2YXRhcnMvcHBfZ2lybDQuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2dpcmw1LnN2ZycsXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9naXJsLnN2ZycsXG4gICAgJy9pbWFnZXMvYXZhdGFycy9wcF9ib3kuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTIuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTMuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTQuc3ZnJyxcbiAgICAnL2ltYWdlcy9hdmF0YXJzL3BwX2JveTUuc3ZnJ1xuICBdLFxuICBwaG90bzogW1xuICAgIC8vIDFcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvMjE5NkYzL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC8zRjUxQjUvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzAwQkNENC9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvMDA5Njg4L0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC8wMTU3OUIvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzAwOTdBNy9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvNDNBMDQ3L0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC81NThCMkYvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzFERTlCNi83Njc2NzYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvMDBFNUZGLzc2NzY3Ni8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9DNkZGMDAvNzY3Njc2LycsXG4gICAgLy8gMlxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9ENEUxNTcvNzY3Njc2LycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0Y4QkJEMC83Njc2NzYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRkZDQTI4Lzc2NzY3Ni8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9DRkQ4REMvNzY3Njc2LycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzY3M0FCNy9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRUY1MzUwL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC8xRTg4RTUvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzNENUFGRS9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRUY2QzAwL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC83OTU1NDgvRkZGRkZGLycsXG4gICAgLy8gM1xuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9GRkU1N0YvNzY3Njc2LycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0RDRURDOC83Njc2NzYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRTFCRUU3Lzc2NzY3Ni8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9CQkRFRkIvNzY3Njc2LycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzM4OEUzQy9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvNjUxRkZGL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC83NTc1NzUvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0U5MUU2My9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvNjA3RDhCL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9BQTAwRkYvRkZGRkZGLycsXG4gICAgLy8gNFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC84Mjc3MTcvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0U2NEExOS9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvQzIxODVCL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9BQTAwRkYvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzE5NzZEMi9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRDFDNEU5Lzc2NzY3Ni8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC84MUQ0RkEvNzY3Njc2LycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0UwRjJGMS83Njc2NzYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRTZFRTlDLzc2NzY3Ni8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9GRkVCM0IvNzY3Njc2LycsXG4gICAgLy8gNVxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9FMDQwRkIvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0M2MjgyOC9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvQUQxNDU3L0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC82NzNBQjcvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwLzY1MUZGRi9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvMDBCRkE1L0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC9BNUQ2QTcvNzY3Njc2LycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwNTB4NzAwL0FFRDU4MS83Njc2NzYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTA1MHg3MDAvRkZCNzRELzc2NzY3Ni8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDUweDcwMC8wMEJGQTUvNzY3Njc2LycsXG4gICAgLy8gNlxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4MTAwL0M2RkYwMC9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAweDEwMC9GNDQzMzYvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMHgxMDAvNjczQUI3L0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4MTAwLzAzQTlGNC9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAweDEwMC80Q0FGNTAvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMHgxMDAvRkY1NzIyL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4MTAwLzYwN0Q4Qi9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTAweDEwMC83OTU1NDgvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzEwMHgxMDAvOEJDMzRBL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xMDB4MTAwLzAwQkNENC9GRkZGRkYvJyxcbiAgXSxcbiAgdWk6IFtcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9wb3NAMnguanBnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9lZHVjYXRpb25AMnguanBnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9zYWFzMkAyeC5qcGcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9tZW51X21hcmtldGluZ0AyeC5qcGcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by90ZWFtXzJEQDJ4LnBuZycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL3RlYW1fM0RAMngucG5nJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9hZ2VuY3lAMnguanBnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9jbG91ZEAyeC5qcGcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9tZW51X2NyeXB0b0AyeC5qcGcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9tZW51X2VkdWNhdGlvbkAyeC5qcGcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9tZW51X2ZpbmFuY2VAMnguanBnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9tYXJrZXRpbmdAMnguanBnJyxcbiAgICAnL2ltYWdlcy9jcnlwdG8vbWVudV9tZWRpY2FsQDJ4LmpwZycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL21lbnVfcG9zQDJ4LmpwZycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL21lbnVfc2Fhc0AyeC5qcGcnLFxuICAgICcvaW1hZ2VzL2NyeXB0by9tZW51X3NhYXMyQDJ4LmpwZycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL21lbnVfc29jaWFsQDJ4LmpwZycsXG4gICAgJy9pbWFnZXMvY3J5cHRvL21lbnVfb3RoZXJAMnguanBnJ1xuICBdLFxuICBjcnlwdG86IFtcbiAgICAuLi5pbWczZC5tYWluLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS83Njd4NjY0LzY3M0FCNy9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vNzY3eDY2NC9GRkI3NEQvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzc2N3g2NjQvNjczQUI3L0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS83Njd4NjY0L0ZGQjc0RC9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vNzY3eDY2NC82NzNBQjcvRkZGRkZGLycsXG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzc2N3g2NjQvRkZCNzREL0ZGRkZGRi8nLFxuICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82MDB4MzQxL0UxQkVFNy9GRkZGRkYvJyxcbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMzQ4eDY4NC9GRjU3MjIvRkZGRkZGLydcbiAgXSxcbiAgY3J5cHRvSW5uZXI6IFtcbiAgICAuLi5pbWczZC5pbm5lclxuICBdXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbWdBUEk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lJSE4wWVc1a1lXeHZibVU5SW01dklqOCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2QybGtkR2c5SWpFd01DVWlJR2hsYVdkb2REMGlNVEF3SlNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFE1TUNBME5UTWlJSFpsY25OcGIyNDlJakV1TVNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJZ2VHMXNibk02YzJWeWFXWTlJbWgwZEhBNkx5OTNkM2N1YzJWeWFXWXVZMjl0THlJZ2MzUjViR1U5SW1acGJHd3RjblZzWlRwbGRtVnViMlJrTzJOc2FYQXRjblZzWlRwbGRtVnViMlJrTzNOMGNtOXJaUzFzYVc1bGFtOXBianB5YjNWdVpEdHpkSEp2YTJVdGJXbDBaWEpzYVcxcGREb3lPeUkrQ2lBZ0lDQThaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d4TERBc01Dd3hMQzB4TXk0eU5UZ3lMQzB4TXpZMkxqZ3lLU0krQ2lBZ0lDQWdJQ0FnUEdjZ2RISmhibk5tYjNKdFBTSnRZWFJ5YVhnb01Td3dMREFzTVN3eUxqSTFPREl6TERFek16UXVNVElwSWo0S0lDQWdJQ0FnSUNBZ0lDQWdQR2NnZEhKaGJuTm1iM0p0UFNKdFlYUnlhWGdvTVN3d0xEQXNMVEVzTlM0Mk9EUXpOR1V0TVRRc05EWTFMakV6S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOFp5QjBjbUZ1YzJadmNtMDlJbTFoZEhKcGVDZ3dMakU1TlRBNE15d3ROaTQxTnpRMU1tVXRNVGdzTmk0MU56UTFNbVV0TVRnc01DNHhPVFV3T0RNc01UazNMamswTWl3eU1URXVPVEU1S1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQR05wY21Oc1pTQmplRDBpTWprM0xqWXdPQ0lnWTNrOUlqSTFOUzQ1TVRRaUlISTlJakV3Tnk0d05EY2lJSE4wZVd4bFBTSm1hV3hzT25KbllpZ3hNRE1zTlRnc01UZ3pLVHNpTHo0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR3dlp6NEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeG5JSFJ5WVc1elptOXliVDBpYldGMGNtbDRLQzB3TGpjMU1UQTFNaXd3TERBc01DNDNOVEV3TlRJc05EYzVMalV4T1N3dE1UTXhMalU1TkNraVBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHh3WVhSb0lHUTlJazB5T1RjdU5qQTRMREUwT0M0NE5qZERNelUyTGpZNE9Td3hORGd1T0RZM0lEUXdOQzQyTlRVc01UazJMamd6TXlBME1EUXVOalUxTERJMU5TNDVNVFJETkRBMExqWTFOU3d6TVRRdU9UazFJRE14TVM0eE5pdzBOVE11TmpZeUlESTVOeTQyTURnc05EVXpMalkyTWtNeU9EUXVNRFUxTERRMU15NDJOaklnTVRrd0xqVTJNU3d6TVRRdU9UazFJREU1TUM0MU5qRXNNalUxTGpreE5FTXhPVEF1TlRZeExERTVOaTQ0TXpNZ01qTTRMalV5Tnl3eE5EZ3VPRFkzSURJNU55NDJNRGdzTVRRNExqZzJOMW9pSUhOMGVXeGxQU0ptYVd4c09uSm5ZaWd4TlRZc016a3NNVGMyS1RzaUx6NEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhuSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0RBdU1qYzNNakV6TERBdU5EZ3dNVFE0TEMwd0xqUTRNREUwT0N3d0xqSTNOekl4TXl3ME5URXVNRFUzTEMwek5DNDJNRFEzS1NJK0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEk1Tnk0Mk1EZ3NNVFE0TGpnMk4wTXpOVFl1TmpnNUxERTBPQzQ0TmpjZ05EQTBMalkxTlN3eE9UWXVPRE16SURRd05DNDJOVFVzTWpVMUxqa3hORU0wTURRdU5qVTFMRE14TkM0NU9UVWdNekV4TGpFMkxEUTFNeTQyTmpJZ01qazNMall3T0N3ME5UTXVOall5UXpJNE5DNHdOVFVzTkRVekxqWTJNaUF4T1RBdU5UWXhMRE14TkM0NU9UVWdNVGt3TGpVMk1Td3lOVFV1T1RFMFF6RTVNQzQxTmpFc01UazJMamd6TXlBeU16Z3VOVEkzTERFME9DNDROamNnTWprM0xqWXdPQ3d4TkRndU9EWTNXaUlnYzNSNWJHVTlJbVpwYkd3NmNtZGlLREkxTlN3eU1qUXNNVGM0S1RzaUx6NEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHhuSUhSeVlXNXpabTl5YlQwaWJXRjBjbWw0S0Mwd0xqTTNOekkxT0N3eUxqUTVNemN5WlMweE5pd3RNaTQwT1RNM01tVXRNVFlzTFRBdU16YzNNalU0TERNMk9DNHlOelVzTkRnNExqVTVOU2tpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHlPVGN1TmpBNExERTBPQzQ0TmpkRE16VTJMalk0T1N3eE5EZ3VPRFkzSURRd05DNDJOVFVzTVRrMkxqZ3pNeUEwTURRdU5qVTFMREkxTlM0NU1UUkROREEwTGpZMU5Td3pNVFF1T1RrMUlETXhNUzR4Tml3ME5UTXVOall5SURJNU55NDJNRGdzTkRVekxqWTJNa015T0RRdU1EVTFMRFExTXk0Mk5qSWdNVGt3TGpVMk1Td3pNVFF1T1RrMUlERTVNQzQxTmpFc01qVTFMamt4TkVNeE9UQXVOVFl4TERFNU5pNDRNek1nTWpNNExqVXlOeXd4TkRndU9EWTNJREk1Tnk0Mk1EZ3NNVFE0TGpnMk4xb2lJSE4wZVd4bFBTSm1hV3hzT25KbllpZ3lNalVzTVRrd0xESXpNU2s3SWk4K0NpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBOEwyYytDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThaeUIwY21GdWMyWnZjbTA5SW0xaGRISnBlQ2d0TUM0eU56Y3lNVE1zTUM0ME9EQXhORGdzTUM0ME9EQXhORGdzTUM0eU56Y3lNVE1zTmpFdU1qSTBOQ3d0TXpRdU5qQTBOeWtpUGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdROUlrMHlPVGN1TmpBNExERTBPQzQ0TmpkRE16VTJMalk0T1N3eE5EZ3VPRFkzSURRd05DNDJOVFVzTVRrMkxqZ3pNeUEwTURRdU5qVTFMREkxTlM0NU1UUkROREEwTGpZMU5Td3pNVFF1T1RrMUlETXhNUzR4Tml3ME5UTXVOall5SURJNU55NDJNRGdzTkRVekxqWTJNa015T0RRdU1EVTFMRFExTXk0Mk5qSWdNVGt3TGpVMk1Td3pNVFF1T1RrMUlERTVNQzQxTmpFc01qVTFMamt4TkVNeE9UQXVOVFl4TERFNU5pNDRNek1nTWpNNExqVXlOeXd4TkRndU9EWTNJREk1Tnk0Mk1EZ3NNVFE0TGpnMk4xb2lJSE4wZVd4bFBTSm1hV3hzT25KbllpZ3lOVFVzTVRVeUxEQXBPeUl2UGdvZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnUEM5blBnb2dJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1BHY2dkSEpoYm5ObWIzSnRQU0p0WVhSeWFYZ29MVEF1TXpjMU5USTJMQzB3TGpZMU1EUXpMREF1TmpVd05ETXNMVEF1TXpjMU5USTJMRE0yTGpjd05ETXNOak15TGpFeE5Ta2lQZ29nSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR1E5SWsweU9UY3VOakE0TERFME9DNDROamRETXpVMkxqWTRPU3d4TkRndU9EWTNJRFF3TkM0Mk5UVXNNVGsyTGpnek15QTBNRFF1TmpVMUxESTFOUzQ1TVRSRE5EQTBMalkxTlN3ek1UUXVPVGsxSURNeE1TNHhOaXcwTlRNdU5qWXlJREk1Tnk0Mk1EZ3NORFV6TGpZMk1rTXlPRFF1TURVMUxEUTFNeTQyTmpJZ01Ua3dMalUyTVN3ek1UUXVPVGsxSURFNU1DNDFOakVzTWpVMUxqa3hORU14T1RBdU5UWXhMREU1Tmk0NE16TWdNak00TGpVeU55d3hORGd1T0RZM0lESTVOeTQyTURnc01UUTRMamcyTjFvaUlITjBlV3hsUFNKbWFXeHNPbkpuWWlneE5UWXNNemtzTVRjMktUc2lMejRLSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRHd2Wno0S0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUR4bklIUnlZVzV6Wm05eWJUMGliV0YwY21sNEtEQXVNemMxTlRJMkxDMHdMalkxTURRekxDMHdMalkxTURRekxDMHdMak0zTlRVeU5pdzBOelV1TWprMkxEWXpNaTR4TVRVcElqNEtJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0E4Y0dGMGFDQmtQU0pOTWprM0xqWXdPQ3d4TkRndU9EWTNRek0xTmk0Mk9Ea3NNVFE0TGpnMk55QTBNRFF1TmpVMUxERTVOaTQ0TXpNZ05EQTBMalkxTlN3eU5UVXVPVEUwUXpRd05DNDJOVFVzTXpFMExqazVOU0F6TVRFdU1UWXNORFV6TGpZMk1pQXlPVGN1TmpBNExEUTFNeTQyTmpKRE1qZzBMakExTlN3ME5UTXVOall5SURFNU1DNDFOakVzTXpFMExqazVOU0F4T1RBdU5UWXhMREkxTlM0NU1UUkRNVGt3TGpVMk1Td3hPVFl1T0RNeklESXpPQzQxTWpjc01UUTRMamcyTnlBeU9UY3VOakE0TERFME9DNDROamRhSWlCemRIbHNaVDBpWm1sc2JEcHlaMklvTVRBMkxESTNMREUxTkNrN0lpOCtDaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQThMMmMrQ2lBZ0lDQWdJQ0FnSUNBZ0lEd3ZaejRLSUNBZ0lDQWdJQ0E4TDJjK0NpQWdJQ0E4TDJjK0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyeXB0bzoge1xuICAgIG5hbWU6ICdRdWFuZycsXG4gICAgZGVzYzogJ09pcm9uIENyeXB0byB8IFJlYWN0IExhbmRpbmcgUGFnZSBUZW1wbGF0ZScsXG4gICAgcHJlZml4OiAnb2lyb24nLFxuICAgIGZvb3RlclRleHQ6ICdPaXJvbiBUaGVtZSAyMDIxJyxcbiAgICBsb2dvVGV4dDogJ09pcm9uIFRoZW1lJyxcbiAgICBwcm9qZWN0TmFtZTogJ0NyeXB0bycsXG4gICAgdXJsOiAnYXdyb3JhMy5pbmRpc2FpbnMuY29tL2NyeXB0bycsXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvbG9nby1jcnlwdG8ucG5nJ1xuICB9XG59O1xuIiwiY29uc3QgbGluayA9IHtcbiAgY3J5cHRvOiB7XG4gICAgaG9tZTogJy8nLFxuICAgIGFib3V0OiAnL2Fib3V0JyxcbiAgICB0ZWFtOiAnL2Fib3V0L3RlYW0nLFxuICAgIGJsb2c6ICcvYmxvZycsXG4gICAgYmxvZ0RldGFpbDogJy9ibG9nL2RldGFpbC1ibG9nJyxcbiAgICBsb2dpbjogJy9sb2dpbicsXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInLFxuICAgIGNvbnRhY3Q6ICcvY29udGFjdCcsXG4gICAgY29udGFjdE1hcDogJy9jb250YWN0L3dpdGgtbWFwJyxcbiAgICBjYXJkOiAnL2NvbGxlY3Rpb24nLFxuICAgIHByb2R1Y3Q6ICcvY29sbGVjdGlvbi9wcm9kdWN0cycsXG4gICAgcHJvZHVjdERldGFpbDogJy9jb2xsZWN0aW9uL2RldGFpbC1wcm9kdWN0JyxcbiAgICBwcmljaW5nOiAnL3V0aWxzL3ByaWNpbmcnLFxuICAgIGZhcTogJy91dGlscy9mYXEnLFxuICAgIG1haW50ZW5hbmNlOiAnL3V0aWxzL21haW50ZW5hbmNlJyxcbiAgICBjb21pbmdTb29uOiAnL3V0aWxzL2NvbWluZy1zb29uJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaW5rO1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHNlY3Rpb25NYXJnaW4gPSBtYXJnaW4gPT4gKG1hcmdpbiAqIDIwKTtcbmNvbnN0IHRpdGxlU3R5bGUgPSB7XG4gIGZvbnRTaXplOiA0OCxcbiAgbGluZUhlaWdodDogJzYycHgnLFxuICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gIGZvbnRXZWlnaHQ6IDcwMCxcbiAgbWFyZ2luQm90dG9tOiA0MCxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTcGFjaW5nID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBtYWluV3JhcDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLmRlZmF1bHQgOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgJyYgdWxbY2xhc3M9XCJzbGljay1kb3RzXCJdJzoge1xuICAgICAgJyYgbGknOiB7XG4gICAgICAgIG1hcmdpbjogJzFweCAycHgnLFxuICAgICAgICAnJiBidXR0b246YmVmb3JlJzoge1xuICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgICAgY29sb3I6ICd0cmFuc3BhcmVudCAhaW1wb3J0YW50JyxcbiAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgICBsZWZ0OiAzLFxuICAgICAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufWAsXG4gICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJ1xuICAgICAgICB9LFxuICAgICAgICAnJltjbGFzcz1cInNsaWNrLWFjdGl2ZVwiXSc6IHtcbiAgICAgICAgICAnJiBidXR0b246YmVmb3JlJzoge1xuICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgaGVpZ2h0OiAyMCxcbiAgICAgICAgICAgIHRvcDogLTUsXG4gICAgICAgICAgICBsZWZ0OiAtMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY29sb3VyZWRQYWdlOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmsgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbiAgc3BhY2VCb3R0b206IHtcbiAgICBtYXJnaW5Cb3R0b206IHNlY3Rpb25NYXJnaW4oNiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHNlY3Rpb25NYXJnaW4oNClcbiAgICB9XG4gIH0sXG4gIHNwYWNlVG9wOiB7XG4gICAgbWFyZ2luVG9wOiBzZWN0aW9uTWFyZ2luKDYpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiBzZWN0aW9uTWFyZ2luKDQpXG4gICAgfVxuICB9LFxuICBzcGFjZUJvdHRvbVNob3J0OiB7XG4gICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKDQpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiBzZWN0aW9uTWFyZ2luKDIuNClcbiAgICB9XG4gIH0sXG4gIHNwYWNlVG9wU2hvcnQ6IHtcbiAgICBtYXJnaW5Ub3A6IHNlY3Rpb25NYXJnaW4oNCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHNlY3Rpb25NYXJnaW4oMi40KVxuICAgIH1cbiAgfSxcbiAgY29udGFpbmVyV3JhcDoge1xuICAgICcmID4gc2VjdGlvbic6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfVxuICB9LFxuICBjb250YWluZXJHZW5lcmFsOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNyksXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAzMixcbiAgICAgIHBhZGRpbmdSaWdodDogMzJcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5lckZyb250OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAxXG4gIH0sXG4gIGZ1bGxTY3JlZW5Db250YWluZXI6IHtcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9LFxuICBtYWludGVuYW5jZUljb246IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgd2lkdGg6IDEwMCxcbiAgICBoZWlnaHQ6IDEwMCxcbiAgICAnJiBzdmcnOiB7XG4gICAgICB3aWR0aDogNTAsXG4gICAgICBoZWlnaHQ6IDUwXG4gICAgfSxcbiAgfSxcbiAgcHJpbWFyeUljb246IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICB9LFxuICBzZWNvbmRhcnlJY29uOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmssXG4gIH0sXG4gIGFjY2VudEljb246IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmFjY2VudC5saWdodCxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY2NlbnQuZGFyayxcbiAgfSxcbiAgZmI6IHtcbiAgICBjb2xvcjogJyMzZjUxYjUnXG4gIH0sXG4gIGlnOiB7XG4gICAgY29sb3I6ICcjOWMyN2IwJ1xuICB9LFxuICB0dzoge1xuICAgIGNvbG9yOiAnIzIxOTZmMydcbiAgfSxcbiAgbGk6IHtcbiAgICBjb2xvcjogJyMyMTk2ZjMnXG4gIH0sXG4gIGJ0bk5vdGlmeToge1xuICAgIG1pbldpZHRoOiAxMjAsXG4gICAgbWFyZ2luOiA0XG4gIH1cbn0pKTtcblxuZXhwb3J0IGNvbnN0IHVzZVBvcHVwID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBhcHBCYXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIGZsZXg6IDEsXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCB1c2VUZXh0QWxpZ24gPSBtYWtlU3R5bGVzKHtcbiAgdGV4dENlbnRlcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgdGV4dExlZnQ6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICB9LFxuICB0ZXh0UmlnaHQ6IHtcbiAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VGbG9hdCA9IG1ha2VTdHlsZXMoe1xuICBmbG9hdExlZnQ6IHtcbiAgICBmbG9hdDogJ2xlZnQnXG4gIH0sXG4gIGZsb2F0UmlnaHQ6IHtcbiAgICBmbG9hdDogJ3JpZ2h0J1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VUZXh0ID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgZm9udFNpemU6IDQ4LFxuICAgIGxpbmVIZWlnaHQ6ICc3MnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAzOCxcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4J1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMjgsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDRweCdcbiAgICB9LFxuICB9LFxuICB0aXRsZTI6IHtcbiAgICBmb250U2l6ZTogMzYsXG4gICAgbGluZUhlaWdodDogJzU2cHgnLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgIH1cbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFNpemU6IDI4LFxuICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxuICAgIH0sXG4gIH0sXG4gIHN1YnRpdGxlMjoge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFNpemU6IDIyLFxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIH0sXG4gIH0sXG4gIHBhcmFncmFwaDoge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4J1xuICB9LFxuICBjYXB0aW9uOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlUHJpbWFyeToge1xuICAgIC4uLnRpdGxlU3R5bGUsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmtcbiAgfSxcbiAgdGl0bGVTZWNvbmRhcnk6IHtcbiAgICAuLi50aXRsZVN0eWxlLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFya1xuICB9LFxuICB0ZXh0UHJpbWFyeToge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrXG4gIH0sXG4gIHRleHRTZWNvbmRhcnk6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5saWdodCA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmtcbiAgfSxcbiAgcHJpbWFyeUNvbG9yOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gIH0sXG4gIHNlY29uZGFyeUNvbG9yOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgfSxcbiAgYWNjZW50Q29sb3I6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5hY2NlbnQubWFpblxuICB9LFxuICBjYXBpdGFsaXplOiB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnXG4gIH0sXG4gIHVwcGVyY2FzZToge1xuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnXG4gIH0sXG4gIGxvd2VyY2FzZToge1xuICAgIHRleHRUcmFuc2Zvcm06ICdsb3dlcmNhc2UnXG4gIH0sXG4gIGJvbGQ6IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICB9LFxuICBtZWRpdW06IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gIH0sXG4gIHJlZ3VsYXI6IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICB9XG59KSk7XG5cbmV4cG9ydCBjb25zdCB1c2VIaWRkZW4gPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGxnRG93bjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdsZycpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICBtZERvd246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgc21Eb3duOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIHhzRG93bjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICBsZ1VwOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICBtZFVwOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICBzbVVwOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9XG59KSk7XG5cbmV4cG9ydCBjb25zdCB1c2VGbGV4Qm94ID0gbWFrZVN0eWxlcygoKSA9PiAoe1xuICBqdXN0aWZ5U3RhcnQ6IHtcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcidcbiAgfSxcbiAganVzdGlmeUNlbnRlcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xuICB9LFxuICBqdXN0aWZ5RW5kOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcbiAgfSxcbiAgYWxpZ25TdGFydDoge1xuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXInXG4gIH0sXG4gIGFsaWduQ2VudGVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgYWxpZ25FbmQ6IHtcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBjb25zdCB1c2VGbGlwUnRsID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICB0cmFuc2Zvcm06IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnc2NhbGUoLTEpJyA6ICdub25lJ1xufSkpO1xuIiwiY29uc3QgdWlTdGF0ZSA9IHtcbiAgaGVhZGVyOiAnbWl4ZWQnLCAvKiBhdmFpbGFibGU6IG1peGVkLCBkcm9wbGlzdCwgbWVnYSwgbmF2c2Nyb2xsLCBoYW1idXJnZXIsIGJhc2ljLCBzZWFyY2ggKi9cbiAgZm9vdGVyOiAnc2l0ZW1hcCcsIC8qIGF2YWlsYWJsZTogYmFzaWMsIGJsb2csIGNvbnRhY3QsIHNpdGVtYXAgKi9cbiAgY29ybmVyOiAnY2hhdCcgLyogYXZhaWxhYmxlOiBjaGF0LCBuYXYgKi8sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1aVN0YXRlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0FjY29yZGlvbkRldGFpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQWNjb3JkaW9uU3VtbWFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvT3V0bGluZWRJbnB1dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DaGVja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGFuZ3VhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NldHRpbmdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNvdW50dXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtd293XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=