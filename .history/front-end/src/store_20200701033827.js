import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDe: productListReducer,
})
const store = createStore(reducer, initialState)