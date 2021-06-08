import React from 'react';
import { connect } from 'react-redux';

import { activate, inactivate } from '../../store/categories.js';
import { getFilteredProducts, allProducts } from '../../store/products.js';

const Products = props => {
  return (
    <section>
      <h3>{props.categories.activeCategory}</h3>
      <p>{props.categories.activeCatDescription}</p>

      <ul>
        {props.products.activeProducts.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories
})

export default connect(mapStateToProps)(Products);