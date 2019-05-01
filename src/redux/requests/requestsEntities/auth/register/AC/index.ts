import { createAction, ActionsUnion } from '../../../../../../shared/helpers/createAction';
import { AuthInput } from '../../../../../../shared/services/auth.service';
import { AuthResponse } from '../../../../types';

export enum ActionTypes {
  REGISTER_REQUEST = 'REGISTER_REQUEST',
  REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS',
  REGISTER_REQUEST_FAIL = 'REGISTER_REQUEST_FAIL',
}

export const Actions = {
  register: (data: AuthInput) => createAction(ActionTypes.REGISTER_REQUEST, {data}),
  registerSuccess: (data: AuthResponse) => {
    return createAction(ActionTypes.REGISTER_REQUEST_SUCCESS, {data});
  },
  registerFail: (errors: string) => {
    return createAction(ActionTypes.REGISTER_REQUEST_FAIL, {errors});
  },
};

export type Actions = ActionsUnion<typeof Actions>;
