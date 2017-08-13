/* @flow */
import R from 'ramda';
import type { MoviesState } from '../../flowtypes/store';
import type { ActionLoadMovieSuccess } from '../../actions/loadMovies';
import { LOAD_MOVIES_SUCCESS } from '../../constants/Actions';

type MovieStateAction = ActionLoadMovieSuccess;

export default (state: MoviesState = [], action: MovieStateAction): MoviesState => {
  switch (action.type) {
    case LOAD_MOVIES_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const getMovies: MoviesState => MoviesState = R.identity;
