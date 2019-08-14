import makeBasicAPIReducer from 'Common/utils/makeBasicAPIReducer';
import { combineReducers } from 'redux';
import types from './types';

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

const deleteCameraReducer = makeBasicAPIReducer(
  types.DELETE_CAMERA_REQUEST,
  types.DELETE_CAMERA_SUCCESS,
  types.DELETE_CAMERA_FAILURE
);

const toggleDetectionCameraReducer = makeBasicAPIReducer(
  types.TOGGLE_DETECTION_CAMERA_REQUEST,
  types.TOGGLE_DETECTION_CAMERA_SUCCESS,
  types.TOGGLE_DETECTION_CAMERA_FAILURE
);

const setSecurityModReducer = makeBasicAPIReducer(
  types.SET_SECURITY_MOD_REQUEST,
  types.SET_SECURITY_MOD_SUCCESS,
  types.SET_SECURITY_MOD_FAILURE
);

const fetchAlertsReducer = makeBasicAPIReducer(
  types.FETCH_ALERTS_REQUEST,
  types.FETCH_ALERTS_SUCCESS,
  types.FETCH_ALERTS_FAILURE
);

const INITIAL_STATE = {
  lock: false,
};
const securityStatusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_SECURITY_STATUS: {
      return {
        ...state,
        lock: action.payload,
      };
    }

    default:
      return state;
  }
};

const rootSecurityReducer = combineReducers({
  status: securityStatusReducer,
  setSecurityMod: setSecurityModReducer,
  fetchCameras: fetchCamerasReducer,
  createCamera: createCameraReducer,
  deleteCamera: deleteCameraReducer,
  toggleDetectionCamera: toggleDetectionCameraReducer,
  fetchAlerts: fetchAlertsReducer,
});

export default rootSecurityReducer;
