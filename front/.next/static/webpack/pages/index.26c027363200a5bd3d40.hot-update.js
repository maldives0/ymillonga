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
  var leaveDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.leaveDone;
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
    if (leaveDone) {
      antd__WEBPACK_IMPORTED_MODULE_8__["message"].success('탈퇴처리가 완료되었습니다.');
      dispatch({
        type: LOG_OUT_REQUEST
      });
    }
  }, [leaveDone]);
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
      lineNumber: 103,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("div", {
    style: {
      textAlign: 'center',
      marginTop: '5%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("img", {
    width: 400,
    height: 70,
    src: "/images/dancers.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    },
    __self: _this
  })), me && me.id ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
    backIcon: Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_8__["Tooltip"], {
      title: "\uB85C\uADF8\uC778\uD558\uB7EC \uAC00\uAE30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 31
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_ant_design_icons_UpOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 22
      },
      __self: _this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    },
    __self: _this
  }), me && me.id && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    style: {
      marginBottom: 5
    },
    type: "primary",
    loading: loadPostsLoading,
    onClick: onClickRelatedPosts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/posts/related",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 25
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 29
    },
    __self: _this
  }, "\uD314\uB85C\uC789 \uAC8C\uC2DC\uAE00\uB9CC \uBCF4\uAE30")))), mainPosts === null || mainPosts === void 0 ? void 0 : mainPosts.map(function (post) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      },
      __self: _this
    });
  }));
};

_s(Home, "8X2Arz/VYvU4IYV1nz5lOf9QAgM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJtYWluUG9zdHMiLCJwb3N0IiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJlcG9ydFBvc3REb25lIiwicmVwb3J0UG9zdEVycm9yIiwicmV0d2VldEVycm9yIiwiaWdub3JlRXJyb3IiLCJ1bklnbm9yZUVycm9yIiwiaWdub3JlRG9uZSIsInVuSWdub3JlRG9uZSIsImxlYXZlRG9uZSIsIm9uQ2xpY2tSZWxhdGVkUG9zdHMiLCJ1c2VDYWxsYmFjayIsImFsZXJ0IiwidHlwZSIsIkxPQURfUkVMQVRFRF9QT1NUU19SRVFVRVNUIiwidXNlRWZmZWN0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJMT0dfT1VUX1JFUVVFU1QiLCJlcnJvciIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJSb3V0ZXIiLCJwdXNoIiwibWFyZ2luQm90dG9tIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFB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YnBhY2svcGFnZXMvaW5kZXguMjZjMDI3MzYzMjAwYTViZDNkNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Rm9ybSc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFVzZXJQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclByb2ZpbGUnO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QsIExPQURfUkVMQVRFRF9QT1NUU19SRVFVRVNULCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBQYWdlSGVhZGVyLCBtZXNzYWdlLCBCdXR0b24sIFRvb2x0aXAgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZGVmYXVsdCBhcyBVcE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1VwT3V0bGluZWQnO1xyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICAgIGNvbnN0IG1haW5Qb3N0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5tYWluUG9zdHMpO1xyXG4gICAgY29uc3QgaGFzTW9yZVBvc3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0Lmhhc01vcmVQb3N0cyk7XHJcbiAgICBjb25zdCBsb2FkUG9zdHNMb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LmxvYWRQb3N0c0xvYWRpbmcpO1xyXG4gICAgY29uc3QgcmVwb3J0UG9zdERvbmUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QucmVwb3J0UG9zdERvbmUpO1xyXG4gICAgY29uc3QgcmVwb3J0UG9zdEVycm9yID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0LnJlcG9ydFBvc3RFcnJvcik7XHJcbiAgICBjb25zdCByZXR3ZWV0RXJyb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QucmV0d2VldEVycm9yKTtcclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCBpZ25vcmVFcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuaWdub3JlRXJyb3IpO1xyXG4gICAgY29uc3QgdW5JZ25vcmVFcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIudW5JZ25vcmVFcnJvcik7XHJcbiAgICBjb25zdCBpZ25vcmVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5pZ25vcmVEb25lKTtcclxuICAgIGNvbnN0IHVuSWdub3JlRG9uZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIudW5JZ25vcmVEb25lKTtcclxuICAgIGNvbnN0IGxlYXZlRG9uZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5sZWF2ZURvbmUpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tSZWxhdGVkUG9zdHMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+uhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9SRUxBVEVEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaWRdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxlYXZlRG9uZSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+2DiO2HtOyymOumrOqwgCDsmYTro4zrkJjsl4jsirXri4jri6QuJyk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2xlYXZlRG9uZV0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWdub3JlRG9uZSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+ywqOuLqOuQmOyXiOyKteuLiOuLpC4nLCA1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWdub3JlRXJyb3IpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihpZ25vcmVFcnJvciwgNSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWdub3JlRG9uZSwgaWdub3JlRXJyb3JdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodW5JZ25vcmVEb25lKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn7LCo64uo7J20IO2SgOyWtOyhjOyKteuLiOuLpC4nLCA1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5JZ25vcmVFcnJvcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKCfssKjri6gg7ZKA6riw7ZWY64qUIOuPhOykkeyXkCDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicsIDUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VuSWdub3JlRG9uZSwgdW5JZ25vcmVFcnJvcl0pXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcG9ydFBvc3REb25lKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn7Iug6rOg6rCAIOygkeyImOuQmOyXiOyKteuLiOuLpC4g67mg66W4IOyLnOydvCDrgrTroZwg7KGw7LmY7ZWY6rKg7Iq164uI64ukLicsIDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVwb3J0UG9zdEVycm9yKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IocmVwb3J0UG9zdEVycm9yLCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVwb3J0UG9zdERvbmUsIHJlcG9ydFBvc3RFcnJvcl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfrpqztirjsnJftlZjripQg64+E7KSR7JeQIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v7IyT7Jes7J6I64qUIOydtOuypO2KuCDrqZTrqqjrpqzrpbwg7KCc6rGw7ZW07KO86riwXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1JScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZGFuY2Vycy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHttZSAmJiBtZS5pZCA/IDxVc2VyUHJvZmlsZSAvPiA6IChcclxuICAgICAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLri7nsi6DsnZgg67CA66Gx6rCAIOqyve2XmOydhCDqs7XsnKDtlbTso7zshLjsmpQhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT1cIuuhnOq3uOyduCDtm4Qg6rKM7Iuc6riA7J2EIOyekeyEse2VtOuztOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tJY29uPXs8VG9vbHRpcCB0aXRsZT1cIuuhnOq3uOyduO2VmOufrCDqsIDquLBcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+PFVwT3V0bGluZWQgLz48L1Rvb2x0aXA+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge21lICYmIG1lLmlkICYmXHJcbiAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRQb3N0c0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tSZWxhdGVkUG9zdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcG9zdHMvcmVsYXRlZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzsnokg6rKM7Iuc6riA66eMIOuztOq4sDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgIHttYWluUG9zdHM/Lm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyAiXSwic291cmNlUm9vdCI6IiJ9