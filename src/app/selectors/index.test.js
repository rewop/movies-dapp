import { getMovies, getIsMoviesLoaded, getIsMoviesLoading } from './index';
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
  describe('getIsMoviesLoaded', () => {
    it('should be a function', () => {
      expect(typeof getIsMoviesLoaded).toBe('function');
    });
    it('should return the values stores', () => {
      const state = getState();
      expect(getIsMoviesLoaded(state)).toBe(state.loadState.movies.isLoaded);
    });
  });
  describe('getIsMoviesLoading', () => {
    it('should be a function', () => {
      expect(typeof getIsMoviesLoading).toBe('function');
    });
    it('should return the values stores', () => {
      const state = getState();
      expect(getIsMoviesLoading(state)).toBe(state.loadState.movies.isLoading);
    });
  });
});
