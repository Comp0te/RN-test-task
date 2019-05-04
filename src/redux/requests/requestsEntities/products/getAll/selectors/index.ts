import { RootState } from '../../../../../store';

export const getIsGetAllProductsRequestLoading = (
  state: RootState,
) => state.requests.products.getAll.isLoading;
