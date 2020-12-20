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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var _components_IgnoreList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/IgnoreList */ "./components/IgnoreList.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var _components_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/style */ "./components/style.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");



var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var Profile = function Profile() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(3),
      ignoringsLimit = _useState3[0],
      setIgnoringsLimit = _useState3[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_10__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_11__["backUrl"], "/user/followings?limit=").concat(followingsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_12__["default"], {
    revalidateOnFocus: true
  }),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_10__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_11__["backUrl"], "/user/followers?limit=").concat(followersLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_12__["default"], {
    revalidateOnFocus: true
  }),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_10__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_11__["backUrl"], "/user/ignorings?limit=").concat(ignoringsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_12__["default"], {
    revalidateOnFocus: true
  }),
      ignoringsData = _useSWR3.data,
      ignoringError = _useSWR3.error;

  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.me;
  });

  var _useSWR4 = Object(swr__WEBPACK_IMPORTED_MODULE_10__["default"])("globalState", {
    initialData: _reducers_user__WEBPACK_IMPORTED_MODULE_14__["initialState"]
  }, {
    revalidateOnFocus: true
  }),
      menuKeyData = _useSWR4.data;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!me) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/');
      Object(swr__WEBPACK_IMPORTED_MODULE_10__["mutate"])("globalState", _objectSpread(_objectSpread({}, menuKeyData), {}, {
        me: {
          menuKey: '1'
        }
      }));
    }

    ;
  }, [me]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (followerError || followingError || ignoringError) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/');
    }

    ;
  }, [followerError, followingError, ignoringError]);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreIgnorers = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setIgnoringsLimit(function (prev) {
      return prev + 3;
    });
  }, []);

  if (!me) {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/');
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_13__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      },
      __self: _this
    }, "\uD504\uB85C\uD544 \uD398\uC774\uC9C0\uB294 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      },
      __self: _this
    }), " Home\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.");
  }

  ;

  if (followerError || followingError || ignoringError) {
    console.error(followerError || followingError || ignoringError);
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_13__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      },
      __self: _this
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC/\uCC28\uB2E8\uC790 \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4");
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    },
    __self: _this
  }, "\uB0B4 \uD504\uB85C\uD544 | Ymillonga")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followingsData,
    loading: !followingsData && !followingError,
    onClickMore: loadMoreFollowings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followersData,
    loading: !followersData && !followerError,
    onClickMore: loadMoreFollowers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_15__["jsx"])(_components_IgnoreList__WEBPACK_IMPORTED_MODULE_9__["default"], {
    header: "\uCC28\uB2E8\uD55C \uC0AC\uC6A9\uC790",
    data: ignoringsData,
    loading: !ignoringsData && !ignoringError,
    onClickMore: loadMoreIgnorers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    },
    __self: _this
  }));
};

_s(Profile, "REf39uOyY2sLkwEcMPVHGI230e0=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_10__["default"], swr__WEBPACK_IMPORTED_MODULE_10__["default"], swr__WEBPACK_IMPORTED_MODULE_10__["default"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_10__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiaWdub3JpbmdzTGltaXQiLCJzZXRJZ25vcmluZ3NMaW1pdCIsInVzZVNXUiIsImJhY2tVcmwiLCJmZXRjaGVyIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJmb2xsb3dpbmdzRGF0YSIsImRhdGEiLCJmb2xsb3dpbmdFcnJvciIsImVycm9yIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJpZ25vcmluZ3NEYXRhIiwiaWdub3JpbmdFcnJvciIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpbml0aWFsRGF0YSIsImluaXRpYWxTdGF0ZSIsIm1lbnVLZXlEYXRhIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsIm11dGF0ZSIsIm1lbnVLZXkiLCJsb2FkTW9yZUZvbGxvd2luZ3MiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJsb2FkTW9yZUZvbGxvd2VycyIsImxvYWRNb3JlSWdub3JlcnMiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDNEJDLHNEQUFRLENBQUMsQ0FBRCxDQURwQztBQUFBLE1BQ1hDLGVBRFc7QUFBQSxNQUNNQyxrQkFETjs7QUFBQSxtQkFFMEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZsQztBQUFBLE1BRVhHLGNBRlc7QUFBQSxNQUVLQyxpQkFGTDs7QUFBQSxtQkFHMEJK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c0RRLDRDLEVBQ0ZBLDRDLEVBQ0FBLDRDLEVBQzNDYSx1RCxFQUNtQmIsNEM7OztLQVI1QlIsTzs7QUFxRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuODg5ZDljYzNmOWY4MWFmODg3NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QnO1xyXG5pbXBvcnQgSWdub3JlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0lnbm9yZUxpc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IHsgTG9hZGluZ0RpdiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGUnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb2xsb3dpbmdzTGltaXQsIHNldEZvbGxvd2luZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFtmb2xsb3dlcnNMaW1pdCwgc2V0Rm9sbG93ZXJzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbaWdub3JpbmdzTGltaXQsIHNldElnbm9yaW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vdXNlci9mb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsIGZldGNoZXIsIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhOiBpZ25vcmluZ3NEYXRhLCBlcnJvcjogaWdub3JpbmdFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvaWdub3JpbmdzP2xpbWl0PSR7aWdub3JpbmdzTGltaXR9YCwgZmV0Y2hlciwgeyByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IG1lbnVLZXlEYXRhIH0gPSB1c2VTV1IoXCJnbG9iYWxTdGF0ZVwiLCB7IGluaXRpYWxEYXRhOiBpbml0aWFsU3RhdGUgfSwgeyByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWUpIHtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgICAgICAgbXV0YXRlKFwiZ2xvYmFsU3RhdGVcIiwge1xyXG4gICAgICAgICAgICAgICAgLi4ubWVudUtleURhdGEsXHJcbiAgICAgICAgICAgICAgICBtZTogeyBtZW51S2V5OiAnMScgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW21lXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvciB8fCBpZ25vcmluZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJylcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2ZvbGxvd2VyRXJyb3IsIGZvbGxvd2luZ0Vycm9yLCBpZ25vcmluZ0Vycm9yXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93ZXJzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGxvYWRNb3JlSWdub3JlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0SWdub3JpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TG9hZGluZ0Rpdj7tlITroZztlYQg7Y6Y7J207KeA64qUIOuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuXHJcbiAgICAgICAgICAgICAgICA8YnIgLz4gSG9tZeycvOuhnCDsnbTrj5ntlanri4jri6QuPC9Mb2FkaW5nRGl2PilcclxuICAgIH07XHJcblxyXG4gICAgaWYgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IgfHwgaWdub3JpbmdFcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvciB8fCBpZ25vcmluZ0Vycm9yKTtcclxuICAgICAgICByZXR1cm4gKDxMb2FkaW5nRGl2Pu2MlOuhnOyeiS/tjJTroZzsm4wv7LCo64uo7J6QIOuhnOuUqSDspJEg7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpDwvTG9hZGluZ0Rpdj4pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIHwgWW1pbGxvbmdhPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUgLz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOyeiVwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtmb2xsb3dpbmdzRGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dpbmdzRGF0YSAmJiAhZm9sbG93aW5nRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfSAvPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7JuMXCJcclxuICAgICAgICAgICAgICAgIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXshZm9sbG93ZXJzRGF0YSAmJiAhZm9sbG93ZXJFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc30gLz5cclxuICAgICAgICAgICAgPElnbm9yZUxpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIuywqOuLqO2VnCDsgqzsmqnsnpBcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17aWdub3JpbmdzRGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFpZ25vcmluZ3NEYXRhICYmICFpZ25vcmluZ0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlSWdub3JlcnN9IC8+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuXHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsgIl0sInNvdXJjZVJvb3QiOiIifQ==