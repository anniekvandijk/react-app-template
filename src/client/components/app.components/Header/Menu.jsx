import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <Drawer open="true">
        <MenuItem>
          <Link to="/home">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
      </Drawer>
    );
  }
}
