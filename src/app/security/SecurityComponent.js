import React, { Component } from 'react';
import Card from 'Common/components/Card';
import { Box, Flex } from 'grid-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import LockWidget from './LockWidget';

import { CardContent } from './Security.s';

export default class SecurityComponent extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    currentUser: T.string.isRequired,
    setSecurityMod: T.func.isRequired,
  };

  render() {
    const { lock, setSecurityMod } = this.props;

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
                  <FontAwesomeIcon size="5x" icon={faCamera} />See
                </CardContent>
              </Card>
            </Box>
            <Box px={2} width={1 / 3}>
              <Card>
                <CardContent>Dernières alertes</CardContent>
              </Card>
            </Box>
          </Flex>
          <Flex>
            <Box px={2} width={1}>
              <Card>Listes des caméras</Card>
            </Box>
          </Flex>
        </Box>
      </Flex>
    );
  }
}
