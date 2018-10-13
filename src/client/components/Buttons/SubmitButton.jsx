import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const SubmitButton = (props) => {
  const {
    classes, pristine, submitting, buttonText
  } = props;
  return (
    <CustomTooltip title={buttonText}>
      <Button
        id="submitbutton"
        variant="contained"
        disabled={pristine || submitting}
        color="primary"
        className={classes.button}
        type="submit"
      >
        {buttonText}
      </Button>
    </CustomTooltip>
  );
};

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  buttonText: PropTypes.string
};

SubmitButton.defaultProps = {
  buttonText: 'Submit'
};

export default withStyles(styles)(SubmitButton);
