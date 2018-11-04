import Creators from './actions';
import makeBasicAPIActions from 'Common/utils/makeBasicAPIActions';
import { request as apiRequest } from 'Common/utils/authRequest';

const setSecurityMod = Creators.setSecurityMod;

const fetchCameras = makeBasicAPIActions(
  'CAMERAS',
  (request, success, failure) => formData => {
    return async (dispatch, getState) => {
      dispatch(request());
      const response = await apiRequest({ endpoint: `cameras` });

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

export default {
  setSecurityMod,
  fetchCameras,
};
