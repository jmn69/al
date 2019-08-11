import { connect } from 'react-redux';
import ToolbarComponent from './ToolbarComponent';
import { changeLocale } from '../../locale/action';

const mapStateToProps = state => {
  return {
    locale: state.locale.locale,
  };
};

const mapDispatchToProps = dispatch => ({
  changeLocale: locale => dispatch(changeLocale(locale)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarComponent);
