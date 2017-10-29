export class Raindrop {
  private particles: { x: number; y: number; l: number; xs: number; ys: number }[];

  constructor (private extent: 'small' | 'middle' | 'large', private ctx: CanvasRenderingContext2D, private width: number, private height: number) {
    this.generateParticles();
  }

  private generateParticles() {
    this.particles = [];    
    const sizes = this.extent === 'small' ? 400 : this.extent === 'large' ? 2000 : 1000;
    const rainExtent: string = 'middle'; // small, middle, large

    for (let i = 0; i < sizes; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        l: Math.random() * 1,
        xs: -4 + Math.random() * 4 + 2,
        ys: Math.random() * 10 + 10
      });
    }

    window.requestAnimationFrame(this.renderRaindrop.bind(this));
  }

    private renderRaindrop() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      this.ctx.beginPath();
      this.ctx.moveTo(p.x, p.y);
      this.ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
      this.ctx.stroke();
    }

    for (let i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      p.x += p.xs;
      p.y += p.ys;
      if (p.x > this.width || p.y > this.height) {
        p.x = Math.random() * this.width;
        p.y = -20;
      }
    }

    window.requestAnimationFrame(this.renderRaindrop.bind(this));
  }
}
