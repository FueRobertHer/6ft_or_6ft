import MovingCircle from './movingCircle'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.dimensions = {
      width: canvas.width,
      height: canvas.height
    }

    this.player = new MovingCircle(this.dimensions.width/2, this.dimensions.height/2, 10)
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
  }

  animate() {
    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
    this.movePlayer()
    this.player.animate(this.ctx)
    console.log('running');
    
  }

  play() {
    this.animate()
    requestAnimationFrame(this.play.bind(this))
  }

}