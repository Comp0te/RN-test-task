import { of, throwError } from 'rxjs';
import { AjaxError, AjaxResponse } from 'rxjs/ajax';
import { ActionsObservable } from 'redux-observable';
import {
  getAllReviewsRequestEpic,
} from '../../../../src/redux/requests/requestsEntities/reviews/getAll/epics';
import {
  postReviewRequestEpic,
} from '../../../../src/redux/requests/requestsEntities/reviews/post/epics';
import reviewsService from '../../../../src/shared/services/reviews.service';
import { reviewResponseMock, reviewPostInputMock } from '../../../../__mocks__';
import { requestsAC } from '../../../../src/redux/requests/AC';

describe('Reviews requests epics', () => {
  it('should dispatch correct action when REVIEWS_GET_ALL_REQUEST successful', () => {
    const ajaxResponse: Partial<AjaxResponse> = {
      response: [reviewResponseMock],
    };
    const expectedResponse = requestsAC.getAllReviews.Actions.getAllReviewsSuccess(ajaxResponse.response);
    jest
      .spyOn(reviewsService, 'getAllReviews')
      .mockImplementation(() => of(ajaxResponse as AjaxResponse));
    const action$ = ActionsObservable.of(requestsAC.getAllReviews.Actions.getAllReviews('id'));

    getAllReviewsRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when REVIEWS_GET_ALL_REQUEST error', () => {
    const ajaxError: Partial<AjaxError> = {
      response: 'error',
    };
    const expectedResponse = requestsAC.getAllReviews.Actions.getAllReviewsFail(ajaxError.response);
    jest
      .spyOn(reviewsService, 'getAllReviews')
      .mockImplementation(() => throwError(ajaxError));
    const action$ = ActionsObservable.of(requestsAC.getAllReviews.Actions.getAllReviews('id'));

    getAllReviewsRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when REVIEW_POST_REQUEST successful', () => {
    const ajaxResponse: Partial<AjaxResponse> = {
      response: reviewResponseMock,
    };
    const expectedResponse = requestsAC.postReview.Actions.postReviewSuccess(ajaxResponse.response);
    jest
      .spyOn(reviewsService, 'postReview')
      .mockImplementation(() => of(ajaxResponse as AjaxResponse));
    const action$ = ActionsObservable.of(requestsAC.postReview.Actions.postReview(reviewPostInputMock));

    postReviewRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });

  it('should dispatch correct action when REVIEW_POST_REQUEST error', () => {
    const ajaxError: Partial<AjaxError> = {
      response: 'error',
    };
    const expectedResponse = requestsAC.postReview.Actions.postReviewFail(ajaxError.response);
    jest
      .spyOn(reviewsService, 'postReview')
      .mockImplementation(() => throwError(ajaxError));
    const action$ = ActionsObservable.of(requestsAC.postReview.Actions.postReview(reviewPostInputMock));

    postReviewRequestEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
    });
  });
});