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

    this.peopleMaker = new PeopleMaker(this.size)
    
    this.things = [this.peopleMaker.makeRandomPerson()]

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
        let tp = new ToiletPaper(pos.x, pos.y)
        let mPos = this.getMousePos(this.canvas, e)
        let x = mPos.x - pos.x
        let y = mPos.y - pos.y
        let angle = Math.asin(x / Math.hypot(x,y))
        let xVel = Math.sin(angle)
        let yVel = (y > 0 ? Math.cos(angle) : Math.cos(angle) * -1)
        tp.xVel += xVel * 5
        tp.yVel += yVel * 4
        y > 0 ? tp.yVel += Math.cos(angle) : tp.yVel += Math.cos(angle) * -1
        this.things.push(tp)
        this.player.tpAmmo--
      } else {
        console.log('need ammo')
      }
      
    })
  }

  makeRandomPeople() {
    let person = this.peopleMaker.makeRandomPerson()
    this.things.push(person)
  }

  autoMakePeople() {
    let time = this.randomInterval()
    setTimeout(this.makeRandomPeople.bind(this), time)
    setTimeout(this.autoMakePeople.bind(this), time)
  }

  randomInterval() {
    return Math.floor(Math.random() * this.interval)
  }

  removeNotInBound() {
    this.things = this.things.filter(thing => (thing.inBound(this.size)))
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

  playerIsTouchingThings() {
    this.things.forEach(thing => {
      if (this.player.isTouching(thing)) {
        if (thing instanceof ToiletPaper) {
          console.log('tp')
        } else {
          // console.log(thing)
        }
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

  animate() {
    this.ctx.clearRect(0, 0, this.size.width, this.size.height)
    this.movePlayer()
    this.playerIsTouchingThings()
    this.removeNotInBound()
    this.things.forEach(thing => (thing.animate(this.ctx)))
    this.player.animate(this.ctx)
    
  }

  play() {
    this.animate()
    requestAnimationFrame(this.play.bind(this))
  }

    }