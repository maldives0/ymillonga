webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./components/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style */ "./components/style.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");




var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\NicknameEditForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var NicknameEditForm = function NicknameEditForm(_ref) {
  _s();

  var onCancel = _ref.onCancel;

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_10__["default"])("globalState", {
    initialData: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["initialState"]
  }, {
    revalidateOnFocus: true
  }),
      data = _useSWR.data;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.me;
  });
  var changeNicknameLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.changeNicknameLoading;
  });
  var changeNicknameError = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user.changeNicknameError;
  });

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  useEffect(function () {
    if (changeNicknameError) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error('리트윗하는 도중에 에러가 발생했습니다.', 5);
    }
  }, [changeNicknameError]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    Object(swr__WEBPACK_IMPORTED_MODULE_10__["mutate"])("globalState", _objectSpread(_objectSpread({}, data), {}, {
      me: {
        nickname: nickname
      }
    }), false);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_8__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
    Object(swr__WEBPACK_IMPORTED_MODULE_10__["trigger"])("globalState");
  }, [nickname]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onFinish: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    span: 18,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Form"].Item, {
    label: "\uB2C9\uB124\uC784",
    rules: [{
      required: true
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_9__["NicknameInputSearch"], {
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    },
    __self: _this
  })))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    span: 4,
    offset: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    htmlType: "submit",
    loading: changeNicknameLoading,
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    },
    __self: _this
  }, "\uBC14\uAFB8\uAE30"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "nickname-cancel-button",
    onClick: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    },
    __self: _this
  }, "\uCDE8\uC18C\uD558\uAE30"))));
};

_s(NicknameEditForm, "DLR+3s7CtM+KUuGkHZhyCvxgyAs=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_10__["default"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = NicknameEditForm;
NicknameEditForm.propTypes = {
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NicknameEditForm);

var _c;

$RefreshReg$(_c, "NicknameEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJvbkNhbmNlbCIsInVzZVNXUiIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFN0YXRlIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlIiwiZXJyb3IiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwibXV0YXRlIiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwidHJpZ2dlciIsInJlcXVpcmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGdCQUN0QkMsb0RBQU0sQ0FBQyxhQUFELEVBQWdCO0FBQUVDLGVBQVcsRUFBRUMsMkRBQVlBO0FBQTNCLEdBQWhCLEVBQStDO0FBQUVDLHFCQUFpQixFQUFFO0FBQXJCLEdBQS9DLENBRGdCO0FBQUEsTUFDL0JDLElBRCtCLFdBQy9CQSxJQUQrQjs7QUFFdkMsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FB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QWVDO0FBREEsQ0FBN0I7QUFHZS9CLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE0NWM1MDhhNmFjNDJjZjQ4OTg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDb2wsIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBOaWNrbmFtZUlucHV0U2VhcmNoIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlLCB0cmlnZ2VyIH0gZnJvbSBcInN3clwiXHJcbmNvbnN0IE5pY2tuYW1lRWRpdEZvcm0gPSAoeyBvbkNhbmNlbCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcImdsb2JhbFN0YXRlXCIsIHsgaW5pdGlhbERhdGE6IGluaXRpYWxTdGF0ZSB9LCB7IHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlIH0pXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVFcnJvciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuY2hhbmdlTmlja25hbWVFcnJvcik7XHJcbiAgICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQobWU/Lm5pY2tuYW1lIHx8ICcnKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjaGFuZ2VOaWNrbmFtZUVycm9yKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoJ+umrO2KuOycl+2VmOuKlCDrj4TspJHsl5Ag7JeQ65+s6rCAIOuwnOyDne2WiOyKteuLiOuLpC4nLCA1KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbY2hhbmdlTmlja25hbWVFcnJvcl0pO1xyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbXV0YXRlKFwiZ2xvYmFsU3RhdGVcIiwge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBtZTogeyBuaWNrbmFtZTogbmlja25hbWUgfVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IG5pY2tuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyaWdnZXIoXCJnbG9iYWxTdGF0ZVwiKTtcclxuICAgIH0sIFtuaWNrbmFtZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuuLieuEpOyehFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5pY2tuYW1lSW5wdXRTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VOaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0gb2Zmc2V0PXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17Y2hhbmdlTmlja25hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPuuwlOq+uOq4sDwvQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5pY2tuYW1lLWNhbmNlbC1idXR0b25cIiBvbkNsaWNrPXtvbkNhbmNlbH0+7Leo7IaM7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufTtcclxuTmlja25hbWVFZGl0Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmlja25hbWVFZGl0Rm9ybTsgIl0sInNvdXJjZVJvb3QiOiIifQ==