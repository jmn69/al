import React, { Component } from 'react';
import { Box, Flex } from 'grid-styled';
import Button from 'Common/components/Button';
import { compose } from 'redux';
import { withTheme } from 'styled-components';
import T from 'prop-types';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Form, Field } from 'react-final-form';

import {
  Container,
  ContentContainer,
  FormField,
  FormFieldContainer,
  FormContainer,
  FooterContainer,
} from './Login.s';
import Card from 'Common/components/Card';
import CommonIntl from 'Common/CommonTrad.i';
import LoginIntl from './Login.i';
import InputAdapter from 'Common/components/formAdapters/InputAdapter';
import { Redirect } from 'react-router-dom';

class LoginFormComponent extends Component {
  static propTypes = {
    theme: T.any,
    intl: T.any,
    login: T.func,
    error: T.any,
    isLoading: T.bool,
    authCheckIsLoading: T.bool,
    isAuthenticated: T.bool,
    hasInit: T.bool,
    authCheck: T.func,
  };

  async componentDidMount() {
    await this.props.authCheck();
  }

  render() {
    const {
      intl,
      theme,
      error,
      isAuthenticated,
      hasInit,
      authCheckIsLoading,
    } = this.props;

    if (authCheckIsLoading || !hasInit) {
      return <div>LOADINGDINGDING</div>;
    }

    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <Container>
        <ContentContainer>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <Box width="30%">
              <Card>
                <Form
                  onSubmit={this.handleSubmit}
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
                  render={({ handleSubmit, values }) => (
                    <FormContainer onSubmit={handleSubmit}>
                      <FormFieldContainer>
                        <FormField>
                          <Field
                            name="username"
                            color="grey"
                            component={InputAdapter}
                            label={intl.formatMessage(LoginIntl.Username)}
                            type="text"
                            placeholder={intl.formatMessage(
                              LoginIntl.UsernamePlaceholder
                            )}
                          />
                        </FormField>
                      </FormFieldContainer>
                      <FormFieldContainer>
                        <FormField>
                          <Field
                            name="password"
                            color="grey"
                            component={InputAdapter}
                            label={intl.formatMessage(LoginIntl.Password)}
                            type="password"
                            placeholder={intl.formatMessage(
                              LoginIntl.PasswordPlaceholder
                            )}
                          />
                        </FormField>
                      </FormFieldContainer>
                      <FooterContainer>
                        <div>{error}</div>
                        <Button
                          bg={theme.primary}
                          small
                          children="Se connecter"
                        />
                      </FooterContainer>
                    </FormContainer>
                  )}
                />
              </Card>
            </Box>
          </Flex>
        </ContentContainer>
      </Container>
    );
  }

  handleSubmit = values => {
    this.props.login(values);
  };
}

export default compose(
  injectIntl,
  withTheme
)(LoginFormComponent);
