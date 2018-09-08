import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItems from './MenuItems';

const drawerWidth = 240;

const styles = theme => ({
  menu: {
    selectedMenuItemStyle: theme.palette.secondary.main
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
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
      <MenuList className={classes.menu}>
        <MenuItems />
      </MenuList>
    </Drawer>
  );
}

Menu.propTypes = {
  classes: PropTypes.func.isRequired
};

export default withStyles(styles)(Menu);
