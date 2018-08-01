import { connect } from 'react-redux';
import SecurityComponent from './SecurityComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

export default connect(mapStateToProps)(SecurityComponent);
