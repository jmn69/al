import types from './types';

const INITIAL_STATE = {
  isAuthenticated: false,
  authCheckIsLoading: false,
  hasInit: false,
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_AUTH_CHECK_IS_LOADING:
      return {
        ...state,
        authCheckIsLoading: action.payload,
      };
    case types.SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case types.INIT_COMPLETE:
      return {
        ...state,
        hasInit: true,
      };
    default:
      return state;
  }
};

export default authReducer;
