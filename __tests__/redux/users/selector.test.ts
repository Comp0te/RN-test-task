import {
  getUsersAllIds,
  getUsersEntities,
  getUserByReviewIdFromProps,
} from '../../../src/redux/users/selectors';
import { initialState } from '../../../src/redux/users/reducers';
import store, { RootState } from '../../../src/redux/store';
import { reviewMock, userMock } from '../../../__mocks__';

describe('Redux users selectors', () => {
  const state = store.getState();
  const mock: RootState = {
    ...state,
    reviews: {
      entities: {
        1: reviewMock,
      },
      allIds: ['1'],
    },
    users: {
      entities: {
        1: userMock,
      },
      allIds: ['1'],
    },
  };

  it(`should get users entities`, () => {
    expect(getUsersEntities(state)).toEqual(initialState.entities);
  });

  it(`should get users allIds`, () => {
    expect(getUsersAllIds(state)).toEqual(initialState.allIds);
  });

  it(`should get user by review id from props `, () => {
    const selected = getUserByReviewIdFromProps(mock, {reviewId: '1'});

    expect(selected).toEqual(userMock);
  });
});
