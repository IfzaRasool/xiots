// store/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import dataReducer from './reducers';
// import postReducer from './Posts/postdata'
import postReducer from './actions';

const rootReducer = combineReducers({
  data: postReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
