import { connect } from 'react-redux';
import SecurityComponent from './SecurityComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  const { lock } = state.security.status;
  const { isLoading: isSetSecurityModLoading } = state.security.setSecurityMod;
  const { data, isLoading, error } = state.security.fetchCameras;
  const {
    data: alerts,
    isLoading: isLoadingAlerts,
    error: errorAlerts,
  } = state.security.fetchAlerts;
  return {
    currentUser,
    lock,
    isLoading,
    error,
    cameras: data,
    isSetSecurityModLoading,
    alerts,
    isLoadingAlerts,
    errorAlerts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSecurityMod: mod => dispatch(securityOperations.setSecurityMod(mod)),
    fetchCameras: () => dispatch(securityOperations.fetchCameras()),
    fetchAlerts: () => dispatch(securityOperations.fetchAlerts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecurityComponent);
