import NavLink from 'react-router-dom/NavLink';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  display: block;
  padding: 0.8em;
  color: ${props => props.theme.primary};
  text-decoration: none;

  &.active {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
  }
`;

export default NavItem;
