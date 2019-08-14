import makeBasicAPIActions from 'Common/utils/makeBasicAPIActions';
import { request as apiRequest } from 'Common/utils/authRequest';
import { toast } from 'react-toastify';

import Creators from './actions';

const setSecurityStatus = Creators.setSecurityStatus;

const fetchCameras = makeBasicAPIActions(
  'FETCH_CAMERAS',
  (request, success, failure) => () => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({ endpoint: `cameras` });
      }
 catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const cameras = await response.json();

          let isLock = false;
          if (Array.isArray(cameras)) {
            cameras.forEach(({ ioAlarm }) => {
              if (ioAlarm >= 1) {
                isLock = true;
              }
            });
          }
          dispatch(setSecurityStatus(isLock));
          dispatch(success(cameras));
          return Promise.resolve();
        }
 catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      }
 else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const createCamera = makeBasicAPIActions(
  'CREATE_CAMERA',
  (request, success, failure) => formData => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `cameras`,
          method: 'POST',
          body: JSON.stringify(formData),
        });
      }
 catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const camera = await response.json();
          dispatch(success(camera));
          dispatch(fetchCameras());
          return Promise.resolve();
        }
 catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      }
 else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const deleteCamera = makeBasicAPIActions(
  'DELETE_CAMERA',
  (request, success, failure) => cameraId => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `cameras/${cameraId}`,
          method: 'DELETE',
        });
      }
 catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const camera = await response.json();
          dispatch(success(camera));
          dispatch(fetchCameras());
          return Promise.resolve();
        }
 catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      }
 else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const toggleDetection = makeBasicAPIActions(
  'TOGGLE_DETECTION_CAMERA',
  (request, success, failure) => cameraId => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `cameras/${cameraId}/toggle-detection`,
        });
      }
 catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          dispatch(success());
          dispatch(fetchCameras());
          return Promise.resolve();
        }
 catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      }
 else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const setSecurityMod = makeBasicAPIActions(
  'SET_SECURITY_MOD',
  (request, success, failure) => lock => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({
          endpoint: `security`,
          method: 'POST',
          body: JSON.stringify({ lock }),
        });
      }
 catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const status = await response.json();
          if (
            status &&
            status.camerasStatus &&
            Array.isArray(status.camerasStatus)
          ) {
            status.camerasStatus.forEach(({ succeed, name, error }) => {
              if (!succeed) {
                toast.error(
                  `The camera (${name}) is not responding with error: ${error}`
                );
              }
            });
          }

          dispatch(success(status));
          dispatch(fetchCameras());
          return Promise.resolve();
        }
 catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      }
 else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

const fetchAlerts = makeBasicAPIActions(
  'FETCH_ALERTS',
  (request, success, failure) => () => {
    return async dispatch => {
      dispatch(request());
      let response;
      try {
        response = await apiRequest({ endpoint: `alert` });
      }
 catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }

      if (response.ok) {
        try {
          const alerts = await response.json();
          dispatch(success(alerts));
          return Promise.resolve();
        }
 catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      }
 else {
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
  fetchAlerts,
};
