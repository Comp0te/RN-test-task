import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requestsReducer } from './requests/reducers';
import { authReducer } from './auth/reducers';
import { productsReducer } from './products/reducers';
import { reviewsReducer } from './reviews/reducers';
import { usersReducer } from './users/reducers';
import { reducer as formReducer } from 'redux-form';

import { requestsEpics } from './requests/epics';
import { authEpics } from './auth/epics';
import { productsEpics } from './products/epics';
import { reviewsEpics } from './reviews/epics';
import { usersEpics } from './users/epics';

export const rootReducer = combineReducers({
  requests: requestsReducer,
  auth: authReducer,
  products: productsReducer,
  reviews: reviewsReducer,
  users: usersReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const rootEpic = combineEpics(
  ...requestsEpics,
  ...authEpics,
  ...productsEpics,
  ...reviewsEpics,
  ...usersEpics,
);

const epicMiddleware = createEpicMiddleware();

const middleware = [
  epicMiddleware,
];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

epicMiddleware.run(rootEpic);

export default store;
