import {
  getReviewsAllIds,
  getReviewsEntities,
  getReviewByIdFromProps,
  getReviewIdFromProps,
  getAverageReviewRateOfProduct,
} from '../../../src/redux/reviews/selectors';
import { initialState } from '../../../src/redux/reviews/reducers';
import store, { RootState } from '../../../src/redux/store';
import { reviewMock } from '../../../__mocks__';

describe('Redux reviews selectors', () => {
  const state = store.getState();
  const mock: RootState = {
    ...state,
    reviews: {
      entities: {
        1: reviewMock,
        2: {
          ...reviewMock,
          rate: 3,
        },
      },
      allIds: ['1', '2'],
    },
  };

  it(`should get reviews entities`, () => {
    expect(getReviewsEntities(state)).toEqual(initialState.entities);
  });

  it(`should get reviews allIds`, () => {
    expect(getReviewsAllIds(state)).toEqual(initialState.allIds);
  });

  it(`should get review id from props `, () => {
    expect(getReviewIdFromProps(state, {reviewId: '1'}))
      .toEqual('1');
  });

  it(`should get review by id from props `, () => {
    const selected = getReviewByIdFromProps(mock, {reviewId: '1'});
    expect(selected).toEqual(reviewMock);
  });

  it(`should get average review rate for product`, () => {
    const selected = getAverageReviewRateOfProduct(mock, {productId: '1'});

    expect(selected).toEqual(4);
  });
});
