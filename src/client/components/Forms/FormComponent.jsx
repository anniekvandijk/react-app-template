import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

export const FormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div>
      <h1>My Very own Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="firstName"
          component="input"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

FormComponent.propTypes = {
 handleSubmit: PropTypes.func,
 onSubmit: PropTypes.func
};

export default FormComponent;
