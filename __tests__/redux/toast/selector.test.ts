import { getToastMessage } from '../../../src/redux/toast/selectors';
import { initialState } from '../../../src/redux/toast/reducers';
import store from '../../../src/redux/store';

describe('Redux toast selectors', () => {
  const state = store.getState();

  it(`should get toast message`, () => {
    expect(getToastMessage(state)).toEqual(initialState.message);
  });
});
