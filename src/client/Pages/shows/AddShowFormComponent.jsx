import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import RenderedTextField from '../../components/FormFields/TextField';
import ResetButton from '../../components/Buttons/ResetButton';
import SubmitButton from '../../components/Buttons/SubmitButton';

const AddShowFormComponent = (props) => {
  const {
    handleSubmit, onSubmit, reset, pristine, submitting
  } = props;
  return (
    <Paper>
      <form onSubmit={handleSubmit(onSubmit)}>
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

AddShowFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default (AddShowFormComponent);
