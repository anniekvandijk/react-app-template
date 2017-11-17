import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

const styles = {
    chip: {
        margin: 4,

    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },

};


function handleRequestDelete() {
    alert('You clicked the delete button.');
}

function handleTouchTap() {
    alert('You clicked the Chip.');
}

class AlpacaColorClasses extends Component {



    render() {
        return (
            <div id="colorClasses" style={styles.wrapper}>
                <Chip
                    //onRequestDelete={handleRequestDelete}
                    onClick={handleTouchTap}
                    style={styles.chip}
                >
                    <Avatar size={32} backgroundColor='#4E342E'>
                    </Avatar>
                    Brown
                </Chip>
                <Chip
                    //onRequestDelete={handleRequestDelete}
                    onClick={handleTouchTap}
                    style={styles.chip}
                >
                    <Avatar size={32} backgroundColor='#616161'>
                    </Avatar>
                    Grey
                </Chip>
            </div>
        )
    }
}

export default AlpacaColorClasses;