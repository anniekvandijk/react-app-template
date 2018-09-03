import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import Routes from './Main/Routes';
import Home from './Pages/Home/Home';

const myTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const App = () => (
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
);

export default App;
