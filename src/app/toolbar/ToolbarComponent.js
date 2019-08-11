import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormattedMessage, injectIntl } from 'react-intl';
import T from 'prop-types';
import { compose } from 'redux';

import ToolbarBase from 'Common/components/Toolbar';
import NavLink from 'Common/components/NavLink';
import Select from 'Common/components/Select/Select';
import Text from 'Common/components/Text';
import { withTheme } from 'styled-components';
import ToolbarIntl from './Toolbar.i';
import LocaleIntl from '../../locale/Locale.i';
import { MenuButtonWrapper, RightMenu } from './Toolbar.s';

const localeToSelectOption = intl => {
  return [
    { value: 'fr', label: intl.formatMessage(LocaleIntl.Fr) },
    { value: 'en', label: intl.formatMessage(LocaleIntl.En) },
  ];
};

class Toolbar extends Component {
  static propTypes = {
    onMenuClick: T.func.isRequired,
    locale: T.string.isRequired,
    changeLocale: T.func.isRequired,
    theme: T.any,
    intl: T.any,
  };

  static defaultProps = {
    theme: null,
    intl: null,
  };

  render() {
    const { onMenuClick, locale, theme, intl } = this.props;

    const options = localeToSelectOption(intl);
    return (
      <ToolbarBase>
        <MenuButtonWrapper>
          <FontAwesomeIcon size='2x' icon='bars' onClick={onMenuClick} />
        </MenuButtonWrapper>
        <RightMenu>
          <NavLink>
            <Select
              options={options}
              value={options.filter(({ value }) => value === locale)}
              onChange={this.handleLocaleChange}
            />
          </NavLink>
          <NavLink>
            <Text size='large' color={theme.colors.white}>
              <FormattedMessage {...ToolbarIntl.Lock} />
            </Text>
          </NavLink>
        </RightMenu>
      </ToolbarBase>
    );
  }

  handleLocaleChange = ({ value }) => {
    const { changeLocale } = this.props;
    changeLocale(value);
  };
}

export default compose(
  injectIntl,
  withTheme
)(Toolbar);
