import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuButtonWrapper } from './Toolbar.s';
import NavLink from 'rebass/dist/NavLink';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';

import ToolbarBase from 'Common/components/Toolbar';
import Select from 'Common/components/Select';
import Text from 'Common/components/Text';
import ToolbarIntl from './Toolbar.i';
import LocaleIntl from '../../locale/Locale.i';
import { withTheme } from 'styled-components';

class Toolbar extends Component {
  static propTypes = {
    onMenuClick: T.func.isRequired,
    locale: T.string,
    changeLocale: T.func.isRequired,
    theme: T.any,
  };

  render() {
    const { onMenuClick, locale, theme } = this.props;

    return (
      <ToolbarBase>
        <MenuButtonWrapper>
          <FontAwesomeIcon size="2x" icon="bars" onClick={onMenuClick} />
        </MenuButtonWrapper>
        <NavLink ml="auto">
          <Select value={locale} onChange={this.handleLocaleChange}>
            <FormattedMessage
              {...LocaleIntl.Fr}
              children={FormattedMessage => (
                <option value="fr">{FormattedMessage}</option>
              )}
            />
            <FormattedMessage
              {...LocaleIntl.En}
              children={FormattedMessage => (
                <option value="en">{FormattedMessage}</option>
              )}
            />
          </Select>
        </NavLink>
        <NavLink>
          <Text fontSize="large" color={theme.white}>
            <FormattedMessage {...ToolbarIntl.Lock} />
          </Text>
        </NavLink>
      </ToolbarBase>
    );
  }

  handleLocaleChange = event => {
    this.props.changeLocale(event.target.value);
  };
}

export default withTheme(Toolbar);
