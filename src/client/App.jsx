import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import Routes from './routes';
import Home from './Pages/Home';

const myTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});

const App = () => (
  <MuiThemeProvider theme={myTheme}>
    {/* <Header /> */}
    <Switch>
      <Route exact path="/" name="Home" component={Home} />
      { Routes.map(route => <Route key={route.name} name={route.name} path={route.path} component={route.component} />)}
    </Switch>
  </MuiThemeProvider>
);

export default App;
