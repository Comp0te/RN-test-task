import { ActionsObservable } from 'redux-observable';
import {
  setIsAuthUserEpic, setTokenEpic, deleteTokenEpic,
} from '../../../src/redux/auth/epics';
import authService from '../../../src/shared/services/auth.service';
import { requestsAC } from '../../../src/redux/requests/AC';
import * as authAC from '../../../src/redux/auth/AC';
import { authResponseMock } from '../../../__mocks__';

describe('Auth epics', () => {
  it('should set token to Async Storage when LOGIN_REQUEST successful', async () => {
    const action$ = ActionsObservable.of(requestsAC.login.Actions.loginSuccess(authResponseMock));

    await setTokenEpic(action$).toPromise();
    const token = await authService.getToken().toPromise();

    expect(token).toEqual(authResponseMock.token);
  });

  it('should set token to Async Storage when REGISTER_REQUEST successful',  async () => {
    const action$ = ActionsObservable.of(requestsAC.register.Actions.registerSuccess(authResponseMock));

    await setTokenEpic(action$).toPromise();
    const token = await authService.getToken().toPromise();

    expect(token).toEqual(authResponseMock.token);
  });

  it('should delete token from Async Storage when AUTH_LOGOUT', async () => {
    await authService.setToken('token').toPromise();
    const action$ = ActionsObservable.of(authAC.Actions.logout());

    await deleteTokenEpic(action$).toPromise();
    const token = await authService.getToken().toPromise();

    expect(token).toEqual(null);
  });

  it('should dispatch correct action when LOGIN_REQUEST successful', () => {
    const expectedResponse = authAC.Actions.setIsAuthUser(true);
    const action$ = ActionsObservable.of(requestsAC.login.Actions.loginSuccess(authResponseMock));

    setIsAuthUserEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when REGISTER_REQUEST successful', () => {
    const expectedResponse = authAC.Actions.setIsAuthUser(true);
    const action$ = ActionsObservable.of(requestsAC.register.Actions.registerSuccess(authResponseMock));

    setIsAuthUserEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

});