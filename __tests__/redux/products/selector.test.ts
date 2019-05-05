import {
  getProductsAllIds,
  getProductsEntities,
  getProductByIdFromProps,
  getProductIdFromProps,
  getProductSearchQuery,
  getFilteredProductsIds,
} from '../../../src/redux/products/selectors';
import { initialState } from '../../../src/redux/products/reducers';
import store, { RootState } from '../../../src/redux/store';
import { productMock } from '../../../__mocks__';

describe('Redux products selectors', () => {
  const state = store.getState();
  const mock: RootState = {
    ...state,
    products: {
      entities: {
        1: productMock,
      },
      allIds: ['1'],
      searchQuery: 'tit',
    },
  };

  it(`should get products entities`, () => {
    expect(getProductsEntities(state)).toEqual(initialState.entities);
  });

  it(`should get products allIds`, () => {
    expect(getProductsAllIds(state)).toEqual(initialState.allIds);
  });

  it(`should get product id from props `, () => {
    expect(getProductIdFromProps(state, {productId: '1'}))
      .toEqual('1');
  });

  it(`should get product by id from props `, () => {
    const selected = getProductByIdFromProps(mock, {productId: '1'});
    expect(selected).toEqual(productMock);
  });

  it(`should get product search query `, () => {
    expect(getProductSearchQuery(state)).toEqual(initialState.searchQuery);
  });

  it(`should get filtered by searchQuery productsIds`, () => {
    const selected = getFilteredProductsIds(mock);
    expect(selected).toEqual([`${productMock.id}`]);
  });
});
