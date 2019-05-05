import { createAction, ActionsUnion } from '../../../shared/helpers/createAction';
import { ProductModel } from '../../../shared/models/product.model';

export enum ActionTypes {
  SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA',
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
}

export const Actions = {
  setProductsData: (data: ProductModel[]) => createAction(ActionTypes.SET_PRODUCTS_DATA, {data}),
  setSearchQuery: (data: string) => {
    return createAction(ActionTypes.SET_SEARCH_QUERY, {data});
  },
};

export type Actions = ActionsUnion<typeof Actions>;
