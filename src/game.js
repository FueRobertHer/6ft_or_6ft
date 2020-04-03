import MovingCircle from './movingCircle'
import Player from './player'
import ToiletPaper from './toiletPaper'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = {
      width: canvas.width,
      height: canvas.height
    }
    this.other = new MovingCircle(this.size.width * .5, this.size.height * .5, 10)
    
    this.things = [this.other]

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
    document.addEventListener('click', (e) => {
      let pos = this.player.pos()
      let tp = new ToiletPaper(pos.x, pos.y)
      let mPos = this.getMousePos(this.canvas, e)
      let x = mPos.x - pos.x
      let y = mPos.y - pos.y
      let angle = Math.asin(x/Math.sqrt(x**2 + y**2))
      let xVel = Math.sin(angle)
      let yVel = (y > 0 ? Math.cos(angle) : Math.cos(angle) * -1)
      tp.xVel += xVel * 5
      tp.yVel += yVel * 4
      y > 0 ? tp.yVel += Math.cos(angle) : tp.yVel += Math.cos(angle) * -1
      this.things.push(tp)
    })
  }

  removeNotInBound() {
    this.things = this.things.filter(thing => (thing.inBound(this.size)))
  }

  movePlayer() {
    if (this.moving.up) this.player.move(0, -2)
    if (this.moving.left) this.player.move(-2)
    if (this.moving.down) this.player.move(0, 2)
    if (this.moving.right) this.player.move(2)
    this.player.inBound(this.size)
  }

  playerIsTouch(other) {
    if (this.player.isTouching(this.other)) this.other.move(this.player.xVel, this.player.yVel)
  }

  getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect()
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height)
    this.movePlayer()
    this.playerIsTouch()
    this.removeNotInBound()
    this.things.forEach(thing => (thing.animate(this.ctx)))
    this.player.animate(this.ctx)
    
  }

  play() {
    this.animate()
    requestAnimationFrame(this.play.bind(this))
  }

}