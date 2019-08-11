import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { Modal as StyledModal, Fixed } from './Modal.s';
import OutsideAlerter from './OutsideAlerter';

export default class Modal extends Component {
  static propTypes = {
    children: T.oneOfType([T.element, T.arrayOf(T.element)]).isRequired,
    width: T.string,
    onClose: T.func.isRequired,
    isOpen: T.bool.isRequired,
  };

  static defaultProps = {
    width: '80%',
  };

  render() {
    const { children, width, isOpen } = this.props;

    return isOpen ? (
      <Fragment>
        <Fixed top={0} right={0} bottom={0} left={0} />
        <OutsideAlerter onOutsideClick={this.handleOutsideClick}>
          <StyledModal width={width}>{children}</StyledModal>
        </OutsideAlerter>
      </Fragment>
    ) : null;
  }

  handleOutsideClick = () => {
    const { onClose } = this.props;
    onClose();
  };
}
