import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import createId from '../../utilities/createId';
import AddShowFormComponent from './AddShowFormComponent';
import { createRecord } from '../../../redux/showsReducer';

const ShowFormContainer = (props) => {
  const {
    handleSubmit, pristine, reset, submitting, save
  } = props;
  const submitNewShow = (formValues) => {
    formValues.id = createId();
    save(formValues);
    reset();
  };
  return (
    <AddShowFormComponent
      onSubmit={submitNewShow}
      handleSubmit={handleSubmit}
      pristine={pristine}
      reset={reset}
      submitting={submitting}
    />
  );
};

ShowFormContainer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  save: PropTypes.func.isRequired
};

ShowFormContainer.defaultProps = {
  pristine: true,
  submitting: false
};

const mapDispatchToProps = dispatch => ({
  save: formValues => dispatch(createRecord(formValues))
});

export default connect(null, mapDispatchToProps)(reduxForm({ form: 'show form' })(ShowFormContainer));
