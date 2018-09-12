import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import * as reducers from './impl/reducers';

export function initializeStore(initialState = {}) {
  return createStore(combineReducers(reducers), initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
