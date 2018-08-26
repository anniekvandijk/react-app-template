import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class MuiFlatButton extends Component {
  render() {
    const {
      text, disabled = false, onClick, classNames = '', ...props
    } = this.props;
    return (
      <FlatButton
        primary
        label={text}
        className={`button flat-button ${classNames.trim()}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      />
    );
  }
}

MuiFlatButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  //   onClick: PropTypes.func.isRequired,
  classNames: PropTypes.string
};

export default MuiFlatButton;
