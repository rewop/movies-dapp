/* @flow */
import R from 'ramda';
import type { MoviesState } from '../../flowtypes/store';

export default (state: MoviesState = []): MoviesState => state;

export const getMovies: MoviesState => MoviesState = R.identity;
