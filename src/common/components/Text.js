import { Text as RebassText } from 'rebass';
import styled from 'styled-components';

const getFontSize = props => {
  if (props.size === 'medium') {
    return props.theme.fontSizes.medium;
  }
  if (props.size === 'small') {
    return props.theme.fontSizes.small;
  }
  if (props.size === 'large') {
    return props.theme.fontSizes.large;
  }
  if (props.size === 'title') {
    return props.theme.fontSizes.title;
  }
  return props.theme.fontSizes.medium;
};

export default styled(RebassText)`
  text-transform: ${props => (props.case ? props.case : 'unset')};
  color: ${props => (props.color ? props.color : props.theme.colors.darkGray)};
  font-size: ${props => getFontSize(props)};
  width: 100%;
`;
