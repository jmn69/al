import styled from 'styled-components';
import T from 'prop-types';

const Card = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: ${props => (props.background ? props.background : 'white')};
`;

Card.propTypes = {
  background: T.string,
};

export default Card;
