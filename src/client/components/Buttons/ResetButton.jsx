import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const ResetButton = (props) => {
  const {
    classes, reset, pristine, submitting
  } = props;
  return (
    <Button
      color="secondary"
      disabled={pristine || submitting}
      className={classes.button}
      type="button"
      onClick={reset}
    >Cancel
    </Button>
  );
};

ResetButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default withStyles(styles)(ResetButton);
