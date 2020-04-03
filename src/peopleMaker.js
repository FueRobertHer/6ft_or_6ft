import People from './people'

export default class peopleMaker {
  constructor(size) {
    this.width = size.width
    this.height = size.height
  }

  randomPeopleSize() {
    return Math.floor(Math.random() * (12 - 7) + 7)
  }

  randomX() {
    return Math.floor(Math.random() * (this.width - 30) + 30)
  }

  makeRandomPerson() {
    let x = this.randomX()
    let radius = this.randomPeopleSize()
    return new People(x, -20, radius)
  }
}
