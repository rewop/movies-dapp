import R from 'ramda';
import type {
  ActionLoadMoviesStart,
  ActionLoadMoviesSuccess,
  ActionLoadMoviesError,
} from '../../actions/loadMovies';
import type { LoadState } from '../../flowtypes/store';
import { LOAD_MOVIES_START, LOAD_MOVIES_SUCCESS, LOAD_MOVIES_ERROR } from '../../constants/Actions';

const initialState: LoadState = {
  movies: {
    isLoaded: false,
    isLoading: false,
    error: null,
  },
};

type LoadStateAction = ActionLoadMoviesStart | ActionLoadMoviesSuccess | ActionLoadMoviesError;

export default (state: LoadState = initialState, action: LoadStateAction) => {
  switch (action.type) {
    case LOAD_MOVIES_START: {
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: true,
          error: null,
        },
      };
    }
    case LOAD_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          isLoaded: true,
          error: null,
        },
      };
    }
    case LOAD_MOVIES_ERROR: {
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: false,
          error: action.payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export const getIsMoviesLoaded = R.path(['movies', 'isLoaded']);
export const getIsMoviesLoading = R.path(['movies', 'isLoading']);
export const getMoviesError = R.path(['movies', 'error']);
