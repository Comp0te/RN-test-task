import { createAction, ActionsUnion } from '../../../../../../shared/helpers/createAction';
import { IReviewPostInput } from '../../../../../../shared/services/reviews.service';
import { ReviewResponse } from '../../../../../../shared/models/review.model';
import { AjaxError } from 'rxjs/ajax';

export enum ActionTypes {
  REVIEW_POST_REQUEST = 'REVIEW_POST_REQUEST',
  REVIEW_POST_REQUEST_SUCCESS = 'REVIEW_POST_REQUEST_SUCCESS',
  REVIEW_POST_REQUEST_FAIL = 'REVIEW_POST_REQUEST_FAIL',
}

export const Actions = {
  postReview: (data: IReviewPostInput) => createAction(ActionTypes.REVIEW_POST_REQUEST, {data}),
  postReviewSuccess: (data: ReviewResponse) => {
    return createAction(ActionTypes.REVIEW_POST_REQUEST_SUCCESS, {data});
  },
  postReviewFail: (errors: AjaxError) => {
    return createAction(ActionTypes.REVIEW_POST_REQUEST_FAIL, {errors});
  },
};

export type Actions = ActionsUnion<typeof Actions>;
