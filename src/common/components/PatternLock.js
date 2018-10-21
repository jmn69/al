import PatternLock from 'react-pattern-lock';
import styled from 'styled-components';

export default styled(PatternLock)`
  border: solid 1px ${props => props.theme.gray};
  border-radius: 8px;
`;
