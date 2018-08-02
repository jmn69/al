import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuButtonWrapper } from './Toolbar.s';
import NavLink from 'rebass/dist/NavLink';
import Select from 'rebass/dist/Select';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';

import ToolbarBase from 'Common/components/Toolbar';
import ToolbarIntl from './Toolbar.i';
import LocaleIntl from '../../locale/Locale.i';

export default class Toolbar extends Component {
  static propTypes = {
    onMenuClick: T.func.isRequired,
    locale: T.string,
    changeLocale: T.func.isRequired,
  };

  render() {
    const { onMenuClick, locale } = this.props;

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
          <FormattedMessage {...ToolbarIntl.Lock} />
        </NavLink>
      </ToolbarBase>
    );
  }

  handleLocaleChange = event => {
    this.props.changeLocale(event.target.value);
  };
}
