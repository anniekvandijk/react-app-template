import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { navigationReducer } from './navigationReducer';
import { mockReducer } from './mockReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  form: formReducer,
  mock: mockReducer,
  test: mockReducer
});
export default rootReducer;
