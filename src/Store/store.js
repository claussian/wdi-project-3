import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import bookReducer from '../Reducers/bookReducer.js'
import userReducer from '../Reducers/userReducer.js'


export let initStore = () => {

  const reducer = combineReducers( {
    books: bookReducer,
    user: userReducer
  });

  /* thunk middleware enables dispatch of functions as actions */
  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}