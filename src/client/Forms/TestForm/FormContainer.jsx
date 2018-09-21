import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormComponent from './FormComponent';

const FormContainer = ({ handleSubmit, pristine, reset, submitting }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };
  return (
    <FormComponent
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
      pristine={pristine}
      reset={reset}
      submitting={submitting}
    />
  );
};

const formConfiguration = {
  form: 'My test form'
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

FormContainer.defaultProps = {
  pristine: true,
  submitting: false
}

export default reduxForm(formConfiguration)(FormContainer);
