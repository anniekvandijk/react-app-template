import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  toolbar: theme.mixins.toolbar,
  primary: {},
  icon: {},
});

function Menu(props) {
  const { classes } = props;

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.toolbar} />
      <MenuList>
        <MenuItem className={classes.menuItem} component={Link} to="/home">
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/about">
          <ListItemIcon className={classes.icon}>
            <SendIcon />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary="About" />
        </MenuItem>
      </MenuList>
    </Drawer>
  );
}

export default withStyles(styles)(Menu);
