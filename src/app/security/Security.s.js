import styled from 'styled-components';

export const CardContent = styled.div`
  height: ${props => (props.withTitle ? '162px' : '200px')};
  justify-content: center;
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const CardTitle = styled.div`
  height: 30px;
  margin-left: -8px;
  margin-top: -8px;
  margin-bottom: 16px;
  border-bottom: 2px solid ${props => props.theme.third};
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const ListWrapper = styled.div`
  width: 100%;
`;

export const DateAlertWrapper = styled.div`
  height: 20px;
  font-size: 12px;
  position: absolute;
  background-color: ${props => props.theme.third};
  display: flex;
  align-items: center;
  padding: 4px;
  left: 0;
  top: 0;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: ${props => props.theme.white};

  &:first {
    border-top-left-radius: 0.25rem;
  }
`;

export const CameraAlertWrapper = styled.div`
  margin-top: 14px;
`;

export const ImageAlertWrapper = styled.div`
  float: right;
`;

export const CardHeaderWrapper = styled.div`
  margin-bottom: 16px;
`;
