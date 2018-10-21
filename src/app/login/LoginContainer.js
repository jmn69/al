import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';
import { authOperations } from '../../auth/redux';

const mapStateToProps = state => {
  const { isAuthenticated, hasInit, authCheckIsLoading } = state.auth;
  return {
    isAuthenticated,
    hasInit,
    authCheckIsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authCheck: () => dispatch(authOperations.authCheck()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
