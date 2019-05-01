import { createAction, ActionsUnion } from '../../../../../../shared/helpers/createAction';
import { AuthInput } from '../../../../../../shared/services/auth.service';
import { AuthResponse } from '../../../../types';

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAIL = 'LOGIN_REQUEST_FAIL',
}

export const Actions = {
  login: (data: AuthInput) => createAction(ActionTypes.LOGIN_REQUEST, {data}),
  loginSuccess: (data: AuthResponse) => {
    return createAction(ActionTypes.LOGIN_REQUEST_SUCCESS, {data});
  },
  loginFail: (errors: string) => {
    return createAction(ActionTypes.LOGIN_REQUEST_FAIL, {errors});
  },
};

export type Actions = ActionsUnion<typeof Actions>;
