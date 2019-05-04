import { Actions, ActionTypes } from '../../../src/redux/users/AC';
import { reviewResponseMock } from '../../../__mocks__';

describe('Redux users actions', () => {
  it(`creates a ${ActionTypes.SET_USERS_DATA_FROM_REVIEWS} action`, () => {
    expect(Actions.setUsersDataFromReviews([reviewResponseMock, reviewResponseMock]))
      .toMatchSnapshot();
  });
});
