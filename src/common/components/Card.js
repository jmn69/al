import { Card as RebassCard } from 'rebass/dist/Card';
import styled from 'styled-components';
import T from 'prop-types';

const Card = styled(RebassCard)`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  background-color: ${props => (props.background ? props.background : 'white')};
`;

Card.propTypes = {
  background: T.string,
};

export default Card;
