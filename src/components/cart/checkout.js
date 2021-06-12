import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { incrementRemoteData } from '../../store/cart';

const ShoppingCart = props => {
  return (
    <>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

const mapDispatchToProps = { incrementRemoteData }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);