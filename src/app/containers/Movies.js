/* @flow */
import { compose } from 'ramda';
import React, { Component } from 'react';

class Movies extends Component {
  render() {
    console.log(this.props.store.movieStore.movies);
    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {this.props.store.movieStore.movies.map(movie =>
            (<li>
              {movie.title}
            </li>),
          )}
        </ul>
      </div>
    );
  }
}

export default Movies;
