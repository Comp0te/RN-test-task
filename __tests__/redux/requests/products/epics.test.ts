import { of, throwError } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { ActionsObservable } from 'redux-observable';
import {
  getAllProductsRequestEpic,
} from '../../../../src/redux/requests/requestsEntities/products/getAll/epics';
import productsService from '../../../../src/shared/services/products.service';
import { productMock } from '../../../../__mocks__';
import { requestsAC } from '../../../../src/redux/requests/AC';

describe('Products request epics', () => {
  it('should dispatch correct action when PRODUCTS_GET_ALL_REQUEST successful', done => {
    const ajaxResponse: Partial<AjaxResponse> = {
      response: [productMock],
    };
    const expectedResponse = requestsAC.getAllProducts.Actions.getAllProductsSuccess(ajaxResponse.response);
    jest
      .spyOn(productsService, 'getAllProducts')
      .mockImplementation(() => of(ajaxResponse as AjaxResponse));
    const action$ = ActionsObservable.of(requestsAC.getAllProducts.Actions.getAllProducts());

    getAllProductsRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });

  it('should dispatch correct action when PRODUCTS_GET_ALL_REQUEST error', done => {
    const ajaxError: Partial<AjaxError> = {
      response: 'error',
    };
    const expectedResponse = requestsAC.getAllProducts.Actions.getAllProductsFail(ajaxError.response);
    jest
      .spyOn(productsService, 'getAllProducts')
      .mockImplementation(() => throwError(ajaxError));
    const action$ = ActionsObservable.of(requestsAC.getAllProducts.Actions.getAllProducts());

    getAllProductsRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });
});