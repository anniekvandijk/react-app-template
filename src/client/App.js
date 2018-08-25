import React, { Component } from 'react';
import './style/style.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "../app/app.components/Header";
import Main from "../app/app.components/Main";

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