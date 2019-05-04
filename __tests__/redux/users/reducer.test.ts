import { Actions, ActionTypes } from '../../../src/redux/users/AC';
import {
  usersReducer,
  initialState as usersInitialState,
} from '../../../src/redux/users/reducers';
import { reviewResponseMock } from '../../../__mocks__';

describe('Redux users reducers', () => {
  it(`update state after ${ActionTypes.SET_USERS_DATA_FROM_REVIEWS} action`, () => {
    expect(usersReducer(
      usersInitialState,
      Actions.setUsersDataFromReviews([reviewResponseMock, reviewResponseMock])),
    ).toMatchSnapshot();
  });
});
