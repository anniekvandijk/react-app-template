import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import CancelButton from '../Buttons/CancelButton';
import SubmitButton from '../Buttons/SubmitButton';
import DeleteButton from '../Buttons/DeleteButton';

const FormDialog = (props) => {
  const {
    header, children, handleSubmit, pristine, reset, submitting, initialValues,
    formIsOpen, handleFormDialogSubmitClick, handleFormDialogCancelClick,
    handleFormDialogDeleteClick
  } = props;
  return (
    <Dialog
      id="form-dialog"
      open={formIsOpen}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{header}</DialogTitle>
      <form onSubmit={handleSubmit(handleFormDialogSubmitClick)}>
        <DialogContent id="form-dialog-description">
          {children}
        </DialogContent>
        <DialogActions id="form-dialog-actions">
          <CancelButton
            onClick={handleFormDialogCancelClick}
          />
          <SubmitButton
            pristine={pristine}
            submitting={submitting}
          />
          { initialValues !== null
            && <DeleteButton onClick={handleFormDialogDeleteClick} />
          }
        </DialogActions>
      </form>
    </Dialog>
  );
};


FormDialog.propTypes = {
  header: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFormDialogSubmitClick: PropTypes.func.isRequired,
  handleFormDialogCancelClick: PropTypes.func.isRequired,
  handleFormDialogDeleteClick: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  initialValues: PropTypes.object,
  formIsOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

FormDialog.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null,
  formIsOpen: false
};

const config = {
  form: 'Form',
  enableReinitialize: true
};

export default reduxForm(config)(FormDialog);
