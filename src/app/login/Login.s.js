import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  margin-left: 0;
  padding: 20px;
  background: ${props => props.theme.lightGray};
  color: ${props => props.theme.darkGray};
  min-height: 100%;
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
`;

export const FormField = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const FormFieldContainer = styled.div`
  margin: 0 0 30px 0;
`;

export const FormContainer = styled.form`
  padding: 0;
  margin: 15px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
