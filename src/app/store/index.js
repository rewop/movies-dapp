/* @flow */
import { createStore, combineReducers } from 'redux';
import movies from './movies';
import type { State } from '../flowtypes/store';

const reducer: Function = combineReducers({
  movies,
});

export default (initialState: State) => createStore(reducer, initialState);
