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
      span: 12,
      offset: 2
    },
    sm: {
      span: 12,
      offset: 3
    },
    md: {
      span: 8,
      offset: 4
    }
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 16
  }
};
var btnLayout = {
  wrapperCol: {
    offset: 6,
    span: 8
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
      lineNumber: 65,
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
      lineNumber: 73,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_ant_design_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 32
      },
      __self: _this
    }),
    placeholder: "Username",
    value: email,
    onChange: onChangeEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
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
      lineNumber: 88,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    prefix: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_ant_design_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "site-form-item-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
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
      lineNumber: 97,
      columnNumber: 17
    },
    __self: _this
  })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tailLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
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
      lineNumber: 108,
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
      lineNumber: 114,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 42
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 45
    },
    __self: _this
  }, "\uD68C\uC6D0\uAC00\uC785"))))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, btnLayout, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_GoogleLoginBtn__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_FacebookLoginBtn__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsibGF5b3V0Iiwid3JhcHBlckNvbCIsInhzIiwic3BhbiIsIm9mZnNldCIsInNtIiwibWQiLCJ0YWlsTGF5b3V0IiwiYnRuTGF5b3V0IiwiTG9naW5Gb3JtIiwiUm91dGVyIiwidXNlUm91dGVyIiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VTdGF0ZSIsImJhc2ljQnV0dG9uQ2xpY2tlZCIsInNldEJhc2ljQnV0dG9uQ2xpY2tlZCIsInVzZUVmZmVjdCIsImlkIiwiYWxlcnQiLCJyZXBsYWNlIiwib25DbGlja0Jhc2ljQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJvblN1Ym1pdEZvcm0iLCJ0eXBlIiwiTE9HX0lOX1JFUVVFU1QiLCJkYXRhIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJib3JkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRztBQUNYQyxZQUFVLEVBQUU7QUFDUkMsTUFBRSxFQUFFO0FBQUVDLFVBQUksRUFBRSxFQUFSO0FBQVlDLFlBQU0sRUFBRTtBQUFwQixLQURJO0FBRVJDLE1BQUUsRUFBRTtBQUFFRixVQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUU7QUFBcEIsS0FGSTtBQUdSRSxNQUFFLEVBQUU7QUFBRUgsVUFBSSxFQUFFLENBQVI7QUFBV0MsWUFBTSxFQUFFO0FBQW5CO0FBSEk7QUFERCxDQUFm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QixTQUFLLEVBQUU7QUFBRVMsWUFBTSxFQUFFO0FBQVYsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUksNERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRyw0REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFILENBQXJCLENBUkosQ0FESixDQXpDSixFQXVESSw0REFBQyx5Q0FBRCxDQUFNLElBQU4seUZBQWVqQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDSSw0REFBQyx3Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksNERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksNERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosQ0F2REosQ0FESjtBQWtFSCxDQXJHRDs7R0FBTUMsUztVQUNhRSxzRCxFQUVKRSx1RCxFQUNVQSx1RCxFQUNGQSx1RCxFQUNGTSx1RCxFQUNjQyx1RCxFQUNNQSx1RDs7O0tBUm5DWCxTO0FBc0dTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4yYjlhODhmYjdkYjNlOWE4ZWMyNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBSb3csIERpdmlkZXIgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHtcclxuICAgIGRlZmF1bHQgYXMgVXNlck91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1VzZXJPdXRsaW5lZCc7XHJcbmltcG9ydCB7XHJcbiAgICBkZWZhdWx0IGFzIExvY2tPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9Mb2NrT3V0bGluZWQnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPR19JTl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luQnRuIGZyb20gJy4vRmFjZWJvb2tMb2dpbkJ0bic7XHJcbmltcG9ydCBHb29nbGVMb2dpbkJ0biBmcm9tICcuL0dvb2dsZUxvZ2luQnRuJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5jb25zdCBsYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7XHJcbiAgICAgICAgeHM6IHsgc3BhbjogMTIsIG9mZnNldDogMiB9LFxyXG4gICAgICAgIHNtOiB7IHNwYW46IDEyLCBvZmZzZXQ6IDMgfSxcclxuICAgICAgICBtZDogeyBzcGFuOiA4LCBvZmZzZXQ6IDQgfSxcclxuICAgIH0sXHJcbn07XHJcbmNvbnN0IHRhaWxMYXlvdXQgPSB7XHJcbiAgICB3cmFwcGVyQ29sOiB7IG9mZnNldDogNiwgc3BhbjogMTYgfSxcclxufTtcclxuY29uc3QgYnRuTGF5b3V0ID0ge1xyXG4gICAgd3JhcHBlckNvbDogeyBvZmZzZXQ6IDYsIHNwYW46IDggfSxcclxufTtcclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuICAgIGNvbnN0IGxvZ0luTG9hZGluZyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubG9nSW5Mb2FkaW5nKTtcclxuICAgIGNvbnN0IGxvZ0luRXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmxvZ0luRXJyb3IpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgICBjb25zdCBbYmFzaWNCdXR0b25DbGlja2VkLCBzZXRCYXNpY0J1dHRvbkNsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWUgJiYgbWUuaWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ+uhnOq3uOyduCDspJHsnoXri4jri6QuIOuplOyduO2OmOydtOyngOuhnCDsnbTrj5ntlanri4jri6QuJyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7Ly9wdXNo64qUIOuSpOuhnOqwgOq4sCDtlZjrqbQg7Z6I7Iqk7Yag66as6rCAIOuCqOyVhOyeiOyngOunjCByZXBsYWNl64qUIOyngOybjOynkFxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvZ0luRXJyb3IpIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrQmFzaWNCdXR0b24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0QmFzaWNCdXR0b25DbGlja2VkKHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoYmFzaWNCdXR0b25DbGlja2VkKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlbWFpbCwgcGFzc3dvcmQgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2VtYWlsLCBwYXNzd29yZCwgYmFzaWNCdXR0b25DbGlja2VkXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgey4uLmxheW91dH1cclxuICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBiYXNpY0J1dHRvbkNsaWNrZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciB1c2VybmFtZSEnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcHJlZml4PXs8VXNlck91dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogYmFzaWNCdXR0b25DbGlja2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcHJlZml4PXs8TG9ja091dGxpbmVkIGNsYXNzTmFtZT1cInNpdGUtZm9ybS1pdGVtLWljb25cIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSB7Li4udGFpbExheW91dH0gPlxyXG4gICAgICAgICAgICAgICAgPFJvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9nSW5Mb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrQmFzaWNCdXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgc3R5bGU9e3sgYm9yZGVyOiAnbm9uZScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPjxhPjxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgICA8L0J1dHRvbj48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtIHsuLi5idG5MYXlvdXR9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdvb2dsZUxvZ2luQnRuIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rTG9naW5CdG4gLz5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG5cclxuXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9