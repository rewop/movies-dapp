/* @flow */
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';

const reactContainer = document.getElementById('react-container');

render(<Root />, reactContainer);
