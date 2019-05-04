import {
  getIsGetAllReviewsRequestLoading,
  getIsPostReviewRequestLoading,
} from '../../../../src/redux/requests/selectors';
import { initialState as getAllInitialState } from '../../../../src/redux/requests/requestsEntities/reviews/getAll/reducers';
import { initialState as postInitialState } from '../../../../src/redux/requests/requestsEntities/reviews/post/reducers';
import store from '../../../../src/redux/store';

describe('Redux reviews requests selectors', () => {
  const state = store.getState();

  it(`should get isLoading get all reviews request`, () => {
    expect(getIsGetAllReviewsRequestLoading(state)).toEqual(getAllInitialState.isLoading);
  });

  it(`should get isLoading post review request`, () => {
    expect(getIsPostReviewRequestLoading(state)).toEqual(postInitialState.isLoading);
  });

});
