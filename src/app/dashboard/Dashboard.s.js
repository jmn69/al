import styled from 'styled-components';

export const Card = styled.div`
  background: ${props => props.theme.white};
  border-radius: 7px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
