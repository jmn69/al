export const rootApi =
  process.env === 'development'
    ? 'http://localhost:4040/api/'
    : 'http://localhost:4040/api/';
