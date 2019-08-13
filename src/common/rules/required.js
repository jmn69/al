import React from 'react';
import { FormattedMessage } from 'react-intl';
import CommonIntl from 'Common/CommonTrad.i';

export default value =>
  value ? undefined : <FormattedMessage {...CommonIntl.FieldRequired} />;
