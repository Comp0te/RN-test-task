import { requestsAC } from '../../../../src/redux/requests/AC';
import {
  reducer as loginReducer,
  initialState as loginInitialState,
} from '../../../../src/redux/requests/requestsEntities/auth/login/reducers';
import {
  reducer as registerReducer,
  initialState as registerInitialState,
} from '../../../../src/redux/requests/requestsEntities/auth/register/reducers';
import { authInputMock, authResponseMock } from '../../../../__mocks__';

describe('Redux auth request reducers', () => {
  it('update state after LOGIN_REQUEST action', () => {
    expect(loginReducer(
      loginInitialState,
      requestsAC.login.Actions.login(authInputMock)),
    ).toMatchSnapshot();
  });

  it('update state after LOGIN_REQUEST_SUCCESS action', () => {
    expect(loginReducer(
      loginInitialState,
      requestsAC.login.Actions.loginSuccess(authResponseMock)),
    ).toMatchSnapshot();
  });

  it('update state after LOGIN_REQUEST_FAIL action', () => {
    expect(loginReducer(
      loginInitialState,
      requestsAC.login.Actions.loginFail('error')),
    ).toMatchSnapshot();
  });

  it('update state after REGISTER_REQUEST action', () => {
    expect(registerReducer(
      registerInitialState,
      requestsAC.register.Actions.register(authInputMock)),
    ).toMatchSnapshot();
  });

  it('update state after REGISTER_REQUEST_SUCCESS action', () => {
    expect(registerReducer(
      registerInitialState,
      requestsAC.register.Actions.registerSuccess(authResponseMock)),
    ).toMatchSnapshot();
  });

  it('update state after REGISTER_REQUEST_FAIL action', () => {
    expect(registerReducer(
      registerInitialState,
      requestsAC.register.Actions.registerFail('error')),
    ).toMatchSnapshot();
  });
});
