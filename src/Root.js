import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import T from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';

import styledTheme from './themes/styledTheme';
import App from './App';
import LoginContainer from './app/login/LoginContainer';
import translations from './i18n/locales';
import ProtectedRoutes from './common/components/ProtectedRoutes';
import Fonts from './themes/Fonts';

addLocaleData([...en, ...fr]);

library.add(faBars);

class Root extends Component {
  static propTypes = {
    locale: T.string.isRequired,
  };

  componentDidMount() {
    Fonts();
  }

  render() {
    const { locale } = this.props;

    const messages = translations[locale];

    return (
      <IntlProvider messages={messages} key={locale} locale={locale}>
        <Router history={history}>
          <ThemeProvider theme={styledTheme}>
            <Switch>
              <Route path='/login' component={LoginContainer} />
              <ProtectedRoutes path='/' component={App} />
            </Switch>
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
