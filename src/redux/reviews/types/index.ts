import {ReviewModel} from '../../../shared/models/review.model';

export interface ReviewsState {
  entities: IEntities<ReviewModel>;
  allIds: string[];
}