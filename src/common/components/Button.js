import { Button as RebassButton } from 'rebass/dist/Button';
import styled from 'styled-components';
import T from 'prop-types';

const getHeight = size => {
  if (size === 'medium') {
    return 'auto';
  } else if (size === 'small') {
    return '28px';
  } else {
    return 'auto';
  }
};

const getFontSize = props => {
  if (props.size === 'medium') {
    return props.theme.fontSizes.button;
  } else if (props.size === 'small') {
    return '12px';
  } else {
    return props.theme.fontSizes.button;
  }
};

const getLineHeight = props => {
  if (props.size === 'medium') {
    return '1.6';
  } else if (props.size === 'small') {
    return '0.8';
  } else {
    return '1.6';
  }
};

const Button = styled(RebassButton)`
  height: ${props => getHeight(props.size)};
  font-size: ${props => getFontSize(props)};
  line-height: ${props => getLineHeight(props)};
`;

Button.propTypes = {
  size: T.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  size: 'medium',
};

export default Button;
