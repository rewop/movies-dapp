import createStore, { getMovies } from './index';
import getState from '../__fixtures__/state';

describe('store', () => {
  describe('createStore', () => {
    it('should be a function', () => {
      expect(typeof createStore).toBe('function');
    });
    it('should create the redux store', () => {
      const store = createStore();
      expect(typeof store.dispatch).toBe('function');
      expect(typeof store.getState).toBe('function');
    });
  });
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
