import { Direction, randomDirection } from '../enums/Direction';
import { float, int } from 'random';
import randomColor from 'randomcolor';

export class Ball {
  constructor(
    public radius: number,
    public posX: number,
    public posY: number,
    public color: string,
    public dirX: Direction,
    public dirY: Direction,
    public velX: number,
    public velY: number
  ) {}

  move() {
    if (this.dirX === Direction.LEFT) {
      this.posX -= this.velX;
    } else {
      this.posX += this.velX;
    }

    if (this.dirY === Direction.UP) {
      this.posY -= this.velY;
    } else {
      this.posY += this.velY;
    }
  }

  static random(
    minRadius = 5,
    maxRadius = 35,
    minX = 50,
    maxX = 100,
    minY = 50,
    maxY = 100,
    minVel = 1,
    maxVel = 3,
  ) {
    const rad = int(Math.floor(minRadius), Math.floor(maxRadius));
    const x = int(Math.floor(minX), Math.floor(maxX));
    const y = int(Math.floor(minY), Math.floor(maxY));
    const velX = float(Math.floor(minVel), Math.floor(maxVel));
    const velY = float(Math.floor(minVel), Math.floor(maxVel));
    const color = randomColor({ alpha: 0.05, format: 'rgba' });
    return new Ball(
      rad,
      x,
      y,
      color,
      randomDirection(),
      randomDirection(),
      velX,
      velY
    );
  }
}
