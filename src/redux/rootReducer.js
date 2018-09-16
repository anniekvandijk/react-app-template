import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  application: appReducer
});
export default rootReducer;
