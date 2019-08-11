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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Box } from '@rebass/grid';
import { withTheme } from 'styled-components';

import CommonIntl from 'Common/CommonTrad.i';
import LockWidgetIntl from './LockWidget.i';
import { CardContent, IconWrapper } from './Security.s';

class LockWidget extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    setSecurityMod: T.func.isRequired,
    theme: T.any,
    intl: T.any,
  };

  static defaultProps = {
    theme: null,
    intl: null,
  };

  state = { isOpen: false, intervalId: null, currentCount: 30 };

  componentWillUnmount = () => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  };

  render() {
    const { lock, theme } = this.props;
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
            <Box width={2 / 5}>
              <IconWrapper>
                <FontAwesomeIcon color={iconColor} size='5x' icon={icon} />
              </IconWrapper>
            </Box>
            <Box width={3 / 5}>
              <Text
                color={theme.colors.darkGray}
                textAlign='center'
                size='title'
              >
                <FormattedMessage {...message} />
              </Text>
            </Box>
          </CardContent>
        </Card>
        <Modal isOpen={isOpen} onClose={this.handleModalClose}>
          <ModalHeader>
            <FormattedMessage {...LockWidgetIntl.ModalTitle} />
          </ModalHeader>
          <ModalContent>
            <Text size='title' textAlign='center'>
              <FormattedMessage
                {...LockWidgetIntl.ModalContent}
                values={{ seconds: currentCount }}
              />
            </Text>
          </ModalContent>
          <ModalFooter>
            <Button bg={theme.colors.accent} onClick={this.handleCancel}>
              <FormattedMessage {...CommonIntl.Cancel} />
            </Button>
            &nbsp;&nbsp;
            <ButtonOutline
              hover={{
                color: theme.colors.white,
                backgroundColor: theme.colors.third,
              }}
              color={theme.colors.third}
              onClick={this.handleActivateNow}
            >
              <FormattedMessage {...CommonIntl.ActivateNow} />
            </ButtonOutline>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }

  timer = () => {
    const { currentCount, intervalId } = this.state;
    const { setSecurityMod, lock } = this.props;
    const newCount = currentCount - 1;
    if (newCount >= 0) {
      this.setState({ currentCount: newCount });
    }
 else {
      clearInterval(intervalId);
      this.setState({ isOpen: false });
      setSecurityMod(!lock);
    }
  };

  handleModalClose = () => {
    this.closeAndClear();
  };

  handleCancel = () => {
    this.closeAndClear();
  };

  handleActivateNow = () => {
    const { lock, setSecurityMod } = this.props;
    this.closeAndClear();
    setSecurityMod(!lock);
  };

  closeAndClear = () => {
    const { intervalId } = this.state;
    this.setState({ isOpen: false });
    clearInterval(intervalId);
  };

  handleSecurityModClick = () => {
    const { lock, setSecurityMod } = this.props;
    if (!lock) {
      const intervalId = setInterval(this.timer, 1000);
      this.setState({ isOpen: true, currentCount: 30, intervalId });
    }
 else {
      setSecurityMod(!lock);
    }
  };
}

export default compose(
  injectIntl,
  withTheme
)(LockWidget);
