import { Actions, ActionTypes } from '../../../src/redux/auth/AC';

describe('Redux auth actions', () => {
  it(`creates a ${ActionTypes.AUTH_LOGOUT} action`, () => {
    expect(Actions.logout()).toMatchSnapshot();
  });

  it(`creates a ${ActionTypes.AUTH_SET_IS_AUTH_USER} action`, () => {
    expect(Actions.setIsAuthUser(true)).toMatchSnapshot();
  });
});
