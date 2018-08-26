import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class MuiRaisedButton extends Component {
  render() {
    const {
      text, disabled = false, onClick, classNames = '', ...props
    } = this.props;
    return (
      <RaisedButton
        primary
        label={text}
        className={`button raised-button ${classNames.trim()}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      />
    );
  }
}

MuiRaisedButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  //    onClick: PropTypes.func.isRequired,
  classNames: PropTypes.string
};

export default MuiRaisedButton;
