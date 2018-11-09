import React from 'react';
import T from 'prop-types';
import Popover from 'react-awesome-popover';
import { injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import { compose } from 'redux';

import CommonIntl from 'Common/CommonTrad.i';
import { ButtonContainer, Container } from './ConfirmationPopover.s';
import ButtonOutline from 'Common/components/ButtonOutline';
import Button from 'Common/components/Button';
import Text from 'Common/components/Text';
import Loader from 'Common/components/Loader';

class ConfirmationPopoverComponent extends React.Component {
  static propTypes = {
    button: T.node.isRequired,
    placement: T.oneOf(['bottom', 'left', 'top', 'right', 'auto']),
    open: T.bool.isRequired,
    onYesClick: T.func.isRequired,
    onNoClick: T.func.isRequired,
    theme: T.any,
    intl: T.any,
    text: T.string.isRequired,
    yesIsLoading: T.bool,
  };

  static defaultProps = {
    placement: 'auto',
    yesIsLoading: false,
  };

  render() {
    const {
      button,
      open,
      onYesClick,
      onNoClick,
      theme,
      intl,
      placement,
      text,
      yesIsLoading,
    } = this.props;
    return (
      <Popover action="click" open={open} placement={placement}>
        {button}
        <Container>
          <Text>{text}</Text>
          <ButtonContainer>
            <ButtonOutline
              color={theme.third}
              size="small"
              children={intl.formatMessage(CommonIntl.No)}
              onClick={onNoClick}
              hover={{
                color: theme.white,
                backgroundColor: theme.third,
              }}
            />
            <Button
              bg={theme.accent}
              size="small"
              children={
                yesIsLoading ? (
                  <Loader color="white" size="lg" />
                ) : (
                  intl.formatMessage(CommonIntl.Yes)
                )
              }
              onClick={onYesClick}
            />
          </ButtonContainer>
        </Container>
      </Popover>
    );
  }
}

export default compose(
  injectIntl,
  withTheme
)(ConfirmationPopoverComponent);
