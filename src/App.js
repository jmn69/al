import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MenuButtonWrapper, AppContainer, Container } from './App.s';
import Toolbar from 'rebass/dist/Toolbar';
import NavLink from 'rebass/dist/NavLink';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';

import DashboardContainer from './app/dashboard/DashboardContainer';
import SecurityContainer from './app/security/SecurityContainer';
import SettingsContainer from './app/settings/SettingsContainer';
import NotFound from './app/NotFound';

library.add(faBars);

const MenuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'block',
    padding: '0.8em',
    color: '#b8b7ad',
    textDecoration: 'none',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

class App extends Component {
  state = {
    isMenuOpen: false,
  };

  menuStateChange = state => {
    this.setState({ isMenuOpen: state.isOpen });
  };

  render() {
    const { isMenuOpen } = this.state;
    return (
      <Container>
        <Menu
          onStateChange={this.menuStateChange}
          customBurgerIcon={false}
          isOpen={isMenuOpen}
          styles={MenuStyles}
        >
          <a id="dashboard" href="/">
            Tableau de bord
          </a>
          <a id="security" href="/security">
            Sécurité
          </a>
          <a id="settings" href="/settings">
            Settings
          </a>
        </Menu>
        <Toolbar>
          <MenuButtonWrapper>
            <FontAwesomeIcon
              size="2x"
              icon="bars"
              onClick={() => this.setState({ isMenuOpen: !isMenuOpen })}
            />
          </MenuButtonWrapper>
          <NavLink ml="auto">Verrouiller</NavLink>
        </Toolbar>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={DashboardContainer} />
            <Route path="/security" component={SecurityContainer} />
            <Route path="/settings" component={SettingsContainer} />

            <Route path="/404" component={NotFound} />
            <Route path="*" render={() => <Redirect to="/404" />} />
          </Switch>
        </AppContainer>
      </Container>
    );
  }
}

export default App;
