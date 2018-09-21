import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import RenderedTextField from '../../components/FormFields/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const FormComponent = ({
  classes, handleSubmit, onSubmit, reset, pristine, submitting 
}) => (
  <Paper>
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <Button color="secondary" disabled={pristine || submitting} className={classes.button} type="button" onClick={reset}>Cancel</Button>
      <Button variant="contained" disabled={pristine || submitting} color="primary" className={classes.button} type="submit">Submit</Button>
    </form>
  </Paper>
);


FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormComponent);
