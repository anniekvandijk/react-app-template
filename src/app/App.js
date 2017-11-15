import React, { Component } from 'react';
import '../style/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./app.components/Header";
import Main from "./app.components/Main";

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