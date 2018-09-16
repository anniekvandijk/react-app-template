import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Settings from '../Pages/Settings/Settings';

const styles = () => ({
  root: {
    height: '100%'
  }
});

const Routes = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/settings" component={Settings} />
    </div>
  );
};

Routes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Routes);
