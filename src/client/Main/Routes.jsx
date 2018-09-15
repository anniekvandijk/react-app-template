import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Settings from '../Pages/Settings/Settings';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/settings" component={Settings} />
    </div>
  );
}

export default Routes;
