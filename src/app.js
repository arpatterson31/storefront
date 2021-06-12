import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import SimpleCart from './components/cart/simplecart.js';
import ProductDetails from './components/products/details.js';
import ShoppingCart from './components/cart/checkout.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <SimpleCart />
            <Categories />
            <Products />
          </Route>
          <Route exact path="/product/:id" component={ProductDetails} />      
          <Route exact path="/cart" component={ShoppingCart} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};


export default App;
