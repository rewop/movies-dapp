/* @flow */
import type { State } from '../flowtypes/store';

export default (): State => ({
  movies: [{ title: 'A movie' }, { title: 'Another movie' }],
});
