webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");



var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\CommentForm.js",
    _this = undefined,
    _s = $RefreshSig$();









var CommentForm = function CommentForm(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var addCommentLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.addCommentLoading;
  });
  var addCommentDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post.addCommentDone;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      commentText = _useInput2[0],
      onChangeCommentText = _useInput2[1],
      setCommentText = _useInput2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_7__["ADD_COMMENT_REQUEST"],
      data: {
        content: commentText,
        userId: id,
        postId: post.id
      }
    });
  }, [commentText, id]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    onFinish: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
    style: {
      position: 'relative',
      marginTop: '10px'
    },
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_8__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    style: {
      position: 'absolute',
      right: 0,
      bottom: -40
    },
    type: "primary",
    htmlType: "submit",
    loading: addCommentLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    },
    __self: _this
  }, "\uC785\uB825\uD558\uAE30")));
};

_s(CommentForm, "YIR7oq9n8b1wu1eRm1COPyWsPwQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_6__["default"]];
});

_c = CommentForm;
CommentForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c;

$RefreshReg$(_c, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb21tZW50Rm9ybSIsInBvc3QiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUlucHV0IiwiY29tbWVudFRleHQiLCJvbkNoYW5nZUNvbW1lbnRUZXh0Iiwic2V0Q29tbWVudFRleHQiLCJ1c2VFZmZlY3QiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInVzZXJJZCIsInBvc3RJZCIsInBvc2l0aW9uIiwibWFyZ2luVG9wIiwicmlnaHQiLCJib3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM5QixNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBOztBQUFBLDZCQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBZixtREFBSSxlQUFlSixFQUFuQjtBQUFBLEdBQU4sQ0FBdEI7QUFDQSxNQUFNSyxpQkFBaUIsR0FBR0osK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdFLGlCQUFmO0FBQUEsR0FBTixDQUFyQztBQUNBLE1BQU1DLGNBQWMsR0FBR0wsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSCxJQUFOLENBQVdPLGNBQWY7QUFBQSxHQUFOLENBQWxDO0FBRUEsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFMOEIsa0JBTTZCQywrREFBUSxDQUFDLEVBQUQsQ0FOckM7QUFBQTtBQUFBLE1BTXZCQyxXQU51QjtBQUFBLE1BTVZDLG1CQU5VO0FBQUEsTUFNV0MsY0FOWDs7QUFROUJDLHlEQUFTLENBQUMsWUFBTTtBQUNaLFFBQUlQLGNBQUosRUFBb0I7QUFDaEJNLG9CQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ04sY0FBRCxDQUpNLENBQVQ7QUFPQSxNQUFNUSxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUMvQlIsWUFBUSxDQUFDO0FBQ0xTLFVBQUksRUFBRUMsa0VBREQ7QUFFTEMsVUFBSSxFQUFFO0FBQ0ZDLGVBQU8sRUFBRVQsV0FEUDtBQUVGVSxjQUFNLEVBQUVwQixFQUZOO0FBR0ZxQixjQUFNLEVBQUV0QixJQUFJLENBQUNDO0FBSFg7QUFGRCxLQUFELENBQVI7QUFRSCxHQVQyQixFQVN6QixDQUFDVSxXQUFELEVBQWNWLEVBQWQsQ0FUeUIsQ0FBNUI7QUFVQSxTQUNJLDJEQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFYyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksMkRBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSwyREFBQywwQ0FBRCxDQUFPLFFBQVA7QUFDSSxTQUFLLEVBQUU7QUFBRVEsY0FBUSxFQUFFLFVBQVo7QUFBd0JDLGVBQVMsRUFBRTtBQUFuQyxLQURYO0FBRUksUUFBSSxFQUFFLENBRlY7QUFHSSxTQUFLLEVBQUViLFdBSFg7QUFJSSxZQUFRLEVBQUVDLG1CQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU9JLDJEQUFDLDJDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQ0hXLGNBQVEsRUFBRSxVQURQO0FBRUhFLFdBQUssRUFBRSxDQUZKO0FBR0hDLFlBQU0sRUFBRSxDQUFDO0FBSE4sS0FEWDtBQU1JLFFBQUksRUFBQyxTQU5UO0FBT0ksWUFBUSxFQUFDLFFBUGI7QUFRSSxXQUFPLEVBQUVwQixpQkFSYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQVBKLENBRkosQ0FESjtBQXVCSCxDQWhERDs7R0FBTVAsVztVQUNTRyx1RCxFQUNlQSx1RCxFQUNIQSx1RCxFQUVOTyx1RCxFQUMwQ0MsdUQ7OztLQU56RFgsVztBQWtETkEsV0FBVyxDQUFDNEIsU0FBWixHQUF3QjtBQUNwQjNCLE1BQUksRUFBRTRCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDbEI1QixNQUFFLEVBQUUyQixpREFBUyxDQUFDRTtBQURJLEdBQWhCLEVBRUhDO0FBSGlCLENBQXhCO0FBS2VoQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lY2JlZjc5NWQzZDUwMzE3MDRlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGlkID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gICAgY29uc3QgYWRkQ29tbWVudExvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmFkZENvbW1lbnRMb2FkaW5nKTtcclxuICAgIGNvbnN0IGFkZENvbW1lbnREb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdC5hZGRDb21tZW50RG9uZSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgW2NvbW1lbnRUZXh0LCBvbkNoYW5nZUNvbW1lbnRUZXh0LCBzZXRDb21tZW50VGV4dF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYWRkQ29tbWVudERvbmUpIHtcclxuICAgICAgICAgICAgc2V0Q29tbWVudFRleHQoJycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFthZGRDb21tZW50RG9uZV0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbW1lbnRUZXh0LFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiBpZCxcclxuICAgICAgICAgICAgICAgIHBvc3RJZDogcG9zdC5pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtjb21tZW50VGV4dCwgaWRdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbW1lbnRUZXh0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTQwXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2FkZENvbW1lbnRMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgPuyeheugpe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQ29tbWVudEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyAiXSwic291cmNlUm9vdCI6IiJ9