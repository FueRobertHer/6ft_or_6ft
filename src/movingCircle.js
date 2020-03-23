export default class MovingCicle {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius

    this.xVel = 0
    this.yVel = 0

  }

  isTouching(other) {
    let a = Math.abs(other.x - this.x)
    let b = Math.abs(other.y - this.y)
    let c = Math.sqrt(a**2 + b**2)
    return c < this.radius
  }

  move(x = 0, y = 0) {
    this.xVel += x
    this.yVel += y
  }

  update() {
    this.x += this.xVel
    this.y += this.yVel

    this.xVel *= .3
    this.yVel *= .3
  }

  draw(ctx) {
    ctx.fillStyle = 'yellow'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill()
  }

  animate(ctx) {
    this.update()
    this.draw(ctx)
  }
}