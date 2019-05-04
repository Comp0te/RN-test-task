import { Actions, ActionTypes } from '../../../src/redux/reviews/AC';
import {
  reviewsReducer,
  initialState as reviewsInitialState,
} from '../../../src/redux/reviews/reducers';
import { reviewResponseMock } from '../../../__mocks__';

describe('Redux reviews reducers', () => {
  it(`update state after ${ActionTypes.SET_REVIEWS_DATA} action`, () => {
    expect(reviewsReducer(
      reviewsInitialState,
      Actions.setReviewsData([reviewResponseMock, reviewResponseMock])),
    ).toMatchSnapshot();
  });
});
