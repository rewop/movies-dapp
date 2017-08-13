/* @flow */
import R from 'ramda';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import movies, * as moviesSelectors from './movies';
import loadState, * as loadStateSelectors from './loadState';
import type { State, MoviesState, LoadedState } from '../flowtypes/store';
import type { Services } from '../flowtypes/services';

const reducer: Function = combineReducers({
  form: formReducer,
  movies,
  loadState,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState: State, services: Services) =>
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ services }))),
  );

export const getMovies: (state: State) => MoviesState = R.compose(
  moviesSelectors.getMovies,
  R.prop('movies'),
);

export const getLoadMoviesError: (state: State) => LoadedState = R.compose(
  loadStateSelectors.getMoviesError,
  R.prop('loadState'),
);

export const getIsMoviesLoaded: (state: State) => LoadedState = R.compose(
  loadStateSelectors.getIsMoviesLoaded,
  R.prop('loadState'),
);

export const getIsMoviesLoading: (state: State) => LoadedState = R.compose(
  loadStateSelectors.getIsMoviesLoading,
  R.prop('loadState'),
);
