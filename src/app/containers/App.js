import React, { PureComponent } from 'react';
import Movies from './Movies';
import MovieForm from './MovieForm';

class App extends PureComponent {
  render() {
    return (
      <div>
        <MovieForm />
        <Movies />
      </div>
    );
  }
}

export default App;
