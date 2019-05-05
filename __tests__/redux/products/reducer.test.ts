import { Actions, ActionTypes } from '../../../src/redux/products/AC';
import {
  productsReducer,
  initialState as productsInitialState,
} from '../../../src/redux/products/reducers';
import { productMock } from '../../../__mocks__';

describe('Redux products reducers', () => {
  it(`update state after ${ActionTypes.SET_PRODUCTS_DATA} action`, () => {
    expect(productsReducer(
      productsInitialState,
      Actions.setProductsData([productMock, productMock])),
    ).toMatchSnapshot();
  });

  it(`update state after ${ActionTypes.SET_SEARCH_QUERY} action`, () => {
    expect(productsReducer(
      productsInitialState,
      Actions.setSearchQuery('title')),
    ).toMatchSnapshot();
  });
});
