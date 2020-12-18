webpackHotUpdate_N_E("pages/hashtag/[tag]",{

/***/ "./pages/hashtag/[tag].js":
/*!********************************!*\
  !*** ./pages/hashtag/[tag].js ***!
  \********************************/
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
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\pages\\hashtag\\[tag].js",
    _this = undefined,
    _s = $RefreshSig$();









var Hashtag = function Hashtag() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var tag = router.query.tag; //next 다이나믹 라우팅으로 특정 사용자id값을 query로 가져올 수 있다

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var mainPosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.mainPosts;
  });
  var hasMorePosts = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.hasMorePosts;
  });
  var loadPostsLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.loadPostsLoading;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          var _mainPosts;

          var lastId = (_mainPosts = mainPosts[mainPosts.length - 1]) === null || _mainPosts === void 0 ? void 0 : _mainPosts.id;
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_HASHTAG_POSTS_REQUEST"],
            lastId: lastId,
            data: tag
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      //쌓여있는 이벤트 메모리를 제거해주기
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts === null || mainPosts === void 0 ? void 0 : mainPosts.length, hasMorePosts, loadPostsLoading, tag]); //og:카카오톡에 나오는 정보

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    },
    __self: _this
  }, mainPosts === null || mainPosts === void 0 ? void 0 : mainPosts.map(function (post) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: post.id,
      post: post,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 39
      },
      __self: _this
    });
  }));
};

_s(Hashtag, "3YLcACiuNLt7fIJv+ElpZtZ3Fnk=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = Hashtag;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Hashtag);

var _c;

$RefreshReg$(_c, "Hashtag");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaHRhZy9bdGFnXS5qcyJdLCJuYW1lcyI6WyJIYXNodGFnIiwicm91dGVyIiwidXNlUm91dGVyIiwidGFnIiwicXVlcnkiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWFpblBvc3RzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwidXNlRWZmZWN0Iiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsYXN0SWQiLCJsZW5ndGgiLCJpZCIsInR5cGUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsImRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOzs7QUFHQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEa0IsTUFFVkMsR0FGVSxHQUVGRixNQUFNLENBQUNHLEtBRkwsQ0FFVkQsR0FGVSxFQUVXOztBQUM3QixNQUFNRSxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsU0FBdEI7QUFBQSxHQUFELENBQTdCO0FBQ0EsTUFBTUksWUFBWSxHQUFHSCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsWUFBdEI7QUFBQSxHQUFELENBQWhDO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdKLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxnQkFBdEI7QUFBQSxHQUFELENBQXBDO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaLGFBQVNDLFFBQVQsR0FBb0I7QUFFaEIsVUFBSUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEdBQXlERixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBQXJHLEVBQTBHO0FBQ3RHLFlBQUlULFlBQVksSUFBSSxDQUFDQyxnQkFBckIsRUFBdUM7QUFBQTs7QUFDbkMsY0FBTVMsTUFBTSxpQkFBR2QsU0FBUyxDQUFDQSxTQUFTLENBQUNlLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBWiwrQ0FBRyxXQUFpQ0MsRUFBaEQ7QUFDQWxCLGtCQUFRLENBQUM7QUFDTG1CLGdCQUFJLEVBQUVDLHlFQUREO0FBRUxKLGtCQUFNLEVBQU5BLE1BRks7QUFHTEssZ0JBQUksRUFBRXZCO0FBSEQsV0FBRCxDQUFSO0FBS0g7QUFDSjtBQUNKOztBQUNEWSxVQUFNLENBQUNZLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDYixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNUO0FBQ0FDLFlBQU0sQ0FBQ2EsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNkLFFBQXJDO0FBQ0gsS0FIRDtBQUlILEdBbkJRLEVBbUJOLENBQUNQLFNBQUQsYUFBQ0EsU0FBRCx1QkFBQ0EsU0FBUyxDQUFFZSxNQUFaLEVBQW9CWCxZQUFwQixFQUFrQ0MsZ0JBQWxDLEVBQW9EVCxHQUFwRCxDQW5CTSxDQUFULENBUmtCLENBNEJsQjs7QUFDQSxTQUNJLDJEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0ksU0FETCxhQUNLQSxTQURMLHVCQUNLQSxTQUFTLENBQUVzQixHQUFYLENBQWUsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsMkRBQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ1AsRUFBcEI7QUFBd0IsVUFBSSxFQUFFTyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVY7QUFBQSxHQUFmLENBREwsQ0FESjtBQUtILENBbENEOztHQUFNOUIsTztVQUNhRSxxRCxFQUVFSSx1RCxFQUNDRSx1RCxFQUNHQSx1RCxFQUNJQSx1RDs7O0tBTnZCUixPOztBQXNEU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGFzaHRhZy9bdGFnXS4zNmZjYTMyMDQxYTk3Y2EyNmRmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgeyBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBMT0FEX01ZX0lORk9fUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuY29uc3QgSGFzaHRhZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyB0YWcgfSA9IHJvdXRlci5xdWVyeTsvL25leHQg64uk7J2064KY66+5IOudvOyasO2MheycvOuhnCDtirnsoJUg7IKs7Jqp7J6QaWTqsJLsnYQgcXVlcnnroZwg6rCA7KC47JisIOyImCDsnojri6RcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IG1haW5Qb3N0cyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tYWluUG9zdHMpO1xyXG4gICAgY29uc3QgaGFzTW9yZVBvc3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmhhc01vcmVQb3N0cyk7XHJcbiAgICBjb25zdCBsb2FkUG9zdHNMb2FkaW5nID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmxvYWRQb3N0c0xvYWRpbmcpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJZCA9IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0/LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGFnLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy/sjJPsl6zsnojripQg7J2067Kk7Yq4IOuplOuqqOumrOulvCDsoJzqsbDtlbTso7zquLBcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW21haW5Qb3N0cz8ubGVuZ3RoLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIHRhZ10pO1xyXG4gICAgLy9vZzrsubTsubTsmKTthqHsl5Ag64KY7Jik64qUIOygleuztFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7bWFpblBvc3RzPy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICA8L0FwcExheW91dD5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBzdGFydCcpO1xyXG5cclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogY29udGV4dC5wYXJhbXMudGFnLFxyXG4gICAgfSk7XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhc2h0YWc7IFxyXG4iXSwic291cmNlUm9vdCI6IiJ9