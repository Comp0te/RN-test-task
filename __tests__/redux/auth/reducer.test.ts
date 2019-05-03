import { Actions, ActionTypes } from '../../../src/redux/auth/AC';
import {
  authReducer,
  initialState as authInitialState,
} from '../../../src/redux/auth/reducers';

describe('Redux auth reducers', () => {
  it(`update state after ${ActionTypes.AUTH_LOGOUT} action`, () => {
    expect(authReducer(
      authInitialState,
      Actions.logout()),
    ).toMatchSnapshot();
  });

  it(`update state after ${ActionTypes.AUTH_SET_IS_AUTH_USER} action`, () => {
    expect(authReducer(
      authInitialState,
      Actions.setIsAuthUser(true)),
    ).toMatchSnapshot();
  });
});
