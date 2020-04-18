import MovingCircle from './movingCircle'

export default class Player extends MovingCircle {
  constructor(x, y, radius = 10) {
    super(x, y, radius)
    
    this.color = 'turquoise'
    this.tpAmmo = 50
    this.hp = 3
    this.invulnerable = false
  }

  gotTouched() {
    if (!this.invulnerable) {
      this.hp--
      this.toggleInvulnerablity()
      this.color = 'black'
      setTimeout(this.toggleInvulnerablity.bind(this), 1000)
    }
  }

  toggleInvulnerablity() {
    switch (this.hp) {
      case 2:
        this.color = 'yellow'
        break
      case 1:
        this.color = 'orange'
        break
      case 0:
        this.color = 'red'
        break
      default:
        this.color = 'turquoise'
    }
    this.invulnerable = !this.invulnerable
  }

  hasTP() {
    return this.tpAmmo > 0
  }

  inBound(size) {
    if (this.x < this.radius) this.x = this.radius
    if (this.x > size.width - this.radius) this.x = size.width - this.radius
    if (this.y < this.radius) this.y = this.radius
    if (this.y > size.height - this.radius) this.y = size.height - this.radius
  }

  update() {
    this.x += this.xVel
    this.y += this.yVel

    this.xVel *= .3
    this.yVel *= .3
  }
}