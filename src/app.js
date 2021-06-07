import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';

const App = () => {
  return(
    <>
    <Header />
    <h1>Hey girl hey!</h1>
    <Categories />
    <Footer />
    </>
  );
};

export default App;
