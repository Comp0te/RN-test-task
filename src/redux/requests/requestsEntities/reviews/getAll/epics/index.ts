import { AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import reviewsService from '../../../../../../shared/services/reviews.service';
import * as fromActions from '../AC';

export const getAllReviewsRequestEpic = (
  action$: Observable<fromActions.Actions>,
) => action$.pipe(
  ofType<fromActions.Actions, ReturnType<typeof fromActions.Actions.getAllReviews>>(
    fromActions.ActionTypes.REVIEWS_GET_ALL_REQUEST,
  ),
  switchMap((action) => reviewsService.getAllReviews(action.payload.data).pipe(
    map(ajaxResponse => {
      return fromActions.Actions.getAllReviewsSuccess(ajaxResponse.response);
    }),
    catchError((ajaxError: AjaxError) => {
      return of(fromActions.Actions.getAllReviewsFail(ajaxError.response));
    }),
  )),
);