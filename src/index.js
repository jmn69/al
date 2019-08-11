import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import store from './store';
import './externals/react-grid-layout/styles.css';
import './externals/react-resizable/styles.css';
import 'react-awesome-popover/dest/react-awesome-popover.css';
import 'react-toggle/style.css';
import 'react-toastify/dist/ReactToastify.css';
import './css/Init.css';

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
