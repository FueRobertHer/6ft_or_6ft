import MovingCircle from './movingCircle'

export default class People extends MovingCircle {
  constructor(x, y, radius) {
      super(x, y, radius)

      this.color = 'red'

  }
}