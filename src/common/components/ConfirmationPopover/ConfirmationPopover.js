import React from 'react';
import T from 'prop-types';
import Popover from 'react-awesome-popover';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import { compose } from 'redux';

import CommonIntl from 'Common/CommonTrad.i';
import ButtonOutline from 'Common/components/ButtonOutline';
import Button from 'Common/components/Button';
import Text from 'Common/components/Text';
import Loader from 'Common/components/Loader';
import { ButtonContainer, Container } from './ConfirmationPopover.s';

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
    theme: null,
    intl: null,
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
      <Popover
        targetClass='test'
        action='click'
        open={open}
        placement={placement}
      >
        {button}
        <Container>
          <Text>{text}</Text>
          <ButtonContainer>
            <ButtonOutline
              color={theme.colors.third}
              onClick={onNoClick}
              hover={{
                color: theme.colors.white,
                backgroundColor: theme.colors.third,
              }}
            >
              <FormattedMessage {...CommonIntl.No} />
            </ButtonOutline>
            <Button bg={theme.colors.accent} onClick={onYesClick}>
              {yesIsLoading ? (
                <Loader color='white' size='lg' />
              ) : (
                intl.formatMessage(CommonIntl.Yes)
              )}
            </Button>
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
