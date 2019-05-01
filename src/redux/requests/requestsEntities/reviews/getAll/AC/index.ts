import { createAction, ActionsUnion } from '../../../../../../shared/helpers/createAction';
import { ReviewResponse } from '../../../../../../shared/models/review.model';

export enum ActionTypes {
  REVIEWS_GET_ALL_REQUEST = 'REVIEWS_GET_ALL_REQUEST',
  REVIEWS_GET_ALL_REQUEST_SUCCESS = 'REVIEWS_GET_ALL_REQUEST_SUCCESS',
  REVIEWS_GET_ALL_REQUEST_FAIL = 'REVIEWS_GET_ALL_REQUEST_FAIL',
}

export const Actions = {
  getAllReviews: (data: string) => createAction(ActionTypes.REVIEWS_GET_ALL_REQUEST, {data}),
  getAllReviewsSuccess: (data: ReviewResponse[]) => {
    return createAction(ActionTypes.REVIEWS_GET_ALL_REQUEST_SUCCESS, {data});
  },
  getAllReviewsFail: (errors: string) => {
    return createAction(ActionTypes.REVIEWS_GET_ALL_REQUEST_FAIL, {errors});
  },
};

export type Actions = ActionsUnion<typeof Actions>;
