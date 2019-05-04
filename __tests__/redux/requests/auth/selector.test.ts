import {
  getIsLoginRequestLoading,
  getIsRegisterRequestLoading,
} from '../../../../src/redux/requests/selectors';
import { initialState as loginInitialState } from '../../../../src/redux/requests/requestsEntities/auth/login/reducers';
import { initialState as registerInitialState } from '../../../../src/redux/requests/requestsEntities/auth/register/reducers';
import store from '../../../../src/redux/store';

describe('Redux auth requests selectors', () => {
  const state = store.getState();

  it(`should get isLoading login request`, () => {
    expect(getIsLoginRequestLoading(state)).toEqual(loginInitialState.isLoading);
  });

  it(`should get isLoading register request`, () => {
    expect(getIsRegisterRequestLoading(state)).toEqual(registerInitialState.isLoading);
  });
});
