import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormDialog from '../../components/Dialogs/FormDialog';
import AlertDialog from '../../components/Dialogs/AlertDialog';
import RenderedTextField from '../../components/FormFields/TextField';
import AddButton from '../../components/Buttons/AddButton';
import createId from '../../utilities/createId';
import {
  createRecord, updateRecord, unsetUpdateRecord, deleteRecord
} from '../../../redux/showsReducer';

class ShowsContainer extends React.PureComponent {
  state = {
    alertDialogOpen: false,
    formDialogOpen: false
  };

  render() {
    const {
      recordUpdate, recordAdd, clearUpdateRecord, recordDelete, initialValues
    } = this.props;
    const { alertDialogOpen, formDialogOpen } = this.state;
    const header = initialValues === null ? 'Add show' : 'Edit show';
    const addEditShow = (formValues) => {
      console.log(formValues);
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
      this.setState({ formDialogOpen: false });
    };
    const addShow = () => {
      if (initialValues !== null) {
        clearUpdateRecord(initialValues.id);
      }
      this.setState({ formDialogOpen: true });
    };
    const formDeleteClick = () => {
      this.setState({ alertDialogOpen: true });
    };
    const deleteShow = () => {
      if (initialValues !== null) {
        console.log('delete record');
        console.log(initialValues.id);
        recordDelete(initialValues.id);
        clearUpdateRecord(initialValues.id);
        this.setState({ alertDialogOpen: false });
        this.setState({ formDialogOpen: false });
      }
    };
    const cancelDelete = () => {
      console.log('cancel delete');
      this.setState({ alertDialogOpen: false });
    };
    const cancelForm = () => {
      console.log('cancel');
      if (initialValues !== null) {
        console.log(initialValues.id);
        clearUpdateRecord(initialValues.id);
      }
      this.setState({ formDialogOpen: false });
    };
    return (
      <div id="shows-form">
        <AlertDialog
          title="Delete"
          alertDialogOpen={alertDialogOpen}
          handleAlertDialogOkClick={() => deleteShow()}
          handleAlertDialogCancelClick={() => cancelDelete()}
        >
          <DialogContentText component="div">
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
          </DialogContentText>
        </AlertDialog>
        <FormDialog
          header={header}
          formDialogOpen={formDialogOpen}
          handleFormDialogSubmitClick={values => addEditShow(values)}
          handleFormDialogCancelClick={() => cancelForm()}
          handleFormDialogDeleteClick={() => formDeleteClick()}
        >
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
        </FormDialog>
        <AddButton onClick={() => addShow()} />
      </div>
    );
  }
}

ShowsContainer.propTypes = {
  recordAdd: PropTypes.func.isRequired,
  recordUpdate: PropTypes.func.isRequired,
  clearUpdateRecord: PropTypes.func.isRequired,
  recordDelete: PropTypes.func.isRequired,
  initialValues: PropTypes.object
};

ShowsContainer.defaultProps = {
  initialValues: null
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
