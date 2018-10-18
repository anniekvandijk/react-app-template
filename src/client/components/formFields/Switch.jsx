import React from 'react';
import Switch from '@material-ui/core/Switch';

class RenderedSwitch extends React.Component {
  state = {
    active: false
  };

  handleChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { active } = this.state;
    return (
      <Switch
        id="switch"
        checked={active}
        onChange={this.handleChange('active')}
        value="active"
      />
    );
  }
}

export default RenderedSwitch;
