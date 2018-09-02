import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Menu from '../components/app.components/Main/Menu';
import Header from '../components/app.components/Main/Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 440,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,

});

export function Home(props) {
  const { classes, pageName } = props;
  return (
    <div className={classes.root}>
      <Header page={pageName} />
      <Menu />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>
      <h1>Hello at the Homepage!</h1>
      </Typography>
      </main>
    </div>
  );
}

export default withStyles(styles)(Home);