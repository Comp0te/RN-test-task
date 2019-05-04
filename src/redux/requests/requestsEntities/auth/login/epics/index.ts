import { Action } from 'redux';
import { AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import authService from '../../../../../../shared/services/auth.service';
import * as fromActions from '../AC';

export const loginRequestEpic = (
  action$: Observable<Action>,
) => action$.pipe(
  ofType<Action, ReturnType<typeof fromActions.Actions.login>>(
    fromActions.ActionTypes.LOGIN_REQUEST,
  ),
  switchMap((action) => authService.login(action.payload.data).pipe(
    map(ajaxResponse => {
      if (ajaxResponse.response.success) {
        return fromActions.Actions.loginSuccess(ajaxResponse.response);
      }

      return fromActions.Actions.loginFail(ajaxResponse.response.message);
    }),
    catchError((ajaxError: AjaxError) => {
      return of(fromActions.Actions.loginFail(ajaxError.response));
    }),
  )),
);