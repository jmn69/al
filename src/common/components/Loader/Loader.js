import React from 'react';
import T from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { withTheme } from 'styled-components';
import LoaderContainer from './Loader.s';

const Loader = ({ fullPage, size, color, theme }) => (
  <LoaderContainer fullPage={fullPage}>
    <FontAwesomeIcon
      spin
      size={fullPage ? '3x' : size}
      color={color || theme.colors.accent}
      icon={faCircleNotch}
    />
  </LoaderContainer>
);

Loader.propTypes = {
  fullPage: T.bool,
  theme: T.any.isRequired,
  size: T.string,
  color: T.string,
};

Loader.defaultProps = {
  size: '1x',
  fullPage: false,
  color: null,
};

export default withTheme(Loader);
