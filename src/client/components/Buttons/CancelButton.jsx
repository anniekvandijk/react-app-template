import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const CancelButton = (props) => {
  const {
    classes, cancelButtonClick
  } = props;
  return (
    <CustomTooltip title="Cancel">
      <Button
        variant="fab"
        mini
        color="secondary"
        aria-label="Cancel"
        id="cancel-button"
        className={classes.button}
        onClick={cancelButtonClick}
      >
        <UndoIcon />
      </Button>
    </CustomTooltip>
  );
};

CancelButton.propTypes = {
  classes: PropTypes.object.isRequired,
  cancelButtonClick: PropTypes.func.isRequired
};

export default withStyles(styles)(CancelButton);
