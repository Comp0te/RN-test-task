import * as fromActions from '../AC';
import { UsersState } from '../types';
import { UserModel } from '../../../shared/models/user.model';
import { getNewEntitiesAfterSetData } from '../../../shared/helpers/utilsForRedux';

export const initialState: UsersState = {
  entities: {},
  allIds: [],
};

export function usersReducer(state = initialState, action: fromActions.Actions): UsersState {

  switch (action.type) {
    case fromActions.ActionTypes.SET_USERS_DATA_FROM_REVIEWS: {
      const usersFromAction = action.payload.data
        .map<UserModel>((review) => new UserModel(review));
      const newEntities = getNewEntitiesAfterSetData<UserModel>(
        state.entities,
        usersFromAction,
      );

      return {
        ...state,
        entities: newEntities,
        allIds: Object.keys(newEntities),
      };
    }

    default:
      return state;
  }
}