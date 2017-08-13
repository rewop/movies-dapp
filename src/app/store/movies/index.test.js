import movies from './index';

describe('store/movies', () => {
  it('should be a function', () => {
    expect(typeof movies).toBe('function');
  });
  it('should return initial state if no state given', () => {
    expect(movies(undefined, { type: 'foo-bar' })).toEqual([]);
  });
  it('should return the given state if action not managed', () => {
    const state = ['a movie'];
    expect(movies(state, { type: 'foo-bar' })).toEqual(state);
  });
});
