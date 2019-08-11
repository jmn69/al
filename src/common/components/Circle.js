import styled from 'styled-components';

export default styled.span`
  background: ${props => (props.bg ? props.bg : props.theme.colors.darkGray)};
  border-radius: 50%;
  height: 60px;
  padding: 2px;
  display: flex;
  color: ${props => (props.color ? props.color : props.theme.colors.white)};
  justify-content: center;
  align-items: center;
  width: 60px;
  font-size: ${props => props.theme.fontSizes.large};
`;
