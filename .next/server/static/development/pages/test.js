module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





var _jsxFileName = "/Users/kingrayhan/projects/next-styled-components-tailwind-twin-starter/components/Navbar.js";


var StyledNavbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Navbar__StyledNavbar",
  componentId: "sc-16iebmd-0"
})(["height:55px;", ""], {
  "--bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--bg-opacity))",
  "boxShadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  "display": "flex",
  "alignItems": "center"
});
var StyledNavbarInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "Navbar__StyledNavbarInner",
  componentId: "sc-16iebmd-1"
})(["", " .logo{", "}.navlinks{a{", " &.active{", "}&:last-child{", "}}}"], {
  "display": "grid",
  "gridTemplateColumns": "repeat(4, minmax(0, 1fr))",
  "columnGap": "2rem",
  "alignItems": "center",
  "--bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--bg-opacity))",
  "height": "3rem"
}, {
  "fontSize": "1.25rem",
  "textTransform": "uppercase",
  "fontWeight": "700"
}, {
  "textTransform": "uppercase",
  "marginRight": "0.5rem",
  "fontSize": "0.875rem"
}, {
  "fontWeight": "700"
}, {
  "marginRight": "0"
});

var _StyledStyledNavbarInner = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(StyledNavbarInner).withConfig({
  displayName: "Navbar___StyledStyledNavbarInner",
  componentId: "sc-16iebmd-2"
})({
  "width": "100%",
  "@media (min-width: 640px)": {
    "maxWidth": "640px"
  },
  "@media (min-width: 768px)": {
    "maxWidth": "768px"
  },
  "@media (min-width: 1024px)": {
    "maxWidth": "1024px"
  },
  "@media (min-width: 1280px)": {
    "maxWidth": "1280px"
  },
  "margin": "auto"
});

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "Navbar___StyledDiv",
  componentId: "sc-16iebmd-3"
})({
  "gridColumn": "span 2 / span 2"
});

var _StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("input").withConfig({
  displayName: "Navbar___StyledInput",
  componentId: "sc-16iebmd-4"
})({
  "borderWidth": "1px",
  "--border-opacity": "1",
  "borderColor": "rgba(203, 213, 224, var(--border-opacity))",
  ":focus": {
    "--border-opacity": "1",
    "borderColor": "rgba(45, 55, 72, var(--border-opacity))",
    "outline": 0
  },
  "padding": "0.25rem",
  "width": "100%"
});

var _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "Navbar___StyledDiv2",
  componentId: "sc-16iebmd-5"
})({
  "display": "none",
  "@media (min-width: 768px)": {
    "display": "block"
  }
});

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledNavbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledStyledNavbarInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Logo")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledInput, {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv2, {
    className: "navlinks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "active",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Portfolios"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Contacts"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");







var _jsxFileName = "/Users/kingrayhan/projects/next-styled-components-tailwind-twin-starter/pages/test.js";



var StyledRoot = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "test__StyledRoot",
  componentId: "r3jxbl-0"
})(["", ""], {
  "width": "100%",
  "@media (min-width: 640px)": {
    "maxWidth": "640px",
    "gridTemplateColumns": "repeat(1, minmax(0, 1fr))"
  },
  "@media (min-width: 768px)": {
    "maxWidth": "768px",
    "gridTemplateColumns": "repeat(2, minmax(0, 1fr))"
  },
  "@media (min-width: 1024px)": {
    "maxWidth": "1024px",
    "gridTemplateColumns": "repeat(4, minmax(0, 1fr))"
  },
  "@media (min-width: 1280px)": {
    "maxWidth": "1280px"
  },
  "margin": "auto",
  "display": "grid",
  "gap": "2rem",
  "paddingTop": "2rem",
  "paddingBottom": "2rem"
});
var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "test__StyledCard",
  componentId: "r3jxbl-1"
})(["", " img{", "}h1{", "}p{", "}.cat{", "}"], {
  "boxShadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  ":hover": {
    "boxShadow": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
  },
  "borderRadius": "0.5rem",
  "--bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--bg-opacity))",
  "overflow": "hidden",
  "@media (min-width: 640px)": {
    "marginLeft": "0.75rem",
    "marginRight": "0.75rem"
  },
  "@media (min-width: 768px)": {
    "marginLeft": "0",
    "marginRight": "0"
  }
}, {
  "height": "16rem",
  "width": "100%",
  "objectFit": "cover"
}, {
  "fontSize": "1.25rem",
  "textTransform": "uppercase",
  "paddingTop": "0.5rem",
  "paddingBottom": "0.5rem"
}, {
  "fontSize": "0.875rem",
  "--text-opacity": "1",
  "color": "rgba(113, 128, 150, var(--text-opacity))"
}, {
  "--text-opacity": "1",
  "color": "rgba(102, 126, 234, var(--text-opacity))",
  "textTransform": "uppercase",
  "fontSize": "0.75rem",
  "fontWeight": "700"
});

var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "test___StyledDiv",
  componentId: "r3jxbl-2"
})({
  "padding": "1.25rem"
});

var _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "test___StyledDiv2",
  componentId: "r3jxbl-3"
})({
  "padding": "1.25rem"
});

var _StyledDiv3 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "test___StyledDiv3",
  componentId: "r3jxbl-4"
})({
  "padding": "1.25rem"
});

var _StyledDiv4 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "test___StyledDiv4",
  componentId: "r3jxbl-5"
})({
  "padding": "1.25rem"
});

var _StyledDiv5 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "test___StyledDiv5",
  componentId: "r3jxbl-6"
})({
  "padding": "1.25rem"
});

var _StyledDiv6 = styled_components__WEBPACK_IMPORTED_MODULE_0___default()("div").withConfig({
  displayName: "test___StyledDiv6",
  componentId: "r3jxbl-7"
})({
  "padding": "1.25rem"
});

var test = function test() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRoot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "cart-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Cart title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "reactjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo debitis architecto dolorum facere, commodi modi pariatur beatae dolor repellendus accusantium veritatis aperiam facilis minus hic, doloribus nemo vero nostrum?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1556742400-b5b7c5121f99?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    alt: "cart-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Cart title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "reactjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo debitis architecto dolorum facere, commodi modi pariatur beatae dolor repellendus accusantium veritatis aperiam facilis minus hic, doloribus nemo vero nostrum?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1556742526-795a8eac090e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    alt: "cart-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Cart title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "reactjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo debitis architecto dolorum facere, commodi modi pariatur beatae dolor repellendus accusantium veritatis aperiam facilis minus hic, doloribus nemo vero nostrum?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1477761614229-3daf5798eedd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    alt: "cart-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv4, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Cart title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "reactjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo debitis architecto dolorum facere, commodi modi pariatur beatae dolor repellendus accusantium veritatis aperiam facilis minus hic, doloribus nemo vero nostrum?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "cart-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv5, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Cart title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "reactjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo debitis architecto dolorum facere, commodi modi pariatur beatae dolor repellendus accusantium veritatis aperiam facilis minus hic, doloribus nemo vero nostrum?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    alt: "cart-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StyledDiv6, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Cart title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "cat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "reactjs"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, explicabo debitis architecto dolorum facere, commodi modi pariatur beatae dolor repellendus accusantium veritatis aperiam facilis minus hic, doloribus nemo vero nostrum?")))));
};

/* harmony default export */ __webpack_exports__["default"] = (test);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kingrayhan/projects/next-styled-components-tailwind-twin-starter/pages/test.js */"./pages/test.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=test.js.map