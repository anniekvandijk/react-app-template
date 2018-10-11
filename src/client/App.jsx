import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import addstore from '../shared/store';
import Routes from '../shared/Routes';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#8b6b61',
      main: '#5d4037',
      dark: '#321911',
      contrastText: '#fff'
    },
    secondary: {
      light: '#d2cd55',
      main: '#9e9c22',
      dark: '#6c6e00',
      contrastText: '#000'
    },
    error: red
  }
});

const App = () => (
  <Provider store={addstore}>
    <BrowserRouter>
      <MuiThemeProvider theme={myTheme}>
        <Routes />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
