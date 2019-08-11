import { connect } from 'react-redux';
import ManageCameraModalComponent from './ManageCameraModalComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const {
    isLoading: createCameraIsLoading,
    error: createCameraError,
  } = state.security.createCamera;
  return {
    createCameraIsLoading,
    createCameraError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCamera: camera => dispatch(securityOperations.createCamera(camera)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCameraModalComponent);
