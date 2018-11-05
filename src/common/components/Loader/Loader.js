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
      size={props.fullPage ? '3x' : props.size}
      color={props.theme.accent}
      icon={faCircleNotch}
    />
  </LoaderContainer>
);

Loader.propTypes = {
  fullPage: T.bool,
  theme: T.any.isRequired,
  size: T.string,
};

Loader.defaultProps = {
  size: '1x',
  fullPage: false,
};

export default withTheme(Loader);
