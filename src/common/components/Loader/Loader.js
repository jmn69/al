import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { LoaderContainer } from './Loader.s';
import { withTheme } from 'styled-components';

const Loader = props => (
  <LoaderContainer fullPage={props.fullPage}>
    <FontAwesomeIcon
      spin
      size="3x"
      color={props.theme.accent}
      icon={faCircleNotch}
    />
  </LoaderContainer>
);

Loader.propTypes = {
  fullPage: T.bool,
  theme: T.any.isRequired,
};

export default withTheme(Loader);
