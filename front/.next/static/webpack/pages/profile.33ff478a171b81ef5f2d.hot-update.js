webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var _components_IgnoreList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/IgnoreList */ "./components/IgnoreList.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/style */ "./components/style.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();















var Profile = function Profile() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(3),
      ignoringsLimit = _useState3[0],
      setIgnoringsLimit = _useState3[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/followings?limit=").concat(followingsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"]),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/followers?limit=").concat(followersLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"]),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/ignorings?limit=").concat(ignoringsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"]),
      ignoringsData = _useSWR3.data,
      ignoringError = _useSWR3.error;

  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!(me && me.id) || followerError || followingError || ignoringError) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }

    ;
  }, [me && me.id, followerError, followingError, ignoringError]);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreIgnorers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIgnoringsLimit(function (prev) {
      return prev + 3;
    });
  }, []); // useEffect(() => {
  // }, [me]);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (followerError) {
      alert('팔로워를 불러오는 도중에 에러가 발생했습니다.');
    }
  }, [followerError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (followingError) {
      alert('팔로잉을 불러오는 도중에 에러가 발생했습니다.');
    }
  }, [followingError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (ignoringError) {
      alert('차단자를 불러오는 도중에 에러가 발생했습니다.');
    }
  }, [ignoringError]);

  if (!me) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      },
      __self: _this
    }, "\uC774 \uD398\uC774\uC9C0\uB294 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      },
      __self: _this
    }), " Home\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.");
  }

  ;
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    },
    __self: _this
  }, "\uB0B4 \uD504\uB85C\uD544 | Ymillonga")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followingsData,
    loading: !followingsData && !followingError,
    onClickMore: loadMoreFollowings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followersData,
    loading: !followersData && !followerError,
    onClickMore: loadMoreFollowers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_IgnoreList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uCC28\uB2E8\uD55C \uC0AC\uC6A9\uC790",
    data: ignoringsData,
    loading: !ignoringsData && !ignoringError,
    onClickMore: loadMoreIgnorers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    },
    __self: _this
  }));
};

_s(Profile, "hHERFE0BkK7OxOyXoQF91jGYXMY=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_9__["default"], swr__WEBPACK_IMPORTED_MODULE_9__["default"], swr__WEBPACK_IMPORTED_MODULE_9__["default"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Profile;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiaWdub3JpbmdzTGltaXQiLCJzZXRJZ25vcmluZ3NMaW1pdCIsInVzZVNXUiIsImJhY2tVcmwiLCJmZXRjaGVyIiwiZm9sbG93aW5nc0RhdGEiLCJkYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJlcnJvciIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiaWdub3JpbmdzRGF0YSIsImlnbm9yaW5nRXJyb3IiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJyZXBsYWNlIiwibG9hZE1vcmVGb2xsb3dpbmdzIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibG9hZE1vcmVGb2xsb3dlcnMiLCJsb2FkTW9yZUlnbm9yZXJzIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUM0QkMsc0RBQVEsQ0FBQyxDQUFELENBRHBDO0FBQUEsTUFDWEMsZUFEVztBQUFBLE1BQ01DLGtCQUROOztBQUFBLG1CQUUwQkYsc0RBQVEsQ0FBQyxDQUFELENBRmxDO0FBQUEsTUFFWEcsY0FGVztBQUFBLE1BRUtDLGlCQUZMOztBQUFBLG1CQUcwQkosc0RBQVEsQ0FBQyxDQUFELENBSGxDO0FBQUEsTUFHWEssY0FIVztBQUFBLE1BR0tDLGlCQUhMOztBQUFBLGdCQUlzQ0MsbURBQU0sV0FBSUMsdURBQUosb0NB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSSw0REFBQyw4REFBRDtBQUNJLFVBQU0sRUFBQyxvQkFEWDtBQUVJLFFBQUksRUFBRVIsY0FGVjtBQUdJLFdBQU8sRUFBRSxDQUFDQSxjQUFELElBQW1CLENBQUNFLGNBSGpDO0FBSUksZUFBVyxFQUFFYyxrQkFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxKLEVBVUksNERBQUMsOERBQUQ7QUFDSSxVQUFNLEVBQUMsb0JBRFg7QUFFSSxRQUFJLEVBQUVaLGFBRlY7QUFHSSxXQUFPLEVBQUUsQ0FBQ0EsYUFBRCxJQUFrQixDQUFDQyxhQUhoQztBQUlJLGVBQVcsRUFBRWMsaUJBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQWVJLDREQUFDLDhEQUFEO0FBQ0ksVUFBTSxFQUFDLHVDQURYO0FBRUksUUFBSSxFQUFFYixhQUZWO0FBR0ksV0FBTyxFQUFFLENBQUNBLGFBQUQsSUFBa0IsQ0FBQ0MsYUFIaEM7QUFJSSxlQUFXLEVBQUVhLGdCQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0FESjtBQXVCSCxDQXhFRDs7R0FBTS9CLE87VUFJc0RRLDJDLEVBQ0ZBLDJDLEVBQ0FBLDJDLEVBRTNDWSx1RDs7O0tBUlRwQixPOztBQXVGU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4zM2ZmNDc4YTE3MWI4MWVmNWYyZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCBJZ25vcmVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSWdub3JlTGlzdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IHsgTG9hZGluZ0RpdiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGUnO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgW2lnbm9yaW5nc0xpbWl0LCBzZXRJZ25vcmluZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGVycm9yOiBmb2xsb3dpbmdFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvZm9sbG93aW5ncz9saW1pdD0ke2ZvbGxvd2luZ3NMaW1pdH1gLCBmZXRjaGVyKTtcclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93ZXJzRGF0YSwgZXJyb3I6IGZvbGxvd2VyRXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBpZ25vcmluZ3NEYXRhLCBlcnJvcjogaWdub3JpbmdFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvaWdub3JpbmdzP2xpbWl0PSR7aWdub3JpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcblxyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSB8fCAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvciB8fCBpZ25vcmluZ0Vycm9yKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttZSAmJiBtZS5pZCwgZm9sbG93ZXJFcnJvciwgZm9sbG93aW5nRXJyb3IsIGlnbm9yaW5nRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRGb2xsb3dlcnNMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbG9hZE1vcmVJZ25vcmVycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJZ25vcmluZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAvLyB9LCBbbWVdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbGxvd2VyRXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ+2MlOuhnOybjOulvCDrtojrn6zsmKTripQg64+E7KSR7JeQIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2ZvbGxvd2VyRXJyb3JdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbGxvd2luZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCftjJTroZzsnonsnYQg67aI65+s7Jik64qUIOuPhOykkeyXkCDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtmb2xsb3dpbmdFcnJvcl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWdub3JpbmdFcnJvcikge1xyXG4gICAgICAgICAgICBhbGVydCgn7LCo64uo7J6Q66W8IOu2iOufrOyYpOuKlCDrj4TspJHsl5Ag7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWdub3JpbmdFcnJvcl0pO1xyXG4gICAgaWYgKCFtZSkge1xyXG4gICAgICAgIHJldHVybiAoPExvYWRpbmdEaXY+XHJcbiAgICAgICAgICAgIOydtCDtjpjsnbTsp4DripQg66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgPGJyIC8+IEhvbWXsnLzroZwg7J2064+Z7ZWp64uI64ukLjwvTG9hZGluZ0Rpdj5cclxuICAgICAgICApXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIHwgWW1pbGxvbmdhPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgLz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOyeiVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtmb2xsb3dpbmdzRGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dpbmdzRGF0YSAmJiAhZm9sbG93aW5nRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfSAvPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7JuMXCJcclxuICAgICAgICAgICAgICAgIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXshZm9sbG93ZXJzRGF0YSAmJiAhZm9sbG93ZXJFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc30gLz5cclxuICAgICAgICAgICAgPElnbm9yZUxpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIuywqOuLqO2VnCDsgqzsmqnsnpBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17aWdub3JpbmdzRGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFpZ25vcmluZ3NEYXRhICYmICFpZ25vcmluZ0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlSWdub3JlcnN9IC8+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuXHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==