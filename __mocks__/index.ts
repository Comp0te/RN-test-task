import { AuthInput } from '../src/shared/services/auth.service';
import { AuthResponse } from '../src/redux/requests/types';
import { ProductModel } from '../src/shared/models/product.model';
import { ReviewResponse } from '../src/shared/models/review.model';
import { IReviewPostInput } from '../src/shared/services/reviews.service';

export const authInputMock: AuthInput = {
  username: 'Compote',
  password: 'password',
};

export const authResponseMock: AuthResponse = {
  success: true,
  token: 'token',
};

export const authResponseFailMock = {
  success: false,
  message: 'Ooops',
};

export const productMock: ProductModel = {
  id: 1,
  img: 'img',
  text: 'text',
  title: 'title',
};

export const reviewResponseMock: ReviewResponse = {
  id: 1,
  created_by: {
    id: 1,
    username: 'bla-bla',
  },
  product: 1,
  text: 'text',
  rate: 5,
};

export const reviewPostInputMock: IReviewPostInput = {
  text: 'text',
  rate: 2,
  product_id: 'id',
};