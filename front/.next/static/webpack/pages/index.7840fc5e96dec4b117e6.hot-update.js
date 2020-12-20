webpackHotUpdate_N_E("pages/index",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/SettingOutlined */ "./node_modules/@ant-design/icons/SettingOutlined.js");
/* harmony import */ var _ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/LogoutOutlined */ "./node_modules/@ant-design/icons/LogoutOutlined.js");
/* harmony import */ var _ant_design_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./components/style.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\UserProfile.js",
    _this = undefined,
    _s = $RefreshSig$();












var UserProfile = function UserProfile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.me;
  });
  var changeNicknameDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.changeNicknameDone;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editNickname = _useState[0],
      setEditNickname = _useState[1];

  var onClickEditNickname = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setEditNickname(function (prev) {
      return !prev;
    });
  }, []);
  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOG_OUT_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (changeNicknameDone) {
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('닉네임이 변경되었습니다.');
      setEditNickname(function (prev) {
        return !prev;
      });
    }
  }, [changeNicknameDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_9__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    key: "".concat(me.id, "_profile"),
    style: {
      width: '300',
      marginTop: 16
    },
    type: "inner",
    extra: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uB85C\uADF8\uC544\uC6C3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "logout",
      onClick: onLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      },
      __self: _this
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uB2C9\uB124\uC784 \uBC14\uAFB8\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      },
      __self: _this
    }, "   ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "edit-nickname",
      onClick: onClickEditNickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 49
      },
      __self: _this
    }))],
    actions: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_twit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 53
      },
      __self: _this
    }, "\uAC8C\uC2DC\uAE00", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 59
      },
      __self: _this
    }), me.Posts.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_following"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/posts/related",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC789", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 35
      },
      __self: _this
    }), me.Followings.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_follower"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC5B4", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 35
      },
      __self: _this
    }), me.Followers.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_ignoring"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      },
      __self: _this
    }, "\uCC28\uB2E8\uC790", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 35
      },
      __self: _this
    }), me.Ignorings.length)))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 26
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 53
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 56
      },
      __self: _this
    }, me.nickname[0]))),
    title: me.nickname,
    style: {
      marginBottom: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    },
    __self: _this
  }), editNickname && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 34
    },
    __self: _this
  })));
};

_s(UserProfile, "puCO16Z830HhJwLOpwgXS7kI4bQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY2hhbmdlTmlja25hbWVEb25lIiwidXNlU3RhdGUiLCJlZGl0Tmlja25hbWUiLCJzZXRFZGl0Tmlja25hbWUiLCJvbkNsaWNrRWRpdE5pY2tuYW1lIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Mb2dvdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwidXNlRWZmZWN0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJpZCIsIndpZHRoIiwibWFyZ2luVG9wIiwiUG9zdHMiLCJsZW5ndGgiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiSWdub3JpbmdzIiwibmlja25hbWUiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsRUFBZjtBQUFBLEdBQU4sQ0FBdEI7QUFFQSxNQUFNSSxrQkFBa0IsR0FBR0gsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLGtCQUFmO0FBQUEsR0FBTixDQUF0Qzs7QUFKc0Isa0JBS2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FMMUI7QUFBQSxNQUtmQyxZQUxlO0FBQUEsTUFLREMsZUFMQzs7QUFPdEIsTUFBTUMsbUJBQW1CLEdBQUdDLHlE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WSxFQUFFO0FBQWhCLEtBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDSixFQWlES3BCLFlBQVksSUFBSSw0REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRyQixDQURKLENBREo7QUF3REgsQ0EvRUQ7O0dBQU1ULFc7VUFDZUUsdUQsRUFDTkUsdUQsRUFFZ0JBLHVEOzs7S0FKekJKLFc7QUFnRlNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc4NDBmYzVlOTZkZWM0YjExN2U2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgRGl2aWRlciwgVG9vbHRpcCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1NldHRpbmdPdXRsaW5lZCc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nb3V0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9Mb2dvdXRPdXRsaW5lZCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IENhcmRXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZURvbmUpO1xyXG4gICAgY29uc3QgW2VkaXROaWNrbmFtZSwgc2V0RWRpdE5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrRWRpdE5pY2tuYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXROaWNrbmFtZSgocHJldikgPT4gIXByZXYpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1RcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFuZ2VOaWNrbmFtZURvbmUpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfri4nrhKTsnoTsnbQg67OA6rK965CY7JeI7Iq164uI64ukLicpXHJcbiAgICAgICAgICAgIHNldEVkaXROaWNrbmFtZSgocHJldikgPT4gIXByZXYpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NoYW5nZU5pY2tuYW1lRG9uZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake21lLmlkfV9wcm9maWxlYH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzAwJywgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgIGV4dHJhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLroZzqt7jslYTsm4NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ291dE91dGxpbmVkIGtleT1cImxvZ291dFwiIG9uQ2xpY2s9e29uTG9nb3V0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLri4nrhKTsnoQg67CU6r646riwXCI+ICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJlZGl0LW5pY2tuYW1lXCIgb25DbGljaz17b25DbGlja0VkaXROaWNrbmFtZX0gLz48L1Rvb2x0aXA+XHJcblxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X3R3aXRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvdXNlci8ke21lLmlkfWB9PjxhPuqyjOyLnOq4gDxiciAvPnttZS5Qb3N0cy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1fZm9sbG93aW5nYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Bvc3RzL3JlbGF0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2MlOuhnOyeiTxiciAvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV9mb2xsb3dlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2MlOuhnOyWtDxiciAvPnttZS5Gb2xsb3dlcnMubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X2lnbm9yaW5nYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+7LCo64uo7J6QPGJyIC8+e21lLklnbm9yaW5ncy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+PGE+PEF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWUubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPjwvTGluaz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2VkaXROaWNrbmFtZSAmJiA8Tmlja25hbWVFZGl0Rm9ybSAvPn1cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7ICJdLCJzb3VyY2VSb290IjoiIn0=