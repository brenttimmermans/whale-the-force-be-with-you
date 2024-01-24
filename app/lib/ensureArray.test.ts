import { ensureArray } from './ensureArray';

describe(ensureArray, () => {
  it('should return an array with string', () => {
    expect(ensureArray('foo')).toEqual(['foo']);
  });

  it('should return an array with string[]', () => {
    expect(ensureArray(['foo'])).toEqual(['foo']);
  });

  it('should return an array with number', () => {
    expect(ensureArray(3)).toEqual([3]);
  });

  it('should return an array with number[]', () => {
    expect(ensureArray([3])).toEqual([3]);
  });
});
