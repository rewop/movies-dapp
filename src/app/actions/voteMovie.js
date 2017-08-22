/* @flow */
import { VOTE_MOVIE_START, VOTE_MOVIE_SUCCESS, VOTE_MOVIE_ERROR } from '../constants/Actions';
import type { Movie, MoviesServiceVoteMovieResponse, Services } from '../flowtypes/services';

export type ActionVoteMovieStart = {|
  type: VOTE_MOVIE_START,
  payload: Movie,
|};

export type ActionVoteMovieSuccess = {|
  type: VOTE_MOVIE_SUCCESS,
  payload: MoviesServiceVoteMovieResponse,
|};

export type ActionVoteMovieError = {|
  type: VOTE_MOVIE_ERROR,
  payload: Error,
  error: true,
|};

const voteMovieStart = (payload: Movie): ActionVoteMovieStart => ({
  type: VOTE_MOVIE_START,
  payload,
});

const voteMovieSuccess = (payload: MoviesServiceVoteMovieResponse): ActionVoteMovieSuccess => ({
  type: VOTE_MOVIE_SUCCESS,
  payload,
});

const voteMovieError = (err: Error): ActionVoteMovieError => ({
  type: VOTE_MOVIE_ERROR,
  payload: err,
  error: true,
});

export default (payload: Movie) => async (
  dispatch: Function,
  _: Function,
  { services: { movies } }: { services: Services },
) => {
  dispatch(voteMovieStart(payload));
  try {
    const newMovie = await movies.voteMovie(payload);
    dispatch(voteMovieSuccess(newMovie));
  } catch (err) {
    dispatch(voteMovieError(new Error(err.message)));
  }
};
