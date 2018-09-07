import { Button as RebassButton } from 'rebass/dist/Button';
import styled from 'styled-components';

export default styled(RebassButton)`
  font-size: ${props => props.theme.fontSizes.button};
  line-height: 1.6;
`;
