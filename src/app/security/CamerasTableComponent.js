import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import Toggle from 'react-toggle';

import StyledTable from 'Common/components/StyledTable';
import Text from 'Common/components/Text';
import Loader from 'Common/components/Loader';
import CommonIntl from 'Common/CommonTrad.i';
import getKeyOfObjectByValue from 'Common/utils/getKeyOfObjectByValue';
import ioAlarmEnum from 'Common/enums/ioAlarmEnum';
import SecurityIntl from './Security.i';
import { cameraType } from './types';
import {
  IconActionWrapper,
  IconActionContainer,
  DetectionStatusContainer,
  ToggleWrapper,
  WrapperLoader,
} from './Security.s';
import ConfirmationPopover from 'Common/components/ConfirmationPopover/ConfirmationPopover';

class CamerasTableComponent extends Component {
  static propTypes = {
    cameras: T.arrayOf(cameraType),
    theme: T.any,
    onEditClick: T.func.isRequired,
    intl: T.any,
    deleteCamera: T.func.isRequired,
    deleteCameraIsLoading: T.bool.isRequired,
    deleteCameraError: T.any,
    toggleDetection: T.func.isRequired,
    toggleDetectionIsLoading: T.bool.isRequired,
    toggleDectectionError: T.any,
  };

  state = { cameraIdToDelete: null, currentToggleCameraId: null };

  componentDidUpdate(prevProps) {
    const { deleteCameraIsLoading, deleteCameraError } = this.props;
    const { deleteCameraIsLoading: prevDeleteCameraIsLoading } = prevProps;
    if (
      prevDeleteCameraIsLoading &&
      !deleteCameraIsLoading &&
      !deleteCameraError
    ) {
      this.setState({ cameraIdToDelete: null });
    }
  }

  render() {
    const {
      cameras,
      theme,
      intl,
      onEditClick,
      deleteCameraIsLoading,
      toggleDetectionIsLoading,
    } = this.props;
    const { cameraIdToDelete, currentToggleCameraId } = this.state;

    const camerasRows =
      cameras &&
      Array.isArray(cameras) &&
      cameras.map(camera => (
        <tr key={camera._id}>
          <td>
            <Text>{camera.name}</Text>
          </td>
          <td>
            <Text>{camera.publicDomain}</Text>
          </td>
          <td>
            <Text>{camera.privateIp}</Text>
          </td>
          <td>
            {camera.isOnline === null || camera.isOnline === undefined ? (
              <Text>
                <FormattedMessage {...CommonIntl.Unknown} />
              </Text>
            ) : (
              <Text color={camera.isOnline ? theme.success : theme.accent}>
                <FormattedMessage
                  {...CommonIntl[camera.isOnline ? 'Online' : 'Offline']}
                />
              </Text>
            )}
          </td>
          <td>
            {camera.ioAlarm === null || camera.ioAlarm === undefined ? (
              <Text>
                <FormattedMessage {...CommonIntl.Unknown} />
              </Text>
            ) : (
              <Fragment>
                <DetectionStatusContainer>
                  <ToggleWrapper>
                    <Toggle
                      defaultChecked={camera.ioAlarm === 0 ? false : true}
                      onChange={() =>
                        this.handleToggleDetectionStatus(camera._id)
                      }
                    />
                    <WrapperLoader>
                      {toggleDetectionIsLoading &&
                      currentToggleCameraId === camera._id ? (
                        <Loader />
                      ) : null}
                    </WrapperLoader>
                  </ToggleWrapper>
                  <Text>
                    <FormattedMessage
                      {...SecurityIntl[
                        getKeyOfObjectByValue(ioAlarmEnum, camera.ioAlarm)
                      ]}
                    />
                  </Text>
                </DetectionStatusContainer>
              </Fragment>
            )}
          </td>
          <td>
            <IconActionContainer>
              <IconActionWrapper>
                <FontAwesomeIcon
                  color={theme.darkGray}
                  size="lg"
                  icon={faEdit}
                  onClick={() => onEditClick(camera._id)}
                />
              </IconActionWrapper>
              <ConfirmationPopover
                placement="left"
                button={
                  <IconActionWrapper
                    onClick={() => this.handleDeleteButtonClick(camera._id)}
                  >
                    <FontAwesomeIcon
                      color={theme.accent}
                      size="lg"
                      icon={faTimesCircle}
                    />
                  </IconActionWrapper>
                }
                onYesClick={() => this.handleDeleteYesClick(camera._id)}
                yesIsLoading={deleteCameraIsLoading}
                onNoClick={this.handleDeleteNoClick}
                open={cameraIdToDelete === camera._id}
                text={intl.formatMessage(
                  SecurityIntl.DeleteCameraConfirmation,
                  { camera: camera.name }
                )}
              />
            </IconActionContainer>
          </td>
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
              <FormattedMessage {...CommonIntl.Status} />
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

  handleToggleDetectionStatus = cameraId => {
    if (!this.props.toggleDetectionIsLoading) {
      this.props.toggleDetection(cameraId);
      this.setState({ currentToggleCameraId: cameraId });
    }
  };

  handleDeleteButtonClick = cameraId => {
    if (!this.props.deleteCameraIsLoading) {
      this.setState({ cameraIdToDelete: cameraId });
    }
  };

  handleDeleteYesClick = cameraId => {
    this.props.deleteCamera(cameraId);
  };

  handleDeleteNoClick = () => {
    this.setState({ cameraIdToDelete: null });
  };
}

export default compose(
  injectIntl,
  withTheme
)(CamerasTableComponent);
