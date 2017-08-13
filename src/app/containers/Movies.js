/* @flow */

import React, { PureComponent } from 'react';
import withServices from '../services/withServices';

class Movies extends PureComponent {
  componentDidMount() {
    this.props.services.movies.getMovies();
  }
  render() {}
}

export default withServices(Movies);
