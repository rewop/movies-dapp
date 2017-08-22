/* @flow */
import R from 'ramda';
import type { MoviesState } from '../../flowtypes/store';
import type { ActionLoadMovieSuccess } from '../../actions/loadMovies';
import type { ActionVoteMovieSuccess } from '../../actions/voteMovie';
import { LOAD_MOVIES_SUCCESS, VOTE_MOVIE_SUCCESS } from '../../constants/Actions';

type MovieStateAction = ActionLoadMovieSuccess | ActionVoteMovieSuccess;

const sortAscending = R.sortBy(R.compose(parseFloat, R.prop('score')));
const sortMovies = R.compose(R.reverse, sortAscending);

export default (state: MoviesState = [], action: MovieStateAction): MoviesState => {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS: {
      return sortMovies(action.payload);
    }
    case VOTE_MOVIE_SUCCESS: {
      (action: ActionVoteMovieSuccess);
      const movie = state.find(m => m.title === action.payload.title);
      if (movie) {
        return state;
      }
      return sortMovies([...state, action.payload]);
    }
    default: {
      return state;
    }
  }
};

export const getMovies: MoviesState => MoviesState = R.identity;
