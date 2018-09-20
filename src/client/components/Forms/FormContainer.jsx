import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormComponent from './FormComponent';

const FormContainer = ({ handleSubmit }) => {
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
  };
  return (
    <FormComponent
      onSubmit={submitForm}
      handleSubmit={handleSubmit}
    />
  );
};

const formConfiguration = {
  form: 'My test form'
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm(formConfiguration)(FormContainer);
