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
    // console.log('clickImgInfo', e.target.files);//선택한 이미지 파일 형식이 담겨있다(1개)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJQb3N0Rm9ybSIsImltYWdlUGF0aHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlSW5wdXQiLCJ0ZXh0Iiwib25DaGFuZ2VUZXh0Iiwic2V0VGV4dCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiZSIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwidGFyZ2V0IiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJvblN1Ym1pdCIsInRyaW0iLCJhbGVydCIsImZvcm1EYXRhIiwicCIsIkFERF9QT1NUX1JFUVVFU1QiLCJtYXJnaW4iLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJ2IiwiaSIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFFbkIsTUFBTUMsVUFBVSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsVUFBZjtBQUFBLEdBQU4sQ0FBOUI7QUFDQSxNQUFNSSxjQUFjLEdBQUdILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxj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QSxNQURKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLDJEQUFDLDJDQUFEO0FBQ0ksYUFBTyxFQUFFYixhQUFhLENBQUNjLENBQUQsQ0FEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FESixDQUpKLENBREo7QUFXSCxHQVpBLENBREwsQ0F0QkosQ0FMSixDQURKO0FBOENILENBOUZEOztHQUFNL0MsUTtVQUVpQkUsdUQsRUFDSUEsdUQsRUFDSEEsdUQsRUFDSE0sdUQsRUFDcUJDLHVEOzs7S0FOcENULFE7QUErRlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0OTM2NWViM2MzM2ExZjY4YWExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBSRU1PVkVfSU1BR0UgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGltYWdlUGF0aHMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0LmltYWdlUGF0aHMpO1xyXG4gICAgY29uc3QgYWRkUG9zdExvYWRpbmcgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0LmFkZFBvc3RMb2FkaW5nKTtcclxuICAgIGNvbnN0IGFkZFBvc3REb25lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdC5hZGRQb3N0RG9uZSk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBbdGV4dCwgb25DaGFuZ2VUZXh0LCBzZXRUZXh0XSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChhZGRQb3N0RG9uZSkgc2V0VGV4dCgnJyk7XHJcbiAgICB9LCBbYWRkUG9zdERvbmVdKTtcclxuICAgIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICAgIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2xpY2tJbWdJbmZvJywgZS50YXJnZXQuZmlsZXMpOy8v7ISg7YOd7ZWcIOydtOuvuOyngCDtjIzsnbwg7ZiV7Iud7J20IOuLtOqyqOyeiOuLpCgx6rCcKVxyXG4gICAgICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsvL+upgO2LsO2MjO2KuO2YleyLneycvOuhnCDrsLHshJzrsoTroZwg67O064K464ukXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZikgPT4gey8v7Jyg7IKs67Cw7Je07J2066+A66GcIGZvckVhY2ggbWV0aG9k66W8IOuwsOyXtOyXkOyEnCDruYzroKTsmKjri6RcclxuICAgICAgICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZik7Ly/rsLHshJzrsoTsnZgg7YKkIOqwkuqzvCAnaW1hZ2UnIOydvOy5mOyLnOy8nOyVvCDtlahcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICAgICAgICBkYXRhOiBpbmRleCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGV4dCB8fCAhdGV4dC50cmltKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCfqsozsi5zquIDsnYQg7J6R7ISx7ZWcIO2bhCDrsoTtirzsnYQg64iE66W07IS47JqULicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGltYWdlUGF0aHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbdGV4dCwgaW1hZ2VQYXRoc10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcxMHB4IDAgMzBweCcgfX1cclxuICAgICAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgICAgICBvbkZpbmlzaD17b25TdWJtaXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezE0MH1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYpOuKmOydgCDslrTrlqQg7J287J20IOyeiOyXiOuCmOyalD9cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzgwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICc1cHgnXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIG5hbWU9XCJpbWFnZVwiIG11bHRpcGxlIGhpZGRlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+7J2066+47KeAIOyXheuhnOuTnO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXthZGRQb3N0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIj7qsozsi5ztlZjquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt2fSBzdHlsZT17eyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcgfX0gYWx0PXt2fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PuyCreygnO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07ICJdLCJzb3VyY2VSb290IjoiIn0=