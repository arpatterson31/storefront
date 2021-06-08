import React from 'react';
import { connect } from 'react-redux';

import { activate, inactivate } from '../../store/categories.js';
import { getFilteredProducts, allProducts } from '../../store/products.js';

const Products = props => {
  return (
    <section>

    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products
  
})

export default connect(mapStateToProps)(Products);