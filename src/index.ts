import './style.scss'
import { Dom } from './classes/Dom';

let canvas: HTMLCanvasElement;
let dom: Dom;

function init() {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  dom = new Dom(canvas);
  dom.init(window.innerWidth, window.innerHeight);
}

window.onload = () => init();
window.onresize = () => init();
