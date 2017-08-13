export type Movie = {
  title: string,
};

export type MoviesState = Array<Movie>;

export type State = {
  movies: MoviesState,
};
