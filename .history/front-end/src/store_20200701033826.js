import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productD: productListReducer,
})
const store = createStore(reducer, initialState)