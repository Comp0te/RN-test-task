import { ActionsObservable } from 'redux-observable';
import {
  setUsersDataFromReviewsEpic,
} from '../../../src/redux/users/epics';
import { requestsAC } from '../../../src/redux/requests/AC';
import * as usersAC from '../../../src/redux/users/AC';
import { reviewResponseMock } from '../../../__mocks__';

describe('Users epics', () => {

  it('should dispatch correct action when REVIEWS_GET_ALL_REQUEST successful', done => {
    const expectedResponse = usersAC.Actions.setUsersDataFromReviews([reviewResponseMock]);
    const action$ = ActionsObservable.of(
      requestsAC.getAllReviews.Actions.getAllReviewsSuccess([reviewResponseMock]),
    );

    setUsersDataFromReviewsEpic(action$).subscribe((output: any) => {
      expect(output).toEqual(expectedResponse);
      done();
    });
  });

});