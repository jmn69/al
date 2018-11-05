import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuButtonWrapper } from './Toolbar.s';
import NavLink from 'rebass/dist/NavLink';
import { FormattedMessage, injectIntl } from 'react-intl';
import T from 'prop-types';
import { compose } from 'redux';

import ToolbarBase from 'Common/components/Toolbar';
import Select from 'Common/components/Select/Select';
import Text from 'Common/components/Text';
import ToolbarIntl from './Toolbar.i';
import LocaleIntl from '../../locale/Locale.i';
import { withTheme } from 'styled-components';

const localeToSelectOption = intl => {
  return [
    { value: 'fr', label: intl.formatMessage(LocaleIntl.Fr) },
    { value: 'en', label: intl.formatMessage(LocaleIntl.En) },
  ];
};

class Toolbar extends Component {
  static propTypes = {
    onMenuClick: T.func.isRequired,
    locale: T.string,
    changeLocale: T.func.isRequired,
    theme: T.any,
    intl: T.any,
  };

  render() {
    const { onMenuClick, locale, theme, intl } = this.props;

    const options = localeToSelectOption(intl);
    return (
      <ToolbarBase>
        <MenuButtonWrapper>
          <FontAwesomeIcon size="2x" icon="bars" onClick={onMenuClick} />
        </MenuButtonWrapper>
        <NavLink ml="auto">
          <Select
            options={options}
            value={options.filter(({ value }) => value === locale)}
            onChange={this.handleLocaleChange}
          />
        </NavLink>
        <NavLink>
          <Text fontSize="large" color={theme.white}>
            <FormattedMessage {...ToolbarIntl.Lock} />
          </Text>
        </NavLink>
      </ToolbarBase>
    );
  }

  handleLocaleChange = ({ value }) => {
    this.props.changeLocale(value);
  };
}

export default compose(
  injectIntl,
  withTheme
)(Toolbar);
