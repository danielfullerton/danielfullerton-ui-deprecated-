import { Ball } from '../models/Ball';
import { Direction } from '../enums/Direction';

export class Dom {
  private context: CanvasRenderingContext2D;
  private balls: Ball[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
  }

  reset(canvas: HTMLCanvasElement, width: number, height: number) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.init(width, height);
  }

  init(windowWidth: number, windowHeight: number) {
    this.setCanvasSize(windowWidth, windowHeight);
    this.balls = [];
    for (let i = 0; i < 50; i++) {
      this.addBall(Ball.random(
        this.canvas.width / 50,
        this.canvas.width / 30,
        this.canvas.width / 8,
        this.canvas.width / 1.2,
        this.canvas.height / 8,
        this.canvas.height / 1.2,
        1,
        this.canvas.height / 100
      ));
    }
    this.drawBalls();
    this.animate();
  }

  addBall(ball: Ball) {
    this.balls.push(ball);
  }

  drawBall(ball: Ball) {
    this.context.fillStyle = ball.color;
    this.context.strokeStyle = '#ffffff00';
    this.context.beginPath();
    this.context.arc(ball.posX, ball.posY, ball.radius, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill();
  }

  drawBalls() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.balls.forEach(ball => {
      ball.move();
      this.handleCollision(ball);
      this.drawBall(ball);
    });
  }

  animate() {
    this.drawBalls();
    requestAnimationFrame(() => this.animate());
  }

  handleCollision(ball: Ball) {
    if (ball.posX - ball.radius <= 0) {
      ball.dirX = Direction.RIGHT;
    } else if (ball.posX + ball.radius >= this.canvas.width) {
      ball.dirX = Direction.LEFT;
    }

    if (ball.posY - ball.radius <= 0) {
      ball.dirY = Direction.DOWN;
    } else if (ball.posY + ball.radius >= this.canvas.height) {
      ball.dirY = Direction.UP;
    }
  }

  setCanvasSize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
  }
}
