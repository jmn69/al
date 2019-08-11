import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import T from 'prop-types';

import MenuBase from 'Common/components/Menu';
import NavItem from 'Common/components/NavItem';
import MenuIntl from './Menu.i';

export default class Menu extends Component {
  static propTypes = {
    isOpen: T.bool.isRequired,
    onLinkClick: T.func.isRequired,
    onMenuStateChange: T.func.isRequired,
  };

  render() {
    const { onLinkClick, onMenuStateChange, isOpen } = this.props;

    return (
      <MenuBase
        onStateChange={onMenuStateChange}
        customBurgerIcon={false}
        isOpen={isOpen}
      >
        <NavItem exact onClick={onLinkClick} to='/'>
          <FormattedMessage {...MenuIntl.Dashboard} />
        </NavItem>
        <NavItem onClick={onLinkClick} to='/security'>
          <FormattedMessage {...MenuIntl.Security} />
        </NavItem>
        <NavItem onClick={onLinkClick} to='/settings'>
          <FormattedMessage {...MenuIntl.Settings} />
        </NavItem>
      </MenuBase>
    );
  }
}
