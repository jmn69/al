import types from './types';

const INITIAL_STATE = {
  lock: false,
};
const securityReducer = (state = INITIAL_STATE, action) => {
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

export default securityReducer;
