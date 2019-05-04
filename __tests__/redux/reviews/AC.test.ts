import { Actions, ActionTypes } from '../../../src/redux/reviews/AC';
import { reviewResponseMock } from '../../../__mocks__';

describe('Redux reviews actions', () => {
  it(`creates a ${ActionTypes.SET_REVIEWS_DATA} action`, () => {
    expect(Actions.setReviewsData([reviewResponseMock, reviewResponseMock])).toMatchSnapshot();
  });
});
