import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormDialog from '../components/dialogs/FormDialog';
import AlertDialog from '../components/dialogs/AlertDialog';
import DefaultTable from '../components/tables/DefaultTable';
import RenderedTextField from '../components/formFields/TextField';
import AddButton from '../components/buttons/AddButton';
import {
  createRecord, updateRecord, unsetUpdateRecord, deleteRecord, readRecords, setUpdateRecord
} from '../../redux/showsReducer';
import RenderedSwitch from '../components/formFields/Switch';

class ShowsContainer extends React.PureComponent {
  state = {
    alertDialogOpen: false,
    formDialogOpen: false
  };

  componentWillMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const {
      shows, recordUpdate, recordAdd, clearUpdateRecord,
      setRecordToUpdate, recordDelete, initialValues, 
      unsetRecordActive, setRecordActive
    } = this.props;
    const { alertDialogOpen, formDialogOpen } = this.state;
    const header = initialValues === null ? 'Add show' : 'Edit show';

    const submitShow = (formValues) => {
      // update record
      if (initialValues !== null) {
        recordUpdate(formValues);
        clearUpdateRecord(initialValues.id);
      } else {
      // add record
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
        recordDelete(initialValues.id);
        clearUpdateRecord(initialValues.id);
        this.setState({ alertDialogOpen: false });
        this.setState({ formDialogOpen: false });
      }
    };

    const cancelDelete = () => {
      this.setState({ alertDialogOpen: false });
    };

    const cancelForm = () => {
      if (initialValues !== null) {
        clearUpdateRecord(initialValues.id);
      }
      this.setState({ formDialogOpen: false });
    };

    /*
      handle active show
    */

    const handleActiveShow = (id, bool) => {
      console.log('handle this');
      if (bool === true) {
        // set all records on inactive exept selected one
        shows.map((s) => {
          if (s.id === id) {
            setRecordActive(id);
          } else {
            unsetRecordActive(id);
          }
        });
      }
    };

    return (
      <div id="showscontainer">
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
          <RenderedSwitch
            name="activeShow"
            label="Show active"
            checked={initialValues !== null && initialValues.activeShow}
            onChange={id => handleActiveShow(id, false)}
          />
        </FormDialog>
        <DefaultTable
          data={shows}
          tableHeaders={(['Active', 'Name', 'Date', 'Location'])}
          shownDataValues={(['', 'name', 'location', 'date'])}
          handleTableEditClick={id => editShow(id)}
        >
          <RenderedSwitch
            checked={initialValues !== null && initialValues.activeShow}
          />
        </DefaultTable>
        <AddButton onClick={addShow} />
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
  setRecordToUpdate: showId => dispatch(setUpdateRecord(showId)),
  recordUpdate: show => dispatch(updateRecord(show)),
  recordAdd: show => dispatch(createRecord(show)),
  recordDelete: showId => dispatch(deleteRecord(showId)),
  clearUpdateRecord: showId => dispatch(unsetUpdateRecord(showId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowsContainer);
