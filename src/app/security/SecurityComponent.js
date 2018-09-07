import React, { Component } from 'react';
import Card from 'Common/components/Card';
import Text from 'Common/components/Text';
import { Box, Flex } from 'grid-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import LockWidget from './LockWidget';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import { CardContent, IconWrapper, CardTitle } from './Security.s';
import SecurityIntl from './Security.i';

class SecurityComponent extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    currentUser: T.string.isRequired,
    setSecurityMod: T.func.isRequired,
    theme: T.any,
    intl: T.any,
  };

  render() {
    const { lock, setSecurityMod, theme } = this.props;

    return (
      <Flex justifyContent="center">
        <Box width={9 / 10}>
          <Flex mb={4}>
            <Box px={2} width={1 / 3}>
              <LockWidget setSecurityMod={setSecurityMod} lock={lock} />
            </Box>
            <Box px={2} width={1 / 3}>
              <Card>
                <CardContent>
                  <Box width={2 / 5}>
                    <IconWrapper>
                      <FontAwesomeIcon color="gray" size="5x" icon={faCamera} />
                    </IconWrapper>
                  </Box>
                  <Box width={3 / 5}>
                    <Text
                      color={theme.darkGray}
                      textAlign="center"
                      fontSize="title"
                    >
                      <FormattedMessage {...SecurityIntl.SeeTheCameras} />
                    </Text>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box px={2} width={1 / 3}>
              <Card>
                <Box width={2 / 5}>
                  <CardTitle>
                    <Text>
                      <FormattedMessage {...SecurityIntl.LatestAlerts} />
                    </Text>
                  </CardTitle>
                </Box>
                <CardContent withTitle>alerts</CardContent>
              </Card>
            </Box>
          </Flex>
          <Flex>
            <Box px={2} width={1}>
              <Card>
                <Box width={1 / 7}>
                  <CardTitle>
                    <Text>
                      <FormattedMessage {...SecurityIntl.ListOfCameras} />
                    </Text>
                  </CardTitle>
                </Box>
              </Card>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

export default compose(
  injectIntl,
  withTheme
)(SecurityComponent);
