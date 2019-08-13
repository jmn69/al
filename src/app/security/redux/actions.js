import types from './types';

const setSecurityStatus = lock => ({
  type: types.SET_SECURITY_STATUS,
  payload: lock,
});

export default {
  setSecurityStatus,
};
