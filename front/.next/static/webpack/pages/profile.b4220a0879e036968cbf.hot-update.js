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
  });

  var _useSWR4 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("globalState", {
    initialData: _reducers_user__WEBPACK_IMPORTED_MODULE_13__["initialState"]
  }, {
    revalidateOnFocus: true
  }),
      menuKeyData = _useSWR4.data; // useEffect(() => {
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

_s(Profile, "o1TawNumtyKucjINPMokQzxpqI4=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_9__["default"], swr__WEBPACK_IMPORTED_MODULE_9__["default"], swr__WEBPACK_IMPORTED_MODULE_9__["default"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_9__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwiaWdub3JpbmdzTGltaXQiLCJzZXRJZ25vcmluZ3NMaW1pdCIsInVzZVNXUiIsImJhY2tVcmwiLCJmZXRjaGVyIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJmb2xsb3dpbmdzRGF0YSIsImRhdGEiLCJmb2xsb3dpbmdFcnJvciIsImVycm9yIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJpZ25vcmluZ3NEYXRhIiwiaWdub3JpbmdFcnJvciIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpbml0aWFsRGF0YSIsImluaXRpYWxTdGF0ZSIsIm1lbnVLZXlEYXRhIiwidXNlRWZmZWN0IiwiUm91dGVyIiwicmVwbGFjZSIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93ZXJzIiwibG9hZE1vcmVJZ25vcmVycyIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLGtCQUM0QkMsc0RBQVEsQ0FBQyxDQUFELENBRHBDO0FBQUEsTUFDWEMsZUFEVztBQUFBLE1BQ01DLGtCQUROOztBQUFBLG1CQUUwQkYsc0RBQVEsQ0FBQyxDQUFELENBRmxDO0FBQUEsTUFFWEcsY0FGVztBQUFBLE1BRUtDLGlCQUZMOztBQUFBLG1CQUcwQkosc0RBQVEsQ0FBQyxDQUFELENBSGxDO0FBQUEsTUFHWEssY0FIVztBQUFBLE1BR0tDLGlCQUhMOztBQUFBLGdCQUlzQ0MsbURBQU0sV0FBSUMsdURBQUosb0NBQXFDUCxlQUFyQyxHQUF3RFEsdURBQXhELEVBQWlFO0FBQUVDLHFCQUFpQixFQUFFO0FBQXJCLEdBQWpFLENBSjVDO0FBQUEsTUFJSkMsY0FKSSxXQUlWQyxJQUpVO0FBQUEsTUFJbUJDLGNBSm5CLFdBSVlDLEtBSlo7O0FBQUEsaUJBS29DUCxtREFBTSxXQUFJQyx1REFBSixtQ0FBb0NMLGNBQXBDLEdBQXNETSx1REFBdEQsRUFBK0Q7QUFBRUMscUJBQWlCLEVBQUU7QUFBckIsR0FBL0QsQ0FMMUM7QUFBQSxNQUtKSyxhQUxJLFlBS1ZILElBTFU7QUFBQSxNQUtrQkksYUFMbEIsWUFLV0YsS0FMWDs7QUFBQSxpQkFNb0NQLG1EQUFNLFdBQUlDLHVEQUFKLG1DQUFvQ0gsY0FBcEMsR0FBc0RJLHVEQUF0RCxFQUErRDtBQUFFQyxxQkFBaUIsRUFBRTtBQUFyQixHQUEvRCxDQU4xQztBQUFBLE1BTUpPLGFBTkksWUFNVkwsSUFOVTtBQUFBLE1BTWtCTSxhQU5sQixZQU1XSixLQU5YOztBQU9sQixNQUFNSyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSCxFQUFmO0FBQUEsR0FBTixDQUF0Qjs7QUFQa0IsaUJBUVlaLG1EQUFNLENBQUMsYUFBRCxFQUFnQjtBQUFFZ0IsZUFBVyxFQUFFQyw0REFBWUE7QUFBM0IsR0FBaEIsRUFBK0M7QUFBRWQscUJBQWlCLEVBQUU7QUFBckIsR0FBL0MsQ0FSbEI7QUFBQSxNQVFKZSxXQVJJLFlBUVZiLElBUlUsRUFVbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQWMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSVYsYUFBYSxJQUFJSCxjQUFqQixJQUFtQ0ssYUFBdkMsRUFBc0Q7QUFDbERTLHdEQUFNLENBQUNDLE9BQVAsQ0FBZSxHQUFmO0FBQ0g7O0FBQUE7QUFDSixHQUpRLEVBSU4sQ0FBQ1osYUFBRCxFQUFnQkgsY0FBaEIsRUFBZ0NLLGFBQWhDLENBSk0sQ0FBVDtBQU1BLE1BQU1XLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDekM1QixzQkFBa0IsQ0FBQyxVQUFDNkIsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBbEI7QUFDSCxHQUZxQyxFQUVuQyxFQUZtQyxDQUF0QztBQUdBLE1BQU1DLGlCQUFpQixHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDeEMxQixxQkFBaUIsQ0FBQyxVQUFDMkIsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBakI7QUFDSCxHQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztBQUdBLE1BQU1FLGdCQUFnQixHQUFHSCx5REFBVyxDQUFDLFlBQU07QUFDdkN4QixxQkFBaUIsQ0FBQyxVQUFDeUIsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBakI7QUFDSCxHQUZtQyxFQUVqQyxFQUZpQyxDQUFwQzs7QUFJQSxNQUFJLENBQUNaLEVBQUwsRUFBUztBQUNMUSxzREFBTSxDQUFDQyxPQUFQLENBQWUsR0FBZjtBQUNBLFdBQ0ksNERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtR0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosc0RBREo7QUFHSDs7QUFBQTs7QUFFRCxNQUFJWixhQUFhLElBQUlILGNBQWpCLElBQW1DSyxhQUF2QyxFQUFzRDtBQUNsRGdCLFdBQU8sQ0FBQ3BCLEtBQVIsQ0FBY0UsYUFBYSxJQUFJSCxjQUFqQixJQUFtQ0ssYUFBakQ7QUFDQSxXQUFRLDREQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOElBQVI7QUFDSDs7QUFDRCxTQUNJLDREQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSw0REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FESixDQURKLEVBSUksNERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBS0ksNERBQUMsOERBQUQ7QUFDSSxVQUFNLEVBQUMsb0JBRFg7QUFFSSxRQUFJLEVBQUVQLGNBRlY7QUFHSSxXQUFPLEVBQUUsQ0FBQ0EsY0FBRCxJQUFtQixDQUFDRSxjQUhqQztBQUlJLGVBQVcsRUFBRWdCLGtCQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEosRUFVSSw0REFBQyw4REFBRDtBQUNJLFVBQU0sRUFBQyxvQkFEWDtBQUVJLFFBQUksRUFBRWQsYUFGVjtBQUdJLFdBQU8sRUFBRSxDQUFDQSxhQUFELElBQWtCLENBQUNDLGFBSGhDO0FBSUksZUFBVyxFQUFFZ0IsaUJBSmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQWVJLDREQUFDLDhEQUFEO0FBQ0ksVUFBTSxFQUFDLHVDQURYO0FBRUksUUFBSSxFQUFFZixhQUZWO0FBR0ksV0FBTyxFQUFFLENBQUNBLGFBQUQsSUFBa0IsQ0FBQ0MsYUFIaEM7QUFJSSxlQUFXLEVBQUVlLGdCQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosQ0FESjtBQXVCSCxDQXRFRDs7R0FBTWxDLE87VUFJc0RRLDJDLEVBQ0ZBLDJDLEVBQ0FBLDJDLEVBQzNDYSx1RCxFQUNtQmIsMkM7OztLQVI1QlIsTzs7QUFxRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYjQyMjBhMDg3OWUwMzY5NjhjYmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QnO1xyXG5pbXBvcnQgSWdub3JlTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0lnbm9yZUxpc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgYmFja1VybCB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tICcuLi91dGlscy9mZXRjaGVyJztcclxuaW1wb3J0IHsgTG9hZGluZ0RpdiB9IGZyb20gJy4uL2NvbXBvbmVudHMvc3R5bGUnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmb2xsb3dpbmdzTGltaXQsIHNldEZvbGxvd2luZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFtmb2xsb3dlcnNMaW1pdCwgc2V0Rm9sbG93ZXJzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbaWdub3JpbmdzTGltaXQsIHNldElnbm9yaW5nc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vdXNlci9mb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsIGZldGNoZXIsIHsgcmV2YWxpZGF0ZU9uRm9jdXM6IHRydWUgfSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYCR7YmFja1VybH0vdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyLCB7IHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlIH0pO1xyXG4gICAgY29uc3QgeyBkYXRhOiBpZ25vcmluZ3NEYXRhLCBlcnJvcjogaWdub3JpbmdFcnJvciB9ID0gdXNlU1dSKGAke2JhY2tVcmx9L3VzZXIvaWdub3JpbmdzP2xpbWl0PSR7aWdub3JpbmdzTGltaXR9YCwgZmV0Y2hlciwgeyByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSB9KTtcclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCB7IGRhdGE6IG1lbnVLZXlEYXRhIH0gPSB1c2VTV1IoXCJnbG9iYWxTdGF0ZVwiLCB7IGluaXRpYWxEYXRhOiBpbml0aWFsU3RhdGUgfSwgeyByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSB9KVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKCFtZSkge1xyXG4gICAgLy8gICAgICAgICBtdXRhdGUoXCJnbG9iYWxTdGF0ZVwiLCB7XHJcbiAgICAvLyAgICAgICAgICAgICAuLi5tZW51S2V5RGF0YSxcclxuICAgIC8vICAgICAgICAgICAgIG1lOiB7IG1lbnVLZXk6ICcxJyB9XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vIH0sIFttZV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IgfHwgaWdub3JpbmdFcnJvcikge1xyXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtmb2xsb3dlckVycm9yLCBmb2xsb3dpbmdFcnJvciwgaWdub3JpbmdFcnJvcl0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRGb2xsb3dpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBsb2FkTW9yZUlnbm9yZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldElnbm9yaW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKCFtZSkge1xyXG4gICAgICAgIFJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExvYWRpbmdEaXY+7J20IO2OmOydtOyngOuKlCDroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+IEhvbWXsnLzroZwg7J2064+Z7ZWp64uI64ukLjwvTG9hZGluZ0Rpdj4pXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yIHx8IGlnbm9yaW5nRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGZvbGxvd2VyRXJyb3IgfHwgZm9sbG93aW5nRXJyb3IgfHwgaWdub3JpbmdFcnJvcik7XHJcbiAgICAgICAgcmV0dXJuICg8TG9hZGluZ0Rpdj7tjJTroZzsnokv7YyU66Gc7JuML+ywqOuLqOyekCDroZzrlKkg7KSRIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6Q8L0xvYWRpbmdEaXY+KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhCB8IFltaWxsb25nYTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlIC8+XHJcbiAgICAgICAgICAgIDxGb2xsb3dMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLtjJTroZzsnolcIlxyXG4gICAgICAgICAgICAgICAgZGF0YT17Zm9sbG93aW5nc0RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXshZm9sbG93aW5nc0RhdGEgJiYgIWZvbGxvd2luZ0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgPEZvbGxvd0xpc3RcclxuICAgICAgICAgICAgICAgIGhlYWRlcj1cIu2MlOuhnOybjFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhPXtmb2xsb3dlcnNEYXRhfVxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17IWZvbGxvd2Vyc0RhdGEgJiYgIWZvbGxvd2VyRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IC8+XHJcbiAgICAgICAgICAgIDxJZ25vcmVMaXN0XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI9XCLssKjri6jtlZwg7IKs7Jqp7J6QXCJcclxuICAgICAgICAgICAgICAgIGRhdGE9e2lnbm9yaW5nc0RhdGF9XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXshaWdub3JpbmdzRGF0YSAmJiAhaWdub3JpbmdFcnJvcn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUlnbm9yZXJzfSAvPlxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcblxyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICAgIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICAgIH1cclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcblxyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7ICJdLCJzb3VyY2VSb290IjoiIn0=