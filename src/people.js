import MovingCircle from './movingCircle'

export default class People extends MovingCircle {
  constructor(x, y, radius = 10) {
    super(x, y, radius)

    this.color = 'red'
    this.randomMove()
  }

  seesTP(tp) {
    let a = tp.x - this.x
    let b = tp.y - this.y
    let c = Math.hypot(a, b)

    return c < this.radius + tp.visRadius
  }

  randomDirection() {
    const ownPos = this.pos()
    const x = ownPos.x += Math.random() * 100 - 50
    const y = ownPos.x += Math.random() * 200 - 100
    return {x: x, y: y}
  }

  randomMove() {
    this.xVel *= .7
    this.yVel *= .7
    const pos = this.randomDirection()
    this.moveTo(pos, 1)
    setTimeout(this.randomMove.bind(this), 1000)
  }

  findClosestPerson(people) {
    let closest = null
    people.forEach(person => {
      if (this !== person) {
        if (closest === null) closest = person
  
        if (this.getDistanceTo(person.pos()) < this.getDistanceTo(closest.pos())) {
          closest = person
        }
      }
    })
    return closest
  }

  findClosestTP(list) {
    let closest = null
    list.forEach(tp => {
      if (!tp.moving) {
        if (this.seesTP(tp)) {
          if (closest === null) closest = tp
  
          if (this.getDistanceTo(tp) < this.getDistanceTo(closest)) {
            closest = tp
          }
        }
      }
    })
    return closest
  }

}