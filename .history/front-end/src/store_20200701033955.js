import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetailsReducer: productDetailsReducer,
})
const composeEnhancer = window.__REDUX_DEV
const store = createStore(reducer, initialState)