import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from '../auth/redux/reducers';
import localeReducer from '../locale/reducer';
import securityReducer from '../app/security/redux/reducers';
import loginReducer from '../app/login/redux/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  locale: localeReducer,
  security: securityReducer,
  login: loginReducer,
});

export default rootReducer;
