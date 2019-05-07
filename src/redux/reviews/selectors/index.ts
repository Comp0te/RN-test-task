import { RootState } from '../../store';
import { OwnProps as ReviewItemProps } from '../../../shared/components/ReviewItem';
import { createSelector } from 'reselect';
import { getProductIdFromProps } from '../../products/selectors';

export const getReviewsEntities = (state: RootState) => state.reviews.entities;
export const getReviewsAllIds = (state: RootState) => state.reviews.allIds;

interface AverageResult {
  sum: number;
  count: number;
}

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

export const getAverageReviewRateOfProduct = createSelector(
  [
    getProductIdFromProps,
    getReviewsEntities,
  ],
  (productId, reviewsEntities) => {
    const averageResult = Object.values(reviewsEntities)
      .reduce<AverageResult>((acc, cur) => {
        if (cur.product === +productId) {
          return {
            sum: acc.sum + cur.rate,
            count: acc.count + 1,
          };
        }

        return acc;
      }, {sum: 0, count: 0});

    return averageResult.count && averageResult.sum ?
      Math.round(averageResult.sum / averageResult.count * 100) / 100 :
      0;
  },
);
