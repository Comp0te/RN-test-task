import * as fromActions from '../AC';
import { RequestState } from '../../../../types';
import { ProductModel } from '../../../../../../shared/models/product.model';

export const initialState: RequestState<ProductModel[]> = {
  isLoading: false,
  errors: null,
  data: null,
};

export function reducer(state = initialState, action: fromActions.Actions): RequestState<ProductModel[]> {

  switch (action.type) {
    case fromActions.ActionTypes.PRODUCTS_GET_ALL_REQUEST:
      return {
        isLoading: true,
        errors: null,
        data: null,
      };

    case fromActions.ActionTypes.PRODUCTS_GET_ALL_REQUEST_SUCCESS: {
      const {payload} = action;

      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    }

    case fromActions.ActionTypes.PRODUCTS_GET_ALL_REQUEST_FAIL: {
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