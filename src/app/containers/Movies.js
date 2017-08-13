/* @flow */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import type { State, Movie } from '../flowtypes/store';

type MoviesProps = {
  movies: Array<Movie>,
};

class Movies extends Component {
  static deafultProps = {
    movies: [],
  };

  props: MoviesProps;

  render() {
    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {this.props.movies.map(movie =>
            (<li key={movie.title}>
              {movie.title}
            </li>),
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state: State): MoviesProps => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(Movies);
