import { createAction, ActionsUnion } from '../../../shared/helpers/createAction';
import { ReviewResponse } from '../../../shared/models/review.model';

export enum ActionTypes {
  SET_USERS_DATA_FROM_REVIEWS = 'SET_USERS_DATA_FROM_REVIEWS',
}

export const Actions = {
  setUsersDataFromReviews: (data: ReviewResponse[]) => createAction(
    ActionTypes.SET_USERS_DATA_FROM_REVIEWS,
    {data},
  ),
};

export type Actions = ActionsUnion<typeof Actions>;
