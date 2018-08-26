import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class MuiRoundAddButton extends Component {
  render() {
    const {
      disabled = false, onClick, classNames = '', ...props
    } = this.props;
    return (
      <FloatingActionButton
        className={`button floating-action-button ${classNames.trim()}`}
        disabled={disabled}
        onClick={onClick}
        {...props}>
        <ContentAdd/>
      </FloatingActionButton>
    );
  }
}

MuiRoundAddButton.propTypes = {
  disabled: PropTypes.bool,
  //    onClick: PropTypes.func.isRequired,
  classNames: PropTypes.string
};

export default MuiRoundAddButton;
