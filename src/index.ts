import './style.scss'
import { Dom } from './classes/Dom';

function main() {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const dom = new Dom(canvas);
  dom.init(window.innerWidth, window.innerHeight);

  window.onresize = () => dom.reset(canvas, window.innerWidth, window.innerHeight);
}

window.onload = main;
