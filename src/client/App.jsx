import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Material-ui
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
// Header
import Header from './components/app.components/Header/Header';
// Pages
import Home from './Pages/Home';
import About from './Pages/About';

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
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  </MuiThemeProvider>
);

export default App;
