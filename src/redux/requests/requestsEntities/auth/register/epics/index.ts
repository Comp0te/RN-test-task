import { Action } from 'redux';
import { AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import authService from '../../../../../../shared/services/auth.service';
import * as fromActions from '../AC';

export const registerRequestEpic = (
  action$: Observable<Action>,
) => action$.pipe(
  ofType<Action, ReturnType<typeof fromActions.Actions.register>>(
    fromActions.ActionTypes.REGISTER_REQUEST,
  ),
  switchMap((action) => authService.register(action.payload.data).pipe(
    map(ajaxResponse => {
      if (ajaxResponse.response.success) {
        return fromActions.Actions.registerSuccess(ajaxResponse.response);
      }

      return fromActions.Actions.registerFail(ajaxResponse.response.message);
    }),
    catchError((ajaxError: AjaxError) => {
      return of(fromActions.Actions.registerFail(ajaxError.response));
    }),
  )),
);