import { Actions, ActionTypes } from '../../../src/redux/products/AC';
import { productMock } from '../../../__mocks__';

describe('Redux products actions', () => {
  it(`creates a ${ActionTypes.SET_PRODUCTS_DATA} action`, () => {
    expect(Actions.setProductsData([productMock, productMock])).toMatchSnapshot();
  });

  it(`creates a ${ActionTypes.SET_SEARCH_QUERY} action`, () => {
    expect(Actions.setSearchQuery('title')).toMatchSnapshot();
  });
});
