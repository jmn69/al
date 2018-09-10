import styled from 'styled-components';

export default styled.table`
  border-collapse: collapse;
  width: 100%;
  table {
    width: 100%;
    max-width: 100%;
  }
  td,
  th {
    padding: 5px 5px;
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
  td button {
    padding: 0px 15px 0px 30px !important;
    font-size: 14px !important;
    min-width: 85px !important;
    height: 30px !important;
  }
`;
