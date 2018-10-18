import React from 'react';
import Input from '../Input/Input';
import { FieldError, FormInputContainer } from './FormAdapters.s';
import T from 'prop-types';

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

export default InputAdapter;
