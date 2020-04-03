export default class MovingCicle {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius

    this.xVel = 0
    this.yVel = 0

    this.color = 'black'
  }

  pos() {
    return {
      x: this.x,
      y: this.y
    }
  }

  inBound(size) {
    if (this.x + this.radius < 0 || this.x - this.radius > size.width) return false
    if (this.y + this.radius < -20 || this.y - this.radius > size.height) return false
    return true
  }

  isTouching(other) {
    let a = other.x - this.x
    let b = other.y - this.y
    let c = Math.hypot(a,b)
    
    return c < this.radius + other.radius
  }

  move(x = 0, y = 0) {
    this.xVel += x
    this.yVel += y
  }

  update() {
    this.x += this.xVel
    this.y += this.yVel

 
  }

  draw(ctx) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    ctx.fill()
  }

  animate(ctx) {
    this.update()
    this.draw(ctx)
  }
}