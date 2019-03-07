import { TriangleParticle } from '../../../src/particles';
import { createParticleOptions } from '../../__mocks__';

describe('TriangleParticle', () => {
  let options = null;
  let ctx = null;

  beforeEach(() => {
    options = createParticleOptions(ctx);
    ctx = options.canvas.ctx;
  });

  it('is drawn as expected', () => {
    const particle = new TriangleParticle();
    particle.setup(options);

    particle.draw();

    expect(ctx.moveTo).toHaveBeenCalledTimes(1);
    expect(ctx.moveTo).toHaveBeenCalledWith(0, 0);
    expect(ctx.lineTo).toHaveBeenCalledTimes(2);
    expect(ctx.lineTo).toHaveBeenCalledWith(particle.r, 0);
    expect(ctx.lineTo).toHaveBeenCalledWith(0, particle.r);
    expect(ctx.fill).toHaveBeenCalledTimes(1);
  });
});
