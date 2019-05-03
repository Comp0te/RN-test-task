import * as fromActions from '../AC';
import { AuthState } from '../types';

export const initialState: AuthState = {
  isAuthUser: false,
};

export function authReducer(state = initialState, action: fromActions.Actions): AuthState {

  switch (action.type) {
    case fromActions.ActionTypes.AUTH_SET_IS_AUTH_USER: {
      const {data} = action.payload;

      return {
        isAuthUser: data,
      };
    }

    case fromActions.ActionTypes.AUTH_LOGOUT: {

      return {
        isAuthUser: false,
      };
    }

    default:
      return state;
  }
}