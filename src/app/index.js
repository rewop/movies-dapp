/* @flow */
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import createStore from './store';
import createServices from './services';
import createConfig from './config';

const config = createConfig();
const reactContainer = document.getElementById('react-container');

const services = createServices(config.services);
console.log('services', services);
render(<Root store={createStore(undefined, services)} />, reactContainer);
