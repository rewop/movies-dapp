import createStore, {
  getMovies,
  getLoadMoviesError,
  getIsMoviesLoaded,
  getIsMoviesLoading,
} from './index';
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
  describe('getLoadMoviesError', () => {
    it('should be a function', () => {
      expect(typeof getLoadMoviesError).toBe('function');
    });
    it('should return the loadedState', () => {
      const error = 'error';
      const state = getState({
        loadState: {
          movies: {
            error,
          },
        },
      });

      expect(getLoadMoviesError(state)).toBe(error);
    });
  });
  describe('getIsMoviesLoaded', () => {
    it('should be a function', () => {
      expect(typeof getIsMoviesLoaded).toBe('function');
    });
    it('should return the loadedState', () => {
      const state = getState();
      expect(getIsMoviesLoaded(state)).toBe(state.loadState.movies.isLoaded);
    });
  });
  describe('getIsMoviesLoading', () => {
    it('should be a function', () => {
      expect(typeof getIsMoviesLoading).toBe('function');
    });
    it('should return the loadedState', () => {
      const state = getState();
      expect(getIsMoviesLoading(state)).toBe(state.loadState.movies.isLoading);
    });
  });
});
