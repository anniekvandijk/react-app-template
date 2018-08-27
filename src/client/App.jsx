import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/app.components/Header';
import Main from './components/app.components/Main';

const App = () => (
  <MuiThemeProvider>
    <div id="app">
      <Header />
      <Main />
    </div>
  </MuiThemeProvider>
);

export default App;
