import MovingCircle from './movingCircle'
import Player from './player'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = {
      width: canvas.width,
      height: canvas.height
    }
    this.other = new MovingCircle(this.size.width * .5, this.size.height * .5, 10)
    this.player = new Player(this.size.width*.5, this.size.height*.8, 10)
    this.moving = {
      up: false,
      left: false,
      down: false,
      right: false
    }
    this.play()
    this.listen()
  }

  listen() {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'w' || e.key == 'ArrowUp') this.moving.up = true
      if (e.key == 'a' || e.key == 'ArrowLeft') this.moving.left = true
      if (e.key == 's' || e.key == 'ArrowDown') this.moving.down = true
      if (e.key == 'd' || e.key == 'ArrowRight') this.moving.right = true
    })
    document.addEventListener('keyup', (e) => {
      if (e.key == 'w' || e.key == 'ArrowUp') this.moving.up = false
      if (e.key == 'a' || e.key == 'ArrowLeft') this.moving.left = false
      if (e.key == 's' || e.key == 'ArrowDown') this.moving.down = false
      if (e.key == 'd' || e.key == 'ArrowRight') this.moving.right = false
    })
  }

  movePlayer() {
    if (this.moving.up) this.player.move(0, -2)
    if (this.moving.left) this.player.move(-2)
    if (this.moving.down) this.player.move(0, 2)
    if (this.moving.right) this.player.move(2)
    this.player.inBound(this.size)
  }

  playerIsTouch(other) {
    if (this.player.isTouching(this.other)) this.other.move(0, -10)
  }

  animate() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height)
    this.movePlayer()
    this.playerIsTouch()
    this.other.animate(this.ctx)
    this.player.animate(this.ctx)
    console.log('running');
    
  }

  play() {
    this.animate()
    requestAnimationFrame(this.play.bind(this))
  }

}