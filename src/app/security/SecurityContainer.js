import { connect } from 'react-redux';
import SecurityComponent from './SecurityComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  const { lock } = state.security.status;
  const { isLoading: isSetSecurityModLoading } = state.security.setSecurityMod;
  const { data, isLoading, error } = state.security.fetchCameras;
  return {
    currentUser,
    lock,
    isLoading,
    error,
    cameras: data,
    isSetSecurityModLoading,
  };
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
