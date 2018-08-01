import NavLink from 'react-router-dom/NavLink';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  display: block;
  padding: 0.8em;
  color: #b8b7ad;
  text-decoration: none;

  &.active {
    background-color: #b8b7ad;
    color: #373a47;
  }
`;

export default NavItem;
