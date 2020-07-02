import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      product: productListReducer,
})
const store = createStore(reducer, initialState)