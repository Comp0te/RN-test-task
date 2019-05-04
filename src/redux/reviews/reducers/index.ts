import * as fromActions from '../AC';
import { ReviewsState } from '../types';
import { ReviewModel } from '../../../shared/models/review.model';
import { getNewEntitiesAfterSetData } from '../../../shared/helpers/utilsForRedux';

export const initialState: ReviewsState = {
  entities: {},
  allIds: [],
};

export function reviewsReducer(state = initialState, action: fromActions.Actions): ReviewsState {

  switch (action.type) {
    case fromActions.ActionTypes.SET_REVIEWS_DATA: {
      const reviewsFromAction = action.payload.data
        .map<ReviewModel>((review) => new ReviewModel(review));
      const newEntities = getNewEntitiesAfterSetData<ReviewModel>(
        state.entities,
        reviewsFromAction,
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