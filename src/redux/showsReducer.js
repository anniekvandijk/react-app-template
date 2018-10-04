import { createAction } from 'redux-actions';
import Api from '../client/api/Api';

const initialState = {
  shows: [],
  updateShow: null,
  activeShow: null
};

const actionType = {
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR',
  CREATE_RECORD: 'CREATE_RECORD',
  DELETE_RECORD: 'DELETE_RECORD',
  UPDATE_RECORD: 'UPDATE_RECORD',
  UNSET_UPDATE_RECORD: 'UNSET_UPDATE_RECORD',
  RESET_UPDATE_RECORD: 'RESET_UPDATE_RECORD',
  SET_UPDATE_RECORD: 'SET_UPDATE_RECORD'
};

const apiSuccess = createAction(actionType.API_SUCCESS);
const apiError = createAction(actionType.API_ERROR);
const createRecord = createAction(actionType.CREATE_RECORD);
const deleteRecord = createAction(actionType.DELETE_RECORD);
const updateRecord = createAction(actionType.UPDATE_RECORD);
const setUpdateRecord = createAction(actionType.SET_UPDATE_RECORD);
const unsetUpdateRecord = createAction(actionType.UNSET_UPDATE_RECORD);
const resetUpdateRecord = createAction(actionType.RESET_UPDATE_RECORD);

function readRecords(path) {
  return function action(dispatch) {
    return Api.get(path)
      .then(shows => dispatch(apiSuccess(shows)))
      .catch(error => dispatch(apiError(error)));
  };
}

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_RECORD:
      return { ...state, shows: state.shows.concat(action.payload) };
    case actionType.DELETE_RECORD:
      return { ...state, shows: state.shows.filter(shows => shows.id !== action.payload) };
    case actionType.SET_UPDATE_RECORD:
      return { ...state, updateShow: state.shows.filter(shows => shows.id === action.payload) };
    case actionType.UPDATE_RECORD: {
      const updatedShow = state.updateShow;
      const notUpdated = state.shows.filter(shows => shows.id !== action.payload);
      return { ...state, shows: notUpdated.shows.concat(updatedShow) };
    }
    case actionType.UNSET_UPDATE_RECORD:
      return { ...state, updateShow: null };
    case actionType.RESET_UPDATE_RECORD:
      return { ...state, updateShow: state.shows.filter(shows => shows.id === action.payload) };
    case actionType.API_SUCCESS:
      return action.payload;
    case actionType.API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export {
  showsReducer,
  readRecords,
  createRecord,
  deleteRecord,
  setUpdateRecord,
  updateRecord
};
