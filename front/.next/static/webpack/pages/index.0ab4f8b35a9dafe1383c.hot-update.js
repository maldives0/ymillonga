webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");


var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();








var FollowButton = function FollowButton(_ref) {
  _s();

  var _post$User3;

  var post = _ref.post;
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.me;
  });
  var followLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.followLoading;
  });
  var unfollowLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.unfollowLoading;
  });
  var ignoreLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.ignoreLoading;
  });
  var unIgnoreLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.unIgnoreLoading;
  });
  var isFollowing = me.Followings.find(function (v) {
    var _post$User;

    return v.id === ((_post$User = post.User) === null || _post$User === void 0 ? void 0 : _post$User.id);
  });
  var isIgnoring = me.Ignorings.find(function (v) {
    var _post$User2;

    return v.id === ((_post$User2 = post.User) === null || _post$User2 === void 0 ? void 0 : _post$User2.id);
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var ToggleFollow = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  var toggleIgnore = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (isIgnoring) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNIGNORE_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["IGNORE_REQUEST"],
        data: post.User.id
      });
    }
  }, [isIgnoring]);

  if (((_post$User3 = post.User) === null || _post$User3 === void 0 ? void 0 : _post$User3.id) === me.id) {
    return null;
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    style: {
      marginRight: 1
    },
    loading: followLoading || unfollowLoading,
    onClick: ToggleFollow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    },
    __self: _this
  }, isFollowing ? '언팔로우' : '팔로우'), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    loading: ignoreLoading || unIgnoreLoading,
    onClick: toggleIgnore,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    },
    __self: _this
  }, isIgnoring ? '차단풀기' : '차단하기'));
};

_s(FollowButton, "SuT8Q7HC/2zXqiT+Her2WSWG2FI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    UserId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaWdub3JlTG9hZGluZyIsInVuSWdub3JlTG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiaWQiLCJVc2VyIiwiaXNJZ25vcmluZyIsIklnbm9yaW5ncyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJUb2dnbGVGb2xsb3ciLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiZGF0YSIsIkZPTExPV19SRVFVRVNUIiwidG9nZ2xlSWdub3JlIiwiVU5JR05PUkVfUkVRVUVTVCIsIklHTk9SRV9SRVFVRVNUIiwibWFyZ2luUmlnaHQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIlVzZXJJZCIsIm51bWJlciIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFL0IsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsRUFBZjtBQUFBLEdBQU4sQ0FBdEI7QUFDQSxNQUFNSSxhQUFhLEdBQUdILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxhQUFmO0FBQUEsR0FBTixDQUFqQztBQUNBLE1BQU1DLGVBQWUsR0FBR0osK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEs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Q0FBQzhCLFNBQWIsR0FBeUI7QUFDckI3QixNQUFJLEVBQUU4QixpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ2xCQyxVQUFNLEVBQUVGLGlEQUFTLENBQUNHO0FBREEsR0FBaEIsRUFFSEM7QUFIa0IsQ0FBekI7QUFLZW5DLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBhYjRmOGIzNWE5ZGFmZTEzODNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QsIFVOSUdOT1JFX1JFUVVFU1QsIElHTk9SRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgICBjb25zdCBmb2xsb3dMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5mb2xsb3dMb2FkaW5nKTtcclxuICAgIGNvbnN0IHVuZm9sbG93TG9hZGluZyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIudW5mb2xsb3dMb2FkaW5nKTtcclxuICAgIGNvbnN0IGlnbm9yZUxvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmlnbm9yZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgdW5JZ25vcmVMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci51bklnbm9yZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZS5Gb2xsb3dpbmdzLmZpbmQoKHYpID0+IHYuaWQgPT09IHBvc3QuVXNlcj8uaWQpO1xyXG4gICAgY29uc3QgaXNJZ25vcmluZyA9IG1lLklnbm9yaW5ncy5maW5kKCh2KSA9PiB2LmlkID09PSBwb3N0LlVzZXI/LmlkKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFRvZ2dsZUZvbGxvdyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZiAoaXNGb2xsb3dpbmcpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogRk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc0ZvbGxvd2luZ10pO1xyXG4gICAgY29uc3QgdG9nZ2xlSWdub3JlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc0lnbm9yaW5nKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVOSUdOT1JFX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IElHTk9SRV9SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW2lzSWdub3JpbmddKTtcclxuICAgIGlmIChwb3N0LlVzZXI/LmlkID09PSBtZS5pZCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxIH19XHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1RvZ2dsZUZvbGxvd31cclxuICAgICAgICAgICAgPntpc0ZvbGxvd2luZyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lnbm9yZUxvYWRpbmcgfHwgdW5JZ25vcmVMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlSWdub3JlfT57aXNJZ25vcmluZyA/ICfssKjri6jtkoDquLAnIDogJ+ywqOuLqO2VmOq4sCd9PC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBVc2VySWQ6IFByb3BUeXBlcy5udW1iZXJcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjsgIl0sInNvdXJjZVJvb3QiOiIifQ==