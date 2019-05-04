import { RootState } from '../../../../../store';

export const getIsPostReviewRequestLoading = (
  state: RootState,
) => state.requests.reviews.post.isLoading;
