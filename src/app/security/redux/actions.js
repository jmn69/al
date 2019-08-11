import types from './types';

const setSecurityMod = mod => ({
  type: types.SET_SECURITY_MOD,
  payload: mod,
});

export default {
  setSecurityMod,
};
