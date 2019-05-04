import { getReviewsAllIds, getReviewsEntities } from '../../../src/redux/reviews/selectors';
import { initialState } from '../../../src/redux/reviews/reducers';
import store from '../../../src/redux/store';

describe('Redux reviews selectors', () => {
  const state = store.getState();

  it(`should get reviews entities`, () => {
    expect(getReviewsEntities(state)).toEqual(initialState.entities);
  });

  it(`should get reviews allIds`, () => {
    expect(getReviewsAllIds(state)).toEqual(initialState.allIds);
  });
});
