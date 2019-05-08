import { requestsAC } from '../../../../src/redux/requests/AC';
import { reviewPostInputMock, reviewResponseMock } from '../../../../__mocks__';

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
    expect(requestsAC.postReview.Actions.postReview(reviewPostInputMock)).toMatchSnapshot();
  });

  it('creates a REVIEW_POST_REQUEST_SUCCESS action', () => {
    expect(requestsAC.postReview.Actions.postReviewSuccess({success: true})).toMatchSnapshot();
  });

  it('creates a REVIEW_POST_REQUEST_FAIL action', () => {
    expect(requestsAC.postReview.Actions.postReviewFail('error' as never)).toMatchSnapshot();
  });
});
