import React, { Component } from 'react';
import MuiFlatButton from "./buttons/flat.button";
import MuiFloatingActionButton from "./buttons/round.add.button";
import MuiRaisedButton from "./buttons/raised.button";

class Main extends Component {
    render() {
        return (
            <div id="main">
                <span><h1>Dit is de main page</h1></span>
                <p>
                <MuiFlatButton
                    text="flat"
                    onClick='test'
                    />
                <MuiRaisedButton
                    text="raised"
                    onClick='test'
                    />

                <MuiFloatingActionButton
                    onClick='test'
                    />
                </p>
            </div>
        )
    }
}

export default Main;