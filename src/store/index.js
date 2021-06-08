import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import catReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';

const reducers = combineReducers({
  categories: catReducer, //use state.categories when you do mapStateToProps
  products: productReducer, //use state.products when you do mapStateToProps
  cart: cartReducer //use state.cart when you do mapStateToProps
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();