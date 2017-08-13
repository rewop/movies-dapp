import loadMovies from './loadMovies';
import { LOAD_MOVIES_START, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from '../constants/Actions';

describe('loadMovies', () => {
  it('should be a function', () => {
    expect(typeof loadMovies).toBe('function');
  });
  it('should return a thunk function', () => {
    expect(typeof loadMovies()).toBe('function');
  });
  it(`should dispatch ${LOAD_MOVIES_START}`, () => {
    const services = {
      movies: {
        getMovies: jest.fn(() => Promise.resolve()),
      },
    };
    const dispatch = jest.fn();
    loadMovies()(dispatch, jest.fn(), { services });
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: LOAD_MOVIES_START,
      }),
    );
  });
  it(`should dispatch ${LOAD_MOVIES_SUCCESS} if the call to getMovies is successful`, async () => {
    const moviesResult = [
      {
        title: 'test1',
      },
      {
        title: 'test2',
      },
    ];
    const services = {
      movies: {
        getMovies: jest.fn(() => Promise.resolve(moviesResult)),
      },
    };
    const dispatch = jest.fn();
    await loadMovies()(dispatch, null, { services });
    expect(dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: LOAD_MOVIES_SUCCESS,
        payload: moviesResult,
      }),
    );
  });
  it(`should dispatch ${LOAD_MOVIES_ERROR} if the call to getMovies fails`, async () => {
    const moviesResult = {
      message: 'This is an error',
    };
    const services = {
      movies: {
        getMovies: jest.fn(() => Promise.reject(moviesResult)),
      },
    };
    const dispatch = jest.fn();
    try {
      await loadMovies()(dispatch, null, { services });
      throw new Error('never here');
    } catch (err) {
      expect(dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: LOAD_MOVIES_ERROR,
          payload: new Error('This is an error'),
        }),
      );
    }
  });
});
