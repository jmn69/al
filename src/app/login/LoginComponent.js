import React, { Component } from 'react';
import T from 'prop-types';
import { Redirect } from 'react-router-dom';

import Loader from 'Common/components/Loader';
import { getUsers } from 'Common/utils/localStorage';
import { ToastContainer } from 'react-toastify';
import { Container, ContentContainer } from './Login.s';
import LoginFormContainer from './LoginFormContainer';
import LoginPickerContainer from './LoginPickerContainer';

export default class Login extends Component {
  static propTypes = {
    authCheckIsLoading: T.bool,
    isAuthenticated: T.bool,
    hasInit: T.bool,
    authCheck: T.func,
  };

  static defaultProps = {
    authCheckIsLoading: false,
    isAuthenticated: false,
    hasInit: false,
    authCheck: () => {},
  };

  state = {
    userFound: getUsers() && getUsers().length > 0,
  };

  async componentDidMount() {
    const { authCheck } = this.props;
    await authCheck();
  }

  render() {
    const { isAuthenticated, hasInit, authCheckIsLoading } = this.props;
    const { userFound } = this.state;

    if (authCheckIsLoading || !hasInit) {
      return <Loader fullPage />;
    }

    if (isAuthenticated) {
      return <Redirect to='/' />;
    }

    return (
      <Container>
        <ToastContainer autoClose={false} />
        <ContentContainer>
          {userFound ? <LoginPickerContainer /> : <LoginFormContainer />}
        </ContentContainer>
      </Container>
    );
  }
}
