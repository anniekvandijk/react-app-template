import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormComponent from './FormComponent';
import { saveMock } from '../../../redux/mockReducer';

const FormContainer = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, saveForm
  } = props;
  const submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
    saveForm(formValues);
    reset();
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

FormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  saveForm: PropTypes.func.isRequired
};

FormContainer.defaultProps = {
  pristine: true,
  submitting: false
};

const mapDispatchToProps = dispatch => ({
  saveForm: formValues => dispatch(saveMock(formValues))
});

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'MyForm' })(FormContainer));
