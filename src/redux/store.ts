import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { requestsReducer } from './requests/reducers';

import { requestsEpics } from './requests/epics';

export const rootReducer = combineReducers({
  requests: requestsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const rootEpic = combineEpics(
  ...requestsEpics,
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
