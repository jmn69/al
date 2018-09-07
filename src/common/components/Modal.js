import React, { Component, Fragment } from 'react';
import { Modal as RebassModal } from './Modal.s';
import { Fixed } from 'rebass/dist/Position';
import T from 'prop-types';
import OutsideAlerter from '../../common/components/OutsideAlerter';

export default class Modal extends Component {
  static propTypes = {
    children: T.element.isRequired,
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
          <RebassModal width={width}>{children}</RebassModal>
        </OutsideAlerter>
      </Fragment>
    ) : null;
  }

  handleOutsideClick = () => {
    this.props.onClose();
  };
}
