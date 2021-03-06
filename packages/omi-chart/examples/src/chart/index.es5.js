'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _omi = typeof require === 'function'? require('omi') : window.Omi

var _chart = typeof require === 'function'? require('chart.js') : window.Chart

var _chart2 = _interopRequireDefault(_chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartBase = function (_WeElement) {
  _inherits(ChartBase, _WeElement);

  function ChartBase() {
    _classCallCheck(this, ChartBase);

    return _possibleConstructorReturn(this, (ChartBase.__proto__ || Object.getPrototypeOf(ChartBase)).apply(this, arguments));
  }

  _createClass(ChartBase, [{
    key: 'receiveProps',
    value: function receiveProps(props) {
      this.chart.data = props.data;
      this.chart.options = props.options;
      this.chart.update();
    }
  }, {
    key: 'render',
    value: function render(props) {
      var _this2 = this;

      return Omi.createElement(
        'div',
        { style: { width: props.width + 'px', height: props.height + 'px' } },
        Omi.createElement('canvas', { ref: function ref(e) {
            _this2.canvas = e;
          } })
      );
    }
  }]);

  return ChartBase;
}(_omi.WeElement);

(0, _omi.define)('chart-bar', function (_ChartBase) {
  _inherits(_class, _ChartBase);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default(this.canvas.getContext('2d'), {
        type: this.props.horizontal ? 'horizontalBar' : 'bar',
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class;
}(ChartBase));

(0, _omi.define)('chart-line', function (_ChartBase2) {
  _inherits(_class2, _ChartBase2);

  function _class2() {
    _classCallCheck(this, _class2);

    return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
  }

  _createClass(_class2, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default(this.canvas.getContext('2d'), {
        type: 'line',
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class2;
}(ChartBase));

(0, _omi.define)('chart-radar', function (_ChartBase3) {
  _inherits(_class3, _ChartBase3);

  function _class3() {
    _classCallCheck(this, _class3);

    return _possibleConstructorReturn(this, (_class3.__proto__ || Object.getPrototypeOf(_class3)).apply(this, arguments));
  }

  _createClass(_class3, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default(this.canvas.getContext('2d'), {
        type: 'radar',
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class3;
}(ChartBase));

(0, _omi.define)('chart-scatter', function (_ChartBase4) {
  _inherits(_class4, _ChartBase4);

  function _class4() {
    _classCallCheck(this, _class4);

    return _possibleConstructorReturn(this, (_class4.__proto__ || Object.getPrototypeOf(_class4)).apply(this, arguments));
  }

  _createClass(_class4, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default.Scatter(this.canvas.getContext('2d'), {
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class4;
}(ChartBase));

(0, _omi.define)('chart-doughnut', function (_ChartBase5) {
  _inherits(_class5, _ChartBase5);

  function _class5() {
    _classCallCheck(this, _class5);

    return _possibleConstructorReturn(this, (_class5.__proto__ || Object.getPrototypeOf(_class5)).apply(this, arguments));
  }

  _createClass(_class5, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default(this.canvas.getContext('2d'), {
        type: 'doughnut',
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class5;
}(ChartBase));

(0, _omi.define)('chart-pie', function (_ChartBase6) {
  _inherits(_class6, _ChartBase6);

  function _class6() {
    _classCallCheck(this, _class6);

    return _possibleConstructorReturn(this, (_class6.__proto__ || Object.getPrototypeOf(_class6)).apply(this, arguments));
  }

  _createClass(_class6, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default(this.canvas.getContext('2d'), {
        type: 'pie',
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class6;
}(ChartBase));

(0, _omi.define)('chart-polar-area', function (_ChartBase7) {
  _inherits(_class7, _ChartBase7);

  function _class7() {
    _classCallCheck(this, _class7);

    return _possibleConstructorReturn(this, (_class7.__proto__ || Object.getPrototypeOf(_class7)).apply(this, arguments));
  }

  _createClass(_class7, [{
    key: 'installed',
    value: function installed() {
      this.chart = new _chart2.default.PolarArea(this.canvas.getContext('2d'), {
        data: this.props.data,
        options: this.props.options
      });
    }
  }]);

  return _class7;
}(ChartBase));