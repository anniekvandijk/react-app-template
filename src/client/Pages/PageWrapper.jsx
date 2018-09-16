import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from '../Main/Header';
import Menu from '../Main/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0
  },
  toolbar: theme.mixins.toolbar

});

const PageWrapper = (props) => {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <Header />
      <Menu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography component="div">
          {children}
        </Typography>
      </main>
    </div>
  );
};

PageWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

export default withStyles(styles)(PageWrapper);
