import { combineReducers } from 'redux';
import { reducer as loginReducer } from '../requestsEntities/auth/login/reducers';
import { reducer as registerReducer } from '../requestsEntities/auth/register/reducers';
import { reducer as getAllProductsReducer } from '../requestsEntities/products/getAll/reducers';
import { reducer as getAllReviewsReducer } from '../requestsEntities/reviews/getAll/reducers';
import { reducer as postReviewReducer } from '../requestsEntities/reviews/post/reducers';

export const requestsReducer = combineReducers({
  auth: combineReducers({
    login: loginReducer,
    register: registerReducer,
  }),
  products: combineReducers({
    getAll: getAllProductsReducer,
  }),
  reviews: combineReducers({
    getAll: getAllReviewsReducer,
    post: postReviewReducer,
  }),
});