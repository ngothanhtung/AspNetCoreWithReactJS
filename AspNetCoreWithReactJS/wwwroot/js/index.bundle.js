webpackJsonp([0],{

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(186);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(83);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            model: null,
            loading: true
        };
        return _this;
    }

    _createClass(App, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            // get json data from remote api
            fetch("/api/book").then(function (res) {
                return res.json();
            }).then(function (result) {
                _this2.state.model = result;
                _this2.setState({ loading: false });
                _this2.setState(_this2.state);
            });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.loading === false) {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(
                        "h1",
                        null,
                        "Hello From ReactJS"
                    ),
                    this.state.model.map(function (x) {
                        return _react2.default.createElement(
                            "h3",
                            { key: x.id },
                            x.name
                        );
                    })
                );
            } else {
                return _react2.default.createElement(
                    "h1",
                    null,
                    "Loading ... "
                );
            }
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ })

},[185]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BcHAuanMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb2RlbCIsImxvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic2V0U3RhdGUiLCJtYXAiLCJ4IiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsbUJBQVNBLE1BQVQsQ0FBZ0Isa0RBQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR3FCQyxHOzs7QUFDakIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDVEEsS0FEUzs7QUFFZixjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sSUFERTtBQUVUQyxxQkFBUztBQUZBLFNBQWI7QUFGZTtBQU1sQjs7Ozs0Q0FDbUI7QUFBQTs7QUFDaEI7QUFDQUMsa0JBQU0sV0FBTixFQUNLQyxJQURMLENBQ1U7QUFBQSx1QkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsYUFEVixFQUVLRixJQUZMLENBRVUsVUFBQ0csTUFBRCxFQUFZO0FBQ2QsdUJBQUtQLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQk0sTUFBbkI7QUFDQSx1QkFBS0MsUUFBTCxDQUFjLEVBQUVOLFNBQVMsS0FBWCxFQUFkO0FBQ0EsdUJBQUtNLFFBQUwsQ0FBYyxPQUFLUixLQUFuQjtBQUNILGFBTkw7QUFPSDs7O2lDQUVRO0FBQ0wsZ0JBQUksS0FBS0EsS0FBTCxDQUFXRSxPQUFYLEtBQXVCLEtBQTNCLEVBQWtDO0FBQzlCLHVCQUNJO0FBQUE7QUFBQTtBQUNJLHlFQURKO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUlRLHlCQUFLRixLQUFMLENBQVdDLEtBQVgsQ0FBaUJRLEdBQWpCLENBQXFCLFVBQUNDLENBQUQ7QUFBQSwrQkFDakI7QUFBQTtBQUFBLDhCQUFJLEtBQUtBLEVBQUVDLEVBQVg7QUFDS0QsOEJBQUVFO0FBRFAseUJBRGlCO0FBQUEscUJBQXJCO0FBSlIsaUJBREo7QUFhSCxhQWRELE1BY087QUFDSCx1QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBR0g7QUFDSjs7Ozs7O2tCQXZDZ0JkLEciLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vZGVsOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIGdldCBqc29uIGRhdGEgZnJvbSByZW1vdGUgYXBpXHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2Jvb2tcIilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW9kZWwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5IZWxsbyBGcm9tIFJlYWN0SlM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb2RlbC5tYXAoKHgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMga2V5PXt4LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8aDE+TG9hZGluZyAuLi4gPC9oMT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9BcHAuanMiXSwic291cmNlUm9vdCI6IiJ9