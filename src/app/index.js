/* @flow */
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import createStore from './store';
import type { State } from './flowtypes/store';

const reactContainer = document.getElementById('react-container');

const initialState: State = {
  movies: [{ title: 'A movie' }, { title: 'Another movie' }],
};

render(<Root store={createStore(initialState)} />, reactContainer);
