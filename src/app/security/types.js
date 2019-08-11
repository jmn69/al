import T from 'prop-types';

/* eslint-disable import/prefer-default-export */
export const cameraType = T.shape({
  _id: T.string.isRequired,
  name: T.string.isRequired,
  type: T.number.isRequired,
  publicDomain: T.string.isRequired,
  privateIp: T.string.isRequired,
  pwd: T.string.isRequired,
  user: T.string.isRequired,
  ioAlarm: T.number,
  isOnline: T.bool,
  wsStreamUrl: T.string,
});
