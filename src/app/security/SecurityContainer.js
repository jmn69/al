import { connect } from 'react-redux';
import SecurityComponent from './SecurityComponent';
import { securityOperations } from './redux';

const mapStateToProps = state => {
  const { currentUser } = state.app;
  const { lock } = state.security;
  return { currentUser, lock };
};

const mapDispatchToProps = dispatch => {
  return {
    setSecurityMod: mod => dispatch(securityOperations.setSecurityMod(mod)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecurityComponent);
