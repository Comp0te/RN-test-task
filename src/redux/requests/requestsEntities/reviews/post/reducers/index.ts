import * as fromActions from '../AC';
import { RequestState } from '../../../../types';
import { ReviewPostResponse } from '../../../../../../shared/models/review.model';

export const initialState: RequestState<ReviewPostResponse> = {
  isLoading: false,
  errors: null,
  data: null,
};

export function reducer(state = initialState, action: fromActions.Actions): RequestState<ReviewPostResponse> {

  switch (action.type) {
    case fromActions.ActionTypes.REVIEW_POST_REQUEST:
      return {
        isLoading: true,
        errors: null,
        data: null,
      };

    case fromActions.ActionTypes.REVIEW_POST_REQUEST_SUCCESS: {
      const {payload} = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    }

    case fromActions.ActionTypes.REVIEW_POST_REQUEST_FAIL: {
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