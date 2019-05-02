import { requestsAC } from '../../../../src/redux/requests/AC';
import { productMock } from '../../../../mocksForTests';

describe('Redux products request actions', () => {
  it('creates a PRODUCTS_GET_ALL_REQUEST action', () => {
    expect(requestsAC.getAllProducts.Actions.getAllProducts()).toMatchSnapshot();
  });

  it('creates a PRODUCTS_GET_ALL_REQUEST_SUCCESS action', () => {
    expect(requestsAC.getAllProducts.Actions.getAllProductsSuccess([productMock])).toMatchSnapshot();
  });

  it('creates a PRODUCTS_GET_ALL_REQUEST_FAIL action', () => {
    expect(requestsAC.getAllProducts.Actions.getAllProductsFail('error')).toMatchSnapshot();
  });
});