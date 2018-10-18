import styled from 'styled-components';

export const FieldError = styled.div`
  color: red;
  margin: 2px;
  font-size: ${props => props.theme.fontSizes.small};
  position: absolute;
  left: 0;
`;

export const FieldErrorColor = styled.div`
  color: red;
`;

export const FormInputContainer = styled.div`
  width: 100%;
  position: relative;
`;
