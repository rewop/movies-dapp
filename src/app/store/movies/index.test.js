import movies, { getMovies } from './index';
import getState from '../../__fixtures__/state';

describe('store/movies', () => {
  describe('reducer', () => {
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
  describe('getMovies', () => {
    it('should be a function', () => {
      expect(typeof getMovies).toBe('function');
    });
    it('should return the movies', () => {
      const state = getState().movies;
      expect(getMovies(state)).toEqual(state);
    });
  });
});
