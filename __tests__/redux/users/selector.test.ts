import { getUsersAllIds, getUsersEntities } from '../../../src/redux/users/selectors';
import { initialState } from '../../../src/redux/users/reducers';
import store from '../../../src/redux/store';

describe('Redux users selectors', () => {
  const state = store.getState();

  it(`should get users entities`, () => {
    expect(getUsersEntities(state)).toEqual(initialState.entities);
  });

  it(`should get users allIds`, () => {
    expect(getUsersAllIds(state)).toEqual(initialState.allIds);
  });
});
