import React, { Component } from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';

import Loader from 'Common/components/Loader';
import { getUsers } from 'Common/utils/localStorage';
import { Container, ContentContainer } from './Login.s';
import LoginFormContainer from './LoginFormContainer';
import LoginPickerContainer from './LoginPickerContainer';
import { ToastContainer } from 'react-toastify';

export default class Login extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
    authCheckIsLoading: T.bool,
    isAuthenticated: T.bool,
    hasInit: T.bool,
    authCheck: T.func,
  };

  state = {
    userFound: getUsers() && getUsers().length > 0,
  };

  async componentDidMount() {
    await this.props.authCheck();
  }

  render() {
    const { isAuthenticated, hasInit, authCheckIsLoading } = this.props;

    if (authCheckIsLoading || !hasInit) {
      return <Loader fullPage />;
    }

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <ToastContainer autoClose={false} />
        <ContentContainer>
          {this.state.userFound ? (
            <LoginPickerContainer />
          ) : (
            <LoginFormContainer />
          )}
        </ContentContainer>
      </Container>
    );
  }
}
