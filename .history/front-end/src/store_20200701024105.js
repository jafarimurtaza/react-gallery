import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList:d productListReducer,
})
const store = createStore(reducer, initialState)