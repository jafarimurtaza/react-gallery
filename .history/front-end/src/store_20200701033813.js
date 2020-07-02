import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productList: productListReducer,
})
const store = createStore(reducer, initialState)