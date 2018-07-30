import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Text from 'Common/components/Text';
import Heading from 'Common/components/Heading';
import { Container } from './NotFound.s';
import { Button } from 'rebass/dist/Button';
import { Box } from 'grid-styled';

export default class NotFound extends Component {
  render() {
    return (
      <Container>
        <Box m={3}>
          <Heading children="Page introuvable" textAlign="center" />
        </Box>
        <Box m={3}>
          <Text children="La page n'existe pas" textAlign="center" />
        </Box>
        <Box m={3}>
          <Link to="/">
            <Button children="Retour sur le tableau de bord" />
          </Link>
        </Box>
      </Container>
    );
  }
}
