/* @flow */
import R from 'ramda';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import type { State, Movie } from '../flowtypes/store';
import { getMovies, getIsMoviesLoading, getIsMoviesLoaded } from '../selectors';
import MovieList from '../components/MovieList';
import MoviesEmpty from '../components/MoviesEmpty';
import loadMovies from '../actions/loadMovies';

type StateToProps = {
  movies: Array<Movie>,
  isLoading: boolean,
  isLoaded: boolean,
};

type DispatchToProps = {
  handleLoadMovies: Function,
};

type MoviesProps = StateToProps & DispatchToProps;

class Movies extends Component {
  static deafultProps = {
    movies: [],
    isLoading: false,
    isLoaded: false,
  };

  componentDidMount() {
    console.log('handleLoadMovies');
    this.props.handleLoadMovies();
  }

  props: MoviesProps;

  render() {
    const { isLoading, isLoaded, movies } = this.props;

    if (!isLoaded && !isLoading) {
      return null;
    }

    console.log(movies.length, isLoaded);
    return (
      <div>
        <h2>Movies</h2>
        {isLoaded && movies.length > 0 && <MovieList movies={movies} />}
        {isLoaded && movies.length <= 0 && <MoviesEmpty />}
        {isLoading && <p>...</p>}
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateToProps => ({
  movies: getMovies(state),
  isLoading: getIsMoviesLoading(state),
  isLoaded: getIsMoviesLoaded(state),
});

const mapDispatchToProps = (dispatch: Function): DispatchToProps =>
  bindActionCreators(
    {
      handleLoadMovies: loadMovies,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
