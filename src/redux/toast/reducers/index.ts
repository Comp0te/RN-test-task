import * as fromActions from '../AC';
import { ToastState } from '../types';

export const initialState: ToastState = {
  message: null,
};

export function toastReducer(state = initialState, action: fromActions.Actions): ToastState {

  switch (action.type) {
    case fromActions.ActionTypes.TOAST_SHOW: {
      const {message} = action.payload;

      return {
        message,
      };
    }

    case fromActions.ActionTypes.TOAST_RESET: {
      return {
        message: null,
      };
    }

    default:
      return state;
  }
}