import { requestsAC } from '../../../../src/redux/requests/AC';
import { authInputMock, authResponseMock } from '../../../../__mocks__';

describe('Redux auth request actions', () => {
  it('creates a LOGIN_REQUEST action', () => {
    expect(requestsAC.login.Actions.login(authInputMock)).toMatchSnapshot();
  });

  it('creates a LOGIN_REQUEST_SUCCESS action', () => {
    expect(requestsAC.login.Actions.loginSuccess(authResponseMock)).toMatchSnapshot();
  });

  it('creates a LOGIN_REQUEST_FAIL action', () => {
    expect(requestsAC.login.Actions.loginFail('error')).toMatchSnapshot();
  });

  it('creates a REGISTER_REQUEST action', () => {
    expect(requestsAC.register.Actions.register(authInputMock)).toMatchSnapshot();
  });

  it('creates a REGISTER_REQUEST_SUCCESS action', () => {
    expect(requestsAC.register.Actions.registerSuccess(authResponseMock)).toMatchSnapshot();
  });

  it('creates a REGISTER_REQUEST_FAIL action', () => {
    expect(requestsAC.register.Actions.registerFail('error')).toMatchSnapshot();
  });
});
