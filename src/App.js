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
import history from './history';
import { Router } from 'react-router-dom';
import RebassProvider from 'rebass/dist/Provider';
import Select from 'rebass/dist/Select';
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import T from 'prop-types';

import NavItem from 'Common/components/NavItem';
import AppIntl from './App.i';
import LocaleIntl from './locale/Locale.i';
import { changeLocale } from './locale/action';

import DashboardContainer from './app/dashboard/DashboardContainer';
import SecurityContainer from './app/security/SecurityContainer';
import SettingsContainer from './app/settings/SettingsContainer';
import NotFound from './app/NotFound';

import translations from './i18n/locales';

addLocaleData([...en, ...fr]);

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
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

class App extends Component {
  state = {
    isMenuOpen: false,
  };

  static propTypes = {
    locale: T.string,
    changeLocale: T.func.isRequired,
  };

  menuStateChange = state => {
    this.setState({ isMenuOpen: state.isOpen });
  };

  handleLinkClick = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const { isMenuOpen } = this.state;
    const { locale } = this.props;

    const messages = translations[locale];

    return (
      <IntlProvider messages={messages} key={locale} locale={locale}>
        <Router history={history}>
          <RebassProvider>
            <Container>
              <Menu
                onStateChange={this.menuStateChange}
                customBurgerIcon={false}
                isOpen={isMenuOpen}
                styles={MenuStyles}
              >
                <NavItem exact onClick={this.handleLinkClick} to="/">
                  <FormattedMessage {...AppIntl.Dashboard} />
                </NavItem>
                <NavItem onClick={this.handleLinkClick} to="/security">
                  <FormattedMessage {...AppIntl.Security} />
                </NavItem>
                <NavItem onClick={this.handleLinkClick} to="/settings">
                  <FormattedMessage {...AppIntl.Settings} />
                </NavItem>
              </Menu>
              <Toolbar>
                <MenuButtonWrapper>
                  <FontAwesomeIcon
                    size="2x"
                    icon="bars"
                    onClick={() => this.setState({ isMenuOpen: !isMenuOpen })}
                  />
                </MenuButtonWrapper>
                <NavLink ml="auto">
                  <Select
                    value={this.props.locale}
                    onChange={this.handleLocaleChange}
                  >
                    <FormattedMessage
                      {...LocaleIntl.Fr}
                      children={FormattedMessage => (
                        <option value="fr">{FormattedMessage}</option>
                      )}
                    />
                    <FormattedMessage
                      {...LocaleIntl.En}
                      children={FormattedMessage => (
                        <option value="en">{FormattedMessage}</option>
                      )}
                    />
                  </Select>
                </NavLink>
                <NavLink>
                  <FormattedMessage {...AppIntl.Lock} />
                </NavLink>
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
          </RebassProvider>
        </Router>
      </IntlProvider>
    );
  }

  handleLocaleChange = event => {
    this.props.changeLocale(event.target.value);
  };
}

const mapStateToProps = state => {
  return {
    locale: state.locale.locale,
  };
};

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(changeLocale(locale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
