import { PipeReversePipe } from './pipe-reverse.pipe';

describe('PipeReversePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeReversePipe();
    expect(pipe).toBeTruthy();
  });
});
