import React from 'react';
import { FormattedMessage } from 'react-intl';
import CommonIntl from 'Common/CommonTrad.i';

export default value =>
  value && value.trim() ? (
    undefined
  ) : (
    <FormattedMessage {...CommonIntl.FieldRequired} />
  );
