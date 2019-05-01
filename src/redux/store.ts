import { createStore, applyMiddleware, combineReducers } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;

const rootEpic = combineEpics(
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
