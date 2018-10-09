import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import RenderedTextField from '../../components/FormFields/TextField';
import ResetButton from '../../components/Buttons/ResetButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import DeleteButton from '../../components/Buttons/DeleteButton';
import AddButton from '../../components/Buttons/AddButton';
import createId from '../../utilities/createId';
import {
  createRecord, updateRecord, unsetUpdateRecord, deleteRecord, showformOpen
} from '../../../redux/showsReducer';

const AddEditShow = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, recordUpdate,
    recordAdd, clearUpdateRecord, deleteR, initialValues, setOpen, isOpen
  } = props;
  const header = initialValues === null ? 'Add show' : 'Edit show';
  const addEditShow = (values) => {
    // update record
    if (initialValues !== null) {
      console.log(values);
      recordUpdate(values);
      clearUpdateRecord(initialValues.id);
    } else {
    // add record
      console.log(values);
      values.id = createId();
      console.log(values);
      recordAdd(values);
      reset();
    }
    setOpen(false);
  };
  const deleteShow = () => {
    if (initialValues !== null) {
      deleteR(initialValues.id);
      clearUpdateRecord(initialValues.id);
      setOpen(false);
    }
  };
  const cancel = () => {
    if (initialValues !== null) {
      clearUpdateRecord(initialValues.id);
    } else {
      reset();
    }
    setOpen(false);
  };
  return (
    <div id="showform">
      <Dialog
        open={isOpen}
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
              <ResetButton
                pristine={pristine}
                submitting={submitting}
                onClick={() => cancel()}
              />
              <SubmitButton
                pristine={pristine}
                submitting={submitting}
                onClick={() => addEditShow()}
              />
              { initialValues !== null
                && <DeleteButton onClick={() => deleteShow()} />
              }
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <AddButton onClick={() => setOpen(true)} />
    </div>
  );
};

AddEditShow.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  recordAdd: PropTypes.func.isRequired,
  recordUpdate: PropTypes.func.isRequired,
  clearUpdateRecord: PropTypes.func.isRequired,
  deleteR: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  setOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool
};

AddEditShow.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null,
  isOpen: false
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow,
  isOpen: state.shows.showformOpen
});

const mapDispatchToProps = dispatch => ({
  recordUpdate: formValues => dispatch(updateRecord(formValues)),
  recordAdd: formValues => dispatch(createRecord(formValues)),
  deleteR: id => dispatch(deleteRecord(id)),
  clearUpdateRecord: id => dispatch(unsetUpdateRecord(id)),
  setOpen: open => dispatch(showformOpen(open))
});

const config = {
  form: 'Show form',
  enableReinitialize: true
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(config)(AddEditShow));
