webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
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
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");



var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\PostForm.js",
    _this = undefined,
    _s = $RefreshSig$();








var PostForm = function PostForm() {
  _s();

  var imagePaths = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post.imagePaths;
  });
  var addPostLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post.addPostLoading;
  });
  var addPostDone = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post.addPostDone;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 3),
      text = _useInput2[0],
      onChangeText = _useInput2[1],
      setText = _useInput2[2];

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (addPostDone) setText('');
  }, [addPostDone]);
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    console.log('clickImgInfo', e.target.files); //선택한 이미지 파일 형식이 담겨있다(1개)

    var imageFormData = new FormData(); //멀티파트형식으로 백서버로 보낸다

    [].forEach.call(e.target.files, function (f) {
      //유사배열이므로 forEach method를 배열에서 빌려온다
      imageFormData.append('image', f); //백서버의 키 값과 'image' 일치시켜야 함
    });
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_IMAGE"],
        data: index
      });
    };
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (!text || !text.trim()) {
      return alert('게시글을 작성한 후 버튼을 누르세요.');
    }

    var formData = new FormData();
    imagePaths.forEach(function (p) {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [text, imagePaths]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    style: {
      margin: '10px 0 30px'
    },
    encType: "multipart/form-data",
    onFinish: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Form"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Input"].TextArea, {
    value: text,
    onChange: onChangeText,
    maxLength: 140,
    placeholder: "\uC624\uB298\uC740 \uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    style: {
      height: '80px',
      marginBottom: '5px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("input", {
    type: "file",
    name: "image",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: onClickImageUpload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    },
    __self: _this
  }, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC\uD558\uAE30"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "primary",
    style: {
      "float": 'right'
    },
    loading: addPostLoading,
    htmlType: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    },
    __self: _this
  }, "\uAC8C\uC2DC\uD558\uAE30")), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    },
    __self: _this
  }, imagePaths.map(function (v, i) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
      key: v,
      style: {
        display: 'inline-block'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("img", {
      src: v,
      style: {
        width: '200px'
      },
      alt: v,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 33
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      },
      __self: _this
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_7__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: onRemoveImage(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 37
      },
      __self: _this
    }, "\uC0AD\uC81C\uD558\uAE30")));
  }))));
};

_s(PostForm, "b82nlxBgBT6takWQodei/u2sWQ0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c;

$RefreshReg$(_c, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZiIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25TdWJtaXQiLCJ0cmltIiwiYWxlcnQiLCJmb3JtRGF0YSIsInAiLCJBRERfUE9TVF9SRVFVRVNUIiwibWFyZ2luIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwibWFwIiwidiIsImkiLCJkaXNwbGF5Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBRW5CLE1BQU1DLFVBQVUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILFVBQWY7QUFBQSxHQUFOLENBQTlCO0FBQ0EsTUFBTUksY0FBYyxHQUFHSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENB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SyxFQUFFO0FBQUVHLGFBQUssRUFBRTtBQUFULE9BRlg7QUFFK0IsU0FBRyxFQUFFSCxDQUZwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksMkRBQUMsMkNBQUQ7QUFDSSxhQUFPLEVBQUViLGFBQWEsQ0FBQ2MsQ0FBRCxDQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLENBSkosQ0FESjtBQVdILEdBWkEsQ0FETCxDQXRCSixDQUxKLENBREo7QUE4Q0gsQ0E5RkQ7O0dBQU1qRCxRO1VBRWlCRSx1RCxFQUNJQSx1RCxFQUNIQSx1RCxFQUNITSx1RCxFQUNxQkMsdUQ7OztLQU5wQ1QsUTtBQStGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWVkOWM0OTM0NTVmOGU2ZjA2ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW1hZ2VQYXRocyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QuaW1hZ2VQYXRocyk7XHJcbiAgICBjb25zdCBhZGRQb3N0TG9hZGluZyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QuYWRkUG9zdExvYWRpbmcpO1xyXG4gICAgY29uc3QgYWRkUG9zdERvbmUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0LmFkZFBvc3REb25lKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IFt0ZXh0LCBvbkNoYW5nZVRleHQsIHNldFRleHRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGFkZFBvc3REb25lKSBzZXRUZXh0KCcnKTtcclxuICAgIH0sIFthZGRQb3N0RG9uZV0pO1xyXG4gICAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gICAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gICAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjbGlja0ltZ0luZm8nLCBlLnRhcmdldC5maWxlcyk7Ly/shKDtg53tlZwg7J2066+47KeAIO2MjOydvCDtmJXsi53snbQg64u06rKo7J6I64ukKDHqsJwpXHJcbiAgICAgICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpOy8v66mA7Yuw7YyM7Yq47ZiV7Iud7Jy866GcIOuwseyEnOuyhOuhnCDrs7Trgrjri6RcclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmKSA9PiB7Ly/snKDsgqzrsLDsl7TsnbTrr4DroZwgZm9yRWFjaCBtZXRob2Trpbwg67Cw7Je07JeQ7IScIOu5jOugpOyYqOuLpFxyXG4gICAgICAgICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmKTsvL+uwseyEnOuyhOydmCDtgqQg6rCS6rO8ICdpbWFnZScg7J287LmY7Iuc7Lyc7JW8IO2VqFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgICAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnRyaW0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxlcnQoJ+qyjOyLnOq4gOydhCDsnpHshLHtlZwg7ZuEIOuyhO2KvOydhCDriITrpbTshLjsmpQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgaW1hZ2VQYXRocy5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbnRlbnQnLCB0ZXh0KTtcclxuICAgICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFt0ZXh0LCBpbWFnZVBhdGhzXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJzEwcHggMCAzMHB4JyB9fVxyXG4gICAgICAgICAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgICAgIG9uRmluaXNoPXtvblN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuVGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17MTQwfVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Jik64qY7J2AIOyWtOuWpCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnODBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzVweCdcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgbmFtZT1cImltYWdlXCIgbXVsdGlwbGUgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT7snbTrr7jsp4Ag7JeF66Gc65Oc7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2FkZFBvc3RMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiPuqyjOyLnO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Z9IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXt2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JyB9fSBhbHQ9e3Z9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+7IKt7KCc7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsgIl0sInNvdXJjZVJvb3QiOiIifQ==