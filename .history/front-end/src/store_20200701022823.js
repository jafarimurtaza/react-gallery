import { createStore, combineReducers } from 'redux';

const initialState = {};
const reducer = combineReducers({
      productList: productList
})
const store = createStore(reducer, initialState)