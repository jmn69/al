import React, { Component, Fragment } from 'react';
import { Box, Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import Card from 'Common/components/Card';
import Loader from 'Common/components/Loader';
import Button from 'Common/components/Button';
import Text from 'Common/components/Text';
import Alerts from './Alerts';
import CamerasTableContainer from './CamerasTableContainer';
import LockWidget from './LockWidget';
import SecurityIntl from './Security.i';
import {
  CardContent,
  IconWrapper,
  CardTitle,
  CardHeaderWrapper,
} from './Security.s';
import { cameraType, alertType } from './types';
import ManageCameraModalContainer from './ManageCameraModalContainer';

class SecurityComponent extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    currentUser: T.string.isRequired,
    setSecurityMod: T.func.isRequired,
    fetchCameras: T.func.isRequired,
    fetchAlerts: T.func.isRequired,
    isLoading: T.bool.isRequired,
    isLoadingAlerts: T.bool.isRequired,
    isSetSecurityModLoading: T.bool.isRequired,
    error: T.any,
    errorAlerts: T.any,
    cameras: T.arrayOf(cameraType),
    alerts: T.arrayOf(alertType),
    theme: T.any.isRequired,
    intl: T.any.isRequired,
  };

  static defaultProps = {
    error: null,
    errorAlerts: null,
    cameras: [],
    alerts: [],
  };

  state = { isOpen: false, initialRenderComplete: false };

  async componentDidMount() {
    const { fetchCameras, fetchAlerts } = this.props;
    fetchCameras();
    fetchAlerts();
  }

  componentDidUpdate(prevProps) {
    const { isLoading } = this.props;
    const { isLoading: prevIsLoading } = prevProps;

    if (prevIsLoading && !isLoading) {
      this.setState({ initialRenderComplete: true });
    }
  }

  render() {
    const {
      lock,
      setSecurityMod,
      theme,
      isLoading,
      cameras,
      isSetSecurityModLoading,
      isLoadingAlerts,
      alerts,
    } = this.props;
    const { isOpen, initialRenderComplete } = this.state;

    return (
      <Fragment>
        {!initialRenderComplete ? (
          <Loader fullPage />
        ) : (
          <Flex justifyContent='center'>
            <Box width={9 / 10}>
              <Flex mb={4}>
                <Box px={2} width={1 / 3}>
                  <LockWidget
                    setSecurityMod={setSecurityMod}
                    lock={lock}
                    isLoading={isSetSecurityModLoading}
                  />
                </Box>
                <Box px={2} width={1 / 3}>
                  <Card>
                    <CardContent>
                      <Box width={2 / 5}>
                        <IconWrapper>
                          <FontAwesomeIcon
                            color='gray'
                            size='5x'
                            icon={faCamera}
                          />
                        </IconWrapper>
                      </Box>
                      <Box width={3 / 5}>
                        <Text
                          color={theme.colors.darkGray}
                          textAlign='center'
                          size='title'
                        >
                          <FormattedMessage {...SecurityIntl.SeeTheCameras} />
                        </Text>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
                <Box px={2} width={1 / 3}>
                  <Alerts alerts={alerts} isLoading={isLoadingAlerts} />
                </Box>
              </Flex>
              <Flex>
                <Box mb={20} px={2} width={1}>
                  <Card>
                    <CardHeaderWrapper>
                      <Flex justifyContent='space-between'>
                        <Box width={1 / 7}>
                          <CardTitle>
                            <Text size='large'>
                              <FormattedMessage
                                {...SecurityIntl.ListOfCameras}
                              />
                            </Text>
                            {isLoading ? <Loader /> : null}
                          </CardTitle>
                        </Box>
                        <Button
                          bg={theme.colors.primary}
                          onClick={this.handleNewCameraClick}
                        >
                          Nouveau
                        </Button>
                      </Flex>
                    </CardHeaderWrapper>
                    <CamerasTableContainer
                      cameras={cameras}
                      onEditClick={this.handleEditClick}
                    />
                  </Card>
                </Box>
              </Flex>
            </Box>
          </Flex>
        )}
        <ManageCameraModalContainer
          isOpen={isOpen}
          onModalClose={this.handleModalClose}
          onCancel={this.handleCancel}
        />
      </Fragment>
    );
  }

  handleEditClick = cameraId => {
    /* eslint-disable no-console */
    console.log(cameraId);
  };

  handleNewCameraClick = () => {
    this.setState({ isOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };
}

export default compose(
  injectIntl,
  withTheme
)(SecurityComponent);
