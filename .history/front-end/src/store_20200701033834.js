import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productDetails,
})
const store = createStore(reducer, initialState)