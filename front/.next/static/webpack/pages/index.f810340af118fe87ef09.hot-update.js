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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (changeNicknameError) {
      antd__WEBPACK_IMPORTED_MODULE_6__["message"].error(changeNicknameError, 5);
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
    span: 16,
    offset: 6,
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
    style: {
      marginLeft: 5
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJvbkNhbmNlbCIsInVzZVNXUiIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFN0YXRlIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJ1c2VFZmZlY3QiLCJtZXNzYWdlIiwiZXJyb3IiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwibXV0YXRlIiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwidHJpZ2dlciIsInJlcXVpcmVkIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxnQkFDdEJDLG9EQUFNLENBQUMsYUFBRCxFQUFnQjtBQUFFQyxlQUFXLEVBQUVDLDJEQUFZQTtBQUEzQixHQUFoQixFQUErQztBQUFFQyxxQkFBaUIsRUFBRTtBQUFyQixHQUEvQyxDQURnQjtBQUFBLE1BQy9CQyxJQUQrQixXQUMvQkEsSUFEK0I7O0FBRXZDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztB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QUN6QjVCLFVBQVEsRUFBRTZCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFEQSxDQUE3QjtBQUdlaEMsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjgxMDM0MGFmMTE4ZmU4N2VmMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIFJvdywgQ29sLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgTmlja25hbWVJbnB1dFNlYXJjaCB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBpbml0aWFsU3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5pbXBvcnQgdXNlU1dSLCB7IG11dGF0ZSwgdHJpZ2dlciB9IGZyb20gXCJzd3JcIlxyXG5jb25zdCBOaWNrbmFtZUVkaXRGb3JtID0gKHsgb25DYW5jZWwgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoXCJnbG9iYWxTdGF0ZVwiLCB7IGluaXRpYWxEYXRhOiBpbml0aWFsU3RhdGUgfSwgeyByZXZhbGlkYXRlT25Gb2N1czogdHJ1ZSB9KVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuICAgIGNvbnN0IGNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIuY2hhbmdlTmlja25hbWVMb2FkaW5nKTtcclxuICAgIGNvbnN0IGNoYW5nZU5pY2tuYW1lRXJyb3IgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLmNoYW5nZU5pY2tuYW1lRXJyb3IpO1xyXG4gICAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KG1lPy5uaWNrbmFtZSB8fCAnJyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY2hhbmdlTmlja25hbWVFcnJvcikge1xyXG4gICAgICAgICAgICBtZXNzYWdlLmVycm9yKGNoYW5nZU5pY2tuYW1lRXJyb3IsIDUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjaGFuZ2VOaWNrbmFtZUVycm9yXSk7XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBtdXRhdGUoXCJnbG9iYWxTdGF0ZVwiLCB7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIG1lOiB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9XHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogbmlja25hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJpZ2dlcihcImdsb2JhbFN0YXRlXCIpO1xyXG4gICAgfSwgW25pY2tuYW1lXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtIG9uRmluaXNoPXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCLri4nrhKTsnoRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOaWNrbmFtZUlucHV0U2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezE2fSBvZmZzZXQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtjaGFuZ2VOaWNrbmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICA+67CU6r646riwPC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuaWNrbmFtZS1jYW5jZWwtYnV0dG9uXCIgb25DbGljaz17b25DYW5jZWx9Puy3qOyGjO2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbn07XHJcbk5pY2tuYW1lRWRpdEZvcm0ucHJvcFR5cGVzID0ge1xyXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07ICJdLCJzb3VyY2VSb290IjoiIn0=