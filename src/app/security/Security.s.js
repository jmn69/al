import styled from 'styled-components';

export const CardContent = styled.div`
  height: ${props => (props.withTitle ? '162px' : '200px')};
  justify-content: center;
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  padding: 4px 10px;
`;

export const CardAlertsContent = styled.div`
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
  border-bottom: 2px solid ${props => props.theme.colors.third};
  display: flex;
  align-items: center;
  padding-left: 8px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
`;

export const DateAlertContainer = styled.div`
  height: 20px;
  width: 180px;
  text-align: center;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.third};
  display: flex;
  align-items: center;
  padding: 4px;
  border-bottom-right-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: ${props => props.theme.colors.white};

  &:first {
    border-top-left-radius: 0.25rem;
  }
`;

export const ImageAlertWrapper = styled.div`
  float: right;
  height: 120px;
  max-width: 60%;
`;

export const StyledImage = styled.img`
  border-radius: 4px;
`;

export const CardHeaderWrapper = styled.div`
  margin-bottom: 16px;
  padding: 10px 10px 10px 8px;
`;

export const CardHeaderAlerts = styled.div`
  padding-top: 10px;
  padding-left: 8px;
`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const FormField = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const IconActionWrapper = styled.div`
  cursor: pointer;
`;

export const IconActionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const DetectionStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WrapperLoader = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

export const ListItemWrapper = styled.div`
  height: 162px;
  min-height: 162px;
`;

export const ListItemInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const AlertContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;
