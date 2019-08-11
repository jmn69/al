import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: calc(100% - 48px);
  margin-left: 0;
  padding: 20px;
  background: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.darkGray};
`;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;
