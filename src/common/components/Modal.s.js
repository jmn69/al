import styled from 'styled-components';

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const Modal = styled(Fixed)`
  top: 50%;
  left: 50%;
  background: white;
  border-radius: 4px;
  max-width: 100vw;
  max-height: 100vh;
  width: 80%;
  height: 80%;
  box-shadow: 0 0 0 60vmax rgba(0, 0, 0, 0.25), 0 0 32px rgba(0, 0, 0, 0.25);
  overflow: auto;
  transform: translate(-50%, -50%);
  padding: 0;
  z-index: 101;
`;

export const ModalHeader = styled.div`
  height: 60px;
  padding-right: 16px;
  padding-left: 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.large};
`;

export const ModalContent = styled.div`
  padding: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const ModalFooter = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.medium};
`;
