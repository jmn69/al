import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import T from 'prop-types';
import { authOperations } from '../../auth/redux';
import Loader from 'Common/components/Loader';

class ProtectedRoutes extends Component {
  static propTypes = {
    component: T.any,
    authCheck: T.func,
  };

  async componentDidMount() {
    await this.props.authCheck();
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const { isAuthenticated, hasInit, authCheckIsLoading } = rest;

    if (authCheckIsLoading || !hasInit) {
      return <Loader fullPage />;
    }

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
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
