import { connect } from 'react-redux';
import SecurityComponent from './SecurityComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  const { lock } = state.security.status;
  const { data, isLoading, error } = state.security.cameras;
  return { currentUser, lock, isLoading, error, cameras: data };
};

const mapDispatchToProps = dispatch => {
  return {
    setSecurityMod: mod => dispatch(securityOperations.setSecurityMod(mod)),
    fetchCameras: () => dispatch(securityOperations.fetchCameras()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecurityComponent);
