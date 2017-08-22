/* @flow */
import React from 'react';
import type { MoviesState } from '../flowtypes/store';
import Button from './Button';
import List from './List';

const MovieList = ({ movies, onShowAddMovie }: { movies: MoviesState, onShowAddMovie: Function }) =>
  (<List>
    <List.Title
      title="This is the list of reviewed movies"
      rightAction={
        <Button primary circle onClick={onShowAddMovie} title="Add new movie">
          +
        </Button>
      }
    />
    {movies.map((movie, index) =>
      (<List.Item key={movie.title}>
        {`${index + 1}. ${movie.title}`}
      </List.Item>),
    )}
  </List>);

export default MovieList;
