import reducer, { getIsMoviesLoaded, getIsMoviesLoading, getMoviesError } from './index';
import { LOAD_MOVIES_ERROR, LOAD_MOVIES_START, LOAD_MOVIES_SUCCESS } from '../../constants/Actions';
import getState from '../../__fixtures__/state';

describe('loadState', () => {
  const initialState = getState().loadState;
  describe('reducer', () => {
    it('should be a function', () => {
      expect(typeof reducer).toBe('function');
    });
    it('should return initial state if no state given', () => {
      expect(reducer(undefined, { type: 'foo-bar' })).toEqual(initialState);
    });
    it('should return the given state if action not managed', () => {
      const state = {
        ...initialState,
        movies: {
          ...initialState.movies,
          isLoaded: true,
        },
      };
      expect(reducer(state, { type: 'foo-bar' })).toEqual(state);
    });
    it(`should handle ${LOAD_MOVIES_START}`, () => {
      expect(initialState.movies.isLoading).toBe(false);
      const newState = reducer(initialState, { type: LOAD_MOVIES_START });
      expect(newState.movies.isLoading).toBe(true);
    });
    it(`should handle ${LOAD_MOVIES_SUCCESS}`, () => {
      const state = {
        ...initialState,
        movies: {
          ...initialState.movies,
          isLoading: true,
        },
      };
      expect(state.movies.isLoading).toBe(true);
      expect(state.movies.isLoaded).toBe(false);
      const newState = reducer(initialState, { type: LOAD_MOVIES_SUCCESS });
      expect(newState.movies.isLoading).toBe(false);
      expect(newState.movies.isLoaded).toBe(true);
    });
    it(`should handle ${LOAD_MOVIES_ERROR}`, () => {
      const state = {
        ...initialState,
        movies: {
          ...initialState.movies,
          isLoading: true,
        },
      };
      const error = new Error('an error');
      expect(state.movies.isLoading).toBe(true);
      expect(state.movies.isLoaded).toBe(false);
      const newState = reducer(initialState, { type: LOAD_MOVIES_ERROR, payload: error });
      expect(newState.movies.isLoading).toBe(false);
      expect(newState.movies.isLoaded).toBe(false);
      expect(newState.movies.error).toBe(error);
    });
  });
  describe('getIsMoviesLoaded', () => {
    it('should be a function', () => {
      expect(typeof getIsMoviesLoaded).toBe('function');
    });
    it('should return false if movies.isLoaded is false', () => {
      expect(initialState.movies.isLoaded).toBe(false);
      expect(getIsMoviesLoaded(initialState)).toBe(false);
    });
    it('should return true if mivies.isLoaded is false', () => {
      const state = {
        ...initialState,
        movies: {
          ...initialState.movies,
          isLoaded: true,
        },
      };
      expect(state.movies.isLoaded).toBe(true);
      expect(getIsMoviesLoaded(state)).toBe(true);
    });
  });
  describe('getIsMoviesLoading', () => {
    it('should be a function', () => {
      expect(typeof getIsMoviesLoading).toBe('function');
    });
    it('should return false if movies.isLoaded is false', () => {
      expect(initialState.movies.isLoading).toBe(false);
      expect(getIsMoviesLoading(initialState)).toBe(false);
    });
    it('should return true if mivies.isLoaded is false', () => {
      const state = {
        ...initialState,
        movies: {
          ...initialState.movies,
          isLoading: true,
        },
      };
      expect(state.movies.isLoading).toBe(true);
      expect(getIsMoviesLoading(state)).toBe(true);
    });
  });
  describe('getMoviesError', () => {
    it('should be a function', () => {
      expect(typeof getMoviesError).toBe('function');
    });
    it('shoudl return null if the error is null', () => {
      expect(initialState.movies.error).toBe(null);
      expect(getMoviesError(initialState)).toBe(null);
    });
    it('should return the rror if the error is not null', () => {
      const state = {
        ...initialState,
        movies: {
          ...initialState.movies,
          error: new Error('error'),
        },
      };
      expect(state.movies.error).not.toBe(null);
      expect(getMoviesError(state)).not.toBe(null);
    });
  });
});
