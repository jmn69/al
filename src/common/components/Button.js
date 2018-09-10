import { Button as RebassButton } from 'rebass/dist/Button';
import styled from 'styled-components';

export default styled(RebassButton)`
  height: ${props => (props.small ? '28px' : 'auto')};
  font-size: ${props => (props.small ? '12px' : props.theme.fontSizes.button)};
  line-height: ${props => (props.small ? '0.8' : '1.6')};
`;
