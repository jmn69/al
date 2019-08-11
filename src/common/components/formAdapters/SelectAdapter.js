import React from 'react';
import T from 'prop-types';
import { FieldError, FormInputContainer } from './FormAdapters.s';
import Select from '../Select/Select';

const SelectAdapter = ({
  input: { onChange, value },
  meta,
  onError,
  options,
  ...rest
}) => {
  if (meta.touched && meta.error && onError) {
    onError();
  }
  const selectedValue = value;
  return (
    <FormInputContainer>
      <Select
        error={meta.error}
        touched={meta.touched}
        options={options}
        value={options.filter(({ value }) => value === selectedValue)}
        onChange={selectedOption =>
          onChange(selectedOption ? selectedOption.value : null)
        }
        {...rest}
      />
      {meta.touched && meta.error && <FieldError>{meta.error}</FieldError>}
    </FormInputContainer>
  );
};

SelectAdapter.propTypes = {
  input: T.any,
  meta: T.any,
  onError: T.func,
  options: T.any,
};

SelectAdapter.defaultProps = {
  input: null,
  meta: null,
  onError: null,
  options: null,
};

export default SelectAdapter;
