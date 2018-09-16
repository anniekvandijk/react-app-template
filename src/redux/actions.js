import { createAction } from 'redux-actions';

const actionType = {
  SET_SELECTED_MENU_ITEM: 'SET_SELECTED_MENU_ITEM'
};

const setSelectedMenuItem = createAction(actionType.SET_SELECTED_MENU_ITEM,
  (selectedMenuItem, headerText) => ({ selectedMenuItem, headerText }));

export {
  actionType,
  setSelectedMenuItem
};
