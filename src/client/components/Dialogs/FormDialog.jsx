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
    header, children, handleSubmit, pristine, submitting, initialValues,
    formDialogOpen, handleFormDialogSubmitClick, handleFormDialogCancelClick,
    handleFormDialogDeleteClick
  } = props;

  const submit = (formValues) => {
    console.log(formValues);
    handleFormDialogSubmitClick();
  };

  return (
    <Dialog
      id="form-dialog"
      open={formDialogOpen}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{header}</DialogTitle>
      <form onSubmit={handleSubmit(submit)}>
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
  submitting: PropTypes.bool,
  initialValues: PropTypes.object,
  formDialogOpen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
};

FormDialog.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null,
  formDialogOpen: false
};

const config = {
  form: 'Form',
  enableReinitialize: true
};

export default reduxForm(config)(FormDialog);
