import React, { PureComponent } from 'react';
import AppLayout from '../components/AppLayout';
import Movies from './Movies';
import MovieForm from './MovieForm';

class App extends PureComponent {
  render() {
    return (
      <AppLayout>
        <Movies />
      </AppLayout>
    );
  }
}

export default App;
