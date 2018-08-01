import { combineReducers } from 'redux';
import appReducer from './appReducer.js';
import localeReducer from './locale/reducer';

const rootReducer = combineReducers({
  app: appReducer,
  locale: localeReducer,
});

export default rootReducer;
