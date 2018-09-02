import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
});

function Header(props) {
  const { classes, pageName } = props;

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          {pageName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  pageName: PropTypes.string
};

Header.defaultProps = {
  pageName: 'Bla die bla'
};

export default withStyles(styles)(Header);
