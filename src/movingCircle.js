export default class MovingCicle {
  constructor(x, y, radius) {

  }

  move() {

  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  animate(ctx) {
    this.move()
    this.draw(ctx)
  }
}