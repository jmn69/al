import { Toolbar as RebassToolbar } from 'rebass/dist/Toolbar';
import styled from 'styled-components';

export default styled(RebassToolbar)`
  background-color: ${props => props.theme.primary};
  font-size: ${props => props.theme.fontSizes.medium};
`;
