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
      setEditNickname(false);
    }
  }, [changeNicknameDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_9__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
        lineNumber: 40,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_LogoutOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "logout",
      onClick: onLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      },
      __self: _this
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uB2C9\uB124\uC784 \uBC14\uAFB8\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      },
      __self: _this
    }, "   ", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "edit-nickname",
      onClick: onClickEditNickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 49
      },
      __self: _this
    }))],
    actions: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_twit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 53
      },
      __self: _this
    }, "\uAC8C\uC2DC\uAE00", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 59
      },
      __self: _this
    }), me.Posts.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_following"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/posts/related",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC789", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 35
      },
      __self: _this
    }), me.Followings.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_follower"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC5B4", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 35
      },
      __self: _this
    }), me.Followers.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_ignoring"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      },
      __self: _this
    }, "\uCC28\uB2E8\uC790", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 35
      },
      __self: _this
    }), me.Ignorings.length)))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 26
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 53
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
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
      lineNumber: 74,
      columnNumber: 17
    },
    __self: _this
  }), editNickname && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY2hhbmdlTmlja25hbWVEb25lIiwidXNlU3RhdGUiLCJlZGl0Tmlja25hbWUiLCJzZXRFZGl0Tmlja25hbWUiLCJvbkNsaWNrRWRpdE5pY2tuYW1lIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25Mb2dvdXQiLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwidXNlRWZmZWN0IiwiaWQiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIklnbm9yaW5ncyIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILEVBQWY7QUFBQSxHQUFOLENBQXRCO0FBRUEsTUFBTUksa0JBQWtCLEdBQUdILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxrQkFBZjtBQUFBLEdBQU4sQ0FBdEM7O0FBSnNCLGtCQUtrQkMsc0RBQVEsQ0FBQyxLQUFELENBTDFCO0FBQUEsTUFLZkMsWUFMZTtBQUFBLE1BS0RDLGVBTEM7O0FBT3RCLE1BQU1DLG1CQUFtQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDMUNG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QUFBO0FBQUE7QUFBQTtBQUFBLElBakRyQixDQURKLENBREo7QUF3REgsQ0E5RUQ7O0dBQU1ULFc7VUFDZUUsdUQsRUFDTkUsdUQsRUFFZ0JBLHVEOzs7S0FKekJKLFc7QUErRVNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNlYzBmZTFiMjM0MzI4ZDQ2NGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgRGl2aWRlciwgVG9vbHRpcCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1NldHRpbmdPdXRsaW5lZCc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nb3V0T3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9Mb2dvdXRPdXRsaW5lZCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IENhcmRXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcblxyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZURvbmUpO1xyXG4gICAgY29uc3QgW2VkaXROaWNrbmFtZSwgc2V0RWRpdE5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrRWRpdE5pY2tuYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXROaWNrbmFtZSgocHJldikgPT4gIXByZXYpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1RcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFuZ2VOaWNrbmFtZURvbmUpIHtcclxuICAgICAgICAgICAgc2V0RWRpdE5pY2tuYW1lKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGFuZ2VOaWNrbmFtZURvbmVdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttZS5pZH1fcHJvZmlsZWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwMCcsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICBleHRyYT17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi66Gc6re47JWE7JuDXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRPdXRsaW5lZCBrZXk9XCJsb2dvdXRcIiBvbkNsaWNrPXtvbkxvZ291dH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi64uJ64Sk7J6EIOuwlOq+uOq4sFwiPiAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwiZWRpdC1uaWNrbmFtZVwiIG9uQ2xpY2s9e29uQ2xpY2tFZGl0Tmlja25hbWV9IC8+PC9Ub29sdGlwPlxyXG5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV90d2l0YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT48YT7qsozsi5zquIA8YnIgLz57bWUuUG9zdHMubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X2ZvbGxvd2luZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0cy9yZWxhdGVkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzsnok8YnIgLz57bWUuRm9sbG93aW5ncy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1fZm9sbG93ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzslrQ8YnIgLz57bWUuRm9sbG93ZXJzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV9pZ25vcmluZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuywqOuLqOyekDxiciAvPnttZS5JZ25vcmluZ3MubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvdXNlci8ke21lLmlkfWB9PjxhPjxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT48L0xpbms+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlZGl0Tmlja25hbWUgJiYgPE5pY2tuYW1lRWRpdEZvcm0gLz59XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9DYXJkV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyAiXSwic291cmNlUm9vdCI6IiJ9