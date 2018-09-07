import { Select as RebassSelect } from 'rebass/dist/Select';
import styled from 'styled-components';

export default styled(RebassSelect)`
  font-size: ${props => props.theme.fontSizes.medium};
  min-width: 45px;
  border: none;
  background: ${props => props.theme.white};
  color: ${props => props.theme.darkGray};
`;
