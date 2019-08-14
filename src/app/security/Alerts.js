import React, { useState, Fragment } from 'react';
import { Box } from '@rebass/grid';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import format from 'date-fns/format';
import frenchLocale from 'date-fns/locale/fr';

import { rootApi } from 'Common/config';
import Card from 'Common/components/Card';
import Modal from 'Common/components/Modal';
import ListGroup from 'Common/components/ListGroup';
import Loader from 'Common/components/Loader';
import ListItem from 'Common/components/ListItem';
import Text from 'Common/components/Text';
import { ModalHeader, ModalContent } from 'Common/components/Modal.s';
import AlertsIntl from './Alerts.i';
import {
  CardTitle,
  ListWrapper,
  DateAlertContainer,
  ImageAlertWrapper,
  CardHeaderAlerts,
  CardAlertsContent,
  ListItemWrapper,
  StyledImage,
  ListItemInnerContainer,
  AlertContentContainer,
} from './Security.s';

export default ({ alerts, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentAlertId, setCurrentAlertId] = useState(null);
  const handleAlertItemClick = alertId => {
    setCurrentAlertId(alertId);
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setCurrentAlertId(null);
  };

  const alertItems =
    Array.isArray(alerts) &&
    alerts.map(({ _id, happenedAt, camera, image }) => {
      return (
        <ListItemWrapper key={_id}>
          <ListItem
            onClick={() => handleAlertItemClick(_id)}
            clickable
            padding='none'
          >
            <ListItemInnerContainer>
              <DateAlertContainer>
                <Text color='white'>
                  {format(happenedAt, 'MM/DD/YYYY HH:mm:ss', {
                    locale: frenchLocale,
                  })}
                </Text>
              </DateAlertContainer>
              <AlertContentContainer>
                <Text>{camera.name}</Text>
                <ImageAlertWrapper>
                  {_id && image ? (
                    <StyledImage
                      width='100%'
                      height='100%'
                      src={`${rootApi}alert/s3/image/${_id}`}
                      alt='snapshot'
                    />
                  ) : (
                    <FontAwesomeIcon color='gray' size='2x' icon={faImage} />
                  )}
                </ImageAlertWrapper>
              </AlertContentContainer>
            </ListItemInnerContainer>
          </ListItem>
        </ListItemWrapper>
      );
    });
  return (
    <Fragment>
      <Card>
        <CardHeaderAlerts>
          <Box width={3 / 5}>
            <CardTitle>
              <Text size='large'>
                <FormattedMessage {...AlertsIntl.LatestAlerts} />
              </Text>
            </CardTitle>
          </Box>
        </CardHeaderAlerts>
        <CardAlertsContent alignItems='flex-start' withTitle>
          {isLoading ? (
            <Loader size='3x' />
          ) : (
            <ListWrapper>
              <ListGroup>{alertItems}</ListGroup>
            </ListWrapper>
          )}
        </CardAlertsContent>
      </Card>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalHeader>
          <FormattedMessage {...AlertsIntl.ModalTitle} />
        </ModalHeader>
        <ModalContent>
          <video width='100%' height='100%' autoPlay loop controls>
            <track kind='captions' />
            <source
              src={`${rootApi}alert/s3/video/${currentAlertId}`}
              type='video/mp4'
            />
          </video>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};
