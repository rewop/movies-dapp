/* @flow */
import { VOTE_MOVIE_START, VOTE_MOVIE_SUCCESS, VOTE_MOVIE_ERROR } from '../constants/Actions';
import type { Services, MoviesServiceVoteMovieResponse } from '../flowtypes/services';

type ActionVoteMoviePayload = {
  title: String,
};

export type ActionVoteMovieStart = {|
  type: VOTE_MOVIE_START,
  payload: ActionVoteMoviePayload,
|};

export type ActionVoteMovieSuccess = {|
  type: VOTE_MOVIE_SUCCESS,
|};

export type ActionVoteMovieError = {|
  type: VOTE_MOVIE_ERROR,
  payload: Error,
  error: true,
|};

export const voteMovieStart = (payload: ActionVoteMoviePayload): ActionVoteMovieStart => ({
  type: VOTE_MOVIE_START,
  payload,
});

export const voteMovieSuccess = (): ActionVoteMovieSuccess => ({
  type: VOTE_MOVIE_SUCCESS,
});

export const voteMovieError = (err: Error): ActionVoteMovieError => ({
  type: VOTE_MOVIE_ERROR,
  payload: err,
  error: true,
});

export default (movie: ActionVoteMoviePayload) => async (
  dispatch: Function,
  _: Function,
  { services: { movies } }: { services: Services },
) => {
  dispatch(voteMovieStart(movie));
  try {
    await movies.voteMovie(movie);
    dispatch(voteMovieSuccess());
  } catch (err) {
    dispatch(voteMovieError(new Error(err.message)));
  }
};
