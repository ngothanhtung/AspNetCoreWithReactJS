webpackJsonp([2],{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(34);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(185);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

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

},[184]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BcHAuanMiXSwibmFtZXMiOlsicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb2RlbCIsImxvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic2V0U3RhdGUiLCJtYXAiLCJ4IiwiaWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsbUJBQVNBLE1BQVQsQ0FBZ0Isa0RBQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7OztJQUVxQkMsRzs7O0FBQ2pCLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEdBQ1RBLEtBRFM7O0FBRWYsY0FBS0MsS0FBTCxHQUFhO0FBQ1RDLG1CQUFPLElBREU7QUFFVEMscUJBQVM7QUFGQSxTQUFiO0FBRmU7QUFNbEI7Ozs7NENBQ21CO0FBQUE7O0FBQ2hCO0FBQ0FDLGtCQUFNLFdBQU4sRUFDS0MsSUFETCxDQUNVO0FBQUEsdUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLGFBRFYsRUFFS0YsSUFGTCxDQUVVLFVBQUNHLE1BQUQsRUFBWTtBQUNkLHVCQUFLUCxLQUFMLENBQVdDLEtBQVgsR0FBbUJNLE1BQW5CO0FBQ0EsdUJBQUtDLFFBQUwsQ0FBYyxFQUFFTixTQUFTLEtBQVgsRUFBZDtBQUNBLHVCQUFLTSxRQUFMLENBQWMsT0FBS1IsS0FBbkI7QUFDSCxhQU5MO0FBT0g7OztpQ0FFUTtBQUNMLGdCQUFJLEtBQUtBLEtBQUwsQ0FBV0UsT0FBWCxLQUF1QixLQUEzQixFQUFrQztBQUM5Qix1QkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBR1EseUJBQUtGLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlEsR0FBakIsQ0FBcUIsVUFBQ0MsQ0FBRDtBQUFBLCtCQUNqQjtBQUFBO0FBQUEsOEJBQUksS0FBS0EsRUFBRUMsRUFBWDtBQUNLRCw4QkFBRUU7QUFEUCx5QkFEaUI7QUFBQSxxQkFBckI7QUFIUixpQkFESjtBQVlILGFBYkQsTUFhTztBQUNILHVCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFHSDtBQUNKOzs7Ozs7a0JBdENnQmQsRyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIG1vZGVsOiBudWxsLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIC8vIGdldCBqc29uIGRhdGEgZnJvbSByZW1vdGUgYXBpXHJcbiAgICAgICAgZmV0Y2goXCIvYXBpL2Jvb2tcIilcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubW9kZWwgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkhlbGxvIEZyb20gUmVhY3RKUzwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vZGVsLm1hcCgoeCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBrZXk9e3guaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt4Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nIC4uLiA8L2gxPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=