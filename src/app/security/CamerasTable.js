import React, { Component } from 'react';
import StyledTable from 'Common/components/StyledTable';
import T from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import SecurityIntl from './Security.i';
import { cameraType } from './types';

class SecurityComponent extends Component {
  static propTypes = {
    cameras: T.arrayOf(cameraType),
    theme: T.any,
  };

  render() {
    const { cameras, theme } = this.props;

    const camerasRows =
      cameras &&
      Array.isArray(cameras) &&
      cameras.map(camera => (
        <tr>
          <td>{camera.name}</td>
          <td>{camera.publicDomain}</td>
          <td>{camera.privateIp}</td>
          <td>{camera.isOnline ? 'Online' : 'Offline'}</td>
          <td>{camera.ioAlarm}</td>
          <td>actions</td>
        </tr>
      ));
    return (
      <StyledTable bg={theme.third} bc={theme.third} color={theme.white}>
        <thead>
          <tr>
            <th>
              <FormattedMessage {...SecurityIntl.CameraName} />
            </th>
            <th>
              <FormattedMessage {...SecurityIntl.PublicDomain} />
            </th>
            <th>
              <FormattedMessage {...SecurityIntl.PrivateIp} />
            </th>
            <th>
              <FormattedMessage {...SecurityIntl.Status} />
            </th>
            <th>
              <FormattedMessage {...SecurityIntl.DetectionStatus} />
            </th>
            <th>
              <FormattedMessage {...SecurityIntl.Actions} />
            </th>
          </tr>
        </thead>
        <tbody>{camerasRows}</tbody>
      </StyledTable>
    );
  }
}

export default compose(
  injectIntl,
  withTheme
)(SecurityComponent);
