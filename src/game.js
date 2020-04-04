// import MovingCircle from './movingCircle'
import Player from './player'
import People from './people'
import PeopleMaker from './peopleMaker'
import ToiletPaper from './toiletPaper'

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.size = {
      width: canvas.width,
      height: canvas.height
    }
    this.interval = 1000
    this.gameOver = false

    this.peopleMaker = new PeopleMaker(this.size)
    
    this.people = []
    this.stuff = []

    this.player = new Player(this.size.width*.5, this.size.height*.8, 10)
    this.moving = {
      up: false,
      left: false,
      down: false,
      right: false
    }

    this.play()
    this.initListeners()
    this.autoMakePeople()
    setInterval(this.increaseTraffic.bind(this), 5000)
  }

  increaseTraffic() {
    if(this.interval > 100) {
      this.interval -= 100
    } else if (this.interval > 0) {
      this.interval -= 10
    }
  }

  initListeners() {
    this.movementListener()
    this.throwTPListener()
  }

  movementListener() {
    document.addEventListener('keydown', (e) => {
      if (e.key == 'w' || e.key == 'ArrowUp') this.moving.up = true
      if (e.key == 'a' || e.key == 'ArrowLeft') this.moving.left = true
      if (e.key == 's' || e.key == 'ArrowDown') this.moving.down = true
      if (e.key == 'd' || e.key == 'ArrowRight') this.moving.right = true
    })
    document.addEventListener('keyup', (e) => {
      if (e.key == 'w' || e.key == 'ArrowUp') this.moving.up = false
      if (e.key == 'a' || e.key == 'ArrowLeft') this.moving.left = false
      if (e.key == 's' || e.key == 'ArrowDown') this.moving.down = false
      if (e.key == 'd' || e.key == 'ArrowRight') this.moving.right = false
    })
  }

  throwTPListener() {
    document.addEventListener('click', (e) => {
      if (this.player.hasTP()) {
        let pos = this.player.pos()
        let mPos = this.getMousePos(this.canvas, e)

        let tp = new ToiletPaper(pos.x, pos.y)
        tp.moveTo(mPos, 15)
        this.stuff.push(tp)
        this.player.tpAmmo--
      } else {
        console.log('need ammo')
      }
      
    })
  }

  makeRandomPeople() {
    let person = this.peopleMaker.makeRandomPerson()
    this.people.push(person)
  }

  autoMakePeople() {
    let time = this.randomInterval()
    setTimeout(this.makeRandomPeople.bind(this), time)
    setTimeout(this.autoMakePeople.bind(this), time)
  }

  randomInterval() {
    return Math.floor(Math.random() * this.interval)
  }

  removeNotInPlay() {
    this.removePeople()
    this.removeStuff()
  }

  removePeople() {
    this.people = this.people.filter(person => (
      person.inBound(this.size)
      ))
    
  }

  removeStuff() {
    this.stuff = this.stuff.filter(item => (
      item.inBound(this.size) && item.hp > 0
      ))
  }

  movePlayer() {
    if (this.moving.up && this.moving.left) this.player.move(1, 1)
    if (this.moving.up && this.moving.right) this.player.move(-1, 1)
    if (this.moving.down && this.moving.left) this.player.move(1, -1)
    if (this.moving.down && this.moving.right) this.player.move(-1, -1)
    if (this.moving.up) this.player.move(0, -3)
    if (this.moving.down) this.player.move(0, 3)
    if (this.moving.left) this.player.move(-3)
    if (this.moving.right) this.player.move(3)
    this.player.inBound(this.size)
  }

  playerIsTouchingPeople() {
    this.people.forEach(person => {
      if (this.player.isTouching(person)) {
        this.gameOver = true
      }
    })
  }

  getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect()
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    }
  }

  movePeople() {
    this.socialDistance()
    this.movePeopleToTP()
  }

  socialDistance() {
    this.people.forEach(person => {
      const other = person.findClosestPerson(this.people)
      if (other && person.getDistanceTo(other.pos()) < 30) {
        person.moveAway(other.pos())
      }
    })
  }

  movePeopleToTP() {
    this.people.forEach(person => {
      const tp = person.findClosestTP(this.stuff)
      if (tp) {
        person.moveTo(tp.pos())
        if (person.isTouching(tp)) {
          tp.hp -= 1
          person.xVel = 0
          person.yVel = 0
        }
      }

    })
  }

  animate() {
    if (!this.gameOver) {
      this.ctx.clearRect(0, 0, this.size.width, this.size.height)
      this.movePlayer()
      this.playerIsTouchingPeople()
      this.removeNotInPlay()
      this.movePeople()
      this.people.forEach(person => (person.animate(this.ctx)))
      this.stuff.forEach(thing => (thing.animate(this.ctx)))
      this.player.animate(this.ctx)
    }
  }

  play() {
    this.animate()
    requestAnimationFrame(this.play.bind(this))
  }

}