import BaseParticle from './base';

/**
 * Class representing a rectangular particle.
 */
export default class TriangleParticle extends BaseParticle {
  /**
   * Draw the particle.
   */
  draw() {
    super.draw();
    // this.canvas.ctx.fillRect(0, 0, this.r, this.r / 2);
    this.canvas.ctx.moveTo(0, 0);
    this.canvas.ctx.lineTo(this.r, 0);
    this.canvas.ctx.lineTo(0, this.r);
    this.canvas.ctx.fill();
  }
}
