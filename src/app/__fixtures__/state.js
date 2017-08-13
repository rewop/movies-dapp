/* @flow */
import type { State } from '../flowtypes/store';
import deepExtend from 'deep-extend';

export default (extend: any = {}): State =>
  deepExtend(
    {
      movies: [{ title: 'A movie' }, { title: 'Another movie' }],
      loadState: {
        movies: {
          isLoaded: false,
          isLoading: false,
          error: null,
        },
      },
    },
    extend,
  );
