const path = require('path');

module.exports = {
  alias: {
    // Support React Native Web
    // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    'react-native': 'react-native-web',
    Common: path.resolve(__dirname, '../src/common/'),
    App: path.resolve(__dirname, '../src/app/'),
  },
};
