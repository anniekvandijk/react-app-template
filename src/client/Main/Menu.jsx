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
  toolbar: theme.mixins.toolbar
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
        <MenuList>
          <MenuItem
            component={Link}
            to="/home"
            selected={selectedItem === 0}
            onClick={() => setSelected(0, 'Home')}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText inset primary="Home" />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/about"
            selected={selectedItem === 1}
            onClick={() => setSelected(1, 'About')}
          >
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText inset primary="About" />
          </MenuItem>
          <MenuItem
            component={Link}
            to="/settings"
            selected={selectedItem === 2}
            onClick={() => setSelected(2, 'Settings')}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText inset primary="Settings" />
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
  selectedMenuItem: state.application.menu.selectedMenuItem
});

const mapDispatchToProps = dispatch => ({
  setSelected: (index, header) => dispatch(setSelectedMenuItem(index, header))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));
