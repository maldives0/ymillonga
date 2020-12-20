webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons_UpOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/UpOutlined */ "./node_modules/@ant-design/icons/UpOutlined.js");
/* harmony import */ var _ant_design_icons_UpOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_UpOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();














var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var mainPosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.mainPosts;
  });
  var hasMorePosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.hasMorePosts;
  });
  var loadPostsLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.loadPostsLoading;
  });
  var reportPostDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.reportPostDone;
  });
  var reportPostError = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.reportPostError;
  });
  var retweetError = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.retweetError;
  });
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  });
  var changeNicknameDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.changeNicknameDone;
  });
  var ignoreError = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.ignoreError;
  });
  var unIgnoreError = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.unIgnoreError;
  });
  var ignoreDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.ignoreDone;
  });
  var unIgnoreDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.unIgnoreDone;
  });
  var onClickRelatedPosts = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!id) {
      return alert('로그인이 필요합니다.');
    }

    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_RELATED_POSTS_REQUEST"]
    });
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (ignoreDone) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('차단되었습니다.', 5);
    }

    if (ignoreError) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].error(ignoreError, 5);
    }
  }, [ignoreDone, ignoreError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (unIgnoreDone) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('차단이 풀어졌습니다.', 5);
    }

    if (unIgnoreError) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].error('차단 풀기하는 도중에 에러가 발생했습니다.', 5);
    }
  }, [unIgnoreDone, unIgnoreError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (reportPostDone) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('신고가 접수되었습니다. 빠른 시일 내로 조치하겠습니다.', 5);
    }

    if (reportPostError) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].error(reportPostError, 5);
    }
  }, [reportPostDone, reportPostError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (retweetError) {
      alert('리트윗하는 도중에 에러가 발생했습니다.');
    }
  }, [retweetError]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"],
            lastId: lastId
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      //쌓여있는 이벤트 메모리를 제거해주기
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    },
    __self: _this
  }, me && me.id ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 28
    },
    __self: _this
  }) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_8__["PageHeader"], {
    className: "site-page-header",
    onBack: function onBack() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/login');
    },
    title: "\uB2F9\uC2E0\uC758 \uBC00\uB871\uAC00 \uACBD\uD5D8\uC744 \uACF5\uC720\uD574\uC8FC\uC138\uC694!",
    subTitle: "\uB85C\uADF8\uC778 \uD6C4 \uAC8C\uC2DC\uAE00\uC744 \uC791\uC131\uD574\uBCF4\uC138\uC694.",
    backIcon: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_ant_design_icons_UpOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 31
      },
      __self: _this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 17
    },
    __self: _this
  }), me && me.id && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 29
    },
    __self: _this
  }), me && me.id ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    style: {
      "float": 'right'
    },
    type: "primary",
    loading: loadPostsLoading,
    onClick: onClickRelatedPosts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 29
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/posts/related",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 45
    },
    __self: _this
  }, "\uD314\uB85C\uC789 \uAC8C\uC2DC\uAE00\uB9CC \uBCF4\uAE30"))) : Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
    style: {
      textAlign: 'center',
      marginTop: '1%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 84
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("img", {
    width: 400,
    height: 70,
    src: "/images/dancers.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    },
    __self: _this
  })), mainPosts === null || mainPosts === void 0 ? void 0 : mainPosts.map(function (post) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      },
      __self: _this
    });
  }));
};

_s(Home, "gKS1Q3vjJyh8H1E4Tk5fhnTiMG4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Home;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJtYWluUG9zdHMiLCJwb3N0IiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJlcG9ydFBvc3REb25lIiwicmVwb3J0UG9zdEVycm9yIiwicmV0d2VldEVycm9yIiwiY2hhbmdlTmlja25hbWVEb25lIiwiaWdub3JlRXJyb3IiLCJ1bklnbm9yZUVycm9yIiwiaWdub3JlRG9uZSIsInVuSWdub3JlRG9uZSIsIm9uQ2xpY2tSZWxhdGVkUG9zdHMiLCJ1c2VDYWxsYmFjayIsImFsZXJ0IiwidHlwZSIsIkxPQURfUkVMQVRFRF9QT1NUU19SRVFVRVNUIiwidXNlRWZmZWN0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJSb3V0ZXIiLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2YsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsNkJBQVdB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QUEsZ0VBQTVCLENBTFksQ0FBZixHQUtzRTtBQUFLLFNBQUssRUFBRTtBQUFFdUIsZUFBUyxFQUFFLFFBQWI7QUFBdUJDLGVBQVMsRUFBRTtBQUFsQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDL0Q7QUFDSSxTQUFLLEVBQUUsR0FEWDtBQUVJLFVBQU0sRUFBRSxFQUZaO0FBR0ksT0FBRyxFQUFDLHFCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEK0QsQ0FoQjNFLEVBc0JLcEMsU0F0QkwsYUFzQktBLFNBdEJMLHVCQXNCS0EsU0FBUyxDQUFFcUMsR0FBWCxDQUFlLFVBQUNwQyxJQUFELEVBQVU7QUFDdEIsV0FDSSw0REFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDTixFQUFwQjtBQUF3QixVQUFJLEVBQUVNLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQUdILEdBSkEsQ0F0QkwsQ0FESjtBQThCSCxDQTNHRDs7R0FBTVQsSTtVQUNlRSx1RCxFQUNORSx1RCxFQUNPQSx1RCxFQUNHQSx1RCxFQUNJQSx1RCxFQUNGQSx1RCxFQUNDQSx1RCxFQUNIQSx1RCxFQUNWQSx1RCxFQUNnQkEsdUQsRUFDUEEsdUQsRUFDRUEsdUQsRUFDSEEsdUQsRUFDRUEsdUQ7OztLQWRuQkosSTs7QUE2SFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4YjJiNjY3OGQzNjhmMjYyOWNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJQcm9maWxlJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1JFTEFURURfUE9TVFNfUkVRVUVTVCwgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgUGFnZUhlYWRlciwgbWVzc2FnZSwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGRlZmF1bHQgYXMgVXBPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy9VcE91dGxpbmVkJztcclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgICBjb25zdCBtYWluUG9zdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QubWFpblBvc3RzKTtcclxuICAgIGNvbnN0IGhhc01vcmVQb3N0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5oYXNNb3JlUG9zdHMpO1xyXG4gICAgY29uc3QgbG9hZFBvc3RzTG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5sb2FkUG9zdHNMb2FkaW5nKTtcclxuICAgIGNvbnN0IHJlcG9ydFBvc3REb25lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LnJlcG9ydFBvc3REb25lKTtcclxuICAgIGNvbnN0IHJlcG9ydFBvc3RFcnJvciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5yZXBvcnRQb3N0RXJyb3IpO1xyXG4gICAgY29uc3QgcmV0d2VldEVycm9yID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LnJldHdlZXRFcnJvcik7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZURvbmUpO1xyXG4gICAgY29uc3QgaWdub3JlRXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmlnbm9yZUVycm9yKTtcclxuICAgIGNvbnN0IHVuSWdub3JlRXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLnVuSWdub3JlRXJyb3IpO1xyXG4gICAgY29uc3QgaWdub3JlRG9uZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuaWdub3JlRG9uZSk7XHJcbiAgICBjb25zdCB1bklnbm9yZURvbmUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLnVuSWdub3JlRG9uZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tSZWxhdGVkUG9zdHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZ25vcmVEb25lKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn7LCo64uo65CY7JeI7Iq164uI64ukLicsIDUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpZ25vcmVFcnJvcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGlnbm9yZUVycm9yLCA1KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZ25vcmVEb25lLCBpZ25vcmVFcnJvcl0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1bklnbm9yZURvbmUpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfssKjri6jsnbQg7ZKA7Ja07KGM7Iq164uI64ukLicsIDUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1bklnbm9yZUVycm9yKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ+ywqOuLqCDtkoDquLDtlZjripQg64+E7KSR7JeQIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuJywgNSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbdW5JZ25vcmVEb25lLCB1bklnbm9yZUVycm9yXSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmVwb3J0UG9zdERvbmUpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKCfsi6Dqs6DqsIAg7KCR7IiY65CY7JeI7Iq164uI64ukLiDruaDrpbgg7Iuc7J28IOuCtOuhnCDsobDsuZjtlZjqsqDsirXri4jri6QuJywgNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXBvcnRQb3N0RXJyb3IpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihyZXBvcnRQb3N0RXJyb3IsIDUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZXBvcnRQb3N0RG9uZSwgcmVwb3J0UG9zdEVycm9yXSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZXR3ZWV0RXJyb3IpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ+umrO2KuOycl+2VmOuKlCDrj4TspJHsl5Ag7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmV0d2VldEVycm9yXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0SWQgPSBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdPy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdElkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy/sjJPsl6zsnojripQg7J2067Kk7Yq4IOuplOuqqOumrOulvCDsoJzqsbDtlbTso7zquLBcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7bWUgJiYgbWUuaWQgPyA8VXNlclByb2ZpbGUgLz4gOiAoXHJcbiAgICAgICAgICAgICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtcGFnZS1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQmFjaz17KCkgPT4gUm91dGVyLnB1c2goJy9sb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi64u57Iug7J2YIOuwgOuhseqwgCDqsr3tl5jsnYQg6rO17Jyg7ZW07KO87IS47JqUIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGl0bGU9XCLroZzqt7jsnbgg7ZuEIOqyjOyLnOq4gOydhCDsnpHshLHtlbTrs7TshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICBiYWNrSWNvbj17PFVwT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7bWUgJiYgbWUuaWQgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICAgICAgICB7bWUgJiYgbWUuaWQgPyAoPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRQb3N0c0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrUmVsYXRlZFBvc3RzfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wb3N0cy9yZWxhdGVkJz48YT7tjJTroZzsnokg6rKM7Iuc6riA66eMIOuztOq4sDwvYT48L0xpbms+PC9CdXR0b24+KSA6ICg8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpblRvcDogJzElJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZGFuY2Vycy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+PC9kaXY+KX1cclxuICAgICAgICAgICAge21haW5Qb3N0cz8ubWFwKChwb3N0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7ICJdLCJzb3VyY2VSb290IjoiIn0=