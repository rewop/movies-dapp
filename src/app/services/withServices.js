import PropTypes from 'prop-types';
import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import getDisplayName from 'react-display-name';

export default function withServices(ComponentToWrap) {
  const WithServices = (props, context) =>
    <ComponentToWrap {...props} services={context.services} />;

  WithServices.contextTypes = {
    services: PropTypes.object.isRequired,
  };

  WithServices.displayName = `withServices(${getDisplayName(ComponentToWrap)})`;

  hoistNonReactStatic(WithServices, ComponentToWrap);

  return WithServices;
}
