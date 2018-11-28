import { setCurrentUser, addNewUser } from 'Common/utils/localStorage';
import makeBasicAPIActions from 'Common/utils/makeBasicAPIActions';
import { rootApi } from '../../../../config/config';
import history from '../../../history';

const login = makeBasicAPIActions(
  'LOGIN',
  (request, success, failure) => formData => {
    return async (dispatch, getState) => {
      dispatch(request());
      let response;
      try {
        response = await fetch(`${rootApi}auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (error) {
        dispatch(failure(error));
        return Promise.reject();
      }
      if (response.ok) {
        try {
          const user = await response.json();
          const { username, id } = user;
          setCurrentUser(user);
          addNewUser({ username, id });
          dispatch(success({ username, id }));
          // TODO: Redirect to initial url if there is one
          history.push('/');
          return Promise.resolve();
        } catch (error) {
          dispatch(failure(error));
          return Promise.reject();
        }
      } else if (response.status === 404) {
        dispatch(failure('The username and password do not match'));
        return Promise.reject();
      } else {
        dispatch(failure('Something went wrong'));
        return Promise.reject();
      }
    };
  }
);

export { login };
