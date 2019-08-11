import types from './types';

export const setIsAuthenticated = isAuth => ({
  type: types.SET_IS_AUTHENTICATED,
  payload: isAuth,
});

export const setAuthCheckIsLoading = isLoading => ({
  type: types.SET_AUTH_CHECK_IS_LOADING,
  payload: isLoading,
});

export const initComplete = () => ({
  type: types.INIT_COMPLETE,
});
