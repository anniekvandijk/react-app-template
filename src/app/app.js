import React, { Component } from 'react';
import '../style/main.scss';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./header";
import Main from "./main";

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <div id="App">
            <Header />
            <Main />
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;