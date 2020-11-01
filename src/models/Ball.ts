import { Direction, randomDirection } from '../enums/Direction';
import { int, float } from 'random';
import randomColor from 'randomcolor';

export class Ball {
  constructor(
    public radius: number,
    public posX: number,
    public posY: number,
    public color: string,
    public dirX: Direction,
    public dirY: Direction,
    public velocity: number
  ) {}

  move() {
    if (this.dirX === Direction.LEFT) {
      this.posX -= this.velocity;
    } else {
      this.posX += this.velocity;
    }

    if (this.dirY === Direction.UP) {
      this.posY -= this.velocity;
    } else {
      this.posY += this.velocity;
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
    const vel = float(Math.floor(minVel), Math.floor(maxVel));
    const color = randomColor({ luminosity: 'bright', alpha: 0.5, format: 'rgba' });
    return new Ball(
      rad,
      x,
      y,
      color,
      randomDirection(),
      randomDirection(),
      vel
    );
  }
}
