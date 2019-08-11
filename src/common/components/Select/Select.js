import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { Label, SelectStyled } from './Select.s';

export default class Select extends Component {
  static propTypes = {
    label: T.string,
    required: T.bool,
    error: T.any,
    touched: T.bool,
  };

  static defaultProps = {
    label: '',
    required: false,
    error: null,
    touched: false,
  };

  render() {
    const { error, touched, ...rest } = this.props;

    return (
      <Fragment>
        {this.renderLabel()}
        <SelectStyled
          classNamePrefix='react-select'
          error={!!error && touched}
          {...rest}
        />
      </Fragment>
    );
  }

  renderLabel() {
    const { label, required } = this.props;
    let labelRequired = label;
    if (required) {
      labelRequired += '*';
    }
    return label ? <Label>{labelRequired}</Label> : null;
  }
}
