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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


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

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/followings?limit=").concat(followingsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    dedupingInterval: 5000
  }),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/followers?limit=").concat(followersLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    dedupingInterval: 5000
  }),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/ignorings?limit=").concat(ignoringsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    dedupingInterval: 5000
  }),
      ignoringsData = _useSWR3.data,
      ignoringError = _useSWR3.error;

  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!me) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }

    ;
  }, [me]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (followerError || followingError || ignoringError) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    }

    ;
  }, [followerError, followingError, ignoringError]);
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
  }, []);

  if (!me) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      },
      __self: _this
    }, "\uC774 \uD398\uC774\uC9C0\uB294 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      },
      __self: _this
    }), " Home\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.");
  }

  ;

  if (followerError || followingError || ignoringError) {
    console.error(followerError || followingError || ignoringError);
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      },
      __self: _this
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC/\uCC28\uB2E8\uC790 \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4");
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    },
    __self: _this
  }, "\uB0B4 \uD504\uB85C\uD544 | Ymillonga")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    header: "\uD314\uB85C\uC789",
    data: followingsData,
    loading: !followingsData && !followingError,
    onClickMore: loadMoreFollowings,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    header: "\uD314\uB85C\uC6CC",
    data: followersData,
    loading: !followersData && !followerError,
    onClickMore: loadMoreFollowers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_IgnoreList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    header: "\uCC28\uB2E8\uD55C \uC0AC\uC6A9\uC790",
    data: ignoringsData,
    loading: !ignoringsData && !ignoringError,
    onClickMore: loadMoreIgnorers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    },
    __self: _this
  }));
};

_s(Profile, "1gFAID7fYhVcKoVw3tTxkqad4ng=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiaWdub3JpbmdzTGltaXQiLCJzZXRJZ25vcmluZ3NMaW1pdCIsInVzZVNXUiIsImJhY2tVcmwiLCJmZXRjaGVyIiwiZGVkdXBpbmdJbnRlcnZhbCIsImZvbGxvd2luZ3NEYXRhIiwiZGF0YSIsImZvbGxvd2luZ0Vycm9yIiwiZXJyb3IiLCJmb2xsb3dlcnNEYXRhIiwiZm9sbG93ZXJFcnJvciIsImlnbm9yaW5nc0RhdGEiLCJpZ25vcmluZ0Vycm9yIiwibWUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZUVmZmVjdCIsIlJvdXRlciIsInJlcGxhY2UiLCJsb2FkTW9yZUZvbGxvd2luZ3MiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJsb2FkTW9yZUZvbGxvd2VycyIsImxvYWRNb3JlSWdub3JlcnMiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDNEJDLHNEQUFRLENBQUMsQ0FBRCxDQURwQztBQUFBLE1BQ1hDLGVBRFc7QUFBQSxNQUNNQyxrQkFETjs7QUFBQSxtQkFFMEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZsQztBQUFBLE1BRVhHLGNBRlc7QUFBQSxNQUVLQyxpQkFGTDs7QUFBQSxtQkFHMEJKLHNEQUFRLENBQUMsQ0FBRCxDQUhsQztBQUFBLE1BR1hLLGNBSFc7QUFBQSxNQUdLQyxpQkFITDs7QUFBQSxnQkFJc0ND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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJLDREQUFDLDhEQUFEO0FBQ0ksVUFBTSxFQUFDLG9CQURYO0FBRUksUUFBSSxFQUFFUCxjQUZWO0FBR0ksV0FBTyxFQUFFLENBQUNBLGNBQUQsSUFBbUIsQ0FBQ0UsY0FIakM7QUFJSSxlQUFXLEVBQUVhLGtCQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFVSSw0REFBQyw4REFBRDtBQUNJLFVBQU0sRUFBQyxvQkFEWDtBQUVJLFFBQUksRUFBRVgsYUFGVjtBQUdJLFdBQU8sRUFBRSxDQUFDQSxhQUFELElBQWtCLENBQUNDLGFBSGhDO0FBSUksZUFBVyxFQUFFYSxpQkFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBZUksNERBQUMsOERBQUQ7QUFDSSxVQUFNLEVBQUMsdUNBRFg7QUFFSSxRQUFJLEVBQUVaLGFBRlY7QUFHSSxXQUFPLEVBQUUsQ0FBQ0EsYUFBRCxJQUFrQixDQUFDQyxhQUhoQztBQUlJLGVBQVcsRUFBRVksZ0JBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQURKO0FBdUJILENBL0REOztHQUFNL0IsTztVQUlzRFEsMkMsRUFDRkEsMkMsRUFDQUEsMkMsRUFDM0NhLHVEOzs7S0FQVHJCLE87O0FBOEVTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjQ5NGZlMWRhNWIxOGNmYmNkZjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IElnbm9yZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JZ25vcmVMaXN0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBiYWNrVXJsIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uL3V0aWxzL2ZldGNoZXInO1xyXG5pbXBvcnQgeyBMb2FkaW5nRGl2IH0gZnJvbSAnLi4vY29tcG9uZW50cy9zdHlsZSc7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ZvbGxvd2luZ3NMaW1pdCwgc2V0Rm9sbG93aW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgW2ZvbGxvd2Vyc0xpbWl0LCBzZXRGb2xsb3dlcnNMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFtpZ25vcmluZ3NMaW1pdCwgc2V0SWdub3JpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhLCBlcnJvcjogZm9sbG93aW5nRXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlciwgeyBkZWR1cGluZ0ludGVydmFsOiA1MDAwIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhLCBlcnJvcjogZm9sbG93ZXJFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCwgZmV0Y2hlciwgeyBkZWR1cGluZ0ludGVydmFsOiA1MDAwIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhOiBpZ25vcmluZ3NEYXRhLCBlcnJvcjogaWdub3JpbmdFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvaWdub3JpbmdzP2xpbWl0PSR7aWdub3JpbmdzTGltaXR9YCwgZmV0Y2hlciwgeyBkZWR1cGluZ0ludGVydmFsOiA1MDAwIH0pO1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbWUpIHtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbWVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yIHx8IGlnbm9yaW5nRXJyb3IpIHtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbZm9sbG93ZXJFcnJvciwgZm9sbG93aW5nRXJyb3IsIGlnbm9yaW5nRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRGb2xsb3dlcnNMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbG9hZE1vcmVJZ25vcmVycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJZ25vcmluZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmICghbWUpIHtcclxuICAgICAgICByZXR1cm4gKDxMb2FkaW5nRGl2PuydtCDtjpjsnbTsp4DripQg66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgPGJyIC8+IEhvbWXsnLzroZwg7J2064+Z7ZWp64uI64ukLjwvTG9hZGluZ0Rpdj4pXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yIHx8IGlnbm9yaW5nRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IgfHwgaWdub3JpbmdFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuICg8TG9hZGluZ0Rpdj7tjJTroZzsnokv7YyU66Gc7JuML+ywqOuLqOyekCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6Q8L0xvYWRpbmdEaXY+KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhCB8IFltaWxsb25nYTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLtjJTroZzsnolcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17Zm9sbG93aW5nc0RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXshZm9sbG93aW5nc0RhdGEgJiYgIWZvbGxvd2luZ0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOybjFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtmb2xsb3dlcnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2VyRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IC8+XHJcbiAgICAgICAgICAgIDxJZ25vcmVMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLssKjri6jtlZwg7IKs7Jqp7J6QXCJcclxuICAgICAgICAgICAgICAgIGRhdGE9e2lnbm9yaW5nc0RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXshaWdub3JpbmdzRGF0YSAmJiAhaWdub3JpbmdFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUlnbm9yZXJzfSAvPlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcblxyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7ICJdLCJzb3VyY2VSb290IjoiIn0=