import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import { Link } from 'react-router-dom';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import { setSelectedMenuItem } from '../../redux/actions';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  menuItem: {
    '&:focus': {
      // backgroundColor: theme.palette.secondary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {}
});

class Menu extends React.PureComponent {
  render() {
    const { classes, selectedMenuItem: selectedItem, setSelected } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <MenuList className={classes.menu}>
          <MenuItem
            className={classes.menuItem}
            component={Link}
            to="/home"
            selected={selectedItem === 0}
            onClick={() => setSelected(0)}
          >
            <ListItemIcon className={classes.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Home" />
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            component={Link}
            to="/about"
            selected={selectedItem === 1}
            onClick={() => setSelected(1)}
          >
            <ListItemIcon className={classes.icon}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="About" />
          </MenuItem>
          <MenuItem
            className={classes.menuItem}
            component={Link}
            to="/settings"
            selected={selectedItem === 2}
            onClick={() => setSelected(2)}
          >
            <ListItemIcon className={classes.icon}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText classes={{ primary: classes.primary }} inset primary="Settings" />
          </MenuItem>
        </MenuList>
      </Drawer>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedMenuItem: PropTypes.number.isRequired,
  setSelected: PropTypes.func
};

Menu.defaultProps = {
  setSelected: 0
};

const mapStateToProps = state => ({
  selectedMenuItem: state.application.selectedMenuItem
});

const mapDispatchToProps = dispatch => ({
  setSelected: index => dispatch(setSelectedMenuItem(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));
