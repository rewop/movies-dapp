/* @flow */
import React from 'react';
import type { MoviesState } from '../flowtypes/store';

const MovieList = ({ movies }: { movies: MoviesState }) =>
  (<ul>
    {movies.map(movie =>
      (<li key={movie.title}>
        {movie.title}
      </li>),
    )}
  </ul>);

export default MovieList;
