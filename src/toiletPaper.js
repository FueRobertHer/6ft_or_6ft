import MovingCirlce from './movingCircle'

export default class ToiletPaper extends MovingCirlce {
  constructor(x, y, radius = 4) {
    super(x, y, radius)

    this.color = 'blue'
    this.attractRadius = radius * 10

    this.hp = 100

    this.land = this.land.bind(this)
    this.land()
  }

  land() {
    setTimeout(this.resetVel.bind(this), 500)
  }

  resetVel() {
    this.xVel = 0
    this.yVel = 0
  }

}