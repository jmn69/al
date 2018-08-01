import { connect } from 'react-redux';
import DashboardComponent from './DashboardComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

export default connect(mapStateToProps)(DashboardComponent);
