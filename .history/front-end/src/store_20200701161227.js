import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer, productDetailsReducer } from './redusers/productReducers';
import thunk from 'redux-thunk'

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: productDetailsReducer
      
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__.

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store