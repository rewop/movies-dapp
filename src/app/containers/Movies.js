/* @flow */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import type { State, Movie } from '../flowtypes/store';
import { getMovies } from '../selectors';
import MovieList from '../components/MovieList';

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
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

const mapStateToProps = (state: State): MoviesProps => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(Movies);
