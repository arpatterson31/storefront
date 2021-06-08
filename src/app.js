import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import SimpleCart from './components/cart/simplecart.js';

const App = () => {
  return(
    <>
    <Header />
    <SimpleCart />
    <Categories />
    <Products />
    <Footer />
    </>
  );
};

export default App;
