import MovingCircle from './movingCircle'

export default class Player extends MovingCircle {
  constructor(x, y, radius) {
    super(x, y, radius)
    
    this.color = 'yellow'
  }

  inBound(size) {
    if (this.x < this.radius) this.x = this.radius
    if (this.x > size.width - this.radius) this.x = size.width - this.radius
    if (this.y < this.radius) this.y = this.radius
    if (this.y > size.height - this.radius) this.y = size.height - this.radius
  }
}