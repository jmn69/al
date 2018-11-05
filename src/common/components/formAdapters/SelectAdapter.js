import React, { Fragment } from 'react';
import { FieldError } from './FormAdapters.s';
import Select from '../Select/Select';
import T from 'prop-types';

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
    <Fragment>
      <Select
        options={options}
        value={options.filter(({ value }) => value === selectedValue)}
        onChange={selectedOption =>
          onChange(selectedOption ? selectedOption.value : null)
        }
        {...rest}
      />
      {meta.touched && meta.error && <FieldError>{meta.error}</FieldError>}
    </Fragment>
  );
};

SelectAdapter.propTypes = {
  input: T.any,
  meta: T.any,
  onError: T.func,
  options: T.any,
};

export default SelectAdapter;
