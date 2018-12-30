import { createAction } from 'redux-actions';
import Api from '../client/api/Api';

const initialState = {
  shows: null,
  updateShow: null,
  activeShow: null
};

const actionType = {
  API_CALL_STARTED: 'API_CALL_STARTED',
  API_SUCCESS: 'API_SUCCESS',
  API_ERROR: 'API_ERROR',
  CREATE_RECORD: 'CREATE_RECORD',
  DELETE_RECORD: 'DELETE_RECORD',
  UPDATE_RECORD: 'UPDATE_RECORD',
  SET_UPDATE_RECORD: 'SET_UPDATE_RECORD',
  UNSET_UPDATE_RECORD: 'UNSET_UPDATE_RECORD',
  SET_ACTIVE_RECORD: 'SET_ACTIVE_RECORD',
  UNSET_ACTIVE_RECORD: 'UNSET_ACTIVE_RECORD'
};

const apiCallStarted = createAction(actionType.API_CALL_STARTED);
const apiSuccess = createAction(actionType.API_SUCCESS);
const apiError = createAction(actionType.API_ERROR);
const createRecord = createAction(actionType.CREATE_RECORD);
const deleteRecord = createAction(actionType.DELETE_RECORD);
const updateRecord = createAction(actionType.UPDATE_RECORD);
const setUpdateRecord = createAction(actionType.SET_UPDATE_RECORD);
const unsetUpdateRecord = createAction(actionType.UNSET_UPDATE_RECORD);
const setActiveRecord = createAction(actionType.SET_ACTIVE_RECORD);
const unsetActiveRecord = createAction(actionType.UNSET_ACTIVE_RECORD);

const readRecords = path => (dispatch) => {
  dispatch(apiCallStarted());
  Api.get(path)
    .then(shows => dispatch(apiSuccess(shows)))
    .catch(error => dispatch(apiError(error)));
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_RECORD:
      return {
        ...state,
        shows: state.shows.concat(action.payload)
      };
    case actionType.DELETE_RECORD:
      return {
        ...state,
        shows: state.shows.filter(shows => shows.id !== action.payload)
      };
    case actionType.SET_UPDATE_RECORD:
      return {
        ...state,
        updateShow: state.shows.filter(shows => shows.id === action.payload)[0]
      };
    case actionType.UPDATE_RECORD:
      return {
        ...state,
        shows: state.shows.filter(shows => shows.id !== action.payload.id).concat(action.payload)
      };
    case actionType.UNSET_UPDATE_RECORD:
      return {
        ...state,
        updateShow: null
      };
    case actionType.SET_ACTIVE_RECORD:
      const active = state.shows.filter(shows => shows.id === action.payload)[0]
      active.activeShow = true;
      console.log('active show', active);
      return {
        ...state,
        shows: state.shows.filter(shows => shows.id !== action.payload).concat(active)
      };
    case actionType.UNSET_ACTIVE_RECORD:
      const inActive = state.shows.filter(shows => shows.id === action.payload)[0]
      inActive.activeShow = false;
      console.log('inactive show', inActive);
      return {
        ...state,
        shows: state.shows.filter(shows => shows.id !== action.payload).concat(inActive)
      };
    case actionType.API_CALL_STARTED:
      return state;
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
  updateRecord,
  unsetUpdateRecord,
  setActiveRecord,
  unsetActiveRecord
};
