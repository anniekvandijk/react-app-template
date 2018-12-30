import React from 'react';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const RenderedSwitch = (props) => {
  const { checked, onChange, label } = props;
  return (
    <FormControlLabel
      control={(
        <Switch
          checked={checked}
          onChange={onChange}
        />
        )
      }
      label={label}
    />
  );
};

RenderedSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
};

RenderedSwitch.defaultProps = {
  label: ''
};

export default RenderedSwitch;
