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
/* harmony import */ var _ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/ClearOutlined */ "./node_modules/@ant-design/icons/ClearOutlined.js");
/* harmony import */ var _ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5__);
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
  var leaveLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.post.leaveLoading;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalVisible = _useState[0],
      setModalVisible = _useState[1];

  var changeNicknameDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.changeNicknameDone;
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      editNickname = _useState2[0],
      setEditNickname = _useState2[1];

  var onClickEditNickname = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setEditNickname(function (prev) {
      return !prev;
    });
  }, []);
  var onLeave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setModalVisible(true);
  }, []);
  var onsubmitLeave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!(me && me.id)) {
      return antd__WEBPACK_IMPORTED_MODULE_3__["message"].info('로그인이 필요합니다.');
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LEAVE_REQUEST"]
    });
  }, []);
  var leaveCancel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setModalVisible(false);
  }, []);
  var onCancel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setEditNickname(function (prev) {
      return !prev;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (changeNicknameDone) {
      setEditNickname(false);
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('닉네임이 변경되었습니다.');
    }
  }, [changeNicknameDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_9__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      title: "\uB2C9\uB124\uC784 \uBC14\uAFB8\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "edit-nickname",
      onClick: onClickEditNickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 25
      },
      __self: _this
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uD0C8\uD1F4\uD558\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "leave",
      onClick: onLeave,
      loading: leaveLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      },
      __self: _this
    }))],
    actions: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_twit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 53
      },
      __self: _this
    }, "\uAC8C\uC2DC\uAE00", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 59
      },
      __self: _this
    }), me.Posts.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_following"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/posts/related",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC789", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 35
      },
      __self: _this
    }), me.Followings.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_follower"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC5B4", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 35
      },
      __self: _this
    }), me.Followers.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_ignoring"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      },
      __self: _this
    }, "\uCC28\uB2E8\uC790", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 35
      },
      __self: _this
    }), me.Ignorings.length)))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "report",
    visible: modalVisible,
    onOk: onsubmitLeave,
    confirmLoading: leaveLoading,
    onCancel: leaveCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 21
    },
    __self: _this
  }, "\uD0C8\uD1F4\uD558\uC2E4 \uACBD\uC6B0 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uACC4\uC18D \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 26
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 53
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
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
      lineNumber: 103,
      columnNumber: 17
    },
    __self: _this
  }), editNickname && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onCancel: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 34
    },
    __self: _this
  })));
};

_s(UserProfile, "tLX4sLH55ZqqAREt86E/CVaNKEQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibGVhdmVMb2FkaW5nIiwicG9zdCIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY2hhbmdlTmlja25hbWVEb25lIiwiZWRpdE5pY2tuYW1lIiwic2V0RWRpdE5pY2tuYW1lIiwib25DbGlja0VkaXROaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uTGVhdmUiLCJvbnN1Ym1pdExlYXZlIiwiaWQiLCJtZXNzYWdlIiwiaW5mbyIsInR5cGUiLCJMRUFWRV9SRVFVRVNUIiwibGVhdmVDYW5jZWwiLCJvbkNhbmNlbCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIklnbm9yaW5ncyIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILEVBQWY7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQU4sQ0FBV0QsWUFBdEI7QUFBQSxHQUFELENBQWhD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QUFoQixLQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwREosRUE4REt4QixZQUFZLElBQUksNERBQUMsb0VBQUQ7QUFBa0IsWUFBUSxFQUFFYSxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOURyQixDQURKLENBREo7QUFxRUgsQ0EzR0Q7O0dBQU0xQixXO1VBQ2VFLHVELEVBQ05FLHVELEVBQ1VBLHVELEVBRU1BLHVEOzs7S0FMekJKLFc7QUE0R1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljg1MWE2ZmVjYTMzODYwMWY3MDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgRGl2aWRlciwgVG9vbHRpcCwgbWVzc2FnZSwgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9TZXR0aW5nT3V0bGluZWQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIENsZWFyT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9DbGVhck91dGxpbmVkJztcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMRUFWRV9SRVFVRVNULCBMT0dfT1VUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQ2FyZFdyYXBwZXIgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuICAgIGNvbnN0IGxlYXZlTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5sZWF2ZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNoYW5nZU5pY2tuYW1lRG9uZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuY2hhbmdlTmlja25hbWVEb25lKTtcclxuICAgIGNvbnN0IFtlZGl0Tmlja25hbWUsIHNldEVkaXROaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0VkaXROaWNrbmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRFZGl0Tmlja25hbWUoKHByZXYpID0+ICFwcmV2KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbkxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uc3VibWl0TGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmluZm8oJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTEVBVkVfUkVRVUVTVFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbGVhdmVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRFZGl0Tmlja25hbWUoKHByZXYpID0+ICFwcmV2KVxyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2hhbmdlTmlja25hbWVEb25lKSB7XHJcbiAgICAgICAgICAgIHNldEVkaXROaWNrbmFtZShmYWxzZSlcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfri4nrhKTsnoTsnbQg67OA6rK965CY7JeI7Iq164uI64ukLicpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NoYW5nZU5pY2tuYW1lRG9uZV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttZS5pZH1fcHJvZmlsZWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwMCcsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICBleHRyYT17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi64uJ64Sk7J6EIOuwlOq+uOq4sFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cImVkaXQtbmlja25hbWVcIiBvbkNsaWNrPXtvbkNsaWNrRWRpdE5pY2tuYW1lfSAvPjwvVG9vbHRpcD4sXHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLtg4jth7TtlZjquLBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsZWFyT3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImxlYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsZWF2ZUxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV90d2l0YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT48YT7qsozsi5zquIA8YnIgLz57bWUuUG9zdHMubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X2ZvbGxvd2luZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0cy9yZWxhdGVkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzsnok8YnIgLz57bWUuRm9sbG93aW5ncy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1fZm9sbG93ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzslrQ8YnIgLz57bWUuRm9sbG93ZXJzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV9pZ25vcmluZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuywqOuLqOyekDxiciAvPnttZS5JZ25vcmluZ3MubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwicmVwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17b25zdWJtaXRMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtTG9hZGluZz17bGVhdmVMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtsZWF2ZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cD7tg4jth7TtlZjsi6Qg6rK97JqwIOuQmOuPjOumtCDsiJgg7JeG7Iq164uI64ukLiDqs4Tsho0g7KeE7ZaJ7ZWY7Iuc6rKg7Iq164uI6rmMPzwvcD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT48YT48QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZS5uaWNrbmFtZVswXX08L0F2YXRhcj48L2E+PC9MaW5rPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZWRpdE5pY2tuYW1lICYmIDxOaWNrbmFtZUVkaXRGb3JtIG9uQ2FuY2VsPXtvbkNhbmNlbH0gLz59XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9DYXJkV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyAiXSwic291cmNlUm9vdCI6IiJ9