import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormDialog from '../../components/Dialogs/FormDialog';
import AlertDialog from '../../components/Dialogs/AlertDialog';
import DefaultTable from '../../components/tables/DefaultTable';
import RenderedTextField from '../../components/FormFields/TextField';
import AddButton from '../../components/Buttons/AddButton';
import {
  createRecord, updateRecord, unsetUpdateRecord, deleteRecord, readRecords, setUpdateRecord
} from '../../../redux/showsReducer';

class ShowsContainer extends React.PureComponent {
  state = {
    alertDialogOpen: false,
    formDialogOpen: false
  };

  componentWillMount() {
    console.log('mounted');
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const {
      shows, recordUpdate, recordAdd, clearUpdateRecord,
      setRecordToUpdate, recordDelete, initialValues
    } = this.props;
    const { alertDialogOpen, formDialogOpen } = this.state;
    const header = initialValues === null ? 'Add show' : 'Edit show';

    const submitShow = (formValues) => {
      console.log(formValues);
      // update record
      if (initialValues !== null) {
        console.log('update record');
        console.log(formValues);
        recordUpdate(formValues);
        clearUpdateRecord(initialValues.id);
      } else {
      // add record
        console.log('add record');
        console.log(formValues);
        recordAdd(formValues);
      }
      this.setState({ formDialogOpen: false });
    };

    const addShow = () => {
      if (initialValues !== null) {
        clearUpdateRecord(initialValues.id);
      }
      this.setState({ formDialogOpen: true });
    };

    const editShow = (id) => {
      setRecordToUpdate(id);
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
          initialValues={initialValues}
          handleFormDialogSubmitClick={values => submitShow(values)}
          handleFormDialogCancelClick={cancelForm}
          handleFormDialogDeleteClick={formDeleteClick}
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
        <AddButton onClick={addShow} />
        <DefaultTable
          data={shows}
          handleTableEditClick={id => editShow(id)}
        />
      </div>
    );
  }
}

ShowsContainer.propTypes = {
  recordAdd: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired,
  setRecordToUpdate: PropTypes.func.isRequired,
  recordUpdate: PropTypes.func.isRequired,
  clearUpdateRecord: PropTypes.func.isRequired,
  recordDelete: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  shows: PropTypes.array
};

ShowsContainer.defaultProps = {
  initialValues: null,
  shows: null
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow,
  shows: state.shows.shows
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(readRecords('/api/shows')),
  setRecordToUpdate: id => dispatch(setUpdateRecord(id)),
  recordUpdate: show => dispatch(updateRecord(show)),
  recordAdd: show => dispatch(createRecord(show)),
  recordDelete: showId => dispatch(deleteRecord(showId)),
  clearUpdateRecord: showId => dispatch(unsetUpdateRecord(showId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
