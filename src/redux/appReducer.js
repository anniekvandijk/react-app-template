import * as actions from './actions';

const initialState = {
  selectedMenuItem: 0,
  headerText: 'Home'
};

function appReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case actions.actionType.SET_SELECTED_MENU_ITEM:
      return {
        ...state
      };
    case actions.actionType.SET_HEADER_TITLE:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default appReducer;
