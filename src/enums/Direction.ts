import { int } from 'random';

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export function randomDirection() {
  const num = int(0, 3);
  switch (num) {
    case 0: return Direction.UP;
    case 1: return Direction.LEFT;
    case 2: return Direction.DOWN;
    case 3: return Direction.RIGHT;
  }
}
