import MovingCirlce from './movingCircle'

export default class ToiletPaper extends MovingCirlce {
  constructor(x, y, radius = 4) {
    super(x, y, radius)

    this.color = 'blue'
    this.visRadius = radius * 25

    this.hp = 100
    this.moving = true

    this.land = this.land.bind(this)
    this.land()
    setTimeout(() => {
      this.moving = false
    }, 150)
  }

  land() {
    setTimeout(this.resetVel.bind(this), 500)
  }

  resetVel() {
    this.xVel = 0
    this.yVel = 0
  }

  update() {
    this.x += this.xVel
    this.y += this.yVel
    this.y += .5

    this.xVel *= .9
    this.yVel *= .9
  }

}