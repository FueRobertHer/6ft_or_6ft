import MovingCircle from './movingCircle'

export default class People extends MovingCircle {
  constructor(x, y, radius = 10) {
      super(x, y, radius)

      this.color = 'red'
  }

  seesTP(tp) {
    let a = tp.x - this.x
    let b = tp.y - this.y
    let c = Math.hypot(a, b)

    return c < this.radius + tp.visRadius
  }

  randomDirection() {
    
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