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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    };
    this.player = new _movingCircle__WEBPACK_IMPORTED_MODULE_0__["default"](this.dimensions.width / 2, this.dimensions.height / 2, 10);
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
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (this.moving.up) this.player.move(0, -2);
      if (this.moving.left) this.player.move(-2);
      if (this.moving.down) this.player.move(0, 2);
      if (this.moving.right) this.player.move(2);
    }
  }, {
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.movePlayer();
      this.player.animate(this.ctx);
      console.log('running');
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
  }

  _createClass(MovingCicle, [{
    key: "isTouching",
    value: function isTouching(other) {
      var a = Math.abs(other.x - this.x);
      var b = Math.abs(other.y - this.y);
      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      return c < this.radius;
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
      this.xVel *= .3;
      this.yVel *= .3;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = 'yellow';
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



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map