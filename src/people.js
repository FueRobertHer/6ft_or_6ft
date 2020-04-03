import MovingCircle from './movingCircle'

export default class People extends MovingCircle {
  constructor(x, y, radius = 10) {
      super(x, y, radius)

      this.yVel = 5
      this.color = 'red'

  }
}