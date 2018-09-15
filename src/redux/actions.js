import { createAction } from 'redux-actions';

const actionType = {
  SET_SELECTED_MENU_ITEM: 'SET_SELECTED_MENU_ITEM',
  SET_HEADER_TITLE: 'SET_HEADER_TITLE'
};

const setSelectedMenuItem = createAction(actionType.SET_SELECTED_MENU_ITEM);
const setHeaderTitle = createAction(actionType.SET_HEADER_TITLE);

export {
  actionType,
  setSelectedMenuItem,
  setHeaderTitle
};
