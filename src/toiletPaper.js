import MovingCirlce from './movingCircle'

export default class ToiletPaper extends MovingCirlce {
  constructor(x, y, radius = 4) {
    super(x, y, radius)

    this.color = 'yellow'
    this.tp = []
    this.food = 50
  }
}