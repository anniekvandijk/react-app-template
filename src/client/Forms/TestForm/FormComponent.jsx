import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import RenderedTextField from '../../components/FormFields/TextField';
import ResetButton from '../../components/Buttons/ResetButton';
import SubmitButton from '../../components/Buttons/SubmitButton';

const FormComponent = (props) => {
  const {
    handleSubmit, onSubmit, reset, pristine, submitting
  } = props;
  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field
            name="firstName"
            label="First Name"
            placeholder="Enter your name"
            helperText="Put your name here"
            component={RenderedTextField}
          />
          <Field
            name="hobbies"
            label="Hobbies"
            placeholder="Enter your hobbies"
            helperText="Put all hobbies here"
            multiline
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

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default (FormComponent);
