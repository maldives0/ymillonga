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
    placement: "bottom",
    title: " \uC548\uB4DC\uB85C\uC774\uB4DC , iOS \uBC0F OS X \uC0AC\uC6A9\uC790\uB294 \uD06C\uB86C \uBE0C\uB77C\uC6B0\uC800\uB85C \uAD6C\uAE00\uB85C \uB85C\uADF8\uC778\uD558\uAE30 \uAE30\uB2A5\uC744 \uC774\uC6A9\uD574\uC8FC\uC138\uC694.",
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
      lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Hb29nbGVMb2dpbkJ0bi5qcyJdLCJuYW1lcyI6WyJHb29nbGVMb2dpbkJ0biIsInJvdXRlciIsInVzZVJvdXRlciIsIm9uQ2xpY2tHb29nbGVMb2dpbiIsInVzZUNhbGxiYWNrIiwicHVzaCIsImJhY2tVcmwiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUFBOztBQUV6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0gsVUFBTSxDQUFDSSxJQUFQLFdBQWVDLHNEQUFmO0FBRUgsR0FIcUMsRUFHbkMsRUFIbUMsQ0FBdEM7QUFJQSxTQUNJLDJEQUFDLDRDQUFEO0FBQ0ksYUFBUyxFQUFDLFFBRGQ7QUFFSSxTQUFLLEVBQUMsbU9BRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLDJEQUFDLDRFQUFEO0FBQ0ksV0FBTyxFQUFFSCxrQkFEYjtBQUVJLFNBQUssRUFBQyxRQUZWO0FBR0ksUUFBSSxFQUFDLE1BSFQ7QUFJSSxRQUFJLEVBQUMsUUFKVDtBQUtJLFNBQUssRUFBRTtBQUFFSSxXQUFLLEVBQUU7QUFBVCxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKO0FBYUgsQ0FwQkQ7O0dBQU1QLGM7VUFFYUUscUQ7OztLQUZiRixjO0FBc0JTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4xNWMzMGE5MjViMGRhNzQ3ODM2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbkJ1dHRvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1sb2dpbi1idXR0b25zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuY29uc3QgR29vZ2xlTG9naW5CdG4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBvbkNsaWNrR29vZ2xlTG9naW4gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYCR7YmFja1VybH0vdXNlci9nb29nbGVgKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiIOyViOuTnOuhnOydtOuTnCAsIGlPUyDrsI8gT1MgWCDsgqzsmqnsnpDripQg7YGs66GsIOu4jOudvOyasOyggOuhnCDqtazquIDroZwg66Gc6re47J247ZWY6riwIOq4sOuKpeydhCDsnbTsmqntlbTso7zshLjsmpQuXCI+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0dvb2dsZUxvZ2lufVxyXG4gICAgICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cIjQwcHhcIlxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIkdvb2dsZVwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE1MHB4JyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvVG9vbHRpcD5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVMb2dpbkJ0bjsiXSwic291cmNlUm9vdCI6IiJ9