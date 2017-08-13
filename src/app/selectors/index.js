/* @flow */
import * as storeSelectors from '../store';
import type { MovieState, State } from '../flowtypes/store';

// eslint-disable-next-line import/prefer-default-export
export const getMovies: State => MovieState = storeSelectors.getMovies;
