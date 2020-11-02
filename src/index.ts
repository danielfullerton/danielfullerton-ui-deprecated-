import './style.scss'
import '../node_modules/@fortawesome/fontawesome-free/js/all.min';
import '../node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss';
import { Dom } from './classes/Dom';

let canvas: HTMLCanvasElement;
let dom: Dom;

function init() {
  canvas = document.getElementById('canvas') as HTMLCanvasElement;
  dom = new Dom(canvas);
  dom.init(window.innerWidth, window.innerHeight);
  window.onclick = (event) => dom.onCanvasClicked(event);
}

window.onload = () => init();
window.onresize = () => init();
