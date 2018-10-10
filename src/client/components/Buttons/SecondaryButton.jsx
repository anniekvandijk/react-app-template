import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const SecondaryButton = (props) => {
  const {
    classes, onClick, buttonText
  } = props;
  return (
    <Button
      id="secondary-button"
      color="secondary"
      className={classes.button}
      type="button"
      onClick={onClick}
    >{buttonText}
    </Button>
  );
};

SecondaryButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};

export default withStyles(styles)(SecondaryButton);
