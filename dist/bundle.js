/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _movingCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movingCircle */ "./src/movingCircle.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _toiletPaper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toiletPaper */ "./src/toiletPaper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = {
      width: canvas.width,
      height: canvas.height
    };
    this.other = new _movingCircle__WEBPACK_IMPORTED_MODULE_0__["default"](this.size.width * .5, this.size.height * .5, 10);
    this.things = [this.other];
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this.size.width * .5, this.size.height * .8, 10);
    this.moving = {
      up: false,
      left: false,
      down: false,
      right: false
    };
    this.play();
    this.listen();
  }

  _createClass(Game, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      document.addEventListener('keydown', function (e) {
        if (e.key == 'w' || e.key == 'ArrowUp') _this.moving.up = true;
        if (e.key == 'a' || e.key == 'ArrowLeft') _this.moving.left = true;
        if (e.key == 's' || e.key == 'ArrowDown') _this.moving.down = true;
        if (e.key == 'd' || e.key == 'ArrowRight') _this.moving.right = true;
      });
      document.addEventListener('keyup', function (e) {
        if (e.key == 'w' || e.key == 'ArrowUp') _this.moving.up = false;
        if (e.key == 'a' || e.key == 'ArrowLeft') _this.moving.left = false;
        if (e.key == 's' || e.key == 'ArrowDown') _this.moving.down = false;
        if (e.key == 'd' || e.key == 'ArrowRight') _this.moving.right = false;
      });
      document.addEventListener('click', function (e) {
        var pos = _this.player.pos();

        var tp = new _toiletPaper__WEBPACK_IMPORTED_MODULE_2__["default"](pos.x, pos.y);

        var mPos = _this.getMousePos(_this.canvas, e);

        var x = mPos.x - pos.x;
        var y = mPos.y - pos.y;
        var angle = Math.asin(x / Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
        var xVel = Math.sin(angle);
        var yVel = y > 0 ? Math.cos(angle) : Math.cos(angle) * -1;
        tp.xVel += xVel * 5;
        tp.yVel += yVel * 4;
        y > 0 ? tp.yVel += Math.cos(angle) : tp.yVel += Math.cos(angle) * -1;

        _this.things.push(tp);
      });
    }
  }, {
    key: "removeNotInBound",
    value: function removeNotInBound() {
      var _this2 = this;

      this.things = this.things.filter(function (thing) {
        return thing.inBound(_this2.size);
      });
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (this.moving.up) this.player.move(0, -2);
      if (this.moving.left) this.player.move(-2);
      if (this.moving.down) this.player.move(0, 2);
      if (this.moving.right) this.player.move(2);
      this.player.inBound(this.size);
    }
  }, {
    key: "playerIsTouch",
    value: function playerIsTouch(other) {
      if (this.player.isTouching(this.other)) this.other.move(this.player.xVel, this.player.yVel);
    }
  }, {
    key: "getMousePos",
    value: function getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      this.ctx.clearRect(0, 0, this.size.width, this.size.height);
      this.movePlayer();
      this.playerIsTouch();
      this.removeNotInBound();
      this.things.forEach(function (thing) {
        return thing.animate(_this3.ctx);
      });
      this.player.animate(this.ctx);
    }
  }, {
    key: "play",
    value: function play() {
      this.animate();
      requestAnimationFrame(this.play.bind(this));
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

var canvas = document.getElementById('canvas');
var cam = document.getElementById('camera');
new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, cam);

/***/ }),

/***/ "./src/movingCircle.js":
/*!*****************************!*\
  !*** ./src/movingCircle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovingCicle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MovingCicle = /*#__PURE__*/function () {
  function MovingCicle(x, y, radius) {
    _classCallCheck(this, MovingCicle);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.xVel = 0;
    this.yVel = 0;
    this.color = 'red';
  }

  _createClass(MovingCicle, [{
    key: "pos",
    value: function pos() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "inBound",
    value: function inBound(size) {
      if (this.x + this.radius < 0 || this.x - this.radius > size.width) return false;
      if (this.y + this.radius < 0 || this.y - this.radius > size.height) return false;
      return true;
    }
  }, {
    key: "isTouching",
    value: function isTouching(other) {
      var a = Math.abs(other.x - this.x);
      var b = Math.abs(other.y - this.y);
      var c = Math.sqrt(a * a + b * b); // console.log(a,b,c);

      return c < this.radius + other.radius;
    }
  }, {
    key: "move",
    value: function move() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.xVel += x;
      this.yVel += y;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.xVel;
      this.y += this.yVel;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.update();
      this.draw(ctx);
    }
  }]);

  return MovingCicle;
}();



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _movingCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movingCircle */ "./src/movingCircle.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Player = /*#__PURE__*/function (_MovingCircle) {
  _inherits(Player, _MovingCircle);

  var _super = _createSuper(Player);

  function Player(x, y, radius) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, x, y, radius);
    _this.color = 'yellow';
    _this.tp = [];
    _this.food = 50;
    return _this;
  }

  _createClass(Player, [{
    key: "inBound",
    value: function inBound(size) {
      if (this.x < this.radius) this.x = this.radius;
      if (this.x > size.width - this.radius) this.x = size.width - this.radius;
      if (this.y < this.radius) this.y = this.radius;
      if (this.y > size.height - this.radius) this.y = size.height - this.radius;
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.xVel;
      this.y += this.yVel;
      this.xVel *= .3;
      this.yVel *= .3;
    }
  }]);

  return Player;
}(_movingCircle__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/toiletPaper.js":
/*!****************************!*\
  !*** ./src/toiletPaper.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToiletPaper; });
/* harmony import */ var _movingCircle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movingCircle */ "./src/movingCircle.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ToiletPaper = /*#__PURE__*/function (_MovingCirlce) {
  _inherits(ToiletPaper, _MovingCirlce);

  var _super = _createSuper(ToiletPaper);

  function ToiletPaper(x, y) {
    var _this;

    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

    _classCallCheck(this, ToiletPaper);

    _this = _super.call(this, x, y, radius);
    _this.color = 'blue';
    _this.attractRadius = radius * 10;
    _this.land = _this.land.bind(_assertThisInitialized(_this));

    _this.land();

    return _this;
  }

  _createClass(ToiletPaper, [{
    key: "land",
    value: function land() {
      setTimeout(this.resetVel.bind(this), 500);
    }
  }, {
    key: "resetVel",
    value: function resetVel() {
      this.xVel = 0;
      this.yVel = 0;
    }
  }]);

  return ToiletPaper;
}(_movingCircle__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map