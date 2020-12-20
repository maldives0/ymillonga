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
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("img", {
    width: 400,
    height: 70,
    src: "/images/dancers.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    },
    __self: _this
  })), me && me.id ? Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_UserProfile__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
        lineNumber: 110,
        columnNumber: 31
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_ant_design_icons_UpOutlined__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 22
      },
      __self: _this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    },
    __self: _this
  }), me && me.id && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
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
      lineNumber: 118,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/posts/related",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 29
    },
    __self: _this
  }, "\uD314\uB85C\uC789 \uAC8C\uC2DC\uAE00\uB9CC \uBCF4\uAE30")))), mainPosts === null || mainPosts === void 0 ? void 0 : mainPosts.map(function (post) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 21
      },
      __self: _this
    });
  }));
};

_s(Home, "SylGYbrgwjrevGni3xX0rERKkRE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJtYWluUG9zdHMiLCJwb3N0IiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInJlcG9ydFBvc3REb25lIiwicmVwb3J0UG9zdEVycm9yIiwicmV0d2VldEVycm9yIiwiaWdub3JlRXJyb3IiLCJ1bklnbm9yZUVycm9yIiwiaWdub3JlRG9uZSIsInVuSWdub3JlRG9uZSIsIm9uQ2xpY2tSZWxhdGVkUG9zdHMiLCJ1c2VDYWxsYmFjayIsImFsZXJ0IiwidHlwZSIsIkxPQURfUkVMQVRFRF9QT1NUU19SRVFVRVNUIiwidXNlRWZmZWN0IiwibWVzc2FnZSIsInN1Y2Nlc3MiLCJlcnJvciIsIm9uU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGFzdElkIiwibGVuZ3RoIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJSb3V0ZXIiLCJwdXNoIiwibWFyZ2luQm90dG9tIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTs7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLDZCQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBdEIsbURBQVcsZUFBZUosRUFBMUI7QUFBQSxHQUFELENBQXRCO0FBQ0EsTUFBTUssU0FBUyxHQUFHSiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLElBQU4sQ0FBV0QsU0FBdEI7QUFBQSxHQUFELENBQTdCO0FBQ0EsTUFBTUUsWUFBWSxHQUFHTiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLElBQU4sQ0FBV0MsWUFBdEI7QUFBQSxHQUFELENBQWhDO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdQLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0ksSUFBTixDQUFXRSxnQkFBdEI7QUFBQSxHQUFELENBQXBDO0FBQ0EsTUFBTUMsY0FBYyxHQUFHUiwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLElBQU4sQ0FBV0csY0FBdEI7QUFBQSxHQUFELENBQWxDO0FBQ0EsTUFBTUMsZUFBZSxHQUFHVCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLElBQU4sQ0FBV0ksZUFBdEI7QUFBQSxHQUFELENBQW5DO0FBQ0EsTUFBTUMsWUFBWSxHQUFHViwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNJLElBQU4sQ0FBV0ssWUFBdEI7QUFBQSxHQUFELENBQWhDO0FBQ0EsTUFBTVAsRUFBRSxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBZjtBQUFBLEdBQU4sQ0FBdEI7QUFDQSxNQUFNUSxXQUFXLEdBQUdYLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXUyxXQUFmO0FBQUEsR0FBTixDQUEvQjtBQUNBLE1BQU1DLGFBQWEsR0FBR1osK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdVLGFBQWY7QUFBQSxHQUFOLENBQWpDO0FBQ0EsTUFBTUMsVUFBVSxHQUFHYiwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV1csVUFBZjtBQUFBLEdBQU4sQ0FBOUI7QUFDQSxNQUFNQyxZQUFZLEdBQUdkLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXWSxZQUFmO0FBQUEsR0FBTixDQUFoQztBQUdBLE1BQU1DLG1CQUFtQixHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDMUMsUUFBSSxDQUFDakIsRUFBTCxFQUFTO0FBQ0wsYUFBT2tCLEtBQUssQ0FBQyxhQUFELENBQVo7QUFDSDs7QUFDRHBCLFlBQVEsQ0FBQztBQUNMcUIsVUFBSSxFQUFFQyx5RUFBMEJBO0FBRDNCLEtBQUQsQ0FBUjtBQUdILEdBUHNDLEVBT3BDLENBQUNwQixFQUFELENBUG9DLENBQXZDO0FBU0FxQix5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJUCxVQUFKLEVBQWdCO0FBQ1pRLGtEQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBaEIsRUFBNEIsQ0FBNUI7QUFDSDs7QUFDRCxRQUFJWCxXQUFKLEVBQWlCO0FBQ2JVLGtEQUFPLENBQUNFLEtBQVIsQ0FBY1osV0FBZCxFQUEyQixDQUEzQjtBQUNIO0FBQ0osR0FQUSxFQU9OLENBQUNFLFVBQUQsRUFBYUYsV0FBYixDQVBNLENBQVQ7QUFRQVMseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSU4sWUFBSixFQUFrQjtBQUNkTyxrREFBTyxDQUFDQyxPQUFSLENBQWdCLGFBQWhCLEVBQStCLENBQS9CO0FBQ0g7O0FBQ0QsUUFBSVYsYUFBSixFQUFtQjtBQUNmUyxrREFBTyxDQUFDRSxLQUFSLENBQWMseUJBQWQsRUFBeUMsQ0FBekM7QUFDSDtBQUNKLEdBUFEsRUFPTixDQUFDVCxZQUFELEVBQWVGLGFBQWYsQ0FQTSxDQUFUO0FBVUFRLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlaLGNBQUosRUFBb0I7QUFDaEJhLGtEQUFPLENBQUNDLE9BQVIsQ0FBZ0IsZ0NBQWhCLEVBQWtELENBQWxEO0FBQ0g7O0FBQ0QsUUFBSWIsZUFBSixFQUFxQjtBQUNqQlksa0RBQU8sQ0FBQ0UsS0FBUixDQUFjZCxlQUFkLEVBQStCLENBQS9CO0FBQ0g7QUFDSixHQVBRLEVBT04sQ0FBQ0QsY0FBRCxFQUFpQkMsZUFBakIsQ0FQTSxDQUFUO0FBUUFXLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlWLFlBQUosRUFBa0I7QUFDZE8sV0FBSyxDQUFDLHVCQUFELENBQUw7QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFDUCxZQUFELENBSk0sQ0FBVDtBQU1BVSx5REFBUyxDQUFDLFlBQU07QUFDWixhQUFTSSxRQUFULEdBQW9CO0FBQ2hCLFVBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUF5REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUF6QixHQUF3QyxHQUFyRyxFQUEwRztBQUN0RyxZQUFJeEIsWUFBWSxJQUFJLENBQUNDLGdCQUFyQixFQUF1QztBQUFBOztBQUNuQyxjQUFNd0IsTUFBTSxpQkFBRzNCLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDNEIsTUFBVixHQUFtQixDQUFwQixDQUFaLCtDQUFHLFdBQWlDakMsRUFBaEQ7QUFDQUYsa0JBQVEsQ0FBQztBQUNMcUIsZ0JBQUksRUFBRWUsaUVBREQ7QUFFTEYsa0JBQU0sRUFBTkE7QUFGSyxXQUFELENBQVI7QUFJSDtBQUNKO0FBQ0o7O0FBQ0ROLFVBQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NWLFFBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1Q7QUFDQUMsWUFBTSxDQUFDVSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1gsUUFBckM7QUFDSCxLQUhEO0FBSUgsR0FqQlEsRUFpQk4sQ0FBQ3BCLFNBQUQsRUFBWUUsWUFBWixFQUEwQkMsZ0JBQTFCLENBakJNLENBQVQ7QUFtQkEsU0FDSSw0REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRTZCLGVBQVMsRUFBRSxRQUFiO0FBQXVCQyxlQUFTLEVBQUU7QUFBbEMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxTQUFLLEVBQUUsR0FEWDtBQUVJLFVBQU0sRUFBRSxFQUZaO0FBR0ksT0FBRyxFQUFDLHFCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBUUtsQyxFQUFFLElBQUlBLEVBQUUsQ0FBQ0osRUFBVCxHQUFjLDREQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZCxHQUNHLDREQUFDLCtDQUFEO0FBQ0ksYUFBUyxFQUFDLGtCQURkO0FBRUksVUFBTSxFQUFFO0FBQUEsYUFBTXVDLG1EQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLENBQU47QUFBQSxLQUZaO0FBR0ksU0FBSyxFQUFDLGdHQUhWO0FBSUksWUFBUSxFQUFDLDBGQUpiO0FBS0ksWUFBUSxFQUFFLDREQUFDLDRDQUFEO0FBQVMsV0FBSyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFVCw0REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlMsQ0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVFIsRUFtQktwQyxFQUFFLElBQUlBLEVBQUUsQ0FBQ0osRUFBVCxJQUNJLHlIQUNHLDREQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxFQUVHLDREQUFDLDJDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUV5QyxrQkFBWSxFQUFFO0FBQWhCLEtBRFg7QUFFSSxRQUFJLEVBQUMsU0FGVDtBQUdJLFdBQU8sRUFBRWpDLGdCQUhiO0FBSUksV0FBTyxFQUFFUSxtQkFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0ksNERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBREosQ0FMSixDQUZILENBcEJULEVBZ0NLWCxTQWhDTCxhQWdDS0EsU0FoQ0wsdUJBZ0NLQSxTQUFTLENBQUVxQyxHQUFYLENBQWUsVUFBQ3BDLElBQUQsRUFBVTtBQUN0QixXQUNJLDREQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNOLEVBQXBCO0FBQXdCLFVBQUksRUFBRU0sSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKO0FBR0gsR0FKQSxDQWhDTCxDQURKO0FBd0NILENBcEhEOztHQUFNVCxJO1VBQ2VFLHVELEVBQ05FLHVELEVBQ09BLHVELEVBQ0dBLHVELEVBQ0lBLHVELEVBQ0ZBLHVELEVBQ0NBLHVELEVBQ0hBLHVELEVBQ1ZBLHVELEVBQ1NBLHVELEVBQ0VBLHVELEVBQ0hBLHVELEVBQ0VBLHVEOzs7S0FibkJKLEk7O0FBc0lTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMjc1OTVkZGY3ZWRkYWU2NjJmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZSc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCwgTE9BRF9SRUxBVEVEX1BPU1RTX1JFUVVFU1QsIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFBhZ2VIZWFkZXIsIG1lc3NhZ2UsIEJ1dHRvbiwgVG9vbHRpcCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBkZWZhdWx0IGFzIFVwT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMvVXBPdXRsaW5lZCc7XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gICAgY29uc3QgbWFpblBvc3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0Lm1haW5Qb3N0cyk7XHJcbiAgICBjb25zdCBoYXNNb3JlUG9zdHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QuaGFzTW9yZVBvc3RzKTtcclxuICAgIGNvbnN0IGxvYWRQb3N0c0xvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QubG9hZFBvc3RzTG9hZGluZyk7XHJcbiAgICBjb25zdCByZXBvcnRQb3N0RG9uZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5yZXBvcnRQb3N0RG9uZSk7XHJcbiAgICBjb25zdCByZXBvcnRQb3N0RXJyb3IgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QucmVwb3J0UG9zdEVycm9yKTtcclxuICAgIGNvbnN0IHJldHdlZXRFcnJvciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdC5yZXR3ZWV0RXJyb3IpO1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuICAgIGNvbnN0IGlnbm9yZUVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5pZ25vcmVFcnJvcik7XHJcbiAgICBjb25zdCB1bklnbm9yZUVycm9yID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci51bklnbm9yZUVycm9yKTtcclxuICAgIGNvbnN0IGlnbm9yZURvbmUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmlnbm9yZURvbmUpO1xyXG4gICAgY29uc3QgdW5JZ25vcmVEb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci51bklnbm9yZURvbmUpO1xyXG5cclxuXHJcbiAgICBjb25zdCBvbkNsaWNrUmVsYXRlZFBvc3RzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUkVMQVRFRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2lkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWdub3JlRG9uZSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+ywqOuLqOuQmOyXiOyKteuLiOuLpC4nLCA1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWdub3JlRXJyb3IpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihpZ25vcmVFcnJvciwgNSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWdub3JlRG9uZSwgaWdub3JlRXJyb3JdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodW5JZ25vcmVEb25lKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn7LCo64uo7J20IO2SgOyWtOyhjOyKteuLiOuLpC4nLCA1KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodW5JZ25vcmVFcnJvcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKCfssKjri6gg7ZKA6riw7ZWY64qUIOuPhOykkeyXkCDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLicsIDUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VuSWdub3JlRG9uZSwgdW5JZ25vcmVFcnJvcl0pXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcG9ydFBvc3REb25lKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcygn7Iug6rOg6rCAIOygkeyImOuQmOyXiOyKteuLiOuLpC4g67mg66W4IOyLnOydvCDrgrTroZwg7KGw7LmY7ZWY6rKg7Iq164uI64ukLicsIDUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVwb3J0UG9zdEVycm9yKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IocmVwb3J0UG9zdEVycm9yLCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVwb3J0UG9zdERvbmUsIHJlcG9ydFBvc3RFcnJvcl0pO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAocmV0d2VldEVycm9yKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCfrpqztirjsnJftlZjripQg64+E7KSR7JeQIOyXkOufrOqwgCDrsJzsg53tlojsirXri4jri6QuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3JldHdlZXRFcnJvcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdElkID0gbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXT8uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8v7IyT7Jes7J6I64qUIOydtOuypO2KuCDrqZTrqqjrpqzrpbwg7KCc6rGw7ZW07KO86riwXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Ub3A6ICc1JScgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZGFuY2Vycy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLz48L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHttZSAmJiBtZS5pZCA/IDxVc2VyUHJvZmlsZSAvPiA6IChcclxuICAgICAgICAgICAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1wYWdlLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2xvZ2luJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLri7nsi6DsnZgg67CA66Gx6rCAIOqyve2XmOydhCDqs7XsnKDtlbTso7zshLjsmpQhXCJcclxuICAgICAgICAgICAgICAgICAgICBzdWJUaXRsZT1cIuuhnOq3uOyduCDtm4Qg6rKM7Iuc6riA7J2EIOyekeyEse2VtOuztOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tJY29uPXs8VG9vbHRpcCB0aXRsZT1cIuuhnOq3uOyduO2VmOufrCDqsIDquLBcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA+PFVwT3V0bGluZWQgLz48L1Rvb2x0aXA+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge21lICYmIG1lLmlkICYmXHJcbiAgICAgICAgICAgICAgICAoPD5cclxuICAgICAgICAgICAgICAgICAgICA8UG9zdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRQb3N0c0xvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tSZWxhdGVkUG9zdHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcG9zdHMvcmVsYXRlZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT7tjJTroZzsnokg6rKM7Iuc6riA66eMIOuztOq4sDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+KX1cclxuXHJcbiAgICAgICAgICAgIHttYWluUG9zdHM/Lm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyAiXSwic291cmNlUm9vdCI6IiJ9