import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import RebassProvider from 'rebass/dist/Provider';
import { injectGlobal } from 'styled-components';
import history from './history';
import { Router } from 'react-router-dom';
import store from './store';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RebassProvider>
        <App />
      </RebassProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
