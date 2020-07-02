import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      produc: productListReducer,
})
const store = createStore(reducer, initialState)