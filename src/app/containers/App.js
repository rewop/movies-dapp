import React, { PureComponent } from 'react';
import Movies from './Movies';

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>Here we go</h1>
        <p>Soon to be arrived</p>
        <Movies />
      </div>
    );
  }
}

export default App;
