import { createAction, ActionsUnion } from '../../../../../../shared/helpers/createAction';
import { ProductModel } from '../../../../../../shared/models/product.model';

export enum ActionTypes {
  PRODUCTS_GET_ALL_REQUEST = 'PRODUCTS_GET_ALL_REQUEST',
  PRODUCTS_GET_ALL_REQUEST_SUCCESS = 'PRODUCTS_GET_ALL_REQUEST_SUCCESS',
  PRODUCTS_GET_ALL_REQUEST_FAIL = 'PRODUCTS_GET_ALL_REQUEST_FAIL',
}

export const Actions = {
  getAllProducts: () => createAction(ActionTypes.PRODUCTS_GET_ALL_REQUEST),
  getAllProductsSuccess: (data: ProductModel[]) => {
    return createAction(ActionTypes.PRODUCTS_GET_ALL_REQUEST_SUCCESS, {data});
  },
  getAllProductsFail: (errors: string) => {
    return createAction(ActionTypes.PRODUCTS_GET_ALL_REQUEST_FAIL, {errors});
  },
};

export type Actions = ActionsUnion<typeof Actions>;
