import * as fromActions from '../AC';
import { ProductsState } from '../types';
import { ProductModel } from '../../../shared/models/product.model';
import { getNewEntitiesAfterSetData } from '../../../shared/helpers/utilsForRedux';

export const initialState: ProductsState = {
  entities: {},
  allIds: [],
};

export function productsReducer(state = initialState, action: fromActions.Actions): ProductsState {

  switch (action.type) {
    case fromActions.ActionTypes.SET_PRODUCTS_DATA: {
      const productsFromAction = action.payload.data
        .map<ProductModel>((product) => new ProductModel(product));
      const newEntities = getNewEntitiesAfterSetData<ProductModel>(
        state.entities,
        productsFromAction,
      );

      return {
        ...state,
        entities: newEntities,
        allIds: Object.keys(newEntities),
      };
    }

    default:
      return state;
  }
}