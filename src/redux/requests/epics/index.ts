import { loginRequestEpic } from '../requestsEntities/auth/login/epics';
import { registerRequestEpic } from '../requestsEntities/auth/register/epics';
import { getAllProductsRequestEpic } from '../requestsEntities/products/getAll/epics';
import { getAllReviewsRequestEpic } from '../requestsEntities/reviews/getAll/epics';
import { postReviewRequestEpic } from '../requestsEntities/reviews/post/epics';

export const requestsEpics = [
  loginRequestEpic,
  registerRequestEpic,
  getAllProductsRequestEpic,
  getAllReviewsRequestEpic,
  postReviewRequestEpic,
];