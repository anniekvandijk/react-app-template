import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
    render() {
        return (
            <AppBar
                id="AppBar"
                title="Mijn eerste React Material UI app"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        )
    }
}

export default Header;