import styled from 'styled-components';

export default styled.div`
  color: inherit;
  background: transparent;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  align-self: stretch;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  margin-left: 20px;

  &:disabled {
    opacity: 0.25;
  }
`;
