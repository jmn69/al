import { connect } from 'react-redux';
import DashboardComponent from './DashboardComponent';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

const DashboardContainer = connect(mapStateToProps)(DashboardComponent);

export default DashboardContainer;
