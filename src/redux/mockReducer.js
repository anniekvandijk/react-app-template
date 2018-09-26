import { createAction } from 'redux-actions';
import Api from '../client/api/Api';

const initialState = {
  persons: []
};

const actionType = {
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR',
  SAVE_MOCK: 'SAVE_MOCK'
};

const apiSuccess = createAction(actionType.API_SUCCESS);
const apiError = createAction(actionType.API_ERROR);
const saveMock = createAction(actionType.SAVE_MOCK);

function loadMock() {
  return function action(dispatch) {
    return Api.get('/mockdata')
      .then(data => dispatch(apiSuccess(data)))
      .catch(error => dispatch(apiError(error)));
  };
}

const mockReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SAVE_MOCK:
      return { persons: Object.assign(state.persons.concat([action.payload])) };
    case actionType.API_SUCCESS:
      return action.payload;
    case actionType.API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export { mockReducer, loadMock, saveMock };
