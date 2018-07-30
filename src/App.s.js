import styled from 'styled-components';

export const MenuButtonWrapper = styled.div`
  cursor: pointer;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  height: calc(100% - 48px);
  margin-left: 0;
  padding: 20px;
`;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;
