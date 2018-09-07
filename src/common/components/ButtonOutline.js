import { ButtonOutline as RebassButtonOutline } from 'rebass/dist/ButtonOutline';
import styled from 'styled-components';

export default styled(RebassButtonOutline)`
  font-size: ${props => props.theme.fontSizes.button};
  line-height: 1.6;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.hover.backgroundColor};
  }
`;
