webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ "./node_modules/@ant-design/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/LockOutlined */ "./node_modules/@ant-design/icons/LockOutlined.js");
/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FacebookLoginBtn */ "./components/FacebookLoginBtn.js");
/* harmony import */ var _GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GoogleLoginBtn */ "./components/GoogleLoginBtn.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./style */ "./components/style.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");




var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();













var Title = antd__WEBPACK_IMPORTED_MODULE_3__["Typography"].Title;

var LoginForm = function LoginForm() {
  _s();

  var logInLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user.logInLoading;
  });
  var logInError = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.user.logInError;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      basicButtonClicked = _useState[0],
      setBasicButtonClicked = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (logInError) alert(logInError);
  }, [logInError]);
  var onClickBasicButton = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setBasicButtonClicked(true);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (basicButtonClicked) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_9__["LOG_IN_REQUEST"],
        data: {
          email: email,
          password: password
        }
      });
    }
  }, [email, password, basicButtonClicked]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_12__["ImageLayout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "loginForm-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(Title, {
    level: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    },
    __self: _this
  }, "Y Millonga\uC5D0\uC11C \uB2F9\uC2E0\uC758 \uC18C\uC911\uD55C \uACBD\uD5D8\uC744 \uD568\uAED8 \uB098\uB220\uC8FC\uC138\uC694!")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "img-dancer-position-one",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("img", {
    width: 250,
    height: 250,
    src: "/images/dancer1.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("div", {
    className: "img-dancer-position-two",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("img", {
    width: 300,
    height: 300,
    src: "/images/dancer3.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    name: "basic-form",
    initialValues: {
      remember: true
    },
    onFinish: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "username",
    rules: [{
      required: basicButtonClicked,
      message: 'Please input your username!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 40
      },
      __self: _this
    }),
    placeholder: "Username",
    value: email,
    onChange: onChangeEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 25
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    name: "password",
    rules: [{
      required: basicButtonClicked,
      message: 'Please input your password!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 37
      },
      __self: _this
    }),
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: logInLoading,
    onClick: onClickBasicButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    },
    __self: _this
  }, "\uB85C\uADF8\uC778"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
    type: "vertical",
    style: {
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 29
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 29
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 50
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 53
    },
    __self: _this
  }, "\uD68C\uC6D0\uAC00\uC785"))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    justify: "center",
    wrap: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 25
    },
    __self: _this
  }, "  ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 62
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 29
    },
    __self: _this
  }))))));
};

_s(LoginForm, "HrNeogrQUQ/DTymUeOm5lhIM6D4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c;

$RefreshReg$(_c, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiVGl0bGUiLCJUeXBvZ3JhcGh5IiwiTG9naW5Gb3JtIiwibG9nSW5Mb2FkaW5nIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dJbkVycm9yIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJiYXNpY0J1dHRvbkNsaWNrZWQiLCJzZXRCYXNpY0J1dHRvbkNsaWNrZWQiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uQ2xpY2tCYXNpY0J1dHRvbiIsInVzZUNhbGxiYWNrIiwib25TdWJtaXRGb3JtIiwidHlwZSIsIkxPR19JTl9SRVFVRVNUIiwiZGF0YSIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiYm9yZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQywrQ0FBVSxDQUFDRCxLQUF6Qjs7QUFHQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBRXBCLE1BQU1DLFlBQVksR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILFlBQWY7QUFBQSxHQUFOLENBQWhDO0FBQ0EsTUFBTUksVUFBVSxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsVUFBZjtBQUFBLEdBQU4sQ0FBOUI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUpvQixrQkFLV0MsK0RBQVEsQ0FB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QUE7QUFBQTtBQUFBO0FBQUEsZ0NBQUgsQ0FBckIsQ0FSSixDQURKLENBeENKLEVBc0RJLDREQUFDLHlDQUFELENBQU0sSUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksNERBQUMsd0NBQUQ7QUFBSyxXQUFPLEVBQUMsUUFBYjtBQUFzQixRQUFJLEVBQUUsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFxQyw0REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXJDLEVBQ0ksNERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0F0REosQ0FESixDQWxCSixDQURKO0FBcUZILENBakhEOztHQUFNM0IsUztVQUVtQkUsdUQsRUFDRkEsdUQsRUFDRkssdUQsRUFDY0MsdUQsRUFDTUEsdUQ7OztLQU5uQ1IsUztBQWtIU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZDkwNGI3N2IwMmM5MzQ3MzUyZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgUm93LCBEaXZpZGVyLCBUeXBvZ3JhcGh5IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgICBkZWZhdWx0IGFzIFVzZXJPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9Vc2VyT3V0bGluZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgZGVmYXVsdCBhcyBMb2NrT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvTG9ja091dGxpbmVkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbkJ0biBmcm9tICcuL0ZhY2Vib29rTG9naW5CdG4nO1xyXG5pbXBvcnQgR29vZ2xlTG9naW5CdG4gZnJvbSAnLi9Hb29nbGVMb2dpbkJ0bic7XHJcblxyXG5pbXBvcnQgeyBJbWFnZUxheW91dCB9IGZyb20gJy4vc3R5bGUnO1xyXG5cclxuY29uc3QgVGl0bGUgPSBUeXBvZ3JhcGh5LlRpdGxlO1xyXG5cclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBsb2dJbkxvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmxvZ0luTG9hZGluZyk7XHJcbiAgICBjb25zdCBsb2dJbkVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5sb2dJbkVycm9yKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2Jhc2ljQnV0dG9uQ2xpY2tlZCwgc2V0QmFzaWNCdXR0b25DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobG9nSW5FcnJvcikgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tCYXNpY0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRCYXNpY0J1dHRvbkNsaWNrZWQodHJ1ZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChiYXNpY0J1dHRvbkNsaWNrZWQpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9HX0lOX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbZW1haWwsIHBhc3N3b3JkLCBiYXNpY0J1dHRvbkNsaWNrZWRdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SW1hZ2VMYXlvdXQgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbkZvcm0tdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxUaXRsZSBsZXZlbD17M30+WSBNaWxsb25nYeyXkOyEnCDri7nsi6DsnZgg7IaM7KSR7ZWcIOqyve2XmOydhCDtlajqu5gg64KY64ig7KO87IS47JqUITwvVGl0bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW1nLWRhbmNlci1wb3NpdGlvbi1vbmUnPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9kYW5jZXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvPjwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ltZy1kYW5jZXItcG9zaXRpb24tdHdvJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZGFuY2VyMy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLz48L2Rpdj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRGb3JtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogYmFzaWNCdXR0b25DbGlja2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBwcmVmaXg9ezxVc2VyT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBiYXNpY0J1dHRvbkNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9ezxMb2NrT3V0bGluZWQgY2xhc3NOYW1lPVwic2l0ZS1mb3JtLWl0ZW0taWNvblwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0Jhc2ljQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiIHdyYXA9e2ZhbHNlfT4gIDxHb29nbGVMb2dpbkJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5CdG4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==