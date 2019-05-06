import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { getReviewIdFromProps, getReviewsEntities } from '../../reviews/selectors';

export const getUsersEntities = (state: RootState) => state.users.entities;
export const getUsersAllIds = (state: RootState) => state.users.allIds;

export const getUserByReviewIdFromProps = createSelector(
  [
    getUsersEntities,
    getReviewsEntities,
    getReviewIdFromProps,
  ],
  (usersEntities, reviewsEntities, reviewId) => {
    const review = reviewId ? reviewsEntities[reviewId] : undefined;

    return review ? usersEntities[review.userId] : undefined;
  },
);
