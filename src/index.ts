import './index.scss';
import { Raindrop } from './raindrop';
import { Lightning } from './lightning';
import { Option } from './model';

export class rain {
  private dom: HTMLCanvasElement;
  private bg: HTMLCanvasElement;
  private lightning: HTMLCanvasElement;

  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private particles: { x: number; y: number; l: number; xs: number; ys: number }[];
  private option: Option;
  private raindrop: Raindrop;

  constructor(dom: string | HTMLElement, option?: Option) {
    this.option = option || new Option();
    this.option.extent = this.option.extent || 'middle';

    const container = (typeof dom === 'string' ? document.querySelector(dom) : dom).appendChild(document.createElement('div'));
    container.className = 'rain-container';
    this.bg = container.appendChild(document.createElement('canvas'));
    this.dom = container.appendChild(document.createElement('canvas'));
    this.lightning = container.appendChild(document.createElement('canvas'));

    if (this.dom.getContext) {
      this.ctx = this.dom.getContext('2d');
      this.initDom();
      this.render();
      this.resizeListener();
    } else {
      console.error('Your web browser can not supported this function');
    }
  }

  private initDom() {
    this.width = (this.option && this.option.width) || this.dom.parentElement.clientWidth;
    this.height = (this.option && this.option.height) || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    this.bg.width = this.width;
    this.bg.height = this.height;

    this.dom.width = this.width;
    this.dom.height = this.height;
    this.drawBg();
  }

  private render() {
    this.ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    this.raindrop = new Raindrop(this.option.extent, this.ctx, this.width, this.height);
    new Lightning(this.lightning, this.width, this.height);
  }

  private drawBg() {
    const img = new Image();
    img.src = '../docs/rain_bg2.jpg';
    const ctx = this.bg.getContext('2d');

    img.onload = () => {
      ctx.drawImage(img, 0, 0, this.width, this.height);
    };
  }

  private resizeListener() {
    window.addEventListener(
      'resize',
      () => {
        this.initDom();
      },
      false
    );
  }
}
