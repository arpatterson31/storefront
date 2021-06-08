let initialState = {
  cart: []
}

export default function cartReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, payload]}

    default:
      return state;
  }
}


export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}