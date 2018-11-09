import { connect } from 'react-redux';
import CamerasTableComponent from './CamerasTableComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const {
    isLoading: deleteCameraIsLoading,
    error: deleteCameraError,
  } = state.security.deleteCamera;
  return {
    deleteCameraIsLoading: deleteCameraIsLoading,
    deleteCameraError: deleteCameraError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCamera: cameraId =>
      dispatch(securityOperations.deleteCamera(cameraId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CamerasTableComponent);
