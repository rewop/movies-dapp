import React from 'react';
import ServicesProvider from './services/ServicesProvider';
import servicesPropType from './services/servicesPropType';
import App from './containers/App';

const Root = ({ services }) =>
  (<ServicesProvider services={services}>
    <App />
  </ServicesProvider>);

Root.propTypes = {
  services: servicesPropType.isRequired,
};

export default Root;
