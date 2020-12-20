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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style */ "./components/style.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");




var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\NicknameEditForm.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var NicknameEditForm = function NicknameEditForm() {
  _s();

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("globalState", {
    initialData: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["initialState"]
  }, {
    revalidateOnFocus: true
  }),
      data = _useSWR.data;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.me;
  });
  var changeNicknameLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user.changeNicknameLoading;
  });

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    Object(swr__WEBPACK_IMPORTED_MODULE_9__["mutate"])("globalState", _objectSpread(_objectSpread({}, data), {}, {
      me: {
        nickname: nickname
      }
    }), false);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_7__["CHANGE_NICKNAME_REQUEST"],
      data: nickname
    });
    Object(swr__WEBPACK_IMPORTED_MODULE_9__["trigger"])("globalState");
  }, [nickname]);
  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_8__["NicknameInputSearch"], {
    loading: changeNicknameLoading,
    value: nickname,
    onChange: onChangeNickname,
    onSearch: onSubmit,
    addonBefore: "\uB2C9\uB124\uC784:",
    enterButton: "\uBC14\uAFB8\uAE30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    },
    __self: _this
  }));
};

_s(NicknameEditForm, "fvpkJFplzuNiRlMraKidaQ0eqcg=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_9__["default"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
});

_c = NicknameEditForm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJ1c2VTV1IiLCJpbml0aWFsRGF0YSIsImluaXRpYWxTdGF0ZSIsInJldmFsaWRhdGVPbkZvY3VzIiwiZGF0YSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwidXNlSW5wdXQiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJvblN1Ym1pdCIsInVzZUNhbGxiYWNrIiwibXV0YXRlIiwidHlwZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQUE7O0FBQUEsZ0JBQ1ZDLG1EQUFNLENBQUMsYUFBRCxFQUFnQjtBQUFFQyxlQUFXLEVBQUVDLDJEQUFZQTtBQUEzQixHQUFoQixFQUErQztBQUFFQyxxQkFBaUIsRUFBRTtBQUFyQixHQUEvQyxDQURJO0FBQUEsTUFDbkJDLElBRG1CLFdBQ25CQSxJQURtQjs7QUFFM0IsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdILEVBQWY7QUFBQSxHQUFOLENBQXRCO0FBQ0EsTUFBTUkscUJBQXFCLEdBQUdILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxxQkFBZjtBQUFBLEdBQU4sQ0FBekM7O0FBSjJCLGtCQUtVQywrREFBUSxDQUFDLENBQUFMLEVBQUUsU0FBRixJQUFBQSxFQUFFLFdBQUYsWUFBQUEsRUFBRSxDQUFFTSxRQUFKLEtBQWdCLEVBQWpCLENBTGxCO0FBQUE7QUFBQSxNQUtwQkEsUUFMb0I7QUFBQSxNQUtWQyxnQkFMVTs7QUFNM0IsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDL0JDLHNEQUFNLENBQUMsYUFBRCxrQ0FDQ2IsSUFERDtBQUVGRyxRQUFFLEVBQUU7QUFBRU0sZ0JBQVEsRUFBRUE7QUFBWjtBQUZGLFFBR0gsS0FIRyxDQUFOO0FBSUFSLFlBQVEsQ0FBQztBQUNMYSxVQUFJLEVBQUVDLHNFQUREO0FBRUxmLFVBQUksRUFBRVM7QUFGRCxLQUFELENBQVI7QUFJQU8sdURBQU8sQ0FBQyxhQUFELENBQVA7QUFDSCxHQVYyQixFQVV6QixDQUFDUCxRQUFELENBVnlCLENBQTVCO0FBV0EsU0FDSSw0REFBQyx5Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksNERBQUMsMERBQUQ7QUFDSSxXQUFPLEVBQUVGLHFCQURiO0FBRUksU0FBSyxFQUFFRSxRQUZYO0FBR0ksWUFBUSxFQUFFQyxnQkFIZDtBQUlJLFlBQVEsRUFBRUMsUUFKZDtBQUtJLGVBQVcsRUFBQyxxQkFMaEI7QUFNSSxlQUFXLEVBQUMsb0JBTmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBV0gsQ0E1QkQ7O0dBQU1oQixnQjtVQUNlQywyQyxFQUNBTSx1RCxFQUNORSx1RCxFQUNtQkEsdUQsRUFDT0ksdUQ7OztLQUxuQ2IsZ0I7QUE2QlNBLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJmZjdjMzE0YTIyM2U5ZGNjZGRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCB7IEZvcm0gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBOaWNrbmFtZUlucHV0U2VhcmNoIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlLCB0cmlnZ2VyIH0gZnJvbSBcInN3clwiXHJcbmNvbnN0IE5pY2tuYW1lRWRpdEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcImdsb2JhbFN0YXRlXCIsIHsgaW5pdGlhbERhdGE6IGluaXRpYWxTdGF0ZSB9LCB7IHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlIH0pXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KG1lPy5uaWNrbmFtZSB8fCAnJyk7XHJcbiAgICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBtdXRhdGUoXCJnbG9iYWxTdGF0ZVwiLCB7XHJcbiAgICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICAgIG1lOiB7IG5pY2tuYW1lOiBuaWNrbmFtZSB9XHJcbiAgICAgICAgfSwgZmFsc2UpXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTogbmlja25hbWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJpZ2dlcihcImdsb2JhbFN0YXRlXCIpO1xyXG4gICAgfSwgW25pY2tuYW1lXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Tmlja25hbWVJbnB1dFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZz17Y2hhbmdlTmlja25hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TdWJtaXR9XHJcbiAgICAgICAgICAgICAgICBhZGRvbkJlZm9yZT1cIuuLieuEpOyehDpcIlxyXG4gICAgICAgICAgICAgICAgZW50ZXJCdXR0b249XCLrsJTqvrjquLBcIiAvPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5pY2tuYW1lRWRpdEZvcm07ICJdLCJzb3VyY2VSb290IjoiIn0=