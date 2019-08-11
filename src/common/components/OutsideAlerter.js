import React, { Component } from 'react';
import T from 'prop-types';

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    const { children } = this.props;
    return <div ref={this.setWrapperRef}>{children}</div>;
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside = event => {
    const { onOutsideClick } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      onOutsideClick();
    }
  };
}

OutsideAlerter.propTypes = {
  children: T.element.isRequired,
  onOutsideClick: T.func.isRequired,
};
