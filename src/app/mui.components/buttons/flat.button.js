import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

class MuiFlatButton extends Component {
    render() {
        const { text, primary = true, secondary = false, disabled = false, onClick, classNames = '', ...props } = this.props;
        return (
            <FlatButton
                label={text}
                className={`raised-button ${classNames.trim()}`}
                primary={primary}
                secondary={secondary}
                disabled={disabled}
                onTouchTap={onClick}
                {...props}
            />
        );
    }
}

MuiFlatButton.propTypes = {
    text: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    classNames: PropTypes.string,
};

export default MuiFlatButton;
