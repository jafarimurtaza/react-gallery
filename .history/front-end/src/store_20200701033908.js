import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetailsReducer: productDetailsReducer,
})
const composeE
const store = createStore(reducer, initialState)