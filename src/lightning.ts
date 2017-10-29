export class Lightning {
  private lightningCtx: CanvasRenderingContext2D;
 
  constructor(private lightning: HTMLCanvasElement, private width: number, private height: number) {
    this.lightning.width = this.width;
    this.lightning.height = this.height;
    this.lightningCtx = this.lightning.getContext('2d');
    this.lightningCtx.strokeStyle = 'rgba(255, 255, 255, .9)';
    window.requestAnimationFrame(this.initLightning.bind(this));
  }

  private initLightning() {
    this.lightningCtx.clearRect(0, 0, this.width, this.height);
    this.lightningCtx.beginPath();
    let startPos = [600 + Math.random() * 100, 250 + Math.random() * 100];
    this.lightningCtx.moveTo(startPos[0], startPos[1]);

    for (let i = 0; i < 100; i++) {
      const pos = [startPos[0] + Math.random() * 5, startPos[1] + Math.random() * 10];
      this.lightningCtx.lineTo(pos[0], pos[1]);
      startPos = pos;

      if (pos[1] > 600) {
        i = 100;
      }
    }
    this.lightningCtx.stroke();
    setTimeout(() => {
      this.lightningCtx.clearRect(0, 0, this.width, this.height);
    });
    setTimeout(() => {
      window.requestAnimationFrame(this.initLightning.bind(this));
    }, 1000 * Math.random());
  }
}
