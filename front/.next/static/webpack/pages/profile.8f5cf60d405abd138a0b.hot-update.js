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
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
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
    revalidateOnFocus: true
  }),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/followers?limit=").concat(followersLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    revalidateOnFocus: true
  }),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  var _useSWR3 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("".concat(_config_config__WEBPACK_IMPORTED_MODULE_10__["backUrl"], "/user/ignorings?limit=").concat(ignoringsLimit), _utils_fetcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    revalidateOnFocus: true
  }),
      ignoringsData = _useSWR3.data,
      ignoringError = _useSWR3.error;

  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  }); // const { data: menuKeyData } = useSWR("globalState", { initialData: initialState }, { revalidateOnFocus: true })
  // useEffect(() => {
  //     if (!me) {
  //         mutate("globalState", {
  //             ...menuKeyData,
  //             me: { menuKey: '1' }
  //         })
  //         Router.replace('/');
  //     };
  // }, [me]);

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
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.replace('/');
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      },
      __self: _this
    }, "\uC774 \uD398\uC774\uC9C0\uB294 \uB85C\uADF8\uC778\uC774 \uD544\uC694\uD569\uB2C8\uB2E4.", Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("br", {
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
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_style__WEBPACK_IMPORTED_MODULE_12__["LoadingDiv"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      },
      __self: _this
    }, "\uD314\uB85C\uC789/\uD314\uB85C\uC6CC/\uCC28\uB2E8\uC790 \uB85C\uB529 \uC911 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4");
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    },
    __self: _this
  }, "\uB0B4 \uD504\uB85C\uD544 | Ymillonga")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
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
      lineNumber: 77,
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
      lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiaWdub3JpbmdzTGltaXQiLCJzZXRJZ25vcmluZ3NMaW1pdCIsInVzZVNXUiIsImJhY2tVcmwiLCJmZXRjaGVyIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJmb2xsb3dpbmdzRGF0YSIsImRhdGEiLCJmb2xsb3dpbmdFcnJvciIsImVycm9yIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJpZ25vcmluZ3NEYXRhIiwiaWdub3JpbmdFcnJvciIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJyZXBsYWNlIiwibG9hZE1vcmVGb2xsb3dpbmdzIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibG9hZE1vcmVGb2xsb3dlcnMiLCJsb2FkTW9yZUlnbm9yZXJzIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQzRCQyxzREFBUSxDQUFDLENBQUQsQ0FEcEM7QUFBQSxNQUNYQyxlQURXO0FBQUEsTUFDTUMsa0JBRE47O0FBQUEsbUJBRTBCRixzREFBUSxDQUFDLENBQUQsQ0FGbEM7QUFBQSxNQUVYRyxjQUZXO0FBQUEsTUFFS0MsaUJBRkw7O0FBQUEsbUJBRzBCSixzREFBUSxDQUFDLENBQUQsQ0FIbEM7QUFBQSxNQUdYSyxjQUhXO0FBQUEsTUFHS0MsaUJBSEw7O0FBQUEsZ0JBSXND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SixFQUtJLDREQUFDLDhEQUFEO0FBQ0ksVUFBTSxFQUFDLG9CQURYO0FBRUksUUFBSSxFQUFFUCxjQUZWO0FBR0ksV0FBTyxFQUFFLENBQUNBLGNBQUQsSUFBbUIsQ0FBQ0UsY0FIakM7QUFJSSxlQUFXLEVBQUVhLGtCQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFVSSw0REFBQyw4REFBRDtBQUNJLFVBQU0sRUFBQyxvQkFEWDtBQUVJLFFBQUksRUFBRVgsYUFGVjtBQUdJLFdBQU8sRUFBRSxDQUFDQSxhQUFELElBQWtCLENBQUNDLGFBSGhDO0FBSUksZUFBVyxFQUFFYSxpQkFKakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBZUksNERBQUMsOERBQUQ7QUFDSSxVQUFNLEVBQUMsdUNBRFg7QUFFSSxRQUFJLEVBQUVaLGFBRlY7QUFHSSxXQUFPLEVBQUUsQ0FBQ0EsYUFBRCxJQUFrQixDQUFDQyxhQUhoQztBQUlJLGVBQVcsRUFBRVksZ0JBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFmSixDQURKO0FBdUJILENBdEVEOztHQUFNL0IsTztVQUlzRFEsMkMsRUFDRkEsMkMsRUFDQUEsMkMsRUFDM0NhLHVEOzs7S0FQVHJCLE87O0FBcUZTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjhmNWNmNjBkNDA1YWJkMTM4YTBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IElnbm9yZUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JZ25vcmVMaXN0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHVzZVNXUiwgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IGJhY2tVcmwgfSBmcm9tICcuLi9jb25maWcvY29uZmlnJztcclxuaW1wb3J0IGZldGNoZXIgZnJvbSAnLi4vdXRpbHMvZmV0Y2hlcic7XHJcbmltcG9ydCB7IExvYWRpbmdEaXYgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlJztcclxuaW1wb3J0IHsgaW5pdGlhbFN0YXRlIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgW2lnbm9yaW5nc0xpbWl0LCBzZXRJZ25vcmluZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGVycm9yOiBmb2xsb3dpbmdFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvZm9sbG93aW5ncz9saW1pdD0ke2ZvbGxvd2luZ3NMaW1pdH1gLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhLCBlcnJvcjogZm9sbG93ZXJFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCwgZmV0Y2hlciwgeyByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IHsgZGF0YTogaWdub3JpbmdzRGF0YSwgZXJyb3I6IGlnbm9yaW5nRXJyb3IgfSA9IHVzZVNXUihgJHtiYWNrVXJsfS91c2VyL2lnbm9yaW5ncz9saW1pdD0ke2lnbm9yaW5nc0xpbWl0fWAsIGZldGNoZXIsIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUgfSk7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgLy8gY29uc3QgeyBkYXRhOiBtZW51S2V5RGF0YSB9ID0gdXNlU1dSKFwiZ2xvYmFsU3RhdGVcIiwgeyBpbml0aWFsRGF0YTogaW5pdGlhbFN0YXRlIH0sIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUgfSlcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICghbWUpIHtcclxuICAgIC8vICAgICAgICAgbXV0YXRlKFwiZ2xvYmFsU3RhdGVcIiwge1xyXG4gICAgLy8gICAgICAgICAgICAgLi4ubWVudUtleURhdGEsXHJcbiAgICAvLyAgICAgICAgICAgICBtZTogeyBtZW51S2V5OiAnMScgfVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyB9LCBbbWVdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yIHx8IGlnbm9yaW5nRXJyb3IpIHtcclxuICAgICAgICAgICAgUm91dGVyLnJlcGxhY2UoJy8nKVxyXG4gICAgICAgIH07XHJcbiAgICB9LCBbZm9sbG93ZXJFcnJvciwgZm9sbG93aW5nRXJyb3IsIGlnbm9yaW5nRXJyb3JdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2VycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRGb2xsb3dlcnNMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3QgbG9hZE1vcmVJZ25vcmVycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJZ25vcmluZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmICghbWUpIHtcclxuICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMb2FkaW5nRGl2PuydtCDtjpjsnbTsp4DripQg66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC5cclxuICAgICAgICAgICAgICAgIDxiciAvPiBIb21l7Jy866GcIOydtOuPme2VqeuLiOuLpC48L0xvYWRpbmdEaXY+KVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZm9sbG93ZXJFcnJvciB8fCBmb2xsb3dpbmdFcnJvciB8fCBpZ25vcmluZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yIHx8IGlnbm9yaW5nRXJyb3IpO1xyXG4gICAgICAgIHJldHVybiAoPExvYWRpbmdEaXY+7YyU66Gc7J6JL+2MlOuhnOybjC/ssKjri6jsnpAg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukPC9Mb2FkaW5nRGl2Pik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuuCtCDtlITroZztlYQgfCBZbWlsbG9uZ2E8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxVc2VyUHJvZmlsZSAvPlxyXG4gICAgICAgICAgICA8Rm9sbG93TGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi7YyU66Gc7J6JXCJcclxuICAgICAgICAgICAgICAgIGRhdGE9e2ZvbGxvd2luZ3NEYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17IWZvbGxvd2luZ3NEYXRhICYmICFmb2xsb3dpbmdFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9IC8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLtjJTroZzsm4xcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17Zm9sbG93ZXJzRGF0YX1cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9eyFmb2xsb3dlcnNEYXRhICYmICFmb2xsb3dlckVycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93ZXJzfSAvPlxyXG4gICAgICAgICAgICA8SWdub3JlTGlzdFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyPVwi7LCo64uo7ZWcIOyCrOyaqeyekFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtpZ25vcmluZ3NEYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17IWlnbm9yaW5nc0RhdGEgJiYgIWlnbm9yaW5nRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVJZ25vcmVyc30gLz5cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG5cclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlOyAiXSwic291cmNlUm9vdCI6IiJ9