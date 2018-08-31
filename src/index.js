import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store';
import './externals/react-grid-layout/styles.css';
import './externals/react-resizable/styles.css';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
