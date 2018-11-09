import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';
import store from './store';
import './externals/react-grid-layout/styles.css';
import './externals/react-resizable/styles.css';
import 'react-awesome-popover/dest/react-awesome-popover.css';

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
    <Root />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
