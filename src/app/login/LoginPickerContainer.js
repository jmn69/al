import { connect } from 'react-redux';
import LoginPickerComponent from './LoginPickerComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

export default connect(mapStateToProps)(LoginPickerComponent);
