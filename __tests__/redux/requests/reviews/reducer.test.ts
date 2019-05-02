import { requestsAC } from '../../../../src/redux/requests/AC';
import {
  reducer as getAllReducer,
  initialState as getAllInitialState,
} from '../../../../src/redux/requests/requestsEntities/reviews/getAll/reducers';
import {
  reducer as postReducer,
  initialState as postInitialState,
} from '../../../../src/redux/requests/requestsEntities/reviews/post/reducers';
import { reviewResponseMock, reviewPostInputMock } from '../../../../mocksForTests';

describe('Redux reviews request reducers', () => {
  it('update state after REVIEWS_GET_ALL_REQUEST action', () => {
    expect(getAllReducer(
      getAllInitialState,
      requestsAC.getAllReviews.Actions.getAllReviews('1234')),
    ).toMatchSnapshot();
  });

  it('update state after REVIEWS_GET_ALL_REQUEST_SUCCESS action', () => {
    expect(getAllReducer(
      getAllInitialState,
      requestsAC.getAllReviews.Actions.getAllReviewsSuccess([reviewResponseMock])),
    ).toMatchSnapshot();
  });

  it('update state after REVIEWS_GET_ALL_REQUEST_FAIL action', () => {
    expect(getAllReducer(
      getAllInitialState,
      requestsAC.getAllReviews.Actions.getAllReviewsFail('error')),
    ).toMatchSnapshot();
  });

  it('update state after REVIEW_POST_REQUEST action', () => {
    expect(postReducer(
      postInitialState,
      requestsAC.postReview.Actions.postReview(reviewPostInputMock)),
    ).toMatchSnapshot();
  });

  it('update state after REVIEW_POST_REQUEST_SUCCESS action', () => {
    expect(postReducer(
      postInitialState,
      requestsAC.postReview.Actions.postReviewSuccess(reviewResponseMock)),
    ).toMatchSnapshot();
  });

  it('update state after REVIEW_POST_REQUEST_FAIL action', () => {
    expect(postReducer(
      postInitialState,
      requestsAC.postReview.Actions.postReviewFail('error')),
    ).toMatchSnapshot();
  });
});
