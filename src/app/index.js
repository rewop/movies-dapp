/* @flow */
import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import createConfig from './config';
import createServices from './services';
import type { AppConfig } from './flowtypes/app';

const reactContainer = document.getElementById('react-container');
const config: AppConfig = createConfig();
const services = createServices(config.services);

render(<Root services={services} />, reactContainer);
