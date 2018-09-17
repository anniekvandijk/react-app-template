import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import FormComponent from './FormComponent';

export const FormContainer = ({ handleSubmit }) => {
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
  form: 'my-very-own-form'
};

FormContainer.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm(formConfiguration)(FormContainer);
