webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Components/peopletable.js":
/*!***********************************!*\
  !*** ./Components/peopletable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactabular_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactabular-table */ "./node_modules/reactabular-table/dist/index.js");
/* harmony import */ var reactabular_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactabular_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_css_semantic_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.css */ "./node_modules/semantic-ui-css/semantic.css");
/* harmony import */ var semantic_ui_css_semantic_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/josrun/Documents/git/interviews/eftest/Components/peopletable.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var columns = [{
  property: 'photo',
  // props: {
  //   style: { minWidth: 50, width: 50 }
  // },
  header: {
    label: 'Photo'
  },
  cell: {
    formatters: [function (photo, extra) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: photo,
        className: "ui tiny rounded image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      });
    }]
  }
}, {
  property: 'name',
  header: {
    label: 'First Name'
  }
}, {
  property: 'surname',
  header: {
    label: 'Last Name'
  }
}, {
  property: 'gender',
  header: {
    label: 'Gender'
  }
}, {
  property: 'region',
  header: {
    label: 'Region'
  }
}, {
  property: 'phone',
  header: {
    label: 'Phone'
  }
}, {
  property: 'email',
  header: {
    label: 'Email'
  }
}];

var PeopleTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PeopleTable, _React$Component);

  function PeopleTable() {
    _classCallCheck(this, PeopleTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(PeopleTable).apply(this, arguments));
  }

  _createClass(PeopleTable, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactabular_table__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        className: "ui table striped",
        columns: columns,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactabular_table__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactabular_table__WEBPACK_IMPORTED_MODULE_1__["Body"], {
        rows: this.props.rows,
        rowKey: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }));
    }
  }]);

  return PeopleTable;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PeopleTable);

/***/ })

})
//# sourceMappingURL=index.js.5e367826767f6393b5b6.hot-update.js.map