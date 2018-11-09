import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const Container = styled.div`
  width: 250px;
  min-height: 120px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid ${props => props.theme.gray};
  border-radius: 4px;
`;
