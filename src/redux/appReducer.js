import * as actions from './actions';

const initialState = {
  menu: {
    selectedMenuItem: 0,
    headerText: 'Home'
  }
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.actionType.SET_SELECTED_MENU_ITEM:
    {
      const selectedMenuItem = action.payload.selectedMenuItem;
      const headerText = action.payload.headerText;
      return { ...state, menu: { selectedMenuItem, headerText } };
    }
    default:
      return state;
  }
};

export default appReducer;
