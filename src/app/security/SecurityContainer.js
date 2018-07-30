import { connect } from 'react-redux';
import SecurityComponent from './SecurityComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

const SecurityContainer = connect(mapStateToProps)(SecurityComponent);

export default SecurityContainer;
