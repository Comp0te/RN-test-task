import { requestsAC } from '../../../../src/redux/requests/AC';
import {
  reducer as getAllReducer,
  initialState as getAllInitialState,
} from '../../../../src/redux/requests/requestsEntities/products/getAll/reducers';
import { productMock } from '../../../../__mocks__';

describe('Redux products request reducers', () => {
  it('update state after PRODUCTS_GET_ALL_REQUEST action', () => {
    expect(getAllReducer(
      getAllInitialState,
      requestsAC.getAllProducts.Actions.getAllProducts()),
    ).toMatchSnapshot();
  });

  it('update state after PRODUCTS_GET_ALL_REQUEST_SUCCESS action', () => {
    expect(getAllReducer(
      getAllInitialState,
      requestsAC.getAllProducts.Actions.getAllProductsSuccess([productMock])),
    ).toMatchSnapshot();
  });

  it('update state after PRODUCTS_GET_ALL_REQUEST_FAIL action', () => {
    expect(getAllReducer(
      getAllInitialState,
      requestsAC.getAllProducts.Actions.getAllProductsFail('error')),
    ).toMatchSnapshot();
  });
});
