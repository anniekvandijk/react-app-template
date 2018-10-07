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
    classes, onClick, submitting
  } = props;
  return (
    <Button
      id="resetbutton"
      color="secondary"
      disabled={submitting}
      className={classes.button}
      type="button"
      onClick={onClick}
    >Cancel
    </Button>
  );
};

ResetButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default withStyles(styles)(ResetButton);
