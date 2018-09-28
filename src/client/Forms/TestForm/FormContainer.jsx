import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import FormComponent from './FormComponent';
import { saveState, createData } from '../../../redux/mockReducer';

const FormContainer = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, state, save
  } = props;
  const submitForm = (formValues) => {
    state(formValues);
    save({
      persons: {
        firstName: formValues.firstName,
        hobbies: formValues.hobbies
      }
    });
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
  state: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired
};

FormContainer.defaultProps = {
  pristine: true,
  submitting: false
};

const mapDispatchToProps = dispatch => ({
  state: formValues => dispatch(saveState(formValues)),
  save: body => dispatch(createData('/mockdata/add', body))
});

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'MyForm' })(FormContainer));
