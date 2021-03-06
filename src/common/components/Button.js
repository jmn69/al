import styled from 'styled-components';
import T from 'prop-types';

const getHeight = size => {
  if (size === 'medium') {
    return 'auto';
  }
  if (size === 'small') {
    return '28px';
  }
  return 'auto';
};

const getFontSize = props => {
  if (props.size === 'medium') {
    return props.theme.fontSizes.button;
  }
  if (props.size === 'small') {
    return props.theme.fontSizes.small;
  }
  return props.theme.fontSizes.button;
};

const getLineHeight = props => {
  if (props.size === 'medium') {
    return '1.6';
  }
  if (props.size === 'small') {
    return '0.8';
  }
  return '1.6';
};

const Button = styled.button`
  height: ${props => getHeight(props.size)};
  font-size: ${props => getFontSize(props)};
  line-height: ${props => getLineHeight(props)};
  font-weight: bold;
  min-height: 38px;
  color: ${props => props.color};
  background: ${props => (props.bg ? props.bg : props.theme.colors.primary)};
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: middle;
  text-decoration: none;
  -webkit-appearance: none;
  padding: 3px 10px;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.25;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px
      ${props => (props.bg ? props.bg : props.theme.colors.primary)};
  }
`;

Button.propTypes = {
  size: T.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  size: 'medium',
  color: 'white',
};

export default Button;
