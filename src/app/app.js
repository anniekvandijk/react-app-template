import React, { Component } from 'react';
import '../style/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./mui.components/header";
import Main from "./mui.components/main";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div id="app">
            <Header />
            <Main />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;