/* @flow */
export type Movie = {
  title: string,
  score: string,
};

export type MoviesServiceGetMoviesResponse = Array<Movie>;
export type MoviesServiceVoteMovieResponse = Movie;

export type ServicesConfig = {
  web3Host: string,
};

export type MoviesService = {
  getMovies: Function,
  voteMovie: (movie: Movie) => Promise<MoviesServiceVoteMovieResponse>,
};

export type Services = {
  movies: MoviesService,
};
