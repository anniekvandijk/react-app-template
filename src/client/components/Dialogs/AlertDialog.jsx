import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import CancelButton from '../Buttons/CancelButton';
import OkButton from '../Buttons/OkButton';

const AlertDialog = (props) => {
  const {
    alertDialogOpen, handleOkClick, handleCancelClick, title, children
  } = props;
  return (
    <Dialog
      id="alert-dialog"
      open={alertDialogOpen}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div" id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions id="alert-dialog-actions">
        <CancelButton
          onClick={handleCancelClick}
        />
        <OkButton
          onClick={handleOkClick}
        />
      </DialogActions>
    </Dialog>
  );
};

AlertDialog.propTypes = {
  handleCancelClick: PropTypes.func.isRequired,
  handleOkClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  title: PropTypes.string.isRequired,
  alertDialogOpen: PropTypes.bool
};

AlertDialog.defaultProps = {
  alertDialogOpen: false
};

export default AlertDialog;
