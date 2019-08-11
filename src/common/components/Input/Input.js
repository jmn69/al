import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import {
  Label,
  CharactersMax,
  Input as InputStyled,
  CharactersMaxContainer,
} from './Input.s';

export default class Input extends Component {
  static propTypes = {
    onChange: T.func,
    onFocus: T.func,
    onBlur: T.func,
    value: T.oneOfType([T.string, T.number]),
    name: T.string,
    id: T.string,
    type: T.string,
    placeholder: T.string,
    readOnly: T.bool,
    charactersMax: T.number,
    label: T.string,
    required: T.bool,
    error: T.any,
    touched: T.bool,
    onClick: T.func,
  };

  static defaultProps = {
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    value: '',
    name: '',
    id: '',
    type: '',
    charactersMax: null,
    label: '',
    required: false,
    error: null,
    touched: false,
    onClick: () => {},
    placeholder: '',
    readOnly: false,
  };

  state = {
    /* eslint-disable-next-line react/destructuring-assignment */
    currentCharactersNumber: this.props.value ? this.props.value.length : 0,
  };

  render() {
    const {
      name,
      id,
      type,
      onFocus,
      onBlur,
      value,
      placeholder,
      required,
      error,
      touched,
      readOnly,
      onClick,
    } = this.props;

    return (
      <Fragment>
        {this.renderLabel()}
        <InputStyled
          error={!!error && touched}
          name={name}
          id={id}
          type={type || 'text'}
          onChange={this.handleChange}
          onFocus={onFocus}
          onClick={onClick}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
        />
        {this.renderCharactersMax()}
      </Fragment>
    );
  }

  handleChange = e => {
    const { onChange, charactersMax } = this.props;

    // if there is a max character constraint on the field, we
    // call onChange method only if it has not been reached
    if (charactersMax) {
      const currentCharactersNumber = e.target.value.length;
      if (currentCharactersNumber <= charactersMax) {
        this.setState({ currentCharactersNumber });
        onChange(e);
      }
    }
 else {
      onChange(e);
    }
  };

  renderLabel() {
    const { label, required } = this.props;
    let labelRequired = label;
    if (required) {
      labelRequired += '*';
    }
    return label ? <Label>{labelRequired}</Label> : null;
  }

  renderCharactersMax() {
    const { charactersMax } = this.props;
    const { currentCharactersNumber } = this.state;
    return charactersMax ? (
      <CharactersMaxContainer>
        <CharactersMax>
          {`${currentCharactersNumber}/${charactersMax}`}
        </CharactersMax>
      </CharactersMaxContainer>
    ) : null;
  }
}
