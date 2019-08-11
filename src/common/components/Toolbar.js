import styled from 'styled-components';

export default styled.div`
  color: white;
  background: black;
  align-items: center;
  min-height: 48px;
  -webkit-font-smoothing: antialiased;
  background-color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;
