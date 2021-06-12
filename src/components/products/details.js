import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


const ProductDetails = props => {

  
  // console.log('products?', props.productAPI.products);
  let { id } = useParams();

  let product = props.productAPI.products.filter((item) => item._id === id);
  // console.log('filtered product?', product);
  let oneProduct = product[0];

  return (
    <>
    <h1>Product Detail</h1>
    <p>{oneProduct.name}</p>
    

    </>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories,
  cart: state.cart,
  productAPI: state.productAPI
})

// const mapDispatchToProps = (dispatch, getState) => ({ 
//   addToCart: (item) => dispatch(addToCart(item))
// });

export default connect(mapStateToProps)(ProductDetails);