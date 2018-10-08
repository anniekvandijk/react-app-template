import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import RenderedTextField from '../../components/FormFields/TextField';
import ResetButton from '../../components/Buttons/ResetButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import createId from '../../utilities/createId';
import { createRecord, updateRecord, unsetUpdateRecord, showformOpen } from '../../../redux/showsReducer';

const AddEditShow = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, recordUpdate,
    recordAdd, clearUpdateRecord, initialValues, showformOpen
  } = props;
  const header = initialValues === null ? 'Add show' : 'Edit show';
  const submit = (formValues) => {
    if (initialValues !== null) {
      recordUpdate(formValues);
      clearUpdateRecord(formValues.id);
    } else {
      formValues.id = createId();
      recordAdd(formValues);
      reset();
    }
  };
  const cancel = (formValues) => {
    console.log('cancel');
    if (initialValues !== null) {
      clearUpdateRecord(formValues.id);
    } else {
      reset();
    }
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit(submit)}>
        <Typography variant="title" gutterBottom>{header}</Typography>
        <div>
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
        <div>
          <ResetButton
            pristine={pristine}
            submitting={submitting}
            onClick={cancel}
          />
          <SubmitButton
            pristine={pristine}
            submitting={submitting}
            onClick={() => submit()}
          />
        </div>
      </form>
    </Paper>
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
  initialValues: PropTypes.object,
  showformOpen: PropTypes.bool
};

AddEditShow.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null,
  showformOpen: false
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow,
  open: state.shows.showformOpen
});

const mapDispatchToProps = dispatch => ({
  recordUpdate: formValues => dispatch(updateRecord(formValues)),
  recordAdd: formValues => dispatch(createRecord(formValues)),
  clearUpdateRecord: id => dispatch(unsetUpdateRecord(id)),
  setOpen: () => dispatch(showformOpen(false))
});

const config = {
  form: 'Show form',
  enableReinitialize: true
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm(config)(AddEditShow));
