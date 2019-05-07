import { Action } from 'redux';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import { ignoreElements, map, tap } from 'rxjs/operators';
import * as fromActions from '../AC';
import { requestsAC } from '../../requests/AC';
import navService from '../../../shared/services/nav.service';

export const setReviewsDataEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.getAllReviews.Actions.getAllReviewsSuccess>>(
    requestsAC.getAllReviews.ActionTypes.REVIEWS_GET_ALL_REQUEST_SUCCESS,
  ),
  map((action) => {
    const reviews = action.payload.data;

    return fromActions.Actions.setReviewsData(reviews);
  }),
);

const redirectToProductDetailScreenEpic = (action$: Observable<Action>) => action$.pipe(
  ofType<Action, ReturnType<typeof requestsAC.postReview.Actions.postReviewSuccess>>(
    requestsAC.postReview.ActionTypes.REVIEW_POST_REQUEST_SUCCESS,
  ),
  tap(() => navService.navigate('ProductDetailScreen')),
  ignoreElements(),
);

export const reviewsEpics = [
  setReviewsDataEpic,
  redirectToProductDetailScreenEpic,
];