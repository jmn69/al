import types from './types';
import makeBasicAPIReducer from 'Common/utils/makeBasicAPIReducer';

export default makeBasicAPIReducer(
  types.LOGIN_REQUEST,
  types.LOGIN_SUCCESS,
  types.LOGIN_FAILURE
);
