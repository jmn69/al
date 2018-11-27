import styled from 'styled-components';
import T from 'prop-types';

const LoaderContainer = styled.div`
  width: ${props => (props.fullPage ? '100vw' : 'auto')};
  height: ${props => (props.fullPage ? '100vh' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
LoaderContainer.propTypes = {
  fullPage: T.bool,
};

export { LoaderContainer };
