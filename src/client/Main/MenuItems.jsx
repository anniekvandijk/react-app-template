import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Routes from './Routes';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.secondary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

function MenuItems(props) {
  const { classes } = props;

  return (
    <div>
      { Routes.map(route => (
        <div key={route.name}>
          <MenuItem className={classes.menuItem} component={Link} to={route.path}>
            <ListItemIcon className={classes.icon}>
              {route.icon}
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary={route.name} />
          </MenuItem>
        </div>
      ))
      }
    </div>
  );
}

export default withStyles(styles)(MenuItems);
