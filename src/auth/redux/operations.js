import { getCurrentUser } from '../../common/utils/localStorage';
import { request } from '../../common/utils/authRequest';

import {
  setIsAuthenticated,
  setAuthCheckIsLoading,
  initComplete,
} from './actions';

const authCheck = () => {
  return async (dispatch, getState) => {
    dispatch(setAuthCheckIsLoading(true));
    const user = getCurrentUser();
    if (!user) {
      return Promise.all([
        dispatch(setIsAuthenticated(false)),
        dispatch(setAuthCheckIsLoading(false)),
        dispatch(initComplete()),
      ]);
    }

    const response = await request({ endpoint: `users/${user.id}` });
    if (!response || response.status !== 200) {
      return Promise.all([
        dispatch(setIsAuthenticated(false)),
        dispatch(setAuthCheckIsLoading(false)),
        dispatch(initComplete()),
      ]);
    }

    return Promise.all([
      dispatch(setIsAuthenticated(true)),
      dispatch(setAuthCheckIsLoading(false)),
      dispatch(initComplete()),
    ]);
  };
};
export default {
  authCheck,
};
