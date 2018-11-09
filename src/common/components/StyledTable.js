import styled from 'styled-components';

export default styled.table`
  border-collapse: collapse;
  width: 100%;
  table {
    width: 100%;
    max-width: 100%;
  }
  td {
    height: 60px;
  }
  td,
  th {
    padding: 6px 6px;
  }
  th {
    font-weight: 400;
    color: ${props => props.color};
    border: 1px solid ${props => props.bc};
    border-bottom-width: 2px;
    background: ${props => props.bg};
  }
  td {
    border: 1px solid #f5f5f5;
    border-top: none;
    text-align: center;
  }
  tr:nth-child(odd) {
    background: #f5f5f5;
  }
  tr:nth-child(even) {
    background: #fff;
  }
`;
