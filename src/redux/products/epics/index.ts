import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import * as fromActions from '../AC';
import { requestsAC } from '../../requests/AC';

export const setProductsDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.getAllProducts.Actions.getAllProductsSuccess>>(
    requestsAC.getAllProducts.ActionTypes.PRODUCTS_GET_ALL_REQUEST_SUCCESS,
  ),
  map((action) => {
    const products = action.payload.data;

    return fromActions.Actions.setProductsData(products);
  }),
);

export const productsEpics = [
  setProductsDataEpic,
];