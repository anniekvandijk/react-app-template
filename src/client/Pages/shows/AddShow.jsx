import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import createId from '../../utilities/createId';
import { createRecord } from '../../../redux/showsReducer';
import RenderedTextField from '../../components/FormFields/TextField';
import ResetButton from '../../components/Buttons/ResetButton';
import SubmitButton from '../../components/Buttons/SubmitButton';

const AddShow = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, save
  } = props;
  const submit = (formValues) => {
    formValues.id = createId();
    save(formValues);
    reset();
  };
  return (
    <Paper>
      <form onSubmit={handleSubmit(submit)}>
        <h2>Add Show</h2>
        <div>
          <Field
            name="name"
            label="Show name"
            placeholder="Enter showname"
            helperText="Enter name without location or date"
            component={RenderedTextField}
          />
          <Field
            name="location"
            label="Show Location"
            placeholder="Enter show location"
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

AddShow.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  save: PropTypes.func.isRequired
};

AddShow.defaultProps = {
  pristine: true,
  submitting: false
};

const mapDispatchToProps = dispatch => ({
  save: formValues => dispatch(createRecord(formValues))
});

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'add show form' })(AddShow));
