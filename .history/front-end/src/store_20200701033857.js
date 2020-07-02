import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetailsReducer: productDetailsReducer,
})
const 
const store = createStore(reducer, initialState)