import types from './types';
import makeBasicAPIReducer from 'Common/utils/makeBasicAPIReducer';
import { combineReducers } from 'redux';

const fetchCamerasReducer = makeBasicAPIReducer(
  types.FETCH_CAMERAS_REQUEST,
  types.FETCH_CAMERAS_SUCCESS,
  types.FETCH_CAMERAS_FAILURE
);

const createCameraReducer = makeBasicAPIReducer(
  types.CREATE_CAMERA_REQUEST,
  types.CREATE_CAMERA_SUCCESS,
  types.CREATE_CAMERA_FAILURE
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
  fetchCameras: fetchCamerasReducer,
  createCamera: createCameraReducer,
});

export default rootSecurityReducer;
