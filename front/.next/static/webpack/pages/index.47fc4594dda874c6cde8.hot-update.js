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
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LEAVE_REQUEST"],
      LOG_OUT_REQUEST: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["LOG_OUT_REQUEST"]
    });
    setModalVisible(false);
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
      lineNumber: 54,
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
        lineNumber: 60,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "edit-nickname",
      onClick: onClickEditNickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      },
      __self: _this
    })), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
      type: "vertical",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
      title: "\uD0C8\uD1F4\uD558\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_ant_design_icons_ClearOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
      key: "leave",
      onClick: onLeave,
      loading: leaveLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 25
      },
      __self: _this
    }))],
    actions: [Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_twit"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 53
      },
      __self: _this
    }, "\uAC8C\uC2DC\uAE00", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 59
      },
      __self: _this
    }), me.Posts.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_following"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/posts/related",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC789", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 35
      },
      __self: _this
    }), me.Followings.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_follower"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      },
      __self: _this
    }, "\uD314\uB85C\uC5B4", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 35
      },
      __self: _this
    }), me.Followers.length))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("div", {
      key: "".concat(me.id, "_ignoring"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/profile",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      },
      __self: _this
    }, "\uCC28\uB2E8\uC790", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 35
      },
      __self: _this
    }), me.Ignorings.length)))],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 98,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    },
    __self: _this
  }, "\uD0C8\uD1F4\uD558\uC2E4 \uACBD\uC6B0 \uB418\uB3CC\uB9B4 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. \uACC4\uC18D \uC9C4\uD589\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
    avatar: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: false,
      href: "/user/".concat(me.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 26
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 53
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
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
      lineNumber: 107,
      columnNumber: 17
    },
    __self: _this
  }), editNickname && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onCancel: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibGVhdmVMb2FkaW5nIiwicG9zdCIsInVzZVN0YXRlIiwibW9kYWxWaXNpYmxlIiwic2V0TW9kYWxWaXNpYmxlIiwiY2hhbmdlTmlja25hbWVEb25lIiwiZWRpdE5pY2tuYW1lIiwic2V0RWRpdE5pY2tuYW1lIiwib25DbGlja0VkaXROaWNrbmFtZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uTGVhdmUiLCJvbnN1Ym1pdExlYXZlIiwiaWQiLCJtZXNzYWdlIiwiaW5mbyIsInR5cGUiLCJMRUFWRV9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwibGVhdmVDYW5jZWwiLCJvbkNhbmNlbCIsInVzZUVmZmVjdCIsInN1Y2Nlc3MiLCJ3aWR0aCIsIm1hcmdpblRvcCIsIlBvc3RzIiwibGVuZ3RoIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIklnbm9yaW5ncyIsIm5pY2tuYW1lIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILEVBQWY7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQU4sQ0FBV0QsWUFBdEI7QUFBQSxHQUFELENBQWhDOztBQUhzQixrQkFLa0JFLHNEQUFRLENBQUMsS0FBRCxDQUwxQjtBQUFBLE1BS2ZDLFlBTGU7QUFBQSxNQUtEQyxlQUxDOztBQU10QixNQUFNQyxrQkFBa0IsR0FBR1IsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdNLGtCQUFmO0FBQUEsR0FBTixDQUF0Qzs7QUFOc0IsbUJBT2tCSCxzREFBUSxDQUFDLEtBQUQsQ0FQMUI7QUFBQSxNQU9mSSxZQVBlO0FBQUEsTUFPREMsZUFQQzs7QUFTdEIsTUFBTUMsbUJBQW1CLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMxQ0YsbUJBQWUsQ0FBQyxVQUFDRyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFmO0FBQ0gsR0FGc0MsRUFFcEMsRUFGb0MsQ0FBdkM7QUFLQSxNQUFNQyxPQUFPLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUM5QkwsbUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjtBQUdBLE1BQU1RLGFBQWEsR0FBR0gseURBQVcsQ0FBQyxZQUFNO0FBQ3BDLFFBQUksRUFBRWIsRUFBRSxJQUFJQSxFQUFFLENBQUNpQixFQUFYLENBQUosRUFBb0I7QUFDaEIsYUFBT0MsNENBQU8sQ0FBQ0MsSUFBUixDQUFhLGFBQWIsQ0FBUDtBQUNIOztBQUNEckIsWUFBUSxDQUFDO0FBQ0xzQixVQUFJLEVBQUVDLDREQUREO0FBQ2dCQyxxQkFBZSxFQUFmQSw4REFBZUE7QUFEL0IsS0FBRCxDQUFSO0FBSUFkLG1CQUFlLENBQUMsS0FBRCxDQUFmO0FBQ0gsR0FUZ0MsRUFTOUIsRUFUOEIsQ0FBakM7QUFVQSxNQUFNZSxXQUFXLEdBQUdWLHlEQUFXLENBQUMsWUFBTTtBQUNsQ0wsbUJBQWUsQ0FBQyxLQUFELENBQWY7QUFDSCxHQUY4QixFQUU1QixFQUY0QixDQUEvQjtBQUlBLE1BQU1nQixRQUFRLEdBQUdYLHlEQUFXLENBQUMsWUFBTTtBQUMvQkYsbUJBQWUsQ0FBQyxVQUFDRyxJQUFEO0FBQUEsYUFBVSxDQUFDQSxJQUFYO0FBQUEsS0FBRCxDQUFmO0FBQ0gsR0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7QUFHQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSWhCLGtCQUFKLEVBQXdCO0FBQ3BCRSxxQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNBTyxrREFBTyxDQUFDUSxPQUFSLENBQWdCLGVBQWhCO0FBQ0g7QUFDSixHQUxRLEVBS04sQ0FBQ2pCLGtCQUFELENBTE0sQ0FBVDtBQVFBLFNBQ0ksNERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLDREQUFDLHlDQUFEO0FBQ0ksT0FBRyxZQUFLVCxFQUFFLENBQUNpQixFQUFSLGFBRFA7QUFFSSxTQUFLLEVBQUU7QUFBRVUsV0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLGVBQVMsRUFBRTtBQUEzQixLQUZYO0FBR0ksUUFBSSxFQUFDLE9BSFQ7QUFJSSxTQUFLLEVBQUUsQ0FDSCw0REFBQyw0Q0FBRDtBQUFTLFdBQUssRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksNERBQUMsd0VBQUQ7QUFBaUIsU0FBRyxFQUFDLGVBQXJCO0FBQXFDLGFBQU8sRUFBRWhCLG1CQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FERyxFQUdILDREQUFDLDRDQUFEO0FBQVMsVUFBSSxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhHLEVBSUgsNERBQUMsNENBQUQ7QUFBUyxXQUFLLEVBQUMsMEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLDREQUFDLHNFQUFEO0FBQ0ksU0FBRyxFQUFDLE9BRFI7QUFFSSxhQUFPLEVBQUVHLE9BRmI7QUFHSSxhQUFPLEVBQUVYLFlBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBSkcsQ0FKWDtBQWlCSSxXQUFPLEVBQUUsQ0FDTDtBQUFLLFNBQUcsWUFBS0osRUFBRSxDQUFDaUIsRUFBUixVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSw0REFBQyxnREFBRDtBQUNJLGNBQVEsRUFBRSxLQURkO0FBRUksVUFBSSxrQkFBV2pCLEVBQUUsQ0FBQ2lCLEVBQWQsQ0FGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOLEVBQWFqQixFQUFFLENBQUM2QixLQUFILENBQVNDLE1BQXRCLENBRjVCLENBREosQ0FESyxFQU9MO0FBQUssU0FBRyxZQUFLOUIsRUFBRSxDQUFDaUIsRUFBUixlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSw0REFBQyxnREFBRDtBQUNJLGNBQVEsRUFBRSxLQURkO0FBRUksVUFBSSxrQkFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU4sRUFBYWpCLEVBQUUsQ0FBQytCLFVBQUgsQ0FBY0QsTUFBM0IsQ0FISixDQURKLENBUEssRUFjTDtBQUFLLFNBQUcsWUFBSzlCLEVBQUUsQ0FBQ2lCLEVBQVIsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksNERBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU4sRUFBYWpCLEVBQUUsQ0FBQ2dDLFNBQUgsQ0FBYUYsTUFBMUIsQ0FESixDQURKLENBZEssRUFtQkw7QUFBSyxTQUFHLFlBQUs5QixFQUFFLENBQUNpQixFQUFSLGNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLDREQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFOLEVBQWFqQixFQUFFLENBQUNpQyxTQUFILENBQWFILE1BQTFCLENBREosQ0FESixDQW5CSyxDQWpCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMkNJLDREQUFDLDBDQUFEO0FBQ0ksU0FBSyxFQUFDLFFBRFY7QUFFSSxXQUFPLEVBQUV2QixZQUZiO0FBR0ksUUFBSSxFQUFFUyxhQUhWO0FBSUksa0JBQWMsRUFBRVosWUFKcEI7QUFLSSxZQUFRLEVBQUVtQixXQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdLQVBKLENBM0NKLEVBb0RJLDREQUFDLHlDQUFELENBQU0sSUFBTjtBQUNJLFVBQU0sRUFDRCw0REFBQyxnREFBRDtBQUNHLGNBQVEsRUFBRSxLQURiO0FBRUcsVUFBSSxrQkFBV3ZCLEVBQUUsQ0FBQ2lCLEVBQWQsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRyw0REFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ3RCakIsRUFBRSxDQUFDa0MsUUFBSCxDQUFZLENBQVosQ0FEc0IsQ0FBSCxDQUYzQixDQUZUO0FBT0ksU0FBSyxFQUFFbEMsRUFBRSxDQUFDa0MsUUFQZDtBQVFJLFNBQUssRUFBRTtBQUFFQyxrQkFBWSxFQUFFO0FBQWhCLEtBUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBESixFQThES3pCLFlBQVksSUFBSSw0REFBQyxvRUFBRDtBQUFrQixZQUFRLEVBQUVjLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5RHJCLENBREosQ0FESjtBQXFFSCxDQS9HRDs7R0FBTTNCLFc7VUFDZUUsdUQsRUFDTkUsdUQsRUFDVUEsdUQsRUFHTUEsdUQ7OztLQU56QkosVztBQWdIU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdmYzQ1OTRkZGE4NzRjNmNkZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBEaXZpZGVyLCBUb29sdGlwLCBtZXNzYWdlLCBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1NldHRpbmdPdXRsaW5lZCc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgQ2xlYXJPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL0NsZWFyT3V0bGluZWQnO1xyXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExFQVZFX1JFUVVFU1QsIExPR19PVVRfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBDYXJkV3JhcHBlciB9IGZyb20gJy4vc3R5bGUnO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgbGVhdmVMb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LmxlYXZlTG9hZGluZyk7XHJcblxyXG4gICAgY29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGNoYW5nZU5pY2tuYW1lRG9uZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuY2hhbmdlTmlja25hbWVEb25lKTtcclxuICAgIGNvbnN0IFtlZGl0Tmlja25hbWUsIHNldEVkaXROaWNrbmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgb25DbGlja0VkaXROaWNrbmFtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRFZGl0Tmlja25hbWUoKHByZXYpID0+ICFwcmV2KVxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbkxlYXZlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsVmlzaWJsZSh0cnVlKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uc3VibWl0TGVhdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlLmluZm8oJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTEVBVkVfUkVRVUVTVCwgTE9HX09VVF9SRVFVRVNULFxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRNb2RhbFZpc2libGUoZmFsc2UpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbGVhdmVDYW5jZWwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxWaXNpYmxlKGZhbHNlKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRFZGl0Tmlja25hbWUoKHByZXYpID0+ICFwcmV2KVxyXG4gICAgfSwgW10pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2hhbmdlTmlja25hbWVEb25lKSB7XHJcbiAgICAgICAgICAgIHNldEVkaXROaWNrbmFtZShmYWxzZSk7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn64uJ64Sk7J6E7J20IOuzgOqyveuQmOyXiOyKteuLiOuLpC4nKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGFuZ2VOaWNrbmFtZURvbmVdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2Ake21lLmlkfV9wcm9maWxlYH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzAwJywgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImlubmVyXCJcclxuICAgICAgICAgICAgICAgIGV4dHJhPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCLri4nrhKTsnoQg67CU6r646riwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwiZWRpdC1uaWNrbmFtZVwiIG9uQ2xpY2s9e29uQ2xpY2tFZGl0Tmlja25hbWV9IC8+PC9Ub29sdGlwPixcclxuICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIu2DiO2HtO2VmOq4sFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJPdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwibGVhdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25MZWF2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xlYXZlTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcblxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X3R3aXRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvdXNlci8ke21lLmlkfWB9PjxhPuqyjOyLnOq4gDxiciAvPnttZS5Qb3N0cy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgJHttZS5pZH1fZm9sbG93aW5nYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmZXRjaD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Bvc3RzL3JlbGF0ZWRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2MlOuhnOyeiTxiciAvPnttZS5Gb2xsb3dpbmdzLmxlbmd0aH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake21lLmlkfV9mb2xsb3dlcmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPu2MlOuhnOyWtDxiciAvPnttZS5Gb2xsb3dlcnMubGVuZ3RofTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PixcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YCR7bWUuaWR9X2lnbm9yaW5nYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+7LCo64uo7J6QPGJyIC8+e21lLklnbm9yaW5ncy5sZW5ndGh9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJyZXBvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbk9rPXtvbnN1Ym1pdExlYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nPXtsZWF2ZUxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e2xlYXZlQ2FuY2VsfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPu2DiO2HtO2VmOyLpCDqsr3smrAg65CY64+M66a0IOyImCDsl4bsirXri4jri6QuIOqzhOyGjSDsp4TtlontlZjsi5zqsqDsirXri4jquYw/PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvdXNlci8ke21lLmlkfWB9PjxhPjxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lLm5pY2tuYW1lWzBdfTwvQXZhdGFyPjwvYT48L0xpbms+KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bWUubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHtlZGl0Tmlja25hbWUgJiYgPE5pY2tuYW1lRWRpdEZvcm0gb25DYW5jZWw9e29uQ2FuY2VsfSAvPn1cclxuXHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0NhcmRXcmFwcGVyPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7ICJdLCJzb3VyY2VSb290IjoiIn0=