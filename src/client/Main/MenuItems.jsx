import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

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

const Items = [{
  name: 'Home',
  path: '/home',
  icon: <HomeIcon />
},
{
  name: 'About',
  path: '/about',
  icon: <HelpIcon />
},
{
  name: 'Settings',
  path: '/settings',
  icon: <SettingsIcon />
}];

function MenuItems(props) {
  const { classes } = props;
  return (
    Items.map(item => (
      <div key={item.name}>
        <MenuItem className={classes.menuItem} component={Link} to={item.path}>
          <ListItemIcon className={classes.icon}>
            {item.icon}
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} inset primary={item.name} />
        </MenuItem>
      </div>
    ))
  );
}

MenuItems.propTypes = {
  classes: PropTypes.func.isRequired
};

export default withStyles(styles)(MenuItems);
