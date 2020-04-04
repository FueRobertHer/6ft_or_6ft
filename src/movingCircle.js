export default class MovingCicle {
  constructor(x, y, radius) {
    this.x = x
    this.y = y
    this.radius = radius
    this.friction = .95

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
    if (this.x + this.radius < -100 || this.x - this.radius > size.width + 100) return false
    if (this.y + this.radius < -100 || this.y - this.radius > size.height + 100) return false
    return true
  }

  isTouching(other) {
    let a = other.x - this.x
    let b = other.y - this.y
    let c = Math.hypot(a,b)
    
    return c < this.radius + other.radius
  }

  getDistanceTo(pos) {
    let ownPos = this.pos()
    let x = pos.x - ownPos.x
    let y = pos.y - ownPos.y
    return Math.hypot(x,y)
  }

  getVelTo(pos) {
    let ownPos = this.pos()
    let x = pos.x - ownPos.x
    let y = pos.y - ownPos.y
    let angle = Math.asin(x / Math.hypot(x, y))
    let xVel = Math.sin(angle)
    let yVel = (y > 0 ? Math.cos(angle) : Math.cos(angle) * -1)
    return {
      xVel: xVel,
      yVel: yVel
    }
  }

  moveTo(pos, speed = .1) {
    let vel = this.getVelTo(pos)
    this.xVel += vel.xVel * speed
    this.yVel += vel.yVel * speed

    this.xVel *= this.friction
    this.yVel *= this.friction
  }

  moveAway(pos, speed = .07) {
    let vel = this.getVelTo(pos)
    this.xVel -= vel.xVel * speed
    this.yVel -= vel.yVel * speed
  }

  move(x = 0, y = 0) {
    this.xVel += x
    this.yVel += y
  }

  update() {
    this.x += this.xVel
    this.y += this.yVel
    this.y += 1

    // this.xVel *= this.friction
    // this.yVel *= this.friction
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