/* @flow */
export type MoviesService = {
  getMovies: Function,
  voteMovie: Function,
};

export type ServicesConfig = {
  web3Host: string,
};

export type Services = {
  movies: MoviesService,
};
