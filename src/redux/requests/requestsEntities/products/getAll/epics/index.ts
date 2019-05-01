import { AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import productsService from '../../../../../../shared/services/products.service';
import * as fromActions from '../AC';

export const getAllProductsRequestEpic = (
  action$: Observable<fromActions.Actions>,
) => action$.pipe(
  ofType<fromActions.Actions>(fromActions.ActionTypes.PRODUCTS_GET_ALL_REQUEST),
  switchMap(() => productsService.getAllProducts().pipe(
    map(ajaxResponse => {
      return fromActions.Actions.getAllProductsSuccess(ajaxResponse.response);
    }),
    catchError((ajaxError: AjaxError) => {
      return of(fromActions.Actions.getAllProductsFail(ajaxError.response));
    }),
  )),
);