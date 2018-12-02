webpackHotUpdate("static/development/pages/index.js",{

/***/ "./DataComponents/people.js":
/*!**********************************!*\
  !*** ./DataComponents/people.js ***!
  \**********************************/
/*! exports provided: peopleQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peopleQuery", function() { return peopleQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_peopletable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/peopletable */ "./Components/peopletable.js");
var _jsxFileName = "/Users/josrun/Documents/git/interviews/eftest/DataComponents/people.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query users {\n    people (ext: true, amount: 100)\n      @rest(type: \"[Person]\", path: \"/?{args}\") {\n      name\n      surname\n      gender\n      region\n      phone\n      email\n      photo\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var peopleQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function PostList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: peopleQuery,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        people = _ref.data.people;
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "Error loading people.'");
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_peopletable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      rows: people,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  });
}

/***/ })

})
//# sourceMappingURL=index.js.dbedad3ddf9813b779bd.hot-update.js.map