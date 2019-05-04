import {
  getIsGetAllProductsRequestLoading,
} from '../../../../src/redux/requests/selectors';
import { initialState as getAllInitialState } from '../../../../src/redux/requests/requestsEntities/products/getAll/reducers';
import store from '../../../../src/redux/store';

describe('Redux products requests selectors', () => {
  const state = store.getState();

  it(`should get isLoading get all products request`, () => {
    expect(getIsGetAllProductsRequestLoading(state)).toEqual(getAllInitialState.isLoading);
  });

});
