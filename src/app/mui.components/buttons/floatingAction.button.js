import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';

class MuiFloatingActionButton extends Component {
    render() {
        const { mini = true, primary = true, secondary = false, disabled = false, onClick, classNames = '', ...props } = this.props;
        return (
            <FloatingActionButton
                mini={mini}
                className={`action-button ${classNames.trim()}`}
                primary={primary}
                secondary={secondary}
                disabled={disabled}
                onTouchTap={onClick}
                {...props}
            />
        );
    }
}

MuiFloatingActionButton.propTypes = {
    mini: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    classNames: PropTypes.string,
};

export default MuiFloatingActionButton;