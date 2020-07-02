import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productListReducer,
})
const store = createStore(reducer, initialState)