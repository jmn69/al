import React, { Component, Fragment } from 'react';
import { Box, Flex } from 'grid-styled';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import T from 'prop-types';
import { FormattedMessage } from 'react-intl';

import LoginIntl from './Login.i';
import Modal from 'Common/components/Modal';
import { ModalHeader, ModalContent } from 'Common/components/Modal.s';
import { getUsers } from 'Common/utils/localStorage';
import ListGroup from 'Common/components/ListGroup';
import ListItem from 'Common/components/ListItem';
import Circle from 'Common/components/Circle';
import PatternLock from 'Common/components/PatternLock';
import { UserNameLabel, PatternContainer } from './Login.s';

class LoginPickerComponent extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
    login: T.func,
    error: T.any,
    isLoading: T.bool,
  };

  state = {
    usersInStorage: getUsers(),
    isOpen: false,
    currentUser: null,
  };

  render() {
    const { usersInStorage, isOpen } = this.state;
    const { theme, error, isLoading } = this.props;
    const listItems =
      usersInStorage &&
      Array.isArray(usersInStorage) &&
      usersInStorage.map(user => (
        <ListItem
          key={user.id}
          clickable
          justify="flex-start"
          padding="1rem 1.25rem"
          onClick={() => this.setState({ isOpen: true, currentUser: user })}
        >
          <Circle size={60}>
            {user.username.substring(0, 1).toUpperCase()}
          </Circle>
          <UserNameLabel>{user.username}</UserNameLabel>
        </ListItem>
      ));

    return (
      <Fragment>
        <Flex width="100%" alignItems="center" justifyContent="center">
          <Box width="30%">
            <ListGroup>{listItems}</ListGroup>
          </Box>
        </Flex>
        <Modal isOpen={isOpen} onClose={this.handleModalClose}>
          <ModalHeader>
            <FormattedMessage {...LoginIntl.ModalTitle} />
          </ModalHeader>
          <ModalContent>
            <PatternContainer>
              <PatternLock
                width={400}
                pointSize={20}
                pointActiveSize={40}
                size={3}
                connectorWidth={4}
                onChange={this.checkPattern}
                pointColor={theme.third}
                errorColor={theme.accent}
                connectorColor={theme.primary}
              />
              <div>{error}</div>
              <div>{isLoading ? 'Loading' : ''}</div>
            </PatternContainer>
          </ModalContent>
        </Modal>
      </Fragment>
    );
  }

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  checkPattern = pattern => {
    return this.props.login({
      username: this.state.currentUser.username,
      password: pattern.join('-'),
    });
  };
}

export default compose(
  injectIntl,
  withTheme
)(LoginPickerComponent);
