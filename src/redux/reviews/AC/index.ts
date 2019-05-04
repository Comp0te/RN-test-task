import { createAction, ActionsUnion } from '../../../shared/helpers/createAction';
import { ReviewResponse } from '../../../shared/models/review.model';

export enum ActionTypes {
  SET_REVIEWS_DATA = 'SET_REVIEWS_DATA',
}

export const Actions = {
  setReviewsData: (data: ReviewResponse[]) => createAction(ActionTypes.SET_REVIEWS_DATA, {data}),
};

export type Actions = ActionsUnion<typeof Actions>;
