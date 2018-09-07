import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AppContainer, Container } from './App.s';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Redirect from 'react-router-dom/Redirect';
import history from './history';
import { Router } from 'react-router-dom';
import RebassProvider from 'rebass/dist/Provider';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import T from 'prop-types';
import { ThemeProvider } from 'styled-components';

import styledTheme from './themes/styledTheme';
import rebassTheme from './themes/rebassTheme';
import Menu from './app/menu/Menu';
import Toolbar from './app/toolbar/ToolbarContainer';

import DashboardContainer from './app/dashboard/DashboardContainer';
import SecurityContainer from './app/security/SecurityContainer';
import SettingsContainer from './app/settings/SettingsContainer';
import NotFound from './app/notFound/NotFound';

import translations from './i18n/locales';

addLocaleData([...en, ...fr]);

library.add(faBars);

class App extends Component {
  state = {
    isMenuOpen: false,
  };

  static propTypes = {
    locale: T.string,
  };

  render() {
    const { locale } = this.props;
    const { isMenuOpen } = this.state;

    const messages = translations[locale];

    return (
      <IntlProvider messages={messages} key={locale} locale={locale}>
        <Router history={history}>
          <ThemeProvider theme={styledTheme}>
            <RebassProvider theme={rebassTheme}>
              <Container>
                <Menu
                  isOpen={isMenuOpen}
                  onLinkClick={this.handleLinkClick}
                  onMenuStateChange={this.handleMenuStateChange}
                />
                <Toolbar onMenuClick={this.handleMenuClick} />
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
            </RebassProvider>
          </ThemeProvider>
        </Router>
      </IntlProvider>
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

const mapStateToProps = state => {
  return {
    locale: state.locale.locale,
  };
};

export default connect(mapStateToProps)(App);
