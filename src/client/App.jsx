import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Routes from './Main/Routes';
import rootReducer from '../redux/rootReducer';

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

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={myTheme}>
        <Switch>
          <Routes />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
