import styled from 'styled-components';
import T from 'prop-types';

const LoaderContainer = styled.div`
  width: ${props => (props.fullPage ? '100vw' : '100%')};
  height: ${props => (props.fullPage ? '100vh' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
`;
LoaderContainer.propTypes = {
  fullPage: T.bool,
};

export { LoaderContainer };
