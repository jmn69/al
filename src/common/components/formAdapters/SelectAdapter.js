import React, { Fragment } from 'react';
import { FieldError } from './FormAdapters.s';
import Select from 'Common/components/Select';
import T from 'prop-types';

const SelectAdapter = ({
  input: { onChange, value },
  meta,
  onError,
  ...rest
}) => {
  if (meta.touched && meta.error && onError) {
    onError();
  }
  return (
    <Fragment>
      <Select
        value={value}
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
};

export default SelectAdapter;
