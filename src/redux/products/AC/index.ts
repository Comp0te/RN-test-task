import { createAction, ActionsUnion } from '../../../shared/helpers/createAction';
import { ProductModel } from '../../../shared/models/product.model';

export enum ActionTypes {
  SET_PRODUCTS_DATA = 'SET_PRODUCTS_DATA',
}

export const Actions = {
  setProductsData: (data: ProductModel[]) => createAction(ActionTypes.SET_PRODUCTS_DATA, {data}),
};

export type Actions = ActionsUnion<typeof Actions>;
