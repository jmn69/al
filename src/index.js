import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store';
import './externals/react-grid-layout/styles.css';
import './externals/react-resizable/styles.css';

require('typeface-roboto');

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto"
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
