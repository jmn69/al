import { Text as RebassText } from 'rebass/dist/Text';
import styled from 'styled-components';

export default styled(RebassText)`
  text-transform: ${props => (props.case ? props.case : 'unset')};
  color: ${props => (props.color ? props.color : props.theme.darkGray)};
  font-size: ${props =>
    props.fontSize ? props.fontSize : props.theme.fontSizes.medium};
`;
