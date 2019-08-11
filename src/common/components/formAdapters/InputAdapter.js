import React from 'react';
import T from 'prop-types';
import Input from '../Input/Input';
import { FieldError, FormInputContainer } from './FormAdapters.s';

const InputAdapter = ({ input, meta, onError, ...rest }) => {
  if (meta.touched && meta.error && onError) {
    onError();
  }
  return (
    <FormInputContainer>
      <Input {...input} error={meta.error} touched={meta.touched} {...rest} />
      {meta.touched && meta.error && <FieldError>{meta.error}</FieldError>}
    </FormInputContainer>
  );
};

InputAdapter.propTypes = {
  input: T.any,
  meta: T.any,
  onError: T.func,
};

InputAdapter.defaultProps = {
  input: null,
  meta: null,
  onError: null,
};

export default InputAdapter;
