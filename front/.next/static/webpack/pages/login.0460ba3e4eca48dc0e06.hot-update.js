webpackHotUpdate_N_E("pages/login",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons/UserOutlined */ "./node_modules/@ant-design/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/LockOutlined */ "./node_modules/@ant-design/icons/LockOutlined.js");
/* harmony import */ var _ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FacebookLoginBtn */ "./components/FacebookLoginBtn.js");
/* harmony import */ var _GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GoogleLoginBtn */ "./components/GoogleLoginBtn.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");




var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\LoginForm.js",
    _this = undefined,
    _s = $RefreshSig$();













var layout = {
  wrapperCol: {
    xs: {
      span: 1,
      offset: 2
    },
    sm: {
      span: 12,
      offset: 3
    },
    md: {
      span: 24,
      offset: 4
    }
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 18
  }
};
var btnLayout = {
  wrapperCol: {
    xs: {
      span: 12,
      offset: 2
    },
    sm: {
      span: 18,
      offset: 3
    }
  }
};

var LoginForm = function LoginForm() {
  _s();

  var Router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.me;
  });
  var logInLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.logInLoading;
  });
  var logInError = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"])(function (state) {
    return state.user.logInError;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      basicButtonClicked = _useState[0],
      setBasicButtonClicked = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (me && me.id) {
      alert('로그인 중입니다. 메인페이지로 이동합니다.');
      Router.replace('/'); //push는 뒤로가기 하면 히스토리가 남아있지만 replace는 지워짐
    }
  }, [me && me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (logInError) alert(logInError);
  }, [logInError]);
  var onClickBasicButton = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    setBasicButtonClicked(true);
  }, []);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (basicButtonClicked) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_10__["LOG_IN_REQUEST"],
        data: {
          email: email,
          password: password
        }
      });
    }
  }, [email, password, basicButtonClicked]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, layout, {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "username",
    rules: [{
      required: basicButtonClicked,
      message: 'Please input your username!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 32
      },
      __self: _this
    }),
    placeholder: "Username",
    value: email,
    onChange: onChangeEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    name: "password",
    rules: [{
      required: basicButtonClicked,
      message: 'Please input your password!'
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      },
      __self: _this
    }),
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: onChangePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tailLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: logInLoading,
    onClick: onClickBasicButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    },
    __self: _this
  }, "\uB85C\uADF8\uC778"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
    type: "vertical",
    style: {
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 42
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    },
    __self: _this
  }, "\uD68C\uC6D0\uAC00\uC785"))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, btnLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    },
    __self: _this
  }))));
};

_s(LoginForm, "Ds1Po/IpGMSoOAb5/TSsP67JeNk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_9__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsibGF5b3V0Iiwid3JhcHBlckNvbCIsInhzIiwic3BhbiIsIm9mZnNldCIsInNtIiwibWQiLCJ0YWlsTGF5b3V0IiwiYnRuTGF5b3V0IiwiTG9naW5Gb3JtIiwiUm91dGVyIiwidXNlUm91dGVyIiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VTdGF0ZSIsImJhc2ljQnV0dG9uQ2xpY2tlZCIsInNldEJhc2ljQnV0dG9uQ2xpY2tlZCIsInVzZUVmZmVjdCIsImlkIiwiYWxlcnQiLCJyZXBsYWNlIiwib25DbGlja0Jhc2ljQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJvblN1Ym1pdEZvcm0iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJkYXRhIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxZQUFVLEVBQUU7QUFDUkMsTUFBRSxFQUFFO0FBQUVDLFVBQUksRUFBRSxDQUFSO0FBQVdDLFlBQU0sRUFBRTtBQUFuQixLQURJO0FBRVJDLE1BQUUsRUFBRTtBQUFFRixVQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUU7QUFBcEIsS0FGSTtBQUdSRSxNQUFFLEVBQUU7QUFBRUgsVUFBSSxFQUFFLEVBQVI7QUFBWUMsWUFBTSxFQUFFO0FBQXBCO0FBSEk7QUFERCxDQUFm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RmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQU9JLDREQUFDLDRDQUFEO0FBQVMsUUFBSSxFQUFDLFVBQWQ7QUFBeUIsU0FBSyxFQUFFO0FBQUVTLFlBQU0sRUFBRTtBQUFWLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJLDREQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUcsNERBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FBSCxDQUFyQixDQVJKLENBREosQ0F6Q0osRUF1REksNERBQUMseUNBQUQsQ0FBTSxJQUFOLHlGQUFlakMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0ksNERBQUMsd0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLDREQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLDREQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBdkRKLENBREo7QUFrRUgsQ0FyR0Q7O0dBQU1DLFM7VUFDYUUsc0QsRUFFSkUsdUQsRUFDVUEsdUQsRUFDRkEsdUQsRUFDRk0sdUQsRUFDY0MsdUQsRUFDTUEsdUQ7OztLQVJuQ1gsUztBQXNHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMDQ2MGJhM2U0ZWNhNDhkYzBlMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgUm93LCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgICBkZWZhdWx0IGFzIFVzZXJPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9Vc2VyT3V0bGluZWQnO1xyXG5pbXBvcnQge1xyXG4gICAgZGVmYXVsdCBhcyBMb2NrT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvTG9ja091dGxpbmVkJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMT0dfSU5fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbkJ0biBmcm9tICcuL0ZhY2Vib29rTG9naW5CdG4nO1xyXG5pbXBvcnQgR29vZ2xlTG9naW5CdG4gZnJvbSAnLi9Hb29nbGVMb2dpbkJ0bic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuY29uc3QgbGF5b3V0ID0ge1xyXG4gICAgd3JhcHBlckNvbDoge1xyXG4gICAgICAgIHhzOiB7IHNwYW46IDEsIG9mZnNldDogMiB9LFxyXG4gICAgICAgIHNtOiB7IHNwYW46IDEyLCBvZmZzZXQ6IDMgfSxcclxuICAgICAgICBtZDogeyBzcGFuOiAyNCwgb2Zmc2V0OiA0IH0sXHJcbiAgICB9LFxyXG59O1xyXG5jb25zdCB0YWlsTGF5b3V0ID0ge1xyXG4gICAgd3JhcHBlckNvbDogeyBvZmZzZXQ6IDYsIHNwYW46IDE4IH0sXHJcbn07XHJcbmNvbnN0IGJ0bkxheW91dCA9IHtcclxuICAgIHdyYXBwZXJDb2w6IHtcclxuICAgICAgICB4czogeyBzcGFuOiAxMiwgb2Zmc2V0OiAyIH0sXHJcbiAgICAgICAgc206IHsgc3BhbjogMTgsIG9mZnNldDogMyB9LFxyXG5cclxuICAgIH0sXHJcbn07XHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCBsb2dJbkxvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmxvZ0luTG9hZGluZyk7XHJcbiAgICBjb25zdCBsb2dJbkVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5sb2dJbkVycm9yKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW2Jhc2ljQnV0dG9uQ2xpY2tlZCwgc2V0QmFzaWNCdXR0b25DbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lICYmIG1lLmlkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfroZzqt7jsnbgg7KSR7J6F64uI64ukLiDrqZTsnbjtjpjsnbTsp4DroZwg7J2064+Z7ZWp64uI64ukLicpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpOy8vcHVzaOuKlCDrkqTroZzqsIDquLAg7ZWY66m0IO2eiOyKpO2GoOumrOqwgCDrgqjslYTsnojsp4Drp4wgcmVwbGFjZeuKlCDsp4Dsm4zsp5BcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2dJbkVycm9yKSBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0Jhc2ljQnV0dG9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEJhc2ljQnV0dG9uQ2xpY2tlZCh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJhc2ljQnV0dG9uQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZW1haWwsIHBhc3N3b3JkIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtlbWFpbCwgcGFzc3dvcmQsIGJhc2ljQnV0dG9uQ2xpY2tlZF0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIHsuLi5sYXlvdXR9XHJcbiAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICAgICAgICAgIHJlbWVtYmVyOiB0cnVlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXRGb3JtfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogYmFzaWNCdXR0b25DbGlja2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgdXNlcm5hbWUhJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHByZWZpeD17PFVzZXJPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGJhc2ljQnV0dG9uQ2xpY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHByZWZpeD17PExvY2tPdXRsaW5lZCBjbGFzc05hbWU9XCJzaXRlLWZvcm0taXRlbS1pY29uXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0gey4uLnRhaWxMYXlvdXR9ID5cclxuICAgICAgICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvZ0luTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja0Jhc2ljQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGJvcmRlcjogJ25vbmUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj48YT48QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgPC9CdXR0b24+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSB7Li4uYnRuTGF5b3V0fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb29nbGVMb2dpbkJ0biAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0xvZ2luQnRuIC8+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxuXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==