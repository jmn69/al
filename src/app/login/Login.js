import React, { Component } from 'react';
import T from 'prop-types';

import { getUsers } from 'Common/utils/localStorage';
import { Container, ContentContainer } from './Login.s';
import LoginFormContainer from './LoginFormContainer';
import LoginPickerContainer from './LoginPickerContainer';

export default class Login extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
  };

  state = {
    userFound: getUsers() && getUsers().length > 0,
  };

  render() {
    return (
      <Container>
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
