import makeBasicAPIReducer from 'Common/utils/makeBasicAPIReducer';
import types from './types';

export default makeBasicAPIReducer(
  types.LOGIN_REQUEST,
  types.LOGIN_SUCCESS,
  types.LOGIN_FAILURE
);
