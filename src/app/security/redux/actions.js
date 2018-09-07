import types from './types.js';

const setSecurityMod = mod => ({
  type: types.SET_SECURITY_MOD,
  payload: mod,
});

export default {
  setSecurityMod,
};
