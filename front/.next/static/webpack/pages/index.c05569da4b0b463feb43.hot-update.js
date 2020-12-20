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
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOG_OUT_REQUEST"]
    });
    setModalVisible(false);
  }, [me]);
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
      lineNumber: 56,
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
        lineNumber: 62,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "edit-nickname",
      onClick: onClickEditNickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      },
      __self: _this
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uD0C8\uD1F4\uD558\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "leave",
      onClick: onLeave,
      loading: leaveLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      },
      __self: _this
    }))],
    actions: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_twit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 53
      },
      __self: _this
    }, "\uAC8C\uC2DC\uAE00", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 59
      },
      __self: _this
    }), me.Posts.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_following"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/posts/related",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC789", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 35
      },
      __self: _this
    }), me.Followings.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_follower"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC5B4", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 35
      },
      __self: _this
    }), me.Followers.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_ignoring"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 29
      },
      __self: _this
    }, "\uCC28\uB2E8\uC790", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 35
      },
      __self: _this
    }), me.Ignorings.length)))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 100,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    },
    __self: _this
  }, "\uD0C8\uD1F4\uD558\uC2E4 \uACBD\uC6B0 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uACC4\uC18D \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 26
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 53
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
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
      lineNumber: 109,
      columnNumber: 17
    },
    __self: _this
  }), editNickname && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onCancel: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibGVhdmVMb2FkaW5nIiwicG9zdCIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY2hhbmdlTmlja25hbWVEb25lIiwiZWRpdE5pY2tuYW1lIiwic2V0RWRpdE5pY2tuYW1lIiwib25DbGlja0VkaXROaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uTGVhdmUiLCJvbnN1Ym1pdExlYXZlIiwiaWQiLCJtZXNzYWdlIiwiaW5mbyIsInR5cGUiLCJMRUFWRV9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwibGVhdmVDYW5jZWwiLCJvbkNhbmNlbCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIklnbm9yaW5ncyIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILEVBQWY7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQU4sQ0FBV0QsWUFB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QixFQUFFLENBQUNrQyxRQUFILENBQVksQ0FBWixDQURzQixDQUFILENBRjNCLENBRlQ7QUFPSSxTQUFLLEVBQUVsQyxFQUFFLENBQUNrQyxRQVBkO0FBUUksU0FBSyxFQUFFO0FBQUVDLGtCQUFZLEVBQUU7QUFBaEIsS0FSWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcERKLEVBOERLekIsWUFBWSxJQUFJLDREQUFDLG9FQUFEO0FBQWtCLFlBQVEsRUFBRWMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlEckIsQ0FESixDQURKO0FBcUVILENBakhEOztHQUFNM0IsVztVQUNlRSx1RCxFQUNORSx1RCxFQUNVQSx1RCxFQUdNQSx1RDs7O0tBTnpCSixXO0FBa0hTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMDU1NjlkYTRiMGI0NjNmZWI0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIERpdmlkZXIsIFRvb2x0aXAsIG1lc3NhZ2UsIE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvU2V0dGluZ091dGxpbmVkJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyBDbGVhck91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvQ2xlYXJPdXRsaW5lZCc7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTEVBVkVfUkVRVUVTVCwgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IENhcmRXcmFwcGVyIH0gZnJvbSAnLi9zdHlsZSc7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCBsZWF2ZUxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QubGVhdmVMb2FkaW5nKTtcclxuXHJcbiAgICBjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZURvbmUpO1xyXG4gICAgY29uc3QgW2VkaXROaWNrbmFtZSwgc2V0RWRpdE5pY2tuYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrRWRpdE5pY2tuYW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEVkaXROaWNrbmFtZSgocHJldikgPT4gIXByZXYpXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uTGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxWaXNpYmxlKHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25zdWJtaXRMZWF2ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UuaW5mbygn66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMRUFWRV9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9LCBbbWVdKTtcclxuICAgIGNvbnN0IGxlYXZlQ2FuY2VsID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25DYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdE5pY2tuYW1lKChwcmV2KSA9PiAhcHJldilcclxuICAgIH0sIFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNoYW5nZU5pY2tuYW1lRG9uZSkge1xyXG4gICAgICAgICAgICBzZXRFZGl0Tmlja25hbWUoZmFsc2UpO1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+uLieuEpOyehOydtCDrs4Dqsr3rkJjsl4jsirXri4jri6QuJylcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2hhbmdlTmlja25hbWVEb25lXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtgJHttZS5pZH1fcHJvZmlsZWB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMwMCcsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJpbm5lclwiXHJcbiAgICAgICAgICAgICAgICBleHRyYT17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwi64uJ64Sk7J6EIOuwlOq+uOq4sFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cImVkaXQtbmlja25hbWVcIiBvbkNsaWNrPXtvbkNsaWNrRWRpdE5pY2tuYW1lfSAvPjwvVG9vbHRpcD4sXHJcbiAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLtg4jth7TtlZjquLBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsZWFyT3V0bGluZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImxlYXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTGVhdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsZWF2ZUxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV90d2l0YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT48YT7qsozsi5zquIA8YnIgLz57bWUuUG9zdHMubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X2ZvbGxvd2luZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZmV0Y2g9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wb3N0cy9yZWxhdGVkYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzsnok8YnIgLz57bWUuRm9sbG93aW5ncy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1fZm9sbG93ZXJgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzslrQ8YnIgLz57bWUuRm9sbG93ZXJzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV9pZ25vcmluZ2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPuywqOuLqOyekDxiciAvPnttZS5JZ25vcmluZ3MubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwicmVwb3J0XCJcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXttb2RhbFZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17b25zdWJtaXRMZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtTG9hZGluZz17bGVhdmVMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXtsZWF2ZUNhbmNlbH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cD7tg4jth7TtlZjsi6Qg6rK97JqwIOuQmOuPjOumtCDsiJgg7JeG7Iq164uI64ukLiDqs4Tsho0g7KeE7ZaJ7ZWY7Iuc6rKg7Iq164uI6rmMPzwvcD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3VzZXIvJHttZS5pZH1gfT48YT48QXZhdGFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZS5uaWNrbmFtZVswXX08L0F2YXRhcj48L2E+PC9MaW5rPilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e21lLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZWRpdE5pY2tuYW1lICYmIDxOaWNrbmFtZUVkaXRGb3JtIG9uQ2FuY2VsPXtvbkNhbmNlbH0gLz59XHJcblxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9DYXJkV3JhcHBlcj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyAiXSwic291cmNlUm9vdCI6IiJ9