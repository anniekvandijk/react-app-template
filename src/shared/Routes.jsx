import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../client/Pages/Home/Home';
import Shows from '../client/Pages/shows/Shows';
import About from '../client/Pages/About/About';
import Settings from '../client/Pages/Settings/Settings';

const styles = () => ({
  root: {
    height: '100%'
  }
});

const Routes = (props) => {
  const { classes } = props;
  return (
    <Switch className={classes.root}>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/shows" component={Shows} />
      <Route exact path="/about" component={About} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};

Routes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
