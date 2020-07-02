import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productd: productListReducer,
})
const store = createStore(reducer, initialState)