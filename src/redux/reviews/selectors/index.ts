import { RootState } from '../../store';
import { OwnProps as ReviewItemProps } from '../../../shared/components/ReviewItem';
import { createSelector } from 'reselect';

export const getReviewsEntities = (state: RootState) => state.reviews.entities;
export const getReviewsAllIds = (state: RootState) => state.reviews.allIds;

export const getReviewIdFromProps = (
  state: RootState,
  props: ReviewItemProps,
) => props.reviewId;

export const getReviewByIdFromProps = createSelector(
  [
    getReviewsEntities,
    getReviewIdFromProps,
  ],
  (reviewsEntities, reviewId) => {
    return reviewId ? reviewsEntities[reviewId] : undefined;
  },
);
