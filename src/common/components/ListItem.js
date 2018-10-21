import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  justify-content: ${props =>
    props.justify ? props.justify : 'space-between'};
  align-items: center;
  padding: ${props => (props.padding ? props.padding : '0.75rem 1.25rem')};
  margin-bottom: -1px;
  background: ${props => (props.active ? 'grey' : 'white')};
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: ${props => (props.clickable ? 'pointer' : 'not-allowed')};
  ${props => (props.active ? 'font-weight: 500;' : '')}
  color: ${props => (props.active ? 'white' : 'black')};

  &:hover {
    background: rgba(0, 0, 0, 0.125);
  }

  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
`;
