import { getIsLoginRequestLoading } from '../../../../src/redux/requests/selectors';
import { initialState } from '../../../../src/redux/requests/requestsEntities/auth/login/reducers';
import store from '../../../../src/redux/store';

describe('Redux auth requests selectors', () => {
  const state = store.getState();

  it(`should get isLoading login request`, () => {
    expect(getIsLoginRequestLoading(state)).toEqual(initialState.isLoading);
  });
});
