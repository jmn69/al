import React, { Component, Fragment } from 'react';
import { Box, Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faImage } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import { compose } from 'redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { withTheme } from 'styled-components';

import Card from 'Common/components/Card';
import ListGroup from 'Common/components/ListGroup';
import ListItem from 'Common/components/ListItem';
import Loader from 'Common/components/Loader';
import Button from 'Common/components/Button';
import Text from 'Common/components/Text';
import CamerasTableContainer from './CamerasTableContainer';
import LockWidget from './LockWidget';
import SecurityIntl from './Security.i';
import {
  CardContent,
  IconWrapper,
  CardTitle,
  ListWrapper,
  DateAlertWrapper,
  CameraAlertWrapper,
  ImageAlertWrapper,
  CardHeaderWrapper,
  CardHeaderAlerts,
  CardAlertsContent,
} from './Security.s';
import { cameraType } from './types';
import ManageCameraModalContainer from './ManageCameraModalContainer';

class SecurityComponent extends Component {
  static propTypes = {
    lock: T.bool.isRequired,
    currentUser: T.string.isRequired,
    setSecurityMod: T.func.isRequired,
    fetchCameras: T.func.isRequired,
    isLoading: T.bool.isRequired,
    isSetSecurityModLoading: T.bool.isRequired,
    error: T.any,
    cameras: T.arrayOf(cameraType),
    theme: T.any.isRequired,
    intl: T.any.isRequired,
  };

  static defaultProps = {
    error: null,
    cameras: [],
  };

  state = { isOpen: false, initialRenderComplete: false };

  async componentDidMount() {
    const { fetchCameras } = this.props;
    fetchCameras();
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
                  <Card>
                    <CardHeaderAlerts>
                      <Box width={3 / 5}>
                        <CardTitle>
                          <Text size='large'>
                            <FormattedMessage {...SecurityIntl.LatestAlerts} />
                          </Text>
                        </CardTitle>
                      </Box>
                    </CardHeaderAlerts>
                    <CardAlertsContent alignItems='flex-start' withTitle>
                      <ListWrapper>
                        <ListGroup>
                          <ListItem padding='0.5rem 1.25rem'>
                            <DateAlertWrapper>
                              <Text color='white'>10/09/18 à 10:00:34</Text>
                            </DateAlertWrapper>
                            <CameraAlertWrapper>
                              <Text>Camera 1</Text>
                            </CameraAlertWrapper>
                            <ImageAlertWrapper>
                              <FontAwesomeIcon
                                color='gray'
                                size='2x'
                                icon={faImage}
                              />
                            </ImageAlertWrapper>
                          </ListItem>
                          <ListItem padding='0.5rem 1.25rem'>
                            <DateAlertWrapper>
                              <Text color='white'>07/09/18 à 11:03:20</Text>
                            </DateAlertWrapper>
                            <CameraAlertWrapper>
                              <Text>Camera 2</Text>
                            </CameraAlertWrapper>
                            <ImageAlertWrapper>
                              <FontAwesomeIcon
                                color='gray'
                                size='2x'
                                icon={faImage}
                              />
                            </ImageAlertWrapper>
                          </ListItem>
                        </ListGroup>
                      </ListWrapper>
                    </CardAlertsContent>
                  </Card>
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
