import * as fromActions from '../AC';
import { RequestState } from '../../../../types';
import { ReviewResponse } from '../../../../../../shared/models/review.model';

const initialState: RequestState<ReviewResponse[]> = {
  isLoading: false,
  errors: null,
  data: null,
};

export function reducer(state = initialState, action: fromActions.Actions): RequestState<ReviewResponse[]> {

  switch (action.type) {
    case fromActions.ActionTypes.REVIEWS_GET_ALL_REQUEST:
      return {
        isLoading: true,
        errors: null,
        data: null,
      };

    case fromActions.ActionTypes.REVIEWS_GET_ALL_REQUEST_SUCCESS: {
      const {payload} = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    }

    case fromActions.ActionTypes.REVIEWS_GET_ALL_REQUEST_FAIL: {
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