import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const SubmitButton = (props) => {
  const {
    classes, pristine, submitting
  } = props;
  return (
    <CustomTooltip title="Save">
      <span>
        <Button
          mini
          id="submit-button"
          aria-label="Submit"
          variant="fab"
          disabled={pristine || submitting}
          color="primary"
          className={classes.button}
          type="submit"
        ><SaveIcon />
        </Button>
      </span>
    </CustomTooltip>
  );
};

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default withStyles(styles)(SubmitButton);
