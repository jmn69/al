import { connect } from 'react-redux';
import LoginFormComponent from './LoginFormComponent';
import { login } from './redux/operations';
import { authOperations } from '../../auth/redux';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  const { error, isLoading } = state.login;
  const { isAuthenticated, hasInit, authCheckIsLoading } = state.auth;
  return {
    currentUser,
    error,
    isLoading,
    isAuthenticated,
    hasInit,
    authCheckIsLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: formData => dispatch(login(formData)),
    authCheck: () => dispatch(authOperations.authCheck()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
