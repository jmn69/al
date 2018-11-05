import { connect } from 'react-redux';
import ManageCameraModalComponent from './ManageCameraModalComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  return { currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    setSecurityMod: mod => dispatch(securityOperations.setSecurityMod(mod)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCameraModalComponent);
