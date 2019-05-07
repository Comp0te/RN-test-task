import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import * as fromActions from '../AC';
import { requestsAC } from '../../requests/AC';

export const showAuthErrorToastEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.login.Actions.loginFail> |
    ReturnType<typeof requestsAC.register.Actions.registerFail>>(
    requestsAC.login.ActionTypes.LOGIN_REQUEST_FAIL,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_FAIL,
  ),
  map((action) => {
    const errorMessage = action.payload.errors;

    return fromActions.Actions.showToast(errorMessage);
  }),
);

export const toastEpics = [
  showAuthErrorToastEpic,
];