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

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"])((me === null || me === void 0 ? void 0 : me.nickname) || ''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useInput, 2),
      nickname = _useInput2[0],
      onChangeNickname = _useInput2[1];

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
      lineNumber: 29,
      columnNumber: 9
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    span: 18,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 32,
      columnNumber: 21
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(_style__WEBPACK_IMPORTED_MODULE_9__["NicknameInputSearch"], {
    span: 6,
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    },
    __self: _this
  }))), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    span: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    htmlType: "submit",
    loading: changeNicknameLoading,
    type: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    },
    __self: _this
  }, "\uBC14\uAFB8\uAE30"), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_11__["jsx"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: onCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    },
    __self: _this
  }, "\uCDE8\uC18C\uD558\uAE30"))));
};

_s(NicknameEditForm, "fvpkJFplzuNiRlMraKidaQ0eqcg=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_10__["default"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_4__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtLmpzIl0sIm5hbWVzIjpbIk5pY2tuYW1lRWRpdEZvcm0iLCJvbkNhbmNlbCIsInVzZVNXUiIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFN0YXRlIiwicmV2YWxpZGF0ZU9uRm9jdXMiLCJkYXRhIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1lIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJ1c2VJbnB1dCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJtdXRhdGUiLCJ0eXBlIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJ0cmlnZ2VyIiwicmVxdWlyZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsZ0JBQ3RCQyxvREFBTSxDQUFDLGFBQUQsRUFBZ0I7QUFBRUMsZUFBVyxFQUFFQywyREFBWUE7QUFBM0IsR0FBaEIsRUFBK0M7QUFBRUMscUJBQWlCLEVBQUU7QUFBckIsR0FBL0MsQ0FEZ0I7QUFBQSxNQUMvQkMsSUFEK0IsV0FDL0JBLElBRCtCOztBQUV2QyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsTUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsRUFBZjtBQUFBLEdBQU4sQ0FBdEI7QUFDQSxNQUFNSSxxQkFBcUIsR0FBR0gsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLHFCQUFmO0FBQUEsR0FBTixDQUF6Qzs7QUFKdUMsa0JBS0ZDLCtEQUFRLENBQUMsQ0FBQUwsRUFBRSxTQUFGLElBQUFBLEVBQUUsV0FBRixZQUFBQSxFQUFFLENBQUVNLFFBQUosS0FBZ0IsRUFBakIsQ0FMTjtBQUFBO0FBQUEsTUFLaENBLFFBTGdDO0FBQUEsTUFLdEJDLGdCQUxzQjs7QUFPdkMsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU07QUFDL0JDLHVEQUFNLENBQUMsYUFBRCxrQ0FDQ2IsSUFERDtBQUVGRyxRQUFFLEVBQUU7QUFBRU0sZ0JBQVEsRUFBRUE7QUFBWjtBQUZGLFFBR0gsS0FIRyxDQUFOO0FBSUFSLFlBQVEsQ0FBQztBQUNMYSxVQUFJLEVBQUVDLHNFQUREO0FBRUxmLFVBQUksRUFBRVM7QUFGRCxLQUFELENBQVI7QUFJQU8sd0RBQU8sQ0FBQyxhQUFELENBQVA7QUFDSCxHQVYyQixFQVV6QixDQUFDUCxRQUFELENBVnlCLENBQTVCO0FBV0EsU0FDSSw0REFBQyx5Q0FBRDtBQUFNLFlBQVEsRUFBRUUsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLDREQUFDLHdDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSw0REFBQyx3Q0FBRDtBQUFLLFFBQUksRUFBRSxFQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSw0REFBQyx5Q0FBRCxDQUFNLElBQU47QUFDSSxTQUFLLEVBQUMsb0JBRFY7QUFFSSxTQUFLLEVBQUUsQ0FDSDtBQUFFTSxjQUFRLEVBQUU7QUFBWixLQURHLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLDREQUFDLDBEQUFEO0FBQ0ksUUFBSSxFQUFFLENBRFY7QUFFSSxTQUFLLEVBQUVSLFFBRlg7QUFHSSxZQUFRLE1BSFo7QUFJSSxZQUFRLEVBQUVDLGdCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixDQURKLENBREosRUFnQkksNERBQUMsd0NBQUQ7QUFBSyxRQUFJLEVBQUUsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksNERBQUMsMkNBQUQ7QUFDSSxZQUFRLEVBQUMsUUFEYjtBQUVJLFdBQU8sRUFBRUgscUJBRmI7QUFHSSxRQUFJLEVBQUMsU0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLEVBT0ksNERBQUMsMkNBQUQ7QUFBUSxXQUFPLEVBQUVaLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBUEosQ0FoQkosQ0FESixDQURKO0FBOEJILENBaEREOztHQUFNRCxnQjtVQUNlRSw0QyxFQUNBTSx1RCxFQUNORSx1RCxFQUNtQkEsdUQsRUFDT0ksdUQ7OztLQUxuQ2QsZ0I7QUFpRE5BLGdCQUFnQixDQUFDd0IsU0FBakIsR0FBNkI7QUFDekJ2QixVQUFRLEVBQUV3QixpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREEsQ0FBN0I7QUFHZTNCLCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0NzhiYjEzODhiMmM4MjIwYzdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBOaWNrbmFtZUlucHV0U2VhcmNoIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGluaXRpYWxTdGF0ZSB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB1c2VTV1IsIHsgbXV0YXRlLCB0cmlnZ2VyIH0gZnJvbSBcInN3clwiXHJcbmNvbnN0IE5pY2tuYW1lRWRpdEZvcm0gPSAoeyBvbkNhbmNlbCB9KSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUihcImdsb2JhbFN0YXRlXCIsIHsgaW5pdGlhbERhdGE6IGluaXRpYWxTdGF0ZSB9LCB7IHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlIH0pXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gICAgY29uc3QgY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcpO1xyXG4gICAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KG1lPy5uaWNrbmFtZSB8fCAnJyk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgbXV0YXRlKFwiZ2xvYmFsU3RhdGVcIiwge1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBtZTogeyBuaWNrbmFtZTogbmlja25hbWUgfVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IG5pY2tuYW1lLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyaWdnZXIoXCJnbG9iYWxTdGF0ZVwiKTtcclxuICAgIH0sIFtuaWNrbmFtZV0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBvbkZpbmlzaD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzcGFuPXsxOH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIuuLieuEpOyehFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5pY2tuYW1lSW5wdXRTZWFyY2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW49ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2NoYW5nZU5pY2tuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgID7rsJTqvrjquLA8L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbH0+7Leo7IaM7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKTtcclxufTtcclxuTmlja25hbWVFZGl0Rm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTmlja25hbWVFZGl0Rm9ybTsgIl0sInNvdXJjZVJvb3QiOiIifQ==