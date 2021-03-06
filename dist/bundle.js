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
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _peopleMaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peopleMaker */ "./src/peopleMaker.js");
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
    this.interval = 1500;
    this.gameOver = false;
    this.peopleMaker = new _peopleMaker__WEBPACK_IMPORTED_MODULE_1__["default"](this.size);
    this.people = [];
    this.stuff = [];
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](this.size.width * .5, this.size.height * .8, 10);
    this.moving = {
      up: false,
      left: false,
      down: false,
      right: false
    };
    this.play();
    this.initListeners();
    this.autoMakePeople();
    setInterval(this.increaseTraffic.bind(this), 5000);
  }

  _createClass(Game, [{
    key: "increaseTraffic",
    value: function increaseTraffic() {
      if (this.interval > 500) {
        this.interval -= 100;
      } else if (this.interval > 50) {
        this.interval -= 10;
      }
    }
  }, {
    key: "initListeners",
    value: function initListeners() {
      this.movementListener();
      this.throwTPListener();
    }
  }, {
    key: "movementListener",
    value: function movementListener() {
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
    }
  }, {
    key: "throwTPListener",
    value: function throwTPListener() {
      var _this2 = this;

      document.addEventListener('click', function (e) {
        if (_this2.player.hasTP()) {
          var pos = _this2.player.pos();

          var mPos = _this2.getMousePos(_this2.canvas, e);

          var tp = new _toiletPaper__WEBPACK_IMPORTED_MODULE_2__["default"](pos.x, pos.y);
          tp.moveTo(mPos, 15);

          _this2.stuff.push(tp);

          _this2.player.tpAmmo--;
        } else {
          console.log('need ammo');
        }
      });
    }
  }, {
    key: "makeRandomPeople",
    value: function makeRandomPeople() {
      var person = this.peopleMaker.makeRandomPerson();
      this.people.push(person);
    }
  }, {
    key: "autoMakePeople",
    value: function autoMakePeople() {
      var time = this.randomInterval();
      setTimeout(this.makeRandomPeople.bind(this), time);
      setTimeout(this.autoMakePeople.bind(this), time);
    }
  }, {
    key: "randomInterval",
    value: function randomInterval() {
      return Math.floor(Math.random() * this.interval);
    }
  }, {
    key: "removeNotInPlay",
    value: function removeNotInPlay() {
      this.removePeople();
      this.removeStuff();
    }
  }, {
    key: "removePeople",
    value: function removePeople() {
      var _this3 = this;

      this.people = this.people.filter(function (person) {
        return person.inBound(_this3.size);
      });
    }
  }, {
    key: "removeStuff",
    value: function removeStuff() {
      var _this4 = this;

      this.stuff = this.stuff.filter(function (item) {
        return item.inBound(_this4.size) && item.hp > 0;
      });
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (this.moving.up && this.moving.left) this.player.move(1, 1);
      if (this.moving.up && this.moving.right) this.player.move(-1, 1);
      if (this.moving.down && this.moving.left) this.player.move(1, -1);
      if (this.moving.down && this.moving.right) this.player.move(-1, -1);
      if (this.moving.up) this.player.move(0, -3);
      if (this.moving.down) this.player.move(0, 3);
      if (this.moving.left) this.player.move(-3);
      if (this.moving.right) this.player.move(3);
      this.player.inBound(this.size);
    }
  }, {
    key: "playerIsTouchingPeople",
    value: function playerIsTouchingPeople() {
      var _this5 = this;

      this.people.forEach(function (person) {
        if (_this5.player.isTouching(person)) {
          _this5.player.gotTouched();

          person.moveAway(_this5.player);
          if (_this5.player.hp <= 0) _this5.gameOver = true;
        }
      });
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
    key: "movePeople",
    value: function movePeople() {
      this.socialDistance();
      this.movePeopleToTP();
    }
  }, {
    key: "socialDistance",
    value: function socialDistance() {
      var _this6 = this;

      this.people.forEach(function (person) {
        var other = person.findClosestPerson(_this6.people);

        if (other && person.getDistanceTo(other.pos()) < 30) {
          person.moveAway(other.pos());
        }
      });
    }
  }, {
    key: "movePeopleToTP",
    value: function movePeopleToTP() {
      var _this7 = this;

      this.people.forEach(function (person) {
        var tp = person.findClosestTP(_this7.stuff);

        if (tp) {
          person.moveTo(tp.pos());

          if (person.isTouching(tp)) {
            tp.hp -= 1;
            person.xVel = 0;
            person.yVel = 0;
          }
        }
      });
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this8 = this;

      if (!this.gameOver) {
        this.ctx.clearRect(0, 0, this.size.width, this.size.height);
        this.movePlayer();
        this.playerIsTouchingPeople();
        this.removeNotInPlay();
        this.movePeople();
        this.people.forEach(function (person) {
          return person.animate(_this8.ctx);
        });
        this.stuff.forEach(function (thing) {
          return thing.animate(_this8.ctx);
        });
        this.player.animate(this.ctx);
      }
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
    this.friction = .95;
    this.xVel = 0;
    this.yVel = 0;
    this.color = 'black';
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
      if (this.x + this.radius < -100 || this.x - this.radius > size.width + 100) return false;
      if (this.y + this.radius < -100 || this.y - this.radius > size.height + 100) return false;
      return true;
    }
  }, {
    key: "isTouching",
    value: function isTouching(other) {
      var a = other.x - this.x;
      var b = other.y - this.y;
      var c = Math.hypot(a, b);
      return c < this.radius + other.radius;
    }
  }, {
    key: "getDistanceTo",
    value: function getDistanceTo(pos) {
      var ownPos = this.pos();
      var x = pos.x - ownPos.x;
      var y = pos.y - ownPos.y;
      return Math.hypot(x, y);
    }
  }, {
    key: "getVelTo",
    value: function getVelTo(pos) {
      var ownPos = this.pos();
      var x = pos.x - ownPos.x;
      var y = pos.y - ownPos.y;
      var angle = Math.asin(x / Math.hypot(x, y));
      var xVel = Math.sin(angle);
      var yVel = y > 0 ? Math.cos(angle) : Math.cos(angle) * -1;
      return {
        xVel: xVel,
        yVel: yVel
      };
    }
  }, {
    key: "moveTo",
    value: function moveTo(pos) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .1;
      var vel = this.getVelTo(pos);
      this.xVel += vel.xVel * speed;
      this.yVel += vel.yVel * speed;
      this.xVel *= this.friction;
      this.yVel *= this.friction;
    }
  }, {
    key: "moveAway",
    value: function moveAway(pos) {
      var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .09;
      var vel = this.getVelTo(pos);
      this.xVel -= vel.xVel * speed;
      this.yVel -= vel.yVel * speed;
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
      this.y += 1; // this.xVel *= this.friction
      // this.yVel *= this.friction
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

/***/ "./src/people.js":
/*!***********************!*\
  !*** ./src/people.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return People; });
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



var People = /*#__PURE__*/function (_MovingCircle) {
  _inherits(People, _MovingCircle);

  var _super = _createSuper(People);

  function People(x, y) {
    var _this;

    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, People);

    _this = _super.call(this, x, y, radius);
    _this.color = 'red';

    _this.randomMove();

    return _this;
  }

  _createClass(People, [{
    key: "seesTP",
    value: function seesTP(tp) {
      var a = tp.x - this.x;
      var b = tp.y - this.y;
      var c = Math.hypot(a, b);
      return c < this.radius + tp.visRadius;
    }
  }, {
    key: "randomDirection",
    value: function randomDirection() {
      var ownPos = this.pos();
      var x = ownPos.x += Math.random() * 100 - 50;
      var y = ownPos.x += Math.random() * 200 - 100;
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "randomMove",
    value: function randomMove() {
      this.xVel *= .7;
      this.yVel *= .7;
      var pos = this.randomDirection();
      this.moveTo(pos, 1);
      setTimeout(this.randomMove.bind(this), 1000);
    }
  }, {
    key: "findClosestPerson",
    value: function findClosestPerson(people) {
      var _this2 = this;

      var closest = null;
      people.forEach(function (person) {
        if (_this2 !== person) {
          if (closest === null) closest = person;

          if (_this2.getDistanceTo(person.pos()) < _this2.getDistanceTo(closest.pos())) {
            closest = person;
          }
        }
      });
      return closest;
    }
  }, {
    key: "findClosestTP",
    value: function findClosestTP(list) {
      var _this3 = this;

      var closest = null;
      list.forEach(function (tp) {
        if (!tp.moving) {
          if (_this3.seesTP(tp)) {
            if (closest === null) closest = tp;

            if (_this3.getDistanceTo(tp) < _this3.getDistanceTo(closest)) {
              closest = tp;
            }
          }
        }
      });
      return closest;
    }
  }]);

  return People;
}(_movingCircle__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/peopleMaker.js":
/*!****************************!*\
  !*** ./src/peopleMaker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return peopleMaker; });
/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./people */ "./src/people.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var peopleMaker = /*#__PURE__*/function () {
  function peopleMaker(size) {
    _classCallCheck(this, peopleMaker);

    this.width = size.width;
    this.height = size.height;
  }

  _createClass(peopleMaker, [{
    key: "randomPeopleSize",
    value: function randomPeopleSize() {
      return Math.floor(Math.random() * (12 - 7) + 7);
    }
  }, {
    key: "randomX",
    value: function randomX() {
      return Math.floor(Math.random() * (this.width - 40) + 20);
    }
  }, {
    key: "makeRandomPerson",
    value: function makeRandomPerson() {
      var x = this.randomX();
      var radius = 10; // let radius = this.randomPeopleSize()

      return new _people__WEBPACK_IMPORTED_MODULE_0__["default"](x, -20, radius);
    }
  }]);

  return peopleMaker;
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

  function Player(x, y) {
    var _this;

    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    _classCallCheck(this, Player);

    _this = _super.call(this, x, y, radius);
    _this.color = 'turquoise';
    _this.tpAmmo = 50;
    _this.hp = 3;
    _this.invulnerable = false;
    return _this;
  }

  _createClass(Player, [{
    key: "gotTouched",
    value: function gotTouched() {
      if (!this.invulnerable) {
        this.hp--;
        this.toggleInvulnerablity();
        this.color = 'black';
        setTimeout(this.toggleInvulnerablity.bind(this), 1000);
      }
    }
  }, {
    key: "toggleInvulnerablity",
    value: function toggleInvulnerablity() {
      switch (this.hp) {
        case 2:
          this.color = 'yellow';
          break;

        case 1:
          this.color = 'orange';
          break;

        case 0:
          this.color = 'red';
          break;

        default:
          this.color = 'turquoise';
      }

      this.invulnerable = !this.invulnerable;
    }
  }, {
    key: "hasTP",
    value: function hasTP() {
      return this.tpAmmo > 0;
    }
  }, {
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
    _this.visRadius = radius * 25;
    _this.hp = 100;
    _this.moving = true;
    _this.land = _this.land.bind(_assertThisInitialized(_this));

    _this.land();

    setTimeout(function () {
      _this.moving = false;
    }, 150);
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
  }, {
    key: "update",
    value: function update() {
      this.x += this.xVel;
      this.y += this.yVel;
      this.y += .5;
      this.xVel *= .9;
      this.yVel *= .9;
    }
  }]);

  return ToiletPaper;
}(_movingCircle__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map