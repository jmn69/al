import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import Button from 'Common/components/Button';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import T from 'prop-types';

import { Container, ContentContainer } from './Login.s';
import { setCurrentUser, setUsers } from 'Common/utils/localStorage';
import Card from 'Common/components/Card';

class LoginPickerComponent extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
  };

  render() {
    return (
      <Container>
        <ContentContainer>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <Box width="30%">
              <Card>picker</Card>
            </Box>
          </Flex>
        </ContentContainer>
      </Container>
    );
  }
}

export default compose(
  injectIntl,
  withTheme
)(LoginPickerComponent);
