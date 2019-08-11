import { connect } from 'react-redux';
import CamerasTableComponent from './CamerasTableComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const {
    isLoading: deleteCameraIsLoading,
    error: deleteCameraError,
  } = state.security.deleteCamera;
  const {
    isLoading: toggleDetectionIsLoading,
    error: toggleDetectionError,
  } = state.security.toggleDetectionCamera;
  return {
    toggleDetectionIsLoading,
    toggleDetectionError,
    deleteCameraIsLoading,
    deleteCameraError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteCamera: cameraId =>
      dispatch(securityOperations.deleteCamera(cameraId)),
    toggleDetection: cameraId =>
      dispatch(securityOperations.toggleDetection(cameraId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CamerasTableComponent);
