/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import { setTokens, getCurrentUser } from './localStorage';
import { rootApi } from '../../../config/config';
import history from '../../history';

let refreshingTokens = false;
const refreshToken = async user => {
  if (refreshingTokens) {
    console.log('Already refresh the token');
    return Promise.resolve(null);
  }
  const url = `${rootApi}auth/token`;

  refreshingTokens = true;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken: user.refreshToken }),
  });
  refreshingTokens = false;
  if (response.status !== 200) {
    history.push('/login');
    return Promise.resolve(false);
  }
  const data = await response.json();
  setTokens(user.id, data.accessToken, data.refreshToken);
  return Promise.resolve(true);
};

let _requestID = 0;

export const request = async options => {
  const currentUser = getCurrentUser();
  if (!currentUser || !currentUser.accessToken) {
    history.push('/login');
    return;
  }

  const requestID = ++_requestID;
  const { root, endpoint, method, ...restOptions } = options;
  const url = `${root || rootApi}${endpoint}`;
  console.log(`Request #${requestID}`, url, options);
  let response = null;
  try {
    response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'x-access-token': currentUser.accessToken,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      ...restOptions,
    });
  }
 catch (e) {
    return Promise.reject(e);
  }
  const unauthentified = response.status === 401;
  if (unauthentified && _requestID <= 3) {
    try {
      const retry = await refreshToken(currentUser);
      if (retry) {
        return await request(options);
      }
    }
 catch (e) {
      return Promise.reject(e);
    }
  }
 else if (response.status >= 400) {
    Promise.reject(response);
  }
  return response;
};
