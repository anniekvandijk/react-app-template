import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import AlertDialog from '../../components/Dialogs/AlertDialog';
import RenderedTextField from '../../components/FormFields/TextField';
import CancelButton from '../../components/Buttons/CancelButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import DeleteButton from '../../components/Buttons/DeleteButton';
import AddButton from '../../components/Buttons/AddButton';
import createId from '../../utilities/createId';
import {
  createRecord, updateRecord, unsetUpdateRecord, deleteRecord
} from '../../../redux/showsReducer';

class AddEditShow extends React.PureComponent {
  state = { alertDialogOpen: false };

  render() {
    const {
      handleSubmit, pristine, reset, submitting, recordUpdate,
      recordAdd, clearUpdateRecord, recordDelete, initialValues, setShowFormOpen,
      showFormIsOpen
    } = this.props;
    const { alertDialogOpen } = this.state;
    const header = initialValues === null ? 'Add show' : 'Edit show';
    const addEditShow = (formValues) => {
      // update record
      if (initialValues !== null) {
        console.log('update record');
        console.log(formValues);
        recordUpdate(formValues);
        clearUpdateRecord(initialValues.id);
      } else {
      // add record
        const newValue = formValues;
        newValue.id = createId();
        console.log('add record');
        console.log(newValue);
        recordAdd(newValue);
      }
      setShowFormOpen(false);
      reset();
    };
    const addShow = () => {
      if (initialValues !== null) {
        clearUpdateRecord(initialValues.id);
      }
      setShowFormOpen(true);
    };
    const deleteShow = () => {
      if (initialValues !== null) {
        console.log('delete record');
        console.log(initialValues.id);
        recordDelete(initialValues.id);
        clearUpdateRecord(initialValues.id);
        this.setState({ alertDialogOpen: false });
        setShowFormOpen(false);
        reset();
      }
    };
    const cancelDelete = () => {
      console.log('cancel delete');
      this.setState({ alertDialogOpen: false });
    };
    const cancel = () => {
      console.log('cancel');
      if (initialValues !== null) {
        console.log(initialValues.id);
        clearUpdateRecord(initialValues.id);
      }
      setShowFormOpen(false);
      reset();
    };
    return (
      <div id="shows-form">
        <AlertDialog
          title="Delete"
          alertDialogOpen={alertDialogOpen}
          handleOkClick={() => deleteShow()}
          handleCancelClick={() => cancelDelete()}
        >
          <Typography variant="body1" gutterBottom>
            Are you sure you want to delete this show?
          </Typography>
          { initialValues !== null
            && (
            <Typography variant="title" gutterBottom>
              {initialValues.name}
              <br />
              {initialValues.location}
            </Typography>)
          }
        </AlertDialog>
        <Dialog
          id="shows-form-dialog"
          open={showFormIsOpen}
          aria-labelledby="shows-form-dialog-title"
        >
          <DialogTitle id="shows-form-dialog-title">{header}</DialogTitle>
          <form onSubmit={handleSubmit(addEditShow)}>
            <DialogContent>
              <div id="shows-form-fields">
                <Field
                  name="name"
                  label="Show name"
                  helperText="Enter name without location or date"
                  component={RenderedTextField}
                />
                <Field
                  name="location"
                  label="Show Location"
                  component={RenderedTextField}
                />
              </div>
            </DialogContent>
            <DialogActions id="shows-form-dialog-actions">
              <CancelButton
                onClick={() => cancel()}
              />
              <SubmitButton
                pristine={pristine}
                submitting={submitting}
              />
              { initialValues !== null
                && <DeleteButton onClick={() => { this.setState({ alertDialogOpen: true }); }} />
              }
            </DialogActions>
          </form>
        </Dialog>
        <AddButton onClick={() => addShow()} />
      </div>
    );
  }
}

AddEditShow.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  recordAdd: PropTypes.func.isRequired,
  recordUpdate: PropTypes.func.isRequired,
  clearUpdateRecord: PropTypes.func.isRequired,
  recordDelete: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  setShowFormOpen: PropTypes.func.isRequired,
  showFormIsOpen: PropTypes.bool
};

AddEditShow.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null,
  showFormIsOpen: false
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow
});

const mapDispatchToProps = dispatch => ({
  recordUpdate: show => dispatch(updateRecord(show)),
  recordAdd: show => dispatch(createRecord(show)),
  recordDelete: showId => dispatch(deleteRecord(showId)),
  clearUpdateRecord: showId => dispatch(unsetUpdateRecord(showId))
});

const config = {
  form: 'Show form',
  enableReinitialize: true
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(config)(AddEditShow));
