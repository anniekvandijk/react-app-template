import SendIcon from '@material-ui/icons/Send';
import Home from './Pages/Home';
import About from './Pages/About';


const Routes = [{
  name: 'Home', path: '/home', component: Home, icon: SendIcon
},
{
  name: 'About', path: '/about', component: About, icon: SendIcon
}];

export default Routes;
