import React, { Component, Fragment } from 'react';
import { Box, Flex } from '@rebass/grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import T from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';

import { withTheme } from 'styled-components';
import { compose } from 'redux';
import Modal from 'Common/components/Modal';
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
import { FormContainer, FormField } from './Security.s';
import SecurityIntl from './Security.i';

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
    createCameraIsLoading: T.bool,
    createCameraError: T.any,
    createCamera: T.func,
  };

  static defaultProps = {
    theme: null,
    createCameraIsLoading: false,
    createCameraError: null,
    createCamera: () => {},
  };

  componentDidUpdate(prevProps) {
    const {
      createCameraIsLoading,
      createCameraError,
      onModalClose,
    } = this.props;
    const { createCameraIsLoading: prevCreateCameraIsLoading } = prevProps;
    if (
      prevCreateCameraIsLoading &&
      !createCameraIsLoading &&
      !createCameraError
    ) {
      onModalClose();
    }
  }

  render() {
    const {
      intl,
      isOpen,
      onModalClose,
      onCancel,
      theme,
      createCameraIsLoading,
    } = this.props;

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
              if (!values.name) {
                errors.name = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (values.name && !values.name.trim()) {
                errors.name = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (!values.type) {
                errors.type = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (!values.publicDomain) {
                errors.publicDomain = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (values.publicDomain && !values.publicDomain.trim()) {
                errors.publicDomain = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (!values.privateIp) {
                errors.privateIp = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (values.privateIp && !values.privateIp.trim()) {
                errors.privateIp = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (!values.user) {
                errors.user = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (values.user && !values.user.trim()) {
                errors.user = (
                  <FormattedMessage {...CommonIntl.FieldRequired} />
                );
              }
              if (!values.pwd) {
                errors.pwd = <FormattedMessage {...CommonIntl.FieldRequired} />;
              }
              if (values.pwd && !values.pwd.trim()) {
                errors.pwd = <FormattedMessage {...CommonIntl.FieldRequired} />;
              }
              return errors;
            }}
            render={({ handleSubmit }) => (
              <FormContainer id='manageCameraForm' onSubmit={handleSubmit}>
                <Flex
                  alignItems='center'
                  justifyContent='space-around'
                  flexWrap='wrap'
                >
                  <Box width='45%'>
                    <FormField>
                      <Field
                        required
                        name='name'
                        component={InputAdapter}
                        label={intl.formatMessage(CommonIntl.Name)}
                        type='text'
                        placeholder={intl.formatMessage(
                          CommonIntl.NamePlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%'>
                    <FormField>
                      <Field
                        name='type'
                        required
                        component={SelectAdapter}
                        options={cameraTypeToSelectOption(intl)}
                        label={intl.formatMessage(CommonIntl.Type)}
                        placeholder={intl.formatMessage(
                          CommonIntl.TypePlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%'>
                    <FormField>
                      <Field
                        required
                        name='publicDomain'
                        component={InputAdapter}
                        label={intl.formatMessage(SecurityIntl.PublicDomain)}
                        type='text'
                        placeholder={intl.formatMessage(
                          SecurityIntl.PublicDomainPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%'>
                    <FormField>
                      <Field
                        required
                        name='privateIp'
                        component={InputAdapter}
                        label={intl.formatMessage(SecurityIntl.PrivateIp)}
                        type='text'
                        placeholder={intl.formatMessage(
                          SecurityIntl.PrivateIpPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%'>
                    <FormField>
                      <Field
                        required
                        name='user'
                        component={InputAdapter}
                        label={intl.formatMessage(CommonIntl.User)}
                        type='text'
                        placeholder={intl.formatMessage(
                          CommonIntl.UserPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%'>
                    <FormField>
                      <Field
                        required
                        name='pwd'
                        component={InputAdapter}
                        label={intl.formatMessage(CommonIntl.Pwd)}
                        type='password'
                        placeholder={intl.formatMessage(
                          CommonIntl.PwdPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%'>
                    <FormField>
                      <Field
                        name='wsStreamUrl'
                        component={InputAdapter}
                        label={intl.formatMessage(SecurityIntl.WsStreamUrl)}
                        type='text'
                        placeholder={intl.formatMessage(
                          SecurityIntl.WsStreamUrlPlaceholder
                        )}
                      />
                    </FormField>
                  </Box>
                  <Box width='45%' />
                </Flex>
              </FormContainer>
            )}
          />
        </ModalContent>
        <ModalFooter>
          <ButtonOutline
            hover={{
              color: theme.colors.white,
              backgroundColor: theme.colors.third,
            }}
            color={theme.colors.third}
            onClick={onCancel}
          >
            <FormattedMessage {...CommonIntl.Cancel} />
          </ButtonOutline>
          &nbsp;&nbsp;
          <Button bg={theme.colors.accent} onClick={this.handleCreate}>
            <Fragment>
              <FormattedMessage {...CommonIntl.Create} />
              {createCameraIsLoading ? (
                <Fragment>
                  &nbsp; &nbsp;
                  <FontAwesomeIcon spin size='1x' icon={faCircleNotch} />
                </Fragment>
              ) : null}
            </Fragment>
          </Button>
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
    const { createCamera } = this.props;
    createCamera(values);
  };
}

export default compose(
  injectIntl,
  withTheme
)(ManageCameraModalComponent);
