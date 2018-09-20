import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RenderedTextField from './FormComponents/TextField';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

const FormComponent = ({ classes, handleSubmit, onSubmit }) => (
  <div id="form">
    <h2>test</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="formfields">
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
      <Button color="secondary" className={classes.button} type="button">Cancel</Button>
      <Button variant="contained" color="primary" className={classes.button} type="submit">Submit</Button>
    </form>
  </div>
);


FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormComponent);
