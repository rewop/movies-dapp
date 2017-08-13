/* @flow */
import * as storeSelectors from '../store';
import type { MovieState, State } from '../flowtypes/store';

// eslint-disable-next-line import/prefer-default-export
export const getMovies: State => MovieState = storeSelectors.getMovies;
export const getIsMoviesLoaded: State => boolean = storeSelectors.getIsMoviesLoaded;
export const getIsMoviesLoading: State => boolean = storeSelectors.getIsMoviesLoading;
