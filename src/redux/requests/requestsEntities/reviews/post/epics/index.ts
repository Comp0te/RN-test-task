import { Action } from 'redux';
import { AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';
import reviewsService from '../../../../../../shared/services/reviews.service';
import * as fromActions from '../AC';

export const postReviewRequestEpic = (
  action$: Observable<Action>,
) => action$.pipe(
  ofType<Action, ReturnType<typeof fromActions.Actions.postReview>>(
    fromActions.ActionTypes.REVIEW_POST_REQUEST,
  ),
  switchMap((action) => reviewsService.postReview(action.payload.data).pipe(
    map(ajaxResponse => {
      return fromActions.Actions.postReviewSuccess(ajaxResponse.response);
    }),
    catchError((ajaxError: AjaxError) => {
      return of(fromActions.Actions.postReviewFail(ajaxError.response));
    }),
  )),
);