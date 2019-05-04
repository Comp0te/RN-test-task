import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import * as fromActions from '../AC';
import { requestsAC } from '../../requests/AC';

export const setUsersDataFromReviewsEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.getAllReviews.Actions.getAllReviewsSuccess>>(
    requestsAC.getAllReviews.ActionTypes.REVIEWS_GET_ALL_REQUEST_SUCCESS,
  ),
  map((action) => {
    const reviews = action.payload.data;

    return fromActions.Actions.setUsersDataFromReviews(reviews);
  }),
);

export const usersEpics = [
  setUsersDataFromReviewsEpic,
];