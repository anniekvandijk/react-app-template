import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const SubmitButton = (props) => {
  const { classes, pristine, submitting } = props;
  return (
    <Button
      id="submitbutton"
      variant="contained"
      disabled={pristine || submitting}
      color="primary"
      className={classes.button}
      type="submit"
    >
      Submit
    </Button>
  );
};

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default withStyles(styles)(SubmitButton);
