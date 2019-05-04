import { ActionsObservable } from 'redux-observable';
import {
  setReviewsDataEpic,
} from '../../../src/redux/reviews/epics';
import { requestsAC } from '../../../src/redux/requests/AC';
import * as reviewsAC from '../../../src/redux/reviews/AC';
import { reviewResponseMock } from '../../../__mocks__';

describe('Reviews epics', () => {

  it('should dispatch correct action when REVIEWS_GET_ALL_REQUEST successful', done => {
    const expectedResponse = reviewsAC.Actions.setReviewsData([reviewResponseMock]);
    const action$ = ActionsObservable.of(requestsAC.getAllReviews.Actions.getAllReviewsSuccess([reviewResponseMock]));

    setReviewsDataEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });

});