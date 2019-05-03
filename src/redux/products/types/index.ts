import {ProductModel} from '../../../shared/models/product.model';

export interface ProductsState {
  entities: IEntities<ProductModel>;
  allIds: string[];
}