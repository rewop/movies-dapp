/* @flow */
import { LOAD_MOVIES_START, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from '../constants/Actions';
import type { Services, MoviesServiceGetMoviesResponse } from '../flowtypes/services';

export type ActionLoadMoviesStart = {
  type: LOAD_MOVIES_START,
};

export type ActionLoadMovieSuccess = {
  type: LOAD_MOVIES_SUCCESS,
  payload: MoviesServiceGetMoviesResponse,
};

export type ActionLoadMovieError = {
  type: LOAD_MOVIES_ERROR,
  payload: Error,
};

export const loadMoviesStart = (): ActionLoadMoviesStart => ({
  type: LOAD_MOVIES_START,
});

export const loadMoviesSuccess = (
  payload: MoviesServiceGetMoviesResponse,
): ActionLoadMovieSuccess => ({
  type: LOAD_MOVIES_SUCCESS,
  payload,
});

export const loadMoviesError = (err: Error): ActionLoadMovieError => ({
  type: LOAD_MOVIES_ERROR,
  payload: err,
});

export default () => async (
  dispatch: Function,
  _: Function,
  { services: { movies } }: { services: Services },
) => {
  dispatch(loadMoviesStart());
  try {
    const result: MoviesServiceGetMoviesResponse = await movies.getMovies();
    dispatch(loadMoviesSuccess(result));
  } catch (err) {
    dispatch(loadMoviesError(new Error(err.message)));
  }
};
