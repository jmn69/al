import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import T from 'prop-types';
import Loader from 'Common/components/Loader';
import { authOperations } from '../../auth/redux';

class ProtectedRoutes extends Component {
  static propTypes = {
    component: T.any,
    authCheck: T.func,
  };

  static defaultProps = {
    component: null,
    authCheck: () => {},
  };

  async componentDidMount() {
    const { authCheck } = this.props;
    await authCheck();
  }

  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthenticated, hasInit, authCheckIsLoading } = rest;

    if (authCheckIsLoading || !hasInit) {
      return <Loader fullPage />;
    }

    if (!isAuthenticated) {
      return <Redirect to='/login' />;
    }

    return <Route {...rest} render={props => <Component {...props} />} />;
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  hasInit: auth.hasInit,
  authCheckIsLoading: auth.authCheckIsLoading,
});

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authOperations.authCheck()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedRoutes);
