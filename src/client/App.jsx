import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import Routes from './Main/Routes';
import rootReducer from '../redux/rootReducer';

const myTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

function App() {
  return (
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
}

export default App;
