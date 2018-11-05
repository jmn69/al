import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import T from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { withTheme } from 'styled-components';
import { compose } from 'redux';
import SecurityIntl from './Security.i';
import { FormContainer, FormField } from './Security.s';
import Modal from 'Common/components/Modal';
// import Loader from 'Common/components/Loader';
import { Form, Field } from 'react-final-form';
import Button from 'Common/components/Button';
import ButtonOutline from 'Common/components/ButtonOutline';
import {
  ModalHeader,
  ModalContent,
  ModalFooter,
} from 'Common/components/Modal.s';
import CommonIntl from 'Common/CommonTrad.i';
import InputAdapter from 'Common/components/formAdapters/InputAdapter';
import SelectAdapter from 'Common/components/formAdapters/SelectAdapter';

const cameraTypeToSelectOption = intl => {
  return [
    { value: 1, label: intl.formatMessage(SecurityIntl.C1) },
    { value: 2, label: intl.formatMessage(SecurityIntl.C2) },
  ];
};

class ManageCameraModalComponent extends Component {
  static propTypes = {
    intl: T.any.isRequired,
    theme: T.any,
    isOpen: T.bool.isRequired,
    onModalClose: T.func.isRequired,
    onCancel: T.func.isRequired,
  };

  render() {
    const { intl, isOpen, onModalClose, onCancel, theme } = this.props;

    return (
      <Modal isOpen={isOpen} onClose={onModalClose}>
        <ModalHeader>
          <FormattedMessage {...SecurityIntl.CreateCameraModalTitle} />
        </ModalHeader>
        <ModalContent>
          <Form
            onSubmit={this.handleSubmit}
            validate={values => {
              const errors = {};
              // if (!values.username) {
              //   errors.username = (
              //     <FormattedMessage {...CommonIntl.FieldRequired} />
              //   );
              // }
              // if (values.username && !values.username.trim()) {
              //   errors.username = (
              //     <FormattedMessage {...CommonIntl.FieldRequired} />
              //   );
              // }
              return errors;
            }}
            render={({ handleSubmit, values, mutators }) => (
              <FormContainer id="manageCameraForm" onSubmit={handleSubmit}>
                <Flex
                  alignItems="center"
                  justifyContent="space-around"
                  flexWrap="wrap"
                >
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="name"
                        component={InputAdapter}
                        label={intl.formatMessage(CommonIntl.Name)}
                        type="text"
                        placeholder={intl.formatMessage(
                          CommonIntl.NamePlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="type"
                        component={SelectAdapter}
                        options={cameraTypeToSelectOption(intl)}
                        label={intl.formatMessage(CommonIntl.Type)}
                        placeholder={intl.formatMessage(
                          CommonIntl.TypePlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="publicDomain"
                        component={InputAdapter}
                        label={intl.formatMessage(SecurityIntl.PublicDomain)}
                        type="text"
                        placeholder={intl.formatMessage(
                          SecurityIntl.PublicDomainPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="privateIp"
                        component={InputAdapter}
                        label={intl.formatMessage(SecurityIntl.PrivateIp)}
                        type="text"
                        placeholder={intl.formatMessage(
                          SecurityIntl.PrivateIpPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="user"
                        component={InputAdapter}
                        label={intl.formatMessage(CommonIntl.User)}
                        type="text"
                        placeholder={intl.formatMessage(
                          CommonIntl.UserPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="pwd"
                        component={InputAdapter}
                        label={intl.formatMessage(CommonIntl.Pwd)}
                        type="password"
                        placeholder={intl.formatMessage(
                          CommonIntl.PwdPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%">
                    <FormField>
                      <Field
                        name="wsStreamUrl"
                        component={InputAdapter}
                        label={intl.formatMessage(SecurityIntl.WsStreamUrl)}
                        type="text"
                        placeholder={intl.formatMessage(
                          SecurityIntl.WsStreamUrlPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width="45%" />
                </Flex>
              </FormContainer>
            )}
          />
        </ModalContent>
        <ModalFooter>
          <ButtonOutline
            hover={{
              color: theme.white,
              backgroundColor: theme.third,
            }}
            color={theme.third}
            onClick={onCancel}
            children={intl.formatMessage(CommonIntl.Cancel)}
          />
          &nbsp;&nbsp;
          <Button
            bg={theme.accent}
            onClick={this.handleCreate}
            children={intl.formatMessage(CommonIntl.Create)}
          />
        </ModalFooter>
      </Modal>
    );
  }

  handleCreate = () => {
    // fire an outside form submit
    const event = document.createEvent('Event');
    event.initEvent('submit', false, true);
    document.getElementById('manageCameraForm').dispatchEvent(event);
  };

  handleSubmit = values => {
    return;
  };
}

export default compose(
  injectIntl,
  withTheme
)(ManageCameraModalComponent);
