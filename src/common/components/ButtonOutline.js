import { ButtonOutline as RebassButtonOutline } from 'rebass/dist/ButtonOutline';
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

const ButtonOutline = styled(RebassButtonOutline)`
  height: ${props => getHeight(props.size)};
  font-size: ${props => getFontSize(props)};
  line-height: ${props => getLineHeight(props)};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.hover.backgroundColor};
  }
`;

ButtonOutline.propTypes = {
  size: T.oneOf(['small', 'medium', 'large']),
};

ButtonOutline.defaultProps = {
  size: 'medium',
};

export default ButtonOutline;
