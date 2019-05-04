import { ActionsObservable } from 'redux-observable';
import {
  setProductsDataEpic,
} from '../../../src/redux/products/epics';
import { requestsAC } from '../../../src/redux/requests/AC';
import * as productsAC from '../../../src/redux/products/AC';
import { productMock } from '../../../__mocks__';

describe('Products epics', () => {

  it('should dispatch correct action when PRODUCTS_GET_ALL_REQUEST successful', done => {
    const expectedResponse = productsAC.Actions.setProductsData([productMock]);
    const action$ = ActionsObservable.of(requestsAC.getAllProducts.Actions.getAllProductsSuccess([productMock]));

    setProductsDataEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });

});