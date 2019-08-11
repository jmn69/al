import React, { Component, Fragment } from 'react';
import { Box, Flex } from '@rebass/grid';
import Button from 'Common/components/Button';
import { compose } from 'redux';
import { withTheme } from 'styled-components';
import T from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import Card from 'Common/components/Card';
import CommonIntl from 'Common/CommonTrad.i';
import InputAdapter from 'Common/components/formAdapters/InputAdapter';
import Modal from 'Common/components/Modal';
import { ModalHeader, ModalContent } from 'Common/components/Modal.s';
import PatternLock from 'Common/components/PatternLock';
import LoginIntl from './Login.i';
import {
  FormField,
  FormFieldContainer,
  FormContainer,
  FooterContainer,
} from './Login.s';

const updateValue = (args, state, { changeValue }) => {
  changeValue(state, args[0].name, () => args[0].value);
};

class LoginFormComponent extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
    login: T.func,
    error: T.any,
    isLoading: T.bool,
  };

  static defaultProps = {
    theme: null,
    intl: null,
    login: () => {},
    error: null,
    isLoading: false,
  };

  state = {
    isOpen: false,
  };

  render() {
    const { intl, theme, error, isLoading } = this.props;
    const { isOpen } = this.state;

    return (
      <Fragment>
        <Flex width='100%' alignItems='center' justifyContent='center'>
          <Box width='30%'>
            <Card>
              <Form
                onSubmit={this.handleSubmit}
                mutators={{ updateValue }}
                validate={values => {
                  const errors = {};
                  if (!values.username) {
                    errors.username = (
                      <FormattedMessage {...CommonIntl.FieldRequired} />
                    );
                  }
                  if (values.username && !values.username.trim()) {
                    errors.username = (
                      <FormattedMessage {...CommonIntl.FieldRequired} />
                    );
                  }
                  if (!values.password) {
                    errors.password = (
                      <FormattedMessage {...CommonIntl.FieldRequired} />
                    );
                  }
                  if (values.password && !values.password.trim()) {
                    errors.password = (
                      <FormattedMessage {...CommonIntl.FieldRequired} />
                    );
                  }
                  return errors;
                }}
                render={({ handleSubmit, mutators }) => (
                  <FormContainer onSubmit={handleSubmit}>
                    <FormFieldContainer>
                      <FormField>
                        <Field
                          name='username'
                          color='grey'
                          component={InputAdapter}
                          label={intl.formatMessage(LoginIntl.Username)}
                          type='text'
                          placeholder={intl.formatMessage(
                            LoginIntl.UsernamePlaceholder
                          )}
                        />
                      </FormField>
                    </FormFieldContainer>
                    <FormFieldContainer>
                      <FormField>
                        <Field
                          name='password'
                          color='grey'
                          component={InputAdapter}
                          label={intl.formatMessage(LoginIntl.Password)}
                          type='password'
                          readOnly
                          onClick={() => this.setState({ isOpen: true })}
                          placeholder={intl.formatMessage(
                            LoginIntl.PasswordPlaceholder
                          )}
                        />
                      </FormField>
                    </FormFieldContainer>
                    <FooterContainer>
                      <div>{error}</div>
                      <Button bg={theme.colors.primary} small>
                        <Fragment>
                          <FormattedMessage {...LoginIntl.Login} />
                          {isLoading ? (
                            <Fragment>
                              &nbsp; &nbsp;
                              <FontAwesomeIcon
                                spin
                                size='1x'
                                icon={faCircleNotch}
                              />
                            </Fragment>
                          ) : null}
                        </Fragment>
                      </Button>
                    </FooterContainer>
                    <Modal isOpen={isOpen} onClose={this.handleModalClose}>
                      <ModalHeader>
                        <FormattedMessage {...LoginIntl.ModalTitle} />
                      </ModalHeader>
                      <ModalContent>
                        <PatternLock
                          width={400}
                          pointSize={20}
                          pointActiveSize={40}
                          size={3}
                          connectorWidth={4}
                          onChange={pattern =>
                            this.checkPattern(pattern, mutators)
                          }
                          pointColor={theme.colors.third}
                          errorColor={theme.colors.accent}
                          connectorColor={theme.colors.primary}
                        />
                      </ModalContent>
                    </Modal>
                  </FormContainer>
                )}
              />
            </Card>
          </Box>
        </Flex>
      </Fragment>
    );
  }

  handleSubmit = values => {
    const { login } = this.props;
    login(values);
  };

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  checkPattern = (pattern, mutators) => {
    mutators.updateValue({ name: 'password', value: pattern.join('-') });
    this.handleModalClose();
    return Promise.resolve();
  };
}

export default compose(
  injectIntl,
  withTheme
)(LoginFormComponent);
