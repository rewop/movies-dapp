import { getMovies } from './index';
import getState from '../__fixtures__/state';

describe('selectors', () => {
  describe('getMovies', () => {
    it('should be a function', () => {
      expect(typeof getMovies).toBe('function');
    });
    it('should return the movies', () => {
      const state = getState();
      expect(getMovies(state)).toBe(state.movies);
    });
  });
});
