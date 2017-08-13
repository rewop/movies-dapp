/* @flow */
import Web3 from 'web3';
import type { ServicesConfig, MoviesService } from '../flowtypes/services';

export default function create({ web3Host }: ServicesConfig): MoviesService {
  const web3 = new Web3.providers.HttpProvider(web3Host);
  return {
    getMovies: () => {},
    voteMovie: () => {},
  };
}
