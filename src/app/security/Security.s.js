import styled from 'styled-components';

export const CardContent = styled.div`
  height: ${props => (props.withTitle ? '178px' : '200px')};
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const CardTitle = styled.div`
  height: 30px;
  margin-left: -8px;
  margin-top: -8px;
  border-bottom: 2px solid ${props => props.theme.third};
  display: flex;
  align-items: center;
  padding-left: 8px;
`;
