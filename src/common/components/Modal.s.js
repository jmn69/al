import styled from 'styled-components';
import { Modal as RebassModal } from 'rebass/dist/Modal';

export const Modal = styled(RebassModal)`
  padding: 0;
  z-index: 101;
`;

export const ModalHeader = styled.div`
  height: 60px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
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
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid ${props => props.theme.primary};
  font-size: ${props => props.theme.fontSizes.medium};
`;
