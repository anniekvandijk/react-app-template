import appReducer from '../../src/redux/appReducer';
import * as actions from '../../src/redux/actions';

describe('Menu set selected', () => {
  it('should return selected menu item', () => {
    const expectedIndex = 1;
    const expectedHeader = 'Test';
    const menu = actions.setSelectedMenuItem(1, 'Test');
    expect(menu.payload.selectedMenuItem).toEqual(expectedIndex);
    expect(menu.payload.headerText).toEqual(expectedHeader);
  });
  it('should have an initial state', () => {
    const expectedIndex = 0;
    const expectedHeader = 'Home';
    const state = appReducer(undefined, actions.actionType.SET_SELECTED_MENU_ITEM);
    expect(state.menu.selectedMenuItem).toEqual(expectedIndex);
    expect(state.menu.headerText).toEqual(expectedHeader);
  });
  it('should change state', () => {
    const expectedIndex = 2;
    const expectedHeader = 'Test';
    const state = appReducer({ menu: { selectedMenuItem: 2, headerText: 'Test' } }, actions.actionType.SET_SELECTED_MENU_ITEM);
    expect(state.menu.selectedMenuItem).toEqual(expectedIndex);
    expect(state.menu.headerText).toEqual(expectedHeader);
  });
});
