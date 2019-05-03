import { createAction, ActionsUnion } from '../../../shared/helpers/createAction';

export enum ActionTypes {
  AUTH_LOGOUT = 'AUTH_LOGOUT',
  AUTH_SET_IS_AUTH_USER = 'AUTH_SET_IS_AUTH_USER',
}

export const Actions = {
  logout: () => createAction(ActionTypes.AUTH_LOGOUT),
  setIsAuthUser: (data: boolean) => createAction(ActionTypes.AUTH_SET_IS_AUTH_USER, {data}),
};

export type Actions = ActionsUnion<typeof Actions>;
