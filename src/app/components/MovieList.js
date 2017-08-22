/* @flow */
import React from 'react';
import type { MoviesState } from '../flowtypes/store';
import Button from './Button';

const MovieList = ({ movies, onShowAddMovie }: { movies: MoviesState, onShowAddMovie: Function }) =>
  (<div>
    <h3>
      This is the list of reviewed movies{' '}
      <Button primary circle onClick={onShowAddMovie} title="Add new movie">
        +
      </Button>
    </h3>
    <ul>
      {movies.map(movie =>
        (<li key={movie.title}>
          {movie.title}
        </li>),
      )}
    </ul>
  </div>);

export default MovieList;
