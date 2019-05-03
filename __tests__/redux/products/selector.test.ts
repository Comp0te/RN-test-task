import { getProductsAllIds, getProductsEntities } from '../../../src/redux/products/selectors';
import { initialState } from '../../../src/redux/products/reducers';
import store from '../../../src/redux/store';

describe('Redux products selectors', () => {
  const state = store.getState();

  it(`should get products entities`, () => {
    expect(getProductsEntities(state)).toEqual(initialState.entities);
  });

  it(`should get products allIds`, () => {
    expect(getProductsAllIds(state)).toEqual(initialState.allIds);
  });
});
