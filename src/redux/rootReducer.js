import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  application: appReducer
});
export default rootReducer;
