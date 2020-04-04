import MovingCircle from './movingCircle'

export default class People extends MovingCircle {
  constructor(x, y, radius = 10) {
      super(x, y, radius)

      this.yVel = 5
      this.color = 'red'
  }

  seesTP(tp) {
    let a = tp.x - this.x
    let b = tp.y - this.y
    let c = Math.hypot(a, b)

    return c < this.radius + tp.visRadius
  }
}