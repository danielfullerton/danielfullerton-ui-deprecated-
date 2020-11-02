import { Ball } from '../models/Ball';
import { Direction } from '../enums/Direction';

export class Dom {
  private context: CanvasRenderingContext2D;
  private balls: Ball[] = [];

  constructor(private canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
  }

  getRandomBall(x?: number, y?: number) {
    return Ball.random(
      this.canvas.width / 50,
      this.canvas.width / 15,
      x ||0,
      x || this.canvas.width,
      y || this.canvas.height / 8,
      y || this.canvas.height / 1.2,
      1,
      this.canvas.height / 200
    )
  }

  init(windowWidth: number, windowHeight: number) {
    this.setCanvasSize(windowWidth, windowHeight);
    for (let i = 0; i < 50; i++) {
      this.addBall(this.getRandomBall());
    }
    this.drawBalls();
    this.animate();
  }

  onCanvasClicked(event: MouseEvent) {
    const { x, y } = event;
    if (this.balls.length > 250) {
      this.balls.splice(0, 1);
    }
    this.addBall(this.getRandomBall(x, y))
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
