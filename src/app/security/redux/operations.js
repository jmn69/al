import Creators from './actions';
import makeBasicAPIActions from 'Common/utils/makeBasicAPIActions';
import { request as apiRequest } from 'Common/utils/authRequest';

const setSecurityMod = Creators.setSecurityMod;

const fetchCameras = makeBasicAPIActions(
  'FETCH_CAMERAS',
  (request, success, failure) => formData => {
    return async (dispatch, getState) => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({ endpoint: `cameras` });
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const cameras = await response.json();
          dispatch(success(cameras));
          return Promise.resolve();
        } catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      } else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const createCamera = makeBasicAPIActions(
  'CREATE_CAMERA',
  (request, success, failure) => formData => {
    return async (dispatch, getState) => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `cameras`,
          method: 'POST',
          body: JSON.stringify(formData),
        });
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const camera = await response.json();
          dispatch(success(camera));
          dispatch(fetchCameras());
          return Promise.resolve();
        } catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      } else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const deleteCamera = makeBasicAPIActions(
  'DELETE_CAMERA',
  (request, success, failure) => cameraId => {
    return async (dispatch, getState) => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `cameras/${cameraId}`,
          method: 'DELETE',
        });
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const camera = await response.json();
          dispatch(success(camera));
          dispatch(fetchCameras());
          return Promise.resolve();
        } catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      } else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const toggleDetection = makeBasicAPIActions(
  'TOGGLE_DETECTION_CAMERA',
  (request, success, failure) => cameraId => {
    return async (dispatch, getState) => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `cameras/${cameraId}/toggle-detection`,
        });
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          dispatch(success());
          dispatch(fetchCameras());
          return Promise.resolve();
        } catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      } else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

export default {
  setSecurityMod,
  fetchCameras,
  createCamera,
  deleteCamera,
  toggleDetection,
};
