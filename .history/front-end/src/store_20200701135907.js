import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { productListReducer,  } from './redusers/productReducers';
import thunk from 'redux-thunk'

const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetails: peoduc
      
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store