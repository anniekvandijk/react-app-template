import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Settings from '../Pages/Settings/Settings';

function Routes() {
  return (
    <div>
      <Route exact path="/" render={() => <Home pageName="Home" />} />
      <Route exact path="/home" render={() => <Home pageName="Home" />} />
      <Route exact path="/about" render={() => <About pageName="Home" />} />
      <Route exact path="/settings" render={() => <Settings pageName="Home" />} />
    </div>
  );
}

export default Routes;
