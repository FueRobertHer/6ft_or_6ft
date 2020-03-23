import MovingCircle from './movingCircle'

export default class Player extends MovingCircle {
  inBound(size) {
    if (this.x < this.radius) this.x = this.radius
    if (this.x > size.width - this.radius) this.x = size.width - this.radius
    if (this.y < this.radius) this.y = this.radius
    if (this.y > size.height - this.radius) this.y = size.height - this.radius
  }
}