import React from 'react';
import { connect } from 'react-redux';

import { activate, inactivate } from '../../store/categories.js';

const Category = props => {
  return (
    <section>
      <h3>Browse our Categories</h3>
      <ul>
        {props.categories.category.map(cat => (
          <li onClick={() => props.activate(cat.name)} key={cat.name}>{cat.displayName}</li>
        ))}
      </ul>
    </section>
  )
}

const mapStateToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = { activate, inactivate }

export default connect(mapStateToProps, mapDispatchToProps)(Category);