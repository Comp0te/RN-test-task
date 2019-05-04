import { RootState } from '../../../../../store';

export const getIsGetAllReviewsRequestLoading = (
  state: RootState,
) => state.requests.reviews.getAll.isLoading;
