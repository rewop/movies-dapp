import PropTypes from 'prop-types';
import { PureComponent, Children } from 'react';
import servicesPropType from './servicesPropType';

export default class ServicesProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    services: servicesPropType.isRequired,
  };

  static childContextTypes = {
    services: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      services: this.props.services,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}
