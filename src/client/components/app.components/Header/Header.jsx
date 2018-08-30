import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from './Menu';

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
};

function Header(props) {
  const { name } = props;
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          className="menu-icon"
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Menu />
        <Typography variant="title" color="inherit">
          {name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: 'Welkom!'
};

export default withStyles(styles)(Header);
