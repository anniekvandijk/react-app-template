import appReducer from '../../src/redux/appReducer';
import * as actions from '../../src/redux/actions';

describe('Menu set selected', () => {
  it('should return selected menu item', () => {
    const expectedIndex = 1;
    const selectedMenuItem = actions.setSelectedMenuItem(1);
    expect(selectedMenuItem.payload).toEqual(expectedIndex);
  });
  it('should have an initial state', () => {
    const expactedState = 0;
    const state = appReducer(undefined, actions.actionType.SET_SELECTED_MENU_ITEM);
    expect(state.selectedMenuItem).toEqual(expactedState);
  });
  it('should change state', () => {
    const expactedState = 2;
    const state = appReducer({ selectedMenuItem: 2 }, actions.actionType.SET_SELECTED_MENU_ITEM);
    expect(state.selectedMenuItem).toEqual(expactedState);
  });
});

describe('Menu set header', () => {
  it('should return header name', () => {
    const expectedHeader = 'Test';
    const changedHeader = actions.setHeaderTitle('Test');
    expect(changedHeader.payload).toEqual(expectedHeader);
  });
  it('should have an initial state', () => {
    const expactedState = 'Home';
    const state = appReducer(undefined, actions.actionType.SET_HEADER_TITLE);
    expect(state.headerText).toEqual(expactedState);
  });
  it('should change state', () => {
    const expactedState = 'Test too';
    const state = appReducer({ headerText: 'Test too' }, actions.actionType.SET_HEADER_TITLE);
    expect(state.headerText).toEqual(expactedState);
  });
});
