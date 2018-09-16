import * as actions from './actions';

const initialState = {
  selectedMenuItem: 0,
  headerText: 'Home'
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case actions.actionType.SET_SELECTED_MENU_ITEM:
    { const selectedMenuItem = action.payload;
      return { ...state, selectedMenuItem };
    }
    case actions.actionType.SET_HEADER_TITLE:
    {
      const headerText = action.payload;
      return { ...state, headerText };
    }
    default:
      return state;
  }
}

export default appReducer;
