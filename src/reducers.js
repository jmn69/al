import { combineReducers } from 'redux';
import appReducer from './appReducer.js';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
