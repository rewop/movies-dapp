/* @flow */
import Web3 from 'web3';
import type {
  ServicesConfig,
  MoviesService,
  MoviesServiceGetMoviesResponse,
  Movie,
  MoviesServiceVoteMovieResponse,
} from '../flowtypes/services';

export default function create({ web3Host }: ServicesConfig): MoviesService {
  const web3 = new Web3.providers.HttpProvider(web3Host);
  let movies: Array<Movie> = [{ title: 'movie 1' }, { title: 'movie 2' }];

  return {
    getMovies: (): Promise<MoviesServiceGetMoviesResponse> =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(movies);
        }, 2000);
      }),
    voteMovie: ({ title }: Movie): Promise<MoviesServiceVoteMovieResponse> =>
      new Promise((resolve) => {
        setTimeout(() => {
          const movie = movies.find(m => m.title === title);
          if (movie) {
            return resolve(movie);
          }
          const newMovie: Movie = { title };
          movies = [...movies, newMovie];
          return resolve(newMovie);
        }, 2000);
      }),
  };
}
