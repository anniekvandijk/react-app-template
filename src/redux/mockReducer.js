import { createAction } from 'redux-actions';
import Api from '../client/api/Api';

const initialState = {
  data: []
};

const actionType = {
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR',
  SAVE_STATE: 'SAVE_STATE'
};

const apiSuccess = createAction(actionType.API_SUCCESS);
const apiError = createAction(actionType.API_ERROR);
const saveState = createAction(actionType.SAVE_STATE);

function readData(path) {
  return function action(dispatch) {
    return Api.get(path)
      .then(data => dispatch(apiSuccess(data)))
      .catch(error => dispatch(apiError(error)));
  };
}

function createData(path, body) {
  return function action(dispatch) {
    return Api.post(path, body)
      .then(data => dispatch(apiSuccess(data)))
      .catch(error => dispatch(apiError(error)));
  };
}

const mockReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SAVE_STATE:
      return { persons: Object.assign(state.persons.concat([action.payload])) };
    case actionType.API_SUCCESS:
      console.log('returned data');
      console.log(action.payload);
      return action.payload;
    case actionType.API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export {
  mockReducer,
  readData,
  createData,
  saveState
};
