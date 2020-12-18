webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
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
/* harmony import */ var _ant_design_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/PlusOutlined */ "./node_modules/@ant-design/icons/PlusOutlined.js");
/* harmony import */ var _ant_design_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ImagesZoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImagesZoom */ "./components/ImagesZoom/index.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");



var _jsxFileName = "C:\\Users\\HOME\\Documents\\ymillonga\\front\\components\\PostImages.js",
    _this = undefined,
    _s = $RefreshSig$();







var PostImages = function PostImages(_ref) {
  _s();

  var images = _ref.images;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showImagesZoom = _useState[0],
      setShowImagesZoom = _useState[1];

  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
      role: "presentation",
      src: "".concat(images[0].src),
      alt: images[0].src,
      style: {
        width: '300px',
        height: '300px',
        cursor: 'pointer'
      },
      onClick: onZoom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      },
      __self: _this
    }), showImagesZoom && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onClose: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 36
      },
      __self: _this
    }));
  }

  if (images.length === 2) {
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block',
        cursor: 'pointer'
      },
      src: "".concat(images[0].src),
      alt: images[0].src,
      onClick: onZoom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      },
      __self: _this
    }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
      role: "presentation",
      style: {
        width: '50%',
        display: 'inline-block',
        cursor: 'pointer'
      },
      src: "".concat(images[1].src),
      alt: images[1].src,
      onClick: onZoom,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      },
      __self: _this
    }), showImagesZoom && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
      images: images,
      onClose: onClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 36
      },
      __self: _this
    }));
  }

  return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    role: "presentation",
    style: {
      width: '50%',
      cursor: 'pointer'
    },
    src: "".concat(images[0].src),
    alt: images[0].src,
    onClick: onZoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    role: "presentation",
    style: {
      width: '50%',
      display: 'inline-block',
      textAlign: 'center',
      verticalAlign: 'middle',
      cursor: 'pointer'
    },
    onClick: onZoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    },
    __self: _this
  }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ant_design_icons_PlusOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    },
    __self: _this
  }), Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    },
    __self: _this
  }), images.length - 1, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354 \uBCF4\uAE30")), showImagesZoom && Object(_emotion_react__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ImagesZoom__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: images,
    onClose: onClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 32
    },
    __self: _this
  }));
};

_s(PostImages, "xZ+WVc/D16Fmvriq1CwZMW/wLmE=");

_c = PostImages;
PostImages.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c;

$RefreshReg$(_c, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJ1c2VTdGF0ZSIsInNob3dJbWFnZXNab29tIiwic2V0U2hvd0ltYWdlc1pvb20iLCJvblpvb20iLCJ1c2VDYWxsYmFjayIsIm9uQ2xvc2UiLCJsZW5ndGgiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImN1cnNvciIsImRpc3BsYXkiLCJ0ZXh0QWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsS0FBRCxDQURyQjtBQUFBLE1BQ3hCQyxjQUR3QjtBQUFBLE1BQ1JDLGlCQURROztBQUUvQixNQUFNQyxNQUFNLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUM3QkYscUJBQWlCLENBQUMsSUFBRCxDQUFqQjtBQUNILEdBRnlCLEVBRXZCLEVBRnVCLENBQTFCO0FBR0EsTUFBTUcsT0FBTyxHQUFHRCx5REFBVyxDQUFDLFlBQU07QUFDOUJGLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDSCxHQUYwQixFQUV4QixFQUZ3QixDQUEzQjs7QUFJQSxNQUFJSCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsV0FDSSx3SEFDSTtBQUFLLFVBQUksRUFBQyxjQUFWO0FBQ0ksU0FBRyxZQUFLUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQWYsQ0FEUDtBQUVJLFNBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUSxHQUZuQjtB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QUNnQixTQUFYLEdBQXVCO0FBQ25CZixRQUFNLEVBQUVnQixpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUE1QixFQUFvQ0M7QUFEekIsQ0FBdkI7QUFHZXBCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI2ZWYzMGRjODE4Y2VkNWEzZDA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIFBsdXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zL1BsdXNPdXRsaW5lZCc7XHJcbmltcG9ydCBJbWFnZXNab29tIGZyb20gJy4vSW1hZ2VzWm9vbSc7XHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICAgIGNvbnN0IFtzaG93SW1hZ2VzWm9vbSwgc2V0U2hvd0ltYWdlc1pvb21dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgb25ab29tID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dJbWFnZXNab29tKHRydWUpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25DbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRTaG93SW1hZ2VzWm9vbShmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2ltYWdlc1swXS5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICczMDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX0gLz5cclxuICAgICAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbVxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfSBvbkNsb3NlPXtvbkNsb3NlfSAvPn1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGlmIChpbWFnZXMubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YCR7aW1hZ2VzWzBdLnNyY31gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2VzWzBdLnNyY31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblpvb219IC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2ltYWdlc1sxXS5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1sxXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAge3Nob3dJbWFnZXNab29tICYmIDxJbWFnZXNab29tXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake2ltYWdlc1swXS5zcmN9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlc1swXS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25ab29tfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uWm9vbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBsdXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubGVuZ3RoIC0gMX3qsJzsnZgg7IKs7KeEIOuNlCDrs7TquLBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtzaG93SW1hZ2VzWm9vbSAmJiA8SW1hZ2VzWm9vbVxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9IG9uQ2xvc2U9e29uQ2xvc2V9IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuUG9zdEltYWdlcy5wcm9wVHlwZXMgPSB7XHJcbiAgICBpbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWQsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJbWFnZXM7ICJdLCJzb3VyY2VSb290IjoiIn0=