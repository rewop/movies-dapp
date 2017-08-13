/* @flow */
import type { ServicesConfig, Services } from '../flowtypes/services';
import movies from './movies';

export default function createServices({ web3Host }: ServicesConfig): Services {
  return {
    movies: movies({ web3Host }),
  };
}
