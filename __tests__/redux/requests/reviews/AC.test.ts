import { requestsAC } from '../../../../src/redux/requests/AC';
import { reviewPostInput, reviewResponseMock } from '../../../../mocksForTests';

describe('Redux reviews request actions', () => {
  it('creates a REVIEWS_GET_ALL_REQUEST action', () => {
    expect(requestsAC.getAllReviews.Actions.getAllReviews('id')).toMatchSnapshot();
  });

  it('creates a REVIEWS_GET_ALL_REQUEST_SUCCESS action', () => {
    expect(requestsAC.getAllReviews.Actions.getAllReviewsSuccess([reviewResponseMock])).toMatchSnapshot();
  });

  it('creates a REVIEWS_GET_ALL_REQUEST_FAIL action', () => {
    expect(requestsAC.getAllReviews.Actions.getAllReviewsFail('error')).toMatchSnapshot();
  });

  it('creates a REVIEW_POST_REQUEST action', () => {
    expect(requestsAC.postReview.Actions.postReview(reviewPostInput)).toMatchSnapshot();
  });

  it('creates a REVIEW_POST_REQUEST_SUCCESS action', () => {
    expect(requestsAC.postReview.Actions.postReviewSuccess(reviewResponseMock)).toMatchSnapshot();
  });

  it('creates a REVIEW_POST_REQUEST_FAIL action', () => {
    expect(requestsAC.postReview.Actions.postReviewFail('error')).toMatchSnapshot();
  });
});
