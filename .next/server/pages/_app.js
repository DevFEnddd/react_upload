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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/GradientDeco/GradientDeco.js":
/*!*************************************************!*\
  !*** ./components/GradientDeco/GradientDeco.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GradientDeco; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\components\\GradientDeco\\GradientDeco.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(() => ({
  hide: {
    position: 'absolute',
    top: 0,
    left: 0
  }
}));
function GradientDeco() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  const {
    0: themeState,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('light');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTheme(theme.palette.type);
  });
  return __jsx("div", {
    className: classes.hide,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("svg", {
    width: "38px",
    height: "43px",
    viewBox: "0 0 38 43",
    version: "1.1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "34.5063846%",
    y1: "15.1303808%",
    x2: "20.8153155%",
    y2: "110.664023%",
    id: "titleLinearGradient-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }))), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "66.8412844%",
    y1: "30.62426%",
    x2: "-21.0581447%",
    y2: "100%",
    id: "hexaLinearGradient-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: theme.palette.secondary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: theme.palette.secondary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }))), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "66.8412844%",
    y1: "30.62426%",
    x2: "-21.0581447%",
    y2: "100%",
    id: "hexaLinearGradient-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: theme.palette.primary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: theme.palette.primary.light,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))), __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("linearGradient", {
    x1: "33.650521%",
    y1: "14.3140713%",
    x2: "18.9688557%",
    y2: "110.664023%",
    id: "frmDecoLinearGradient-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main,
    offset: "0%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx("stop", {
    stopColor: themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
    offset: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  })), __jsx("path", {
    d: "M40.0268505,351.888258 C299.475775,-137.933311 505.867463,-306.185765 659.201915,-152.869104 C788.709519,-23.376527 935.329477,275.20658 1099.06179,742.880218 C1145.23269,874.759604 1075.75224,1019.09788 943.872862,1065.26879 C895.054476,1082.36009 842.170492,1084.07787 792.345858,1070.19072 L372.341154,953.126774 C318.012942,937.984384 270.301991,905.123239 236.786543,859.762889 L60.1185534,620.657575 C2.28750686,542.3881 -5.52448856,437.886026 40.0268505,351.888258 Z",
    id: "path-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/GradientDeco/index.js":
/*!******************************************!*\
  !*** ./components/GradientDeco/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GradientDeco__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GradientDeco */ "./components/GradientDeco/GradientDeco.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GradientDeco__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_appTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/appTheme */ "./theme/appTheme.js");
/* harmony import */ var _components_GradientDeco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/GradientDeco */ "./components/GradientDeco/index.js");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vendors_animate_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vendors/animate.css */ "./vendors/animate.css");
/* harmony import */ var _vendors_animate_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vendors/hamburger-menu.css */ "./vendors/hamburger-menu.css");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../vendors/animate-extends.css */ "./vendors/animate-extends.css");
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vendors_react_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vendors/react-top-loading-bar.css */ "./vendors/react-top-loading-bar.css");
/* harmony import */ var _vendors_react_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendors_react_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vendors/page-transition.css */ "./vendors/page-transition.css");
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../vendors/slick/slick.css */ "./vendors/slick/slick.css");
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../vendors/slick/slick-theme.css */ "./vendors/slick/slick-theme.css");
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_20__);
var _jsxFileName = "F:\\PM\\oiron_v101\\oiron\\packages\\crypto-theme\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














/* import css vendors */









let themeType = 'light';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('oironTheme') || 'light';
}

function MyApp(props) {
  const loadingTime = 1500;
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread(_objectSpread({}, Object(_theme_appTheme__WEBPACK_IMPORTED_MODULE_11__["default"])('coinz', themeType)), {}, {
    direction: _i18n__WEBPACK_IMPORTED_MODULE_10__["i18n"].language === 'ara' ? 'rtl' : 'ltr'
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Set layout direction
    document.dir = _i18n__WEBPACK_IMPORTED_MODULE_10__["i18n"].language === 'ara' ? 'rtl' : 'ltr'; // Remove preloader

    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, loadingTime);
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, loadingTime + 500); // Refresh JSS in SSR

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('oironTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, Object(_theme_appTheme__WEBPACK_IMPORTED_MODULE_11__["default"])('coinz', newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(theme);
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const jss = Object(jss__WEBPACK_IMPORTED_MODULE_5__["create"])({
    plugins: [...Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["jssPreset"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_7___default()()]
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["StylesProvider"], {
    jss: jss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: muiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx(_components_GradientDeco__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  }), __jsx(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    height: 0,
    color: theme.palette.primary.main,
    progress: loading,
    className: "top-loading-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }), __jsx("div", {
    id: "main-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__["PageTransition"], {
    timeout: loadingTime,
    classNames: "page-fade-transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    onToggleDark: toggleDarkTheme,
    onToggleDir: toggleDirection,
    key: router.route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  })))))));
}

MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

MyApp.getInitialProps = async appContext => _objectSpread({}, await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext));

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["appWithTranslation"])(MyApp));

/***/ }),

/***/ "./theme/appTheme.js":
/*!***************************!*\
  !*** ./theme/appTheme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette__WEBPACK_IMPORTED_MODULE_0__);


const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary,
    secondary: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary,
    accent: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.accent,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  shade: {
    light: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
    dark: '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'h1, h2, h3, h4, h5, h6': {
          margin: 0
        },
        p: {
          marginTop: 0,
          marginBottom: 16
        },
        button: {
          fontFamily: ['Montserrat', 'sans-serif'],
          fontSize: 14
        }
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12
      },
      elevation1: {
        boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
      },
      elevation4: {
        boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
      }
    },
    MuiSelect: {
      filled: {
        paddingTop: 8
      }
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: '#EEE'
      }
    },
    MuiButton: {
      containedSecondary: {
        color: '#FFFFFF',
        boxShadow: `0 0 4px -1px ${_palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary.main}`
      },
      containedPrimary: {
        color: '#FFFFFF',
        boxShadow: `0 0 4px -1px ${_palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main}`
      },
      root: {
        borderRadius: 6,
        fontWeight: 600,
        boxShadow: 'none',
        padding: '8px 24px'
      },
      sizeSmall: {
        padding: '7px 12px'
      },
      sizeLarge: {
        height: 48,
        padding: '7px 36px'
      }
    },
    MuiTypography: {
      button: {
        fontWeight: 600
      }
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
        }
      },
      filled: {
        '&$shrink': {
          color: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
        }
      }
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomColor: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
        }
      },
      multiline: {
        padding: 0,
        '& textarea': {
          paddingTop: 27
        }
      },
      root: {
        backgroundColor: mode === 'dark' ? 'hsla(0,0%,100%,.08)' : 'rgba(0,0,0,.06)',
        '&:hover, &:focus': {
          backgroundColor: mode === 'dark' ? 'hsla(0,0%,100%,.08)' : 'rgba(0,0,0,.06)'
        }
      }
    },
    MuiOutlinedInput: {
      inputAdornedStart: {
        paddingLeft: 40
      }
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (appTheme);

/***/ }),

/***/ "./theme/palette.js":
/*!**************************!*\
  !*** ./theme/palette.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  oceanBlue: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      },
      accent: {
        light: '#EDE7F6',
        main: '#651FFF',
        dark: '#4527A0'
      }
    }
  },
  violeta: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#558B2F'
      },
      accent: {
        light: '#FFECB3',
        main: '#FFC107',
        dark: '#FF6F00'
      }
    }
  },
  cloud: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      },
      accent: {
        light: '#C5CAE9',
        main: '#304FFE',
        dark: '#1A237E'
      }
    }
  },
  coinz: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      },
      accent: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#4527A0'
      }
    }
  },
  money: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      },
      accent: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      }
    }
  },
  smart: {
    palette: {
      primary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#00838F'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      },
      accent: {
        light: '#F8BBD0',
        main: '#E91E63',
        dark: '#AD1457'
      }
    }
  },
  fresh: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#1B5E20'
      },
      accent: {
        light: '#F8BBD0',
        main: '#E91E63',
        dark: '#AD1457'
      }
    }
  },
  sunset: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#1565C0'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFC107',
        dark: '#FF6F00'
      },
      accent: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#00838F'
      }
    }
  },
  rose: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#E91E63',
        dark: '#AD1457'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      },
      accent: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  mint: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      accent: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#00838F'
      }
    }
  },
  joker: {
    palette: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      },
      accent: {
        light: '#F8BBD0',
        main: '#E91E63',
        dark: '#AD1457'
      }
    }
  }
};

/***/ }),

/***/ "./vendors/animate-extends.css":
/*!*************************************!*\
  !*** ./vendors/animate-extends.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/animate.css":
/*!*****************************!*\
  !*** ./vendors/animate.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/hamburger-menu.css":
/*!************************************!*\
  !*** ./vendors/hamburger-menu.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/page-transition.css":
/*!*************************************!*\
  !*** ./vendors/page-transition.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/react-top-loading-bar.css":
/*!*******************************************!*\
  !*** ./vendors/react-top-loading-bar.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/slick/slick-theme.css":
/*!***************************************!*\
  !*** ./vendors/slick/slick-theme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/slick/slick.css":
/*!*********************************!*\
  !*** ./vendors/slick/slick.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

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

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR3JhZGllbnREZWNvL0dyYWRpZW50RGVjby5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyYWRpZW50RGVjby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvYXBwVGhlbWUuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzcy1ydGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWkxOG5leHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXBhZ2UtdHJhbnNpdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIiJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwiaGlkZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIkdyYWRpZW50RGVjbyIsImNsYXNzZXMiLCJ0aGVtZSIsInVzZVRoZW1lIiwidGhlbWVTdGF0ZSIsInNldFRoZW1lIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwYWxldHRlIiwidHlwZSIsInByaW1hcnkiLCJkYXJrIiwibGlnaHQiLCJzZWNvbmRhcnkiLCJtYWluIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImZhbGxiYWNrTG5nIiwiaW5pdEltbWVkaWF0ZSIsImxvY2FsZVBhdGgiLCJyZWFjdCIsInVzZVN1c3BlbnNlIiwibG9jYWxlU3VicGF0aHMiLCJlbmciLCJhcmEiLCJwcnQiLCJpbmQiLCJkZXUiLCJ6aG8iLCJ2biIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwidGhlbWVUeXBlIiwiU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJNeUFwcCIsInByb3BzIiwibG9hZGluZ1RpbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFwcFRoZW1lIiwiZGlyZWN0aW9uIiwiaTE4biIsImxhbmd1YWdlIiwiZG9jdW1lbnQiLCJkaXIiLCJwcmVsb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJqc3NTdHlsZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidG9nZ2xlRGFya1RoZW1lIiwibmV3UGFsZXR0ZVR5cGUiLCJzZXRJdGVtIiwidG9nZ2xlRGlyZWN0aW9uIiwibXVpVGhlbWUiLCJjcmVhdGVNdWlUaGVtZSIsImpzcyIsImNyZWF0ZSIsInBsdWdpbnMiLCJqc3NQcmVzZXQiLCJydGwiLCJyb3V0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImFwcENvbnRleHQiLCJhcHBXaXRoVHJhbnNsYXRpb24iLCJjb2xvciIsIm1vZGUiLCJhY2NlbnQiLCJhY3Rpb24iLCJob3ZlciIsImhvdmVyT3BhY2l0eSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFdlaWdodE1lZGl1bSIsImZvbnRXZWlnaHRCb2xkIiwic2hhZGUiLCJyb3VuZGVkIiwic21hbGwiLCJtZWRpdW0iLCJiaWciLCJzaGFkb3dzIiwib3ZlcnJpZGVzIiwiTXVpQ3NzQmFzZWxpbmUiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJidXR0b24iLCJmb250U2l6ZSIsIk11aVBhcGVyIiwiYm9yZGVyUmFkaXVzIiwiZWxldmF0aW9uMSIsImJveFNoYWRvdyIsImVsZXZhdGlvbjQiLCJNdWlTZWxlY3QiLCJmaWxsZWQiLCJwYWRkaW5nVG9wIiwiTXVpQXZhdGFyIiwiY29sb3JEZWZhdWx0IiwiYmFja2dyb3VuZENvbG9yIiwiTXVpQnV0dG9uIiwiY29udGFpbmVkU2Vjb25kYXJ5IiwiY29udGFpbmVkUHJpbWFyeSIsInJvb3QiLCJmb250V2VpZ2h0IiwicGFkZGluZyIsInNpemVTbWFsbCIsInNpemVMYXJnZSIsImhlaWdodCIsIk11aVR5cG9ncmFwaHkiLCJNdWlJbnB1dExhYmVsIiwiTXVpRmlsbGVkSW5wdXQiLCJ1bmRlcmxpbmUiLCJib3JkZXJCb3R0b21Db2xvciIsIm11bHRpbGluZSIsIk11aU91dGxpbmVkSW5wdXQiLCJpbnB1dEFkb3JuZWRTdGFydCIsInBhZGRpbmdMZWZ0Iiwib2NlYW5CbHVlIiwidmlvbGV0YSIsImNsb3VkIiwiY29pbnoiLCJtb25leSIsInNtYXJ0IiwiZnJlc2giLCJzdW5zZXQiLCJyb3NlIiwibWludCIsImpva2VyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxPQUFPO0FBQ2xDQyxNQUFJLEVBQUU7QUFDSkMsWUFBUSxFQUFFLFVBRE47QUFFSkMsT0FB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O0FBQ1BFLGFBQU8sRUFBRTtBQUNQRSxhQUFLLEVBQUUsU0FEQTtBQUVQRSxZQUFJLEVBQUUsU0FGQztBQUdQSCxZQUFJLEVBQUU7QUFIQyxPQURGO0FBTVBFLGVBQVMsRUFBRTtBQUNURCxhQUFLLEVBQUUsU0FERTtBQUVURSxZQUFJLEVBQUUsU0FGRztBQUdUSCxZQUFJLEVBQUU7QUFIRyxPQU5KO0FBV1BnRyxZQUFNLEVBQUU7QUFDTi9GLGFBQUssRUFBRSxTQUREO0FBRU5FLFlBQUksRUFBRSxTQUZBO0FBR05ILFlBQUksRUFBRTtBQUhBO0FBWEQ7QUFESjtBQS9MUSxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKCkgPT4gKHtcbiAgaGlkZToge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwXG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JhZGllbnREZWNvKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3RoZW1lU3RhdGUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKCdsaWdodCcpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRoZW1lKHRoZW1lLnBhbGV0dGUudHlwZSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhpZGV9PlxuICAgICAgPHN2ZyB3aWR0aD1cIjM4cHhcIiBoZWlnaHQ9XCI0M3B4XCIgdmlld0JveD1cIjAgMCAzOCA0M1wiIHZlcnNpb249XCIxLjFcIj5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiMzQuNTA2Mzg0NiVcIiB5MT1cIjE1LjEzMDM4MDglXCIgeDI9XCIyMC44MTUzMTU1JVwiIHkyPVwiMTEwLjY2NDAyMyVcIiBpZD1cInRpdGxlTGluZWFyR3JhZGllbnQtMVwiPlxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZVN0YXRlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodH0gb2Zmc2V0PVwiMCVcIiAvPlxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZVN0YXRlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5kYXJrIDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubGlnaHR9IG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgIDwvZGVmcz5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiNjYuODQxMjg0NCVcIiB5MT1cIjMwLjYyNDI2JVwiIHgyPVwiLTIxLjA1ODE0NDclXCIgeTI9XCIxMDAlXCIgaWQ9XCJoZXhhTGluZWFyR3JhZGllbnQtM1wiPlxuICAgICAgICAgICAgPHN0b3Agc3RvcENvbG9yPXt0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWlufSBvZmZzZXQ9XCIwJVwiIC8+XG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8L2RlZnM+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjY2Ljg0MTI4NDQlXCIgeTE9XCIzMC42MjQyNiVcIiB4Mj1cIi0yMS4wNTgxNDQ3JVwiIHkyPVwiMTAwJVwiIGlkPVwiaGV4YUxpbmVhckdyYWRpZW50LTJcIj5cbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fSBvZmZzZXQ9XCIxMDAlXCIgLz5cbiAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICA8L2RlZnM+XG4gICAgICAgIDxkZWZzPlxuICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT1cIjMzLjY1MDUyMSVcIiB5MT1cIjE0LjMxNDA3MTMlXCIgeDI9XCIxOC45Njg4NTU3JVwiIHkyPVwiMTEwLjY2NDAyMyVcIiBpZD1cImZybURlY29MaW5lYXJHcmFkaWVudC0xXCI+XG4gICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9e3RoZW1lU3RhdGUgPT09ICdkYXJrJyA/IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrIDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59IG9mZnNldD1cIjAlXCIgLz5cbiAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj17dGhlbWVTdGF0ZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFyayA6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW59IG9mZnNldD1cIjEwMCVcIiAvPlxuICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPHBhdGggZD1cIk00MC4wMjY4NTA1LDM1MS44ODgyNTggQzI5OS40NzU3NzUsLTEzNy45MzMzMTEgNTA1Ljg2NzQ2MywtMzA2LjE4NTc2NSA2NTkuMjAxOTE1LC0xNTIuODY5MTA0IEM3ODguNzA5NTE5LC0yMy4zNzY1MjcgOTM1LjMyOTQ3NywyNzUuMjA2NTggMTA5OS4wNjE3OSw3NDIuODgwMjE4IEMxMTQ1LjIzMjY5LDg3NC43NTk2MDQgMTA3NS43NTIyNCwxMDE5LjA5Nzg4IDk0My44NzI4NjIsMTA2NS4yNjg3OSBDODk1LjA1NDQ3NiwxMDgyLjM2MDA5IDg0Mi4xNzA0OTIsMTA4NC4wNzc4NyA3OTIuMzQ1ODU4LDEwNzAuMTkwNzIgTDM3Mi4zNDExNTQsOTUzLjEyNjc3NCBDMzE4LjAxMjk0Miw5MzcuOTg0Mzg0IDI3MC4zMDE5OTEsOTA1LjEyMzIzOSAyMzYuNzg2NTQzLDg1OS43NjI4ODkgTDYwLjExODU1MzQsNjIwLjY1NzU3NSBDMi4yODc1MDY4Niw1NDIuMzg4MSAtNS41MjQ0ODg1Niw0MzcuODg2MDI2IDQwLjAyNjg1MDUsMzUxLjg4ODI1OCBaXCIgaWQ9XCJwYXRoLTJcIiAvPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dyYWRpZW50RGVjbyc7XG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcbiAgb3RoZXJMYW5ndWFnZXM6IFsnYXJhJywgJ2luZCcsICdwcnQnLCAnZGV1JywgJ3pobycsICd2biddLFxuICBmYWxsYmFja0xuZzogJ2VuZycsXG4gIGluaXRJbW1lZGlhdGU6IGZhbHNlLFxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxuICByZWFjdDoge1xuICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcbiAgfSxcbiAgbG9jYWxlU3VicGF0aHM6IHtcbiAgICBlbmc6ICdlbicsXG4gICAgYXJhOiAnYXInLFxuICAgIHBydDogJ3B0JyxcbiAgICBpbmQ6ICdpZCcsXG4gICAgZGV1OiAnZGUnLFxuICAgIHpobzogJ3poJyxcbiAgICB2bjogJ3ZuJyxcbiAgfSxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgVGhlbWVQcm92aWRlcixcbiAgY3JlYXRlTXVpVGhlbWUsXG4gIFN0eWxlc1Byb3ZpZGVyLFxuICBqc3NQcmVzZXRcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2pzcyc7XG5pbXBvcnQgeyBQYWdlVHJhbnNpdGlvbiB9IGZyb20gJ25leHQtcGFnZS10cmFuc2l0aW9ucyc7XG5pbXBvcnQgcnRsIGZyb20gJ2pzcy1ydGwnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBMb2FkaW5nQmFyIGZyb20gJ3JlYWN0LXRvcC1sb2FkaW5nLWJhcic7XG5pbXBvcnQgeyBpMThuLCBhcHBXaXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJztcbmltcG9ydCBhcHBUaGVtZSBmcm9tICcuLi90aGVtZS9hcHBUaGVtZSc7XG5pbXBvcnQgR3JhZGllbnREZWNvIGZyb20gJy4uL2NvbXBvbmVudHMvR3JhZGllbnREZWNvJztcbi8qIGltcG9ydCBjc3MgdmVuZG9ycyAqL1xuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnO1xuaW1wb3J0ICd+L3ZlbmRvcnMvYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICd+L3ZlbmRvcnMvaGFtYnVyZ2VyLW1lbnUuY3NzJztcbmltcG9ydCAnLi4vdmVuZG9ycy9hbmltYXRlLWV4dGVuZHMuY3NzJztcbmltcG9ydCAnLi4vdmVuZG9ycy9yZWFjdC10b3AtbG9hZGluZy1iYXIuY3NzJztcbmltcG9ydCAnLi4vdmVuZG9ycy9wYWdlLXRyYW5zaXRpb24uY3NzJztcbmltcG9ydCAnLi4vdmVuZG9ycy9zbGljay9zbGljay5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3JzL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5cbmxldCB0aGVtZVR5cGUgPSAnbGlnaHQnO1xuaWYgKHR5cGVvZiBTdG9yYWdlICE9PSAndW5kZWZpbmVkJykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIHRoZW1lVHlwZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvaXJvblRoZW1lJykgfHwgJ2xpZ2h0Jztcbn1cblxuZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgbG9hZGluZ1RpbWUgPSAxNTAwO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSh7XG4gICAgLi4uYXBwVGhlbWUoJ2NvaW56JywgdGhlbWVUeXBlKSxcbiAgICBkaXJlY3Rpb246IGkxOG4ubGFuZ3VhZ2UgPT09ICdhcmEnID8gJ3J0bCcgOiAnbHRyJ1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNldCBsYXlvdXQgZGlyZWN0aW9uXG4gICAgZG9jdW1lbnQuZGlyID0gaTE4bi5sYW5ndWFnZSA9PT0gJ2FyYScgPyAncnRsJyA6ICdsdHInO1xuICAgIC8vIFJlbW92ZSBwcmVsb2FkZXJcbiAgICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJyk7XG4gICAgaWYgKHByZWxvYWRlciAhPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwcmVsb2FkZXIucmVtb3ZlKCk7XG4gICAgICB9LCBsb2FkaW5nVGltZSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGxvYWRpbmcgYmFyXG4gICAgc2V0TG9hZGluZygwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgc2V0TG9hZGluZygxMDApOyB9LCBsb2FkaW5nVGltZSArIDUwMCk7XG5cbiAgICAvLyBSZWZyZXNoIEpTUyBpbiBTU1JcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCB0b2dnbGVEYXJrVGhlbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UGFsZXR0ZVR5cGUgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAnZGFyaycgOiAnbGlnaHQnO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvaXJvblRoZW1lJywgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG4gICAgc2V0VGhlbWUoe1xuICAgICAgLi4uYXBwVGhlbWUoJ2NvaW56JywgbmV3UGFsZXR0ZVR5cGUpLFxuICAgICAgZGlyZWN0aW9uOiB0aGVtZS5kaXJlY3Rpb24sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRGlyZWN0aW9uID0gZGlyID0+IHtcbiAgICBkb2N1bWVudC5kaXIgPSBkaXI7XG4gICAgc2V0VGhlbWUoe1xuICAgICAgLi4udGhlbWUsXG4gICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgIHBhbGV0dGU6IHtcbiAgICAgICAgLi4udGhlbWUucGFsZXR0ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG11aVRoZW1lID0gY3JlYXRlTXVpVGhlbWUodGhlbWUpO1xuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb3V0ZXIgfSA9IHByb3BzOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIGNvbnN0IGpzcyA9IGNyZWF0ZSh7IHBsdWdpbnM6IFsuLi5qc3NQcmVzZXQoKS5wbHVnaW5zLCBydGwoKV0gfSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIm1pbmltdW0tc2NhbGU9MSwgaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGgsIHNocmluay10by1maXQ9bm9cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN0eWxlc1Byb3ZpZGVyIGpzcz17anNzfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e211aVRoZW1lfT5cbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICA8R3JhZGllbnREZWNvIC8+XG4gICAgICAgICAgPExvYWRpbmdCYXJcbiAgICAgICAgICAgIGhlaWdodD17MH1cbiAgICAgICAgICAgIGNvbG9yPXt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn1cbiAgICAgICAgICAgIHByb2dyZXNzPXtsb2FkaW5nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWxvYWRpbmctYmFyXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLXdyYXBcIj5cbiAgICAgICAgICAgIDxQYWdlVHJhbnNpdGlvbiB0aW1lb3V0PXtsb2FkaW5nVGltZX0gY2xhc3NOYW1lcz1cInBhZ2UtZmFkZS10cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRGFyaz17dG9nZ2xlRGFya1RoZW1lfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRGlyPXt0b2dnbGVEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAga2V5PXtyb3V0ZXIucm91dGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1N0eWxlc1Byb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4gKHsgLi4uYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwV2l0aFRyYW5zbGF0aW9uKE15QXBwKTtcbiIsImltcG9ydCBwYWxldHRlIGZyb20gJy4vcGFsZXR0ZSc7XG5jb25zdCBhcHBUaGVtZSA9IChjb2xvciwgbW9kZSkgPT4gKHtcbiAgcGFsZXR0ZToge1xuICAgIHR5cGU6IG1vZGUsXG4gICAgcHJpbWFyeTogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5LFxuICAgIHNlY29uZGFyeTogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5zZWNvbmRhcnksXG4gICAgYWNjZW50OiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLmFjY2VudCxcbiAgICBhY3Rpb246IHtcbiAgICAgIGhvdmVyOiBtb2RlID09PSAnZGFyaycgPyAncmdiYSgxMjgsMTI4LDEyOCwgMC45KScgOiAncmdiYSgxMjgsMTI4LDEyOCwgMC4wNSknLFxuICAgICAgaG92ZXJPcGFjaXR5OiAwLjA1XG4gICAgfVxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogW1xuICAgICAgJ01vbnRzZXJyYXQnLFxuICAgICAgJ3NhbnMtc2VyaWYnXG4gICAgXS5qb2luKCcsJyksXG4gICAgZm9udFdlaWdodFJlZ3VsYXI6IDQwMCxcbiAgICBmb250V2VpZ2h0TWVkaXVtOiA1MDAsXG4gICAgZm9udFdlaWdodEJvbGQ6IDYwMCxcbiAgfSxcbiAgc2hhZGU6IHtcbiAgICBsaWdodDogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXG4gICAgZGFyazogJzBweCAxcHggM3B4IDBweCByZ2JhKDY0LCA2NCwgNjQsIDEpLCAwcHggMXB4IDFweCAwcHggcmdiYSg0MiwgNDIsIDQyLCAxKSwgMHB4IDJweCAxcHggLTFweCByZ2JhKDIwLCAyMCwgMjAsIDEpJ1xuICB9LFxuICByb3VuZGVkOiB7XG4gICAgc21hbGw6ICc4cHgnLFxuICAgIG1lZGl1bTogJzEycHgnLFxuICAgIGJpZzogJzIwcHgnXG4gIH0sXG4gIHNoYWRvd3M6IG1vZGUgPT09ICdkYXJrJ1xuICAgID8gW1xuICAgICAgJ25vbmUnLFxuICAgICAgJzBweCAxcHggM3B4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxcHggMXB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMnB4IDFweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMXB4IDVweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMnB4IDJweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDNweCAxcHggLTJweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDFweCA4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAzcHggM3B4IC0ycHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAycHggNHB4IC0xcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA1cHggOHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMXB4IDE0cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMXB4IDE4cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNHB4IDVweCAtMnB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggMnB4IDE2cHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNXB4IDVweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDhweCAxMHB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNXB4IDZweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDlweCAxMnB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDE2cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggNnB4IDZweCAtM3B4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDRweCAxOHB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDZweCA3cHggLTRweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxMXB4IDE1cHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA3cHggOHB4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTJweCAxN3B4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNXB4IDIycHggNHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDVweCAyNHB4IDRweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDdweCA5cHggLTRweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxNHB4IDIxcHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA4cHggOXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTVweCAyMnB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNnB4IDI4cHggNXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDEwcHggLTVweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA2cHggMzBweCA1cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA4cHggMTFweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE3cHggMjZweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDlweCAxMXB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMThweCAyOHB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggN3B4IDM0cHggNnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggOXB4IDEycHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA3cHggMzZweCA2cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMHB4IDMxcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMXB4IDMzcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggNDBweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMHB4IDE0cHggLTZweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA4cHggNDJweCA3cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMXB4IDE0cHggLTdweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyM3B4IDM2cHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA5cHggNDRweCA4cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxMXB4IDE1cHggLTdweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAyNHB4IDM4cHggM3B4IHJnYmEoODUwLDUwLDUwIDAuMTQpLDBweCA5cHggNDZweCA4cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgIF1cbiAgICA6IFtcbiAgICAgICdub25lJyxcbiAgICAgICcwcHggMXB4IDNweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDJweCAxcHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDFweCA1cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAzcHggMXB4IC0ycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCAxcHggOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggM3B4IDNweCAtMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMnB4IDRweCAtMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDRweCA1cHggLTJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDVweCA1cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDVweCA2cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDZweCA2cHggLTNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxMHB4IDE0cHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA2cHggN3B4IC00cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxM3B4IDE5cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA3cHggOXB4IC00cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDlweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDhweCAxMHB4IC01cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDExcHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA5cHggMTFweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDlweCAxMnB4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTlweCAyOXB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxNHB4IC02cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjJweCAzNXB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTFweCAxNHB4IC03cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMTFweCAxNXB4IC03cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICBdLFxuICBvdmVycmlkZXM6IHtcbiAgICBNdWlDc3NCYXNlbGluZToge1xuICAgICAgJ0BnbG9iYWwnOiB7XG4gICAgICAgICdoMSwgaDIsIGgzLCBoNCwgaDUsIGg2Jzoge1xuICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9LFxuICAgICAgICBwOiB7XG4gICAgICAgICAgbWFyZ2luVG9wOiAwLFxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTZcbiAgICAgICAgfSxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgZm9udEZhbWlseTogWydNb250c2VycmF0JywgJ3NhbnMtc2VyaWYnXSxcbiAgICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVBhcGVyOiB7XG4gICAgICByb3VuZGVkOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogMTJcbiAgICAgIH0sXG4gICAgICBlbGV2YXRpb24xOiB7XG4gICAgICAgIGJveFNoYWRvdzogbW9kZSA9PT0gJ2RhcmsnID8gJzBweCAxcHggM3B4IDBweCByZ2JhKDY0LCA2NCwgNjQsIDEpLCAwcHggMXB4IDFweCAwcHggcmdiYSg0MiwgNDIsIDQyLCAxKSwgMHB4IDJweCAxcHggLTFweCByZ2JhKDIwLCAyMCwgMjAsIDEpJyA6ICcwIDEuNXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknXG4gICAgICB9LFxuICAgICAgZWxldmF0aW9uNDoge1xuICAgICAgICBib3hTaGFkb3c6IG1vZGUgPT09ICdkYXJrJyA/ICcwcHggMnB4IDRweCAtMXB4IHJnYmEoNjQsIDY0LCA2NCwgMC40NiksIDBweCA0cHggNXB4IDBweCByZ2JhKDQyLCA0MiwgNDIsIDAuMzIpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMjAsIDIwLCAyMCwgMC4xMiknIDogJzAgMS41cHggMTJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSdcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVNlbGVjdDoge1xuICAgICAgZmlsbGVkOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDhcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUF2YXRhcjoge1xuICAgICAgY29sb3JEZWZhdWx0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFRUUnXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlCdXR0b246IHtcbiAgICAgIGNvbnRhaW5lZFNlY29uZGFyeToge1xuICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgNHB4IC0xcHggJHtwYWxldHRlW2NvbG9yXS5wYWxldHRlLnNlY29uZGFyeS5tYWlufWBcbiAgICAgIH0sXG4gICAgICBjb250YWluZWRQcmltYXJ5OiB7XG4gICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCA0cHggLTFweCAke3BhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWlufWBcbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgcGFkZGluZzogJzhweCAyNHB4J1xuICAgICAgfSxcbiAgICAgIHNpemVTbWFsbDoge1xuICAgICAgICBwYWRkaW5nOiAnN3B4IDEycHgnXG4gICAgICB9LFxuICAgICAgc2l6ZUxhcmdlOiB7XG4gICAgICAgIGhlaWdodDogNDgsXG4gICAgICAgIHBhZGRpbmc6ICc3cHggMzZweCdcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aVR5cG9ncmFwaHk6IHtcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBmb250V2VpZ2h0OiA2MDBcbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUlucHV0TGFiZWw6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgJyYkZm9jdXNlZCc6IHtcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZVtjb2xvcl0ucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICAnJiRzaHJpbmsnOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aUZpbGxlZElucHV0OiB7XG4gICAgICB1bmRlcmxpbmU6IHtcbiAgICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbXVsdGlsaW5lOiB7XG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICcmIHRleHRhcmVhJzoge1xuICAgICAgICAgIHBhZGRpbmdUb3A6IDI3XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSA9PT0gJ2RhcmsnID8gJ2hzbGEoMCwwJSwxMDAlLC4wOCknIDogJ3JnYmEoMCwwLDAsLjA2KScsXG4gICAgICAgICcmOmhvdmVyLCAmOmZvY3VzJzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogbW9kZSA9PT0gJ2RhcmsnID8gJ2hzbGEoMCwwJSwxMDAlLC4wOCknIDogJ3JnYmEoMCwwLDAsLjA2KScsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIE11aU91dGxpbmVkSW5wdXQ6IHtcbiAgICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiA0MFxuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9jZWFuQmx1ZToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQkJERUZCJyxcbiAgICAgICAgbWFpbjogJyMyMTk2RjMnLFxuICAgICAgICBkYXJrOiAnIzBENDdBMScsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0IyRUJGMicsXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcbiAgICAgICAgZGFyazogJyMwMDYwNjQnLFxuICAgICAgfSxcbiAgICAgIGFjY2VudDoge1xuICAgICAgICBsaWdodDogJyNFREU3RjYnLFxuICAgICAgICBtYWluOiAnIzY1MUZGRicsXG4gICAgICAgIGRhcms6ICcjNDUyN0EwJyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHZpb2xldGE6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0UxQkVFNycsXG4gICAgICAgIG1haW46ICcjOUMyN0IwJyxcbiAgICAgICAgZGFyazogJyM2QTFCOUEnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNEQ0VEQzgnLFxuICAgICAgICBtYWluOiAnIzhCQzM0QScsXG4gICAgICAgIGRhcms6ICcjNTU4QjJGJyxcbiAgICAgIH0sXG4gICAgICBhY2NlbnQ6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkZFQ0IzJyxcbiAgICAgICAgbWFpbjogJyNGRkMxMDcnLFxuICAgICAgICBkYXJrOiAnI0ZGNkYwMCcsXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjbG91ZDoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQjNFNUZDJyxcbiAgICAgICAgbWFpbjogJyMwM0E5RjQnLFxuICAgICAgICBkYXJrOiAnIzAxNTc5QicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRTBCMicsXG4gICAgICAgIG1haW46ICcjRkY5ODAwJyxcbiAgICAgICAgZGFyazogJyNFNjUxMDAnLFxuICAgICAgfSxcbiAgICAgIGFjY2VudDoge1xuICAgICAgICBsaWdodDogJyNDNUNBRTknLFxuICAgICAgICBtYWluOiAnIzMwNEZGRScsXG4gICAgICAgIGRhcms6ICcjMUEyMzdFJyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvaW56OiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNFMUJFRTcnLFxuICAgICAgICBtYWluOiAnIzlDMjdCMCcsXG4gICAgICAgIGRhcms6ICcjNkExQjlBJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkZFQ0IzJyxcbiAgICAgICAgbWFpbjogJyNGRkEwMDAnLFxuICAgICAgICBkYXJrOiAnI0ZGNkYwMCcsXG4gICAgICB9LFxuICAgICAgYWNjZW50OiB7XG4gICAgICAgIGxpZ2h0OiAnI0QxQzRFOScsXG4gICAgICAgIG1haW46ICcjNjczQUI3JyxcbiAgICAgICAgZGFyazogJyM0NTI3QTAnLFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbW9uZXk6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0M4RTZDOScsXG4gICAgICAgIG1haW46ICcjNENBRjUwJyxcbiAgICAgICAgZGFyazogJyMyRTdEMzInLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNGRkVDQjMnLFxuICAgICAgICBtYWluOiAnI0ZGQTAwMCcsXG4gICAgICAgIGRhcms6ICcjRkY2RjAwJyxcbiAgICAgIH0sXG4gICAgICBhY2NlbnQ6IHtcbiAgICAgICAgbGlnaHQ6ICcjQkJERUZCJyxcbiAgICAgICAgbWFpbjogJyMyMTk2RjMnLFxuICAgICAgICBkYXJrOiAnIzBENDdBMScsXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzbWFydDoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxuICAgICAgICBkYXJrOiAnIzAwODM4RicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRUNCMycsXG4gICAgICAgIG1haW46ICcjRkZBMDAwJyxcbiAgICAgICAgZGFyazogJyNGRjZGMDAnLFxuICAgICAgfSxcbiAgICAgIGFjY2VudDoge1xuICAgICAgICBsaWdodDogJyNGOEJCRDAnLFxuICAgICAgICBtYWluOiAnI0U5MUU2MycsXG4gICAgICAgIGRhcms6ICcjQUQxNDU3JyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZyZXNoOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNCM0U1RkMnLFxuICAgICAgICBtYWluOiAnIzAzQTlGNCcsXG4gICAgICAgIGRhcms6ICcjMDE1NzlCJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQzhFNkM5JyxcbiAgICAgICAgbWFpbjogJyM0Q0FGNTAnLFxuICAgICAgICBkYXJrOiAnIzFCNUUyMCcsXG4gICAgICB9LFxuICAgICAgYWNjZW50OiB7XG4gICAgICAgIGxpZ2h0OiAnI0Y4QkJEMCcsXG4gICAgICAgIG1haW46ICcjRTkxRTYzJyxcbiAgICAgICAgZGFyazogJyNBRDE0NTcnLFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgc3Vuc2V0OiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNCQkRFRkInLFxuICAgICAgICBtYWluOiAnIzIxOTZGMycsXG4gICAgICAgIGRhcms6ICcjMTU2NUMwJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkZFQ0IzJyxcbiAgICAgICAgbWFpbjogJyNGRkMxMDcnLFxuICAgICAgICBkYXJrOiAnI0ZGNkYwMCcsXG4gICAgICB9LFxuICAgICAgYWNjZW50OiB7XG4gICAgICAgIGxpZ2h0OiAnI0IyRUJGMicsXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcbiAgICAgICAgZGFyazogJyMwMDgzOEYnLFxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcm9zZToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRjhCQkQwJyxcbiAgICAgICAgbWFpbjogJyNFOTFFNjMnLFxuICAgICAgICBkYXJrOiAnI0FEMTQ1NycsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRTBCMicsXG4gICAgICAgIG1haW46ICcjRkY5ODAwJyxcbiAgICAgICAgZGFyazogJyNFNjUxMDAnLFxuICAgICAgfSxcbiAgICAgIGFjY2VudDoge1xuICAgICAgICBsaWdodDogJyNCMkVCRjInLFxuICAgICAgICBtYWluOiAnIzAwQkNENCcsXG4gICAgICAgIGRhcms6ICcjMDA2MDY0JyxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1pbnQ6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0IzRTVGQycsXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcbiAgICAgICAgZGFyazogJyMwMTU3OUInLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNDOEU2QzknLFxuICAgICAgICBtYWluOiAnIzRDQUY1MCcsXG4gICAgICAgIGRhcms6ICcjMkU3RDMyJyxcbiAgICAgIH0sXG4gICAgICBhY2NlbnQ6IHtcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxuICAgICAgICBkYXJrOiAnIzAwODM4RicsXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBqb2tlcjoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRDFDNEU5JyxcbiAgICAgICAgbWFpbjogJyM2NzNBQjcnLFxuICAgICAgICBkYXJrOiAnIzMxMUI5MicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0IyRUJGMicsXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcbiAgICAgICAgZGFyazogJyMwMDYwNjQnLFxuICAgICAgfSxcbiAgICAgIGFjY2VudDoge1xuICAgICAgICBsaWdodDogJyNGOEJCRDAnLFxuICAgICAgICBtYWluOiAnI0U5MUU2MycsXG4gICAgICAgIGRhcms6ICcjQUQxNDU3JyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzcy1ydGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b3AtbG9hZGluZy1iYXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==