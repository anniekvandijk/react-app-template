import React from 'react';
import AppBar from 'material-ui/AppBar';

const Header = () => (
  <div id="header">
    <AppBar
      id="appbar"
      title="Mijn eerste React Material UI app"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </div>
);

export default Header;
