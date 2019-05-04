import { RootState } from '../../store';

export const getReviewsEntities = (state: RootState) => state.reviews.entities;
export const getReviewsAllIds = (state: RootState) => state.reviews.allIds;
