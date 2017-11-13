import React, { Component } from 'react';
import '../style/main.scss';
import MuiFlatButton from "./mui.components/buttons/flat.button";
import MuiFloatingActionButton from "./mui.components/buttons/floatingAction.button";
import MuiRaisedButton from "./mui.components/buttons/raised.button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Test React App</div>
        <div>
        <MuiFlatButton text={flat} onClick={test}/>
        <MuiFloatingActionButton onClick={test}/>
        <MuiRaisedButton text={raised} onClick={test}/>
        </div>
      </div>

    );
  }
}

export default App;
