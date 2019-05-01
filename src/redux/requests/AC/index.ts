import * as login from '../requestsEntities/auth/login/AC';
import * as register from '../requestsEntities/auth/register/AC';
import * as getAllProducts from '../requestsEntities/products/getAll/AC';
import * as getAllReviews from '../requestsEntities/reviews/getAll/AC';
import * as postReview from '../requestsEntities/reviews/post/AC';

export const requestsAC = {
  login,
  register,
  getAllProducts,
  getAllReviews,
  postReview,
};