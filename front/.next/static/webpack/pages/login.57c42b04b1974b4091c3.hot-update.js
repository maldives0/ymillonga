webpackHotUpdate_N_E("pages/login",{

/***/ "./components/GoogleLoginBtn.js":
/*!**************************************!*\
  !*** ./components/GoogleLoginBtn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-social-login-buttons */ "./node_modules/react-social-login-buttons/dist/index.js");
/* harmony import */ var react_social_login_buttons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\GoogleLoginBtn.js",
    _this = undefined,
    _s = $RefreshSig$();








var GoogleLoginBtn = function GoogleLoginBtn() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var onClickGoogleLogin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    router.push("".concat(_config_config__WEBPACK_IMPORTED_MODULE_4__["backUrl"], "/user/google"));
  }, []);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: " \uC548\uB4DC\uB85C\uC774\uB4DC , iOS \uBC0F OS X \uC0AC\uC6A9\uC790\uB294 \uD06C\uB86C \uBE0C\uB77C\uC6B0\uC800\uB85C \uC774 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD574\uC8FC\uC138\uC694.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_social_login_buttons__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginButton"], {
    onClick: onClickGoogleLogin,
    align: "center",
    size: "40px",
    text: "Google",
    style: {
      width: '150px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    },
    __self: _this
  }));
};

_s(GoogleLoginBtn, "oL1pTRyyPjV44TGg63AHWRaUsRo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = GoogleLoginBtn;
/* harmony default export */ __webpack_exports__["default"] = (GoogleLoginBtn);

var _c;

$RefreshReg$(_c, "GoogleLoginBtn");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbkJ0bi5qcyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkJ0biIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tHb29nbGVMb2dpbiIsInVzZUNhbGxiYWNrIiwicHVzaCIsImJhY2tVcmwiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUV6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0gsVUFBTSxDQUFDSSxJQUFQLFdBQWVDLHNEQUFmO0FBRUgsR0FIcUMsRUFHbkMsRUFIbUMsQ0FBdEM7QUFJQSxTQUNJLDJEQUFDLDRDQUFEO0FBQVMsU0FBSyxFQUFDLHdMQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSwyREFBQyw0RUFBRDtBQUNJLFdBQU8sRUFBRUgsa0JBRGI7QUFFSSxTQUFLLEVBQUMsUUFGVjtBQUdJLFFBQUksRUFBQyxNQUhUO0FBSUksUUFBSSxFQUFDLFFBSlQ7QUFLSSxTQUFLLEVBQUU7QUFBRUksV0FBSyxFQUFFO0FBQVQsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQVdILENBbEJEOztHQUFNUCxjO1VBRWFFLHFEOzs7S0FGYkYsYztBQW9CU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uNTdjNDJiMDRiMTk3NGI0MDkxYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR29vZ2xlTG9naW5CdXR0b24gfSBmcm9tICdyZWFjdC1zb2NpYWwtbG9naW4tYnV0dG9ucyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IEdvb2dsZUxvZ2luQnRuID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgb25DbGlja0dvb2dsZUxvZ2luID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAke2JhY2tVcmx9L3VzZXIvZ29vZ2xlYCk7XHJcblxyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIiDslYjrk5zroZzsnbTrk5wgLCBpT1Mg67CPIE9TIFgg7IKs7Jqp7J6Q64qUIO2BrOuhrCDruIzrnbzsmrDsoIDroZwg7J20IOq4sOuKpeydhCDsnbTsmqntlbTso7zshLjsmpQuXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0dvb2dsZUxvZ2lufVxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjQwcHhcIlxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIkdvb2dsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE1MHB4JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVMb2dpbkJ0bjsiXSwic291cmNlUm9vdCI6IiJ9