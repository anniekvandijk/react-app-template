import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const UpdateButton = (props) => {
  const {
    classes, onClick
  } = props;
  return (
    <Button
      id="updatebutton"
      color="primary"
      variant="contained"
      className={classes.button}
      type="button"
      onClick={onClick}
    >Edit
    </Button>
  );
};

UpdateButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withStyles(styles)(UpdateButton);
