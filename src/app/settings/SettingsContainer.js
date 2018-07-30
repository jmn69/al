import { connect } from 'react-redux';
import SettingsComponent from './SettingsComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

const SettingsContainer = connect(mapStateToProps)(SettingsComponent);

export default SettingsContainer;
