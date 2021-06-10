import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import catReducer from './categories.js';
import productReducer from './products.js';
import cartReducer from './cart.js';
import productAPI from './products-api';

const reducers = combineReducers({
  categories: catReducer, //use state.categories when you do mapStateToProps
  products: productReducer, //use state.products when you do mapStateToProps
  cart: cartReducer, //use state.cart when you do mapStateToProps
  productAPI: productAPI // use state.productAPI when you map
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();