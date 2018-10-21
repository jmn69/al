// TODO: return a value to handle success or error

export const isLocalStorageSupported = () => {
  return !!window.localStorage;
};

/**
 * Classe definition for User in local storage
 * @class User
 * @property {string} id
 * @property {string} username
 */

/**
 * return users in local storage
 * @returns {Users}
 */
export const getUsers = () => {
  const usersFromLS = localStorage.getItem('users');
  return usersFromLS ? JSON.parse(usersFromLS) : [];
};

/**
 * set users in local storage
 * @property {Users}
 */
export const setUsers = users => {
  localStorage.setItem('users', JSON.stringify(users));
};

export const addNewUser = newUser => {
  const users = getUsers();
  if (!users || !Array.isArray(users) || users.length === 0) {
    setUsers([newUser]);
  }
  const tempUsers = users.filter(user => user.id !== newUser.id);
  setUsers([...tempUsers, ...[newUser]]);
};

export const findUser = userId => {
  const users = getUsers();
  if (!users || !Array.isArray(users) || users.length === 0) {
    throw new Error(
      'Can not find user when there is no users in local storage. Should not happen bro'
    );
  }
  return users.find(user => user.id === userId);
};

export const setTokens = (accessToken, refreshToken) => {
  const userToUpdate = getCurrentUser();
  if (!userToUpdate) {
    throw new Error('There is not current user in local storage');
  }
  const updatedUser = { ...userToUpdate, accessToken, refreshToken };
  setCurrentUser(updatedUser);
};

export const switchCurrentUser = (newCurrentUserId, newCurrentUserName) => {
  const userToUpdate = getCurrentUser();
  if (!userToUpdate) {
    throw new Error('There is not current user in local storage');
  }
  const updatedUser = {
    ...userToUpdate,
    id: newCurrentUserId,
    userName: newCurrentUserName,
  };
  setCurrentUser(updatedUser);
};

/**
 * Classe definition for a CurrentUser in local storage
 * @class CurrentUser
 * @property {string} id
 * @property {string} username
 * @property {string} refreshToken
 * @property {string} accessToken
 */

export const getCurrentUser = () => {
  const currentUserFromLS = localStorage.getItem('currentUser');
  return currentUserFromLS ? JSON.parse(currentUserFromLS) : {};
};

export const setCurrentUser = user => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};
