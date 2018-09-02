import React from 'react';
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

function PageWrapper(props) {
  const { classes, pageName, children } = props;
  return (
    <div className={classes.root}>
      <Header pageName={pageName} />
      <Menu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography component="div">
          {children}
        </Typography>
      </main>
    </div>
  );
}
export default withStyles(styles)(PageWrapper);
