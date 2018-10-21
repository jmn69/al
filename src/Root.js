import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import history from './history';
import { Router } from 'react-router-dom';
import RebassProvider from 'rebass/dist/Provider';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import T from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import styledTheme from './themes/styledTheme';
import rebassTheme from './themes/rebassTheme';
import App from './App';
import LoginContainer from './app/login/LoginContainer';
import translations from './i18n/locales';
import ProtectedRoutes from './common/components/ProtectedRoutes';

addLocaleData([...en, ...fr]);

library.add(faBars);

class Root extends Component {
  static propTypes = {
    locale: T.string,
  };

  render() {
    const { locale } = this.props;

    const messages = translations[locale];

    return (
      <IntlProvider messages={messages} key={locale} locale={locale}>
        <Router history={history}>
          <ThemeProvider theme={styledTheme}>
            <RebassProvider theme={rebassTheme}>
              <Switch>
                <Route path="/login" component={LoginContainer} />
                <ProtectedRoutes path="/" component={App} />
              </Switch>
            </RebassProvider>
          </ThemeProvider>
        </Router>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    locale: state.locale.locale,
  };
};

export default connect(mapStateToProps)(Root);
