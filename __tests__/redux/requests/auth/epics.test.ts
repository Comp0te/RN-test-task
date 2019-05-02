import { of, throwError } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { ActionsObservable } from 'redux-observable';
import {
  loginRequestEpic,
} from '../../../../src/redux/requests/requestsEntities/auth/login/epics';
import {
  registerRequestEpic,
} from '../../../../src/redux/requests/requestsEntities/auth/register/epics';
import authService from '../../../../src/shared/services/auth.service';
import { authResponseMock, authInputMock } from '../../../../__mocks__';
import { requestsAC } from '../../../../src/redux/requests/AC';

describe('Auth requests epics', () => {
  it('should dispatch correct action when LOGIN_REQUEST successful', () => {
    const ajaxResponse: Partial<AjaxResponse> = {
      response: authResponseMock,
    };
    const expectedResponse = requestsAC.login.Actions.loginSuccess(ajaxResponse.response);
    jest
      .spyOn(authService, 'login')
      .mockImplementation(() => of(ajaxResponse as AjaxResponse));
    const action$ = ActionsObservable.of(requestsAC.login.Actions.login(authInputMock));

    loginRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when LOGIN_REQUEST error', () => {
    const ajaxError: Partial<AjaxError> = {
      response: 'error',
    };
    const expectedResponse = requestsAC.login.Actions.loginFail(ajaxError.response);
    jest
      .spyOn(authService, 'login')
      .mockImplementation(() => throwError(ajaxError));
    const action$ = ActionsObservable.of(requestsAC.login.Actions.login(authInputMock));

    loginRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when REGISTER_REQUEST successful', () => {
    const ajaxResponse: Partial<AjaxResponse> = {
      response: authResponseMock,
    };
    const expectedResponse = requestsAC.register.Actions.registerSuccess(ajaxResponse.response);
    jest
      .spyOn(authService, 'register')
      .mockImplementation(() => of(ajaxResponse as AjaxResponse));
    const action$ = ActionsObservable.of(requestsAC.register.Actions.register(authInputMock));

    registerRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when REGISTER_REQUEST error', () => {
    const ajaxError: Partial<AjaxError> = {
      response: 'error',
    };
    const expectedResponse = requestsAC.register.Actions.registerFail(ajaxError.response);
    jest
      .spyOn(authService, 'register')
      .mockImplementation(() => throwError(ajaxError));
    const action$ = ActionsObservable.of(requestsAC.register.Actions.register(authInputMock));

    registerRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });
});