import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Text from 'Common/components/Text';
import Heading from 'Common/components/Heading';
import Button from 'Common/components/Button';
import { Box } from '@rebass/grid';
import { Container } from './NotFound.s';

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <Box m={3}>
          <Heading textAlign='center'>Page introuvable</Heading>
        </Box>
        <Box m={3}>
          <Text textAlign='center'>La page n&apos;existe pas</Text>
        </Box>
        <Box m={3}>
          <Link to='/'>
            <Button>Retour sur le tableau de bord</Button>
          </Link>
        </Box>
      </Container>
    );
  }
}
