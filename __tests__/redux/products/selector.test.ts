import {
  getProductsAllIds,
  getProductsEntities,
  getProductByIdFromProps,
  getProductIdFromProps,
} from '../../../src/redux/products/selectors';
import { initialState } from '../../../src/redux/products/reducers';
import store, { RootState } from '../../../src/redux/store';
import { productMock } from '../../../__mocks__';

describe('Redux products selectors', () => {
  const state = store.getState();

  it(`should get products entities`, () => {
    expect(getProductsEntities(state)).toEqual(initialState.entities);
  });

  it(`should get products allIds`, () => {
    expect(getProductsAllIds(state)).toEqual(initialState.allIds);
  });

  it(`should get product id from props `, () => {
    expect(getProductIdFromProps(state, {productId: '10'}))
      .toEqual('10');
  });

  it(`should get product by id from props `, () => {
    const mock: RootState = {
      ...state,
      products: {
        entities: {
          10: productMock,
        },
        allIds: ['10'],
      },
    };

    const selected = getProductByIdFromProps(mock, {productId: '10'});
    expect(selected).toEqual(productMock);
  });
});
