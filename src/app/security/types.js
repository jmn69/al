import T from 'prop-types';

export const cameraType = T.shape({
  _id: T.string.isRequired,
  name: T.string.isRequired,
  type: T.number.isRequired,
  publicDomain: T.string.isRequired,
  privateIp: T.string.isRequired,
  httpsPort: T.string.isRequired,
  rtspPort: T.string.isRequired,
  pwd: T.string.isRequired,
  user: T.string.isRequired,
  ioAlarm: T.number,
  isOnline: T.bool,
  wsStreamUrl: T.string,
});

export const alertType = T.shape({
  _id: T.string.isRequired,
  camera: cameraType,
  happenedAt: T.string,
  imageUrl: T.string,
  videoUrl: T.string,
});
