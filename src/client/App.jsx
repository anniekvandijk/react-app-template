import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import Routes from './Main/Routes';
import Home from './Pages/Home/Home';
import appReducer from '../redux/appReducer';

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
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={myTheme}>
        <Switch>
          <Route exact path="/" name="Home" render={() => <Home pageName="Home" />} />
          { Routes.map(route => (
            <Route
              key={route.name}
              name={route.name}
              path={route.path}
              render={() => route.component}
            />
          ))}
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
);

export default App;
