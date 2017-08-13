/* @flow */
import R from 'ramda';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movies, * as moviesSelectors from './movies';
import type { State, MoviesState } from '../flowtypes/store';

const reducer: Function = combineReducers({
  form: formReducer,
  movies,
});

export default (initialState: State) =>
  createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export const getMovies: (state: State) => MoviesState = R.compose(
  moviesSelectors.getMovies,
  R.prop('movies'),
);
