import { RootState } from '../../store';
import { createSelector } from 'reselect';
import { OwnProps as ProductItemProps } from '../../../shared/components/ProductItem';

export const getProductsEntities = (state: RootState) => state.products.entities;
export const getProductsAllIds = (state: RootState) => state.products.allIds;
export const getProductSearchQuery = (state: RootState) => state.products.searchQuery;

export const getProductIdFromProps = (
  state: RootState,
  props: ProductItemProps,
) => props.productId;

export const getProductByIdFromProps = createSelector(
  [
    getProductsEntities,
    getProductIdFromProps,
  ],
  (productsEntities, productId) => {
    return productId ? productsEntities[productId] : undefined;
  },
);

export const getFilteredProductsIds = createSelector(
  [
    getProductsAllIds,
    getProductsEntities,
    getProductSearchQuery,
  ],
  (allIds, productEntities, searchQuery) => {
    return searchQuery === '' ?
      allIds :
      allIds.reduce<string[]>((acc, id) => {
        const product = productEntities[id];

        return product && product.title.toLowerCase()
          .startsWith(searchQuery.toLowerCase()) ?
          acc.concat(id) :
          acc;
      }, []);
  },
);