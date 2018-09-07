import React, { Component } from 'react';
import Card from 'Common/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { CardContent } from './Security.s';
import LockWidgetIntl from './LockWidget.i';

export default class LockWidget extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    setSecurityMod: T.func.isRequired,
  };

  render() {
    const { lock, setSecurityMod } = this.props;
    return lock ? (
      <Card
        onClick={() => setSecurityMod(!lock)}
        background="rgba(255, 121, 97, 0.1)"
      >
        <CardContent>
          <FontAwesomeIcon color="#e53935" size="5x" icon={faLock} />
          <FormattedMessage {...LockWidgetIntl.SecurityActivated} />
        </CardContent>
      </Card>
    ) : (
      <Card
        onClick={() => setSecurityMod(!lock)}
        background="rgba(128, 226, 126, 0.1)"
      >
        <CardContent>
          <FontAwesomeIcon color="#4caf50" size="5x" icon={faUnlock} />
          <FormattedMessage {...LockWidgetIntl.SecurityDeactivated} />
          test
        </CardContent>
      </Card>
    );
  }
}
