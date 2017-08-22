/* @flow */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import type { State, Movie } from '../flowtypes/store';
import { getMovies, getIsMoviesLoading, getIsMoviesLoaded } from '../selectors';
import MovieList from '../components/MovieList';
import MoviesEmpty from '../components/MoviesEmpty';
import MovieForm from './MovieForm';
import loadMovies from '../actions/loadMovies';
import voteMovie from '../actions/voteMovie';

type StateToProps = {
  movies: Array<Movie>,
  isLoading: boolean,
  isLoaded: boolean,
};

type DispatchToProps = {
  handleLoadMovies: Function,
  handleVoteMovie: Function,
};

type MoviesProps = StateToProps & DispatchToProps;

type MoviesContainerState = {
  isAddingMovie: Boolean,
};

class Movies extends Component {
  static deafultProps = {
    movies: [],
    isLoading: false,
    isLoaded: false,
  };

  constructor(props: MoviesProps) {
    super(props);

    this.state = {
      isAddingMovie: false,
    };
  }

  state: MoviesContainerState;

  componentDidMount() {
    this.props.handleLoadMovies();
  }

  props: MoviesProps;

  handleToggleShowAddMovie = () => {
    this.setState((state: MoviesContainerState) => ({
      isAddingMovie: !state.isAddingMovie,
    }));
  };
  handleVoteMovie = async (...args) => {
    const { handleVoteMovie } = this.props;
    await handleVoteMovie(...args);
    this.handleToggleShowAddMovie();
  };

  render() {
    const { isLoading, isLoaded, movies } = this.props;
    const { isAddingMovie } = this.state;

    if (!isLoaded && !isLoading) {
      return null;
    }

    if (isAddingMovie) {
      return (
        <MovieForm onCancel={this.handleToggleShowAddMovie} onAddMovie={this.handleVoteMovie} />
      );
    }

    return (
      <div>
        {isLoaded &&
          movies.length > 0 &&
          <MovieList movies={movies} onShowAddMovie={this.handleToggleShowAddMovie} />}
        {isLoaded &&
          movies.length <= 0 &&
          <MoviesEmpty onShowAddMovie={this.handleToggleShowAddMovie} />}
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
      handleVoteMovie: voteMovie,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
