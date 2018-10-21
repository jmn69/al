import { connect } from 'react-redux';
import LoginFormComponent from './LoginFormComponent';
import { login } from './redux/operations';

const mapStateToProps = state => {
  const { error, isLoading } = state.login;
  return {
    error,
    isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: formData => dispatch(login(formData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
