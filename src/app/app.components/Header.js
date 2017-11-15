import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        return (
            <div id="header">
            <AppBar
                id="appbar"
                title="Mijn eerste React Material UI app"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            </div>
        )
    }
}

export default Header;