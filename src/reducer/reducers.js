import { combineReducers } from 'redux';
import appReducer from './appReducer.js';
import localeReducer from '../locale/reducer';
import securityReducer from '../app/security/redux/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  locale: localeReducer,
  security: securityReducer,
});

export default rootReducer;
