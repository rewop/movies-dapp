/* @flow */
import Web3 from 'web3';
import type {
  ServicesConfig,
  MoviesService,
  MoviesServiceGetMoviesResponse,
} from '../flowtypes/services';

export default function create({ web3Host }: ServicesConfig): MoviesService {
  const web3 = new Web3.providers.HttpProvider(web3Host);
  return {
    getMovies: (): Promise<MoviesServiceGetMoviesResponse> =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([{ title: 'movie 1' }, { title: 'movie 2' }]);
        }, 3000);
      }),
    voteMovie: () => {},
  };
}
