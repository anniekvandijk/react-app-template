import React, { Component } from 'react';
import MuiFlatButton from "../mui.components/buttons/FlatButton";
import MuiFloatingActionButton from "../mui.components/buttons/RoundAddButton";
import MuiRaisedButton from "../mui.components/buttons/RaisedButton";
import AlpacaColorClasses from "./shared/AlpacaColorClasses";

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
                <AlpacaColorClasses/>
            </div>
        )
    }
}

export default Main;