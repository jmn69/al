import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Menu from './app/menu/Menu';
import Toolbar from './app/toolbar/ToolbarContainer';
import { AppContainer, Container } from './App.s';

import DashboardContainer from './app/dashboard/DashboardContainer';
import SecurityContainer from './app/security/SecurityContainer';
import SettingsContainer from './app/settings/SettingsContainer';
import NotFound from './app/notFound/NotFound';

export default class App extends Component {
  state = {
    isMenuOpen: false,
  };

  static propTypes = {};

  render() {
    const { isMenuOpen } = this.state;

    return (
      <Container>
        <Menu
          isOpen={isMenuOpen}
          onLinkClick={this.handleLinkClick}
          onMenuStateChange={this.handleMenuStateChange}
        />
        <Toolbar onMenuClick={this.handleMenuClick} />
        <AppContainer>
          <ToastContainer autoClose={false} />
          <Switch>
            <Route exact path='/' component={DashboardContainer} />
            <Route path='/security' component={SecurityContainer} />
            <Route path='/settings' component={SettingsContainer} />

            <Route path='/404' component={NotFound} />
            <Route path='*' render={() => <Redirect to='/404' />} />
          </Switch>
        </AppContainer>
      </Container>
    );
  }

  handleMenuClick = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  handleLinkClick = () => {
    this.setState({ isMenuOpen: false });
  };

  handleMenuStateChange = state => {
    this.setState({ isMenuOpen: state.isOpen });
  };
}
