export type Movie = {
  title: string,
};

export type MoviesState = Array<Movie>;

export type LoadStateItem = {
  +isLoaded: boolean,
  +isLoading: boolean,
  +error: null | Error,
};

export type LoadState = {
  +movies: LoadStateItem,
};

export type State = {
  +movies: MoviesState,
};
