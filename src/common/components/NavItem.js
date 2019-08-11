import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  display: block;
  padding: 0.8em;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &.active {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

export default NavItem;
