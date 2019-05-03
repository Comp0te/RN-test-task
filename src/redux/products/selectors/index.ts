import { RootState } from '../../store';

export const getProductsEntities = (state: RootState) => state.products.entities;
export const getProductsAllIds = (state: RootState) => state.products.allIds;
