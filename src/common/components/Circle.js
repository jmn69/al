import { Circle as RebassCircle } from 'rebass/dist/Circle';
import styled from 'styled-components';

export default styled(RebassCircle)`
  font-size: ${props => (props.size ? props.size / 2 : 14)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.bg ? props.bg : props.theme.darkGray)};
`;
