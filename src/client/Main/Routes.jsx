import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Settings from '../Pages/Settings/Settings';


const Routes = [{
  name: 'Home',
  path: '/home',
  component: <Home pageName="Home" />,
  icon: <HomeIcon />
},
{
  name: 'About',
  path: '/about',
  component: <About pageName="About" />,
  icon: <HelpIcon />
},
{
  name: 'Settings',
  path: '/settings',
  component: <Settings pageName="Settings" />,
  icon: <SettingsIcon />
}];

export default Routes;
