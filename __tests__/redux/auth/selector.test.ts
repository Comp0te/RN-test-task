import { getIsAuthUser } from '../../../src/redux/auth/selectors';
import { initialState } from '../../../src/redux/auth/reducers';
import store from '../../../src/redux/store';

describe('Redux auth selectors', () => {
  const state = store.getState();

  it(`should get IsAuthUser`, () => {
    expect(getIsAuthUser(state)).toEqual(initialState.isAuthUser);
  });
});
