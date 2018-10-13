import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import CustomTooltip from '../CustomTooltip';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const EditButton = (props) => {
  const {
    classes, editButtonClick
  } = props;
  return (
    <CustomTooltip title="Edit">
      <Button
        variant="fab"
        mini
        color="primary"
        aria-label="Edit"
        id="edit-button"
        className={classes.button}
        onClick={editButtonClick}
      >
        <EditIcon />
      </Button>
    </CustomTooltip>
  );
};

EditButton.propTypes = {
  classes: PropTypes.object.isRequired,
  editButtonClick: PropTypes.func.isRequired
};

export default withStyles(styles)(EditButton);
