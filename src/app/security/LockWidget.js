import React, { Component, Fragment } from 'react';
import Card from 'Common/components/Card';
import Text from 'Common/components/Text';
import Modal from 'Common/components/Modal';
import Button from 'Common/components/Button';
import { compose } from 'redux';
import ButtonOutline from 'Common/components/ButtonOutline';
import {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from 'Common/components/Modal.s';
import { CardContent, IconWrapper } from './Security.s';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Box, Flex } from 'grid-styled';
import { withTheme } from 'styled-components';

import LockWidgetIntl from './LockWidget.i';
import CommonIntl from '../../common/CommonTrad.i';

class LockWidget extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    setSecurityMod: T.func.isRequired,
    theme: T.any,
    intl: T.any,
  };

  state = { isOpen: false, intervalId: null, currentCount: 30 };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  timer = () => {
    const { currentCount, intervalId } = this.state;
    const { setSecurityMod, lock } = this.props;
    const newCount = currentCount - 1;
    if (newCount >= 0) {
      this.setState({ currentCount: newCount });
    } else {
      clearInterval(intervalId);
      this.setState({ isOpen: false });
      setSecurityMod(!lock);
    }
  };

  render() {
    const { lock, theme, intl } = this.props;
    const { isOpen, currentCount } = this.state;

    const background = lock
      ? 'rgba(255, 121, 97, 0.1)'
      : 'rgba(128, 226, 126, 0.1)';
    const iconColor = lock ? '#e53935' : '#4caf50';
    const message = lock
      ? LockWidgetIntl.SecurityActivated
      : LockWidgetIntl.SecurityDeactivated;
    const icon = lock ? faLock : faUnlock;

    return (
      <Fragment>
        <Card onClick={this.handleSecurityModClick} background={background}>
          <CardContent>
            <Flex alignItems="center" justifyContent="center">
              <Box width={2 / 5}>
                <IconWrapper>
                  <FontAwesomeIcon color={iconColor} size="5x" icon={icon} />
                </IconWrapper>
              </Box>
              <Box width={3 / 5}>
                <Text
                  color={theme.darkGray}
                  textAlign="center"
                  fontSize="title"
                >
                  <FormattedMessage {...message} />
                </Text>
              </Box>
            </Flex>
          </CardContent>
        </Card>
        <Modal isOpen={isOpen} onClose={this.handleModalClose}>
          <ModalHeader>
            <FormattedMessage {...LockWidgetIntl.ModalTitle} />
          </ModalHeader>
          <ModalContent>
            <Text fontSize="title" textAlign="center">
              <FormattedMessage
                {...LockWidgetIntl.ModalContent}
                values={{ seconds: currentCount }}
              />
            </Text>
          </ModalContent>
          <ModalFooter>
            <Button
              bg={theme.accent}
              onClick={this.handleCancel}
              children={intl.formatMessage(CommonIntl.Cancel)}
            />
            &nbsp;&nbsp;
            <ButtonOutline
              hover={{
                color: theme.white,
                backgroundColor: theme.third,
              }}
              color={theme.third}
              onClick={this.handleActivateNow}
              children={intl.formatMessage(CommonIntl.ActivateNow)}
            />
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
    clearInterval(this.state.intervalId);
  };

  handleActivateNow = () => {
    const { lock, setSecurityMod } = this.props;
    this.setState({ isOpen: false });
    setSecurityMod(!lock);
    clearInterval(this.state.intervalId);
  };

  handleSecurityModClick = () => {
    const { lock, setSecurityMod } = this.props;
    if (!lock) {
      const intervalId = setInterval(this.timer, 1000);
      this.setState({ isOpen: true, currentCount: 30, intervalId: intervalId });
    } else {
      setSecurityMod(!lock);
    }
  };
}

export default compose(
  injectIntl,
  withTheme
)(LockWidget);
