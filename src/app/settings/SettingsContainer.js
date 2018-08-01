import { connect } from 'react-redux';
import SettingsComponent from './SettingsComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

export default connect(mapStateToProps)(SettingsComponent);
