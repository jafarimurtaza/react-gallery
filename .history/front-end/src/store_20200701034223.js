import { createStore, combineReducers, compose, applyMiddleware } from 'redux';


const initialState = {};
const reducer = combineReducers({
      productList: productListReducer,
      productDetailsReducer: productDetailsReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer, (applyMiddleware(thunk)));