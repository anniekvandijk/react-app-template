import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import RenderedTextField from '../../components/FormFields/TextField';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import SecondaryButton from '../../components/Buttons/SecondaryButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import DeleteButton from '../../components/Buttons/DeleteButton';
import AddButton from '../../components/Buttons/AddButton';
import createId from '../../utilities/createId';
import {
  createRecord, updateRecord, unsetUpdateRecord, deleteRecord, showformOpen
} from '../../../redux/showsReducer';

class AddEditShow extends React.PureComponent {
  state = { deleteDialogOpen: false };

  render() {
    const {
      handleSubmit, pristine, reset, submitting, recordUpdate,
      recordAdd, clearUpdateRecord, recordDelete, initialValues, setFormOpen, formIsOpen
    } = this.props;
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
        formValues.id = createId();
        console.log('add');
        console.log(formValues);
        recordAdd(formValues);
      }
      setFormOpen(false);
      reset();
    };
    const deleteShow = () => {
      if (initialValues !== null) {
        console.log('delete');
        console.log(initialValues.id);
        recordDelete(initialValues.id);
        clearUpdateRecord(initialValues.id);
        this.setState({ deleteDialogOpen: false });
        setFormOpen(false);
        reset();
      }
    };
    const cancelDelete = () => {
      console.log('cancel delete');
      this.setState({ deleteDialogOpen: false });
    };
    const cancel = () => {
      console.log('cancel');
      if (initialValues !== null) {
        console.log(initialValues.id);
        clearUpdateRecord(initialValues.id);
      }
      setFormOpen(false);
      reset();
    };
    return (
      <div id="showform">
        <Dialog
          id="delete-dialog"
          open={this.state.deleteDialogOpen}
          aria-labelledby="delete-dialog-title"
        >
          <DialogTitle id="delete-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this show?
            </DialogContentText>
            { initialValues !== null
                && (
                <DialogContentText variant="title" id="alert-dialog-showname">
                  {initialValues.name}
                </DialogContentText>)
              }
          </DialogContent>
          <DialogActions>
            <SecondaryButton
              buttonText="cancel"
              onClick={() => cancelDelete()}
            />
            <PrimaryButton
              buttonText="delete"
              onClick={() => deleteShow()} 
            />
          </DialogActions>
        </Dialog>
        <Dialog
          id="showform-dialog"
          open={formIsOpen}
          aria-labelledby="showform-dialog-title"
        >
          <DialogTitle id="showform-dialog-title">{header}</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(addEditShow)}>
              <div id="showform-fields">
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
              <div id="showform-actions">
                <SecondaryButton
                  buttonText="cancel"
                  onClick={() => cancel()}
                />
                <SubmitButton
                  pristine={pristine}
                  submitting={submitting}
                />
                { initialValues !== null
                  && <DeleteButton onClick={() => { this.setState({ deleteDialogOpen: true }); }} />
                }
              </div>
            </form>
          </DialogContent>
        </Dialog>
        <AddButton onClick={() => setFormOpen(true)} />
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
  setFormOpen: PropTypes.func.isRequired,
  formIsOpen: PropTypes.bool
};

AddEditShow.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null,
  formIsOpen: false
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow,
  formIsOpen: state.shows.showformOpen
});

const mapDispatchToProps = dispatch => ({
  recordUpdate: show => dispatch(updateRecord(show)),
  recordAdd: show => dispatch(createRecord(show)),
  recordDelete: showId => dispatch(deleteRecord(showId)),
  clearUpdateRecord: showId => dispatch(unsetUpdateRecord(showId)),
  setFormOpen: open => dispatch(showformOpen(open))
});

const config = {
  form: 'Show form',
  enableReinitialize: true
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(config)(AddEditShow));
