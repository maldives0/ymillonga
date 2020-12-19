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
  }, []);

  if (!me) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      },
      __self: _this
    }, "\uC774 \uD398\uC774\uC9C0\uB294 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      },
      __self: _this
    }), " Home\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4.");
  }

  ;

  if (followerError || followingError || ignoringError) {
    console.error(followerError || followingError || ignoringError);
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      },
      __self: _this
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC/\uCC28\uB2E8\uC790 \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4");
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    },
    __self: _this
  }, "\uB0B4 \uD504\uB85C\uD544 | Ymillonga")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_13__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
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
      lineNumber: 65,
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
      lineNumber: 70,
      columnNumber: 13
    },
    __self: _this
  }));
};

_s(Profile, "QcIYcZyOo03h2GTvRCBfUdaa1vQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiaWdub3JpbmdzTGltaXQiLCJzZXRJZ25vcmluZ3NMaW1pdCIsInVzZVNXUiIsImJhY2tVcmwiLCJmZXRjaGVyIiwiZm9sbG93aW5nc0RhdGEiLCJkYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJlcnJvciIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiaWdub3JpbmdzRGF0YSIsImlnbm9yaW5nRXJyb3IiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJyZXBsYWNlIiwibG9hZE1vcmVGb2xsb3dpbmdzIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibG9hZE1vcmVGb2xsb3dlcnMiLCJsb2FkTW9yZUlnbm9yZXJzIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQzRCQyxzREFBUSxDQUFDLENBQUQsQ0FEcEM7QUFBQSxNQUNYQyxlQURXO0FBQUEsTUFDTUMsa0JBRE47O0FBQUEsbUJBRTBCRixzREFBUSxDQUFDLENBQUQsQ0FGbEM7QUFBQSxNQUVYRyxjQUZXO0FBQUEsTUFFS0MsaUJBRkw7O0FBQUEsbUJBRzBCSixzREFBUSxDQUFDLENBQUQsQ0FIbEM7QUFBQSxNQUdYSyxjQUhXO0FBQUEsTUFHS0MsaUJBSEw7O0FBQUEsZ0JBSXNDQyxtREFBTSxXQUFJQyx1REFBSixv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QUFBQTtBQUFBO0FBQUEsSUFMSixFQVVJLDREQUFDLDhEQUFEO0FBQ0ksVUFBTSxFQUFDLG9CQURYO0FBRUksUUFBSSxFQUFFWixhQUZWO0FBR0ksV0FBTyxFQUFFLENBQUNBLGFBQUQsSUFBa0IsQ0FBQ0MsYUFIaEM7QUFJSSxlQUFXLEVBQUVjLGlCQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFlSSw0REFBQyw4REFBRDtBQUNJLFVBQU0sRUFBQyx1Q0FEWDtBQUVJLFFBQUksRUFBRWIsYUFGVjtBQUdJLFdBQU8sRUFBRSxDQUFDQSxhQUFELElBQWtCLENBQUNDLGFBSGhDO0FBSUksZUFBVyxFQUFFYSxnQkFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWZKLENBREo7QUF1QkgsQ0ExREQ7O0dBQU0vQixPO1VBSXNEUSwyQyxFQUNGQSwyQyxFQUNBQSwyQyxFQUUzQ1ksdUQ7OztLQVJUcEIsTzs7QUF5RVNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNDdkOGQ5MzhjMGUyNjljMTVkMjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QnO1xyXG5pbXBvcnQgSWdub3JlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0lnbm9yZUxpc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vdXRpbHMvZmV0Y2hlcic7XHJcbmltcG9ydCB7IExvYWRpbmdEaXYgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlJztcclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ZvbGxvd2luZ3NMaW1pdCwgc2V0Rm9sbG93aW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgW2ZvbGxvd2Vyc0xpbWl0LCBzZXRGb2xsb3dlcnNMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFtpZ25vcmluZ3NMaW1pdCwgc2V0SWdub3JpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhLCBlcnJvcjogZm9sbG93aW5nRXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKTtcclxuICAgIGNvbnN0IHsgZGF0YTogaWdub3JpbmdzRGF0YSwgZXJyb3I6IGlnbm9yaW5nRXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS91c2VyL2lnbm9yaW5ncz9saW1pdD0ke2lnbm9yaW5nc0xpbWl0fWAsIGZldGNoZXIpO1xyXG5cclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkgfHwgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IgfHwgaWdub3JpbmdFcnJvcikpIHtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbbWUgJiYgbWUuaWQsIGZvbGxvd2VyRXJyb3IsIGZvbGxvd2luZ0Vycm9yLCBpZ25vcmluZ0Vycm9yXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93ZXJzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGxvYWRNb3JlSWdub3JlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0SWdub3JpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgcmV0dXJuICg8TG9hZGluZ0Rpdj7snbQg7Y6Y7J207KeA64qUIOuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuXHJcbiAgICAgICAgICAgIDxiciAvPiBIb21l7Jy866GcIOydtOuPme2VqeuLiOuLpC48L0xvYWRpbmdEaXY+KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvciB8fCBpZ25vcmluZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yIHx8IGlnbm9yaW5nRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiAoPExvYWRpbmdEaXY+7YyU66Gc7J6JL+2MlOuhnOybjC/ssKjri6jsnpAg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukPC9Mb2FkaW5nRGl2Pik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuuCtCDtlITroZztlYQgfCBZbWlsbG9uZ2E8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSAvPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7J6JXCJcclxuICAgICAgICAgICAgICAgIGRhdGE9e2ZvbGxvd2luZ3NEYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17IWZvbGxvd2luZ3NEYXRhICYmICFmb2xsb3dpbmdFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9IC8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLtjJTroZzsm4xcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17Zm9sbG93ZXJzRGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dlcnNEYXRhICYmICFmb2xsb3dlckVycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93ZXJzfSAvPlxyXG4gICAgICAgICAgICA8SWdub3JlTGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi7LCo64uo7ZWcIOyCrOyaqeyekFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtpZ25vcmluZ3NEYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17IWlnbm9yaW5nc0RhdGEgJiYgIWlnbm9yaW5nRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVJZ25vcmVyc30gLz5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG5cclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyAiXSwic291cmNlUm9vdCI6IiJ9