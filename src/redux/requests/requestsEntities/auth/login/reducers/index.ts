import * as fromActions from '../AC';
import { AuthResponse, RequestState } from '../../../../types';

const initialState: RequestState<AuthResponse> = {
  isLoading: false,
  errors: null,
  data: null,
};

export function reducer(state = initialState, action: fromActions.Actions): RequestState<AuthResponse> {

  switch (action.type) {
    case fromActions.ActionTypes.LOGIN_REQUEST:
      return {
        isLoading: true,
        errors: null,
        data: null,
      };

    case fromActions.ActionTypes.LOGIN_REQUEST_SUCCESS: {
      const {payload} = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    }

    case fromActions.ActionTypes.LOGIN_REQUEST_FAIL: {
      const {payload} = action;

      return {
        ...state,
        isLoading: false,
        errors: payload.errors,
      };
    }

    default:
      return state;
  }
}