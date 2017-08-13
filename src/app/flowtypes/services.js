/* @flow */
export type MoviesService = {
  getMovies: Function,
  voteMovie: Function,
};

export type Movie = {
  title: string,
};

export type MoviesServiceGetMoviesResponse = Array<Movie>;
export type MoviesServiceVoteMovieResponse = Movie;

export type ServicesConfig = {
  web3Host: string,
};

export type Services = {
  movies: MoviesService,
};
