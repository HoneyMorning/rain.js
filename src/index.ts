import { Option } from './model';

export class rain {
  private dom: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private width: number;
  private height: number;
  private particles: { x: number; y: number; l: number; xs: number; ys: number }[];

  constructor(dom: string | HTMLElement, option?: Option) {
    this.dom = (typeof dom === 'string' ? document.querySelector(dom) : dom).appendChild(document.createElement('canvas'));
    this.width = (option && option.width) || this.dom.parentElement.clientWidth;
    // || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    this.height = (option && option.height) || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.dom.width = this.width;
    this.dom.height = this.height;

    if (this.dom.getContext) {
      this.ctx = this.dom.getContext('2d');
      this.render();
    } else {
      console.error('Your web browser can not supported this function');
    }
  }

  public render() {
    this.ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';

    this.particles = [];
    const rainExtent: string = 'middle'; // small, middle, large

    for (let i = 0; i < 1000; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      });
    }

    window.setInterval(this.drawRain.bind(this, this), 30);
  }

  private drawRain() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      this.ctx.stroke();
    }

    this.move();
  }

  private move() {
    for (var b = 0; b < this.particles.length; b++) {
      var p = this.particles[b];
      p.x += p.xs;
      p.y += p.ys;
      if (p.x > this.width || p.y > this.height) {
        p.x = Math.random() * this.width;
        p.y = -20;
      }
    }
  }
}
