import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import RenderedTextField from '../../components/FormFields/TextField';
import ResetButton from '../../components/Buttons/ResetButton';
import SubmitButton from '../../components/Buttons/SubmitButton';
import { updateRecord } from '../../../redux/showsReducer';

const EditShowFormContainer = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, save, initialValues
  } = props;
  const submit = (formValues) => {
    save(formValues);
  };
  if (initialValues === null) {
    return (
      <Paper>
        <div className="loading">Loading ... </div>
      </Paper>
    );
  }
  return (
    <Paper>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Edit Show</h2>
        <div>
          <Field
            name="id"
            value={initialValues.id}
            label="id"
            component={RenderedTextField}
          />
          <Field
            name="name"
            value={initialValues.name}
            label="Show name"
            helperText="Enter name without location or date"
            component={RenderedTextField}
          />
          <Field
            name="location"
            value={initialValues.location}
            label="Show Location"
            component={RenderedTextField}
          />
        </div>
        <div>
          <ResetButton
            pristine={pristine}
            submitting={submitting}
            reset={reset}
          />
          <SubmitButton
            pristine={pristine}
            submitting={submitting}
          />
        </div>
      </form>
    </Paper>
  );
};

EditShowFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  save: PropTypes.func.isRequired,
  initialValues: PropTypes.object
};

EditShowFormContainer.defaultProps = {
  pristine: true,
  submitting: false,
  initialValues: null
};

const mapStateToProps = state => ({
  initialValues: state.shows.updateShow
});

const mapDispatchToProps = dispatch => ({
  save: formValues => dispatch(updateRecord(formValues))
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({ form: 'edit show form' })(EditShowFormContainer));
