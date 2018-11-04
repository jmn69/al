import types from './types';
import makeBasicAPIReducer from 'Common/utils/makeBasicAPIReducer';
import { combineReducers } from 'redux';

const camerasReducer = makeBasicAPIReducer(
  types.CAMERAS_REQUEST,
  types.CAMERAS_SUCCESS,
  types.CAMERAS_FAILURE
);

const INITIAL_STATE = {
  lock: false,
};
const securityStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SECURITY_MOD: {
      const { payload } = action;
      return {
        ...state,
        lock: payload,
      };
    }

    default:
      return state;
  }
};

const rootSecurityReducer = combineReducers({
  status: securityStatusReducer,
  cameras: camerasReducer,
});

export default rootSecurityReducer;
