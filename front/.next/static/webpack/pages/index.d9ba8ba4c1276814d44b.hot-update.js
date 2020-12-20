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
  var leaveDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.post.leaveDone;
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
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (leaveDone) {
      setModalVisible(false);
      antd__WEBPACK_IMPORTED_MODULE_3__["message"].success('탈퇴처리가 완료되었습니다.');
    }
  }, [leaveDone]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_9__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
        lineNumber: 63,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "edit-nickname",
      onClick: onClickEditNickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      },
      __self: _this
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uD0C8\uD1F4\uD558\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "leave",
      onClick: onLeave,
      loading: leaveLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      },
      __self: _this
    }))],
    actions: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_twit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 53
      },
      __self: _this
    }, "\uAC8C\uC2DC\uAE00", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 59
      },
      __self: _this
    }), me.Posts.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_following"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/posts/related",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC789", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 35
      },
      __self: _this
    }), me.Followings.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_follower"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC5B4", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 35
      },
      __self: _this
    }), me.Followers.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_ignoring"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 29
      },
      __self: _this
    }, "\uCC28\uB2E8\uC790", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 35
      },
      __self: _this
    }), me.Ignorings.length)))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
      lineNumber: 101,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    },
    __self: _this
  }, "\uD0C8\uD1F4\uD558\uC2E4 \uACBD\uC6B0 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uACC4\uC18D \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 26
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 53
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
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
      lineNumber: 110,
      columnNumber: 17
    },
    __self: _this
  }), editNickname && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onCancel: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 34
    },
    __self: _this
  })));
};

_s(UserProfile, "4blDY+xwA+A2OuU/RaQ4MelOzkg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibGVhdmVMb2FkaW5nIiwicG9zdCIsImxlYXZlRG9uZSIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY2hhbmdlTmlja25hbWVEb25lIiwiZWRpdE5pY2tuYW1lIiwic2V0RWRpdE5pY2tuYW1lIiwib25DbGlja0VkaXROaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uTGVhdmUiLCJvbnN1Ym1pdExlYXZlIiwiaWQiLCJtZXNzYWdlIiwiaW5mbyIsInR5cGUiLCJMRUFWRV9SRVFVRVNUIiwibGVhdmVDYW5jZWwiLCJvbkNhbmNlbCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIklnbm9yaW5ncyIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILEVBQWY7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQU4sQ0FBV0QsWUFBdEI7QUFB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QWQsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRyw0REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ3RCbEIsRUFBRSxDQUFDa0MsUUFBSCxDQUFZLENBQVosQ0FEc0IsQ0FBSCxDQUYzQixDQUZUO0FBT0ksU0FBSyxFQUFFbEMsRUFBRSxDQUFDa0MsUUFQZDtBQVFJLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBESixFQThES3hCLFlBQVksSUFBSSw0REFBQyxvRUFBRDtBQUFrQixZQUFRLEVBQUVhLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5RHJCLENBREosQ0FESjtBQXFFSCxDQWxIRDs7R0FBTTNCLFc7VUFDZUUsdUQsRUFDTkUsdUQsRUFDVUEsdUQsRUFDSEEsdUQsRUFFU0EsdUQ7OztLQU56QkosVztBQW1IU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDliYThiYTRjMTI3NjgxNGQ0NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBEaXZpZGVyLCBUb29sdGlwLCBtZXNzYWdlLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1NldHRpbmdPdXRsaW5lZCc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL0NsZWFyT3V0bGluZWQnO1xyXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExFQVZFX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQ2FyZFdyYXBwZXIgfSBmcm9tICcuL3N0eWxlJztcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuICAgIGNvbnN0IGxlYXZlTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5sZWF2ZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgbGVhdmVEb25lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LmxlYXZlRG9uZSk7XHJcbiAgICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZURvbmUpO1xyXG4gICAgY29uc3QgW2VkaXROaWNrbmFtZSwgc2V0RWRpdE5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrRWRpdE5pY2tuYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXROaWNrbmFtZSgocHJldikgPT4gIXByZXYpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25zdWJtaXRMZWF2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuaW5mbygn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMRUFWRV9SRVFVRVNUXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsZWF2ZUNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXROaWNrbmFtZSgocHJldikgPT4gIXByZXYpXHJcbiAgICB9LCBbXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFuZ2VOaWNrbmFtZURvbmUpIHtcclxuICAgICAgICAgICAgc2V0RWRpdE5pY2tuYW1lKGZhbHNlKTtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfri4nrhKTsnoTsnbQg67OA6rK965CY7JeI7Iq164uI64ukLicpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2NoYW5nZU5pY2tuYW1lRG9uZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobGVhdmVEb25lKSB7XHJcbiAgICAgICAgICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn7YOI7Ye07LKY66as6rCAIOyZhOujjOuQmOyXiOyKteuLiOuLpC4nKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtsZWF2ZURvbmVdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGtleT17YCR7bWUuaWR9X3Byb2ZpbGVgfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICczMDAnLCBtYXJnaW5Ub3A6IDE2IH19XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaW5uZXJcIlxyXG4gICAgICAgICAgICAgICAgZXh0cmE9e1tcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIuuLieuEpOyehCDrsJTqvrjquLBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJlZGl0LW5pY2tuYW1lXCIgb25DbGljaz17b25DbGlja0VkaXROaWNrbmFtZX0gLz48L1Rvb2x0aXA+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi7YOI7Ye07ZWY6riwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhck91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9XCJsZWF2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bGVhdmVMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1fdHdpdGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+PGE+6rKM7Iuc6riAPGJyIC8+e21lLlBvc3RzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV9mb2xsb3dpbmdgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcG9zdHMvcmVsYXRlZGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+7YyU66Gc7J6JPGJyIC8+e21lLkZvbGxvd2luZ3MubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X2ZvbGxvd2VyYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+7YyU66Gc7Ja0PGJyIC8+e21lLkZvbGxvd2Vycy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1faWdub3JpbmdgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7ssKjri6jsnpA8YnIgLz57bWUuSWdub3JpbmdzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInJlcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17bW9kYWxWaXNpYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9e29uc3VibWl0TGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUxvYWRpbmc9e2xlYXZlTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17bGVhdmVDYW5jZWx9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+7YOI7Ye07ZWY7IukIOqyveyasCDrkJjrj4zrprQg7IiYIOyXhuyKteuLiOuLpC4g6rOE7IaNIOynhO2Wie2VmOyLnOqyoOyKteuLiOq5jD88L3A+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICg8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC91c2VyLyR7bWUuaWR9YH0+PGE+PEF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWUubmlja25hbWVbMF19PC9BdmF0YXI+PC9hPjwvTGluaz4pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXttZS5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2VkaXROaWNrbmFtZSAmJiA8Tmlja25hbWVFZGl0Rm9ybSBvbkNhbmNlbD17b25DYW5jZWx9IC8+fVxyXG5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvQ2FyZFdyYXBwZXI+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==