import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { ignoreElements, map, switchMap, tap } from 'rxjs/operators';
import * as fromActions from '../AC';
import { requestsAC } from '../../requests/AC';
import authService from '../../../shared/services/auth.service';
import navService from '../../../shared/services/nav.service';

export const setTokenEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.login.Actions.loginSuccess> |
    ReturnType<typeof requestsAC.register.Actions.registerSuccess>>(
    requestsAC.login.ActionTypes.LOGIN_REQUEST_SUCCESS,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_SUCCESS,
  ),
  switchMap((action) => {
    const authResponse = action.payload.data;
    return authService.setToken(authResponse.token);
  }),
  ignoreElements(),
);

export const deleteTokenEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, fromActions.Actions>(
    fromActions.ActionTypes.AUTH_LOGOUT,
  ),
  switchMap(() => {
    return authService.removeToken();
  }),
  ignoreElements(),
);

export const setIsAuthUserEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.login.Actions.loginSuccess> |
    ReturnType<typeof requestsAC.register.Actions.registerSuccess>>(
    requestsAC.login.ActionTypes.LOGIN_REQUEST_SUCCESS,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_SUCCESS,
  ),
  map(() => fromActions.Actions.setIsAuthUser(true)),
);

const redirectToProfileScreenEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.login.Actions.loginSuccess> |
  ReturnType<typeof requestsAC.register.Actions.registerSuccess>>(
    requestsAC.login.ActionTypes.LOGIN_REQUEST_SUCCESS,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_SUCCESS,
  ),
  tap(() => navService.navigate('ProfileScreen')),
  ignoreElements(),
);

const redirectToLoginScreenEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, fromActions.Actions>(
    fromActions.ActionTypes.AUTH_LOGOUT,
  ),
  tap(() => navService.navigate('LoginScreen')),
  ignoreElements(),
);

export const authEpics = [
  setTokenEpic,
  deleteTokenEpic,
  setIsAuthUserEpic,
  redirectToProfileScreenEpic,
  redirectToLoginScreenEpic,
];