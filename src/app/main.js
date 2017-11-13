import React, { Component } from 'react';
import MuiFlatButton from "./mui.components/buttons/flat.button";
import MuiFloatingActionButton from "./mui.components/buttons/round.add.button";
import MuiRaisedButton from "./mui.components/buttons/raised.button";

class Main extends Component {
    render() {
        return (
            <div>
                <span>Dit is de main page</span>
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